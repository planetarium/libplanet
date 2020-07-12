// The planet binary downloader for npm.
// Inspired by Elm's npm packaging: <https://www.npmjs.com/package/elm>.
"use strict";
const child_process = require("child_process");
const fs = require("fs");
const os = require("os");
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
  return new Promise((resolve, reject) => {
    fs.mkdtemp(path.join(os.tmpdir(), "planet-"), (err, dirPath) => {
      if (err) return reject(err);
      const finalize = () => {
        const src = path.join(dirPath, BIN_NAME);
        const dst = path.join(binPath, binName);
        fs.copyFile(src, dst, err => {
          if (err) return reject(err);
          if (platform === "win32") return resolve();
          fs.chmod(dst, 0o755, err => err ? reject(err) : resolve());
        });
      };
      let unarchive;
      if (suffix.toLowerCase().endsWith(".zip")) {
        unarchive = unzipper.Extract({ path: dirPath });
        unarchive.on("close", err => {
          if (err) return reject(err);
          return finalize();
        });
      } else {
        const subproc = child_process.spawn("tar", ["xvJ"], {
          cwd: dirPath,
          stdio: ["pipe", "ignore", "ignore"]
        });
        subproc.on("close", code => {
          if (code !== 0) return reject(code);
          return finalize();
        });
        unarchive = subproc.stdin;
      }
      unarchive.on("error", reject);
      if (log != null) log(`
-------------------------------------------------------------------------------
Downloaing Libplanet CLI Tools ${ver} from GitHub...

NOTE: You can avoid npm entirely by downloading directly from:

  ${url}

All this package does is downloading that file and put it somewhere.
-------------------------------------------------------------------------------
`);
      fetch(url).catch(reject).then(res => res.body.pipe(unarchive));
    });
  });
}

module.exports = {
  BIN_NAME,
  BIN_PATH,
  download
};
