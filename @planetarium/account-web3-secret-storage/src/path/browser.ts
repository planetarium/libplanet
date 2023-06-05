export function join(...args: string[]): string {
  if (args.length === 0) {
    return ".";
  }

  if (args.length === 1) {
    return args[0];
  }

  const lastElement = args.at(-1);
  if (args.length > 1 && lastElement !== undefined) {
    return [
      trimSlashEnd(args[0]),
      ...args.slice(1, -1).map((x) => trimSlashStart(trimSlashEnd(x))),
      trimSlashStart(lastElement),
    ].join("/");
  }

  throw new Error("All cases are covered.");
}

function trimSlashEnd(s: string): string {
  let ret = s;
  while (ret.length > 0 && ret.at(-1) === "/") {
    ret = ret.slice(0, -1);
  }

  return ret;
}

function trimSlashStart(s: string): string {
  let ret = s;
  while (ret.length > 0 && ret.at(0) === "/") {
    ret = ret.slice(1);
  }

  return ret;
}

export function getDefaultWeb3KeyStorePath(): string {
  return "/planetarium/account/web3-secret-storage/keystore";
}
