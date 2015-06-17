'use strict';


// MODULES //

var ISODD = require( './number.js' );

// IS ODD //

/**
* FUNCTION: isodd( out, arr )
*	Computes for each matrix element whether it is an even number.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @returns {Matrix} output matrix
*/
function isodd( y, x ) {
	var out = y,
		len,
		i;

	x = x.data;
	y = y.data;
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISODD( x[ i ] );
	}
	return out;
} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
