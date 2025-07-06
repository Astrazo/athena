// Typewriter Dialogue System for Escape Room
class TypewriterDialogue {
    constructor() {
        this.isActive = false;
        this.currentText = '';
        this.fullText = '';
        this.currentIndex = 0;
        this.speed = 50; // milliseconds per character
        this.interval = null;
        this.onLineComplete = null;
        this.onLineSkip = null;
        this.isLastInSequence = false; // Track if this is the last line
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
                this.skip();
            }
        });
        
        // Allow clicking overlay to continue
        this.overlay.addEventListener("click", () => {
            if (this.isLineComplete) {
                this.nextLine();
            } 
            else {
                this.skip();
            }
        });

        // Allow clicking on the dialogue container to continue 
        this.container.addEventListener("click", () => {
            if (this.isLineComplete) {
                this.nextLine();
            } 
            else {
                this.skip();
            }
        });
    }

    show(text, options = {}) {
        if (this.isActive) {
            this.hide();
        }

        this.isActive = true;
        this.isLineComplete = false;
        this.fullText = text;
        this.currentText = '';
        this.currentIndex = 0;
        this.speed = options.speed || 50;
        this.onLineComplete = options.onComplete || null;
        this.onContinue = options.onContinue || null;
        this.onLineSkip = options.onLineSkip || null;
        this.isLastInSequence = options.isLastInSequence || false;

        // Show elements
        this.overlay.style.display = 'block';
        this.container.style.display = 'block';
        this.continueButton.style.display = 'none';

        // Start typing
        this.type();
    }

    /*type() {
        this.interval = setInterval(() => {
            if (this.currentIndex < this.fullText.length) {
                this.currentText += this.fullText[this.currentIndex];
                this.textElement.textContent = this.currentText;
                this.currentIndex++;
            } else {
                this.complete();
            }
        }, this.speed);
    }*/

    type() {
        const typeNextChar = () => {
            // Check if we've been cancelled (skip was called)
            if (!this.isActive) {
                return;
            }
            
            if (this.currentIndex < this.fullText.length) {
                this.currentText += this.fullText[this.currentIndex];
                this.textElement.textContent = this.currentText;
                this.currentIndex++;
                // Schedule the next character
                this.typingTimeout = setTimeout(typeNextChar, this.speed);
            } else {
                this.complete();
            }
        };
        
        // Start the typing sequence
        typeNextChar();
    }

    skip() {
        // Stop the typing animation timer
        // Stop the typing animation timer
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
            this.typingTimeout = null;
        }
        
        // Show the complete text immediately
        this.currentText = this.fullText;
        this.textElement.textContent = this.currentText;
        // Mark as complete and show cursor
        this.complete();
        
        // Call skip callback if provided
        if (this.onLineSkip) {
            this.onLineSkip();
        }

        console.log("Skip called.")
    }

    nextLine() {
        // If it's the last line, and skip is called after line completion, either hide or run custom continue funtion
        if (this.isLastInSequence) {
            if (this.onContinue) {
                this.onContinue();
                this.hide();
            }
            else {
                this.hide()
            }
        }
        else {
            // If we're currently waiting for the next line of code, end the wait so it moves on
            if (this.delayResolve) {
                this.delayResolve();
                this.delayResolve = null;
            }
        }
    }

    skipAll() {
        // Stop the typing animation timer
        if (this.interval) {
            clearInterval(this.interval);
        }
    
        // Cancel any ongoing sequence
        if (this.sequenceController) {
            this.sequenceController.abort();
        }
    
        // Call completion callbacks to properly finish the sequence
        if (this.onLineComplete) {
            this.onLineComplete();
        }
        
        if (this.onLineSkip) {
            this.onLineSkip();
        }
    
        // Hide and reset everything
        this.hide();

        console.log("All dialogue skipped.")
    }

    complete() {
        this.isLineComplete = true;
        
        // Add cursor as pseudo-element using CSS
        this.textElement.style.setProperty('--cursor-visible', 'inline-block');
        
        // Only show continue button if this is the last line in sequence
        if (this.isLastInSequence) {
            this.continueButton.style.display = 'block';
        }
        
        if (this.onLineComplete) {
            this.onLineComplete();
        }
    }

    hide() {
        this.isActive = false;
        this.overlay.style.display = 'none';
        this.container.style.display = 'none';

        // Clear the text content
        this.textElement.textContent = '';
        this.currentText = '';
        this.fullText = '';

        // Hide cursor
        this.textElement.style.setProperty('--cursor-visible', 'none');
        
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }

        console.log("Dialogue hidden and cleared.")
    }

    // Show multiple dialogue lines in sequence
    async showSequence(dialogueLines, options = {}) {
        // Create an AbortController to cancel promises
        this.sequenceController = new AbortController();


        for (let i = 0; i < dialogueLines.length; i++) {
            const line = dialogueLines[i];
            const isLast = i === dialogueLines.length - 1;
            
            await new Promise((resolve) => {
                // Check if cancelled before starting
                if (this.sequenceController.signal.aborted) {
                    reject(new Error("Cancelled"));
                    return;
                }

                this.show(line, {
                    ...options,
                    isLastInSequence: isLast, // Pass this flag to show()
                    onComplete: isLast ? options.onComplete : resolve, // set what this.onComplete will do in complete function
                    onLineSkip: isLast ? options.onLineSkip : resolve // set what this.onSkip will do in skip function
                });
            }).catch(() => {
                return Promise.reject(new Error("Cancelled"))
            });

            if (this.sequenceController.signal.aborted) {
                break;
            }

            // Add 2-second delay between lines (except after the last line)
            if (!isLast) {
                try {
                    await new Promise((resolve, reject) => {
                        this.delayResolve = resolve;
                        const timeout = setTimeout(resolve, 2000);
                        
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