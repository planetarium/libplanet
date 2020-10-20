Libplanet.Analyzers: Static analysis on Libplanet-powered apps
==============================================================

[![NuGet][nuget-badge]][NuGet]
[![NuGet (prerelease)][nuget-prerelease-badge]][NuGet]

This Roslyn analyzer checks if code has common mistakes prone to made with
Libplanet-powered game apps.  E.g., breaking determinism in `IAction`
implementations.

~~~~ xml
<!-- The below Version attribute should match to your Libplanet's version. -->
<PackageReference Include="Libplanet.Analyzers" Version="0.0.0">
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
  <PrivateAssets>all</PrivateAssets>
</PackageReference>
~~~~

If you want to check your script on Unity editor:

 -  Ensure you use Unity 2020.2 or higher.
 -  Read the official docs: [*Roslyn analyzers and ruleset files*][1].

[NuGet]: https://www.nuget.org/packages/Libplanet.Analyzers/
[nuget-badge]: https://img.shields.io/nuget/v/Libplanet.Analyzers.svg?style=flat
[nuget-prerelease-badge]: https://img.shields.io/nuget/vpre/Libplanet.Analyzers.svg?style=flat
[1]: https://docs.unity3d.com/2020.2/Documentation/Manual/roslyn-analyzers.html


Rules
-----

| Rule                        |                                                |
|-----------------------------|------------------------------------------------|
| [LAA1001](rules/LAA1001.md) | SystemRandomBreaksActionDeterminism            |
| [LAA1002](rules/LAA1002.md) | DictionariesOrSetsShouldBeOrderedToEnumerate   |
