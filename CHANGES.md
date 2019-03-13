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
 -  Added `AccountStateGetter` delegate to provide a read-only view to
    account states.
 -  Added `IAccountStateDelta` interface to replace `AddressStateMap`.
    The interface purposes to provide a read-write view to account states
    with maintaining `UpdatedAddresses` (so-called "dirty").
 -  The type of `IActionContext.PreviousStates` property was changed from
    `AddressStateMap` to `IAccountStateDelta`.
 -  The return type of `IAction.Execute()` method was changed from
    `AddressStateMap` to `IAccountStateDelta`.
 -  Removed `IAction.RequestStates()` method because there is no need for it
    and thus it is not used anymore.
 -  `Transaction<T>.Recipient` and `RawTransaction.Recipient` properties were
    replaced by `Transaction<T>.UpdatedAddresses` and
    `RawTransaction.UpdatedAddresses` properties.
    The corresponding parameter names on constructors and methods were
    replaced too.
 -  Since the schema of `RawTransaction` class was changed, the serialization
    format of transactions and blocks were also changed.  It affects to
    the way to generate `Transaction<T>.Signature`, `Transaction<T>.Id`, and
    `Block.Hash` values as well.
 -  Fixed a bug that mutating a collection of `IAction`s passed to
    constructors or factory methods of `Transaction<T>` had affected
    made instances as well.
    The type of `Transaction<T>.Actions` property was changed from
    `IList<T>` to `IImmutableList<T>`.  The corresponding parameters on
    constructors and factory methods also were changed to take
    `IEnumerable<T>` instead of `IList<T>`.
 -  Added `Transaction<T>.EvaluateActions()` method.
 -  Added `Block<T>.EvaluateActions()` generator method.
 -  A nullary overload of `Block<T>.Validate()` method was gone
    so that the block validation API is always time-wise.
    Instead, `Block<T>.Validate()` method now has only one overload:
    `Validate(DateTimeOffset, AccountStateGetter)` returning
    `IAccountStateDelta`.
 -  Added `InvalidTxUpdatedAddressesException` exception class.
 -  `Block<T>.Validate()` and `BlockChain<T>.Validate()` methods now can
    throw an `InvalidTxUpdateAddressesException`.
 -  The type of `Peer.Urls` property was changed from `Uri` to `IPEndPoint`.
 -  Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to
    work around NAT so that `Peer`'s endpoints don't have to be multiple,
    `Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed
    from `IImmutableList<Uri>` to `IPEndPoint`.
    [[#120], [#123] by Yang Chun Ung, [#126], [#127]]
 -  `Address` and `TxId` are now serializable.
    [[#99], [#124] by Qria]
 -  Added `Address.Size` constant, which is fixed to the `Int32` 20.
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
