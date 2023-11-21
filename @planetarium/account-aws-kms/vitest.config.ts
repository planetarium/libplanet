import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    cache: false,
    testTimeout: 30000,
    alias: {
      "#crypto": "./src/crypto/node.ts",
    },
  },
});
