Libplanet changelog
===================

Version 6.0.0
-------------

To be released.

From this version Libplanet projects use .NET 8.0 as target framework.
Therefore `BinaryFormatter` related methods are removed
since it has been deprecated. See also: [.NET Document]

Added new projects:
 -  Libplanet.Node
 -  Libplanet.Node.Executable
 -  Libplanet.Node.Extensions
 -  Libplanet.Node.Tests

Libplanet.Node is a project that helps users easily configure
Libplanet-based nodes.

### Deprecated APIs

 -  All classes became not to inherit `ISerializable` anymore.

### Backward-incompatible API changes

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools


[.NET Document]: https://learn.microsoft.com/en-us/dotnet/core/compatibility/serialization/8.0/binaryformatter-disabled


Previous version changes
------------------------

 -  [Version 5.x.x]
 -  [Version 4.x.x]
 -  [Version 3.x.x]
 -  [Version 2.x.x]
 -  [Version 1.x.x]
 -  [Version 0.x.x]


[Version 4.x.x]: ./changes/v5.md
[Version 4.x.x]: ./changes/v4.md
[Version 3.x.x]: ./changes/v3.md
[Version 2.x.x]: ./changes/v2.md
[Version 1.x.x]: ./changes/v1.md
[Version 0.x.x]: ./changes/v0.md
