'use strict';

// IS ODD //

/**
* FUNCTION: isodd( x )
*	Checks whether input element is an odd number.
*
* @param {Number} x - input value
* @returns {Number} 1 if element is odd, 0 otherwise
*/
function isodd( x ) {
	return ( x % 2 !== 0 ) ? 1 : 0;
}

// EXPORTS //

module.exports = isodd;
