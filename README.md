# find-urls-in-object

[![GratiPay](https://img.shields.io/gratipay/user/alexgorbatchev.svg)](https://gratipay.com/alexgorbatchev/)
![Downloads](https://img.shields.io/npm/dm/find-urls-in-object.svg)
![Version](https://img.shields.io/npm/v/find-urls-in-object.svg)

Finds all URLs in an object, recursively.

## Installation

```
npm instal --save-dev find-urls-in-object
```

## Usage

```js
import findUrlsInObject from 'find-urls-in-object';

findUrlsInObject({
  text: 'Hello https://hello.com',
  prop: {
    array: [
      'http://foo.com',
      'with text http://bar.com',
      'double url http://foo.com',
    ],
  },
});
// returns deduplicated array
// [
//   'http://foo.com',
//   'http://bar.com',
//   'https://hello.com',
// ]
```

## License

ISC