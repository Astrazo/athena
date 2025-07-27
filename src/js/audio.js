/**
 * Audio Manager for Athena Escape Room
 * Handles sound effects and audio feedback for enhanced immersion
 */

class AudioManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.isEnabled = localStorage.getItem('audioEnabled') !== 'false'; // Default to enabled
        this.volume = parseFloat(localStorage.getItem('audioVolume')) || 0.7; // Default 70% volume
        
        this.init();
    }

    async init() {
        try {
            // Initialize Web Audio API
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('Audio context created, state:', this.audioContext.state);
            
            // Create default sounds
            await this.createDefaultSounds();
            
            console.log('Audio Manager initialized successfully, enabled:', this.isEnabled);
        } catch (error) {
            console.warn('Audio Manager initialization failed:', error);
            this.isEnabled = false;
        }
    }

    async createDefaultSounds() {
        // Create transmission sound (sci-fi beep sequence)
        this.sounds.transmission = this.createTransmissionSound();
        
        // Create notification sound (gentle ping)
        this.sounds.notification = this.createNotificationSound();
        
        // Create success sound (positive chime)
        this.sounds.success = this.createSuccessSound();
        
        // Create error sound (warning tone)
        this.sounds.error = this.createErrorSound();
        
        // Create ambient hum (background atmosphere)
        this.sounds.ambient = this.createAmbientSound();
    }

    createTransmissionSound() {
        return () => {
            if (!this.isEnabled || !this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const duration = 2.0;
            
            // Create oscillator for the main beep
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Set up the transmission beep pattern
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.setValueAtTime(1200, now + 0.1);
            oscillator.frequency.setValueAtTime(800, now + 0.2);
            oscillator.frequency.setValueAtTime(1200, now + 0.3);
            oscillator.frequency.setValueAtTime(800, now + 0.4);
            
            // Create envelope for the beep
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            
            // Second beep
            gainNode.gain.setValueAtTime(0, now + 0.2);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.25);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            
            // Third beep
            gainNode.gain.setValueAtTime(0, now + 0.4);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.45);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
            
            oscillator.start(now);
            oscillator.stop(now + duration);
        };
    }

    createNotificationSound() {
        return () => {
            console.log('Notification sound function called, enabled:', this.isEnabled, 'context:', !!this.audioContext);
            if (!this.isEnabled || !this.audioContext) {
                console.log('Audio disabled or no context, returning');
                return;
            }
            
            console.log('Creating notification sound...');
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(1000, now);
            oscillator.frequency.setValueAtTime(1200, now + 0.1);
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.2, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            console.log('Notification sound started');
        };
    }

    createSuccessSound() {
        return () => {
            if (!this.isEnabled || !this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Ascending success tone
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.setValueAtTime(1000, now + 0.1);
            oscillator.frequency.setValueAtTime(1200, now + 0.2);
            oscillator.frequency.setValueAtTime(1400, now + 0.3);
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.25, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            
            oscillator.start(now);
            oscillator.stop(now + 0.5);
        };
    }

    createErrorSound() {
        return () => {
            if (!this.isEnabled || !this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Descending error tone
            oscillator.frequency.setValueAtTime(600, now);
            oscillator.frequency.setValueAtTime(500, now + 0.1);
            oscillator.frequency.setValueAtTime(400, now + 0.2);
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.2, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            
            oscillator.start(now);
            oscillator.stop(now + 0.4);
        };
    }

    createAmbientSound() {
        return () => {
            if (!this.isEnabled || !this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Low frequency ambient hum
            oscillator.frequency.setValueAtTime(60, now);
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume * 0.05, now + 1);
            
            oscillator.start(now);
            oscillator.stop(now + 5);
        };
    }

    // Play a specific sound
    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        } else {
            console.warn(`Sound '${soundName}' not found`);
        }
    }

    // Play transmission sound
    playTransmission() {
        this.play('transmission');
    }

    // Play notification sound
    playNotification() {
        console.log('Playing notification sound, audio enabled:', this.isEnabled);
        this.play('notification');
    }

    // Play success sound
    playSuccess() {
        this.play('success');
    }

    // Play error sound
    playError() {
        this.play('error');
    }

    // Play ambient sound
    playAmbient() {
        this.play('ambient');
    }

    // Toggle audio on/off
    toggle() {
        this.isEnabled = !this.isEnabled;
        localStorage.setItem('audioEnabled', this.isEnabled);
        return this.isEnabled;
    }

    // Set volume (0.0 to 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        localStorage.setItem('audioVolume', this.volume);
    }

    // Get current volume
    getVolume() {
        return this.volume;
    }

    // Check if audio is enabled
    isAudioEnabled() {
        return this.isEnabled;
    }

    // Resume audio context (needed for some browsers)
    resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    // Test function to verify audio is working
    testAudio() {
        console.log('Testing audio system...');
        console.log('Audio enabled:', this.isEnabled);
        console.log('Audio context state:', this.audioContext?.state);
        console.log('Volume:', this.volume);
        
        if (this.audioContext && this.audioContext.state === 'suspended') {
            console.log('Audio context suspended, attempting to resume...');
            this.audioContext.resume().then(() => {
                console.log('Audio context resumed, playing test sound...');
                this.playNotification();
            });
        } else {
            console.log('Playing test notification sound...');
            this.playNotification();
        }
    }
}

// Create singleton instance
const audioManager = new AudioManager();

// Export the audio manager
export default audioManager;

// Export individual play functions for convenience
export const playTransmission = () => audioManager.playTransmission();
export const playNotification = () => audioManager.playNotification();
export const playSuccess = () => audioManager.playSuccess();
export const playError = () => audioManager.playError();
export const playAmbient = () => audioManager.playAmbient(); 