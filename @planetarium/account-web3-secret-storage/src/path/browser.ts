export function join(...args: string[]): string {
  return args.join("/");
}

export function getDefaultWeb3KeyStorePath(): string {
  return "/planetarium/account/web3-secret-storage/keystore";
}
