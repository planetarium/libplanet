
const hexTable: string[] = [];
for (let i = 0; i < 0x100; ++i) {
  hexTable.push(i.toString(16).padStart(2, "0"));
}

export function toHex(bytes: Uint8Array): string {
  const result: string[] = [];
  for (let i = 0; i < bytes.length; ++i) {
    result.push(hexTable[bytes[i]]);
  }
  return result.join("");
}

export function fromHex(hex: string): Uint8Array {
  if (hex.length % 2 !== 0) {
    throw new RangeError("Invalid hex string; length must be even.");
  } else if (!hex.match(/^[0-9a-fA-F]*$/)) {
    throw new RangeError("Invalid hex string; must be hexadecimal.");
  }
  const result = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    result[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return result;
}
