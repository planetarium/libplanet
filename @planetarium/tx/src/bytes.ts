
export function bytesEqual(
  a: Uint8Array | ArrayBuffer,
  b: Uint8Array | ArrayBuffer
): boolean {
  const x = a instanceof ArrayBuffer ? new Uint8Array(a) : a;
  const y = b instanceof ArrayBuffer ? new Uint8Array(b) : b;
  return x.length === y.length && x.every((v, i) => v === y[i]);
}
