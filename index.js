/**
 * This file is auto-generated by the build script.
 * It consolidates API functions for use in the application.
 * Do not edit manually.
 */
import _integer from './src/integer.js';
import _number from './src/number.js';
import _string from './src/string.js';

export default {
    /**
     * Generates a random integer between the specified minimum and maximum values (inclusive).
     *
     * @param {Object} [options={}] - The options object.
     * @param {number} [options.min=0] - The minimum value (inclusive).
     * @param {number} [options.max=100] - The maximum value (inclusive).
     * @returns {number} A random integer between the specified min and max values.
     */
    integer: _integer,
    /**
     * Generates a random number within a specified range and with a specified number of decimal places.
     *
     * @param {Object} [options] - The options for generating the random number.
     * @param {number} [options.min=0] - The minimum value of the range.
     * @param {number} [options.max=100] - The maximum value of the range.
     * @param {number} [options.places=3] - The number of decimal places.
     * @returns {number} A random number within the specified range and with the specified number of decimal places.
     */
    number: _number,
    /**
     * Generates a random string of a specified length.
     *
     * @param {Object} [options={}] - The options for generating the random string.
     * @param {number} [options.minLength=5] - The minimum length of the random string.
     * @param {number} [options.maxLength=8] - The maximum length of the random string.
     * @returns {string} A random string of random length between minLength and maxLength.
     */
    string: _string
};