import { expect } from "vitest";

interface HavingBytes {
  toBytes(): Uint8Array;
}

expect.extend({
  toHaveEqualBytes: (received: HavingBytes, expected: HavingBytes) => {
    const actualBytes = received.toBytes();
    const expectedBytes = expected.toBytes();
    const actualHex = new Buffer(actualBytes).toString("hex");
    const expectedHex = new Buffer(expectedBytes).toString("hex");
    if (actualBytes.length !== expectedBytes.length) {
      return {
        message: () =>
          `expected to have ${expectedBytes.length} bytes, ` +
          `got ${actualBytes.length}\n` +
          `expected: ${expectedHex}\nactual: ${actualHex}`,
        pass: false,
      };
    }

    for (let i = 0; i < actualBytes.length; i++) {
      if (actualBytes[i] !== expectedBytes[i]) {
        return {
          message: () =>
            `expected ${received} to have equal bytes, ` +
            `got ${actualBytes} at index ${i}\n` +
            `expected: ${expectedHex}\nactual: ${actualHex}`,
          pass: false,
        };
      }
    }

    return { pass: true };
  },
});
