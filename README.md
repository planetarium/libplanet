Libplanet
=========

This is a .NET library for creating blockchain games.


Build
-----

The following command installs dependencies (required library packages) and
builds the whole Libplent solution:

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
msbuild /t:'XunitTest' Libplanet.Tests
~~~~~~~~
