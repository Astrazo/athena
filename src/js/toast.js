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

    show(message, options = {}) {
        const {
            type = 'info',
            duration = 6000,
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
            closeBtn.innerHTML = 'x';
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

    dismissAll() {
        const toasts = this.toastContainer.querySelectorAll('.toast');
        toasts.forEach(toast => this.dismiss(toast));
    }

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