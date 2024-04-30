// eslint-disable-next-line
export default function createInt8TypedArray (length, position, value) {
  const buffer = new ArrayBuffer(length);
  const objectview = new DataView(buffer);
  try {
    objectview.setInt8(position, value);
  } catch (e) {
    throw new Error('Position outside range');
  }
  return objectview;
}
