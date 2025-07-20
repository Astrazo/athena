// Typewriter Dialogue System for Escape Room
class TypewriterDialogue {
    constructor() {
        this.isActive = false;
        this.currentText = '';
        this.fullText = '';
        this.currentIndex = 0;
        this.speed = 30; // milliseconds per character
        this.lineDelay = 3000; // milliseconds to wait before progressing to the next line
        this.interval = null;
        this.onLineComplete = null;
        this.onLineSkip = null;
        this.isLastLineInSequence = false; // Track if this is the last line
        this.delayResolve = null;
        // Load auto-progress state from localStorage, default to false
        this.autoProgress = localStorage.getItem('dialogueAutoProgress') === 'true';
        this.autoProgressTimeout = null; // Timeout for auto-progress
        this.dialogueLog = []; // Array to store all dialogue history
        // Load log visibility state from localStorage, default to false
        this.logVisible = localStorage.getItem('dialogueLogVisible') === 'true';
        this.currentSequence = []; // Store current dialogue sequence
        this.currentSequenceIndex = 0; // Track current position in sequence
        this.currentSequenceOptions = {}; // Store options for current sequence
        
        this.createDialogueElements();
    }

    createDialogueElements() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'dialogue-overlay';
        document.body.appendChild(this.overlay);

        // Create dialogue container
        this.container = document.createElement('div');
        this.container.className = 'dialogue-container';
        this.container.innerHTML = `
            <div style="display: flex; gap: 10px; margin-bottom: 10px; position: relative; justify-content: space-between; align-items: center;">
                <button id="auto-toggle" class="dialogue-auto-toggle">Auto: OFF</button>
                <div style="display: flex; gap: 10px;">
                    <button id="log-toggle" class="dialogue-log-toggle">Log</button>
                    <button id="skip" class="dialogue-skip" style="position: static;">Skip</button>
                    <button id="skip-all" class="dialogue-skip" style="position: static;">Skip All</button>
                </div>
            </div>
            <p class="dialogue-text"></p>
            <button class="dialogue-continue">Continue</button>
        `;
        document.body.appendChild(this.container);

        // Create dialogue log container
        this.logContainer = document.createElement('div');
        this.logContainer.className = 'dialogue-log-container';
        this.logContainer.innerHTML = `
            <div class="dialogue-log-header">
                <h3>Dialogue Log</h3>
                <button id="log-close" class="dialogue-log-close">×</button>
            </div>
            <div class="dialogue-log-content"></div>
        `;
        document.body.appendChild(this.logContainer);

        // Create persistent log button (always visible)
        this.persistentLogButton = document.createElement('button');
        this.persistentLogButton.className = 'persistent-log-button';
        this.persistentLogButton.innerHTML = '📖';
        this.persistentLogButton.title = 'Dialogue Log';
        document.body.appendChild(this.persistentLogButton);

        // Add event listener for persistent log button
        this.persistentLogButton.addEventListener("click", (event) => {
            event.stopPropagation();
            this.toggleDialogueLog();
        });

        // Get references to elements
        this.textElement = this.container.querySelector(".dialogue-text");
        this.autoToggleButton = this.container.querySelector("#auto-toggle");
        this.logToggleButton = this.container.querySelector("#log-toggle");
        this.skipButton = this.container.querySelector("#skip");
        this.skipAllButton = this.container.querySelector("#skip-all");
        this.continueButton = this.container.querySelector(".dialogue-continue");
        this.logContent = this.logContainer.querySelector(".dialogue-log-content");
        this.logCloseButton = this.logContainer.querySelector("#log-close");

        // Set initial auto-toggle button state based on saved preference
        this.autoToggleButton.textContent = this.autoProgress ? "Auto: ON" : "Auto: OFF";
        this.autoToggleButton.classList.toggle("active", this.autoProgress);

        // Set initial log container visibility based on saved preference
        if (this.logVisible) {
            this.logContainer.style.display = 'block';
        }

