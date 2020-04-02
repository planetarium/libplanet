`planet`: Libplanet CLI Tools
=============================

This CLI app is a collection of utilities for application programmers who
create decentralized games powered by [Libplanet].

[Libplanet]: https://libplanet.io/


Installation
------------

Install as a [.NET Core tool] if .NET Core SDK is installed on your system:

~~~~ bash
dotnet tool install -g Libplanet.Tools
~~~~

Or you could just download an executable binary for your platform from
the [releases page]: *planet-\*-{linux,osx,win}-x64.{tar.xz,zip}* files are
CLI tools.  Linux (x64), macOS (x64), and Windows (x64) are supported.
Extract the binary to an appropriate directory in your `PATH`.

[.NET Core tool]: https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools


Usage
-----

~~~~ bash
planet --help
~~~~

If you installed it using .NET Core SDK *without `-g`/`--global` option*
use `dotnet planet` command instead:

~~~~ bash
dotnet planet --help
~~~~

[releases page]: https://github.com/planetarium/libplanet/releases
