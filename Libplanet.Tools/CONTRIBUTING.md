On npm packaging
================

Although *Libplanet.Tools* is a CLI program written in .NET, it's also
distributed via *npm*, the popular package manager for JavaScript:
*[@planetarium/cli]*.  The npm package consists of three scripts:

 -  *download.mjs* downloads an appropriate archive file for the machine from
    GitHub release page, and unpack the executable binary to the right place.
 -  *install.mjs* simply invokes the above script.  It's automatically invoked
    by npm when the package is installed.
 -  *bin/planet.mjs* is used on Windows or if the package is installed with
    npm's `--ignore-scripts` option.  The suffix *.mjs* is stripped when it's
    installed in a Linux/macOS system or replaced by *.exe* on Windows.
    Read the comment on the top of the file
    for details.

As the npm package *[@planetarium/cli]* is just a thin wrapper around
*Libplanet.Tools* project, which is also a thin entrypoint of
*Libplanet.Extensions.Cocona* project, if you want to change the program itself
see *Libplanet.Extensions.Cocona* project instead.

[@planetarium/cli]: https://www.npmjs.com/package/@planetarium/cli


Testing the installer
---------------------

Note that the below examples do not test `npm install @planetarium/cli@0.27.3`,
but install *Libplanet.Tools* 0.27.3 with the *current install script in your
local working directory*.

### Linux/macOS

There are prerequisites for testing:

 -  GNU Bash
 -  jq
 -  npm

Here's a testing script:

~~~ bash
bin/npm-test.sh 0.27.3  # Libplanet.Tools version to install
~~~

It must terminate with the output `Succeeded!` in the end if tests passed.

### Windows

There are prerequisites for testing:

 -  PowerShell 5.1 or higher
 -  npm

Here's a testing script:

~~~ powershell
powershell `
  -ExecutionPolicy Bypass `
  -File bin\npm-test.ps1 `
  -Version 0.27.3  # Libplanet.Tools version to install
~~~

It must terminate with the output `Succeeded!` in the end if tests passed.
