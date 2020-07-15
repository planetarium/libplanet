`planet`: Libplanet CLI Tools
=============================

[![npm][npm-badge]][npm]
[![NuGet][nuget-badge]][NuGet]
[![NuGet (prerelease)][nuget-prerelease-badge]][NuGet]

This CLI app is a collection of utilities for application programmers who
create decentralized games powered by [Libplanet].

[npm]: https://www.npmjs.com/package/@planetarium/cli
[npm-badge]: https://img.shields.io/npm/v/@planetarium/cli
[NuGet]: https://www.nuget.org/packages/Libplanet.Tools/
[nuget-badge]: https://img.shields.io/nuget/v/Libplanet.Tools.svg?style=flat
[nuget-prerelease-badge]: https://img.shields.io/nuget/vpre/Libplanet.Tools.svg?style=flat
[Libplanet]: https://libplanet.io/


Installation
------------

There are three ways to install the `planet` command.  Pick the most handy
one for you.

### `npm` [![npm][npm-badge]][npm]

Install as an `npm` package if `npm` is installed on your system:

~~~~ bash
npm install @planetarium/cli
~~~~

### .NET Core tool [![NuGet][nuget-badge]][NuGet]

Install as a [.NET Core tool] if .NET Core SDK is installed on your system:

~~~~ bash
dotnet tool install -g Libplanet.Tools
~~~~

[.NET Core tool]: https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools

### Manual installation [![GitHub Releases][releases-badge]][releases page]

Or you could just download an executable binary for your platform from
the [releases page]: *planet-\*-{linux,osx,win}-x64.{tar.xz,zip}* files are
CLI tools.  Linux (x64), macOS (x64), and Windows (x64) are supported.
Extract the binary to an appropriate directory in your `PATH`.

[releases page]: https://github.com/planetarium/libplanet/releases
[releases-badge]: https://img.shields.io/github/v/release/planetarium/libplanet?sort=semver


Usage
-----

~~~~ bash
planet --help
~~~~

If you installed it using `npm` *without `-g`/`--global` option*
use `npx planet` command instead:

~~~~ bash
npx planet --help
~~~~

Or if you installed it using .NET Core SDK *without `-g`/`--global` option*
use `dotnet planet` command instead:

~~~~ bash
dotnet planet --help
~~~~

