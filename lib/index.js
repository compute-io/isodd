'use strict';

// MODULES //

var copy = require( 'utils-copy' ),
	isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like'),
	isNumber = require( 'validate.io-number-primitive' ),
	matrix = require( 'dstructs-matrix' ),
	validate = require( './validate.js' );

// FUNCTIONS //

var isodd1 = require( './number.js' ),
	isodd2 = require( './array.js' ),
	isodd3 = require( './accessor.js' ),
	isodd4 = require( './matrix.js' );

// IS ODD //

/**
* FUNCTION: isodd( x[, opts] )
*	Computes an element-wise is-odd check.
*
* @param {Number|Number[]|Array} x - input value
* @param {Object} [opts] - function options
* @param {Boolean} [opts.copy=true] - boolean indicating if the function should return a new array
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @returns {Number|Number[]|Null} output array or null
*/
function isodd( x, options ) {

	var opts,
		err,
		out;

	if ( isNumber( x ) ) {
		return isodd1( x );
	}

	if ( arguments.length > 1 ) {
		opts = copy( options );
		err = validate( opts );
		if ( err ) {
			throw err;
		}
	}

	if ( isMatrixLike( x ) ) {
		if ( opts && opts.copy === false ) {
			out = x;
		}
		else {
			out = matrix( x.shape, 'int8' );
		}
		out = isodd4( out, x );
		return out;

	}
	if ( isArrayLike( x ) ) {
		if ( !x.length ) {
			return null;
		}
		if ( opts && opts.copy === false ) {
			out = x;
		}
		else {
			out = new Array( x.length );
		}
 		if ( opts && opts.accessor ) {
			out = isodd3( out, x, opts.accessor );
		}
		else {
			out = isodd2( out, x );
		}
		return out;
	}

	throw new TypeError( 'isodd()::invalid input argument. Input value type not currently supported. Value: `' + x + '`.' );

} // end FUNCTION isodd()


// EXPORTS //

module.exports = isodd;
