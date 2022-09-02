Libplanet Explorer
==================

Explorer blocks, transactions, and addresses on your Libplanet-powered
distributed games.  For the frontend, see also [libplanet-explorer-frontend].

[libplanet-explorer-frontend]: https://github.com/planetarium/libplanet-explorer-frontend


How to build and develop
------------------------

You need to install [.NET Core] 6.0 or higher.  It works on Linux, macOS,
and Windows.  After you install them, execute the following command to run
a development server:

~~~~ bash
dotnet watch -p Libplanet.Explorer.Executable run -- \
  --store-path BLOCKCHAIN_STORE_PATH
~~~~

`BLOCKCHAIN_STORE_PATH` refers to a directory or a file made by
a Libplanet-powered game.  If you need a sample data file please contact us
on [our Discord chat][1]!

If you omit `--store-path` switch in online mode, explorer will use memory to
store blockchain instead of storage.

[.NET Core]: https://dotnet.microsoft.com/
[PowerShell]: https://microsoft.com/PowerShell
[1]: https://planetarium.dev/discord


GraphQL
-------

The key purpose of this project is to provide GraphQL endpoint.  The endpoint
is placed:

    /graphql/


GraphQL Playground
------------------

This provides a built-in GraphQL Playground.  The web root path serves it:

    /

How to use progressive features
-------------------------------

Now, it uses `IRichStore` to improve transaction query speed
and provide more usable features (e.g., `blockRef`).

It provides some implementations like below:

 - `LiteDBRichStore`
 - `MySQLRichStore`

To use `MySQLRichStore`, it needs to fill command line arguments started with
`mysql-` prefix fully and correctly.
Else, it will use `LiteDBRichStore` as default.
