import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    cache: false,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    testTimeout: 30000,
    alias: {
      "#crypto": "./src/crypto/node.ts",
      "#path": "./src/path/node.ts",
      "#fs": "./src/fs/node.ts",
    },
  },
});
