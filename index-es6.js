import RecursiveIterator from 'recursive-iterator';
import getUrls from 'get-urls';
import arrayUniq from 'array-uniq';

export default function findUrlsInObject(object) {
  const results = [];

  for(let {node, path} of new RecursiveIterator(object)) {
    if (typeof node === 'string') {
      results.push(...getUrls(node));
    }
  }

  return arrayUniq(results);
}
