import * as fs from "node:fs/promises";

export async function mkdir(
  path: string,
  options?: { recursive: true },
): Promise<void> {
  await fs.mkdir(path, options);
}

export function readFile(
  path: string,
  options?: { encoding: "utf8" },
): Promise<string> {
  return fs.readFile(path, options) as Promise<string>;
}

export function removeFile(path: string): Promise<void> {
  return fs.unlink(path);
}

export async function* listFiles(directory: string): AsyncIterable<string> {
  let dir;
  try {
    dir = await fs.opendir(directory);
  } catch (e) {
    if (
      typeof e === "object" &&
      e != null &&
      "code" in e &&
      e.code === "ENOENT"
    ) {
      // In case where there is no directory at all (it's likely the first
      // time to run this operation in a system), it should be considered
      // it's just empty (instead of considering it an exceptional case).
      return;
    }
    throw e;
  }
  for await (const dirEntry of dir) {
    if (!dirEntry.isFile()) continue;
    yield dirEntry.name;
  }
}

export function writeFile(
  path: string,
  content: string,
  encoding?: "utf8",
): Promise<void> {
  return fs.writeFile(path, content, encoding);
}
