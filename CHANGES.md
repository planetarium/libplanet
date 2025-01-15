Libplanet changelog
===================

Version 6.0.0
-------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

 -  (Libplanet.Types) Changed `Currency` from a `struct` to a `class`.
    [[#3888]]
 -  (Libplanet.Types) Changed `Currency()` to throw an `ArgumentException`
    if an argument for `ticker` has leading and/or trailing white spaces.
    [[#3888]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

### Behavioral changes

### Bug fixes

 -  (Libplanet.Types) Fixed several bugs where an invalid `Currency` object
    could be created through deserialization.  [[#3888]]

### Dependencies

### CLI tools

[#3888]: https://github.com/planetarium/libplanet/pull/3888


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
