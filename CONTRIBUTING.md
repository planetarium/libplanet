Contributor guide
=================

Note: This document at present is for only code contributors.
We should expand it so that it covers reporting bugs, filing issues,
and writing docs.


Questions & online chat  [![Discord](https://img.shields.io/discord/928926944937013338.svg?color=7289da&logo=discord&logoColor=white)][Discord server]
-----------------------

We have a [Discord server] to discuss Libplanet.  There are some channels
for purposes in the *Libplanet* category:

 -  *#libplanet-users*: Chat with game programmers who use Libplanet.
    Ask questions to *use* Libplanet for your games.  People here usually
    speak in Korean, but feel free to speak in English.
 -  *#libplanet-dev*: Chat with maintainers and contributors of Libplanet.
    Ask questions to *hack* Libplanet and to make a patch for it.  People here
    usually speak in Korean, but feel free to speak in English.

[Discord server]: https://planetarium.dev/discord


Prerequisites
-------------

You need [.NET Core] SDK 6.0+ which provides the latest C# compiler and .NET VM.
Read and follow the instruction to install .NET Core SDK on
the [.NET Core downloads page][1].
FYI if you use macOS and [Homebrew] you can install it by
`brew cask install dotnet-sdk` command.

Make sure that your .NET Core SDK is 6.0 or higher.  You could show
the version you are using by `dotnet --info` command.

Although it is not necessary, you should install a proper IDE for .NET
(or an [OmniSharp] extension for your favorite editor — except it takes
hours to properly configure and integrate with your editor).
C# is not like JavaScript or Python; it is painful to code in C# without IDE.

Unless you already have your favorite setup, we recommend you to use
[Visual Studio Code].  It is free, open source, and made by Microsoft, which
made .NET as well.  So Visual Studio Code has a [first-party C# extension][2]
which works well together.

[.NET Core]: https://dot.net/
[Homebrew]: https://brew.sh/
[OmniSharp]: http://www.omnisharp.net/
[Visual Studio Code]: https://code.visualstudio.com/
[1]: https://dotnet.microsoft.com/download
[2]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp


Build
-----

The following command installs dependencies (required library packages) and
builds the entire *Libplanet* solution:

    dotnet build

We use [SonarAnalyzer] to check our code quality but it takes longer to build.
To skip the analyzer, you can use:

    dotnet build -p:SkipSonar=true

[SonarAnalyzer]: https://github.com/SonarSource/sonar-dotnet

### Mono

To build the solution with Mono, you must use the *ReleaseMono* solution
configuration. It is identical with *Release* target (creates built files
under `{bin,obj}/Release` directory), except that *ReleaseMono* excludes
projects with dependencies that are incompatible with Mono
(*Libplanet.Explorer&ast;*):

    msbuild -restore -p:Configuration=ReleaseMono -p:TestsTargetFramework=net47


Projects
--------

The [planetarium/libplanet](https://github.com/planetarium/libplanet) repository
on GitHub consists of several projects:

 -  *Libplanet*: The main project, which contains the most of implementation
    code.  It is distributed as a NuGet package with the same name:
    *[Libplanet][NuGet package]*.

 -  *Libplanet.Net*: The peer-to-peer networking layer built on top of
    *Libplanet*.  This is distributed as a distinct NuGet package:
    *[Libplanet.Net]*.

 -  *Libplanet.Node*: User-friendly façade API for building your own
     peer-to-peer network.  This is distributed as a distinct NuGet package:
    *[Libplanet.Node]*.

 -  *Libplanet.Stun*: The project dedicated to implement [TURN & STUN].
    This is distributed as a distinct NuGet package: *[Libplanet.Stun]*.

 -  *Libplanet.RocksDBStore*: The `IStore` implementation built on [RocksDB].
    As this depends on platform-dependent libraries (which is written in C/C++),
    this is distributed as a distinct NuGet package: *[Libplanet.RocksDBStore]*.

 -  *Libplanet.Analyzers*: Roslyn Analyzer (i.e., lint) for game programmers who
    use Libplanet.  This project is distributed as a distinct NuGet package:
    *[Libplanet.Analyzers]*.

 -  *Libplanet.Extensions.Cocona*: The project to provide the [Cocona] commands
    to handle *Libplanet* structures in command line.  This is  distributed as
    a distinct NuGet package: *[Libplanet.Extensions.Cocona]*.

 -  *Libplanet.Tools*: The CLI tools for Libplanet.  This project is distributed
    as a distinct NuGet package: *[Libplanet.Tools]*. See its own
    [README.md](Libplanet.Tools/README.md).

 -  *Libplanet.Explorer*: Libplanet Explorer, a web server that exposes
    a Libplanet blockchain as a [GraphQL] endpoint.  There is the official
    web front-end depending on this too: [libplanet-explorer-frontend].
    Note that this project in itself is a library, and packaging it as
    an executable is done by a below project named
    *Libplanet.Explorer.Executable*.

 -  *Libplanet.Explorer.Executable*: Turns Libplanet Explorer into a single
    executable binary so that it is easy to distribute.

 -  *Libplanet.Benchmarks*: Performance benchmarks.
    See the [*Benchmarks*](#benchmarks) section below.

 -  *Libplanet.Tests*: Unit tests of the *Libplanet* project.  See the *Tests*
    section below.

 -  *Libplanet.Net.Tests*: Unit tests of the *Libplanet.Net* project.

 -  *Libplanet.Node.Tests*: Unit tests of the *Libplanet.Node* project.

 -  *Libplanet.Stun.Tests*: Unit tests of the *Libplanet.Stun* project.

 -  *Libplanet.RocksDBStore.Tests*: Unit tests of the *Libplanet.RocksDBStore*
    project.

 -  *Libplanet.Analyzers.Tests*: Unit tests of the *Libplanet.Analyzers*
    project.

 -  *Libplanet.Explorer.Tests*: Unit tests of the *Libplanet.Explorer*
    project.

 -  *Libplanet.Extensions.Cocona.Tests*: Unit tests of the
    *Libplanet.Extensions.Cocona* project.


[NuGet package]: https://www.nuget.org/packages/Libplanet/
[Libplanet.Net]: https://www.nuget.org/packages/Libplanet.Net/
[Libplanet.Node]: https://www.nuget.org/packages/Libplanet.Node/
[TURN & STUN]: https://snack.planetarium.dev/eng/2019/06/nat_traversal_2/
[RocksDB]: https://rocksdb.org/
[Libplanet.Stun]: https://www.nuget.org/packages/Libplanet.Stun/
[Libplanet.RocksDBStore]: https://www.nuget.org/packages/Libplanet.RocksDBStore/
[Libplanet.Analyzers]: https://www.nuget.org/packages/Libplanet.Analyzers/
[Cocona]: https://www.nuget.org/packages/Cocona
[Libplanet.Extensions.Cocona]: https://www.nuget.org/packages/Libplanet.Extensions.Cocona
[Libplanet.Tools]: https://www.nuget.org/packages/Libplanet.Tools/
[GraphQL]: https://graphql.org/
[libplanet-explorer-frontend]: https://github.com/planetarium/libplanet-explorer-frontend


Tests [![Build Status (CircleCI)](https://circleci.com/gh/planetarium/libplanet/tree/main.svg?style=shield)][CircleCI] [![Codecov](https://codecov.io/gh/planetarium/libplanet/branch/main/graph/badge.svg)][2]
-----

We write as complete tests as possible to the corresponding implementation code.
Going near to the [code coverage][3] 100% is one of our goals.

The *Libplanet* solution consists of several projects.
Every project without *.Tests* suffix is an actual implementation.
These are built to *Libplanet\*.dll* assemblies and packed into one NuGet
package.

*Libplanet\*.Tests* is a test suite for the *Libplanet\*.dll* assembly.
All of them depend on [Xunit], and every namespace and class in these
corresponds to one in *Libplanet&ast;* projects.
If there's *Libplanet.Foo.Bar* class there also should be
*Libplanet.Foo.Bar.Tests* to test it.

To build and run unit tests at a time with .NET Core execute the below command:

    dotnet test

To run unit tests with .NET Framework on Windows:

~~~~ pwsh
nuget install xunit.runner.console -Version 2.4.1
msbuild /restore /p:TestsTargetFramework=net472
& (gci xunit.runner.console.*\tools\net472\xunit.console.exe | select -f 1) `
  (gci *.Tests\bin\Debug\net472\*.Tests.dll)
~~~~

Or with Mono (As mentioned above in the [Mono](#Mono) section, use
*ReleaseMono* solution configuration to avoid dependency issues):

~~~~ bash
nuget install xunit.runner.console
msbuild /restore /p:Configuration=ReleaseMono /p:TestsTargetFramework=net47
mono xunit.runner.console.*/tools/net47/xunit.console.exe \
    *.Tests/bin/Release/net47/*.Tests.dll
~~~~

[CircleCI]: https://app.circleci.com/pipelines/github/planetarium/libplanet
[3]: https://codecov.io/gh/planetarium/libplanet
[Xunit]: https://xunit.github.io/


### `TURN_SERVER_URLS`

Some tests depend on a TURN server.  If `TURN_SERVER_URLS` environment variable
is present, these tests also run.  Otherwise, these tests are skipped.

As the name implies, `TURN_SERVER_URLS` can have more than one TURN server URL.
URLs are separated by whitespaces like `turn://user:password@host:3478/
turn://user:password@host2:3478/`.  If multiple TURN servers are provided,
each test case pick a random one to use so that loads are balanced.

FYI there are several TURN implementations like [Coturn] and [gortc/turn],
or cloud offers like [Xirsys].

[Coturn]: https://github.com/coturn/coturn
[gortc/turn]: https://github.com/gortc/turn
[Xirsys]: https://xirsys.com/


### [xunit-unity-runner]

Unity is one of our platforms we primarily target to support, so we've been
testing Libplanet on the actual Unity runtime, and you could see whether it's
passed on [CircleCI].

However, if it fails and it does not fail on other platforms but only Unity,
you need to run Unity tests on your own machine so that you rapidily and
repeatedly tinker things, make a try, and immediately get feedback from them.

Here's how to run Unity tests on your machine.  We've made and used
[xunit-unity-runner] to run [Xunit] tests on the actual Unity runtime,
and our build jobs on CircleCI also use this.  This test runner
is actually a Unity app, though it's not a game app.  As of June 2019,
there are [executable binaries][4] for Linux, macOS, and Windows.
Its usage is simple.  It's a CLI app that takes *absolute* paths to
.NET assemblies (*.dll*) that consist of test classes (based on Xunit).

You can build these assemblies using `msbuild -r` Mono or .NET Framework
provide.
*You can't build them using `dotnet build` command or `dotnet msbuild`,*
because the Unity runtime is not based on .NET Core but Mono,
which is compatible with .NET Framework 4.7.
Please be sure that Mono's *bin* directory is prior to .NET Core's one
(or it's okay too if .NET Core is not installed at all).  Mono or .NET
Framework's `msbuild` could try to use .NET Core's version of several
utilities during build, and this could cause some errors.
Also be aware that you must be building the solution with the *ReleaseMono*
configuration, as mentioned in the [Mono](#Mono) section.

The way to execute the runner binary depend on the platform.  For details,
please read [xunit-unity-runner]'s README.  FYI you can use `-h`/`--help`
option as well.

To sum up, the instruction is like below (the example is assuming Linux):

    msbuild -r -p:Configuration=ReleaseMono -p:TestsTargetFramework=net47
    xunit-unity-runner/StandaloneLinux64 \
      "$PWD"/*.Tests/bin/Release/net47/*.Tests.dll

[xunit-unity-runner]: https://github.com/planetarium/xunit-unity-runner
[4]: https://github.com/planetarium/xunit-unity-runner/releases/latest


Style convention
----------------

Please follow the existing coding convention.  We are already using several
static analyzers.  They are automatically executed together with `msbuild`,
and will warn you if there are any style errors.

You should also register Git hooks we commonly use:

    git config core.hooksPath hooks

We highly recommend you to install an extension for [EditorConfig] in your
favorite editor.  Some recent editors have built-in support for EditorConfig,
e.g., Rider (IntelliJ IDEA), Visual Studio.  Many editors have an extension to
support EditorConfig, e.g., [Atom], [Emacs], [Vim], [VS Code].

[EditorConfig]: https://editorconfig.org/
[Atom]: https://atom.io/packages/editorconfig
[Emacs]: https://github.com/editorconfig/editorconfig-emacs
[Vim]: https://github.com/editorconfig/editorconfig-vim
[VS Code]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig


Benchmarks
----------

In order to track performance improvements or regressions, we maintain a set of
benchmarks and continuously measure them in the CI.  You can run benchmarks
on your local environment too:

    dotnet run -p Libplanet.Benchmarks -c Release -- -j short -f "*"

Note that there is `-j short`; without this a whole set of benchmarks takes
quite a long time.  This will print like below:

    |               Method | UnrollFactor |      Mean |      Error |    StdDev |
    |--------------------- |------------- |----------:|-----------:|----------:|
    |       MineBlockEmpty |           16 |  12.20 ms |  11.649 ms | 0.6385 ms |
    |  MineBlockOneTran... |            1 |  14.54 ms |   3.602 ms | 0.1974 ms |
    |                  ... |          ... |       ... |        ... |       ... |

You can measure only part of benchmarks by `-f`/`--filter`ing them:

    dotnet run -p Libplanet.Benchmarks -c Release -- -j short -f "*MineBlock*"

All benchmark code is placed under *Libplanet.Benchmarks* project.
As our benchmarks are based on [BenchmarkDotNet], please read their official
docs for details.

[BenchmarkDotNet]: https://benchmarkdotnet.org/


Releasing a new version
-----------------------

Read the [Releasing guide](RELEASE.md) which dedicates to this topic.
