Libplanet changelog
===================

Version 0.5.4
-------------

To be released.

### Bug fixes


Version 0.5.3
-------------

Released on September 9, 2019.

### Bug fixes

 -  Fix bug where `IAccountStateDelta.GetState()` hadn't returned proper state
    when the block action is evaluated.  [[#500]]

[#500]: https://github.com/planetarium/libplanet/pull/500


Version 0.5.2
-------------

Released on August 29, 2019.

### Bug fixes

 -  Fixed a bug that `Swarm<T>.PreloadAsync()` method had thrown `LiteException`
    (or other exception depending on `IStore`), which indicates a state
    reference is duplicate, where `trustedStateValidators` is present and
    a miner tries to download precalculated states from a trusted peer.
    [[#465], [#474]]
 -  Fixed a bug tag `Swarm<T>.StartAsync()` sometimes had thrown an exception
    from `IStore` (e.g., `NullReferenceException`) during broadcasting
    transactions.  [[#352], [#476]]

[#352]: https://github.com/planetarium/libplanet/issues/352
[#465]: https://github.com/planetarium/libplanet/issues/465
[#474]: https://github.com/planetarium/libplanet/pull/474
[#476]: https://github.com/planetarium/libplanet/pull/476


Version 0.5.1
-------------

Released on August 28, 2019.

### Bug fixes

 -  Fixed a bug that `ArgumentNullException` had been thrown when a blockchain,
    which consists of incomplete states (i.e., precalculated states downloaded
    from trusted peers), encounters a new branch so that reorg is made.
    [[#454], [#466]]
 -  Fixed a bug that unnecessarily received all blocks in multiple miner
    situations.  [[#457], [#468]]

[#454]: https://github.com/planetarium/libplanet/issues/454
[#457]: https://github.com/planetarium/libplanet/issues/457
[#466]: https://github.com/planetarium/libplanet/pull/466
[#468]: https://github.com/planetarium/libplanet/pull/468


Version 0.5.0
-------------

Released on August 22, 2019.

### Backward-incompatible interface changes

 -  Added `IStore.GetBlockIndex()` method.  [[#385]]
 -  `StoreExtension.LookupStateReference<T>()` method became to return
    `Tuple<HashDigest<SHA256>, long>` which is a nullable tuple of `Block<T>.Hash`
    and `Block<T>.Index`.  [[#350]]
 -  Added `IBlockPolicy<T>.BlockAction` property.  [[#319], [#367]]
 -  Removed the type parameter of `ActionEvaluation`.  [[#319], [#367]]
 -  `ActionEvaluation.Action` became to `IAction` type.  [[#319], [#367]]
 -  `LiteDBStore()` constructor became to have a new option named `flush` and
    turned on by default.  [[#387], [LiteDB #1268]]
 -  `LiteDBStore()` constructor became to have a new option named `readOnly` and
    turned off by default.  [[#434]]
 -  `BaseIndex.ContainsKey()` method became `abstract`.  [[#390]]
 -  `BlockDownloadState.TotalBlockCount` and `BlockDownloadState.ReceivedBlockCount`
    became to `Int64` type.  [[#396], [#399]]
 -  `IStore.IterateIndex()` method became to receive `offset` and `limit`
    parameters.  [[#425]]
 -  Added `IStore.GetCanonicalNamespace()` method.  [[#426]]
 -  Added `IStore.SetCanonicalNamespace()` method.  [[#426]]
 -  Removed `IRandom.NextDouble()` method, because [floating-point arithmetics,
    which is underspecified, likely introduce
    indeterminism][floating-point determinism].  [[#410], [#419]]
 -  Added `IActionContext.NewGuId()` method.  [[#371], [#439]]
 -  `Address(byte[])` became to throw `ArgumentNullException`
    instead of `NullReferenceException`.  [[#443]]
 -  Removed `FileStore` class.  [[#446]]

### Added interfaces

 -  Added `trustedStateValidators` option to `Swarm<T>.PreloadAsync()` method.
    If any peer in this set is reachable and there is no built up blockchain
    in a current node, `Swarm<T>` receives the latest states of the major
    blockchain from that trusted peer, which is also calculated by that peer,
    instead of autonomously calculating the states from scratch.
    Note that this option is intended to be exposed to end users through
    a feasible user interface so that they can decide whom to trust
    for themselves.
    [[#272], [#343]]
 -  Added `StoreExtension.ListAllStateReferences(this IStore, string,
    HashDigest<SHA256>?, HashDigest<SHA256>?)` extension method.
    [[#363], [#384], [#385]]
 -  `Address` class became to implement `IComparable<Address>` and
    `IComparable` interfaces.  [[#363]]
 -  Added `BlockChain<T>.BlockHashes` property.  [[#389]]
 -  `Swarm<T>.PreloadAsync(IProgress<PreloadState>, IImmutableSet<Address>,
    CancellationToken)` became to report progress for all phases.  [[#397], [#400]]
 -  Added `PreloadState`, `ActionExecutionState`, `StateReferenceDownloadState`,
    and `BlockStateDownloadState` classes to cover all phases in the entire
    preloading process.  [[#397], [#400]]
 -  Added `Address(ImmutableArray<byte>)` constructor.  [[#442], [#443]]

### Behavioral changes

 -  `BlockChain<T>.PreloadAsync()` method became to omit rendering of
    `IAction`s in the preloaded behind blocks.  [[#272], [#343]]
 -  `Swarm<T>` became to have two more message types: `GetRecentStates` (`0x0b`)
    and `RecentStates` (`0x0c`).  [[#272], [#343]]
 -  `BlockChain<T>.MineBlock()` and `BlockChain<T>.GetNextTxNonce()` methods
    became to ignore transactions that didn't follow `Transaction<T>.Nonce`
    sequentially and treat them as pendings.  [[#365]]
 - `BlockChain<T>` became to evaluate `IBlockPolicy<T>.BlockAction` and set the
   state when a block is appended to the chain.  [[#319], [#367]]
 -  `BlockSet<T>.ContainsKey()` and `TransactionSet<T>.ContainsKey()` methods
    became O(1) time complexity through omitting iteration and relying
    own retrieve implementations.  [[#390]]
 -  The way `LiteDBStore` stores state references became efficient,
    but the file-level backward compatibility was also broken.  [[#395], [#398]]
 -  `Swarm<T>.PreloadAsync()` method became to report a block downloading
    progress with the total number of blocks to download in the entire batch,
    instead of the window size of a chunk (i.e., 500).  [[#396], [#399]]
 -  `Swarm<T>.PreloadAsync()` became to get the first parameter, `progress`,
    which accepts `IProgress<PreloadState>`.  [[#397], [#400]]
 -  `BlockHashes` messages became to contain one more higher hash. [[#408], [#445]]
 -  `Swarm<T>.PreloadAsync()` became safe from data corruption even
    if a preloading process suddenly gets shutdown.  [[#417]]
 -  `FileStore` and `LiteDBStore` became to guarantee atomicity of storing
    transactions. [[#413]]
 -  `IStore.PutTransaction<T>()` became to do nothing when it takes
    the `Transaction<T>` more than once.  [[#413]]
 -  `BlockChain<T>.Swap()` became to omit common block finding when `render` is
    `false`.  [[#423]]
 -  `PrivateKey(byte[])` constructor became to check validity.  [[#438]]

### Bug fixes

 -  Fixed a bug where the `LiteDBStore.IterateStagedTransactionIds()` returns
    duplicated transaction ids.  [[#366]]
 -  Fixed a bug that `NullReferenceException` occurred when serializing default
    `Address`.  [[#369]]
 -  Removed unnecessary mutex in `Swarm<T>` to avoid continuous delays in peer
    registration in some situations.  [[#375]]
 -  Fixed a bug that `TurnClient` had thrown `KeyNotFoundException` and
    `IOException` on startup.  [[#377], [#378]]
 -  Fixed a `LiteDBStore` bug that blocks or transactions had got corrupted
    sometimes.  Instead, `LiteDBStore.GetTransaction()` became possible to
    return `null` even for already stored transactions, and for that case,
    a warning will be logged through Serilog.
    [[#386], [#387], [LiteDB #1268]]
 -  Fixed a bug that `NetworkStreamProxy.StartAsync()` hadn't stopped properly
    when the connection had reset by a remote peer.  [[#414]]
 -  Fixed a bug that `Swarm<T>` had hung forever after a remote peer had
    disconnected while receiving.  [[#416]]
 -  Fixed a bug that `Swarm<T>.PreloadAsync()` had been processed even if there
    is no appropriate peer. [[#418]]
 -  Fixed a bug that TURN-related tasks hadn't restarted automatically when an
    exception occurred.  [[#422]]
 -  Fixed a bug that TURN relay connection had disconnected when preloading
    took a long time.  [[#424]]

[#319]: https://github.com/planetarium/libplanet/issues/319
[#343]: https://github.com/planetarium/libplanet/pull/343
[#350]: https://github.com/planetarium/libplanet/pull/350
[#363]: https://github.com/planetarium/libplanet/pull/363
[#365]: https://github.com/planetarium/libplanet/pull/365
[#366]: https://github.com/planetarium/libplanet/pull/366
[#367]: https://github.com/planetarium/libplanet/pull/367
[#369]: https://github.com/planetarium/libplanet/pull/369
[#371]: https://github.com/planetarium/libplanet/issues/371
[#375]: https://github.com/planetarium/libplanet/pull/375
[#377]: https://github.com/planetarium/libplanet/issues/377
[#378]: https://github.com/planetarium/libplanet/pull/378
[#384]: https://github.com/planetarium/libplanet/issues/384
[#385]: https://github.com/planetarium/libplanet/pull/385
[#386]: https://github.com/planetarium/libplanet/pull/386
[#387]: https://github.com/planetarium/libplanet/pull/387
[#389]: https://github.com/planetarium/libplanet/pull/389
[#390]: https://github.com/planetarium/libplanet/pull/390
[#395]: https://github.com/planetarium/libplanet/issues/395
[#396]: https://github.com/planetarium/libplanet/issues/396
[#397]: https://github.com/planetarium/libplanet/issues/397
[#398]: https://github.com/planetarium/libplanet/pull/398
[#399]: https://github.com/planetarium/libplanet/pull/399
[#400]: https://github.com/planetarium/libplanet/pull/400
[#408]: https://github.com/planetarium/libplanet/issues/408
[#410]: https://github.com/planetarium/libplanet/issues/410
[#413]: https://github.com/planetarium/libplanet/pull/413
[#414]: https://github.com/planetarium/libplanet/pull/414
[#416]: https://github.com/planetarium/libplanet/pull/416
[#417]: https://github.com/planetarium/libplanet/pull/417
[#418]: https://github.com/planetarium/libplanet/pull/418
[#419]: https://github.com/planetarium/libplanet/pull/419
[#422]: https://github.com/planetarium/libplanet/pull/422
[#423]: https://github.com/planetarium/libplanet/pull/423
[#424]: https://github.com/planetarium/libplanet/pull/424
[#426]: https://github.com/planetarium/libplanet/pull/426
[#434]: https://github.com/planetarium/libplanet/pull/434
[#438]: https://github.com/planetarium/libplanet/pull/438
[#439]: https://github.com/planetarium/libplanet/pull/439
[#442]: https://github.com/planetarium/libplanet/issues/442
[#443]: https://github.com/planetarium/libplanet/pull/443
[#445]: https://github.com/planetarium/libplanet/pull/445
[#446]: https://github.com/planetarium/libplanet/pull/446
[LiteDB #1268]: https://github.com/mbdavid/LiteDB/issues/1268
[floating-point determinism]: https://wp.me/p1fTCO-kT


Version 0.4.1
-------------

Released on July 11, 2019.

### Bug fixes

 -  Fixed a bug where the `BlockChain<T>.GetStates()` method had not returned
    the latest state when there are multiple addresses.  [[#346]]

[#346]: https://github.com/planetarium/libplanet/pull/346


Version 0.4.0
-------------

Released on July 8, 2019.

### Backward-incompatible interface changes

 -  `Peer.AppProtocolVersion` became nullable to represent `Peer` whose version
    is unknown.  [[#280]]
 -  Added `IStore.ListAddresses()` method.  [[#272], [#285]]
 -  Added `IStore.ListTxNonces()` method. [[#272], [#309], [#310]]
 -  Removed `BlockChain<T>.GetNonce()` method.  [[#294]]
 -  `BlockChain<T>.StageTransactions` became to receive
    `IDictionary<Transaction<T>, bool>` instead of `ISet<Transaction<T>>`.
    [[#274], [#297]]
 -  `IStore.StageTransactionIds()` method became to receive
    `IDictionary<TxId, bool>` instead of `ISet<TxId>`.  [[#274], [#297]]
 -  `IStore.IterateStagedTransactionIds()` method became to receive
    `bool toBroadcast` which is whether to iterate only the TxId set to
    broadcast.  [[#274], [#297]]
 -  `Swarm<T>.StartAsync()` method became to receive `broadcastTxInterval`
    (or `millisecondsBroadcastTxInterval`) parameter.  [[#274], [#297]]
 -  `IStore` became to treat a "tx nonce" mere a `long` integer instead of
    a stack of block hashes.  [[#272], [#307], [#309], [#310]]
     -  `IStore.IncreaseTxNonce<T>(string, Block<T>)` method was replaced by
        `IStore.IncreaseTxNonce(string, Address, long)` method.
     -  Removed `IStore.ForkTxNonce()` method.
     -  `FileStore` became to occupy fewer bytes for storing tx nonces.
        This change broke file-level backward compatibility.
 -  `IStore` became possible to look up multiple state references in a stack.
    [[#272], [#307]]
     -  Removed `IStore.LookupStateReference<T>()` method.
        Instead, a newly added static class `StoreExtension` provides
        an extension method of the same name.
     -  Added `IStore.IterateStateReferences()` method.
 -  `Swarm` became to have type parameter `T` to represent an action type as
    like as `BlockChain<T>`.  [[#324]]
 -  `Swarm<T>` constructor became to receive `BlockChain<T>`.  [[#324]]
 -  Methods  in `Swarm<T>` that had taken a parameter of `BlockChain<T>` type
    became to neither longer take `BlockChain<T>` nor a generic method.
    Because the `Swarm<T>` constructor takes it instead.  [[#324]]
 -  `Swarm<T>` does not implement `ICollection<Peer>` anymore.  [[#326]]
 -  Added `IStore.DeleteNamespace()` method. [[#329]]
 -  Removed the `id` parameter from the `BlockChain<T>` constructor, and it
    became to automatically detect an appropriate `BlockChain<T>.Id`.
    [[#279], [#332]]

### Added interfaces

 -  Added `LiteDBStore` backend that uses [LiteDB] under the hood.  [[#269]]
 -  All `*Async()` methods belonging to `TurnClient` class became to have
    `cancellationToken` option.  [[#287]]
 -  Added a `Peer` constructor omitting `appProtocolVersion` parameter
    to create a `Peer` whose version is unknown.  [[#280]]
 -  Added `IncompleteBlockStatesException` class.  [[#272], [#285]]
 -  Added `completeStates` option to `BlockChain<T>.GetStates()` method.
    [[#272], [#285]]
 -  Added `BlockChain<T>.MakeTransaction(PrivateKey, IEnumerable<T>,
    IImmutableSet<Address>, DateTimeOffset?)` method.  [[#294]]
 -  Added `BlockChain<T>.GetNextTxNonce()` method which counts staged
    transactions too during nonce computation.  [[#270], [#294]]
 -  Added `StoreExtension` static class.  [[#272], [#307]]
 -  Added `Swarm<T>.BlockChain` property.  [[#272], [#343]]

### Behavioral changes

 -  `BlockChain<T>.GetStates()` method became to throw
    `IncompleteBlockStatesException` if its `Store` lacks the states of a block
    that a requested address lastly updated.  [[#272], [#285]]
 -  A message `Swarm<T>` makes became to have multiple blocks within it, which
    means round trips on the network are now much reduced.  [[#273], [#276]]
 -  `Message.Block` has been replaced by `Message.Blocks` and the magic number
    has been changed to `0x0a`.  [[#276]]
 -  Improved performance of `Swarm<T>`'s response time to `GetBlockHashes`
    request messages.  [[#277]]
 -  Added IPv6 support to `Libplanet.Stun.StunAddress`. [[#267], [#271]]
 -  `IStore.GetBlockStates()` became able to return `null` to represent an absence
    of states (i.e., incomplete states).  [[#272], [#285]]
 -  `Swarm<T>` became to broadcast staged `Transaction`s periodically
     so that game apps no more need to maintain their own thread to
     broadcast staged transactions.  [[#274], [#297]]
 -  Previously, `Swarm<T>` had sent an empty `GetTxs` message when it receives
    an empty `TxIds` from peers, and it had made the network waste bandwidth for
    unnecessary messages.  `Swam<T>` became to no more send such empty `GetTxs`.
    [[#297]]
 -  `BlockChain<T>.Swap()` became to delete an index, tx nonces, and state
    references in the replaced chain. [[#329]]
 -  Reduced the memory footprint of `BlockChain<T>.FindBranchPoint()` method
    under the circumstances that the height of
    the `BlockChain<T>` object is high.  [[#282], [#299]]

### Bug fixes

 -  Fixed a bug that `Swarm<T>` reported `TaskCanceledException` as an unknown
    exception while stopping. [[#275]]
 -  Fixed a bug that `Swarm<T>` didn't stop properly during
    `Swarm<T>.PreloadAsync()`. [[#275]]
 -  Fixed a bug where the oldest `TxNonce` of an address is not invalidated
    when forking using `FileStore.ForkTxNonce()` method.  [[#281]]
 -  Fixed a bug where `LiteDBStore.GetTxNonce()` method throws a
    `System.IO.IOException` after forking.  [[#281]]
 -  Fixed a bug that `TurnClient` had not stopped properly.  [[#287]]
 -  Fixed a bug that `TurnClient` had been trying to use an already closed
    connection. [[#303], [#308]]
 -  Fixed a bug that `KeyNotFoundException` had been thrown instead of
    `ArgumentOutOfRangeException` when `Blockchain<T>[int]` called while the
    index of a block that does not exist locally.  [[#208], [#317]]
 -  Fixed a bug that `Swarm<T>` had not dial to other peer after
    `Swarm<T>.PreloadAsync()`.  [[#311]]
 -  Fixed an issue where unknown exceptions occurred when `Swarm<T>` receiving
    a message.  [[#321], [#327]]

[LiteDB]: https://www.litedb.org/
[#208]: https://github.com/planetarium/libplanet/issues/208
[#267]: https://github.com/planetarium/libplanet/issues/267
[#269]: https://github.com/planetarium/libplanet/pull/269
[#270]: https://github.com/planetarium/libplanet/pull/270
[#271]: https://github.com/planetarium/libplanet/pull/271
[#272]: https://github.com/planetarium/libplanet/issues/272
[#273]: https://github.com/planetarium/libplanet/issues/273
[#274]: https://github.com/planetarium/libplanet/issues/274
[#275]: https://github.com/planetarium/libplanet/pull/275
[#276]: https://github.com/planetarium/libplanet/pull/276
[#277]: https://github.com/planetarium/libplanet/pull/277
[#279]: https://github.com/planetarium/libplanet/issues/279
[#280]: https://github.com/planetarium/libplanet/pull/280
[#281]: https://github.com/planetarium/libplanet/pull/281
[#282]: https://github.com/planetarium/libplanet/issues/282
[#285]: https://github.com/planetarium/libplanet/pull/285
[#287]: https://github.com/planetarium/libplanet/pull/287
[#294]: https://github.com/planetarium/libplanet/pull/294
[#297]: https://github.com/planetarium/libplanet/pull/297
[#299]: https://github.com/planetarium/libplanet/pull/299
[#303]: https://github.com/planetarium/libplanet/issues/303
[#307]: https://github.com/planetarium/libplanet/pull/307
[#308]: https://github.com/planetarium/libplanet/pull/308
[#309]: https://github.com/planetarium/libplanet/issues/309
[#310]: https://github.com/planetarium/libplanet/pull/310
[#311]: https://github.com/planetarium/libplanet/pull/311
[#317]: https://github.com/planetarium/libplanet/pull/317
[#321]: https://github.com/planetarium/libplanet/pull/321
[#324]: https://github.com/planetarium/libplanet/pull/324
[#326]: https://github.com/planetarium/libplanet/pull/326
[#327]: https://github.com/planetarium/libplanet/pull/327
[#329]: https://github.com/planetarium/libplanet/pull/329
[#332]: https://github.com/planetarium/libplanet/pull/332

Version 0.3.0
-------------

Released on May 31, 2019.

### Backward-incompatible interface changes

 -  Added `IAction.Render(IActionContext, IAccountStateDelta)` method.
    [[#31], [#212]]
 -  Added `IAction.Unrender(IActionContext, IAccountStateDelta)` method.
    [[#31], [#212]]
 -  `BlockChain<T>.Validate()` method became to receive
    `IReadOnlyList<Block<<T>>` instead of `IEnumerable<Block<T>>`.  [[#205]]
 -  `IBlockPolicy<T>.GetNextBlockDifficulty()` method became to receive
    `IReadOnlyList<Block<<T>>` instead of `IEnumerable<Block<T>>`.  [[#205]]
 -  Added
    `IBlockPolicy<T>.ValidateNextBlock(IReadOnlyList<Block<T>>, Block<T>)`
    method.  [[#210]]
 -  Removed `IBlockPolicy<T>.ValidateBlocks()` method.  [[#210]]
 -  `BlockChain<T>[int]` became to throw `ArgumentOutOfRangeException` instead
    of `IndexOutOfRangeException`.  [[#210]]
 -  Removed `KeyEquals()` methods from all classes and structs.  [[#216]]
 -  `Swarm` class now does not implement `IEquatable<Swarm>` anymore and
    its `Equals(object)` method and `GetHashCode()` method became to have
    default behavior of `object` class.  [[#216]]
 -  Also, `Swarm` class now does not implement `IDisposable` too. Thus
    `Swarm.Dispose()` was removed too. [[#218]]
 -  `Swarm` became to use a queue to maintain internal messages.  [[#218]]
     -  The broadcasting methods are no more `async`, so they are renamed
        as below.
        -  `Swarm.BroadcastBlocksAsync()` → `Swarm.BroadcastBlocks()`
        -  `Swarm.BroadcastTxsAsync()` → `Swarm.BroadcastTxs()`
 -  The type of `Block<T>.Difficulty` is changed to `long` instead of `int`, and
    related classes method parameters and field types have changed accordingly.
 -  Removed `HashDigest.HasLeadingZeroBits()` method.  [[#213]]
 -  The signature of `IStore.PutBlock<T>(Block<T>)` method was changed to
    `PutBlock<T>(Block<T>, Address)`.  [[#189], [#197]]
 -  `Block<T>.Hash` is no longer calculated using the full data of the
    `Transaction<T>`, but is calculated using only the `Transaction<T>.Id`.
    [[#234]]
 -  Added `IStore.LookupStateReference<T>(string, Address, Block<T>)` method.
    [[#232]]
 -  Added `IStore.StoreStateReference<T>(string, Block<T>)` method.
    [[#232]]
 -  Added `IStore.ForkStateReferences<T>(string, string, Block<T>,
    IImmutableSet<Address>` method.  [[#232]]
 -  Removed `Block<T>.Validate()` and `Block<T>.EvaluateActions()` method.  [[#243]]
 -  Added `Transaction<T>.Nonce` and `RawTransaction.Nonce` properties.
    [[#246]]
 -  Added `IStore.GetTxNonce(string, Address)` method.  [[#246]]
 -  Added `IStore.IncreaseTxNonce<T>(string, Block<T>)` method.  [[#246]]
 -  Added `IStore.ForkTxNonce<T>(string, string, Block<T>,
    IImmutableSet<Address>` method.  [[#246]]

### Added interfaces

 -  `BlockChain<T>` became to implement `IReadOnlyList<Block<T>>`.  [[#205]]
 -  Added `Swarm.DifferentVersionPeerEncountered` event handler that can handle
    events when a different version of a peer is discovered.  [[#167]], [[#185]]
 -  Added `Peer.AppProtocolVersion` property.  [[#185]]
 -  Added `Swarm.PreloadAsync()` method to explicitly and preemptively download
    initial blocks before `Swarm.StartAsync<T>()` being called.
    [[#204]], [[#206]]
 -  Added `BlockDownloadState` class to represent a block downloading state.
    [[#204]], [[#206]]
 -  Added `BlockPolicyExtension.ValidateBlocks<T>(IBlockPolicy<T>,
    IReadOnlyList<Block<T>>, DateTimeOffset)` method.  [[#210]]
 -  Added `Transaction<T>.EvaluateActionsGradually(HashDigest<SHA256>, long,
    IAccountStateDelta, Address, bool)` method.  [[#31], [#212]]
 -  Added `Block<T>.EvaluateActionsPerTx(AccountStateGetter)` method.
    [[#31], [#212]]
 -  Added `HashDigest.Satisfies()` method.  [[#213]]
 -  `BlockPolicy<T>` constructor became to receive the `minimumDifficulty`
    and the mining `difficultyBoundDivisor`.  [[#213]]
 -  Added `BlockChain<T>.UnstageTransactions()` method.  [[#223]]
 -  `Swarm` constructor became to receive a `linger` (or `millisecondsLinger`)
    parameter.  This purposes to determine how long to wait for pending
    messages when a `Swarm` instance is requested to terminate.
 -  Added `NamespaceNotFoundException` class.  [[#232]]
 -  Added `Block<T>.Evaluate()` method.  [[#243]]
 -  Made `InvalidBlockTimestampException` class `public` so that it can be
    caught. [[#133], [#251]]
 -  Added `InvalidTxNonceException` class.  [[#246]]

### Behavioral changes

 -  `Swarm.StartAsync()` now receives the height of blocks (tip `Index`) from
    other known peers and synchronizes the blocks if necessary
    before propagating/receiving pinpointed recent blocks to prevent inefficient
    round-trips.  [[#187], [#190]]
 -  The calculation algorithm of `BlockPolicy<T>.GetNextBlockDifficulty()`
    method was changed to the [Ethereum Homestead algorithm] except for the
    difficulty bomb.  [[#213]]
 -  The difficulty was changed from representing the number of leading zeros of
    target number to representing a divisor to obtain the target number.
    [[#213]]
 -  `BlockSet<T>[int]` changed so as not to validate a block.  [[#231]]
 -  Improved read performance of `Block<T>.Hash` and `Transaction<T>.Id`.
    [[#228], [#234]]
 -  `Swarm.StartAsync()` now does not call `Swarm.StopAsync()` anymore,
    therefore `Swarm.StopAsync()` should be explicitly called.  [[#236]]
 -  `Transaction<T>.EvaluateActionsGradually()` became to record
    `IAccountStateDelta.SetState()` calls even if its argument is the same
    to the previous state. [[#241]]
 -  `Block<T>.Validate()` and `Block<T>.EvaluateActions()` are integrated into
    `Block<T>.Evaluate()`.  [[#243]]
 -  `BlockChain<T>.Append()` became to execute `Action.Execute()` only once per
    action in the `Block<T>`.  [[#243]]
 -  `BlockChain<T>.Append()` method became to throw `InvalidTxNonceException`
    when the `Transaction<T>.Nonce` does not correspond to its `Signer`'s
    current nonce.  [[#246]]
 -  `Swarm` became to enforce `ForceDotNet.Force()` in [AsyncIO] while it's running on
    Mono runtime.  [[#247]]

### Bug fixes

 -  Fixed a bug that TURN relay had been disconnected when being connected for
    longer than 5 minutes.  [[#198]]
 -  Fixed a bug that `Swarm` had attempted to use TURN relay even if the `host`
    argument was given.  [[#198]]
 -  Improved the read throughput of `BlockChain<T>.Append()`.
 -  Improved overall read throughput of `BlockChain<T>` while blocks are being
    mined by `BlockChain<T>.MineBlock()`.  [[#191]]
 -  Fixed a bug that `TurnClientException` had been thrown by Swarm when a STUN
    nonce is stale.  [[#193]]
 -  Fixed `BlockChain<T>.GetStates()` had descended to the bottom
    (i.e., the genesis block) where a given `Address` refers to
    a nonexistent account (i.e., never used before).  [[#189], [#192]]
 -  Fixed a bug that a TURN connection had turned unavailable after
    it once failed to parse a message (due to a corrupted packet).
    [[#215]]
 -  Instead of validating the entire blocks, `BlockChain<T>.Append()` method
    became to validate only the next block to be appended.  [[#210]]
 -  Improved `BlockChain<T>.Fork()` performance by avoiding double validation
    of already validated blocks.  [[#215]]
 -  Removed unnecessary writer locks on `BlockChain<T>.StageTransactions()`.
    [[#217]]
 -  Improved concurrency of `BlockChain<T>.Append()` method by removing
    unnecessary race conditions. [[#217]]
 -  Fixed a bug that `Swarm` could not properly communicate with `Peer` behind
    NAT. [[#240]]
 -  Fixed a bug that `BlockChain<T>.FindNextHashes()` throws
    `ArgumentOutOfRangeException` when chain is empty.
 -  Fixed a bug that `TurnClient.AcceptRelayedStreamAsync()`didn't handle
    concurrent connections correctly. [[#256]]

[AsyncIO]: https://github.com/somdoron/AsyncIO
[Ethereum Homestead algorithm]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2.md
[#31]: https://github.com/planetarium/libplanet/issues/31
[#133]: https://github.com/planetarium/libplanet/issues/133
[#185]: https://github.com/planetarium/libplanet/pull/185
[#187]: https://github.com/planetarium/libplanet/issues/187
[#190]: https://github.com/planetarium/libplanet/pull/190
[#191]: https://github.com/planetarium/libplanet/pull/191
[#192]: https://github.com/planetarium/libplanet/pull/192
[#193]: https://github.com/planetarium/libplanet/pull/193
[#197]: https://github.com/planetarium/libplanet/pull/197
[#198]: https://github.com/planetarium/libplanet/pull/198
[#204]: https://github.com/planetarium/libplanet/issues/204
[#205]: https://github.com/planetarium/libplanet/pull/205
[#206]: https://github.com/planetarium/libplanet/pull/206
[#210]: https://github.com/planetarium/libplanet/pull/210
[#212]: https://github.com/planetarium/libplanet/pull/212
[#213]: https://github.com/planetarium/libplanet/pull/213
[#215]: https://github.com/planetarium/libplanet/pull/215
[#216]: https://github.com/planetarium/libplanet/pull/216
[#217]: https://github.com/planetarium/libplanet/pull/217
[#218]: https://github.com/planetarium/libplanet/pull/218
[#223]: https://github.com/planetarium/libplanet/pull/223
[#228]: https://github.com/planetarium/libplanet/issues/228
[#231]: https://github.com/planetarium/libplanet/pull/231
[#232]: https://github.com/planetarium/libplanet/pull/232
[#234]: https://github.com/planetarium/libplanet/pull/234
[#236]: https://github.com/planetarium/libplanet/pull/236
[#240]: https://github.com/planetarium/libplanet/pull/240
[#241]: https://github.com/planetarium/libplanet/pull/241
[#243]: https://github.com/planetarium/libplanet/pull/243
[#246]: https://github.com/planetarium/libplanet/pull/246
[#247]: https://github.com/planetarium/libplanet/pull/247
[#251]: https://github.com/planetarium/libplanet/pull/251
[#256]: https://github.com/planetarium/libplanet/pull/256


Version 0.2.2
-------------

Released on April 12, 2019.

 -  Fixed a bug that `BlockChain<T>.GetStates()` had returned slower than
    necessary for many addresses.  [[#189], [#192]]

[#189]: https://github.com/planetarium/libplanet/issues/189
[#192]: https://github.com/planetarium/libplanet/pull/192


Version 0.2.1
-------------

Released on April 7, 2019.

This version purposes to entirely replace *0.2.0*, because a wrong *.nupkg*
file was uploaded to *0.2.0* on NuGet Gallery.  Note that *0.2.0* on NuGet
Gallery was unlisted.


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
[#166]: https://github.com/planetarium/libplanet/pull/166
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
