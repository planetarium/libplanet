Libplanet Explorer
==================

Explorer blocks, transactions, and addresses on your Libplanet-powered
distributed games.  For the frontend, see also [libplanet-explorer-frontend].

[libplanet-explorer-frontend]: https://github.com/planetarium/libplanet-explorer-frontend


How to build and run
--------------------

You need to install [.NET Core] 2.0 or higher, and [PowerShell].  Both work
on Linux, macOS, and Windows.  After you install them, execute the *run.ps1*
script on the command-line:

~~~~ bash
./run.ps1 --store-path BLOCKCHAIN_STORE_PATH
~~~~

`BLOCKCHAIN_STORE_PATH` refers to a directory or a file made by
a Libplanet-powered game.  If you need a sample data file please contact us
on [our Discord chat][1]!

If you omit `--store-path` switch in online mode, explorer will use memory to store
blockchain instead of storage.

[.NET Core]: https://dotnet.microsoft.com/
[PowerShell]: https://microsoft.com/PowerShell
[1]: https://discord.gg/ue9fgc3


GraphQL
-------

The key purpose of this project is to provide GraphQL endpoint.  The endpoint
is placed:

    /graphql/


GraphQL Playground
------------------

This provides a built-in GraphQL Playground.  The web root path serves it:

    /
