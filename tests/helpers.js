import $ from 'jquery';

/**
 * a wrapper around $ or document.querySelectorAll
 * to easily switch between jQuery and non jQuery version
 *
 * @param {String} selector
 */
export function elementSelector(selector) {
  return $(selector);
}
