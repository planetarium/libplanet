Libplanet changelog
===================

Version 0.2.1
-------------

To be released.


Version 0.2.0
-------------

Released on April 5, 2019.

 -  `PrivateKey.Decrypt()` now throws an `InvalidCiphertextException`
    instead of returning `null` when `cipherText` is invalid.  [[#140]]
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
     -  Added `IActionContext.Rehearsal` property.  [[#131], [#135]]
     -  Added `UnexpectedlyTerminatedTxRehearsalException` class.
        [[#132], [#136]]
     -  The return type of `IAction.Execute()` method was changed from
        `AddressStateMap` to `IAccountStateDelta`.
     -  Removed `IAction.RequestStates()` method because there is no need for it
        and thus it is not used anymore.
     -  Added `Transaction<T>.EvaluateActions()` method.
     -  Added `Block<T>.EvaluateActions()` generator method.

 -  The built-in subtype polymorphism of `IAction` and `Transaction<T>` was
    moved to a separated new `PolymorphicAction<T>` abstract class.
    Polymorphic actions now should be wrapped by `PolymorphicAction<T>`.
    For example, the following code:

    ~~~~ csharp
    public abstract class AbstractAction : IAction { ... }

    [ActionType("attack")]
    public sealed class Attack : AbstractAction { ... }

    [ActionType("sleep")]
    public sealed class Sleep : AbstractAction { ... }
    ~~~~

    ~~~~ csharp
    var tx = Transaction<AbstractAction>.Create(
        ...,
        actions: new[] { new Attack(...), ... }
    );
    ~~~~

    should be changed to like:

    ~~~~ csharp
    var tx = Transaction<PolymorphicAction<AbstractAction>>.Create(
        ...,
        actions: new[] {
            new PolymorphicAction<AbstractAction>(new Attack(...)),
            ...
        }
    );
    ~~~~

    It can be simpler by implicit casting:

    ~~~~ csharp
    var tx = Transaction<PolymorphicAction<AbstractAction>>.Create(
        ...,
        actions: new PolymorphicAction<AbstractAction>[] { new Attack(...), }
    );
    ~~~~

    [[#169]]

     -  The type parameter `T` of `Transaction<T>`, `Block<T>`, and
        `BlockChain<T>` became to require having a `public` parameterless
        constructor (i.e., `new()`) besides implementing `IAction` interface.
        This means an `abstract class` or an `interface` no more can be passed
        to `T`, but only a concrete `class` or a `struct` can be passed.

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
 -  Improved the write throughput of `BlockChain<T>` while polling
    `BlockChain<T>.GetStates()`
 -  `Swarm.AddPeersAsync()` was fixed so that unreachable `Peer`s are ignored.
    [[#128]]
 -  `Swarm` became able to relay their connection via TURN ([RFC 5766])
    to NAT traversal. To enable this, its constructor (`Swarm()`) takes the
    newly added `IceServer`s as configuration.
 -  Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to
    work around NAT so that `Peer`'s endpoints don't have to be multiple,
    `Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed
    from `IImmutableList<Uri>` to `DnsEndPoint`.
    [[#120], [#123] by Yang Chun Ung, [#126], [#127], [#165], [#166]]
 -  `Swarm` became to ignore tip blocks of the same height (`Index`) that it
    already has and deal with only longer (higher) blocks.
 -  Fixed a bug that occured when `Swarm` was handling multiple responses at the
    same time.
 -  Fixed a bug that the `Swarm` constructor had hanged in certain runtimes
    like Unity engine.
 -  Removed `AddressTransactionSet` which handles handle `Address` to
    `IEnumerable<TxId>` indices, and the following methods in `IStore`:
     -  `IStore.IterateAddresses()`
     -  `IStore.GetAddressTransactionIds()`
     -  `IStore.AppendAddressTransactionId()`
     -  `IStore.CountAddresses()`
 -  Added `IStore.ListNamespaces()` method.
 -  `IStore.CountBlocks()` and `IStore.CountTransactions()` became to return
    `long`.
 -  Block/tx-related methods in `IStore` and `BaseIndex<T>` no longer
    accepts `@namespace` parameter.  It means that even if a forking occurs, the
    same block/tx files are shared.
 -  Fixed a bug that made unnecessary fork when receiving blocks from other
    peer.
 -  Action classes that implement `IAction` but lack `ActionTypeAttribute`
    became reported by `PolymorphicAction<T>` throwing
    `MissingActionTypeException` at runtime.  [[#28], [#144], [#169]]
 -  Turn into parameter in `BlockPolicy`'s constructor to milliseconds. [[#151]]
 -  `BencodexFormatter` became able to serialize `BigInteger`.  [[#159]]
 -  Made `Swarm` possible to configure its network `appProtocolVersion` and,
    to ignore peers if their version is different.  [[#167]], [[#170]]
 -  Added `IActionContext.Miner` property.  [[#173]], [[#174]]
 -  Renamed `Block<T>.RewardBeneficiary` to `Block<T>.Miner`.  [[#174]]
 -  Added `BlockChain<T>.Blocks` property.  [[#176]]
 -  Added `BlockChain<T>.Transactions` property.  [[#176]]

[#28]: https://github.com/planetarium/libplanet/issues/28
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
[#132]: https://github.com/planetarium/libplanet/issues/132
[#135]: https://github.com/planetarium/libplanet/pull/135
[#136]: https://github.com/planetarium/libplanet/pull/136
[#140]: https://github.com/planetarium/libplanet/pull/140
[#144]: https://github.com/planetarium/libplanet/pull/144
[#151]: https://github.com/planetarium/libplanet/pull/151
[#159]: https://github.com/planetarium/libplanet/pull/159
[#165]: https://github.com/planetarium/libplanet/issues/165
[#167]: https://github.com/planetarium/libplanet/issues/167
[#169]: https://github.com/planetarium/libplanet/pull/169
[#170]: https://github.com/planetarium/libplanet/pull/170
[#173]: https://github.com/planetarium/libplanet/issues/173
[#174]: https://github.com/planetarium/libplanet/pull/174
[#176]: https://github.com/planetarium/libplanet/pull/176
[RFC 5389]: https://tools.ietf.org/html/rfc5389
[RFC 5766]: https://tools.ietf.org/html/rfc5766


Version 0.1.1
-------------

Released on March 5, 2019.

 -  Improved stability of `Swarm` and `SwarmTest`.


Version 0.1.0
-------------

Initial release.  Released on February 26, 2019.
