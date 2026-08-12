import './styles/style.css';
import sample1 from './images/sample1.svg';
import sample2 from './images/sample2.svg';

console.log('Webpack application loaded successfully!');
console.log('Build time:', new Date().toLocaleString());
console.log('Sample images:', { sample1, sample2 });

// Example of dynamic chunk loading
function initializeApp() {
    const app = document.getElementById('app');

    if (app) {
        console.log('Application initialized');

        // Set image sources from imported modules
        const images = document.querySelectorAll('.gallery-img');
        if (images.length >= 2) {
            images[0].src = sample1;
            images[1].src = sample2;
        }

        // Add event listeners or other initialization code here
        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('load', () => {
                console.log(`Image loaded: ${img.src}`);
            });
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Example module for demonstration
const utils = {
    formatDate: (date) => new Date(date).toLocaleDateString(),
    getTimestamp: () => Date.now(),
};

export default utils;
