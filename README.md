# wikic-suite-docsmap

[![Build Status][build-badge]][build]
[![Coveralls][coverage-badge]][coverage]
[![version][version-badge]][package]

A suite for wikic, generates searchable json of docs.

## Installation

``` bash
$ npm install --save wikic-suite-docsmap
```

## Usage

In `wikic.config.js`

``` js
module.exports = {
  suites: [require('wikic-suite-docsmap')]
  docsmap: {
    enable: true,
    output: 'docs.json',
  }
}
```

## LICENSE

[MIT](LICENCE)

[coverage]: https://coveralls.io/github/wikic/wikic-suite-docsmap
[coverage-badge]: https://img.shields.io/coveralls/wikic/wikic-suite-docsmap.svg
[build]: https://travis-ci.org/wikic/wikic-suite-docsmap
[build-badge]: https://travis-ci.org/wikic/wikic-suite-docsmap.svg?branch=master
[version-badge]: https://img.shields.io/npm/v/wikic-suite-docsmap.svg
[package]: https://www.npmjs.com/package/wikic-suite-docsmap
