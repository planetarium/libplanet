Contributor guide
=================

Note: This document at present is for only code contributors.
We should expand it so that it covers reporting bugs, filing issues,
and writing docs.


Questions & online chat  [![Discord](https://img.shields.io/discord/539405872346955788.svg?color=7289da&logo=discord&logoColor=white)][Discord server]
-----------------------

We have a [Discord server] to discuss Libplanet.  There are some channels
for purposes in the *Libplanet* category:

 -  *#announcement*: Maintainers announce events like our roadmap or local
    events.
 -  *#users*: Chat with game programmers who use Libplanet.
    Ask questions to *use* Libplanet for your games.
 -  *#development*: Chat with maintainers and contributors of Libplanet.
    Ask questions to *hack* Libplanet and to make a patch for it.
 -  *#users-ko*: The same purpose to *#users*,
    except you can speak Korean instead English here.
 -  *#development-ko*: The same purpose to *#development*,
    except you can speak Korean instead English here.

[Discord server]: https://discord.gg/ue9fgc3


Prerequisites
-------------

You need [.NET Core] SDK 2.2+ which provides the latest C# compiler and .NET VM.
Read and follow the instruction to install .NET Core SDK on
the [.NET Core downloads page][1].
FYI if you use macOS and [Homebrew] you can install it by
`brew cask install dotnet-sdk` command.

Make sure that your .NET Core SDK is 2.2 or higher.  You could show
the version you are using by `dotnet --info` command.

If it's Windows please check if the environment variable named
`MSBuildSDKsPath` refers to the proper version of .NET Core SDK.
If you use Visual Studio 2017 (not 2019) you can only use .NET Core 2.2.105
at the highest.  .NET Core SDK higher than the version 2.2.105 is not
recognized Visual Studio 2017.

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


Tests [![Build Status](https://dev.azure.com/planetarium/libplanet/_apis/build/status/planetarium.libplanet?branchName=master)][Azure Pipelines] [![Codecov](https://codecov.io/gh/planetarium/libplanet/branch/master/graph/badge.svg)][2]
-----

We write as complete tests as possible to the corresponding implementation code.
Going near to the [code coverage][3] 100% is one of our goals.

The *Libplanet* solution consists of 4 projects.  *Libplanet* and
*Libplanet.Stun* are actual implementations.  These are built to *Libplanet.dll*
and *Libplanet.Stun.dll* assemblies and packed into one NuGet package.

*Libplanet.Tests* is a test suite for the *Libplanet.dll* assembly, and
*Libplanet.Stun.Tests* is a test suite for the *Libplanet.Stun.dll* assembly.
Both depend on [Xunit], and every namespace and class in these corresponds to
one in *Libplanet* or *Libplanet.Stun* projects.
If there's *Libplanet.Foo.Bar* class there also should be
*Libplanet.Tests.Foo.BarTest* to test it.

To build and run unit tests at a time execute the below command:

    dotnet test

[Azure Pipelines]: https://dev.azure.com/planetarium/libplanet/_build/latest?definitionId=1&branchName=master
[3]: https://codecov.io/gh/planetarium/libplanet
[Xunit]: https://xunit.github.io/


### `TURN_SERVER_URL`

Some tests depend on a TURN server.  If `TURN_SERVER_URL` environment variable
is set (the value looks like `turn://user:password@host:3478/`)
these tests also run.  Otherwise, these tests are skipped.

FYI there are several TURN implementations like [Coturn] and [gortc/turn],
or cloud offers like [Xirsys].

[Coturn]: https://github.com/coturn/coturn
[gortc/turn]: https://github.com/gortc/turn
[Xirsys]: https://xirsys.com/


### [xunit-unity-runner]

Unity is one of our platforms we primarily target to support, so we've been
testing Libplanet on the actual Unity runtime, and you could see whether it's
passed on [Azure Pipelines].

However, if it fails and it does not fail on other platforms but only Unity,
you need to run Unity tests on your own machine so that you rapidily and
repeatedly tinker things, make a try, and immediately get feedback from them.

Here's how to run Unity tests on your machine.  We've made and used
[xunit-unity-runner] to run [Xunit] tests on the actual Unity runtime,
and our build jobs on Azure Pipelines also use this.  This test runner
is actually a Unity app, though it's not a game app.  As of June 2019,
there are [executable binaries][4] for Linux, macOS, and Windows.
Its usage is simple.  It's a CLI app that takes *absolute* paths to
.NET assemblies (*.dll*) that consist of test classes (based on Xunit).

You can build these assemblies using `msbuild -r` Mono or .NET Framework
provide.
*You can't build them using `dotnet build` command or `dotnet msbuild`,*
because the Unity runtime is not based on .NET Core but Mono,
which is compatible with .NET Framework 4.6.
Please be sure that Mono's *bin* directory is prior to .NET Core's one
(or it's okay too if .NET Core is not installed at all).  Mono or .NET
Framework's `msbuild` could try to use .NET Core's version of several
utilities during build, and this could cause some errors.

The way to execute the runner binary depend on the platform.  For details,
please read [xunit-unity-runner]'s README.  FYI you can use `-h`/`--help`
option as well.

To sum up, the instruction is like below (the example is assuming Linux):

    msbuild -r
    xunit-unity-runner/StandaloneLinux64 \
      "`pwd`"/*.Tests/bin/Debug/net461/*.Tests.dll

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

Troubleshooting
--------------

### I got the error like `Fody is only supported on MSBuild 16 and above. Current version: 15.`

Your .NET Core SDK version probably is outdated.  Our recommended version is: *2.2.300*.

1. Download the lastest (as of June 2019) .NET Core SDK binary from the official website:

   <https://dotnet.microsoft.com/download/dotnet-core/2.2#sdk-2.2.300>

2. Extract *.tar.gz* in proper directory.

3. You could permanently add the following commands into your shell profile.

    ~~~~
    export DOTNET_ROOT="$YOUR_DOTNET_INSTALLATION_PATH/dotnet"
    export PATH="$PATH:$DOTNET_ROOT"
    ~~~~

