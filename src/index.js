// Import styles
import './styles/style.css';
import './styles/variables.scss';
import './styles/components.scss';
import './styles/theme.less';

// Import assets
import sample1 from './images/sample1.svg';
import sample2 from './images/sample2.svg';

// Import TypeScript utilities
import { createLogger, formatDate } from './utils';

const logger = createLogger();

logger.log('Webpack application loaded successfully!');
logger.log('Build time: ' + formatDate(new Date()));
logger.log('Sample images: [sample1, sample2]');

// Example of dynamic chunk loading
function initializeApp() {
  const app = document.getElementById('app');

  if (app) {
    logger.log('Application initialized');

    // Set image sources from imported modules
    const images = document.querySelectorAll('.gallery-img');
    if (images.length >= 2) {
      images[0].src = sample1;
      images[1].src = sample2;
    }

    // Add event listeners or other initialization code here
    document.querySelectorAll('.gallery-img').forEach(img => {
      img.addEventListener('load', () => {
        logger.log('Image loaded: ' + img.src);
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
