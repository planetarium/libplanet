import * as nc from "node:crypto";
export const crypto =
  nc && typeof nc === "object" && "webcrypto" in nc
    ? // rome-ignore lint/suspicious/noExplicitAny: false
      (nc.webcrypto as any)
    : undefined;
