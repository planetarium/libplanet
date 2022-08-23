#!/usr/bin/env node
"use strict";
// About this script: this script has two purposes:
//
// - Some users could pass --ignore-scripts option to "npm install" command,
//   which ignores the install.js script.  In such case, "npx planet" will
//   invoke this script at first time, and this downloads the actual ELF binary
//   and overwrites this scripts with the ELF binary.  After the first invoke,
//   "npx planet" becomes to directly invoke the ELF binary instead.
//
// - On Windows, npm creates a fake executable named "planet.cmd" to invoke
//   this script, regardless of --ignore-scripts option.  There is likely no way
//   to avoid this node.js script being invoked before the actual planet.exe
//   is invoked.
import child_process from "child_process";
import fs from "fs";
import path from "path";
import { BIN_PATH, BIN_NAME, download } from "../download.mjs";

const exePath = path.join(BIN_PATH, BIN_NAME);

function runExe() {
  child_process.spawnSync(exePath, process.argv.slice(2), { stdio: "inherit" });
}

if (process.platform === "win32") {
  // On Windows, this script is never overwritten even after download() was
  // executed, as on Windows executables always have suffixes,
  // e.g., "planet.exe".  Therefore, this script is always called on Windows
  // regardless of presence of planet.exe, so this script has to check if
  // planet.exe exists every time.
  fs.access(exePath, fs.constants.R_OK, err => {
    if (!err) return runExe();
    return download({ log: console.warn }).then(runExe).catch(console.error);
  });
} else {
  // On the other hand, on POSIX platforms other than Windows, this script
  // is overwritten after download() executed, which means if the below code is
  // executed there must *not* be the actual ELF binary of the "planet" command.
  // Therefore, download() should be invoked first.
  const downloaded = await download({ log: console.warn });
  runExe(downloaded);
}

// vim: ts=2 sw=2 et ft=javascript
