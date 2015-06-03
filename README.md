isodd
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

>  Computes for each array element whether it is an odd number.


## Installation

``` bash
$ npm install compute-isodd
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isOdd = require( 'compute-isodd' );
```

#### isOdd( x[, options] )

Checks element-wise whether numbers in `x` are odd. The function accepts as its first argument either a single `numeric` value, an `array` or a `matrix`. For input `arrays` and `matrices`, the check is carried out for each value. Correspondingly, the function returns either a single number, an `array` with length equal to that of the input `array` or a `matrix` with equal dimensions as input `x`. Each output element is either `0` or `1`. A value of `1` means that an element is an odd number and `0` means that an element is __not__ an odd number.

``` javascript
var out = isOdd( 9 );
// returns 1

out = isOdd( [ 1, 2, 3 ] );
// returns [ 1, 0, 1 ]
```

When provided an input `array`, the function accepts two `options`:

*  __copy__: `boolean` indicating whether to return a new `array` containing 0/1's indicating whether the corresponding element is an odd number. Default: `true`.
*  __accessor__: accessor `function` for accessing numeric values in object `arrays`.

To mutate the input `array` (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var arr = [ 1, 2, 3 ];

var out = isOdd( arr, {
	'copy': false
});
// returns [ 1, 0, 1 ]

console.log( arr === out );
// returns true
```

For object `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	['beep', 1],
	['boop', 2],
	['bip', 3],
	['bap', 4],
	['baz', 5]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = isOdd( data, {
	'accessor': getValue
});
// returns [ 1, 0, 1, 0, 1 ]
```



## Examples

``` javascript
var isOdd = require( 'compute-isodd' );

console.log( isOdd( 3 ) );
// returns 1

console.log( isOdd( [ 1, 2, 3, 4] ) );
// returns [ 1, 0, 1, 0 ]
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-isodd.svg
[npm-url]: https://npmjs.org/package/compute-isodd

[travis-image]: http://img.shields.io/travis/compute-io/isodd/master.svg
[travis-url]: https://travis-ci.org/compute-io/isodd

[coveralls-image]: https://img.shields.io/coveralls/compute-io/isodd/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/isodd?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/isodd.svg
[dependencies-url]: https://david-dm.org/compute-io/isodd

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/isodd.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/isodd

[github-issues-image]: http://img.shields.io/github/issues/compute-io/isodd.svg
[github-issues-url]: https://github.com/compute-io/isodd/issues
