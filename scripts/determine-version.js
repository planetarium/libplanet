#!/usr/bin/env node
// This script is used to determine the version of the current build.
// Intended to be run on CI, but can be run locally as well.
const fs = require("node:fs").promises;
const path = require("node:path");
const util = require("node:util");
const execFile = util.promisify(require("node:child_process").execFile);

async function readVersionPrefix(xmlFile) {
  // TODO: Use proper XML parser...
  const xml = await fs.readFile(xmlFile, "utf8");
  const pattern = /<VersionPrefix>([0-9]+\.[0-9]+\.[0-9]+)<\/VersionPrefix>/g;
  const match = pattern.exec(xml);
  if (!match) {
    throw new Error(`Could not determine version prefix from ${xmlFile}`);
  }
  return match[1];
}

async function getCommitHash() {
  if (process.env.GITHUB_SHA) {
    return process.env.GITHUB_SHA;
  }
  const { stdout } = await execFile("git", ["rev-parse", "HEAD"]);
  return stdout.trim();
}

async function getCommitTimestamp() {
  let timestamp;
  if (process.env.GITHUB_EVENT_PATH) {
    const event = JSON.parse(await fs.readFile(process.env.GITHUB_EVENT_PATH));
    timestamp = event.head_commit.timestamp;
  }
  const { stdout } = await execFile("git", [
    "show",
    "--no-patch",
    "--format=%cI",
    "HEAD",
  ]);
  timestamp = stdout.trim();
  if (timestamp) return new Date(timestamp);
  return new Date();
}

async function getTag() {
  if (process.env.GITHUB_REF_TYPE === "branch") return null;
  if (process.env.GITHUB_REF_TYPE === "tag" && process.env.GITHUB_REF_NAME) {
    return process.env.GITHUB_REF_NAME;
  }
  try {
    const { stdout } = await execFile("git", [
      "describe",
      "--exact-match",
      "--tags",
      "HEAD",
    ]);
  } catch (e) {
    return null;
  }
  const tag = stdout.trim();
  if (tag) return tag;
  return null;
}

function getScheduledJobDate() {
  if (process.env.GITHUB_EVENT_NAME?.startsWith("schedule")) {
    // TODO: Read the date from the event payload for determinism.
    const now = new Date();
    return `${now.getUTCFullYear()}${
      now.getUTCMonth() + 1
    }${now.getUTCDate()}}`;
  }
  return null;
}

async function main() {
  const csprojPath = path.join(
    path.dirname(__dirname),
    "Libplanet",
    "Libplanet.csproj",
  );
  const versionPrefix = await readVersionPrefix(csprojPath);
  const scheduledJobDate = getScheduledJobDate();
  const tag = await getTag();
  const commitHash = (await getCommitHash()).substring(0, 7);
  let packageVersion;
  let versionSuffix;
  let versionType;
  if (scheduledJobDate != null) {
    // Nightly
    versionSuffix = `nightly.${scheduledJobDate}`;
    packageVersion = `${versionPrefix}-${versionSuffix}`;
    versionSuffix += `+${commitHash}`;
    versionType = "nightly";
  } else if (tag != null) {
    // Release
    if (tag !== versionPrefix) {
      console.error(
        `Git tag (${tag}) does not match VersionPrefix (${versionPrefix})`,
      );
      process.exit(1);
    }
    packageVersion = tag;
    versionType = "stable";
  } else {
    // Dev
    const timestamp = await getCommitTimestamp();
    const ts = `${timestamp.getUTCFullYear()}${
      timestamp.getUTCMonth() + 1
    }${timestamp.getUTCDate()}${timestamp.getUTCHours()}${
      timestamp.getUTCMinutes() + 0
    }${timestamp.getUTCSeconds()}`;
    versionSuffix = `dev.${ts}`;
    packageVersion = `${versionPrefix}-${versionSuffix}`;
    versionSuffix += `+${commitHash}`;
    versionType = "dev";
  }
  console.error("VersionPrefix:", versionPrefix);
  if (versionSuffix) console.error("VersionSuffix:", versionSuffix);
  console.error("PackageVersion:", packageVersion);
  console.error("VersionType:", versionType);
  if (process.env.GITHUB_OUTPUT) {
    // https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#environment-files
    await fs.appendFile(
      process.env.GITHUB_OUTPUT,
      `version-prefix=${versionPrefix}`,
    );
    if (versionSuffix)
      await fs.appendFile(
        process.env.GITHUB_OUTPUT,
        `version-suffix=${versionSuffix}`,
      );
    await fs.appendFile(
      process.env.GITHUB_OUTPUT,
      `package-version=${packageVersion}`,
    );
    await fs.appendFile(
      process.env.GITHUB_OUTPUT,
      `version-type=${versionType}`,
    );
  }
}

main();
