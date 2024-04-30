export default function cleanSet(set, startString) {
  const word = '';
  if (startString && typeof startString === 'string') {
    return Array.from(set)
      .filter((value) => value.startsWith(startString))
      .map((value) => value.slice(startString.length))
      .join('-');
  }
  return word;
}
