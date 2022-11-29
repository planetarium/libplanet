// The planet binary downloader for npm.
// Inspired by Elm's npm packaging: <https://www.npmjs.com/package/elm>.
"use strict";
import child_process from "child_process";
import { chmod, copyFile, mkdtemp, readFile } from "fs/promises";
import os from "os";
import { fileURLToPath } from 'url';
import path from "path";
import fetch from "node-fetch";
import unzipper from "unzipper";

const URL_BASE = "https://github.com/planetarium/libplanet/releases/download";
const SUFFIXES = {
  darwin: {x64: "osx-x64.tar.xz", arm64: "osx-arm64.tar.xz"},
  linux: {x64: "linux-x64.tar.xz"},
  win32: {x64: "win-x64.zip"},
};
const PACKAGE_PATH = path.dirname(fileURLToPath(import.meta.url));
const METADATA_PATH = path.join(PACKAGE_PATH, "package.json");
export const BIN_NAME = process.platform == "win32" ? "planet.exe" : "planet";
export const BIN_PATH = path.join(PACKAGE_PATH, "bin");

export async function download(options = {}) {
  const { binPath = BIN_PATH, binName = BIN_NAME, log = console.log } = options;
  const packageMetadata = JSON.parse(await readFile(METADATA_PATH));
  const ver = packageMetadata.version;
  const platform = os.platform();
  const platformSuffixes = SUFFIXES[platform];

  if (platformSuffixes == null) {
    throw new Error(`Unsupported platform: ${platform}`);
  }

  const arch = os.arch();
  const suffix = platformSuffixes[arch];

  if (suffix == null) {
    throw new Error(`Unsupported architecture: ${platform}-${arch}`);
  }

  const url = `${URL_BASE}/${ver}/planet-${ver}-${suffix}`;

  const dirPath = await mkdtemp(path.join(os.tmpdir(), "planet-"));
  const srcPath = path.join(dirPath, BIN_NAME);
  const dstPath = path.join(binPath, binName);
  const finalize = async () => {
    await copyFile(srcPath, dstPath);
    if (platform === "win32") return;
    await chmod(dstPath, 0o755);
  };

  const unarchive = (value) => {
    return new Promise((resolve, reject) => {
      let retVal;

      if (suffix.toLowerCase().endsWith(".zip")) {
        retVal = unzipper.Extract({ path: dirPath });
        retVal.on("close", err => {
          if (err) return reject(err);
          return resolve();
        });
      } else {
        const subproc = child_process.spawn("tar", ["xvJ"], {
          cwd: dirPath,
          stdio: ["pipe", "ignore", "ignore"]
        });
        subproc.on("close", code => {
          if (code !== 0) return reject(code);
          return resolve();
        });
        retVal = subproc.stdin;
      }

      retVal.on("error", reject);
      value.pipe(retVal);
    });
  };

  const adhocSign = () => {
    return new Promise((resolve, reject) => {
        const args = [
            "--sign",
            "-",
            "--force",
            "--preserve-metadata=entitlements,requirements,flags,runtime",
            srcPath
        ]
        child_process.execFile(
            "codesign",
            args,
            (err, stdout, stderr) => {
                if (err)
                {
                    return reject(stderr || err);
                } else {
                    return resolve(stdout);
                }
            }
        );
    });
  }

  if (log != null) log(`
-------------------------------------------------------------------------------
Downloaing Libplanet CLI Tools ${ver} from GitHub...

NOTE: You can avoid npm entirely by downloading directly from:

  ${url}

All this package does is downloading that file and put it somewhere.
-------------------------------------------------------------------------------
  `);

  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    console.error(`
-------------------------------------------------------------------------------
An error occurred during Libplanet CLI Tools from GitHub:

  ${url}

Report this issue from https://github.com/planetarium/libplanet/issues

${err}
-------------------------------------------------------------------------------
    `);
    throw e;
  }
  try {
    await unarchive(res.body);
  } catch (err) {
    console.error(`
-------------------------------------------------------------------------------
An error occurred during unarchiving Libplanet CLI Tools:

  ${url}

Report this issue from https://github.com/planetarium/libplanet/issues

${err}
-------------------------------------------------------------------------------
    `);
    throw err;
  }
  if (platform === "darwin" && arch === "arm64")
  {
    try {
        await adhocSign();
    } catch(err) {
        console.error(`
    -------------------------------------------------------------------------------
    An error occurred during installing Libplanet CLI Tools:

      codesign ${srcPath}

    Report this issue from https://github.com/planetarium/libplanet/issues

    ${err}
    -------------------------------------------------------------------------------
        `);
        throw err;
    }
  }
  try {
    await finalize();
  } catch(err) {
    console.error(`
-------------------------------------------------------------------------------
An error occurred during installing Libplanet CLI Tools:

  ${srcPath} -> ${dstPath}

Report this issue from https://github.com/planetarium/libplanet/issues

${err}
-------------------------------------------------------------------------------
    `);
    throw err;
  }
}
