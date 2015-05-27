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
var foo = require( 'compute-isodd' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-isodd' );
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

Copyright &copy; 2015. Philipp Burckhardt.


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
