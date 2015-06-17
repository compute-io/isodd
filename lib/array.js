'use strict';


// MODULES //

var ISODD = require( './number.js' );

// IS ODD //

/**
* FUNCTION: isodd( out, arr )
*	omputes for each array element whether it is an odd number
*
* @param {Array} out - output array
* @param {Array} arr - input array
* @returns {Array} output array
*/
function isodd( y, x ) {
	var len = x.length,
		i;

	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISODD( x[ i ] );
	}

	return y;
} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
