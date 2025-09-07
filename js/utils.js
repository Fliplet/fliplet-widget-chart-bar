// Utility functions to replace lodash dependencies

/**
 * Checks if a value is a function.
 * @param {*} value - The value to check
 * @returns {boolean} True if the value is a function, false otherwise
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed.
 * @param {function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {Object} [options] - The options object
 * @param {boolean} [options.leading=false] - Specify invoking on the leading edge of the timeout
 * @returns {function} The debounced function
 */
function debounce(func, wait, options) {
  var timeout;
  var leading = options && options.leading;
  
  return function() {
    var context = this;
    var args = arguments;
    
    var later = function() {
      timeout = null;
      if (!leading) func.apply(context, args);
    };
    
    var callNow = leading && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Computes the sum of the values in an array.
 * @param {Array} array - The array to iterate over
 * @returns {number} The sum of all values
 */
function sum(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    var value = Number(array[i]);
    if (!isNaN(value)) {
      total += value;
    }
  }
  return total;
}

// Export for use in other files
window.FlipletChartBarUtils = {
  isFunction: isFunction,
  debounce: debounce,
  sum: sum
};