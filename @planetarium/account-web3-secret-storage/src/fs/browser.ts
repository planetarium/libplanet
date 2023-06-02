export async function mkdir(path: string, options?: unknown): Promise<void> {}

export function readFile(
  path: string,
  options?: { encoding: "utf8" },
): Promise<string> {
  const item = localStorage.getItem(path);
  if (item == null) {
    throw new Error("Not found");
  }

  return Promise.resolve(item);
}

export function removeFile(path: string): Promise<void> {
  localStorage.removeItem(path);
  return Promise.resolve();
}

export async function* listFiles(directory: string): AsyncIterable<string> {
  for (let i = 0; i < localStorage.length; ++i) {
    const item = localStorage.key(i);
    if (item == null) {
      throw new Error(`Expected ${i}th item in localStorage.`);
    }

    if (item.startsWith(directory)) {
      let sliced = item.slice(directory.length);
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
  localStorage.setItem(path, content);
}
