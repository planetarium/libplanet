// Post-install hook for npm.
"use strict";
const { download } = require("./download.js");

download().then(console.debug).catch(console.error);

// vim: ts=2 sw=2 et ft=javascript
