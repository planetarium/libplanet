Libplanet
=========

[![Discord](https://img.shields.io/discord/928926944937013338.svg?color=7289da&logo=discord&logoColor=white)][Discord]
[![Build Status (CircleCI)](https://circleci.com/gh/planetarium/libplanet/tree/main.svg?style=shield)][CircleCI]
[![Codecov](https://codecov.io/gh/planetarium/libplanet/branch/main/graph/badge.svg)][Codecov]
[![NuGet](https://img.shields.io/nuget/v/Libplanet.svg?style=flat)][NuGet]
[![NuGet (prerelease)](https://img.shields.io/nuget/vpre/Libplanet.svg?style=flat)][NuGet]

Libplanet is a .NET library for creating multiplayer online game in
decentralized fashion, which means the whole gameplay occurs on a
peer-to-peer network among equal nodes rather than an authorized central
server.  Under the hood, it incorporates many features (e.g.,
[digital signature], [BFT] consensus, data replication) of a [blockchain].

It has competitive advantages over other solutions for decentralized gaming:

 -  *Embeddable*: A game app does not have to communicate with another running
    process, hence it doesn't require extra marshaling or processes management.
    To draw a parallel, Libplanet is closer to SQLite than MySQL or PostgreSQL.

 -  *Isomorphic*: Libplanet is a .NET library, so every game logic can be
    written in the same language, C#, and run on the blockchain. No glue
    code or "smart contracts" are needed.

 -  *Token-independent*: Unlike almost every blockchain system, it does not
    force users to create and deal with yet-another-cryptocurrency. Your
    game can be free to play, and enjoyed by regular gamers.

To learn more about why Planetarium is creating technology for fully
decentralized games, please refer to our [blog post].

[Discord]: https://planetarium.dev/discord
[CircleCI]: https://app.circleci.com/pipelines/github/planetarium/libplanet
[Codecov]: https://codecov.io/gh/planetarium/libplanet
[NuGet]: https://www.nuget.org/packages/Libplanet/
[digital signature]: https://en.wikipedia.org/wiki/Digital_signature
[BFT]: https://en.wikipedia.org/wiki/Byzantine_fault_tolerance
[blockchain]: https://en.wikipedia.org/wiki/Blockchain
[blog post]: https://medium.com/planetarium/introducing-planetarium-powering-games-with-freedom-22ab1ab70e0e


NuGet
-----

For every stable release, we pack Libplanet into a *.nupkg* and
upload it to [NuGet] and GitHub [releases] page.
(You can find the changelog for versions from [releases] page.)
To use Libplanet in your game, your project needs to add a dependency
to *Libplanet* package.  On Visual Studio IDE, run the following command
in Package Manager Console:

    Install-Package Libplanet

If you prefer `dotnet` CLI run the following command instead:

~~~~~~~~ bash
dotnet add package Libplanet
~~~~~~~~

See also Microsoft's docs on [different ways to install NuGet package][1].

In addition to stable releases, we also provide pre-release packages.
For every day and every merge commit, it is packed into a *.nupkg*
and uploaded to [NuGet] with a hyphen-suffixed version name.

For a merge commit build, a version name looks like
`0.1.0-dev.20181231235959+a0b1c2d` where `20181231235959` is a UTC timestamp of
the build and `a0b1c2d` is the first 7 hexadecimals of the Git commit hash.
For a daily build, a version name is like `0.1.0-nightly.20181231+a0b1c2d`.

Unfortunately, Unity currently does not support NuGet.  There are some Unity
plug-ins to deal with NuGet package system, and these seem immature at present.
To use Libplanet on Unity, you need to manually extract *Libplanet.dll*
from *Libplanet.\*.nupkg* file and place it inside of your Unity project.
We are acknowledging the fact Libplanet is currently not very usable together
with Unity, and promise to make it better in the next few minor releases.
Until then, you could try [MSBuildForUnity] which is experimental as of
January 2020.

[releases]: https://github.com/planetarium/libplanet/releases
[MSBuildForUnity]: https://github.com/microsoft/MSBuildForUnity
[1]: https://docs.microsoft.com/nuget/consume-packages/ways-to-install-a-package


Build
-----

You could build *Libplanet.dll* and *Libplanet.Stun.dll* assemblies
from the source code.

The following command installs dependencies (required library packages) and
builds the whole Libplanet solution:

~~~~~~~~ bash
dotnet build
~~~~~~~~

Note that `dotnet` command is distributed together with [.NET Core] SDK.

If you'd like to contribute code to the Libplanet project in earnest,
please read our [contributor guide](CONTRIBUTING.md).

[.NET Core]: https://dot.net/
