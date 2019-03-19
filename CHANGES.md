Libplanet changelog
===================

Version 0.2.0
-------------

To be released.

 -  `Transaction<T>`'s `Sender`–`Recipient` model was replaced by
    `Signer`–`UpdatedAddresses` model.   Unlike cryptocurrencies,
    transactions in games are not necessarily a transfer of assets,
    so it is difficult to determine what type of assert is transferred
    or who will receives the asset.  A more useful perspective is,
    like what kind of transformation is performed, or what states
    are changed.  To be close to this perspective, we decided to
    get rid of `Transaction<T>.Recipient` (which is singular) and
    have `Transaction<T>.UpdatedAddresses` (which is plural) instead.
    As there is no more asset to transfer, the term `Sender` was also
    renamed to `Signer`, which fits more to the new perspective.
    [[#121]]

     -  Renamed `Transaction<T>.Sender`, `RawTransaction.Signer`, and
        `IActionContext.From` properties to `Signer`.
        The corresponding parameter names on constructors and
        methods were also renamed too.
     -  Old `Transaction<T>.Make()` factory method is replaced by
        new `Transaction<T>.Create()` factory method.  The `timestamp` parameter
        became optional, and the new optional `updatedAddresses` parameter was
        added.
     -  Removed `IActionContext.To` property.
     -  `Transaction<T>.Recipient` and `RawTransaction.Recipient` properties
        were replaced by `Transaction<T>.UpdatedAddresses` and
        `RawTransaction.UpdatedAddresses` properties.
        The corresponding parameter names on constructors and methods were
        replaced too.
     -  Since the schema of `RawTransaction` class was changed,
        the serialization format of transactions and blocks were also changed.
        It affects to the way to generate `Transaction<T>.Signature`,
        `Transaction<T>.Id`, and `Block.Hash` values as well.
     -  Added `InvalidTxUpdatedAddressesException` exception class.
     -  A nullary overload of `Block<T>.Validate()` method was gone
        so that the block validation API is always time-wise.
        Instead, `Block<T>.Validate()` method now has only one overload:
        `Validate(DateTimeOffset, AccountStateGetter)` returning
        `IAccountStateDelta`.
     -  `Block<T>.Validate()` and `BlockChain<T>.Validate()` methods now can
        throw an `InvalidTxUpdateAddressesException`.

 -  The `Address`es `IAction` tries to update no more need to be manually
    coded using `IAction.RequestStates()` method.  That method was
    removed at all, and updated `Address`es became automatically determined
    (for the most cases) by track "dirties" on <dfn>rehearsal mode<dfn>.
    This mode dry-runs `IAction`s with empty `IActionContext.PreviousStates`.
    [[#121]]

     -  Added `AccountStateGetter` delegate to provide a read-only view to
        account states.
     -  Added `IAccountStateDelta` interface to replace `AddressStateMap`.
        The interface purposes to provide a read-write view to account states
        with maintaining `UpdatedAddresses` (so-called "dirty").
        [[#98]]
     -  The type of `IActionContext.PreviousStates` property was changed from
        `AddressStateMap` to `IAccountStateDelta`.
     -  Added `IActionContext.Rehearsal` property.  [[#131]]
     -  The return type of `IAction.Execute()` method was changed from
        `AddressStateMap` to `IAccountStateDelta`.
     -  Removed `IAction.RequestStates()` method because there is no need for it
        and thus it is not used anymore.
     -  Added `Transaction<T>.EvaluateActions()` method.
     -  Added `Block<T>.EvaluateActions()` generator method.

 -  Fixed a bug that mutating a collection of `IAction`s passed to
    constructors or factory methods of `Transaction<T>` had affected
    made instances as well.
    The type of `Transaction<T>.Actions` property was changed from
    `IList<T>` to `IImmutableList<T>`.  The corresponding parameters on
    constructors and factory methods also were changed to take
    `IEnumerable<T>` instead of `IList<T>`.
 -  `Address` and `TxId` are now serializable.
    [[#99], [#124] by Qria]
 -  `InvalidTxException` and its subclasses became to have `TxId` property
    and the corresponding constructor parameter.  This can be useful when
    multiple `Transaction<T>` objects are validated at once.
 -  Added `Address.Size` constant, which is fixed to the `Int32` 20.
 -  Fixed a bug that `Block<T>.Validate()` had not thrown `InvalidTxException`
    even if there is any integrity error on its `Transactions`.
 -  `Swarm.AddPeersAsync()` was fixed so that unreachable `Peer`s are ignored.
    [[#128]]
 -  `Swarm` became able to relay their connection via TURN ([RFC 5766])
    to NAT traversal. To enable this, its constructor (`Swarm()`) takes the
    newly added `IceServer`s as configuration.
 -  Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to
    work around NAT so that `Peer`'s endpoints don't have to be multiple,
    `Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed
    from `IImmutableList<Uri>` to `IPEndPoint`.
    [[#120], [#123] by Yang Chun Ung, [#126], [#127]]

[#98]: https://github.com/planetarium/libplanet/issues/98
[#99]: https://github.com/planetarium/libplanet/issues/99
[#120]: https://github.com/planetarium/libplanet/issues/120
[#121]: https://github.com/planetarium/libplanet/pull/121
[#123]: https://github.com/planetarium/libplanet/pull/123
[#124]: https://github.com/planetarium/libplanet/pull/124
[#126]: https://github.com/planetarium/libplanet/issues/126
[#127]: https://github.com/planetarium/libplanet/pull/127
[#128]: https://github.com/planetarium/libplanet/pull/128
[#131]: https://github.com/planetarium/libplanet/issues/131
[RFC 5389]: https://tools.ietf.org/html/rfc5389
[RFC 5766]: https://tools.ietf.org/html/rfc5766


Version 0.1.1
-------------

Released on March 5, 2019.

 -  Improved stability of `Swarm` and `SwarmTest`.


Version 0.1.0
-------------

Initial release.  Released on February 26, 2019.
