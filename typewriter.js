// Typewriter Dialogue System for Escape Room
class TypewriterDialogue {
    constructor() {
        this.isActive = false;
        this.currentText = '';
        this.fullText = '';
        this.currentIndex = 0;
        this.speed = 50; // milliseconds per character
        this.interval = null;
        this.onComplete = null;
        this.onSkip = null;
        this.isLastInSequence = false; // Track if this is the last line
        
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
            <span class="dialogue-cursor"></span>
            <button class="dialogue-continue">Continue</button>
        `;
        document.body.appendChild(this.container);

        // Get references to elements
        this.textElement = this.container.querySelector('.dialogue-text');
        this.cursorElement = this.container.querySelector('.dialogue-cursor');
        this.skipButton = this.container.querySelector('#skip');
        this.skipAllButton = this.container.querySelector('#skip-all');
        this.continueButton = this.container.querySelector('.dialogue-continue');

        // Add event listeners
        this.skipButton.addEventListener('click', () => this.skip());
        this.skipAllButton.addEventListener('click', () => this.skipAll());
        this.continueButton.addEventListener('click', () => {
            if (this.onContinue) {
                this.onContinue(); // Call custom continue function
            } else {
                this.hide(); // Default behavior
            }
        });
        
        // Allow clicking overlay to continue
        this.overlay.addEventListener('click', () => {
            if (this.isComplete) {
                this.hide();
            } else {
                this.skip();
            }
        });
    }

    show(text, options = {}) {
        if (this.isActive) {
            this.hide();
        }

        this.isActive = true;
        this.isComplete = false;
        this.fullText = text;
        this.currentText = '';
        this.currentIndex = 0;
        this.speed = options.speed || 50;
        this.onComplete = options.onComplete || null;
        this.onContinue = options.onContinue || null;
        this.onSkip = options.onSkip || null;
        this.isLastInSequence = options.isLastInSequence || false;

        // Show elements
        this.overlay.style.display = 'block';
        this.container.style.display = 'block';
        this.continueButton.style.display = 'none';
        this.cursorElement.style.display = 'none'; // Hide cursor during typing

        // Start typing
        this.type();
    }

    type() {
        this.interval = setInterval(() => {
            if (this.currentIndex < this.fullText.length) {
                this.currentText += this.fullText[this.currentIndex];
                this.textElement.textContent = this.currentText;
                this.currentIndex++;
            } else {
                this.complete();
            }
        }, this.speed);
    }

    skip() {
        // Stop the typing animation timer
        if (this.interval) {
            clearInterval(this.interval);
        }
        
        // Show the complete text immediately
        this.currentText = this.fullText;
        this.textElement.textContent = this.currentText;
        // Mark as complete and show cursor
        this.complete();
        
        // Call skip callback if provided
        if (this.onSkip) {
            this.onSkip();
        }
    }

    skipAll() {
        // Stop the typing animation timer
        if (this.interval) {
            clearInterval(this.interval);
        }
        
        // Just hide the dialogue box
        this.hide()
    
        /*
        // Show the complete text immediately
        this.currentText = this.fullText;
        this.textElement.textContent = this.currentText;
        // Mark as complete and show cursor
        this.complete();
        
        // Call onComplete to finish the entire dialogue sequence
        if (this.onComplete) {
            this.onComplete();
        }
        
        // Call skip callback if provided
        if (this.onSkip) {
            this.onSkip();
        }*/
    }

    complete() {
        this.isComplete = true;
        
        // Show cursor at the end of the completed text
        this.cursorElement.style.display = 'inline-block';
        
        // Only show continue button if this is the last line in sequence
        if (this.isLastInSequence) {
            this.continueButton.style.display = 'block';
        }
        
        if (this.onComplete) {
            this.onComplete();
        }
    }

    hide() {
        this.isActive = false;
        this.overlay.style.display = 'none';
        this.container.style.display = 'none';
        
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    // Show multiple dialogue lines in sequence
    async showSequence(dialogueLines, options = {}) {
        for (let i = 0; i < dialogueLines.length; i++) {
            const line = dialogueLines[i];
            const isLast = i === dialogueLines.length - 1;
            
            await new Promise((resolve) => {
                this.show(line, {
                    ...options,
                    isLastInSequence: isLast, // Pass this flag to show()
                    onComplete: isLast ? options.onComplete : resolve, // set what this.onComplete will do in complete function
                    onSkip: isLast ? options.onSkip : resolve // set what this.onSkip will do in skip function
                });
            });

            // Add 2-second delay between lines (except after the last line)
            if (!isLast) {
                await new Promise(resolve => setTimeout(resolve, 2000));
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