Libplanet
=========

[![Build Status][]][Azure Pipeline]

Libplanet is a .NET library for creating multiplayer online game in
a decentralized fashion, which means a whole game play is achieved through
peer-to-peer network among equal nodes rather than having a authorized central
server.  Under the hood, it shares many instruments (e.g., [digital signature],
[BFT] consensus, data replication) with a [blockchain], or rather it is.

This project currently is not distributed through NuGet.  We are going to ship
the first release soon, and it will be distributed as a NuGet package at that
time.  However, currently you can build it by yourself from the source code.
Please read the below instructions.

[Build Status]: https://dev.azure.com/planetarium-dev/libplanet.net/_apis/build/status/planetarium.libplanet.net?branchName=master
[Azure Pipeline]: https://dev.azure.com/planetarium-dev/libplanet.net/_build/latest?definitionId=1?branchName=master
[digital signature]: https://en.wikipedia.org/wiki/Digital_signature
[BFT]: https://en.wikipedia.org/wiki/Byzantine_fault_tolerance
[blockchain]: https://en.wikipedia.org/wiki/Blockchain


Build
-----

The following command installs dependencies (required library packages) and
builds the whole Libplanet solution:

~~~~~~~~ bash
msbuild /r
~~~~~~~~

Note that `msbuild` is distributed together with Mono framework or
Visual Studio.


Test
----

To build and run unit tests at a time execute the below command:

~~~~~~~~ bash
msbuild /r /t:'Build;XunitTest' Libplanet.Tests
~~~~~~~~

It's okay to omit `/r` and `Build` task if you've already run `msbuild /r`
right before:

~~~~~~~~ bash
msbuild /t:XunitTest Libplanet.Tests
~~~~~~~~
