// View Counter for Blog Posts
// Tracks page views and stores them in localStorage

class ViewCounter {
    constructor() {
        this.storageKey = 'blog_view_counts';
        this.currentPost = this.getCurrentPostSlug();
        this.init();
    }

    getCurrentPostSlug() {
        // Extract post slug from URL
        const path = window.location.pathname;
        const match = path.match(/\/blog\/(\d{4}-\d{2}-\d{2}-[^\/]+)/);
        return match ? match[1] : null;
    }

    init() {
        if (this.currentPost) {
            this.incrementViewCount();
            this.updateViewDisplay();
        }
    }

    getViewCounts() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.warn('Could not load view counts from localStorage:', e);
            return {};
        }
    }

    setViewCounts(counts) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(counts));
        } catch (e) {
            console.warn('Could not save view counts to localStorage:', e);
        }
    }

    incrementViewCount() {
        const counts = this.getViewCounts();
        counts[this.currentPost] = (counts[this.currentPost] || 0) + 1;
        this.setViewCounts(counts);
    }

    getViewCount(postSlug) {
        const counts = this.getViewCounts();
        return counts[postSlug] || 0;
    }

    updateViewDisplay() {
        const viewCount = this.getViewCount(this.currentPost);
        const viewElement = document.getElementById('view-counter');
        if (viewElement) {
            viewElement.textContent = `${viewCount} view${viewCount !== 1 ? 's' : ''}`;
        }
    }

    // Method to get all view counts for blog listing
    getAllViewCounts() {
        return this.getViewCounts();
    }
}

// Initialize view counter when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.viewCounter = new ViewCounter();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ViewCounter;
}
