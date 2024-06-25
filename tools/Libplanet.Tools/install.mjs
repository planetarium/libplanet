// Post-install hook for npm.
"use strict";
import { download } from "./download.mjs";

download().then(console.debug).catch(console.error);

// vim: ts=2 sw=2 et ft=javascript
