import { init } from '@noriginmedia/norigin-spatial-navigation';

// Initialize spatial navigation with default settings
init({
  debug: true, // Enable debug mode to see what's happening
  throttle: 100, // Throttle navigation events
  straightOverlapThreshold: 0.5, // Default threshold for straight navigation
  straightPriority: 0.5, // Default priority for straight navigation
  rememberSource: true, // Remember the last focused element
  disabled: false, // Enable navigation
  defaultElement: '', // No default element
  enterTo: '', // No special enter behavior
  leaveFor: null, // No special leave behavior
  restrict: 'self-first', // Restrict navigation to self first
  tabIndexIgnoreList: 'a, input, select, textarea, button, iframe, [contentEditable=true]',
  navigableFilter: null, // No custom filter
  scrollOptions: {
    behavior: 'smooth',
    block: 'nearest'
  }
}); 