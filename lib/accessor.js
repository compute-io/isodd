'use strict';

// MODULES //

var ISODD = require( './number.js' );

// IS ODD //

/**
* FUNCTION: isodd( out, arr, accessor )
*	Computes for each array element whether it is odd using an accessor function.
*
* @param {Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Array} output array
*/
function isodd( y, x, clbk ) {
	var len = x.length,
		i;

	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISODD( clbk( x[ i ], i ) );
	}

	return y;
} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