        // Add event listeners
        // Auto-toggle button
        this.autoToggleButton.addEventListener("click", (event) => {
            event.stopPropagation();
            this.toggleAutoProgress();
        });

        // Log-toggle button
        this.logToggleButton.addEventListener("click", (event) => {
            event.stopPropagation();
            this.toggleDialogueLog();
        });

        // Log close button
        this.logCloseButton.addEventListener("click", (event) => {
            event.stopPropagation();
            this.hideDialogueLog();
        });

        // Continue button 
        this.continueButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent this click from being sent to the container click as well

            // Check if it's the last line
            if (this.isLastLineInSequence) {
                    // If a custom on continue has been provided, run that, otherwise just hide
                if (this.onContinue) {
                    this.onContinue(); // Call custom continue function
                    this.hide();
                } 
                else {
                    this.hide(); // Default behavior
                }
            }
            else {
                this.nextLine()
            }

            
        });

        // Skip all
        this.skipAllButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent this click from being sent to the container click as well
            this.skipAll()
        });

        // Skip button
        this.skipButton.addEventListener("click", (event) => {
            // Prevent this click from being sent to the container click as well
            event.stopPropagation(); 
            if (this.isLineComplete) {
                this.nextLine();
            } 
            else {
                this.lineSkip();
            }
        });
        
        // Allow clicking overlay to continue
        this.overlay.addEventListener("click", () => {
            if (this.isLineComplete) {
                this.nextLine();
            } 
            else {
                this.lineSkip();
            }
        });

        // Allow clicking on the dialogue container to continue 
        this.container.addEventListener("click", () => {
            if (this.isLineComplete) {
                this.nextLine();
            } 
            else {
                this.lineSkip();
            }
        });
    }

    // --- Public Interface ---
    // Show multiple dialogue lines in sequence
    async showSequence(dialogueLines, options = {}) {
        // Create an AbortController to cancel promises
        this.sequenceController = new AbortController();

        // Handle both single string and array of strings
        const lines = Array.isArray(dialogueLines) ? dialogueLines : [dialogueLines];
        
        // Store sequence data for skip all functionality
        this.currentSequence = lines;
        this.currentSequenceIndex = 0;
        this.currentSequenceOptions = options;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const isLastLine = i === lines.length - 1;
            
            // Update current sequence index
            this.currentSequenceIndex = i;
            
            await new Promise((resolve, reject) => {
                // Check if cancelled before starting
                if (this.sequenceController.signal.aborted) {
                    reject(new Error("Cancelled"));
                    return;
                }

                this.show(line, {
                    ...options,
                    isLastLineInSequence: isLastLine, // Pass this flag to show()
                    onLineComplete: isLastLine ? (options["onLineComplete"] || resolve) : resolve, // set what this.onComplete will do in complete function
                    onLineSkip: isLastLine ? (options["onLineSkip"] || resolve) : resolve // set what this.onSkip will do in skip function
                });
            }).catch(() => {
                return Promise.reject(new Error("Cancelled"))
            });

            if (this.sequenceController.signal.aborted) {
                break;
            }

            // If auto-progress is enabled, add delay between lines (except after the last line)
            if (!isLastLine && this.autoProgress) {
                try {
                    await new Promise((resolve, reject) => {
                        this.delayResolve = resolve;
                        const timeout = setTimeout(resolve, this.lineDelay);
                        
                        // Listen for abort signal
                        this.sequenceController.signal.addEventListener("abort", () => {
                            clearTimeout(timeout);
                            reject(new Error("Cancelled"));
                        });
                    });
                } catch (error) {
                    if (error.message === "Cancelled") {
                        break;
                    }
                }
            } else if (!isLastLine && !this.autoProgress) {
                // If auto-progress is disabled, wait for manual progression
                try {
                    await new Promise((resolve, reject) => {
                        this.delayResolve = resolve;
                        
                        // Listen for abort signal
                        this.sequenceController.signal.addEventListener("abort", () => {
                            reject(new Error("Cancelled"));
                        });
                    });
                } catch (error) {
                    if (error.message === "Cancelled") {
                        break;
                    }
                }
            }
        }
        
        // Clear sequence data after completion
        this.currentSequence = [];
        this.currentSequenceIndex = 0;
        this.currentSequenceOptions = {};
    }

    // Function called for every line in show sequence
    show(text, options = {}) {
        if (this.isActive) {
            this.hide(true);
        }

        this.isActive = true;
        this.isLineComplete = false;
        this.fullText = text;
        this.currentText = '';
        this.currentIndex = 0;
        this.speed = options.speed || this.speed;
        this.isLastLineInSequence = options.isLastLineInSequence || false;

        this.onLineComplete = options.onLineComplete || null;
        this.onContinue = options.onContinue || null;
        this.onLineSkip = options.onLineSkip || null;

        // Add to dialogue log
        this.addToDialogueLog(text, options.characterName);

        this.overlay.style.display = 'block';
        this.container.style.display = 'block';
        this.continueButton.style.display = 'none';
        
        // Hide persistent log button during dialogue
        this.persistentLogButton.style.display = 'none';

        this.type();
    }

    // Function called to hide and reset the dialogue box
    hide(clearTextOnly = false) {
        this.textElement.textContent = '';
        this.currentText = '';
        this.fullText = '';
        this.textElement.style.setProperty('--cursor-visible', 'none');

        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }

        // Clear auto-progress timeout
        this.clearAutoProgressTimeout();

        console.log("Dialogue cleared.");

        if (!clearTextOnly) {
            this.isActive = false;
            this.overlay.style.display = 'none';
            this.container.style.display = 'none';
            // Show persistent log button when dialogue is hidden
            this.persistentLogButton.style.display = 'flex';
            console.log("Dialogue box hidden.");
        }
    }

    // Function used to handle progressing to the next line
    nextLine() {
        if (this.isLastLineInSequence) {
            if (this.onContinue) {
                this.onContinue();
                this.hide();
            } else {
                this.hide();
            }
        } else {
            if (this.delayResolve) {
                this.delayResolve();
                this.delayResolve = null;
            }
        }
    }

    // Typing Mechanism
    type() {
        const typeNextChar = () => {
            if (!this.isActive) return;

            if (this.currentIndex < this.fullText.length) {
                this.currentText += this.fullText[this.currentIndex];
                this.textElement.textContent = this.currentText;
                this.currentIndex++;
                this.typingTimeout = setTimeout(typeNextChar, this.speed);
            } else {
                this.lineComplete();
            }
        };

        typeNextChar();
    }

    // Function to handle what happens when a line is completed
    lineComplete() {
        this.isLineComplete = true;
        this.textElement.style.setProperty('--cursor-visible', 'inline-block');

        // Show continue button on the last line, or on intermediate lines when auto-progress is off
        if (this.isLastLineInSequence || !this.autoProgress) {
            console.log("Dialogue line completed - showing continue button.");
            this.continueButton.style.display = 'block';
        }

        if (this.onLineComplete) {
            console.log("Dialogue line completed.");
            this.onLineComplete();
        }
    }

    // Toggle auto-progress functionality
    toggleAutoProgress() {
        this.autoProgress = !this.autoProgress;
        this.autoToggleButton.textContent = this.autoProgress ? "Auto: ON" : "Auto: OFF";
        this.autoToggleButton.classList.toggle("active", this.autoProgress);
        
        // Save auto-progress state to localStorage
        localStorage.setItem('dialogueAutoProgress', this.autoProgress.toString());
        
        // If auto is turned on and we're currently waiting for manual progression, trigger it
        if (this.autoProgress && this.isLineComplete && !this.isLastLineInSequence && this.delayResolve) {
            this.delayResolve();
            this.delayResolve = null;
        }
    }

    // Clear auto-progress timeout
    clearAutoProgressTimeout() {
        if (this.autoProgressTimeout) {
            clearTimeout(this.autoProgressTimeout);
            this.autoProgressTimeout = null;
        }
    }

    // Add dialogue to log
    addToDialogueLog(text, characterName = null) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = {
            text: text,
            character: characterName,
            timestamp: timestamp
        };
        this.dialogueLog.push(logEntry);
        this.updateDialogueLogDisplay();
    }

    // Update dialogue log display
    updateDialogueLogDisplay() {
        this.logContent.innerHTML = '';
        
        if (this.dialogueLog.length === 0) {
            // Show "No Dialogue Shown" message when log is empty
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'dialogue-log-empty';
            emptyMessage.innerHTML = `
                <div class="dialogue-log-text">No dialogue.</div>
            `;
            this.logContent.appendChild(emptyMessage);
        } else {
            this.dialogueLog.forEach((entry, index) => {
                const logEntry = document.createElement('div');
                logEntry.className = 'dialogue-log-entry';
                
                let displayText = entry.text;
                if (entry.character) {
                    displayText = `${entry.character}: ${entry.text}`;
                }
                
                logEntry.innerHTML = `
                    <div class="dialogue-log-text">${displayText}</div>
                    <div class="dialogue-log-timestamp">${entry.timestamp}</div>
                `;
                this.logContent.appendChild(logEntry);
            });
        }
        
        // Scroll to bottom
        this.logContent.scrollTop = this.logContent.scrollHeight;
    }

    // Toggle dialogue log visibility
    toggleDialogueLog() {
        if (this.logVisible) {
            this.hideDialogueLog();
        } else {
            this.showDialogueLog();
        }
    }

    // Show dialogue log
    showDialogueLog() {
        this.logVisible = true;
        this.logContainer.style.display = 'block';
        this.updateDialogueLogDisplay();
        // Save log visibility state to localStorage
        localStorage.setItem('dialogueLogVisible', 'true');
    }

    // Hide dialogue log
    hideDialogueLog() {
        this.logVisible = false;
        this.logContainer.style.display = 'none';
        // Save log visibility state to localStorage
        localStorage.setItem('dialogueLogVisible', 'false');
    }

    // Function used to skip one line
    lineSkip() {
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }

        this.currentText = this.fullText;
        this.textElement.textContent = this.currentText;

        this.lineComplete();

        if (this.onLineSkip) {
            this.onLineSkip();
        }

        console.log("Skip called.");
    }

    // Function used to skip all dialogue
    skipAll() {
        // Add remaining dialogue lines to log before skipping
        if (this.currentSequence && this.currentSequence.length > 0) {
            const remainingLines = this.currentSequence.slice(this.currentSequenceIndex + 1);
            remainingLines.forEach(line => {
                this.addToDialogueLog(line, this.currentSequenceOptions.characterName);
            });
        }

        if (this.interval) {
            clearInterval(this.interval);
        }

        // Clear auto-progress timeout
        this.clearAutoProgressTimeout();

        if (this.sequenceController) {
            this.sequenceController.abort();
        }

        if (this.onLineComplete) {
            this.onLineComplete();
        }

        if (this.onLineSkip) {
            this.onLineSkip();
        }

        if (this.onContinue) {
            this.onContinue();
        }

        // Clear sequence data
        this.currentSequence = [];
        this.currentSequenceIndex = 0;
        this.currentSequenceOptions = {};

        this.hide();
        console.log("All dialogue skipped and remaining lines added to log.");
    }

    // Method to show dialogue with character name
    showWithCharacter(characterName, text, options = {}) {
        const formattedText = `${characterName}: ${text}`;
        this.show(formattedText, { ...options, characterName: characterName });
    }
}

// Create global instance
window.typewriter = new TypewriterDialogue();

// Export for module use
export default TypewriterDialogue; 