import { expect } from "vitest";
import { Value, areValuesEqual } from "@planetarium/bencodex";

expect.extend({
  toBeBencoded(
    received: Value,
    expected: Value,
  ): { pass: boolean; message: () => string } {
    if (areValuesEqual(received, expected)) {
      return { pass: true, message: () => "two values are equal" };
    }
    // TODO: show diff
    return { pass: false, message: () => "two values are not equal" };
  },
});
