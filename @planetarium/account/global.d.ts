declare module globalThis {
  var crypto:
    | undefined
    | {
        subtle: {
          digest: (
            algorithm: string,
            data: ArrayBuffer | TypedArray | DataView
          ) => Promise<ArrayBuffer>;
        };
      };
  var TextEncoder:
    | undefined
    | (new () => { encode: (input: string) => Uint8Array });
}
