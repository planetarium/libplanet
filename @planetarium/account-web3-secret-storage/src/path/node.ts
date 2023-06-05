export { join } from "node:path";

/**
 * Determines the default key store path.  It depends on the platform:
 *
 * - Linux/macOS: `$HOME/.config/planetarium/keystore`
 * - Windows: `%AppData%\planetarium\keystore`
 */
export function getDefaultWeb3KeyStorePath(): string {
  const { homedir } = require("node:os");
  const path = require("node:path");
  const baseDir =
    process.platform === "win32"
      ? process.env.AppData || path.join(homedir(), "AppData", "Roaming")
      : process.env.XDG_CONFIG_HOME || path.join(homedir(), ".config");
  // Note that it's not necessary to explicitly choose one of `path.win32` or
  // `path.posix` here, but it makes unit tests less dependent on mocks:
  return (process.platform === "win32" ? path.win32 : path.posix).join(
    baseDir,
    "planetarium",
    "keystore",
  );
}
