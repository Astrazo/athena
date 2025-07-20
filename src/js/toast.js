/**
 * Toast Notification System for Athena
 * Provides consistent toast notifications across all game screens
 */

class Toast {
    constructor() {
        this.toastContainer = null;
        this.init();
    }

    init() {
        // Create toast container if it doesn't exist
        if (!document.getElementById('toast-container')) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.id = 'toast-container';
            this.toastContainer.className = 'toast-container';
            document.body.appendChild(this.toastContainer);
        } else {
            this.toastContainer = document.getElementById('toast-container');
        }
    }

    /**
     * Show a toast notification
     * @param {string} message - The message to display
     * @param {Object} options - Toast options
     * @param {string} options.type - 'success', 'error', 'warning', 'info' (default: 'info')
     * @param {number} options.duration - Duration in milliseconds (default: 4000)
     * @param {boolean} options.dismissible - Whether the toast can be dismissed (default: true)
     */
    show(message, options = {}) {
        const {
            type = 'info',
            duration = 4000,
            dismissible = true
        } = options;

        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // Create toast content
        const toastContent = document.createElement('div');
        toastContent.className = 'toast-content';
        
        // Create status light
        const statusLight = document.createElement('div');
        statusLight.className = 'toast-status-light';
        
        // Create message text
        const messageText = document.createElement('span');
        messageText.className = 'toast-message';
        messageText.textContent = message;
        
        // Create close button if dismissible
        if (dismissible) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'toast-close';
            closeBtn.innerHTML = '×';
            closeBtn.addEventListener('click', () => this.dismiss(toast));
            toastContent.appendChild(closeBtn);
        }
        
        // Assemble toast
        toastContent.appendChild(statusLight);
        toastContent.appendChild(messageText);
        toast.appendChild(toastContent);
        
        // Add to container
        this.toastContainer.appendChild(toast);
        
        // Trigger entrance animation
        setTimeout(() => {
            toast.classList.add('toast-show');
        }, 10);
        
        // Auto-dismiss after duration
        if (duration > 0) {
            setTimeout(() => {
                this.dismiss(toast);
            }, duration);
        }
        
        return toast;
    }

    /**
     * Dismiss a specific toast
     * @param {HTMLElement} toast - The toast element to dismiss
     */
    dismiss(toast) {
        if (toast && toast.parentNode) {
            toast.classList.add('toast-hide');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }
    }

    /**
     * Dismiss all toasts
     */
    dismissAll() {
        const toasts = this.toastContainer.querySelectorAll('.toast');
        toasts.forEach(toast => this.dismiss(toast));
    }

    /**
     * Convenience methods for different toast types
     */
    success(message, options = {}) {
        return this.show(message, { ...options, type: 'success' });
    }

    error(message, options = {}) {
        return this.show(message, { ...options, type: 'error' });
    }

    warning(message, options = {}) {
        return this.show(message, { ...options, type: 'warning' });
    }

    info(message, options = {}) {
        return this.show(message, { ...options, type: 'info' });
    }
}

// Create global toast instance
const toast = new Toast();

// Export for module use
export default toast; 