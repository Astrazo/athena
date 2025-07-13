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
            <div style="display: flex; gap: 10px; margin-bottom: 10px; position: relative; justify-content: flex-start;">
                <button id="skip" class="dialogue-skip" style="position: static;">Skip</button>
                <button id="skip-all" class="dialogue-skip" style="position: static;">Skip All</button>
            </div>
            <p class="dialogue-text"></p>
            <button class="dialogue-continue">Continue</button>
        `;
        document.body.appendChild(this.container);

        // Get references to elements
        this.textElement = this.container.querySelector(".dialogue-text");
        this.skipButton = this.container.querySelector("#skip");
        this.skipAllButton = this.container.querySelector("#skip-all");
        this.continueButton = this.container.querySelector(".dialogue-continue");

        // Add event listeners
        // Continue button 
        this.continueButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent this click from being sent to the container click as well

            // If a custom on continue has been provided, run that, otherwise just hide
            if (this.onContinue) {
                this.onContinue(); // Call custom continue function
                this.hide();
            } 
            else {
                this.hide(); // Default behavior
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

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const isLastLine = i === lines.length - 1;
            
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

            // Add 2-second delay between lines (except after the last line)
            if (!isLastLine) {
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
            }
        }
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

        this.overlay.style.display = 'block';
        this.container.style.display = 'block';
        this.continueButton.style.display = 'none';

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

        console.log("Dialogue cleared.");

        if (!clearTextOnly) {
            this.isActive = false;
            this.overlay.style.display = 'none';
            this.container.style.display = 'none';
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

        if (this.isLastLineInSequence) {
            console.log("Last dialogue line completed.");
            this.continueButton.style.display = 'block';
        }

        if (this.onLineComplete) {
            console.log("Dialogue line completed.");
            this.onLineComplete();
        }
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
        if (this.interval) {
            clearInterval(this.interval);
        }

        if (this.sequenceController) {
            this.sequenceController.abort();
        }

        if (this.onLineComplete) {
            this.onLineComplete();
        }

        if (this.onLineSkip) {
            this.onLineSkip();
        }

        this.hide();
        console.log("All dialogue skipped.");
    }

    // Method to show dialogue with character name
    showWithCharacter(characterName, text, options = {}) {
        const formattedText = `${characterName}: ${text}`;
        this.show(formattedText, options);
    }
}

// Create global instance
window.typewriter = new TypewriterDialogue();

// Export for module use
export default TypewriterDialogue; 