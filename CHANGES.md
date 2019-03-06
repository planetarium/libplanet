Libplanet changelog
===================

Version 0.2.0
-------------

To be released.

 -  Renamed `Transaction<T>.Sender`, `RawTransaction.Signer`, and
    `IActionContext.From` properties to `Signer`.
    The corresponding parameter names on constructors and
    methods were also renamed too.
 -  Removed `IActionContext.To` property.
 -  Added `IAccountStateView` interface.
    The interface purposes to provide a read-only view to account states.
 -  Added `IAccountStateDelta` interface to replace `AddressStateMap`.
    The interface purposes to provide a read-write view to account states
    with maintaining `UpdatedAddresses` (so-called "dirty").
 -  The type of `IActionContext.PreviousStates` property was changed from
    `AddressStateMap` to `IAccountStateDelta`.
 -  The return type of `IAction.Execute()` method was changed from
    `AddressStateMap` to `IAccountStateDelta`.
 -  The type of `Peer.Urls` property was changed from `Uri` to `IPEndPoint`.
 -  Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to
    work around NAT so that `Peer`'s endpoints don't have to be multiple,
    `Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed
    from `IImmutableList<Uri>` to `IPEndPoint`.
    [[#120], [#123] by Yang Chun Ung, [#126], [#127]]
 -  `Address` and `TxId` are now serializable.
    [[#99], [#124] by Qria]
 -  `Swarm.AddPeersAsync()` was fixed so that unreachable `Peer`s are ignored.
    [[#128]]

[#99]: https://github.com/planetarium/libplanet/issues/99
[#120]: https://github.com/planetarium/libplanet/issues/120
[#123]: https://github.com/planetarium/libplanet/pull/123
[#124]: https://github.com/planetarium/libplanet/pull/124
[#126]: https://github.com/planetarium/libplanet/issues/126
[#127]: https://github.com/planetarium/libplanet/pull/127
[#128]: https://github.com/planetarium/libplanet/pull/128
[RFC 5389]: https://tools.ietf.org/html/rfc5389
[RFC 5766]: https://tools.ietf.org/html/rfc5766


Version 0.1.1
-------------

Released on March 5, 2019.

 -  Improved stability of `Swarm` and `SwarmTest`.


Version 0.1.0
-------------

Initial release.  Released on February 26, 2019.
