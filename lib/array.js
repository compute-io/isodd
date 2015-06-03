'use strict';

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
		i,
		val;

	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		y[ i ] = ( val % 2 !== 0 ) ? 1 : 0;
	}

	return y;
} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
