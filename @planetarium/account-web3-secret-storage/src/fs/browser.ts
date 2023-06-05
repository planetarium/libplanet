const PREFIX = "PLANETARIUM_EMULATED_FS_" as const;

function prefixed(str: string): string {
  return PREFIX + str;
}

export async function mkdir(path: string, options?: unknown): Promise<void> {}

export async function readFile(
  path: string,
  options?: { encoding: "utf8" },
): Promise<string> {
  const item = localStorage.getItem(prefixed(path));
  if (item == null) {
    throw new Error("Not found");
  }

  return item;
}

export async function removeFile(path: string): Promise<void> {
  localStorage.removeItem(prefixed(path));
}

// TODO: Implement with performant structure.
export async function* listFiles(directory: string): AsyncIterable<string> {
  for (let i = 0; i < localStorage.length; ++i) {
    const item = localStorage.key(i);
    if (item == null) {
      throw new Error(`Expected ${i}th item in localStorage.`);
    }

    if (item.startsWith(prefixed(directory))) {
      let sliced = item.slice(prefixed(directory).length);
      if (sliced.startsWith("/")) {
        sliced = sliced.slice(1);
      }

      yield sliced;
    }
  }
}

export async function writeFile(
  path: string,
  content: string,
  encoding?: "utf8",
): Promise<void> {
  localStorage.setItem(prefixed(path), content);
}
