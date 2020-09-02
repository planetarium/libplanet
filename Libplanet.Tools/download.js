// The planet binary downloader for npm.
// Inspired by Elm's npm packaging: <https://www.npmjs.com/package/elm>.
"use strict";
const nodeMajorVersion = process.versions.node.split('.')[0]
if (nodeMajorVersion < 8) {
  throw new Error("Requires Node.js v8 or Higher Version.");
}

const child_process = require("child_process");
const fs = require("fs");
const os = require("os");
const { promisify } = require("util");
const path = require("path");
const fetch = require("node-fetch");
const unzipper = require("unzipper");
const packageMetadata = require("./package.json");

const URL_BASE = "https://github.com/planetarium/libplanet/releases/download";
const SUFFIXES = {
  darwin: {x64: "osx-x64.tar.xz"},
  linux: {x64: "linux-x64.tar.xz"},
  win32: {x64: "win-x64.zip"},
};
const BIN_NAME = process.platform == "win32" ? "planet.exe" : "planet";
const BIN_PATH = path.join(__dirname, "bin");

const mkdtemp = promisify(fs.mkdtemp);
const copyFile = promisify(fs.copyFile);

function download(options = {}) {
  const { binPath = BIN_PATH, binName = BIN_NAME, log = console.log } = options;
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

  return mkdtemp(path.join(os.tmpdir(), "planet-")).then(dirPath => {
    const finalize = () => {
      return new Promise((resolve, reject) => {
        const src = path.join(dirPath, BIN_NAME);
        const dst = path.join(binPath, binName);
        
        return copyFile(src, dst).then(() => {
          if (platform === "win32") return resolve();
          fs.chmod(dst, 0o755, err => err ? reject(err) : resolve());
        }).catch(reject);
      });
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
            console.log(code)
            if (code !== 0) return reject(code);
            return resolve();
          });
          retVal = subproc.stdin;
        }

        retVal.on("error", reject);
        value.pipe(retVal);
      });
    };

    if (log != null) log(`
-------------------------------------------------------------------------------
Downloaing Libplanet CLI Tools ${ver} from GitHub...

NOTE: You can avoid npm entirely by downloading directly from:

  ${url}

All this package does is downloading that file and put it somewhere.
-------------------------------------------------------------------------------
    `);
    
    return fetch(url)
      .then(res => unarchive(res.body))
      .then(() => finalize())
      .catch(err => console.error(`
-------------------------------------------------------------------------------
Error from downloding Libplanet CLI Tools from GitHub...

Report this issue from https://github.com/planetarium/libplanet/issues

${err}
-------------------------------------------------------------------------------
      `));
  });
}

module.exports = {
  BIN_NAME,
  BIN_PATH,
  download
};
