GitHub
Libplanet
GitHub Hackathon
=========

[![Discord](https://img.shields.io/discord/539405872346955788.svg?color=7289da&logo=discord&logoColor=white)][Discord]
[![Build Status](https://dev.azure.com/planetarium/libplanet/_apis/build/status/planetarium.libplanet?branchName=master)][Azure Pipelines]
[![Codecov](https://codecov.io/gh/planetarium/libplanet/branch/master/graph/badge.svg)][Codecov]
[![NuGet](https://img.shields.io/nuget/v/Libplanet.svg?style=flat)][NuGet]
[![NuGet (prerelease)](https://img.shields.io/nuget/vpre/Libplanet.svg?style=flat)][NuGet]

Libplanet is a .NET library for creating multiplayer online game in
decentralized fashion, which means the whole gameplay occurs on a
peer-to-peer network among equal nodes rather than an authorized central
server.  Under the hood, it incorporates many features (e.g.,
[digital signature], [BFT] consensus, data replication) of a [blockchain].

[Discord]: https://discord.gg/ue9fgc3
[Azure Pipelines]: https://dev.azure.com/planetarium/libplanet/_build/latest?definitionId=1&branchName=master
[Codecov]: https://codecov.io/gh/planetarium/libplanet
[NuGet]: https://www.nuget.org/packages/Libplanet/
[digital signature]: https://en.wikipedia.org/wiki/Digital_signature
[BFT]: https://en.wikipedia.org/wiki/Byzantine_fault_tolerance
[blockchain]: https://en.wikipedia.org/wiki/Blockchain


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

For a merge commit build, a version name is like `0.1.0-dev.20181231235959`
where `20181231235959` is a UTC timestamp of the build.
For a daily build, a version name is like `0.1.0-nightly.20181231`.

Unfortunately, Unity currently does not support NuGet.  There are some Unity
plug-ins to deal with NuGet package system, and these seem immature at present.
To use Libplanet on Unity, you need to manually extract *Libplanet.dll*
from *Libplanet.\*.nupkg* file and place it inside of your Unity project.
We are acknowledging the fact Libplanet is currently not very usable together
with Unity, and promise to make it better in the next few minor releases.
In the near future, we are going to submit it to [Unity Asset Store] too.

[releases]: https://github.com/planetarium/libplanet/releases
[Unity Asset Store]: https://assetstore.unity.com/
[1]: https://docs.microsoft.com/nuget/consume-packages/ways-to-install-a-package


Build
-----

You could build a *Libplanet.dll* and *Libplanet.Stun.dll* assemblies
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
