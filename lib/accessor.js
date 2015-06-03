'use strict';

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
		i,
		val;

	for ( i = 0; i < len; i++ ) {
		val = clbk( x[ i ], i );
		y[ i ] = ( val % 2 !== 0 ) ? 1 : 0;
	}

	return y;
} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
