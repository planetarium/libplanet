import { isKeyId } from "../src/KeyId";
import { expect, test } from "vitest";

test("isKeyId()", () => {
  expect(isKeyId("asdf")).toBeFalsy();
  expect(isKeyId("B9378E01-BF38-469B-AC6F-B40F01762A5")).toBeFalsy();
  expect(isKeyId("B9378E01-BF38-469B-AC6F-B40F01762A5Z")).toBeFalsy();
  expect(isKeyId("B9378E01-BF38-469B-AC6F-B40F01762A51")).toBeTruthy();
  expect(isKeyId("b9378e01-bf38-469b-ac6f-b40f01762a51")).toBeTruthy();
});
