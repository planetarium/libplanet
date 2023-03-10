import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    cache: false,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    testTimeout: 30000,
  },
});
