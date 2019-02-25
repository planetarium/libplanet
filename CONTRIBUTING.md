Contributor guide
=================

Note: This document at present is for only code contributors.
We should expand it so that it covers reporting bugs, filing issues,
and writing docs.


Questions & online chat  [![Discord](https://img.shields.io/discord/539405872346955788.svg?color=7289da&logo=discord&logoColor=white)][Discord server]
-----------------------

We have a [Discord server] to discuss Libplanet.  There are some channels
for purposes:

 -  *#libplanet-users*: Chat with game programmers who use Libplanet.
    Ask questions to *use* Libplanet for your games.
 -  *#libplanet-dev*: Chat with maintainers and contributors of Libplanet.
    Ask questions to *hack* Libplanet and to make a patch for it.
 -  *#libplanet-users-kr*: The same purpose to *#libplanet-users*,
    except you can speak Korean instead English here.

[Discord server]: https://discord.gg/ue9fgc3


Prerequisites
-------------

If you use Linux or macOS you need [Mono], which provides C# compiler and
.NET VM.  You could install it by `sudo apt install mono-devel` command
if you use Ubuntu Linux.  If you use macOS and [Homebrew], You can install
it by `brew cask install mono-mdk` command.

If you are on Windows you need things like C# compiler included in
[Build Tools for Visual Studio 2017][1].  Choose the following workloads
during installation:

 -  <q>Windows</q> → <q>.NET desktop build tools</q>
 -  <q>Other Toolsets</q> → <q>.NET Core build tools</q>

These tools should bring MSBuild, the Libplanet project uses to build, as well.
Check if `msbuild` is available on the shell or Command Prompt.  If it fails
to find command named `msbuild` it might be not installed correctly or its
directory might be missing in the `PATH` environment.

Although it is not necessary, you should install a proper IDE for .NET
(or an [OmniSharp] extension for your favorite editor — except it takes
hours to properly configure and integrate with your editor).
C# is not like JavaScript or Python; it is painful to code in C# without IDE.

Unless you already have your favorite setup, we recommend you to use
[Visual Studio Code].  It is free, open source, and made by Microsoft, which
made .NET as well.  So Visual Studio Code has a [first-party C# extension][2]
which works well together.

[Mono]: https://www.mono-project.com/
[Homebrew]: https://brew.sh/
[OmniSharp]: http://www.omnisharp.net/
[Visual Studio Code]: https://code.visualstudio.com/
[1]: https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2017
[2]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp


Build
-----

The following command installs dependencies (required library packages) and
builds the whole Libplanet solution:

    msbuild -r


Tests [![Build Status](https://travis-ci.com/planetarium/libplanet.svg?branch=master)][Travis CI] [![Codecov](https://codecov.io/gh/planetarium/libplanet/branch/master/graph/badge.svg)][2]
-----

We write as complete tests as possible to the corresponding implementation code.
Going near to the [code coverage][2] 100% is one of our goals.

The *Libplanet* solution consists of two projects.  *Libplanet* is an actual
implementation.  It is built to a *Libplanet.dll* assembly and packed as
a NuGet package.

*Libplanet.Tests* is a test suite for the *Libplanet.dll* assembly.
It depends on [Xunit], and every namespace and class in it corresponds to
one in *Libplanet* project.  If there's *Libplanet.Foo.Bar* class there also
should be *Libplanet.Tests.Foo.BarTest* to test it.

To build and run unit tests at a time execute the below command:

    msbuild -r -t:'Build;XunitTest' Libplanet.Tests

It's okay to omit `-r` and `Build` task if you've already run `msbuild -r`
right before:

    msbuild -t:XunitTest Libplanet.Tests

[Travis CI]: https://travis-ci.com/planetarium/libplanet
[2]: https://codecov.io/gh/planetarium/libplanet
[Xunit]: https://xunit.github.io/


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
