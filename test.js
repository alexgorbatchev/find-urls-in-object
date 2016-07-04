import { expect } from 'chai';
import findUrlsInObject from './index-es6';

describe('find-urls-in-object', () => {
  it('finds all urls in an object', () => {
    const actual = findUrlsInObject({
      text: 'Hello https://hello.com',
      node1: true,
      node2: false,
      foo: {
        array: [
          'value1',
          'http://foo.com',
          'with text http://bar.com',
          'double url http://foo.com',
        ],
      },
    });

    expect(actual).to.eql([
      'http://foo.com',
      'http://bar.com',
      'https://hello.com',
    ]);
  });
});
