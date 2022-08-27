Libplanet changelog
===================

Version PoS
--------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Pos) Added `Validator` class.  [[#2234]]
 -  (Libplanet.Pos) Added `ValidatorPower` class.  [[#2234]]
 -  (Libplanet.Pos) Added `ValidatorPowerIndex` class.  [[#2234]]
 -  (Libplanet.Pos) Added `ValidatorPowerSet` class.  [[#2234]]
 -  (Libplanet.Pos) Added `BondedValidator` class.  [[#2234]]
 -  (Libplanet.Pos) Added `BondedValidatorSet` class.  [[#2234]]
 -  (Libplanet.Pos) Added `Delegation` class.  [[#2234]]
 -  (Libplanet.Pos) Added `Undelegation` class.  [[#2234]]
 -  (Libplanet.Pos) Added `Redelegation` class.  [[#2234]]
 -  (Libplanet.Pos) Added `UndelegationEntry` class.  [[#2234]]
 -  (Libplanet.Pos) Added `RedelegationEntry` class.  [[#2234]]
 -  (Libplanet.Pos) Added `UnbondingSet` class.  [[#2234]]
 -  (Libplanet.Pos) Added `BondingStatus` class.  [[#2234]]
 -  (Libplanet.Pos) Added `NullValidatorException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `NullDelegationException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `NullUndelegationException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `NullRedelegationException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `DuplicatedValidatorException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `PublicKeyAddressMatchingException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `JailedValidatorException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `InvalidCurrencyException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `InsufficientFungibleAssetValueException` class.
    [[#2234]]
 -  (Libplanet.Pos) Added `InvalidExchangeRateException` class.  [[#2234]]
 -  (Libplanet.Pos) Added `MaximumUndelegationEntriesException` class.
    [[#2234]]
 -  (Libplanet.Pos) Added `MaximumRedelegationEntriesException` class.
    [[#2234]]
 -  (Libplanet.Pos) Added `PostmatureUndelegationEntryException` class.
    [[#2234]]
 -  (Libplanet.Action.Sys) Added `CreateValidatorAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `DelegateAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `UndelegateAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `RedelegateAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `CancelUndelegationAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `WithdrawValidatorAction` class.  [[#2234]]
 -  (Libplanet.Action.Sys) Added `WithdrawDelegatorAction` class.  [[#2234]]

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools

[#2234]: https://github.com/planetarium/libplanet/pull/2234


Version PBFT
--------------

To be released.

### Deprecated APIs

 -  Removed `TotalDifficultyComparer` class.  [[#PBFT]]
 -  Removed `IBlockPolicy<T>.GetNextBlockDifficulty()` interface method
    and all its implementations.  [[#PBFT]]
 -  Removed `IBlockPolicy.TotalDifficulty` interface property and its
    implementations.  [[#PBFT]]
 -  Removed all total difficulty related parameters.  [[#PBFT]]
 -  Removed `IBlockPolicy.Difficulty` interface property and its
    implementations.  [[#PBFT]]
 -  Removed `IPreEvaluationBlockHeader.Nonce` interface property and
    its implementations.  [[#PBFT]]
 -  Removed `InvalidBlockTotalDifficultyException` class.  [[#PBFT]]
 -  Removed `InvalidBlockDifficultyException` class.  [[#PBFT]]
 -  Removed `BlockChain<T>.MakeGenesisBlock()` and `BlockChain<T>.MineBlock()`
    methods.  [[#PBFT]]
 -  Removed `HashAlgorithmType` class.  [[#PBFT]]
 -  Removed `PreEvaluationBlock<T>(IBlockContent<T>)` constructor.  [[#PBFT]]

### Backward-incompatible API changes

 -  Added `LastCommit` property to `IBlockMetadata`.  [[#PBFT]]
 -  Added `IBlockPolicy.GetValidators()` method.  [[#PBFT]]
 -  (Libplanet.Net) Removed `SwarmOptions.StaticPeers`.  [[#PBFT]]
 -  Bumped `BlockMetadata.CurrentProtocolVersion` to 4.  [[#PBFT]]
 -  Changed `IPreEvaluationBlockHeader.PreEvaluationHash` type from
    `ImmutableArray<byte>` to `HashDigest<SHA256>`.  [[#PBFT]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  Added `VoteSet` class.  [[#PBFT]]
 -  Added `VoteFlag` enum.  [[#PBFT]]
 -  Added `Vote` readonly struct.  [[#PBFT]]
 -  Added `BlockContent.Propose()` method.  [[#PBFT]]
 -  Added `BlockCommit` class.  [[#PBFT]]
 -  Added `BlockChain.ProposeGenesisBlock()` static method.  [[#PBFT]]
 -  Added `BlockChain.ProposeBlock()` method.  [[#PBFT]]
 -  Added `PrivateKey.VrfEvaluate()` method. [[#PBFT]]
 -  Added `PublicKey.VrfVerify()` method. [[#PBFT]]
 -  Added `ICryptoBackend.VrfEvaluate()` method. [[#PBFT]]
 -  Added `ICryptoBackend.VrfVerify()` method. [[#PBFT]]
 -  (Libplanet.Net) Added `IReactor` interface.  [[#PBFT]]
 -  (Libplanet.Net) Added `ConsensusReactor` class which inherits
    `IReactor` interface.  [[#PBFT]]
 -  (Libplanet.Net) Added `ConsensusContext` class.  [[#PBFT]]
 -  (Libplanet.Net) Added `Context` class.  [[#PBFT]]
 -  (Libplanet.Net) Added `Step` enum.  [[#PBFT]]
 -  (Libplanet.Net) Added `ConsensusMessage` abstract class which inherits
    `Message` abstract class.  And added classes which implements
    `ConsensusMessage` abstract class.  [[#PBFT]]
     -  Added `ConsensusPropose` class.
     -  Added `ConsensusVote` class.
     -  Added `ConsensusCommit` class.
 -  (Libplanet.Net) Added enumeration items to `MessageType` enum.  [[#PBFT]]
     -  Added `ConsensusPropose` of value `0x40`.
     -  Added `ConsensusVote` of value `0x41`.
     -  Added `ConsensusCommit` of value `0x42`.
 -  (Libplanet.Net) Added `ConsensusReactorOption` struct.  [[#PBFT]]
 -  (Libplanet.Net) Added
    `InvalidBlockProposedMessageException` class.  [[#PBFT]]
 -  (Libplanet.Net) Added `InvalidHeightIncreasingException` class.  [[#PBFT]]
 -  (Libplanet.Net) Added
    `InvalidProposerProposeMessageException` class.  [[#PBFT]]
 -  (Libplanet.Net) Added
    `InvalidValidatorVoteMessageException` class.  [[#PBFT]]
 -  (Libplanet.Net) Added `Message.Id` property.  [[#PBFT]]
 -  (Libplanet.Net) Added `Gossip` class.  [[#PBFT]]

### Behavioral changes

 -  `PreEvaluationBlockHeader()` constructor became to throw
    `InvalidBlockLastCommitException` when its metadata's `LastCommit` is
    invalid.  [[#PBFT]]

### Bug fixes

### Dependencies

### CLI tools


Version 0.42.0
--------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

 -  Renamed `BlockChain<T>.MakeTransaction(PrivateKey, IEnumerable<T>,
    IImmutableSet<Address>, DateTimeOffset?)` method's `actions` parameter to
    `customActions`.  [[#2151], [#2273]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  Added `BlockChain<T>.MakeTransaction(PrivateKey, IAction,
    IImmutableSet<Address>, DateTimeOffset?)` overloaded method.
    [[#2151], [#2273]]

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools

[#2273]: https://github.com/planetarium/libplanet/pull/2273


Version 0.41.1
--------------

Released on August 31, 2022.

 -  Fixed a bug where `Transaction<T>.Create(long, PrivateKey, BlockHash?,
    IAction, IImmutableSet<Address>?, DateTimeOffset?)` method had thrown
    `ArgumentNullException` with valid arguments.  [[#2268], [#2270]]

[#2270]: https://github.com/planetarium/libplanet/pull/2270


Version 0.41.0
--------------

Released on August 26, 2022.

### Deprecated APIs

 -  (Libplanet.Net) Removed `NetMQTransport()` constructor.  Use
    `NetMQTransport.Create()` instead.  [[#2215]]
 -  Unused `TcpMessageCodec` class removed.  [[#2216]]
 -  (Libplanet.Stun) Removed `TurnClient.IsConnectable()` method.  [[#2219]]
 -  (Libplanet.Stun) Removed `TurnClient.BindProxies()` method.
    [[#2219]]
 -  (Libplanet.Stun) Removed `TurnClient()` constructor.
    Use `TurnClient.Create()` instead.  [[#2219]]
 -  (Libplanet.Net) Removed `Peer` class.  Use `BoundPeer` instead.  [[#2233]]

### Backward-incompatible API changes

 -  Removed unused transaction related methods from `IStore` and its
    implementations.  [[#1538], [#2201]]
    - `IterateTransactionIds()`
    - `DeleteTransaction()`
    - `CountTransactions()`
 -  Removed `Currency(string, byte, IImutableSet<Address>?)` constructor.
    [[#2200]]
 -  Removed `Currency(string, byte, Address?)` constructor.
    [[#2200]]
 -  Added static methods of `Currency` that defines different kinds of
    `Currency`.  [[#2200]]
     -  Added `Currency.Capped(string, byte, (BigInteger, BigInteger),
        IImutableSet<Address>?)` static method which defines an instance of
        `Currency` with a hard limit on the maximum minted supply.
     -  Added `Currency.Capped(string, byte, (BigInteger, BigInteger),
        Address)` static method which defines an instance of `Currency` with a
        hard limit on the maximum minted supply.
     -  Added `Currency.Uncapped(string, byte, IImutableSet<Address>?)` static
        method which defines an instance of `Currency` without an enforced
        maximum supply limit.
     -  Added `Currency.Uncapped(string, byte, Address)` static method which
        defines an instance of `Currency` without an enforced maximum supply
        limit.
     -  *OBSOLETE, ONLY FOR LEGACY SUPPORT*: Added `Currency.Legacy(string,
        byte, IImutableSet<Address>?)` static method which defines a legacy
        `Currency` instance which is compatible with `Currency` instances
        defined before total supply tracking support was introduced.
     -  *OBSOLETE, ONLY FOR LEGACY SUPPORT*: Added `Currency.Legacy(string,
        byte, Address)` static method which defines a legacy `Currency`
        instance which is compatible with `Currency` instances defined before
        total supply tracking support was introduced.
     -  *NOTE:* if you already have some `Currency` instances defined in prior
        to the addition of total supply tracking on a live chain, you cannot
        modify the already-defined `Currency` instances as a capped or uncapped
        `Currency` but have to define them with `Currency.Legacy()` as
        the new Currency kinds are internally backwards-incompatible with the
        legacy `Currency`.
 -  Added `IAccountStateDelta.TotalSupplyUpdatedCurrencies` property.
    [[#915], [#2200]]
 -  Added `IAccountStateView.GetTotalSupply(Currency)` method.
    [[#915], [#2200]]
 -  Added `IBlockChainStates<T>.GetTotalSupply(Currency, BlockHash,
    TotalSupplyStateCompleter<T>` method which gets the total supply of
    a `Currency` in `FungibleAssetValue` from the state, and if not found,
    returns null.  [[#915], [#2200]]
 -  (Libplanet.Net) `ITransport.AsPeer` and `Swarm<T>.AsPeer` type changed from
    `Peer` to `BoundPeer`.  [[#2215]]
 -  (Libplanet.Net) All public return type, parameter type, and property type
    of `Peer` changed to `BoundPeer`.  [[#2228]]
 -  (Libplanet.Net) Additional public return type, parameter type, and
    property type of `Peer` that weren't handled by [#2228] changed to
    `BoundPeer`.  [[#2233]]
 -  Reworked constructors of exception classes. Affected classes are:
     - (Libplanet.Net) `PingTimeoutException`
     - `CurrencyPermissionException`,
     `DuplicateActionTypeIdentifierException`, `InsufficientBalanceException`,
     `InvalidBlockPreEvaluationHashException`,
     `InvalidBlockProtocolVersionException`, `InvalidBlockPublicKeyException`,
     `InvalidBlockSignatureException`, `InvalidBlockStateRootHashException`,
     `InvalidBlockTotalDifficultyException`, `InvalidGenesisBlockException`,
     `InvalidTxException`, `InvalidTxGenesisHashException`,
     `InvalidTxIdException`, `InvalidTxNonceException`,
     `InvalidTxSignatureException`, `MissingActionTypeException`,
     `NoKeyException`, `SupplyOverflowException`,
     `TotalSupplyNotTrackableException`, `TxPolicyViolationException`,
     `UnexpectedlyTerminatedActionException`.  [[#2239], [#2241]]

### Added APIs

 -  Added `Currency.MaximumSupply` property.  [[#915], [#2200]]
 -  Added `Currency.TotalSupplyTrackable` field.  [[#915], [#2200]]
 -  Added `SupplyOverflowException` class.  [[#915], [#2200]]
 -  Added `TotalSupplyGetter` delegate.  [[#915], [#2200]]
 -  Added `TotalSupplyStateCompleter<T>` delegate.  [[#915], [#2200]]
 -  Added `TotalSupplyStateCompleters<T>` static class.  [[#915], [#2200]]
 -  Added `StateCompleterSet<T>.TotalSupplyStateCompleter` property.
    [[#915], [#2200]]
 -  (Libplanet.Net) Added `BoundPeer.PeerString` property.  [[#2187], [#2232]]
 -  (Libplanet.Stun) Added `IIceServer` interface.  [[#2219]]
 -  (Libplanet.Stun) Added `TurnClient.Create()` static method.  [[#2219]]
 -  (Libplanet.Explorer) Added `stateQuery` field to the root node of GraphQL
    endpoint.  [[#2149], [#2227]]
 -  (Libplanet.Explorer) Added `blockPolicy` field to the root node of GraphQL
    endpoint.  [[#2149], [#2227]]
 -  (Libplanet.Explorer) Added `CurrencyType` class.  In GraphQL, it corresponds
    to `Currency` type.  [[#2149], [#2227]]
 -  (Libplanet.Explorer) Added `FungibleAssetValueType` class.  In GraphQL,
    it corresponds to `FungibleAssetValue` type.  [[#2149], [#2227]]
 -  (Libplanet.Explorer) Added `StateQuery<T>` class.  In GraphQL, it
    corresponds to `StateQuery` type.  [[#2149], [#2227]]
 -  (Libplanet.Explorer) Added `BlockPolicyType<T>` class.  In GraphQL, it
    corresponds to `BlockPolicy` type.  [[#2149], [#2227]]

### Behavioral changes

 -  Bencodex related methods in `Currency` now accounts for the maximum
    supply and total supply tracking.  [[#915], [#2200]]
     -  For capped currencies, `Currency.Serialize()` method stores the `major`
        and `minor` values of the maximum supply as `Integer` values under the
        keys `maximumSupplyMajor` and `maximumSupplyMinor`. For uncapped and
        legacy untracked currencies, the entries are omitted.
     -  `Currency(IValue)` constructor now looks for the maximum supply and
        total supply trackability in the given dictionary and restores them if
        found.
 -  `Currency`'s implementation of `ISerializable` now accounts for the maximum
    supply and total supply tracking.  [[#915], [#2200]]
     -  `Currency`'s implementation of `ISerializable.GetObjectData` now stores
         the maximum supply if the `Currency` is capped.
     -  `Currency(SerializationInfo, StreamingContext)` constructor now looks
        for the maximum supply and total supply trackability and restores it if
        found.
 -  `IAccountStateDelta.MintAsset(Address, FungibleAssetValue)` and
    `IAccountStateDelta.BurnAsset(Address, FungibleAssetValue)` methods now
    track the total supply if the total supply of the `Currency` is trackable.
    [[#915], [#2200]]
     -  `IAccountStateDelta.MintAsset(Address, FungibleAssetValue)` method now
        throws `SupplyOverflowException` if the sum of current total supply and
        the value to be minted exceeds the maximum supply of the `Currency`
        instance.
 -  (Libplanet.Net) `NetMQTransport`'s general behavior has changed.  [[#2215]]
     -  `NetMQTransport` is now able to send requests and receive
        replies as soon as it is created through `NetMQTransport.Create()`
        factory method.
     -  `NetMQTransport.StartAsync()` enables a `NetMQTransport` instance
        to recieve requests and send replies.
     -  `NetMQTransport.StopAsync()` only disables a `NetMQTransport` instance
        to stop recieving requests and sending replies.

[#915]: https://github.com/planetarium/libplanet/issues/915
[#1538]: https://github.com/planetarium/libplanet/issues/1538
[#2187]: https://github.com/planetarium/libplanet/issues/2187
[#2239]: https://github.com/planetarium/libplanet/issues/2239
[#2200]: https://github.com/planetarium/libplanet/pull/2200
[#2201]: https://github.com/planetarium/libplanet/pull/2201
[#2215]: https://github.com/planetarium/libplanet/pull/2215
[#2216]: https://github.com/planetarium/libplanet/pull/2216
[#2219]: https://github.com/planetarium/libplanet/pull/2219
[#2227]: https://github.com/planetarium/libplanet/pull/2227
[#2228]: https://github.com/planetarium/libplanet/pull/2228
[#2232]: https://github.com/planetarium/libplanet/pull/2232
[#2233]: https://github.com/planetarium/libplanet/pull/2233
[#2241]: https://github.com/planetarium/libplanet/pull/2241


Version 0.40.1
--------------

Released on August 31, 2022.

 -  Fixed a bug where `Transaction<T>.Create(long, PrivateKey, BlockHash?,
    IAction, IImmutableSet<Address>?, DateTimeOffset?)` method had thrown
    `ArgumentNullException` with valid arguments.  [[#2268]]

[#2268]: https://github.com/planetarium/libplanet/pull/2268


Version 0.40.0
--------------

Released on August 12, 2022.

### Deprecated APIs

 -  `Transaction<T>(long, Address, PublicKey, BlockHash?,
    IImmutableSet<Address>, DateTimeOffset, IEnumerable<T>, byte[])` constructor
    is now deprecated.  Use `Transaction<T>(ITxMetadata, IEnumerable<T>,
    byte[])` constructor or `Transaction<T>.Create()` static method instead.
    [[#2175]]
 -  `Transaction<T>.Actions` property is now deprecated.  Use
    `Transaction<T>.SystemAction` property or `Transaction<T>.CustomActions`
    property instead.  [[#2149], [#2151], [#2175]]
 -  `IPreEvaluationBlockHeader.HashAlgorithm` property and its implementations
    removed.  [[#2206], [#2207]]
 -  `IBlockPolicy.GetHashAlgorithm(long)` method and its implementations
    removed.  [[#2206], [#2207]]
 -  `InvalidBlockHashAlgorithmTypeException` class removed.  [[#2206], [#2207]]
 -  `HashAlgorithmGetter` delegate removed.  [[#2206], [#2207]]

### Backward-incompatible API changes

 -  The type of `Transaction<T>.Actions` property became
    `IImmutableList<IAction>` (was `IImmutableList<T>` where `T : IAction,
    new()`).  [[#2149], [#2151], [#2175]]
 -  Renamed parameters named `actions` of many methods to `customActions`.
    [[#2149], [#2151], [#2175]]
     -  Renamed `Transaction<T>(ITxMetadata, IEnumerable<T>, byte[])`
        constructor's parameter `actions` to `customActions`.
     -  Renamed `Transaction<T>(long, Address, PublicKey, BlockHash?,
        IImmutableSet<Address>, DateTimeOffset, IEnumerable<T>, byte[])`
        constructor's parameter `actions` to `customActions`.
     -  Renamed `Transaction<T>.Create(long, PrivateKey, BlockHash?,
        IEnumerable<T>, IImmutableSet<Address>?, DateTimeOffset?)` static
        method's parameter `actions` to `customActions`.
     -  Renamed `Transaction<T>.CreateUnsigned(long, PrivateKey, BlockHash?,
        IEnumerable<T>, IImmutableSet<Address>?, DateTimeOffset?)` static
        method's parameter `actions` to `customActions`.
     -  Renamed `TxMetadata.ToBencodex(IEnumerable<IValue>,
        IImmutableArray<byte>?)` method's parameter `actions` to
        `customActions`.
 -  Added `IBlockPolicy<T>.NativeTokens` property.  [[#2149], [#2150], [#2175]]
 -  Added option `IImmutableSet<Currency>? nativeTokens` to `BlockPolicy<T>()`
    constructor as its last parameter.  [[#2149], [#2150], [#2175]]
 -  Added `IActionContext.IsNativeToken(Currency)` method.
    [[#2149], [#2150], [#2175]]
 -  Added parameter `Predicate<Currency> nativeTokenPredicate` to
    all `PreEvaluationBlock<T>.Evaluate()` method as its second parameter
    (parameter `IStateStore stateStore` remains at the last).
    [[#2149], [#2150], [#2175]]
 -  Added parameter `Predicate<Currency> nativeTokenPredicate` to
    all `PreEvaluationBlock<T>.DetermineStateRootHash()` overloads as their
    second parameter (existing second and rest parameters were shifted).
    [[#2149], [#2150], [#2175]]
 -  Added parameter `Predicate<Currency> nativeTokenPredicate` to
    `BlockChain<T>.MakeGenesisBlock()` method as its last parameter.
    [[#2149], [#2150], [#2175]]
 -  Added parameter `Predicate<Currency> nativeTokenPredicate` to
    `ActionEvaluator<T>()` constructor as its last parameter.
    [[#2149], [#2150], [#2175]]
 -  Removed `ChainIdNotFoundException` class.  [[#2047], [#2156]]
 -  Added `IStore.GetCanonicalGenesisBlock(HashAlgorithmGetter)` method.
    [[#2162], [#2171]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `BlockChain<T>.MakeGenesisBlock()` method.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `BlockContent<T>.Mine()` method.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `PreEvaluationBlock<T>()` constructors.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `PreEvaluationBlockHeader<T>()` constructors.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `BlockMetadata<T>.DerivePreEvaluationHash()` method.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmType hashAlgorithm` removed from
    `BlockMetadata<T>.MineNonce()` methods.  [[#2206], [#2207]]
 -  Return type for `BlockMarshaler
    .UnmarshalPreEvaluationBlockHeader(Dictionary)` changed from
    `(BlockMetadata, Nonce, ImmutableArray<bytes>?)` to
    `PreEvaluationBlockHeader`.  Removed overload method
    `BlockMarshaler
    .UnmarshalPreEvaluationBlockHeader(HashAlgorithm, Dictionary)`.
    [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `BlockMarshaler.UnmarshalBlockHeader()` method.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `IStore<T>.GetCanonicalGenesisBlock<T>()` and
    `IStore<T>.GetBlock<T>()` interface methods and their implementations.
    [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `BlockSet<T>()` constructor.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `BlockDigest.GetHeader()` method.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `DelayedRenderer<T>()` constructor.  [[#2206], [#2207]]
 -  Parameter `HashAlgorithmGetter hashAlgorithmGetter` removed from
    `DelayedActionRenderer<T>()` constructor.  [[#2206], [#2207]]
 -  (Libplanet.Node) Parameter `HashAlgorithmGetter hashAlgorithm` removed
    from `UntypedBlock()` constructor.  [[#2206], [#2207]]

### Added APIs

 -  (Libplanet.Explorer) Added `TransactionMutation<T>` class.  [[#2130]]
 -  (Libplanet.Explorer) Added `unsignedTransaction`, `bindSignature` and
    `transactionResult` GraphQL fields to `TransactionQuery<T>`.  [[#2130]]
 -  Added `Transaction<T>.SystemAction` property.  [[#2149], [#2151], [#2175]]
 -  Added `Transaction<T>.CustomActions` property.  [[#2149], [#2151], [#2175]]
 -  Added overloads to take `systemAction` besides the existing constructors and
    methods taking `customActions`.  [[#2149], [#2151], [#2175]]
     -  Added `Transaction<T>(ITxMetadata, IAction, byte[])` overloaded
        constructor.
     -  Added `Transaction<T>.Create(long, PrivateKey, BlockHash?, IAction,
        IImmutableSet<Address>?, DateTimeOffset?)` overloaded static method.
     -  Added `Transaction<T>.CreateUnsigned(long, PrivateKey, BlockHash?,
        IAction, IImmutableSet<Address>?, DateTimeOffset?)` overloaded static
        method.
     -  Added `TxMetadata.ToBencodex(IValue, ImmutableArray<byte>?)` overloaded
        method.
 -  Introduced new system built-in actions.  [[#2149], [#2150], [#2175]]
     -  Added `Mint` class.
     -  Added `Transfer` class.
 -  Added `NonNativeTokenException` class.  [[#2149], [#2150], [#2175]]
 -  Added `BlockLocator` class.  [[#1762], [#2140]]
 -  Added methods required for decoupling *Libplanet.Net* from
    *Libplanet*.  [[#1762], [#2140]]
     -  Added `BlockChain<T>.FindNextHashes(BlockLocator, BlockHash?, int)`
        method.
     -  Added `BlockChain<T>.Fork(BlockHash, bool)` method.
     -  Added `BlockChain<T>.GetBlockLocator(int)` method.
 -  Added `IActionContext.GenesisHash` property.  [[#1972], [#2179]]
 -  Added `ActionEvaluator<T>.GenesisHash` property.  [[#1972], [#2179]]
 -  Added `IAccountStateView` interface.  [[#2183]]
 -  `IAccountStateDelta` now inherits `IAccountStateView` interface.
    [[#2183]]
 -  Added `BlockMetadata.HashAlgorithmType` static property.  [[#2206], [#2207]]
 -  Added `BlockMarshaler.UnmarshalNonce(Dictionary)` and
    `BlockMarshaler.UnmarshalPreEvaluationHash(Dictionary)` methods.
    [[#2206], [#2207]]

### Behavioral changes

 -  `BlockChain<T>.PerceiveBlock()` method now uses millisecond precision for
    perceive time of newly perceived blocks.  [[#2155], [#2159]]
 -  Nonexistent chain ids in `IStore` are now considered to be chain ids of
    empty chains.  [[#2047], [#2156]]
 -  `Libplanet.Explorer` now targets .NET 6.0.  [[#2173]]
 -  Behavior of `Block<T>.GetHashCode()` changed.  [[#2206], [#2207]]

[#1762]: https://github.com/planetarium/libplanet/issues/1762
[#1972]: https://github.com/planetarium/libplanet/issues/1972
[#2047]: https://github.com/planetarium/libplanet/issues/2047
[#2140]: https://github.com/planetarium/libplanet/pull/2140
[#2149]: https://github.com/planetarium/libplanet/issues/2149
[#2150]: https://github.com/planetarium/libplanet/issues/2150
[#2151]: https://github.com/planetarium/libplanet/issues/2151
[#2155]: https://github.com/planetarium/libplanet/issues/2155
[#2156]: https://github.com/planetarium/libplanet/pull/2156
[#2159]: https://github.com/planetarium/libplanet/pull/2159
[#2162]: https://github.com/planetarium/libplanet/issues/2162
[#2171]: https://github.com/planetarium/libplanet/pull/2171
[#2173]: https://github.com/planetarium/libplanet/pull/2173
[#2175]: https://github.com/planetarium/libplanet/issues/2175
[#2179]: https://github.com/planetarium/libplanet/pull/2179
[#2183]: https://github.com/planetarium/libplanet/pull/2183
[#2206]: https://github.com/planetarium/libplanet/issues/2206
[#2207]: https://github.com/planetarium/libplanet/pull/2207


Version 0.39.0
--------------

Released on July 18th, 2022.

### Deprecated APIs

 -  (Libplanet.Net) Removed `TcpTransport` class.  [[#2139]]
 -  (Libplanet.Net) Removed `InvalidMagicCookieException` class.  [[#2139]]
 -  (Libplanet.Net) Removed `SwarmOptions.TransportType` property.  [[#2139]]
 -  (Libplanet.Node) Removed `InitConfig.TransportType` property.  [[#2139]]

### Added APIs

 -  Added `DuplicateActionTypeIdentifierException` class.  [[#2142]]

### Behavioral changes

 -  (Libplanet.Net) Raised the default value for `Swarm<T>()` constructor's
    `workers` parameter to 100.  [[#2128], [#2134]]
 -  (Libplanet.Explorer) Raised the default value for `workers` console
    argument to 100.  [[#2128], [#2134]]
 -  `PolymorphicAction<T>` now allows subclasses of `T` to be declared in
    the entry assembly of the application besides the same assembly as `T`.
    [[#2136], [#2142]]
 -  `PolymorphicAction<T>` now throws `DuplicateActionTypeIdentifierException`
    when multiple subtypes of `T` are associated with the same
    `ActionTypeAttribute.TypeIdentifier`.  [[#2142]]

### Bug fixes

 -  Fixed a bug where `PrivateKey()` constructor had returned an invalid key
    less than 32 bytes.  [[#1696], [#2091]]
 -  (Libplanet.Net) Invalid `Uri.UserInfo` with multiple colons is now
    rejected by `IceServer(Uri url)` constructor and exception is thrown.
    [[#2058], [#2116]]

### CLI tools

 -  (Libplanet.Extensions.Cocona) Upgraded *Cocona.Lite* from 1.6.\* to
    [2.0.\*][Cocona.Lite 2.0.0].  [[#2101]]
 -  Implemented *planet key derive*, now you can get public key and
    address from private key directly!  [[#2108]]
 -  (Libplanet.Extensions.Cocona) Removed `DerivationCommand` class.
    [[#2118]]

[#1696]: https://github.com/planetarium/libplanet/issues/1696
[#2058]: https://github.com/planetarium/libplanet/issues/2058
[#2091]: https://github.com/planetarium/libplanet/pull/2091
[#2101]: https://github.com/planetarium/libplanet/pull/2101
[#2108]: https://github.com/planetarium/libplanet/pull/2108
[#2116]: https://github.com/planetarium/libplanet/pull/2116
[#2118]: https://github.com/planetarium/libplanet/pull/2118
[#2128]: https://github.com/planetarium/libplanet/issues/2128
[#2130]: https://github.com/planetarium/libplanet/pull/2130
[#2134]: https://github.com/planetarium/libplanet/pull/2134
[#2136]: https://github.com/planetarium/libplanet/pull/2136
[#2139]: https://github.com/planetarium/libplanet/pull/2139
[#2142]: https://github.com/planetarium/libplanet/pull/2142
[Cocona.Lite 2.0.0]: https://www.nuget.org/packages/Cocona.Lite/2.0.0


Version 0.38.0
--------------

Released on June 7th, 2022.

### Backward-incompatible API changes

 -  (Libplanet.Net) Removed `username` and `credential` parameters from
    `IceServer(string, string?, string?)` and
    `IceServer(Uri, string?, string?)`.  [[#2048], [#2049]]
 -  (Libplanet.Net) Properties `IceServer.Username` and `IceServer.Credential`
    are no longer nullable.  [[#2048], [#2049]]

### Added APIs

 -  (Libplanet.Node) Added `NetworkConfig` class.  [[#1946], [#2000]]
 -  (Libplanet.Node) Added `NodeConfig` class.  [[#1946], [#2000]]
 -  (Libplanet.Node) Added `NodeUtils` class.  [[#2013]]
 -  (Libplanet.Node) Added `SwarmConfig`, `InitConfig`, `BootstrapConfig`
    `PreloadConfig`, and `SyncConfig` classes.  [[#2021]]

### Behavioral changes

 -  Added `PrivateKey(string)` constructor for hexadecimal string.
    [[#2012], [#2022]]
 -  Allow `0x` prefix for `Address` class constructor.
    `DeriveAddress` method will remove `0x` prefix string.
    [[#2015], [#2018]]

[#1946]: https://github.com/planetarium/libplanet/issues/1946
[#2000]: https://github.com/planetarium/libplanet/pull/2000
[#2012]: https://github.com/planetarium/libplanet/issues/2012
[#2013]: https://github.com/planetarium/libplanet/pull/2013
[#2015]: https://github.com/planetarium/libplanet/issues/2015
[#2018]: https://github.com/planetarium/libplanet/pull/2018
[#2021]: https://github.com/planetarium/libplanet/pull/2021
[#2022]: https://github.com/planetarium/libplanet/pull/2022
[#2048]: https://github.com/planetarium/libplanet/issues/2048
[#2049]: https://github.com/planetarium/libplanet/pull/2049


Version 0.37.0
--------------

Released on May 30th, 2022.

### Backward-incompatible API changes

 -  (Libplanet.Net) Removed `SwarmOptions.BootstrapDialTimeout`.
    Use `SwarmOptions.BootstrapOptions.DialTimeout` instead.  [[#2024]]
 -  (Libplanet.Net) Added `Swarm<T>.BootstrapAsync(CancellationToken)`
    which utilizes values stored in `BootstrapOptions`.  [[#2024]]
 -  (Libplanet.Net) Parameter name `depth` changed to `searchDepth` for
    `Swarm<T>.BootstrapAsync(IEnumerable<Peer>, TimeSpan?, int,
    CancellationToken)` and made non-optional.  [[#2024]]
 -  (Libplanet.Net) `Swarm<T>.BootstrapAsync(IEnumerable<Peer>, depth,
    CancellationToken)` removed.  [[#2024]]
 -  (Libplanet.Net) Removed `SwarmOptions.PreloadDialTimeout`.
    Use `SwarmOptions.PreloadOptions.DialTimeout` instead.  [[#2025]]
 -  (Libplanet.Net) Added `Swarm<T>.PreloadAsync(IProgress<PreloadState>, bool,
    CancellationToken)`.  [[#2025]]
 -  (Libplanet.Net) Changed the order of parameters from `Swarm<T>(TimeSpan,
    IProgresss<PreloadState>, bool, long, CancellationToken)` to `Swarm<T>(
    TimeSpan?, long, IProgress<PreloadState>, bool, CancellationToken)`
    with default value for `tipDeltaThreshold` removed.  [[#2025]]
 -  (Libplanet.Net) Parameter name `Urls` changed to `Url` for `IceServer`
    and no longer accepts multiple Urls for single instance.  [[#2026]]

### Added APIs

 -  (Libplanet.Net) Added `BootstrapOptions` class.  [[#2024]]
 -  (Libplanet.Net) Added `BootstrapOptions` property to `SwarmOptions`.
    [[#2024]]
 -  (Libplanet.Net) Added `PreloadOptions` class.  [[#2025]]
 -  (Libplanet.Net) Added `PreloadOptions` property to `SwarmOptions`.
    [[#2025]]

### CLI tools

[#2024]: https://github.com/planetarium/libplanet/pull/2024
[#2025]: https://github.com/planetarium/libplanet/pull/2025
[#2026]: https://github.com/planetarium/libplanet/pull/2026


Version 0.36.1
--------------

Released on May 26th, 2022.

 -  Fixed `Transaction<T>()` constructor's bug that it had thrown
    `KeyNotFoundException` when a Bencodex dictionary without
    signature.  [[#2005]]

[#2005]: https://github.com/planetarium/libplanet/pull/2005


Version 0.36.0
--------------

Released on May 25th, 2022.

### Backward-incompatible API changes

 -  Removed `InvalidTxPublicKeyException` class.  [[#1164], [#1978]]
 -  (Libplanet.Net) Property `SwarmOptions.BlockDownloadTimeout` removed.
    [[#1981], [#1982]]
 -  (Libplanet.Net) `Swarm<T>.BootstrapAsync(IEnumerable<Peer>, TimeSpan?,
    TimeSpan?, int, CancellationToken)` changed to `Swarm<T>.BoostrapAsync(
    IEnumerable<Peer>, TimeSpan?, int, CancellationToken)`.  Parameter
    `dialTimeout` now gets used for both old `pingSeedTimeout` and
    `findNeigborsTimeout`.  [[#1990]]
 -  (Libplanet.Net) `IProtocol.BootstrapAsync(IEnumerable<BoundPeer>, TimeSpan?,
    TimeSpan?, int, CancellationToken)` changed to `IProtocol.BootstrapAsync(
    IEnumerable<Peer>, TimeSpan?, int, CancellationToken)`.  Parameter
    `dialTimeout` now gets used for both old `pingSeedTimeout` and
    `findNeigborsTimeout`.  [[#1990]]

### Added APIs

 -  Introduced *Libplanet.Node* package.  [[#1974], [#1978]]
 -  Added `ITxMetadata` interface.  [[#1164], [#1974], [#1978]]
 -  Added `TxMetadata` class.  [[#1164], [#1974], [#1978]]
 -  Added `ITxExcerpt` interface.  [[#1164], [#1974], [#1978]]
 -  Added `TxExcerptExtensions` static class.  [[#1164], [#1974], [#1978]]
 -  `Transaction<T>` now implements `ITxExcerpt` interface.
    [[#1164], [#1974], [#1978]]
 -  Added `Transaction<T>(ITxMetadata, IEnumerable<T>, byte[])` constructor.
    [[#1164], [#1978]]
 -  Added `TxId.FromString()` static method.  [[#1978]]
 -  (Libplanet.Node) Added `UntypedTransaction` class.  [[#1974], [#1978]]
 -  (Libplanet.Node) Added `UntypedBlock` class.  [[#1974], [#1978]]

### Behavioral changes

 -  `Transaction<T>(long, Address, PublicKey, BlockHash?,
    IImmutableSet<Address>, DateTimeOffset, IEnumerable<T>, byte[])` constructor
    became to ignore its second parameter `Address signer`.  Instead,
    `Transaction<T>.Signer` property is now automatically derived from its
    `PublicKey`.  [[#1164], [#1978]]

### Bug fixes

 -  Fixed `InvalidOperationException` thrown by `PublicKey.Verify()` method
    if `signature` is a `default(ImmutableArray<byte>)`.  Instead, it silently
    returns `false` now.  [[#1978]]
 -  Fixed `NullReferenceException` thrown by `ByteUtil.Hex(in
    ImmutabelArray<byte>)` method if a `default(ImmutableArray<byte>)` is
    present.  Instead, it silently returns an empty string now.  [[#1978]]
 -  Fixed a `TxId(byte[])` constructor's bug where `ParamName` and `Message` of
    `ArgumentOutOfRangeException` it had thrown had been reversed.  [[#1978]]

### CLI tools

[#1974]: https://github.com/planetarium/libplanet/issues/1974
[#1978]: https://github.com/planetarium/libplanet/pull/1978
[#1981]: https://github.com/planetarium/libplanet/issues/1981
[#1982]: https://github.com/planetarium/libplanet/pull/1982
[#1990]: https://github.com/planetarium/libplanet/pull/1990


Version 0.35.1
--------------

Released on May 23rd, 2022.

### Bug fixes

-  (Libplanet.Net) Wrongly assigned default value to
   `TimeoutOptions.PreloadDialTimeout` fixed.  [[#1983]]

[#1983]: https://github.com/planetarium/libplanet/pull/1983


Version 0.35.0
--------------

Released on May 20th, 2022.

### Deprecated APIs

 -  (Libplanet.Net) Unused property `SwarmOptions.PollInterval` removed.
    [[#1962]]

### Backward-incompatible API changes

 -  `BlockCompletion<TPeer, TAction>.Complete()` no longer accepts
    neither parmeter `TimeSpan singleSessionTimeout` nor
    `int millisecondsSingleSessionTimeout` to regulate a single session length.
    [[#1961]]
 -  (Libplanet.Net) General API changes made to `Swarm<T>.BootstrapAsync()`,
    `Swarm<T>.PreloadAsync()`, and `Swarm<T>.StartAsync()`.  [[#1962]]
     -  `Swarm<T>.BootstrapAsync(IEnumerable<Peer>, double, double,
        int, CancellationToken)` replaced with
        `Swarm<T>.BootstrapAsync(IEnumerable<Peer>, int, CancellationToken)`
        which uses default values provided by `SwarmOptions` for
        `pingSeedTimeout` and `findPeerTimeout`.
     -  `Swarm<T>.StartAsync(int, int, int CancellationToken)`
        replaced with `Swarm<T>.StartAsync(CancellationToken)`
        which uses default values provided by `SwarmOptions` for
        `millisecondsDialTimeout`, `millisecondsBroadcastBlockInterval`
        and `millisecondsBroadcastTxInterval`.
     -  `Swarm<T>.PreloadAsync(IProgress<PreloadState>,
        bool, long, CancellationToken)` overload method added and
        `Swarm<T>.PreloadAsync(TimeSpan?, IProgress<PreloadState>, bool
        long, CancellationToken)` changed to `Swarm<T>.PreloadAsync(
        TimeSpan, IProgress<PreloadState>, bool, long, CancellationToken)`
 -  (Libplanet.Net) `TimeoutOptions` property added to `SwarmOptions` with
    all timeout related options moved from `SwarmOptions` to `TimeoutOptions`.
    [[#1957], [#1962]]

### Added APIs

 -  Added `StoreLoader` delegate.  [[#1359], [#1953], [#1955]]
 -  Added `StoreLoaderAttribute` class.  [[#1359], [#1953], [#1955]]
 -  Added `TrieStateStore.Secure` property.  [[#1955]]
 -  Added `NameValueCollectionExtensions` static class.  [[#1955]]
 -  Type support for `Guid` added to `DataModel`.  [[#1959], [#1960]]
 -  `TimeoutOptions` class added.  [[#1957], [#1962]]
 -  `SwarmOptions.BlockBroadcastInterval` and `SwarmOptions.TxBroadcastInterval`
    properties added.  [[#1962]]
 -  `TimeSpanExtensions.Multiply()` method added.  [[#1966]]

### Behavioral changes

 -  `DefaultStore` and `DefaultKeyValueStore`-backed `TrieStateStore` now can be
    instantiated with URI scheme `default+file:` using
    `StoreLoaderAttribute.LoadStore()` method.  [[#1359], [#1953], [#1955]]
 -  `MemoryStore` and `MemoryKeyValueStore`-backed `TrieStateStore` now can be
    instantiated with URI scheme `memory:` using
    `StoreLoaderAttribute.LoadStore()` method.  [[#1359], [#1953], [#1955]]
 -  (Libplanet.RocksDBStore) `RocksDBStore` and `RocksDBKeyValueStore`-backed
    `TrieStateStore` now can be instantiated with URI scheme `rocksdb+file:`
    using `StoreLoaderAttribute.LoadStore()` method.
    [[#1359], [#1953], [#1955]]

### CLI tools

 -  The following store URI schemes are deprecated:  [[#1573], [#1955]]
     - `default`: Use `default+file` instead.
     - `rocksdb`: Use `rocksdb+file` instead.

[#1359]: https://github.com/planetarium/libplanet/issues/1359
[#1573]: https://github.com/planetarium/libplanet/issues/1573
[#1953]: https://github.com/planetarium/libplanet/issues/1953
[#1955]: https://github.com/planetarium/libplanet/pull/1955
[#1957]: https://github.com/planetarium/libplanet/issues/1957
[#1959]: https://github.com/planetarium/libplanet/issues/1959
[#1960]: https://github.com/planetarium/libplanet/pull/1960
[#1961]: https://github.com/planetarium/libplanet/pull/1961
[#1962]: https://github.com/planetarium/libplanet/pull/1962
[#1966]: https://github.com/planetarium/libplanet/pull/1966


Version 0.34.0
--------------

Released on May 13th, 2022.

### Added APIs

 -  Class `DataModel` added.  When inherited, this class assists in automatic
    encoding and decoding to and from `Bencodex.Types.Dictionary`.
    [[#1932], [#1935]]

### Behavioral changes

 -  `TxPolicyViolationException` and `InvalidTxException` now have a new
    constructor that takes an `Exception` as their `Exception.InnerException`.
    [[#1830], [#1912], [#1916]]

### CLI tools

 -  Added `planet key sign` to sign a message.  [[#1920]]

[#1830]: https://github.com/planetarium/libplanet/issues/1830
[#1912]: https://github.com/planetarium/libplanet/pull/1912
[#1916]: https://github.com/planetarium/libplanet/pull/1916
[#1920]: https://github.com/planetarium/libplanet/pull/1920
[#1932]: https://github.com/planetarium/libplanet/issues/1932
[#1935]: https://github.com/planetarium/libplanet/pull/1935


Version 0.33.1
--------------

Released on April 28th, 2022.

### Behavioral changes

 -  `Transaction<T>`'s relatively heavy policy validation is deferred until
    after its nonce validation in order to speed up gathering `Transaction<T>`s
    when mining.  [[#1924]]

[#1924]: https://github.com/planetarium/libplanet/pull/1924


Version 0.33.0
--------------

Released on April 19th, 2022.

### Backward-incompatible API changes

 -  (Libplanet.Net) `IMessageCodec` and its implementations `NetMQMessageCodec`
    and `TcpMessageCodec` overhauled.  [[#1906]]
     -  `AppProtocolVersion` type parameter added to `IMessageCodec.Encode()`.
     -  Both `NetMQMessageCodec()` and `TcpMessageCodec()` constructors are
        made parameterless.
     -  `IMessageCodec.Decode()` no longer throws
        `InvalidMessageTimestampException` or
        `DifferentAppProtocolVersionException`.
 -  (Libplanet.Net) Irrelevant context related properties removed from
    `InvalidMessageTimestampException` and
    `DifferentAppProtocolVersionException`.  [[#1906]]
     -  `InvalidMessageTimestampException.Peer` property removed.
     -  `DifferentAppProtocolVersionException.Peer` property removed.
     -  `DifferentAppProtocolVersionException.Identity` property removed.
 -  (Libplanet.Net) Both `MessageValidator.ValidateTimestamp()` and
    `MessageValidator.ValidateAppProtocolVersion()` now only accepts single
    `Message` type parameter.  [[#1906]]
 -  (Libplanet.Net) `SendMessageFailedException` changed to
    `SendMessageFailException`.  [[#1911]]
 -  (Libplanet.Net) `ITransport` exception handling overhauled.  [[#1911]]
     -  `ITransport.SendMessageAsync()` now only throws
        `CommunicationFailException` for a normal failure of sending and
        receiving `Message`s; old exceptions such as `TimeoutException`,
        `InvalidMessageSignatureException`, etc. are attached to
        `InnerException` property to a thrown `CommunicationFailException`.
     -  `InvalidCredentialException`, `InvalidMagicCookieException`,
        `InvalidMessageSignatureException`, `SendMessageFailException` no longer
        have public constructors.

### Added APIs

 -  (Libplanet.Net) `InvalidCredentialException` class added.
    [[#1904], [#1905]]
 -  (Libplanet.Net) `CommunicationFailException` class added.  [[#1911]]

### Behavioral changes

 -  Inner logic of `ByteUtil.CalculateHashCode(byte[] bytes)` has modified.
    [[#1866], [#1891]]
 -  (Libplanet.Net) `IMessageCodec.Encode()` now requires a *matching*
    `PrivateKey` to be provided for `Peer`.  [[#1904], [#1905]]

### Dependencies

 -  No longer depends on *Fody*.  [[#1866], [#1891]]
 -  No longer depends on *Equals.Fody*.  [[#1866], [#1891]]

### CLI tools

[#1866]: https://github.com/planetarium/libplanet/issues/1866
[#1891]: https://github.com/planetarium/libplanet/pull/1891
[#1904]: https://github.com/planetarium/libplanet/issues/1904
[#1905]: https://github.com/planetarium/libplanet/pull/1905
[#1906]: https://github.com/planetarium/libplanet/pull/1906
[#1911]: https://github.com/planetarium/libplanet/pull/1911


Version 0.32.1
--------------

Released on April 8th, 2022.

### Behavioral changes

 -  (Libplanet.Net) `ITransport`'s behavior rolled back to send replies
    with `DifferentVersion` type `Message` to a `Peer` with a different
    `AppProtocolVersion` regardless of whether the `APV` from `Peer` is
    signed by a trusted source or not.  [[#1900]]

[#1900]: https://github.com/planetarium/libplanet/pull/1900


Version 0.32.0
--------------

Released on April 8th, 2022.

### Backward-incompatible API changes

 -  Added `IStore.PruneOutdatedChains(bool noopWithoutCanon)` method.
    [[#1874], [#1878]]
 -  `IMessageCodec` interface and its implementations overhauled.  [[#1890]]
     -  Removed `AppProtocolVersion version` parameter from
        `IMessageCodec.Encode()`.
     -  Removed `Action appProtocolVersionValidator` parameter from
        `IMessageCodec.Decode()`.
     -  Both `TcpMessageCodec()` and `NetMQMessageCodec()` now takes
        additional parameters for setting up its `MessageValidator` instance
        for running context.
 -  `DifferentAppProtocolVersionEncountered` delegate now returns `void`.
    [[#1885], [#1890]]

### Added APIs

 -  (Libplanet.Net) `DifferentAppProtocolVersionException` is made `public`.
    [[#1889]]
 -  (Libplanet.Net) `InvalidMessageSignatureException` and
    `InvalidMessageTimestampException` gained additional properties.
    [[#1889]]
 -  (Libplanet.Net) `MessageValidator` helper class introduced.  [[#1890]]

### Behavioral changes

 -  (Libplanet.Net) Internal cache size of a `KBucket` is now capped.
    [[#1879]]
 -  (Libplanet.Net) `IMessageCodec` now never decodes a `Message` with
    a different `AppProtocolVersion` from the local version.  [[#1885], [#1890]]
 -  (Libplanet.Net) `ITransport` no longer replies with `DifferentVersion` type
    `Message` to a `Peer` with a different `AppProtocolVersion` that is not
    signed by a trusted source.  [[#1890]]

### Bug fixes

 -  (Libplanet.Net) Internal dictionaries of a `KBucket` are made to be
    concurrent.  [[#1872], [#1879]]
 -  (Libplanet.Net) `DifferentAppProtocolVersionException` and
    `InvalidMessageSignatureException` can now be serialized and deserialized.
    [[#1889]]

[#1872]: https://github.com/planetarium/libplanet/issues/1872
[#1874]: https://github.com/planetarium/libplanet/issues/1874
[#1878]: https://github.com/planetarium/libplanet/pull/1878
[#1879]: https://github.com/planetarium/libplanet/pull/1879
[#1885]: https://github.com/planetarium/libplanet/issues/1885
[#1889]: https://github.com/planetarium/libplanet/pull/1889
[#1890]: https://github.com/planetarium/libplanet/pull/1890


Version 0.31.0
--------------

Released on March 31, 2022.

### Backward-incompatible API changes

 -  (Libplanet.Net) Existing method name `Kademlia.CalculateDistance()`
    changed to `Kademlia.CalculateDifference()` to better indicate its behavior.
    [[#1877]]
 -  (Libplanet.Net) `Kademlia.CalculateDistance()` method reimplemented with
    return type `int`.  [[#1877]]

### Bug fixes

 -  (Libplanet.Stun) Increased the number of internal proxies to increase
    the inbound network traffic throughput of a node when using a `TurnClient`.
    [[#1864], [#1876]]

[#1864]: https://github.com/planetarium/libplanet/issues/1864
[#1876]: https://github.com/planetarium/libplanet/pull/1876
[#1877]: https://github.com/planetarium/libplanet/pull/1877


Version 0.30.0
--------------

Released on March 24, 2022.

### Backward-incompatible storage format changes

 -  (Libplanet.RocksDBStore) `RocksDBStore` became not to use [column families]
    to manage chain ids.  Instead, chain id is concatenated into key prefix.
    [[#1862]]

### CLI tools

  - Added `planet store migrate-index` for index database migration
    (from column families based to key-prefix).  [[#1862]]

[#1862]: https://github.com/planetarium/libplanet/pull/1862
[column families]: https://github.com/facebook/rocksdb/wiki/Column-Families


Version 0.29.0
--------------

Released on March 17, 2022.

### Backward-incompatible API changes

 -  (Libplanet.Net) `SwarmOptions.MessageLifespan` property changed to
    `SwarmOptions.MessageTimestampBuffer`.  [[#1828], [#1831]]
 -  (Libplanet.Net) Unused parameter `dealerSocketLifetime` removed from
    `NetMQTransport()`.  [[#1832]]
 -  (Libplanet.Net) Old `ITransport.SendMessageAsync()` method is deprecated.
    `ITransport.SendMessageWithReplyAsync()` methods are renamed as
    `ITransport.SendMessageAsync()`.  [[#1849]]

### Behavioral changes

 -  (Libplanet.Net) Default value of `SwarmOptions.MessageTimestampBuffer` is
    set to 60 seconds instead of `null`.  [[#1828], [#1831]]
 -  (Libplanet.Net) Acceptable timestamp range for `Message`s, when non-null
    `SwarmOptions.MessageTimestampBuffer` is provided, has changed to allow
    `Message`s with future timestamps.
    [[#1828], [#1831]]
 -  (Libplanet.Net) `Swarm<T>` now replies `Pong`s to received `TxIds`
    and `BlockHeaderMessage` messages.  [[#1845]]

[#1828]: https://github.com/planetarium/libplanet/issues/1828
[#1831]: https://github.com/planetarium/libplanet/pull/1831
[#1832]: https://github.com/planetarium/libplanet/pull/1832
[#1845]: https://github.com/planetarium/libplanet/pull/1845
[#1849]: https://github.com/planetarium/libplanet/pull/1849


Version 0.28.2
--------------

Released on March 15, 2022.

 -  (Libplanet.RocksDBStore) `RocksDBStore.GetBlockDigest()` became to silently
    return `null` with no misleading error log when it's asked a non-existent
    block hash.  [[#1500], [#1852]]

[#1852]: https://github.com/planetarium/libplanet/pull/1852


Version 0.28.1
--------------

Released on March 3, 2022.

 -  Fixed an evaluation log to output `IPreEvaluationBlock<T>.PreEvaluationHash`
    as a hex formatted string.  [[#1835], [#1837]]
 -  (Libplanet.Net) Fixed a bug where some messages could not be sent using
    `NetMQTransport` due to premature `DealerSocket` disposal.
    [[#1836], [#1839]]

[#1835]: https://github.com/planetarium/libplanet/issues/1835
[#1836]: https://github.com/planetarium/libplanet/issues/1836
[#1837]: https://github.com/planetarium/libplanet/pull/1837
[#1839]: https://github.com/planetarium/libplanet/pull/1839


Version 0.28.0
--------------

Released on February 23, 2022.

### Deprecated APIs

### Backward-incompatible API changes

 -  The return type of `MerkleTrieExtensions.DifferentNodes()` became
    `IEnumerable<Tuple<KeyBytes, IValue, IValue>>` from
    `IEnumerable<IGrouping<string, (HashDigest<SHA256> Root, IValue Value)>>`.
    [[#1729]]
 -  (Libplanet.Extensions.Cocona) Replaced `string? passphrase = null` parameter
    of methods belonging `KeyCommand` and `ApvCommand` with
    `PassphraseParameters passphrase`.  [[#1593], [#1823]]
 -  (Libplanet.Extensions.Cocona) Replaced `KeyCommand.UnprotectKey(Guid keyId,
    string? passphrase = null)` method with `UnprotectedKey(Guid,
    PassphraseParameters, bool)` method.  [[#1593], [#1823]]
 -  (Libplanet.Net) `IMessageCodec<T>.Decode()` now throws
    `InvalidMessageSignatureException` and `InvalidMessageTimestampException`
    instead of `InvalidMessageException` and `InvalidTimestampException`
    respectively.  [[#1771]]
 -  (Libplanet.Net) Added `long tipDeltaThreshold = 25L` option to
    `Swarm<T>.PreloadAsync()` method.  [[#1775], [#1777], [#1779]]

### Backward-incompatible network protocol changes

 -  The `Block<T>.CurrentProtocolVersion` is bumped from 2 to 3.
    [[#1322], [#1323], [#1518]]

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Extensions.Cocona) Added `PassphraseParameters` class.
    [[#1593], [#1823]]
 -  (Libplanet.Extensions.Cocona) Added `KeyCommand.UnprotectKey(Guid keyId,
    PassphraseParameters passphrase, bool ignoreStdin = false)` method.
    [[#1593], [#1823]]
 -  (Libplanet.Net) Added `MessageSendFailedException` class.
    [[#1781], [#1786]]

### Behavioral changes

 -  `Block<T>.Transactions` is ordered using a different scheme for
    evaluation due to protocol version bump.  [[#1322], [#1323], [#1518]]
 -  (Libplanet.Net) `NetMQTransport.SendMessageWithReplyAsync()` should now
    complete its process within given timeframe `timeout` argument instead
    of possibly taking longer on some edge cases when waiting for
    multiple replies.  [[#1734], [#1789]]
 -  `ActionEvaluator<T>.Evaluate()` method became to log message directly
    instead of other methods that use it.  [[#1773]]
 -  (Libplanet.Net) `NetMQTransport.DoBroadcast` now uses
    `NetMQTransport.SendMessageAsync()` internally instead of
    using `NetMQ` directly.  [[#1722], [#1824]]

### Bug fixes

 -  (Libplanet.Net) Fixed a leak in handling `DealerSocket`s inside
    `NetMQTransport.DoBroadcast()` method.  [[#1819], [#1825]]

### Dependencies

 -  (Libplanet.Extensions.Cocona) Upgraded *Cocona.Lite* from 1.5.\* to
    [1.6.\*][Cocona.Lite 1.6.0].  [[#1593], [#1823]]

### CLI tools

 -  All `planet` subcommands taking passphrase now have `--passphrase-file`
    option besides `-p`/`--passphrase` option to read it from the specified
    file or standard input (`-`) instead.  [[#1593], [#1823]]
 -  Fixed a bug where `planet` subcommands taking passphrase had unexpectedly
    terminated with an uncaught `InvalidOperationException` when it's not
    associated to any terminal device (tty), i.e., piped.  [[#1593], [#1823]]
 -  `planet mpt diff` command became to output the key and its values
    in one line as JSON whenever a different key is found,
    than it outputs all of the different nodes at once.  [[#1729]]

[#1322]: https://github.com/planetarium/libplanet/issues/1322
[#1323]: https://github.com/planetarium/libplanet/issues/1323
[#1518]: https://github.com/planetarium/libplanet/pull/1518
[#1593]: https://github.com/planetarium/libplanet/pull/1593
[#1722]: https://github.com/planetarium/libplanet/issues/1722
[#1729]: https://github.com/planetarium/libplanet/pull/1729
[#1734]: https://github.com/planetarium/libplanet/issues/1734
[#1771]: https://github.com/planetarium/libplanet/pull/1771
[#1773]: https://github.com/planetarium/libplanet/pull/1773
[#1779]: https://github.com/planetarium/libplanet/pull/1779
[#1781]: https://github.com/planetarium/libplanet/issues/1781
[#1786]: https://github.com/planetarium/libplanet/pull/1786
[#1789]: https://github.com/planetarium/libplanet/pull/1789
[#1819]: https://github.com/planetarium/libplanet/issues/1819
[#1823]: https://github.com/planetarium/libplanet/pull/1823
[#1824]: https://github.com/planetarium/libplanet/pull/1824
[#1825]: https://github.com/planetarium/libplanet/pull/1825
[Cocona.Lite 1.6.0]: https://www.nuget.org/packages/Cocona.Lite/1.6.0


Version 0.27.7
--------------

Released on February 18, 2022.

 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had thrown `IndexOutOfRangeException` for the input longer or shorter
    than `HashDigest<T>.Size` on .NET Standard 2.0.  [[#1706], [#1815]]
 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had returned the wrong digest on .NET Standard 2.0.  [[#1706], [#1815]]


Version 0.27.6
--------------

Released on February 18, 2022.

 -  (Libplanet.Net) Fixed a bug where `Swarm<T>.PreloadAsync()`
    had not thrown `OperationCanceledException` even cancellation
    was requested.  [[#1547], [#1796]]
 -  Fixed `ThreadStateException` thrown by `NonblockRenderer<T>` and
    `NonblockActionRenderer<T>` classes.  [[#1772], [#1810]]


Version 0.27.5
--------------

Released on February 16, 2022.

 -  Upgraded *Planetarium.RocksDbSharp* from 6.2.4-planetarium to
    [6.2.6-planetarium][Planetarium.RocksDbSharp 6.2.6-planetarium].
    [[#1791], [#1803]]
 -  (Libplanet.Net) Additional logs tagged `Metric` to monitor `ITransport`
    behavior.  [[#1802]]


Version 0.27.4
--------------

Released on February 16, 2022.

 -  Fixed *@planetarium/cli* npm package's bug where installation had not
    worked since 0.27.0.  [[#1790], [#1799]]
 -  (Libplanet.Net) Return the fixed races between `Swarm<T>`'s dual systems
    for block synchronization (polling and event-driven in parallel)
    on updating chain by serializing the post-download process
    which is common for both synchronization mechanisms.  [[#1731], [#1798]]


[#1790]: https://github.com/planetarium/libplanet/issues/1790
[#1798]: https://github.com/planetarium/libplanet/pull/1798
[#1799]: https://github.com/planetarium/libplanet/pull/1799


Version 0.27.3
--------------

Released on February 11, 2022.

 -  (Libplanet.Net) `Swarm<T>.CompleteBlockSync()` changed back,
    reverting the behavior implemented in [#1759]
    to fixed races between `Swarm<T>`'s dual systems for block
    synchronization (polling and event-driven in parallel)
    on updating chain  [[#1797]]

[#1797]: https://github.com/planetarium/libplanet/pull/1797


Version 0.27.2
--------------

Released on February 8, 2022.

 -  (Libplanet.Net) Sending a `Message` through `NetMQTransport` now fails
    immediately if the `Message` cannot be queued to a `DealerSocket`
    right away.  [[#1753], [#1778]]

[#1753]: https://github.com/planetarium/libplanet/issues/1753
[#1778]: https://github.com/planetarium/libplanet/pull/1778


Version 0.27.1
--------------

Released on February 7, 2022.

 -  (Libplanet.Net) `Swarm<T>.PreloadAsync()` method became to catch up recent
    blocks until the local tip is close enough to the topmost tip among peers.
    [[#1775], [#1777]]

[#1777]: https://github.com/planetarium/libplanet/pull/1777


Version 0.27.0
--------------

Released on January 26, 2022.

### Deprecated APIs

 -  Added `EnumerableMeasurement` static class.  [[#1764], [#1766]]

### Backward-incompatible API changes

 -  Moved everything in `Libplanet.Net` namespace from *Libplanet* assembly
    to *Libplanet.Net* assembly.  [[#1421], [#1760]]
 -  (Libplanet.Net) Parameters of `NetMQTransport()` constructor has modified.
    [[#1741], [#1744]]
     -  Removed `RoutingTable table` and `int minimumBroadcastTarget`
        parameters.
     -  Added `TimeSpan? dealerSocketLifetime` parameter.
 -  (Libplanet.Net) Removed `RoutingTable table` and
    `int minimumBroadcastTarget` parameters from `TcpTransport()` constructor.
    [[#1741], [#1744]]
 -  (Libplanet.Net) Removed `ITransport.BroadcastMessage(Address?, Message)`
    method.  Instead, added
    `ITransport.BroadcastMessage(IEnumerable<BoundPeer>, Message)` method.
    [[#1741], [#1744]]

### Added APIs

 -  Added `TrieStateStore.CopyStates()` method.  [[#1653], [#1691]]
 -  Added `NullBlockPolicy<T>` class.  [[#1531], [#1748]]
 -  (Libplanet.Net) Added classes which implements `Message` abstract class.
    [[#1754], [#1756]]
     -  Added `Ping` class.
     -  Added `Pong` class.
     -  Added `FindNeighbors` class.
     -  Added `Neighbors` class.
     -  Added `DifferentVersion` class.

### Behavioral changes

 -  `MerkleTrie.Get()` method now finds multiple states in parallel.  [[#1743]]
 -  (Libplanet.Net) `DealerSocket`s used for broadcasting messages in
    `NetMQTransport` became not to be disposed right after corresponding peer
    is removed from the routing table.  Instead, it will be removed after
    a certain amount of time.  [[#1741], [#1744]]
 -  (Libplanet.Net) `NetMQTransport` no longer attempts to retry failed
    communications.  [[#1751], [#1752]]
 -  (Libplanet.Net) Fixed races between `Swarm<T>`'s dual systems for block
    synchronization (polling and event-driven in parallel) on updating chain by
    serializing the post-download process which is common for both
    synchronization mechanisms.  [[#1731], [#1759]]
 -  New log output tagged with `Metric` added to measure evaluation time for
    individual `Transaction<T>`s.  [[#1755], [#1758]]

### Dependencies

 -  *Libplanet.Net* assembly is now distributed as a seaprate NuGet package:
    *[Libplanet.Net]*.  [[#1421], [#1760]]

### CLI tools

 -  Upgrade *node-fetch* for *@planetarium/cli* npm package.
    [[CVE-2022-0235], [#1747]]

[#1421]: https://github.com/planetarium/libplanet/issues/1421
[#1531]: https://github.com/planetarium/libplanet/issues/1531
[#1691]: https://github.com/planetarium/libplanet/pull/1691
[#1731]: https://github.com/planetarium/libplanet/issues/1731
[#1741]: https://github.com/planetarium/libplanet/issues/1741
[#1743]: https://github.com/planetarium/libplanet/pull/1743
[#1744]: https://github.com/planetarium/libplanet/pull/1744
[#1747]: https://github.com/planetarium/libplanet/pull/1747
[#1748]: https://github.com/planetarium/libplanet/pull/1748
[#1751]: https://github.com/planetarium/libplanet/issues/1751
[#1752]: https://github.com/planetarium/libplanet/pull/1752
[#1754]: https://github.com/planetarium/libplanet/issues/1754
[#1755]: https://github.com/planetarium/libplanet/issues/1755
[#1756]: https://github.com/planetarium/libplanet/pull/1756
[#1758]: https://github.com/planetarium/libplanet/pull/1758
[#1759]: https://github.com/planetarium/libplanet/pull/1759
[#1760]: https://github.com/planetarium/libplanet/pull/1760
[#1766]: https://github.com/planetarium/libplanet/pull/1766
[CVE-2022-0235]: https://github.com/advisories/GHSA-r683-j2x4-v87g
[Libplanet.Net]: https://www.nuget.org/packages/Libplanet.Net/


Version 0.26.6
--------------

Released on February 18, 2022.

 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had thrown `IndexOutOfRangeException` for the input longer or shorter
    than `HashDigest<T>.Size` on .NET Standard 2.0.  [[#1706], [#1815]]
 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had returned the wrong digest on .NET Standard 2.0.  [[#1706], [#1815]]


Version 0.26.5
--------------

Released on February 18, 2022.

 -  Fixed a bug where `Swarm<T>.PreloadAsync()`
    had not thrown `OperationCanceledException` even cancellation
    was requested.  [[#1547], [#1796]]
 -  Fixed `ThreadStateException` thrown by `NonblockRenderer<T>` and
    `NonblockActionRenderer<T>` classes.  [[#1772], [#1810]]

[#1547]: https://github.com/planetarium/libplanet/issues/1547
[#1772]: https://github.com/planetarium/libplanet/issues/1772
[#1796]: https://github.com/planetarium/libplanet/pull/1796
[#1810]: https://github.com/planetarium/libplanet/pull/1810


Version 0.26.4
--------------

Released on February 16, 2022.

 -  Upgraded *Planetarium.RocksDbSharp* from 6.2.4-planetarium to
    [6.2.6-planetarium][Planetarium.RocksDbSharp 6.2.6-planetarium].
    [[#1791], [#1803]]
 -  Additional logs tagged `Metric` to monitor `ITransport` behavior.  [[#1802]]

[#1791]: https://github.com/planetarium/libplanet/pull/1791
[#1802]: https://github.com/planetarium/libplanet/pull/1802
[#1803]: https://github.com/planetarium/libplanet/pull/1803
[Planetarium.RocksDbSharp 6.2.6-planetarium]: https://www.nuget.org/packages/Planetarium.RocksDbSharp/6.2.6-planetarium


Version 0.26.3
--------------

Released on February 7, 2022.

 -  `Swarm<T>.PreloadAsync()` method became to catch up recent blocks
    until the local tip is close enough to the topmost tip among peers.
    [[#1775]]

[#1775]: https://github.com/planetarium/libplanet/pull/1775


Version 0.26.2
--------------

Released on January 26, 2022.

 -  Fixed a bug where `ActionEvaluator<T>`'s logs had been ignored due to
    its initialization timings.  [[#1764]]
 -  The elapsed time taking for ordering `Transaction<T>`s before evaluating
    them are now measured and logged.  [[#1764]]
 -  The time started and finished to calculate state root hashes are now
    logged.  [[#1764]]

[#1764]: https://github.com/planetarium/libplanet/pull/1764


Version 0.26.1
--------------

Released on January 20, 2022.

 -  General logging overhaul in `NetMQTransport<T>` for consistency and
    readability.  [[#1735]]

[#1735]: https://github.com/planetarium/libplanet/pull/1735


Version 0.26.0
--------------

Released on January 18, 2022.

### Backward-incompatible API changes

 -  Replaced `IValue StateCompleter<T>(BlockChain<T>, BlockHash, Address)`
    delegate with `IReadOnlyList<IValue?> StateCompleter<T>(BlockChain<T>,
    BlockHash, IReadOnlyList<Address>)` delegate.  [[#1703]]
 -  Added `IAccountStateDelta.GetStates(IReadOnlyList<Address>)` method.
    [[#1703]]
 -  Replaced `IValue AccountStateGetter(Address)` delegate with
    `IReadOnlyList<IValue?> AccountStateGetter(IReadOnlyList<Address>)`
    delegate.  [[#1703]]
 -  Removed `StateGetter<T>` delegate.  [[#1703]]
 -  Removed `BalanceGetter<T>` delegate.  [[#1703]]
 -  Removed `StateGetter<T> stateGetter` and `BalanceGetter<T> balanceGetter`
    parameters from `ActionEvaluator<T>()` constructor.  [[#1703]]
 -  Added `IBlockChainStates<T> blockChainStates` parameter to
    `ActionEvaluator<T>()` constructor.  [[#1703]]
 -  Replaced `ITrie.TryGet()` with `ITrie.Get()` method.  [[#1703]]
 -  Replaced `StateStoreExtensions.GetState()` static method with `GetStates()`
    static method.  [[#1703]]
 -  `nullable` context enabled for `IProtocol` interface and `Kademlia`,
    `KademliaProtocol`, and `RoutingTable` classes.  [[#1692]]
 -  `RoutingTable.Neighbors(Peer, int, bool)` changed to
    `RoutingTable.Neighbors(BoundPeer, int, bool)`.  As a result,
    `RoutingTable` class now only explicitly deals with `BoundPeer`s.
    [[#1692]]
 -  `BlockChain<T>.StageTransaction()`, `IStagePolicy.Stage()`,
    and `IStagePolicy.Unstage()` now all return `bool` to indicate whether
    staging was successful or not.  [[#1710]]

### Added APIs

 -  Added `BlockChain<T>.GetStates()` method.  [[#1703]]
 -  Added `IBlockChainStates<T>` interface.  [[#1703]]
     -  `BlockChain<T>` now implements `IBlockChainStates<T>`.
 -  Added `StateStoreExtensions.GetStates()` static method.  [[#1703]]

### Behavioral changes

 -  Improved performance of `Swarm<T>.FillBlocksAsync()`'s block sync.
    [[#1663], [#1699]]
     -  The way `Swarm<T>` synchronizes the attached `BlockChain<T>`
        with peers became more performant by splitting downloading
        and appending blocks
        into two parallel tasks.

### Bug fixes

 -  Fixed a bug where unnecessary additional attempts were made to
    unresponsive `Peer`s when discovering a `Peer` through `KademliaProtocol`.
    [[#1692]]

[#1663]: https://github.com/planetarium/libplanet/issues/1663
[#1692]: https://github.com/planetarium/libplanet/pull/1692
[#1699]: https://github.com/planetarium/libplanet/pull/1699
[#1703]: https://github.com/planetarium/libplanet/pull/1703
[#1710]: https://github.com/planetarium/libplanet/pull/1710


Version 0.25.5
--------------

Released on February 18, 2022.

 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had thrown `IndexOutOfRangeException` for the input longer or shorter
    than `HashDigest<T>.Size` on .NET Standard 2.0.  [[#1706], [#1815]]
 -  Fixed `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` method's bug where
    it had returned the wrong digest on .NET Standard 2.0.  [[#1706], [#1815]]

[#1706]: https://github.com/planetarium/libplanet/issues/1706
[#1815]: https://github.com/planetarium/libplanet/pull/1815


Version 0.25.4
--------------

Released on January 18, 2022.

 -  Some additional logging to track down issues with staging `Transaction<T>`s.
    [[#1718]]
 -  (Libplanet.RocksDBStore) Fixed `RocksDBStore`'s inaccurate lock handling.
    [[#1719]]

[#1718]: https://github.com/planetarium/libplanet/pull/1718
[#1719]: https://github.com/planetarium/libplanet/pull/1719


Version 0.25.3
--------------

Released on January 14, 2022.

 -  Fixed a bug when message broadcasting on `Swarm<T>`
    had been stopped suddenly.  [[#1715]]

[#1715]: https://github.com/planetarium/libplanet/pull/1715


Version 0.25.2
--------------

Released on January 11, 2022.

 -  Fixed a bug where `TxCompletion<TPeer, TAction>` failed to fetch
    transactions from other peers.  [[#1704]]
 -  In `TxCompletion<TPeer, TAction>`, instead of maintaining single
    `RequestTxsFromPeerAsync()` task for each peer, a new
    `RequestTxsFromPeerAsync()` task is spawned every time a new
    demand is received.  [[#1704]]

[#1704]: https://github.com/planetarium/libplanet/pull/1704


Version 0.25.1
--------------

Released on January 6, 2022.

### Behavioral changes

 -  `Swarm<T>` changed back, reverting the behavior implemented in [#1606]
    to append blocks to the canonical chain instead of using a forked chain
    while syncing recent blocks.  [[#1693]]

[#1693]: https://github.com/planetarium/libplanet/pull/1693


Version 0.25.0
--------------

Released on January 5, 2022.

### Backward-incompatible API changes

 -  Replaced `HashDigest<T>(ImmutableArray<byte>)` constructor with
    `HashDigest<T>(in ImmutableArray<byte>)` constructor.  [[#1678]]
 -  `IKeyValueStore`'s key type became `KeyBytes` (was `byte[]`).  [[#1678]]
     -  Replaced `IKeyValueStore.Get(byte[])` method with `Get(in KeyBytes)`
        method.
     -  Replaced `IKeyValueStore.Set(byte[], byte[])` method with
        `Set(in KeyBytes, byte[])` method.
     -  Replaced `IKeyValueStore.Set(IDictionary<byte[], byte[]>)` method with
        `Set(IDictionary<KeyBytes, byte[]>)` method.
     -  Replaced `IKeyValueStore.Delete(byte[])` method with
        `Delete(in KeyBytes)` method.
     -  Replaced `IKeyValueStore.Exists(byte[])` method with
        `Exists(in KeyBytes)` method.
     -  `IKeyValueStore.ListKeys()` method's return type became
        `IEnumerable<KeyBytes>` (was `IEnumerable<byte[]>`).
 -  `ITrie`'s key type became `KeyBytes` (was `byte[]`).  [[#1689]]
     -  Replaced `ITrie.Set(byte[], IValue)` method with
        `Set(in KeyBytes, IValue)` method.
     -  Replaced `ITrie.TryGet(byte[], out IValue?)` method with
        `TryGet(in KeyBytes, out IValue?)` method.
     -  The return type of `MerkleTrieExtensions.ListAllStates()` static method
        became `IEnumerable<KeyValuePair<KeyBytes, IValue>>` (was
        `IEnumerable<KeyValuePair<ImmutableArray<byte>, IValue>>`).  [[#1653]]
 -  Added `IKeyValueStore.Get(IEnumerable<KeyBytes>)` method.  [[#1678]]
 -  Added `IKeyValueStore.Delete(IEnumerable<KeyBytes>)` method.  [[#1678]]
 -  `nullable` context enabled for `Peer` and `BoundPeer` classes.  All public
    constructors now explicitly take non-nullable parameters.  [[#1679]]
     -  All publicly accessibe properties of `Peer` and `BoundPeer` are
        now non-nullable except for `Peer.PublicIPAddress`.
 -  Replaced `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` overloaded static
    method with other new overloads.  [[#1680]]

### Backward-incompatible network protocol changes

 -  Removed `Sender` property from `Messages.TxIds` and `Messages.TxIds`'s
    `MessageType` value bumped to `0x31`.  [[#1681]]

### Added APIs

 -  Added `KeyBytes` readonly struct.  [[#1678]]
 -  Added `HashDigest<T>(in ImmutableArray<byte>)` constructor.  [[#1678]]
 -  Added `HashDigest<T>.DeriveFrom(byte[])` overloaded static method.
    [[#1680]]
 -  Added `HashDigest<T>.DeriveFrom(ImmutableArray<byte>)` overloaded static
    method.  [[#1680]]
 -  Added `HashDigest<T>.DeriveFrom(ReadOnlySpan<byte>)` overloaded static
    method.  [[#1680]]
 -  Added `StateStoreExtensions.EncodeKey()` static method.  [[#1689]]
 -  Added `StateStoreExtensions.DecodeKey()` static method.  [[#1689]]

### Behavioral changes

  -  Improved performance of `Swarm<T>`'s block propagation.  [[#1676]]
  -  (Libplanet.RocksDBStore) Improved performance of
     `RocksDBStore<T>.IterateIndexes()` method.  [[#1676]]

[#1676]: https://github.com/planetarium/libplanet/pull/1676
[#1678]: https://github.com/planetarium/libplanet/pull/1678
[#1679]: https://github.com/planetarium/libplanet/pull/1679
[#1680]: https://github.com/planetarium/libplanet/pull/1680
[#1681]: https://github.com/planetarium/libplanet/pull/1681
[#1689]: https://github.com/planetarium/libplanet/pull/1689


Version 0.24.2
--------------

Released on December 24, 2021.

 -  Fixed a bug of `NonblockRenderer<T>` and `NonblockActionRenderer<T>` where
    they had thrown `ThreadStateException` when any render events occured after
    disposed.  [[#1682]]
 -  Log output compacted by removing duplicate exception messages.
    [[#1632], [#1677]]

[#1632]: https://github.com/planetarium/libplanet/issues/1632
[#1677]: https://github.com/planetarium/libplanet/pull/1677


Version 0.24.1
--------------

Released on December 16, 2021.

 -  Fixed a bug where `Transaction<T>`s were unstaged when they were not
    supposed to.  [[#1672]]

[#1672]: https://github.com/planetarium/libplanet/pull/1672


Version 0.24.0
--------------

Released on December 16, 2021.

### Backward-incompatible API changes

 -  `IStagePolicy<T>`'s `interface` methods updated.  Notably,
    all `IStagePolicy<T>` now accept `BlockChain<T>` as its parameter.
    [[#1648]]
     -  `Get(BlockChain<T> blockChain, TxId id, bool includeInstaged)` changed
        to `Get(BlockChain<T> blockChain, TxId id, bool filtered = true)`.
     -  `Iterate()` changed to
        `Iterate(BlockChain<T> blockChain, bool filtered = true)`.
     -  `GetNextTxNonce(Address address, long minedTxs)` changed to
        `GetNextTxNonce(BlockChain<T> blockChain, Address address)`.

### Behavioral changes

 -  Description of `IStagePolicy<T>` and its default implementation
    `VolatileStagePolicy<T>` is overhauled.  [[#1648]]
     -  `IStagePolicy<T>.Iterate()` no longer guarantees any kind of ordering.
     -  `IStagePolicy<T>.Ignore()` now also unstages the `Transaction<T>`.
     -  `VolatileStagePolicy<T>` now holds every previously known unconfirmed
        `Transaction<T>` regardless of its staging/unstaging history unless
        it is expired or ignored.
 -  New log output tagged with `Metric` added to measure execution time for
    `BlockChain<T>.FindNextHashes()`.  [[#1669]]

### Bug fixes

 -  Fixed a bug where `TxCompletion` had broadcasted invalid transactions.
    [[#1661]]

[#1648]: https://github.com/planetarium/libplanet/pull/1648
[#1661]: https://github.com/planetarium/libplanet/pull/1661
[#1669]: https://github.com/planetarium/libplanet/pull/1669


Version 0.23.4
--------------

Released on December 24, 2021.

 -  Fixed a bug of `NonblockRenderer<T>` and `NonblockActionRenderer<T>` where
    they had thrown `ThreadStateException` when any render events occured after
    disposed.  [[#1682]]

[#1682]: https://github.com/planetarium/libplanet/pull/1682


Version 0.23.3
--------------

Released on December 13, 2021.

 -  Virtually disabled state fragmentation due to its critical negative impact
    on action evaluation performance.  This will be enabled again after more
    practical tests in the future releases.  [[#1665]]

[#1665]: https://github.com/planetarium/libplanet/pull/1665


Version 0.23.2
--------------

Released on December 13, 2021.

 -  Removed unnecessary a reader lock on `BlockChain<T>.GetState()` method to
    improve parallelism.  [[#1657]]
 -  Improved performance of `Swarm<T>`'s block synchronization.  [[#1657]]
 -  Fixed a bug where `Swarm<T>` had swapped to improper chain.  [[#1657]]
 -  (Libplanet.RocksDBStore) Fixed a bug where `RocksDBStore.ForkBlockIndexes()`
    had created temporary chains unnecessarily.  [[#1657]]

[#1657]: https://github.com/planetarium/libplanet/pull/1657


Version 0.23.1
--------------

Released on December 10, 2021.

 -  Fixed `TrieStateStore.PruneStates()` method's bug that it had thrown
    `ArgumentOutOfRangeException`.  [[#1653], [#1654]]

[#1653]: https://github.com/planetarium/libplanet/issues/1653
[#1654]: https://github.com/planetarium/libplanet/pull/1654


Version 0.23.0
--------------

Released on December 8, 2021.

From this version Libplanrt can be built on arm64 machines including
Apple Silicon (aarch64-apple-darwin).

### Added APIs

 -  Added `PreEvaluationBlock<T>.DetermineStateRootHash(BlockChain<T>,
    StateCompleterSet<T>, out IImmutableDictionary<string, IValue>)` overloaded
    method.  [[#1636]]
 -  Added `PreEvaluationBlock<T>.DetermineStateRootHash(IAction?, IStateStore,
    out IImmutableDictionary<string, IValue>)` overloaded method.  [[#1636]]
 -  Parameter `except` for `KBucket.GetRandomPeer()` now defaults to `null`.
    [[#1631]]
 -  Added `ArrayEqualityComparer<T>` class.  [[#1636]]

### Behavioral changes

 -  States became to take up much less space than before by reducing unnecessary
    duplicate data.  Although this guarantees the backward compatibility with
    the existing state store, in order to take complete effect of this
    optimization, please replay your existing blockchain from the genesis block
    with the empty store.  [[#1636]]
 -  (Libplanet.Analyzers) Rule LAA1002 no more warns about enumerating sorted
    sets/dictionaries:
     -  `System.Collections.Generic.SortedDictionary<TKey, TValue>`
     -  `System.Collections.Generic.SortedSet<T>`
     -  `System.Collections.Immutable.ImmutableSortedDictionary<TKey, TValue>`
     -  `System.Collections.Immutable.ImmutableSortedSet<T>`
     -  `Bencodex.Types.Dictionary` (which became to guarantee enumeration order
        since [Bencodex 0.4.0])

### Bug fixes

 -  `KBucket.Head` and `KBucket.Tail` now properly return `null` if
    the bucket is empty instead of faulting.  [[#1631]]
 -  `TxCompletion.Demand()` no longer requests `Transaction<T>`s already in
    storage.  [[#1649]]

### Dependencies

 -  Upgraded *Bencodex* from 0.4.0-dev.20211123080042+d7f6c810 to
    [0.4.0][Bencodex 0.4.0].  [[#1636]]
 -  Upgraded *Planetarium.RocksDbSharp* from 6.2.3 to
    [6.2.4-planetarium][Planetarium.RocksDbSharp 6.2.4-planetarium].
    [[#1635]]

[#1631]: https://github.com/planetarium/libplanet/pull/1631
[#1635]: https://github.com/planetarium/libplanet/pull/1635
[#1636]: https://github.com/planetarium/libplanet/pull/1636
[#1649]: https://github.com/planetarium/libplanet/pull/1649
[Bencodex 0.4.0]: https://www.nuget.org/packages/Bencodex/0.4.0
[Planetarium.RocksDbSharp 6.2.4-planetarium]: https://www.nuget.org/packages/Planetarium.RocksDbSharp/6.2.4-planetarium


Version 0.22.1
--------------

Released on December 5, 2021.

 -  Compacted log output for convenience.  [[#1633]]
 -  Removed `ITransport.MessageHistory` property due to memory leak.  [[#1639]]

[#1633]: https://github.com/planetarium/libplanet/pull/1633
[#1639]: https://github.com/planetarium/libplanet/pull/1639


Version 0.22.0
--------------

Released on November 30, 2021.

### Backward-incompatible API changes

 -  Removed `Transaction<T>.BytesLength` property.  [[#1609]]
 -  Removed `Block<T>.BytesLength` property.  [[#1609]]
 -  The types of `BlockChain<T>.MineBlock()` overloaded methods' `maxBlockBytes`
    parameters became `long?` (were `int?`).  [[#1609]]
 -  The type of `IBlockPolicy<T>.GetMaxBlockBytes(long)` method became `long`
    (was `int`).  [[#1609]]
 -  The type of `BlockPolicy<T>()` constructor's `getMaxBlockBytes` parameter
    became `Func<long, long>?` (was `Func<long, int>?`).  [[#1609]]
 -  The type of `InvalidBlockBytesLengthException()` constructor's `bytesLength`
    parameter became `long` (was `int`).  [[#1609]]
 -  The type of `InvalidBlockBytesLengthException.BytesLength` property became
    `long` (was `int`).  [[#1609]]
 -  Methods `IsEmpty()` and `IsFull()` of `KBucket` changed to properties
    `IsEmpty` and `IsFull` respectively.  [[#1610]]
 -  `MessageCodec` class renamed to `TcpMessageCodec`.  [[#1610]]
 -  `lifetime` parameter removed from `IMessageCodec.Decode()`.
    `messageLifespan` parameter added to constructors of `NetMQMessageCodec`
    and `TcpMessageCodec`.  [[#1610]]
 -  Removed unused `PeerStates` property from `Swarm<T>`.  [[#1610]]
 -  Method name `BoundPeer.QueryAppProtocolVersion()` changed to
    `BoundPeer.QueryAppProtocolVersionNetMQ()`.  [[#1610]]

### Behavioral changes

 -  `Swarm<T>` became to append blocks to forked chain to avoid locking
    the canonical chain while syncing recent blocks.  [[#1606]]
 -  More streamlined structured logging together with additional logs
    tagged as `Metric`.  [[#1627]]

### Bug fixes

 -  `InvalidMagicCookieException` and `InvalidTimestampException` can now
    be serialized and deserialized.  [[#1613]]
 -  Fixed a bug where `PolymorphicAction<T>` had thrown `InvalidCastException`
    when inner action's `.PlainValue` returns other value than
    `Bencodex.Types.Dictionary`.  [[#1628]]

### Dependencies

 -  *Libplanet.Stun* assembly is now distributed as a seaprate NuGet package:
    [*Libplanet.Stun*][Libplanet.Stun].  [[#813], [#1279], [#1625]]
 -  Upgraded *Bencodex* from 0.3.0 to
    [0.4.0-dev.20211123080042+d7f6c810][Bencodex 0.4.0-dev.20211123080042].
    [[#1609]]
 -  Now depends on [*Caching.dll* 1.4.0.1][Caching.dll 1.4.0.1].

[#813]: https://github.com/planetarium/libplanet/issues/813
[#1279]: https://github.com/planetarium/libplanet/pull/1279
[#1606]: https://github.com/planetarium/libplanet/pull/1606
[#1609]: https://github.com/planetarium/libplanet/pull/1609
[#1610]: https://github.com/planetarium/libplanet/pull/1610
[#1613]: https://github.com/planetarium/libplanet/pull/1613
[#1625]: https://github.com/planetarium/libplanet/pull/1625
[#1627]: https://github.com/planetarium/libplanet/pull/1627
[#1628]: https://github.com/planetarium/libplanet/pull/1628
[Libplanet.Stun]: https://www.nuget.org/packages/Libplanet.Stun/
[Bencodex 0.4.0-dev.20211123080042]: https://www.nuget.org/packages/Bencodex/0.4.0-dev.20211123080042
[Caching.dll 1.4.0.1]: https://www.nuget.org/packages/Caching.dll/1.4.0.1


Version 0.21.2
--------------

Released on November 25, 2021.

-  `planet apv query` command became to communicate with `NetMQTransport`
   instead of `TcpTransport`.   [[#1618]]

[#1618]: https://github.com/planetarium/libplanet/pull/1618


Version 0.21.1
--------------

Released on November 25, 2021.

 -  `SwarmOptions.TipLifespan` property' default value was changed.
    The default lifespan for a tip going stale is now `60` seconds instead of
    `30` seconds for the purpose of polling blocks.  [[#1614]]
 -  `Swarm<T>`'s internal logic for determining when the `BlockChain<T>.Tip`
    becomes stale is now fixed.  [[#1614]]

[#1614]: https://github.com/planetarium/libplanet/pull/1614


Version 0.21.0
--------------

Released on November 16, 2021.

### Backward-incompatible API changes

 -  (Libplanet.RocksDBStore) Removed `MonoRocksDBStore` class.
    [[#1513], [#1579]]
 -  Removed `rehearsal` parameter from `ITrie.Commit()` method.
    [[#1554], [#1570]]
 -  Removed `rehearsal` parameter from `StateStoreExtensions.Commit()`
    extension method.  [[#1554], [#1570]]
 -  Removed `ITransport.RunAsync()` method.
    `ITransport.StartAsync()` now conducts operation that
    `ITransport.RunAsync()` used to conduct.  [[#1523]]
 -  Removed `ITransport.ReplyMessage()` method which was non-blocking.
    Instead, added `ITransport.ReplyMessageAsync()` asynchronous method
    which is awaited until the reply message is sent.  [[#1523]]
 -  The type of `ITransport.ProcessMessageHandler` became
    `AsyncDelegate<T>` (which was `EventHandler`).  [[#1523]]
 -  Removed unused `BlockChain<T>` type parameter from
    `IStagePolicy<T>.Iterate()` method.  [[#1553], [#1556]]
 -  Removed unsued `HashAlgorithmTable` class.  [[#1600]]
 -  `BlockChain<T>.MineBlock()` and `BlockChain<T>.GatherTransactionsToMine()`
    now additionally accepts `maxBlockBytes` parameter of type `int`.  [[#1600]]
 -  Removed `BlockInsufficientTxsException` and
    `BlockExceedingTransactionsException` classes.  [[#1504], [#1600]]

### Added APIs

 -  Added `ITransport.MessageHistory` property.  [[#1523]]
 -  Added `ITransport.WaitForRunning()` method.  [[#1523]]
 -  Added `TcpTransport` class which implements `ITransport` interface.
    [[#1523]]
 -  Added `SwarmOptions.Type` property.  [[#1523]]
 -  Added `SwarmOptions.TransportType` enum.  [[#1523]]
 -  Added `AsyncDelegate<T>` class.  [[#1523]]
 -  Added `InvalidMagicCookieException` class.  [[#1523]]
 -  Added `MessageCodec` class which inherits `IMessageCodec<T>`.
    [[#1523]]
 -  Added `IStagePolicy<T>.GetNextTxNonce()` method.  [[#1553], [#1556]]
 -  Added `InvalidBlockBytesLengthException`, `InvalidBlockTxCountException`,
    `InvalidBlockHashAlgorithmTypeException`, and
    `InvalidBlockTxCountPerSignerException` classes.  [[#1504], [#1600]]

### Behavioral changes

 -  Improved performance of `MerkleTrie.Commit()` and
    `BlockChain<T>.ExecuteActions()` methods.   [[#1554], [#1570]]
 -  `Swarm<T>.MineBlock()` now throws `OperationCanceledException` instead
    of `BlockInsufficientTxsException` when there are no sufficient number
    of blocks to mine.  [[#1600]]
 -  Default implementation `BlockPolicy<T>.ValidateNextBlock()`
    of `IBlockPolicy<T>` now validates the type for `Block<T>.HashAlgorithm`,
    size for `Block<T>.BytesLength`, and count for `Block<T>.Transactions`.
    [[#1504], [#1600]]

### CLI tools

 -  `planet stats` command's `-p`/`--path` option no more supports the store
    type `monorocksdb`.  [[#1513], [#1579]]
 -  Subcommands under `planet store` no more supports the store type
    `monorocksdb`.  [[#1513], [#1579]]

[#1504]: https://github.com/planetarium/libplanet/issues/1504
[#1554]: https://github.com/planetarium/libplanet/issues/1554
[#1570]: https://github.com/planetarium/libplanet/pull/1570
[#1579]: https://github.com/planetarium/libplanet/pull/1579
[#1523]: https://github.com/planetarium/libplanet/pull/1523
[#1600]: https://github.com/planetarium/libplanet/pull/1600


Version 0.20.2
--------------

Released on November 9, 2021.

 -  (Libplnaet.RocksDBStore) Fixed `DefaultStore.ForkBlockIndexes()` method's
    bug that it had been thrown `ChainIdNotFoundException` when received a
    chain forked from already deleted.  [[#1591], [#1592]]
 -  Fixed improper implementations of `BlockExceedingTransactionsException`
    `InvalidBlockBytesLengthException` in regards to serialization and
    related tests.  [[#1594]]

[#1591]: https://github.com/planetarium/libplanet/issues/1591
[#1592]: https://github.com/planetarium/libplanet/pull/1592
[#1594]: https://github.com/planetarium/libplanet/pull/1594


Version 0.20.1
--------------

Released on November 8, 2021.

 -  `Swarm<T>` became to broadcast a new block to peers immediately after
    `Swarm<T>.BlockChain`'s `Tip` changes while it is `Running`.
    [[#1582], [#1586]]

[#1586]: https://github.com/planetarium/libplanet/pull/1586


Version 0.20.0
--------------

Released on November 3, 2021.

### Deprecated APIs

 -  (Libplanet.RocksDBStore) `MonoRocksDBStore` will be gone in the next minor
    release: 0.21.0.  [[#1513], [#1574]]

### Backward-incompatible API changes

 -  Removed unused `BlockChain<T>` type parameter from
    `IStagePolicy<T>.Iterate()` method.  [[#1553], [#1556]]

### Added APIs

 -  Added `IStagePolicy<T>.GetNextTxNonce()` method.  [[#1553], [#1556]]

[#1513]: https://github.com/planetarium/libplanet/issues/1513
[#1553]: https://github.com/planetarium/libplanet/issues/1553
[#1556]: https://github.com/planetarium/libplanet/pull/1556
[#1574]: https://github.com/planetarium/libplanet/pull/1574


Version 0.19.3
--------------

Released on November 8, 2021.

 -  `Swarm<T>` became to broadcast a new block to peers immediately after
    `Swarm<T>.BlockChain`'s `Tip` changes while it is `Running`.  [[#1582]]

[#1582]: https://github.com/planetarium/libplanet/pull/1582


Version 0.19.2
--------------

Released on November 3, 2021.

 -  `PrivateKey(IReadOnlyList<byte>)` overloaded constructor no more accepts
    a list shorter or longer than 32 bytes.  [[#1571], [#1572]]
 -  `PrivateKey.FromString()` method no more accept a hexadecimal digits
    shorter or longer than 64 characters.  [[#1571], [#1572]]
 -  Fixed a bug where `HashAlgorithmType.Digest(byte[])` and
    `HashAlgorithmType.Digest(ImmutableArray<byte>)` methods had returned
    a wrong hash digest after `HashAlgorithmType.Digest(IEnumerable<byte[]>)`
    or `HashAlgorithmType.Digest(IEnumerable<ImmutableArray<byte>>)` methods
    had been once called.  [[#1575], [#1576]]

[#1572]: https://github.com/planetarium/libplanet/pull/1572
[#1576]: https://github.com/planetarium/libplanet/pull/1576


Version 0.19.1
--------------

Released on October 29, 2021.

 -  `BlockMetadata.MineNonce()` method and other mining methods based on it
    now do not spawn a new thread if the `workers` is less than 2.  [[#1564]]
 -  `BlockMetadata.MineNonce()` method and other mining methods based on it
    now uses the half of the present logical processors (i.e.,
    `Environment.ProcessorCount / 2`) by default.  If there is only one logical
    processor, uses one worker.  [[#1564]]
 -  Rolled back the order of the header of a `Message` so that it is compatible
    with nodes based on Libplanet pre-0.19.0.  [[#1565]]

[#1565]: https://github.com/planetarium/libplanet/pull/1565
[#1564]: https://github.com/planetarium/libplanet/pull/1564


Version 0.19.0
--------------

Released on October 27, 2021.

### Backward-incompatible API changes

 -  Removed `IStore.StageTransactionIds()` method.  [[#1166], [#1535]]
 -  Removed `IStore.UnstageTransactionIds()` method.  [[#1166], [#1535]]
 -  Removed `IStore.IterateStagedTransactionIds()` method.  [[#1166], [#1535]]
 -  Removed `Message.ToNetMQMessage()` method.
    Use `IMessageCodec<T>.Encode()` method instead.  [[#1503]]
 -  Removed `Message.Parse()` static method.
    Use `IMessageCodec<T>.Decode()` method instead.  [[#1503]]
 -  Removed unused `HashAlgorithmGetter` type parameter from
    `ActionEvaluator<T>()` constructor.  [[#1537]]
 -  `Hashcash.Answer()` method became to take random `seed` value explicitly.
    [[#1546]]

### Backward-incompatible network protocol changes

 -  The order of the header of a `Message` has been modified.  [[#1503]]

### Added APIs

 -  Added
    `BlockMetadata.MineNonce(HashAlgorithmType, int, CancellationToken)`
    overloaded method.  [[#1546]]
 -  Added `Message.MessageFrame` enum.  [[#1503]]
 -  Added `Message.Type` property.  [[#1503]]
 -  Added `Message.DataFrames` property.  [[#1503]]
 -  Added `IMessageCodec<T>` interface.  [[#1503]]
 -  Added `NetMQMessageCodec` class which inherits `IMessageCodec<T>`.
    [[#1503]]
 -  Added `MemoryStore` class.  [[#1544]]
 -  Added `MemoryKeyValueStore` class.  [[#1544]]
 -  Added `BlockDemandTable.Remove()` method.  [[#1549]]
 -  Added
    `BlockMetadata.MineNonce(HashAlgorithmType, int, CancellationToken)`
    overloaded method.  [[#1546]]
 -  Added `SwarmOptions.TipLifespan` property.  [[#1557]]

### Behavioral changes

 -  `BlockMetadata.MineNonce()` method became to use multithreading when
    looking for the nonce.  [[#1546]]
 -  `IStore.ForkTxNonces()` method became to throw `ChainIdNotFoundException`
    when a given `sourceChainId` does not exist.  [[#1544]]
 -  `Swarm<T>.StartAsync()` method became to poll neighbor peers if they have
    any new blocks whether `Swarm<T>.BlockDemandTable` is empty or not.
    The polling is triggered when `Swarm<T>.BlockChain`'s `Tip` has been
    unchanged for a while.  Expiration time for tips can be configured
    through `SwarmOptions.TipLifespan` property.  [[#1557]]

### Bug fixes

 -  Fixed `DefaultStore.ForkBlockIndexes()` method's bug that it had done
    silently no-op when a given `sourceChainId` had not existed, which had not
    been compliant with `IStore.ForkBlockIndexes()` method's specification.
    [[#1544]]
 -  Fixed `Swarm<T>`'s bug that it had thrown `PingTimeoutException` if any
    peer in configured `SwarmOptions.StaticPeers` is unreachable.
    [[#1550], [#1551]]
 -  (Libplanet.RocksDBStore) Fixed `RocksDBStore.ForkBlockIndexes()` method's
    bug that it had done silently no-op when a given `sourceChainId` had not
    existed, which had not been compliant with `IStore.ForkBlockIndexes()`
    method's specification.  [[#1544]]
 -  (Libplanet.RocksDBStore) Fixed `MonoRocksDBStore.ForkBlockIndexes()`
    method's bug that it had done silently no-op when a given `sourceChainId`
    had not existed, which had not been compliant with
    `IStore.ForkBlockIndexes()` method's specification.  [[#1544]]
 -  Fixed a bug where `Swarm<T>` did not removed failed block demands from the
    `BlockDemandTable`.  [[#1549]]

[#1166]: https://github.com/planetarium/libplanet/issues/1166
[#1503]: https://github.com/planetarium/libplanet/pull/1503
[#1535]: https://github.com/planetarium/libplanet/pull/1535
[#1537]: https://github.com/planetarium/libplanet/pull/1537
[#1544]: https://github.com/planetarium/libplanet/pull/1544
[#1546]: https://github.com/planetarium/libplanet/pull/1546
[#1550]: https://github.com/planetarium/libplanet/issues/1550
[#1549]: https://github.com/planetarium/libplanet/pull/1549
[#1551]: https://github.com/planetarium/libplanet/pull/1551
[#1557]: https://github.com/planetarium/libplanet/pull/1557


Version 0.18.5
--------------

Released on November 3, 2021.

 -  Fixed a bug where `HashAlgorithmType.Digest(byte[])` and
    `HashAlgorithmType.Digest(ImmutableArray<byte>)` methods had returned
    a wrong hash digest after `HashAlgorithmType.Digest(IEnumerable<byte[]>)`
    or `HashAlgorithmType.Digest(IEnumerable<ImmutableArray<byte>>)` methods
    had been once called.  [[#1575]]

[#1575]: https://github.com/planetarium/libplanet/pull/1575


Version 0.18.4
--------------

Released on November 2, 2021.

 -  `PrivateKey(IReadOnlyList<byte>)` overloaded constructor no more accepts
    a list shorter or longer than 32 bytes.  [[#1571]]
 -  `PrivateKey.FromString()` method no more accept a hexadecimal digits
    shorter or longer than 64 characters.  [[#1571]]

[#1571]: https://github.com/planetarium/libplanet/pull/1571


Version 0.18.3
--------------

Released on October 28, 2021.  Mainly backported critical bug fixes from
0.19.0.  [[#1562]]

 -  `Swarm<T>.StartAsync()` method became to poll neighbor peers if they have
    any new blocks whether `Swarm<T>.BlockDemandTable` is empty or not.
    The polling is triggered when `Swarm<T>.BlockChain`'s `Tip` has been
    unchanged for a while.  [[#1557]]
 -  Fixed `Swarm<T>`'s bug that it had thrown `PingTimeoutException` if any
    peer in configured `SwarmOptions.StaticPeers` is unreachable.
    [[#1550], [#1551]]
 -  Fixed a bug where `Swarm<T>` did not removed failed block demands from the
    `BlockDemandTable`.  [[#1549]]

[#1562]: https://github.com/planetarium/libplanet/pull/1562


Version 0.18.2
--------------

Released on October 22, 2021.

 -  Fixed a bug that `Swarm<T>` had not responded to `GetBlocks` requests
    when some of requested blocks fail to be loaded.  It now sends
    a `Blocks` response with successfully loaded blocks for the same
    situation.  [[#1540]]

[#1540]: https://github.com/planetarium/libplanet/pull/1540


Version 0.18.1
--------------

Released on October 21, 2021.

 -  Fixed a bug where `PublicKey.Verify()` method had thrown exceptions
    for some invalid inputs.  [[#1520]]
 -  `BaseStore.GetBlock<T>()` method now throws `InvalidOperationException`
    when it fails to load a requested block's transactions.  [[#1500], [#1532]]
 -  (Libplanet.RocksDBStore) Operations on `RocksDBStore` that update data
    no longer suppress the internal failures.  [[#1500], [#1532]]

[#1500]: https://github.com/planetarium/libplanet/issues/1500
[#1520]: https://github.com/planetarium/libplanet/issues/1520
[#1532]: https://github.com/planetarium/libplanet/pull/1532


Version 0.18.0
--------------

Released on October 13, 2021.

### Backward-incompatible API changes

 -  `Hashcash.Stamp(Nonce)` delegate's return type became `IEnumerable<byte[]>`
    (was `byte[]`).  [[#1492]]
 -  Moved `BlockDigest` struct to `Libplanet.Store` namespace (from
    `Libplanet.Blocks` namespace).  [[#1492]]
 -  Removed `Block<T>.ToBlockDigest()` method.  Use `BlockDigest.FromBlock<T>()`
    static method instead.  [[#1492]]
 -  `ActionEvaluator<T>.Evaluate()` method's `block` parameter became to take
    `IPreEvaluationBlock<T>` (was `IBlock<T>`).  [[#1146], [#1164], [#1492]]
 -  `Block<T>` and `BlockHeader` now guarantees that their every instance has
    integrity.  [[#1164], [#1492]]
     -  `Block<T>` became unable to be subclassed.
     -  Remove `Block<T>(long, long, BigInteger, Nonce, Address, BlockHash?,
        DateTimeOffset, IReadOnlyList<Transaction<T>>, HashAlgorithmType,
        HashDigest<SHA256>, ImmutableArray<byte>?, int)` overloaded constructor.
        Use other overloaded constructors instead.
     -  Added `Block<T>(IBlockHeader header, IEnumerable<Transaction<T>>)`
        overloaded constructor.
     -  Added `Block<T>(PreEvaluationBlock<T>, HashDigest<SHA256>,
        ImmutableArray<byte>?)` overloaded constructor.  [[#1457], [#1507]]
     -  `BlockHeader` is no more readonly struct, but a sealed class.
     -  Removed `BlockHeader(int, long, string, ImmutableArray<byte>,
        ImmutableArray<byte>, long, BigInteger, ImmutableArray<byte>,
        ImmutableArray<byte>, ImmutableArray<byte>, ImmutableArray<byte>,
        ImmutableArray<byte>)` constructor.  Use other overloaded constructors
        instead.
     -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
        ImmutableArray<byte>?)` overloaded constructor.  [[#1457], [#1507]]
     -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
        ImmutableArray<byte>?, BlockHash)` overloaded constructor.
        [[#1457], [#1507]]
 -  `Block<T>` and `BlockHeader` have no more marshaling/unmarshaling methods.
     -  Removed `Block<T>(Bencodex.Types.Dictionary)` overloaded constructor.
        Use `BlockMarshaler.UnmarshalBlock()` static method instead.
     -  Removed `Block<T>.Deserialize()` static method.  Instead, use
        `BlockMarshaler.UnmarshalBlock()` static method and `Bencodex.Codec`
        together.
     -  Removed `Block<T>.ToBencodex()` method.
        Use `BlockMarshaler.MarshalBlock()` static method instead.
     -  Removed `Block<T>.Serialize()` method.  Instead, use
        `BlockMarshaler.MarshalBlock()` static method and `Bencodex.Codec`
        together.
     -  Removed `BlockHeader(Bencodex.Types.Dictionary)` overloaded constructor.
        Use `BlockMarshaler.UnmarshalBlockHeader()` static method instead.
     -  Removed `BlockHeader.Deserialize()` static method.  Instead, use
        `BlockMarshaler.UnmarshalBlockHeader()` static method and
        `Bencodex.Codec` together.
     -  Removed `BlockHeader.ToBencodex()` method.
        Use `BlockMarshaler.MarshalBlockHeader()` static method instead.
     -  Removed `BlockHeader.Serialize()` method.  Instead, use
        `BlockMarshaler.MarshalBlockHeader()` static method and
        `Bencodex.Codec` together.
 -  `Block<T>` and `BlockHeader` now guarantee that their every instance has
    its `StateRootHash`.  [[#1128], [#1146], [#1492]]
     -  `Block<T>.StateRootHash` property's type became `HashDigest<SHA256>`
        (was `HashDigest<SHA256>?`).
     -  Removed `Block<T>(Block<T>, HashDigest<SHA256>)` overloaded constructor.
        Use `Block<T>(PreEvaluationBlock<T>, HashDigest<SHA256>)` overloaded
        constructor instead.
     -  Removed `Block<T>.Mine()` static method.  Use `BlockContent<T>.Mine()`
        and `PreEvaluationBlock<T>.Evaluate()` methods instead.
     -  `BlockHeader.StateRootHash` property's type became `HashDigest<SHA256>`
        (was `HashDigest<SHA256>?`).
     -  The type of `InvalidBlockStateRootHashException()` constructor's
        `expectedStateRootHash` parameter became `HashDigest<SHA256>`
        (was `HashDigest<SHA256>?`).  [[#1507]]
     -  `InvalidBlockStateRootHashException.ExpectedStateRootHash` property's
        type became `HashDigest<SHA256>` (was `HashDigest<SHA256>?`).  [[#1507]]
 -  `Block<T>` and `BlockHeader` became aware of `HashAlgorithmType` used for
    proof-of-work mining.  [[#1492]]
     -  Added `Block<T>.HashAlgorithm` property.
     -  Added `BlockHeader.HashAlgorithm` property.
     -  Removed `BlockHeader(int, long, DateTimeOffset, Nonce, Address, long,
        BigInteger, BlockHash?, HashDigest<SHA256>?, BlockHash,
        ImmutableArray<byte>, HashDigest<SHA256>?)` constructor.
        Use `BlockHeader(int, long, DateTimeOffset, Nonce, Address, long,
        BigInteger, BlockHash?, HashDigest<SHA256>?, BlockHash,
        ImmutableArray<byte>, HashDigest<SHA256>, HashAlgorithmType)`
        constructor instead.
     -  Added `HashAlgorithmGetter hashAlgorithmGetter` parameter to
        `IStore.GetBlock<T>()` method.
     -  Removed `BlockDigest.Header` property.  Use `BlockDigest.GetHeader()`
        method instead.
     -  Added `BlockDigest.GetHeader()` method.
     -  Added `HashAlgorithmGetter hashAlgorithmGetter` parameter to
        `DelayedRenderer<T>()` constructor.
     -  Added `HashAlgorithmGetter hashAlgorithmGetter` parameter to
        `DelayedActionRenderer<T>()` constructor.
     -  Added `DelayedRenderer<T>.HashAlgorithmGetter` property.
 -  Blocks became signed by the miner since the protocol version 2.
    [[#1457], [#1507]]
     -  Added `Block<T>(PreEvaluationBlock<T>, HashDigest<SHA256>,
        ImmutableArray<byte>?)` overloaded constructor.  [[#1164], [#1492]]
     -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
        ImmutableArray<byte>?)` overloaded constructor.  [[#1164], [#1492]]
     -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
        ImmutableArray<byte>?, BlockHash)` overloaded constructor.
        [[#1164], [#1492]]
     -  Added `Block<T>.Signature` property.
     -  Added `Block<T>.PublicKey` property.
     -  Added `BlockHeader.Signature` property.
     -  Added `BlockHeader.PublicKey` property.
     -  Added `InvalidBlockPublicKeyException` class.
     -  Added `InvalidBlockSignatureException` class.
 -  `IStateStore` now requires implementations to be trie.
    [[#1128], [#1146], [#1492]]
     -  Added `IStateStore.GetStateRoot()` method.
     -  Added `IStateStore.PruneStates()` method.
     -  Removed `IStateStore.SetStates<T>()` method.
     -  Removed `IStateStore.GetState()` method.
     -  Removed `IStateStore.ContainsBlockStates()` method.
     -  Removed `IStateStore.ForkStates<T>()` method.
 -  `TrieStateStore` no more stores associations between
    `Block<T>.Hash`/`Block<T>.PreEvaluationHash` and `Block<T>.StateRootHash`,
    because `Block<T>.StateRootHash` became mandatory.
    [[#1128], [#1146], [#1492]]
     -  Added `ITrie.Recorded` property.
     -  Removed `IKeyValueStore stateHashKeyValueStore` parameter from
        `TrieStateStore()` constructor.
     -  Removed `TrieStateStore.GetTrie()` method.
     -  Removed `TrieStateStore.GetRootHash()` method.
     -  Replaced `TrieStateStore.PruneStates(IImmutableSet<BlockHash>)` method
        with `TrieStateStore.PruneStates(IImmutableSet<HashDigest<SHA256>>)`
        method.
 -  The types of `BlockChain<T>.MineBlock()` overloaded methods' `miner`
    parameter became `PrivateKey` (were `Address`).  [[#1457], [#1507]]

### Backward-incompatible network protocol changes

 -  The `Block<T>.CurrentProtocolVersion` is bumped from 1 to 2:  [[#1507]]
     -  Block's total difficulty value became included to the input of block
        hashes and pre-evaluation hashes since the protocol version 2.
     -  Blocks became to have miner's public key as well since the protocol
        version 2.  [[#1457]]
     -  Blocks became to have no miner's address since the protocol version 2,
        because it can be derived from miner's public key.  [[#1457]]
     -  Blocks became to have a signature made using miner's private key
        since the protocol version 2.  Block signatures affect block hashes.
        [[#1457]]

### Added APIs

 -  Added `BlockMetadata` class.  [[#1164], [#1457], [#1492], [#1507]]
 -  Added `BlockContent<T>` class.  [[#1164], [#1492]]
 -  Added `PreEvaluationBlockHeader` class.
    [[#1146], [#1164], [#1457], [#1492], [#1507]]
 -  Added `PreEvaluationBlock<T>` class.
    [[#1146], [#1164], [#1457], [#1492], [#1507]]
 -  Added `BlockDigest.FromBlock<T>()` static method.  [[#1492]]
 -  Added `Block<T>(PreEvaluationBlock<T>, HashDigest<SHA256>)` overloaded
    constructor.  [[#1146], [#1164], [#1492]]
 -  Added `Block<T>.HashAlgorithm` property.  [[#1492]]
 -  Added `Block<T>.PublicKey` property.  [[#1457], [#1507]]
 -  Added `Block<T>.Signature` property.  [[#1457], [#1507]]
 -  Added `Block<T>(PreEvaluationBlock<T>, HashDigest<SHA256>,
    ImmutableArray<byte>?)` overloaded constructor.
    [[#1164], [#1457], [#1492], [#1507]]
 -  Added `Block<T>(IBlockHeader, IEnumerable<Transaction<T>>)` overloaded
    constructor.  [[#1164], [#1492]]
 -  Added `BlockHeader.HashAlgorithm` property.  [[#1492]]
 -  Added `BlockHeader.PublicKey` property.  [[#1457], [#1507]]
 -  Added `BlockHeader.Signature` property.  [[#1457], [#1507]]
 -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
    ImmutableArray<byte>?)` overloaded constructor.
    [[#1164], [#1457], [#1492], [#1507]]
 -  Added `BlockHeader(PreEvaluationBlockHeader, HashDigest<SHA256>,
    ImmutableArray<byte>?, BlockHash)` overloaded constructor.
    [[#1164], [#1457], [#1492], [#1507]]
 -  Added `IBlockMetadata` interface.  [[#1164], [#1457], [#1492], [#1507]]
     -  `Block<T>` became to implement `IBlockMetadata` interface.
     -  `BlockHeader` became to implement `IBlockMetadata` interface.
     -  `BlockMetadata` became to implement `IBlockMetadata` interface.
     -  `BlockContent<T>` became to implement `IBlockMetadata` interface.
     -  `PreEvaluationBlockHeader` became to implement `IBlockMetadata`
        interface.
     -  `PreEvaluationBlock<T>` became to implement `IBlockMetadata` interface.
     -  `BlockDigest` became to implement `IBlockMetadata` interface.
 -  Added `IBlockContent<T>` interface.  [[#1164], [#1492]]
     -  `Block<T>` became to implement `IBlockContent<T>` interface.
     -  `BlockContent<T>` became to implement `IBlockContent<T>` interface.
     -  `PreEvaluationBlock<T>` became to implement `IBlockContent<T>`
        interface.
 -  Added `IPreEvaluationBlockHeader` interface.  [[#1164], [#1492]]
     -  `Block<T>` became to implement `IPreEvaluationBlockHeader` interface.
     -  `BlockHeader` became to implement `IPreEvaluationBlockHeader` interface.
     -  `PreEvaluationBlockHeader` became to implement
        `IPreEvaluationBlockHeader` interface.
     -  `PreEvaluationBlock<T>` became to implement `IPreEvaluationBlockHeader`
        interface.
 -  Added `IPreEvaluationBlock<T>` interface.  [[#1164], [#1492]]
     -  `Block<T>` became to implement `IPreEvaluationBlock<T>` interface.
     -  `PreEvaluationBlock<T>` became to implement `IPreEvaluationBlock<T>`
        interface.
     -  `ActionEvaluator<T>.Evaluate()` method's `block` parameter became to
        take `IPreEvaluationBlock<T>` (was `IBlock<T>`).
 -  Added `IBlockHeader` interface.  [[#1146], [#1164], [#1492]]
     -  `Block<T>` became to implement `IBlockHeader` interface.
     -  `BlockHeader` became to implement `BlockHeader` interface.
 -  Added `BlockMetadataExtensions` static class.  [[#1164], [#1492]]
 -  Added `BlockContentExtensions` static class.  [[#1164], [#1492]]
 -  Added `BlockMarshaler` static class.  [[#1164], [#1492]]
 -  Added `BlockDigest.GetHeader()` method.  [[#1492]]
 -  Added `StateStoreExtensions` static class.  [[#1128], [#1146], [#1492]]
 -  Added `StoreExtensions.GetStateRootHash()` extension method.
    [[#1128], [#1146], [#1492]]
 -  Added `DelayedRenderer<T>.HashAlgorithmGetter` property.  [[#1492]]
 -  `BlockDigest` became to implement `IBlockExcerpt`.  [[#1492]]
 -  Added `InvalidBlockPublicKeyException` class.  [[#1457], [#1507]]
 -  Added `InvalidBlockSignatureException` class.  [[#1457], [#1507]]

### Behavioral changes

 -  `Block<T>.Transactions` property is now ordered by `Transaction<T>.Id`
    so that it's consistent with `IBlockContent<T>`'s other implementations.
    As this behavior can be changed in the later releases, do not depend on
    its ordering, but explicitly sort them before use when the order needs to b
    guaranteed.  [[#1492]]
 -  Blocks and block metadata became to have their miners' public keys too.
    Although it is backward compatible to the earlier protocol version than 2,
    blocks with the protocol version 2 or later must have public keys.
    If a block lacks public key, `InvalidBlockPublicKeyException` is thrown.
    [[#1457], [#1507]]
 -  `PublicKey.ToString()` method now returns its hexadecimal representation
    in compressed form.  [[#1507]]

### Bug fixes

 -  Fixed `NullReferenceException` that `PublicKey.Verify()` method had thrown
    with a non-null empty `signature`.  [[#1507]]
 -  Fixed `TxExecution` not updating during preload.  [[#1508], [#1509]]

[#1128]: https://github.com/planetarium/libplanet/issues/1128
[#1146]: https://github.com/planetarium/libplanet/issues/1146
[#1164]: https://github.com/planetarium/libplanet/issues/1164
[#1457]: https://github.com/planetarium/libplanet/issues/1457
[#1492]: https://github.com/planetarium/libplanet/pull/1492
[#1507]: https://github.com/planetarium/libplanet/pull/1507
[#1508]: https://github.com/planetarium/libplanet/issues/1508
[#1509]: https://github.com/planetarium/libplanet/pull/1509


Version 0.17.0
--------------

Released on September 28, 2021.

### Backward-incompatible API changes

 -  Added `StateCompleterSet<T>.ComplementAll` property.  [[#1358], [#1386]]
 -  Added `StateCompleterSet<T>.ComplementLatest` property.  [[#1358], [#1386]]
 -  `BlockPerception` now implements `IBlockExcerpt` interface.  [[#1440]]
     -  `BlockPerception.Excerpt` property removed.
 -  `TotalDifficultyComparer` now implements `IComparer<IBlockExcerpt>`
    interface.  [[#1442]]
 -  Return type for `BlockDemandTable.Add()` is now `void`.  [[#1435], [#1443]]
 -  Added `BlockInsufficientTxsException`.  [[#1445]]
 -  `PrivateKey()` constructor's parameter type became `IReadOnlyList<byte>`
    (was `byte[]`).  [[#1464]]
 -  `PrivateKey.ByteArray` property's type became `ImmutableArray<byte>`
    (was `byte[]`).  To get a mutable one, use `PrivateKey.ToByteArray()`
    method instead.  [[#1464]]
 -  `PublicKey()` constructor's parameter type became `IReadOnlyList<byte>`
    (was `byte[]`).  [[#1464]]
 -  `PublicKey.Verify()` method's both parameter types became
    `IReadOnlyList<byte>` (were both `byte[]`).  [[#1464]]
 -  `HashDigest<T>.DeriveFrom()` method's parameter type became
    `IReadOnlyList<byte>` (was `byte[]`).  [[#1464]]
 -  `IBlockPolicy<T>.GetMaxBlockBytes()` description changed for `0`
    and negative values.  [[#1449], [#1463]]
     -  Returned values from these will now be taken literally
        by `BlockChain<T>`.
 -  Removed `IBlockPolicy<T>.MaxTransactionsPerBlock` property.  It is replaced
    by `IBlockPolicy<T>.GetMaxTransactionsPerBlock(long index)` method.
    [[#1447]]
 -  Added `IBlockPolicy<T>.GetMaxTransactionsPerBlock(long index)` method.
    [[#1447]]
 -  Added `IBlockPolicy<T>.GetMinTransactionsPerBlock(long index)` method.
    [[#1479]]
 -  Added `IBlockPolicy<T>.GetMaxTransactionsPerSignerPerBlock(long index)`
    method.  [[#1449], [#1463]]
 -  Unused parameter `currentTime` removed from `BlockChain<T>.Append()`.
    [[#1462], [#1465]]
 -  Added an optional `maxTransactionsPerSigner` parameter to
    `BlockChain<T>.MineBlock()` method.  [[#1449], [#1463]]
 -  Added an optional `txPriority` parameter to `BlockChain<T>.MineBlock()`
    method.  [[#1477]]
 -  `BlockHeader`'s properties are now represented as richer types than before.
    [[#1470]]
     -  `BlockHeader.Timestamp` property's type became `DateTimeOffset`
        (was `string`).
     -  `BlockHeader.Nonce` property's type became `Nonce` (was
        `ImmutableArray<byte>`).
     -  `BlockHeader.Miner` property's type became `Address` (was
        `ImmutableArray<byte>`).
     -  `BlockHeader.PreviousHash` property's type became `BlockHash?` (was
        `ImmutableArray<byte>`).
     -  `BlockHeader.TxHash` property's type became `HashDigest<SHA256>?` (was
        `ImmutableArray<byte>`).
     -  `BlockHeader.Hash` property's type became `BlockHash` (was
        `ImmutableArray<byte>`).
     -  `BlockHeader.StateRootHash` property's type became `HashDigest<SHA256>?`
        (was `ImmutableArray<byte>`).
     -  Removed `BlockHeader(int, long, string, ImmutableArray<byte>,
        ImmutableArray<byte>, long, BigInteger, ImmutableArray<byte>,
        ImmutableArray<byte>, ImmutableArray<byte>, ImmutableArray<byte>,
        ImmutableArray<byte>)` constructor.  Use `BlockHeader(int, long,
        DateTimeOffset, Nonce, Address, long, BigInteger, BlockHash?,
        HashDigest<SHA256>?, BlockHash, ImmutableArray<byte>,
        HashDigest<SHA256>?)` constructor instead.
 -  `IStore`, `IStateStore`, and `IKeyValueStore` interfaces now inherit
    `IDisposable`.  [[#1448], [#1474]]
 -  Multiple changes for `IBlockPolicy<T>` interface.  [[#1485]]
     -  `bool DoesTransactionFollowsPolicy(BlockChain<T>, Transaction<T>)`
        changed to `TxPolicyViolationException? ValidateNextBlockTx(
        BlockChain<T>, Transaction<T>)`.
     -  `InvalidBlockException ValidateNextBlock(BlockChain<T>, Block<T>)`
        changed to `BlockPolicyViolationException? ValidateNextBlock(
        BlockChain<T>, Block<T>)`.
     -  `BlockPolicy<T>`, the default implementation for `IBlockPolicy<T>`,
        has been updated accordingly.
 -  Removed `BlockPolicy<T>()` constructor with `int blockIntervalMilliseconds`
    parameter.  Use the one with `TimeSpan? blockInterval` instead.  [[#1485]]
 -  Replaced `int maxBlockBytes` and `int maxGenesisBytes` parameters from
    `BlockPolicy<T>()` constructor with `Func<long, int>? getMaxBlockBytes`.
    [[#1485]]
 -  Removed `TxViolatingBlockPolicyException` class.  [[#1485]]
 -  Optional parameter name `difficultyBoundDivisor` for `BlockPolicy<T>()`
    constructor changed to `difficultyStability`.  [[#1495]]
 -  Type for optional parameter `difficultyStability` for `BlockPolicy<T>()`
    constructor changed to `long?` from `int?`.  [[#1495]]

### Backward-incompatible network protocol changes

 -  `Message` became to serialize peer with Bencodex instead of
    `BinaryFormatter`.  [[#1455]]

### Added APIs

 -  `IBlockExcerpt.ExcerptEquals` extension method added.  [[#1440]]
 -  Added `PrivateKey.FromString()` method.  [[#1475]]
 -  Added `PrivateKey.Sign(ImmutableArray<byte>)` overloaded method.  [[#1464]]
 -  Added `PrivateKey.Decrypt(ImmutableArray<byte>)` overloaded method.
    [[#1464]]
 -  Added `PrivateKey.ToByteArray()` method.  [[#1464]]
 -  Added `PublicKey.Encrypt(ImmutableArray<byte>)` overloaded method.
    [[#1464]]
 -  Added `PublicKey.ToImmutableArray()` method.  [[#1464]]
 -  Added `Nonce(ImmutableArray<byte>)` overloaded constructor.  [[#1464]]
 -  Added `HashAlgorithmType.Digest(IEnumerable<byte[]>)` overloaded method.
    [[#1480]]
 -  Added `HashAlgorithmType.Digest(IEnumerable<ImmutableArray<byte>>)`
    overloaded method.  [[#1480]]
 -  Added `BlockHeader(int, long, DateTimeOffset, Nonce, Address, long,
    BigInteger, BlockHash?, HashDigest<SHA256>?, BlockHash,
    ImmutableArray<byte>, HashDigest<SHA256>?)` constructor.  [[#1470]]
 -  Added `TxCompletion<TPeer, TAction>` class.  [[#1420], [#1478]]
 -  Added `BlockPolicyViolationException` and `TxPolicyViolationException`
    classes.  [[#1485]]
 -  Added `DifficultyAdjustment` static class.  [[#1495]]
 -  Added `BlockPolicy<T>.DifficultyStability` and
    `BlockPolicy<T>.MinimumDifficulty` properties.  [[#1495]]

### Behavioral changes

 -  `StateCompleterSet<T>.Recalculate` now evaluates states even for those
    already in `IStateStore`.  Moreover, it also terminates early if possible
    after reaching the `BlockHash` provided with a call.  [[#1358], [#1386]]
 -  `TotalDifficultyComparer` no longer considers perceived time when comparing
    `IBlockExcerpt`s.  [[#1442]]
 -  General logic for determining the canonical chain has been updated.
    [[#1435], [#1443]]
     -  Perceived time is only used for marking a received header in
        `BlockDemandTable` in order to decide whether `BlockDemand` is stale
        or not.  This should prevent a tip regression for a local node, as the
        tip of a chain is never considered as stale.
 -  Block sync using `BlockDemand` became not to fill blocks
    from multiple peers.  [[#1459]]
 -  `BlockChain<T>.MineBlock()` now uses `maxTransactions` literally.
    [[#1449], [#1463]]
     -  Before, `maxTransactions` were internally automatically set to a
        value between `1` and `BlockChain<T>.Policy.MaxTransactionsPerBlock`.
 -  Similarly, `BlockChain<T>.MineBlock()` now internally uses
    `BlockChain<T>.Policy.GetMaxBlockBytes()` literally.  [[#1449], [#1463]]
 -  `NetMQTransport` became to no more send CreatePermission to TURN client and
    require permission-less TURN server.  See [coturn's relevant configuration](
    https://github.com/coturn/coturn/blob/dc8f405f8543a83ad8c059ba6b9f930e1e5a1349/man/man1/turnserver.1#L402-L410)
    as well.  [[#1423]]
 -  `Swarm<T>` became to sync transactions from multiple peers
    at the same time.  [[#1420], [#1478]]

### Bug fixes

 -  Improper sanity checks for `targetBlockInterval` (changed from the old name
    `blockInterval`), `minimumDifficulty`, and `difficultyStability` (changed
    from the old name `difficultyBoundDivisor`) arguments given to
    `BlockPolicy<T>()` constructor fixed.  [[#1495]]
     -  It was possible for `targetBlockInterval` to be zero, which would result
        in division by zero, when this makes no sense.
     -  It was possible for `difficultyStability` not to be positive when this
        makes no sense.
     -  Wrongly threw an `ArgumentOutOfRangeException` for the case where
        `minimumDifficulty` would equal `difficultyStability`.
     -  It was possible for `minimumDifficulty` to be zero, which would allow
        difficulty to be stuck at zero indefinitely, when this does not
        make sense.

[#1358]: https://github.com/planetarium/libplanet/issues/1358
[#1386]: https://github.com/planetarium/libplanet/pull/1386
[#1420]: https://github.com/planetarium/libplanet/issues/1420
[#1423]: https://github.com/planetarium/libplanet/pull/1423
[#1435]: https://github.com/planetarium/libplanet/issues/1435
[#1440]: https://github.com/planetarium/libplanet/pull/1440
[#1442]: https://github.com/planetarium/libplanet/pull/1442
[#1443]: https://github.com/planetarium/libplanet/pull/1443
[#1445]: https://github.com/planetarium/libplanet/pull/1445
[#1447]: https://github.com/planetarium/libplanet/pull/1447
[#1448]: https://github.com/planetarium/libplanet/issues/1448
[#1449]: https://github.com/planetarium/libplanet/issues/1449
[#1455]: https://github.com/planetarium/libplanet/pull/1455
[#1459]: https://github.com/planetarium/libplanet/pull/1459
[#1462]: https://github.com/planetarium/libplanet/issues/1462
[#1463]: https://github.com/planetarium/libplanet/pull/1463
[#1464]: https://github.com/planetarium/libplanet/pull/1464
[#1465]: https://github.com/planetarium/libplanet/pull/1465
[#1470]: https://github.com/planetarium/libplanet/pull/1470
[#1474]: https://github.com/planetarium/libplanet/pull/1474
[#1475]: https://github.com/planetarium/libplanet/pull/1475
[#1477]: https://github.com/planetarium/libplanet/pull/1477
[#1478]: https://github.com/planetarium/libplanet/pull/1478
[#1479]: https://github.com/planetarium/libplanet/pull/1479
[#1480]: https://github.com/planetarium/libplanet/pull/1480
[#1485]: https://github.com/planetarium/libplanet/pull/1485
[#1495]: https://github.com/planetarium/libplanet/pull/1495


Version 0.16.0
--------------

Released on August 25, 2021.

### Backward-incompatible API changes

 -  Removed `Swarm<T>.BlockDemand` property.  [[#1419], [#1425]]
 -  `BlockChain<T>.Tip` property is now non-nullable.  [[#1430]]

### Added APIs

 -  Added `BlockDemandTable<T>` class.  [[#1419], [#1425]]
 -  Added `Swarm<T>.BlockDemandTable` property.  [[#1419], [#1425]]
 -  Added `SwarmOptions.PollInterval` property.  [[#1419], [#1425]]
 -  Added `SwarmOptions.MaximumPollPeers` property.  [[#1419], [#1425]]

### Behavioral changes

 -  `Swarm<T>` became to sync blocks from multiple peers.  [[#1419], [#1425]]

### Bug fixes

 -  Fixed a bug where `Swarm<T>.PreloadAsync()` failed to sync blocks from
    the peer that has chain with higher difficulty, but lower index.
    [[#1419], [#1425]]

### CLI tools

[#1419]: https://github.com/planetarium/libplanet/issues/1419
[#1425]: https://github.com/planetarium/libplanet/pull/1425
[#1430]: https://github.com/planetarium/libplanet/pull/1430


Version 0.15.4
--------------

Released on September 14, 2021.

 -  Fixed a bug where `BlockChain<T>.MineBlock()` had created a block that
    includes both transactions when there are two or more transactions with
    the same nonce on the stage.  [[#1491]]

[#1491]: https://github.com/planetarium/libplanet/pull/1491


Version 0.15.3
--------------

Released on September 10, 2021.

 -  Fixed a bug where `Swarm<T>` fails to reply transaction when any of the
    requested transactions id in `GetTxs` message does not exist in the storage.
    [[#1481]]

[#1481]: https://github.com/planetarium/libplanet/pull/1481


Version 0.15.2
--------------

Released on September 3, 2021.

 -  Removed `ITransport.SendMessageWithReplyAsync(BoundPeer,
    Message, TimeSpan?, int, CancellationToken)` method.
    Instead, added `ITransport.SendMessageWithReplyAsync(BoundPeer,
    Message, TimeSpan?, int, bool, CancellationToken)` method.
    [[#1458], [#1461]]
 -  Fixed a bug where `GetTxs` request failed to receive transactions
    if any messages are missing.  [[#1458], [#1461]]

[#1458]: https://github.com/planetarium/libplanet/issues/1458
[#1461]: https://github.com/planetarium/libplanet/pull/1461


Version 0.15.1
--------------

Released on August 28, 2021.

 -  `NetMQTransport` became to process message in non blocking way.  [[#1451]]

 [#1451]: https://github.com/planetarium/libplanet/pull/1451


Version 0.15.0
--------------

Released on August 18, 2021.

### Backward-incompatible API changes

 -  Added `IRandom.Seed` property.  [[#1431]]

[#1431]: https://github.com/planetarium/libplanet/pull/1431


Version 0.14.1
--------------

Released on August 18, 2021.

 -  Added additional tags to logging.  [[#1433]]

[#1433]: https://github.com/planetarium/libplanet/pull/1433


Version 0.14.0
--------------

Released on Aug 5, 2021.

### Added APIs

 -  Added `NonblockRenderer<T>` class.  [[#1402], [#1422]]
 -  Added `NonblockActionRenderer<T>` class.  [[#1402], [#1422]]

[#1402]: https://github.com/planetarium/libplanet/issues/1402
[#1422]: https://github.com/planetarium/libplanet/pull/1422


Version 0.13.2
--------------

Released on Aug 5, 2021.

 -  When a reorg happens, `Swarm<T>` now broadcasts a reorged chain tip first
    before rendering.  [[#1385], [#1415]]
 -  Fixed a bug where `TurnClient` hadn't been recovered when TURN connection
    had been disconnected.  [[#1424]]

[#1385]: https://github.com/planetarium/libplanet/issues/1385
[#1415]: https://github.com/planetarium/libplanet/pull/1415
[#1424]: https://github.com/planetarium/libplanet/pull/1424


Version 0.13.1
--------------

Released on July 29, 2021.

 -  Fixed `HashAlgorithmType.Digest()` method's bug that it returns an incorrect
    digest bytes when it is called by multiple threads at a time.  [[#1411]]

[#1411]: https://github.com/planetarium/libplanet/pull/1411


Version 0.13.0
--------------

Released on July 28, 2021.

### Backward-incompatible API changes

 -  Added `bool render = false` option to `Swarm<T>.PreloadAsync()`.
    Blocks and actions in preloaded blocks will be rendered if the switch
    is set to `true`.  [[#1391]]

### Added APIs

 -  Added `Transaction<T>.CreateUnsigned()` method.  [[#1378]]
 -  Added `SwarmOptions.TableSize` property.  [[#1401]]
 -  Added `SwarmOptions.BucketSize` property.  [[#1401]]

### Behavioral changes

 -  `Transaction<T>.Validate()` became to throw `InvalidTxSignatureException`
    if the transaction was not signed.  [[#1378]]

### Bug fixes

 -  Fixed a bug where `Swarm<T>` had stopped when `ObjectDisposedException`
    is thrown during `NetMQTransport.DoBroadcast()`.  [[#1362], [#1365]]

### CLI tools

[#1362]: https://github.com/planetarium/libplanet/issues/1362
[#1365]: https://github.com/planetarium/libplanet/pull/1365
[#1378]: https://github.com/planetarium/libplanet/pull/1378
[#1391]: https://github.com/planetarium/libplanet/pull/1391
[#1401]: https://github.com/planetarium/libplanet/pull/1401


Version 0.12.1
--------------

Released on July 28, 2021.

 -  `Swarm<T>.PreloadAsync()` now checks the existence of blocks in the storage
    (was in the blockchain).  [[#1324]]

[#1324]: https://github.com/planetarium/libplanet/pull/1324


Version 0.12.0
--------------

Released on July 23, 2021.

### Backward-incompatible API changes

 -  Block hashes are now represented as `BlockHash`, which was introduced in
    this release, which has been done as `HashDigest<SHA256>`.
    [[#1192], [#1197]]
     -  The type of `Block<T>.Hash` property became `BlockHash`
        (was `HashDigest<SHA256>`).
     -  The type of `Block<T>.PreviousHash` property became `BlockHash?`
        (was `HashDigest<SHA256>?`).
     -  The types of `Block<T>()` constructors' `hash` parameter became
        `BlockHash` (were `HashDigest<SHA256>`).
     -  The types of `Block<T>()` constructors' `previousHash` parameter became
        `BlockHash?` (were `HashDigest<SHA256>?`).
     -  The type of `Block<T>.Mine()` method's `previousHash` parameter became
        `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The return type of `HashCash.Hash()` method became `BlockHash`
        (was `HashDigest<SHA256>`).
     -  The type of `Transaction<T>()` constructor's `genesisHash` parameter
        became `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The type of `Transaction<T>.Create()` method's `genesisHash` parameter
        became `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The type of `Transaction<T>.GenesisHash` property became `BlockHash?`
        (was `HashDigest<SHA256>?`).
     -  The type of `Transaction<T>.EvaluateActionsGradually()` method's
        `blockHash` parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `Transaction<T>.EvaluateActions()` method's `blockHash`
        parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `BlockChain[]` indexer's parameter became `BlockHash`
        (was `HashDigest<SHA256>`).
     -  The type of `BlockChain.BlockHashes` property became
        `IEnumerable<BlockHash>` (was `IEnumerable<HashDigest<SHA256>>`).
     -  The type of `BlockChain.ContainsBlock()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `BlockChain.GetState()` method's `offset` parameter
        became `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The type of `BlockChain.GetBalance()` method's `offset` parameter
        became `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The type of `StateCompleter<T>` delegate's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `FungibleAssetStateCompleter<T>` delegate's `blockHash`
        parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  `BlockSet<T>` no more implements
        `IDictionary<HashDigest<SHA256>, Block<T>>`, but now implements
        `IDictionary<BlockHash, Block<T>>`.
     -  The type of `ActionExecutionState.ExecutedBlockHash` property became
        `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `BlockDownloadState.ReceivedBlockHash` property became
        `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `BlockVerificationState.VerifiedBlockHash` property became
        `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IncompleteBlockStatesException()` constructor's
        `blockHash` parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IncompleteBlockStatesException.BlockHash` property
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The types of `InvalidGenesisBlockException()` constructor's
        `networkExpected` and `stored` parameters became `BlockHash`
        (were `HashDigest<SHA256>`).
     -  The type of `InvalidGenesisBlockException.NetworkExpected` property
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `InvalidGenesisBlockException.Stored` property
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `InvalidTxGenesisHashException()` constructor's
        `expectedGenesisHash` parameter became `BlockHash`
        (was `HashDigest<SHA256>`).
     -  The type of `InvalidTxGenesisHashException()` constructor's
        `improperGenesisHash` parameter became `BlockHash?`
        (was `HashDigest<SHA256>?`).
     -  The type of `InvalidTxGenesisHashException.ExpectedGenesisHash` property
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `InvalidTxGenesisHashException.ImproperGenesisHash` property
        became `BlockHash?` (was `HashDigest<SHA256>?`).
     -  The return type of `IStore.IndexBlockHash()` method became `BlockHash?`
        (was `HashDigest<SHA256>?`).
     -  The type of `IStore.AppendIndex()` method's `hash` parameter became
        `BlockHash` (was `HashDigest<SHA256>`).
     -  Replaced `IStore.ForkBlockIndexes()` method's
        `HashDigest<SHA256> branchPoint` parameter with `BlockHash branchpoint`.
     -  The return type of `IStore.IterateIndexes()` method became
        `IEnumerable<BlockHash>` (was `IEnumerable<HashDigest<SHA256>>`).
     -  The return type of `IStore.IterateBlockHashes()` method became
        `IEnumerable<BlockHash>` (was `IEnumerable<HashDigest<SHA256>>`).
     -  The type of `IStore.GetBlock<T>()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStore.GetBlockIndex()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStore.GetBlockDigest()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStore.DeleteBlock()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStore.ContainsBlock()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStateStore.GetState()` method's `blockHash` parameter
        became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `IStateStore.ContainsBlockStates()` method's `blockHash`
        parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `TrieStateStore.GetRootHash()` method's `blockHash`
        parameter became `BlockHash` (was `HashDigest<SHA256>`).
     -  The type of `TrieStateStore.PruneStates()` method's `excludeBlockHashes`
        parameter became `IImmutableSet<BlockHash>`
        (was `ImmutableHashSet<HashDigest<SHA256>>`).
 -  Hash algorithm for <abbr title="proof-of-work">PoW</abbr> (Hashcash) became
    configurable.  [#1314], [#1352]
     -  Added `IBlockPolicy<T>.GetHashAlgorithm()` method.
     -  Added an optional `HashAlgorithmType? hashAlgorithm` parameter to
        `Block<T>(long, long, BigInteger, Nonce, Address?, BlockHash?,
        DateTimeOffset, IReadOnlyList<Transaction<T>>, ImmutableArray<byte>?,
        HashDigest<SHA256>?, int protocolVersion)` constructor.
     -  Added `HashAlgorithmType hashAlgorithm` parameter to
        `Block<T>.MineBlock()` method.
     -  The type of `Block<T>.PreEvaluationHash` property became
        `ImmutableArray<byte>?` (was `HashDigest<SHA256>?`).
        [[#1192], [#1197]]
     -  The types of `Block<T>()` constructors' `preEvaluationHash` parameter
        became `ImmutableArray<byte>?` (were `HashDigest<SHA256>?`).
        [[#1192], [#1197]]
     -  The type of
        `InvalidBlockPreEvaluationHashException.ActualPreEvaluationHash` and
        `ExpectedPreEvaluationHash` properties became `ImmutableArray<byte>`
        (were `HashDigest<SHA256>`).  [[#1192], [#1197]]
     -  The type of `InvalidBlockPreEvaluationHashException()` constructor's
        `actualPreEvaluationHash` and and `expectedPreEvaluationHash` parameters
        became `ImmutableArray<byte>` (were `HashDigest<SHA256>`).
        [[#1192], [#1197]]
     -  Replaced `UnexpectedlyTerminatedActionException()` constructor's
        `HashDigest<SHA256>? blockHash` parameter with
        `ImmutableArray<byte>? preEvaluationHash`.
        [[#1192], [#1197]]
     -  Replaced `UnexpectedlyTerminatedActionException.BlockHash` property with
        `PreEvaluationHash.`  [[#1192], [#1197]]
     -  Replaced `Hashcash.Answer(Stamp, long, CancellationToken)` method with
        `Hashcash.Answer<T>(Stamp, HashAlgorithm, long, CancellationToken)`
        method.
     -  Removed `Hashcash.Hash()` method.
     -  Removed `HashDigest<T>.Satisfies()` method.  This was replaced by
        `ByteUtil.Satisfies()` method instead.  [[#1192], [#1197]]
     -  Added `hashAlgorithmGetter` parameter to `BlockSet<T>()` constructor.
     -  Added `hashAlgorithm` parameter to `BlockChain<T>.MakeGenesisBlock()`
        method.
     -  Added an optional `hashAlgorithmGetter` parameter to `BlockPolicy<T>()`
        constructor.
 -  Added `IActionContext.TxId` property.  [[#1275]]
 -  Added `IStore.PutTxExecution(TxSuccess)` method.  [[#1156], [#1289]]
 -  Added `IStore.PutTxExecution(TxFailure)` method.  [[#1156], [#1289]]
 -  Added `IStore.GetTxExecution()` method.  [[#1156], [#1289]]
 -  Removed the optional parameter `Guid? chainId = null` from
    `IStateStore.GetState()` method.  [[#1289]]
 -  Removed `compress` parameter from `DefaultStore()` constructor.  [[#1289]]
 -  Removed `statesCacheSize` parameter from `DefaultStore()` constructor.
    [[#1289]]
 -  Removed `StunMessage.Parse(Stream)` method.  [[#1228]]
 -  Moved `ITransport` and `NetMQTransport` from `Libplanet.Net` to
    `Libplanet.Net.Transports`.  [[#1235]]
 -  `Block<T>` now enforces a collection of `Transaction<T>`s to be less
    mutable.  [[#1274]]
     -  The type of `Block<T>()` constructor's `transactions` parameter became
        `IReadOnlyList<T>` (was `IEnumerable<T>`).
     -  The type of `Transactions` property of `Block<T>` became
        `IReadOnlyList<T>` (was `IEnumerable<T>`).
 -  Types of following properties became `IReadOnlyList<T>`
    (was `IEnumerable<T>`).  [[#1230], [#1271]]
     -  `RoutingTable.Peers`
     -  `RoutingTable.PeerStates`
     -  `Swarm<T>.Peers`
     -  `Swarm<T>.PeerStates`
 -  Return type of `RoutingTable.Neighbors()` became `IReadOnlyList<BoundPeer>`
    (was `IEnumerable<BoundPeer>`).  [[#1230], [#1271]]
 -  All methods pertaining to evaluating `IAction`s are moved
    to a new `ActionEvaluator` class.  [[#1301], [#1305]]
     -  Removed `Block<T>.Evaluate()` method.
        Use `ActionEvaluator.Evaluate()` method instead.
     -  Removed `Block<T>.EvaluateActionsPerTx()` method.
     -  Removed `Transaction<T>.EvaluateActionsGradually()` method.
     -  Removed `Transaction<T>.EvaluateActions()` method.
 -  Parameters `action`, `inputContext`, and `outputStates` for
    `ActionEvaluation()` constructor can no longer be `null`.  [[#1305]]
 -  Added `IStore.PutTxIdBlockHashIndex(TxId, BlockHash)` method.
    [[#1294], [#1328]]
 -  Added `IStore.GetFirstTxIdBlockHashIndex(TxId)` method.
    [[#1294], [#1328]]
 -  Added `IStore.DeleteTxIdBlockHashIndex(TxId, BlockHash)` method.
    [[#1294], [#1328]]
 -  Added `IStore.IterateTxIdBlockHashIndex(TxId)` method.  [[#1294], [#1328]]
 -  Parameter `miner` for `Block<T>()` and `Block<T>.Mine()` can no longer be
    `null`.  [[#1341]]
 -  `Swarm<T>.StartAsync()` method became to receive `broadcastBlockInterval`
    (or `millisecondsBroadcastBlockInterval`) parameter.  [[#1351]]
 -  Added the parameter `minimumBroadcastTarget` to `NetMQTransport()`
    constructor.  [[#1379]]
 -  Removed `InvalidTxUpdatedAddressesException`.  [[#368], [#1389]]

### Added APIs

 -  Added `ActionEvaluator` class.  [[#1301], [#1305]]
 -  Added `BlockHash` struct.  [[#1192], [#1197]]
 -  Added `HashDigest<T>.DeriveFrom()` method.  [[#1197]]
 -  Added `HashAlgorithmType` class.  [[#1314], [#1352]]
 -  Added `HashAlgorithmGetter` delegate.  [[#1314], [#1352]]
 -  Added `HashAlgorithmTable` static class.  [[#1314], [#1352]]
 -  Added `BlockChain<T>.GetTxExecution()` method.  [[#1156], [#1289]]
 -  Added `StunMessage.ParseAsync(Stream, CancellationToken)` method.
    [[#1228]]
 -  Added `Swarm<T>.AddPeersAsync()` method.  [[#1234]]
 -  Added `NetMQTransport.QueryAppProtocolVersion()` static method.  [[#1235]]
 -  Added `BoundPeer.Parse()` static method.  [[#1240]]
 -  Added `TransportException` class.  [[#1242]]
 -  Added `SwarmOptions.StaticPeers` property.  [[#1230], [#1271]]
 -  Added `SwarmOptions.StaticPeersMaintainPeriod` property.  [[#1230], [#1367]]
 -  Added `SwarmOptions.BranchpointThreshold` property.  [[#1348]]
 -  Added `AtomicActionRenderer<T>` class.  [[#1267], [#1275]]
 -  Added `TxExecution` abstract class.  [[#1156], [#1289]]
 -  Added `TxSuccess` class.  [[#1156], [#1289]]
 -  Added `TxFailure` class.  [[#1156], [#1289]]
 -  Added `IExtractableException` interface.  [[#1156], [#1289]]
 -  Added `ExtractableException` static class.  [[#1156], [#1289]]
 -  Added `Address(Binary)` overloaded constructor.  [[#1289]]
 -  Added `Currency(IValue)` overloaded constructor.  [[#1289]]
 -  Added `Currency.Serialize()` method.  [[#1289]]
 -  Added `ByteUtil.TimingSafelyCompare()` method.  [[#1314], [#1352]]
 -  Added `ByteUtil.Satisfies()` method.  [[#1314], [#1352]]
 -  Added `BlockChain<T>.ExecuteActions()` method.  [[#1368]]
 -  Added `SwarmOptions.MinimumBroadcastTarget` property.  [[#1379]]

### Behavioral changes

 -  `BlockChain<T>.Append()` now records a `TxExecution` for every single
    transaction in the appended `Block<T>`, whether a transaction is successful
    (`TxSuccess` is recorded for this case) or not (`TxFailure` is recorded
    for this case).  [[#1156], [#1289]]
 -  `ITransport.StartAsync()` and `ITransport.RunAsync()` became to throw
    `TransportException` instead of `SwarmException`.  [[#1242]]
 -  `NetMQTransport` became to enforce NetMQ/[AsyncIO] to use its pure .NET
    implementation instead of Windows'
    <abbr title="input/output completion port">IOCP</abbr> when it is running
    on Mono, which powers Unity engine, since Unity does not properly
    implement the IOCP even on Windows.
    It had been done by `Swarm<T>`, but as the `ITransport` is now separated
    from it, this became done by `NetMQTransport` instead of `Swarm<T>`.
    [[#247], [#1278]]
 -  (Libplanet.RocksDBStore) `RocksDBStore.ForkBlockIndexes()` became to share
    common ancestors between forks rather than duplicating them so that much
    less space is used.  [[#1280], [#1287]]
 -  `BlockChain<T>.Append()` cumulates indexes for pairs (TxId and BlockHash).
    A transaction inclusion for a block is retrievable by using this index.
    [[#1315], [#1329]]
 -  `ActionEvaluator<T>.EvaluateActions()` now throws an unmanaged exception
    if `OutOfMemoryException` is caught from `IAction.Execute()`.
    [[#1320], [#1343]]
 -  Improved performance of broadcasting using `Swarm<T>`.  [[#1334]]
 -  `Swarm<T>` now maintains static peers provided via
    `SwarmOptions.StaticPeers` periodically.  [[#1230], [#1367]]
 -  `Block<T>.Header` is now cached instead of creating a new instance every
    call.  [[#1347]]
 -  `BlockChain<T>.ExecuteActions()` became no longer throw
    `InvalidTxUpdatedAddressesException`.  [[#368], [#1389]]

### Bug fixes

 -  Fixed a bug where executing `Transaction<T>.Actions` had not been atomic.
    `Actions` in a `Transaction<T>` now became executed all or nothing at all.
    [[#1267], [#1275]]
     -  `Transaction<T>.EvaluateActions()` method became atomic.
     -  `Transaction<T>.EvaluateActionsGradually()` method had returned
        the same number of `ActionEvaluation`s to `Transaction<T>.Actions`,
        but now became to omit the evaluations after the first action throwing
        an exception.  If no action throws any exception, it still returns
        the same number of `ActionEvaluation`s to `Transaction<T>.Actions`.
     -  State-wise, `Transaction<T>`s having any exception-throwing action
        now do not commit any changes at all to `IStateStore`.
     -  Rendering-wise, for actions following the first exception-throwing
        action, action rendering methods in `IActionRenderer<T>`
        (`RenderAction()`, `RenderActionError()`, `UnrenderAction()`, and
        `UnrenderActionError()`) became not invoked.
        If you want to dismiss all actions in unsuccessful transactions at all,
        wrap your action renderer with `AtomicActionRenderer<T>`.
 -  Fixed a bug where `KademliaProtocol.BootstrapAsync()` has sent multiple
    `Ping` messages to other peers.  [[#1219]]
 -  Fixed a bug where `KademliaProtocol.CheckReplacementCacheAsync()` has
    updated cached peers multiple times.  [[#1219]]
 -  Fixed memory leak due to undisposed `CancellationTokenRegistration`s.
    [[#1228]]
 -  Fixed a bug where `DefaultStore.Dispose()` and `TrieStateStore.Dispose()`
    had not been idempotent.  [[#1272]]
 -  (Libplanet.RocksDBStore) Fixed a bug where `RocksDBStore.Dispose()`,
    `MonoRocksDBStore.Dispose()`, and `RocksDBKeyValueStore.Dispose()` had not
    been idempotent.  [[#1272], [#1289]]
 -  Fixed a bug where `NetMQTransport` had hung forever within Mono runtime.
    [[#1278]]
 -  Fixed a bug where `DefaultStore.ForkBlockIndexes()` hadn't copied genesis
    block.  [[#1325]]
 -  (Libplanet.RocksDBStore) Fixed a bug where `RocksDBStore.GetBlock<T>()`
    and `RocksDBStore.GetTransaction<T>()` handn't returned expected values
    in multithreading environment.  [[#1339], [#1342]]
 -  Fixed a bug where chain synchronization had been incorrectly updated with
    an improper chain.  [[#1349], [#1350]]
 -  Fixed a bug where `Swarm<T>` hadn't respond immediately under load.
    [[#1360]]

### CLI tools

 -  Added the option `--json` to `planet apv analyze` command to print result
    as JSON format.  [[#1240]]
 -  Added `planet apv query` subcommand to query app protocol version of
    specific peer.  [[#1240]]
 -  Added the option `--no-passphrase` to `planet key remove` command to remove
    key without asking passphrase.  [[#1213], [#1265]]
 -  Added `planet key derive` subcommand to derive the address or
    public key from a private.  [[#1268]]
 -  Added `planet store [block-by-hash|block-by-index|tx-by-id]` commands
    to retrieve the data from the store.  [[#1284], [#1285], [#1298]]
 -  Added `planet store block-by-tx-id` commands
    to retrieve the data from the store.  [[#1316], [#1340]]
 -  Added `planet store build-index-tx-block` commands
    to build index from TxId to BlockHash.  [[#1316], [#1340]]
 -  Added `planet stats summary` command to retrieve a state summary of a
    stored chain in a CSV format.  [[#1353]]

[#1156]: https://github.com/planetarium/libplanet/issues/1156
[#1192]: https://github.com/planetarium/libplanet/issues/1192
[#1197]: https://github.com/planetarium/libplanet/pull/1197
[#1213]: https://github.com/planetarium/libplanet/issues/1213
[#1219]: https://github.com/planetarium/libplanet/pull/1219
[#1228]: https://github.com/planetarium/libplanet/pull/1228
[#1230]: https://github.com/planetarium/libplanet/issues/1230
[#1234]: https://github.com/planetarium/libplanet/pull/1234
[#1235]: https://github.com/planetarium/libplanet/pull/1235
[#1240]: https://github.com/planetarium/libplanet/pull/1240
[#1242]: https://github.com/planetarium/libplanet/pull/1242
[#1265]: https://github.com/planetarium/libplanet/pull/1265
[#1267]: https://github.com/planetarium/libplanet/issues/1267
[#1268]: https://github.com/planetarium/libplanet/pull/1268
[#1271]: https://github.com/planetarium/libplanet/pull/1271
[#1272]: https://github.com/planetarium/libplanet/pull/1272
[#1274]: https://github.com/planetarium/libplanet/pull/1274
[#1275]: https://github.com/planetarium/libplanet/pull/1275
[#1278]: https://github.com/planetarium/libplanet/pull/1278
[#1280]: https://github.com/planetarium/libplanet/issues/1280
[#1284]: https://github.com/planetarium/libplanet/issues/1284
[#1285]: https://github.com/planetarium/libplanet/issues/1285
[#1287]: https://github.com/planetarium/libplanet/pull/1287
[#1289]: https://github.com/planetarium/libplanet/pull/1289
[#1294]: https://github.com/planetarium/libplanet/issues/1294
[#1298]: https://github.com/planetarium/libplanet/pull/1298
[#1301]: https://github.com/planetarium/libplanet/issues/1301
[#1305]: https://github.com/planetarium/libplanet/pull/1305
[#1314]: https://github.com/planetarium/libplanet/issues/1314
[#1315]: https://github.com/planetarium/libplanet/issues/1315
[#1316]: https://github.com/planetarium/libplanet/issues/1316
[#1320]: https://github.com/planetarium/libplanet/issues/1320
[#1325]: https://github.com/planetarium/libplanet/pull/1325
[#1326]: https://github.com/planetarium/libplanet/pull/1326
[#1328]: https://github.com/planetarium/libplanet/pull/1328
[#1329]: https://github.com/planetarium/libplanet/pull/1329
[#1334]: https://github.com/planetarium/libplanet/pull/1334
[#1339]: https://github.com/planetarium/libplanet/issues/1339
[#1340]: https://github.com/planetarium/libplanet/pull/1340
[#1341]: https://github.com/planetarium/libplanet/pull/1341
[#1342]: https://github.com/planetarium/libplanet/pull/1342
[#1343]: https://github.com/planetarium/libplanet/pull/1343
[#1347]: https://github.com/planetarium/libplanet/pull/1347
[#1348]: https://github.com/planetarium/libplanet/pull/1348
[#1349]: https://github.com/planetarium/libplanet/issues/1349
[#1350]: https://github.com/planetarium/libplanet/pull/1350
[#1351]: https://github.com/planetarium/libplanet/pull/1351
[#1352]: https://github.com/planetarium/libplanet/pull/1352
[#1353]: https://github.com/planetarium/libplanet/pull/1353
[#1360]: https://github.com/planetarium/libplanet/pull/1360
[#1367]: https://github.com/planetarium/libplanet/pull/1367
[#1368]: https://github.com/planetarium/libplanet/pull/1368
[#1379]: https://github.com/planetarium/libplanet/pull/1379
[#1389]: https://github.com/planetarium/libplanet/pull/1389


Version 0.11.1
-------------

Released on April 22, 2021.

 -  Fixed a bug where block synchronization had stopped due to internal
    errors.  [[#1259]]

[#1259]: https://github.com/planetarium/libplanet/pull/1259


Version 0.11.0
--------------

Released on March 30, 2021.

### Backward-incompatible API changes

 -  Added the parameter `protocolVersion` to `Block<T>(long, long, BigInteger,
    Nonce, Address?, HashDigest<SHA256>?, DateTimeOffset,
    IEnumerable<Transaction<T>> transactions, HashDigest<SHA256>?,
    HashDigest<SHA256>?)` constructor.  [[#1142], [#1147], [#1162]]
 -  Added the parameter to `protocolVersion` to `Block<T>.Mine()` method.
    [[#1142], [#1147], [#1162]]
 -  Added the first parameter `protocolVersion` to `BlockHeader()` constructor.
    [[#1142], [#1147], [#1162]]
 -  Added `stagePolicy` as the second parameter to `BlockChain<T>()`
    constructor.  [[#1130], [#1131]]
 -  Added `IBlockPolicy<T>.CanonicalChainComparer` property to make
    the canonical chain.  [[#1155], [#1165], [#1184]]
 -  Added `canonicalChainComparer` as the last parameter to `BlockPolicy()`
    constructors.  [[#1155], [#1165], [#1184]]
 -  Added `canonicalChainComparer` as the second parameter to
    `DelayedRenderer()` constructor.  [[#1155], [#1165], [#1184]]
 -  Added `canonicalChainComparer` as the second parameter to
    `DelayedActionRenderer()` constructor.  [[#1155], [#1165], [#1184]]
 -  Added `reorgResistantHeight` parameter into `DelayedActionRenderer<T>()`
    constructor.  [[#1163]]
 -  Added `IStore.SetBlockPerceivedTime()` method.  [[#1184]]
 -  Added `IStore.GetBlockPerceivedTime()` method.  [[#1184]]
 -  Removed `TransactionSet<T>` class.  [[#1165]]
 -  Removed `IBlockStatesStore` interface.  [[#1117]]
 -  Removed `BaseBlockStatesStore` abstract class.  [[#1117]]
 -  Removed `Swarm<T>.GetTrustedStateCompleterAsync()` method.  [[#1117]]
 -  Removed `trustedStateValidators` parameter from `Swarm<T>.PreloadAsync()`
    method.  [[#1117]]
 -  Removed `Swarm<T>.TraceTable()` method.  [[#1120]]
 -  Added `IActionContext.BlockAction` property.  [[#1143]]
 -  Added nullable `TimeSpan`-typed `messageLifespan` parameter into
    `NetMQTransport()` constructor.  [[#1171]]
 -  Added `IStore.ForkTxNonces()` method.  [[#1198]]
 -  Removed `PeerState.Address` Property.  [[#1215]]
 -  `IProtocol.RebuildConnectionAsync(CancellationToken)` method was
    replaced by, `IProtocol.RebuildConnectionAsync(int, CancellationToken)`
    method.  [[#1215]]

### Backward-incompatible network protocol changes

 -  `Swarm<T>` became no longer retry when `Swarm<T>` receives
    less than 500 blocks.  [[#1112]]
 -  The existing `ChainStatus` message type (with the type number `0x24`) was
    replaced by a new `ChainStatus` message type (with the type number `0x25`).
    [[#1155], [#1165]]
 -  Removed the message types depended on features of `IBlockStatesStore`
    interface.  [[#1117]]
     -  `GetRecentStates` message type (with the type number `0x0b`)
     -  `RecentStates` message type (with the type number `0x13`)
     -  `GetBlockStates` message type (with the type number `0x22`)
     -  `BlockStates` message type (with the type number `0x23`)
 -  `Swarm<T>` became to ignore messages made earlier than a certain amount of
    time, which is configured by `SwarmOptions.MessageLifespan`.
    [[#1160], [#1171]]

### Backward-incompatible storage format changes

 -  (Libplanet.RocksDBStore) The blocks and transactions became stored in
    multiple databases.  Each block and transaction belongs to a partition
    of the database, according to its epoch unit, which is its Unix timestamp.
    Every epoch is divided by certain seconds, configured by `RocksDBStore()`
    constructor's `txEpochUnitSeconds` and `blockEpochUnitSeconds` parameters
    (86,400 by default).   [[#1183], [#1194]]
 -  (Libplanet.RocksDBStore) Continue on partitioning of database,
    `RocksDBStore()` is manage database connection by LRU Cache.
    The max size of connection cache is configured by `RocksDBStore()`
    constructor's `dbConnectionCacheSize` parameters (100
    by default).   [[#1183], [#1194]]
 -  (Libplanet.RockDBStore) The `RocksDBStore` that was previously used
    has been separated into a class called `MonoRocksDBStore`.
    Please use this class if you need to migrate.   [[#1183], [#1204]]

### Added APIs

 -  Added `Block<T>.CurrentProtocolVersion` constant.  [[#1142], [#1147]]
 -  Added `Block<T>.ProtocolVersion` property.  [[#1142], [#1147]]
 -  Added `Block<T>.Header` property.  [[#1070], [#1102]]
 -  Added `BlockHeader.ProtocolVersion` property.  [[#1142], [#1147]]
 -  Added `IBlockExcerpt` interface.  [[#1155], [#1165], [#1170]]
 -  Added `BlockExcerpt` static class.  [[#1155], [#1165], [#1170], [#1184]]
 -  `Block<T>` became to implement `IBlockExceprt` interface.
    [[#1155], [#1165], [#1170]]
 -  `BlockHeader` became to implement `IBlockExceprt` interface.
    [[#1155], [#1165], [#1170]]
 -  Added `BlockPerception` struct.  [[#1155], [#1184]]
 -  Added `BlockChain<T>.PerceiveBlock()` method.  [[#1155], [#1184]]
 -  Added `DelayedRenderer<T>.CanonicalChainComparer` and
    `DelayedActionRenderer<T>.CanonicalChainComparer` properties.
    [[#1155], [#1165], [#1184]]
 -  Added `TotalDifficultyComparer` class.  [[#1155], [#1165], [#1170], [#1184]]
 -  Added `IStagePolicy<T>` interface.  [[#1130], [#1131], [#1186]]
 -  Added `VolatileStagePolicy<T>` class.  [[#1130], [#1131], [#1136], [#1186]]
 -  Added `ITransport` interface.  [[#1052]]
 -  Added `NetMQTransport` class which implements `ITransport`.  [[#1052]]
 -  Added `Message` abstract class.  [[#1052]]
 -  Added `BlockExceedingTransactionsException` class.  [[#1104], [#1110]]
 -  Added `BlockChain<T>.GetStagedTransactionIds()` method.  [[#1089]]
 -  (Libplanet.RocksDBStore) Added `maxTotalWalSize`, `keepLogFileNum` and
    `maxLogFileSize` parameters into `RocksDBStore()` constructor.
    [[#1065], [#1102], [#1132]]
 -  Added `Swarm<T>.BlockDemand` property.  [[#1068], [#1102]]
 -  Added `BlockDemand` struct.  [[#1068], [#1102]]
 -  Added `TurnClient.PublicAddress` property.  [[#1074], [#1102]]
 -  Added `TurnClient.EndPoint` property.  [[#1074], [#1102]]
 -  Added `TurnClient.BehindNAT` property.  [[#1074], [#1102]]
 -  Added `TurnClient.InitializeTurnAsync(int, CancellationToken)` method.
    [[#1074], [#1102]]
 -  Added `TurnClient.StartAsync(int, CancellationToken)` method.
    [[#1074], [#1102]]
 -  Added `TurnClient.ReconnectTurn(int, CancellationToken)` method.
    [[#1074], [#1102]]
 -  Added `TurnClient.IsConnectable(CancellationToken)` method.
    [[#1074], [#1102]]
 -  Added `TurnClient.ReconnectTurn(CancellationToken)` method.
    [[#1074], [#1102]]
 -  Added `Libplanet.Blockchain.Renderers.Debug.RenderRecord<T>` abstract class
    and its subclasses:  [[#1119]]
     -  `RenderRecord<T>.ActionBase` abstract class
     -  `RenderRecord<T>.ActionSuccess` class
     -  `RenderRecord<T>.ActionError` class
     -  `RenderRecord<T>.BlockBase` abstract class
     -  `RenderRecord<T>.Block` class
     -  `RenderRecord<T>.Reorg` class
 -  Added `Libplanet.Blockchain.Renderers.Debug.RecordingActionRenderer<T>`
    class.  [[#1119]]
 -  Added `Libplanet.Blockchain.Renderers.Debug.ValidatingActionRenderer<T>`
    class.  [[#1119]]
 -  Added `Libplanet.Blockchain.Renderers.Debug.InvalidRenderException<T>`
    class.  [[#1119]]
 -  Added `InvalidBlockProtocolVersionException` class.  [[#1142], [#1147]]
 -  Added `InvalidBlockTxHashException` class.  [[#1116]]
 -  Added `Swarm<T>.PeerStates` property.  [[#1120]]
 -  Added `IProtocol` interface.  [[#1120]]
 -  Added `KademliaProtocol` class which implements `IProtocol`.
    [[#1120], [#1135]]
 -  Added `reorgResistantHeight` parameters into `DelayedActionRenderer<T>()`
    constructor.  [[#1163]]
 -  Added `InvalidBlockPreEvaluationHashException` class.  [[#1148]]
 -  Added the parameter `validate` which is `true` by default,
    to `Transaction<T>.Deserialize()`.  [[#1149]]
 -  Added `SwarmOptions.MessageLifespan` property.  [[#1171]]
 -  Added `InvalidTimestampException` class.  [[#1171]]
 -  Added `PeerState.Peer` Property.  [[#1215]]
 -  Added `SwarmOptions.RefreshPeriod` property,
    which is 10 seconds by default.  [[#1215]]
 -  Added `SwarmOptions.RefreshLifespan` property,
    which is 60 seconds by default.  [[#1215]]

### Behavioral changes

 -  Upgraded *Bencodex* package (which is a dependency) so that Libplanet gets
    benefits from its recent optimizations.
    [[#1081], [#1084], [#1086], [#1101]]
 -  Introduced the [protocol versioning scheme][#1142].  This purposes to change
    the protocol without breaking backward compatibility.  Even the protocol
    is changed, the existing blocks made before the new protocol are guaranteed
    to behave as it had done.
    [[#1142], [#1147], [#1155] [#1162], [#1170], [#1184]]
 -  Since `BlockHeader.ProtocolVersion` was added, the existing blocks are
    considered protocol compliant with the protocol version zero.
    [[#1142], [#1147], [#1162]]
 -  When a `BlockChain<T>` follows `VolatileStagePolicy<T>`, which is
    Libplanet's the only built-in `IStagePolicy<T>` implementation at
    the moment, as its `StagePolicy`, its staged transactions are no longer
    persistent but volatile instead.  It also automatically purges staged
    transactions after the given `Lifetime`, which is 3 hours by default.
    [[#1130], [#1131], [#1136], [#1186]]
 -  `Swarm<T>` became not to receive states from trusted peers.
    [[#1061], [#1102]]
 -  `Swarm<T>` became not to retry when block downloading.  [[#1062], [#1102]]
 -  Improved performance of `BlockChain<T>.MineBlock()`.  [[#1116], [#1124]]
 -  Improved performance of `Block<T>.Deserialize()`.  [[#1116]]
 -  `Swarm<T>` became not to fill states from trusted peers, because now states
    can be validated rather than trusted due to MPT.  [[#1117]]
 -  `HashDigest<SHA256>` became serializable.  [[#795], [#1125]]
 -  `Transaction<T>()` constructors became not to validate itself.  [[#1149]]
 -  `BlockChain<T>.Append()` became to validate the given `Block<T>`
    before storing its `StateRootHash`.  [[#1172]]
 -  `Blockchain<T>` became not to stage transactions having nonce
    less than or equal to the nonce of the same signer's latest
    transaction in already mined blocks.  [[#1173], [#1180], [#1186]]
 -  Improved security of `Message.Parse()`.  [[#1161], [#1181]]
 -  Improved performance of `BlockChain<T>.Fork()`.  [[#1198]]
 -  `Swarm<T>` became not to call `KademliaProtocol.RebuildConnectionAsync()`
    right after `Swarm<T>.StartAsync()`.  If you called
    `Swarm<T>.BootstrapAsync()` before `Swarm<T>.StartAsync()`,
    peers in your table may not have you in their table right after
    `Swarm<T>.StartAsync()` (which was almost guaranteed before).  [[#1208]]
 -  Peers added during `Swarm<T>.BootstrapAsync()` before
    `Swarm<T>.StartAsync()` are now marked as stale so that
    `Swarm<T>.RefreshTableAsync()` will update.  [[#1215]]
 -  Following classes became to leave log messages with its class as logging
    context.  [[#1218]]
     -  `TrieStateStore` class
     -  `TurnClient` class
     -  `ActionEvaluation` class

### Bug fixes

 -  Fixed a bug where `BlockChain<T>.MineBlock()` was not automatically
    cancelled when the tip of the chain was changed occasionally.  [[#1141]]
 -  Fixed a bug where blocks with invalid `PreEvaluationHash` was considered
    as a valid block.  [[#1148], [#1202]]
 -  Fixed a vulnerability of the `IAccountStateDelta.TransferAsset()`'s
    internal implementation that it had doubled recipient's balance when
    a sender and a recipient is the same.
    *Since this changes the protocol, for backward compatibility, the actions
    belonging to the existing block, which was mined before the protocol v1,
    are guaranteed to still behave as it had done.  [[#1152]]
 -  Fixed a bug where `Block<T>.Evaluate()` hadn't validate its hash.  [[#1168]]
 -  Fixed memory leak due to undisposed `CancellationTokenSource`s.
    [[#1182], [#1212]]
 -  Fixed a bug where `TurnClient` hadn't released its relay connections after
    reconnecting.  [[#1185]]

### CLI tools

 -  `planet mpt diff` command became to take 4 arguments (which was 3)
    so that it can compare state root hashes from two different
    <abbr title="key–value">KV</abbr> stores.  The existing commands
    like `planet mpt diff STORE A B` do not work anymore,
    and these should be instead like `planet mpt diff STORE A STORE B`.
    [[#1129]]
 -  Store aliases used by `planet mpt` became to disallow names looking like
    URIs to disambiguate aliases from the literal store URIs.  [[#1129]]
 -  Added new subcommands `planet mpt list` and `planet mpt query`.  [[#1137]]
 -  `planet mpt diff` command became to print the differences between
    other state root hashes into stdout as JSON format.
    [[#1138], [#1191], [#1233]]

[#795]: https://github.com/planetarium/libplanet/issues/795
[#1052]: https://github.com/planetarium/libplanet/pull/1052
[#1061]: https://github.com/planetarium/libplanet/pull/1061
[#1062]: https://github.com/planetarium/libplanet/pull/1062
[#1065]: https://github.com/planetarium/libplanet/pull/1065
[#1068]: https://github.com/planetarium/libplanet/pull/1068
[#1070]: https://github.com/planetarium/libplanet/pull/1070
[#1074]: https://github.com/planetarium/libplanet/pull/1074
[#1081]: https://github.com/planetarium/libplanet/pull/1081
[#1084]: https://github.com/planetarium/libplanet/pull/1084
[#1086]: https://github.com/planetarium/libplanet/pull/1086
[#1089]: https://github.com/planetarium/libplanet/pull/1089
[#1101]: https://github.com/planetarium/libplanet/pull/1101
[#1102]: https://github.com/planetarium/libplanet/pull/1102
[#1110]: https://github.com/planetarium/libplanet/pull/1110
[#1112]: https://github.com/planetarium/libplanet/pull/1112
[#1116]: https://github.com/planetarium/libplanet/pull/1116
[#1117]: https://github.com/planetarium/libplanet/pull/1117
[#1119]: https://github.com/planetarium/libplanet/pull/1119
[#1120]: https://github.com/planetarium/libplanet/pull/1120
[#1124]: https://github.com/planetarium/libplanet/pull/1124
[#1125]: https://github.com/planetarium/libplanet/pull/1125
[#1129]: https://github.com/planetarium/libplanet/pull/1129
[#1130]: https://github.com/planetarium/libplanet/issues/1130
[#1131]: https://github.com/planetarium/libplanet/pull/1131
[#1132]: https://github.com/planetarium/libplanet/pull/1132
[#1135]: https://github.com/planetarium/libplanet/pull/1135
[#1136]: https://github.com/planetarium/libplanet/pull/1136
[#1137]: https://github.com/planetarium/libplanet/pull/1137
[#1138]: https://github.com/planetarium/libplanet/issues/1138
[#1141]: https://github.com/planetarium/libplanet/pull/1141
[#1142]: https://github.com/planetarium/libplanet/issues/1142
[#1143]: https://github.com/planetarium/libplanet/pull/1143
[#1147]: https://github.com/planetarium/libplanet/pull/1147
[#1148]: https://github.com/planetarium/libplanet/issues/1148
[#1149]: https://github.com/planetarium/libplanet/issues/1149
[#1152]: https://github.com/planetarium/libplanet/pull/1152
[#1155]: https://github.com/planetarium/libplanet/issues/1155
[#1160]: https://github.com/planetarium/libplanet/issues/1160
[#1161]: https://github.com/planetarium/libplanet/issues/1161
[#1162]: https://github.com/planetarium/libplanet/pull/1162
[#1163]: https://github.com/planetarium/libplanet/pull/1163
[#1165]: https://github.com/planetarium/libplanet/pull/1165
[#1168]: https://github.com/planetarium/libplanet/pull/1168
[#1170]: https://github.com/planetarium/libplanet/pull/1170
[#1171]: https://github.com/planetarium/libplanet/pull/1171
[#1172]: https://github.com/planetarium/libplanet/pull/1172
[#1173]: https://github.com/planetarium/libplanet/issues/1173
[#1180]: https://github.com/planetarium/libplanet/pull/1180
[#1181]: https://github.com/planetarium/libplanet/pull/1181
[#1182]: https://github.com/planetarium/libplanet/pull/1182
[#1183]: https://github.com/planetarium/libplanet/issues/1183
[#1184]: https://github.com/planetarium/libplanet/pull/1184
[#1185]: https://github.com/planetarium/libplanet/pull/1185
[#1186]: https://github.com/planetarium/libplanet/pull/1186
[#1191]: https://github.com/planetarium/libplanet/pull/1191
[#1194]: https://github.com/planetarium/libplanet/pull/1194
[#1198]: https://github.com/planetarium/libplanet/pull/1198
[#1202]: https://github.com/planetarium/libplanet/pull/1202
[#1204]: https://github.com/planetarium/libplanet/pull/1204
[#1208]: https://github.com/planetarium/libplanet/pull/1208
[#1212]: https://github.com/planetarium/libplanet/pull/1212
[#1215]: https://github.com/planetarium/libplanet/pull/1215
[#1218]: https://github.com/planetarium/libplanet/pull/1218
[#1233]: https://github.com/planetarium/libplanet/pull/1233


Version 0.10.3
--------------

Released on January 28, 2021.

 -  `BlockChain<T>.MineBlock()` became to unstage transactions that have lower
    nonce than expected.  [[#1174]]

[#1174]: https://github.com/planetarium/libplanet/pull/1174


Version 0.10.2
--------------

Released on November 25, 2020.

 -  Fixed `BlockChain<T>.Append()` method's bug that it had accepted
    a `Block<T>` having more `Transactions` than the number specified by
    the `IBlockPolicy<T>.MaxTransactionsPerBlock` property.  Now it throws
    `InvalidBlockException` instead for such case.  [[#1104]]

[#1104]: https://github.com/planetarium/libplanet/pull/1104


Version 0.10.1
--------------

Released on November 24, 2020.

 -  `Transaction<T>.Id` property became lazy-loaded and cached if it's once
    loaded.  (It had been loaded when the object is instantiated.)
    [[#1079], [#1080]]
 -  The result bytes of `Transaction<T>.Serialize()` became cached
    under the hood.  [[#1079, #1080]]
 -  Fixed `BlockChain<T>.MineBlock()` method's bug which excludes one's
    all transactions virtually forever after a signer's transactions once have
    been staged without the ascending order of nonce (usually due to their
    inconsistent propagation latency on the network).  [[#1057], [#1059]]
 -  `BlockChain<T>.MineBlock()` method became to cut off staged transactions
    to mine if it takes longer than 4 seconds to collect and validate them.
    Those rest staged transactions are postponed until next block mining.
    [[#1057], [#1059]]
 -  `BlockChain<T>.ContainsBlock()` method was optimized so that it does not
    needlessly load an entire block, but looks up only an index instead.
    [[#1057], [#1059]]
 -  `BlockChain<T>` became not to validate genesis block during fork,
    where the state store is not an implementation of `IBlockStatesStore`.
    [[#1063]]
 -  Fixed a bug where `Swarm<T>.GetPeerChainStateAsync()` has thrown
    `NullReferenceException` when peers in table does failed to respond.
    [[#1066]]
 -  Fixed a bug where `BlockChain<T>` had not locked readers–writer lock for
    state changes during `MineBlock()`.  [[#1077], [#1087]]
 -  `PolymorphicAction<T>.ToString()` became more human-readable.
    [[#1085], [#1087]]
 -  Fixed a bug where `MerkleTrie` had had `MrrkleTrie.EmptyRootHash` as root
    node, which had been unable to insert new nodes.  [[#1087], [#1091]]

[#1057]: https://github.com/planetarium/libplanet/pull/1057
[#1059]: https://github.com/planetarium/libplanet/pull/1059
[#1063]: https://github.com/planetarium/libplanet/pull/1063
[#1066]: https://github.com/planetarium/libplanet/pull/1066
[#1077]: https://github.com/planetarium/libplanet/pull/1077
[#1079]: https://github.com/planetarium/libplanet/pull/1079
[#1080]: https://github.com/planetarium/libplanet/pull/1080
[#1085]: https://github.com/planetarium/libplanet/pull/1085
[#1087]: https://github.com/planetarium/libplanet/pull/1087
[#1091]: https://github.com/planetarium/libplanet/pull/1091


Version 0.10.0
--------------

Released on October 27, 2020.

### Backward-incompatible API changes

 -  Extracted rendering methods from `IAction` to `IRenderer<T>`,
    which is introduced in this version.
    From now on, rendering logic needs to be *injected* from outside
    through `BlockChain<T>.Renderers`, rather than `IAction`s knowing
    how to render themselves.
    `IRenderer<T>` also unified `BlockChain<T>.TipChanged` event,
    and introduced new events like `IActionRenderer<T>.RenderActionError()`,
    `IActionRenderer<T>.RenderBlockEnd()`, `IRenderer<T>.RenderReorg()`, and
    `IRenderer<T>.RenderReorgEnd()`.
    [[#860], [#875], [#959], [#963]]
     -  Removed `IAction.Render()` method, which was replaced by
        `IActionRenderer<T>.RenderAction()`.
     -  Removed `IAction.Unrender()` method, which was replaced by
        `IActionRenderer<T>.UnrenderAction()`.
     -  Removed `BlockChain<T>.TipChanged` event, which was replaced by
        `IRenderer<T>.RenderBlock()`.
     -  Removed `PolymorphicAction<T>.Render()` and `Unrender()` methods.
     -  Removed `BlockChain<T>.TipChangedEventArgs` class.
 -  Added methods related fungible asset states to `IAccountStateDelta`:
    [[#861], [#900], [#954]]
     -  `UpdatedFungibleAssetsAccounts` property
     -  `MintAsset(Address, Currency, BigInteger)` method
     -  `TransferAsset(Address, Address, Currency, BigInteger)` method
     -  `BurnAsset(Address, Currency, BigInteger)` method
     -  `GetBalance(Address, Currency)` method
 -  Added `IAccountStateDelta.StateUpdatedAddresses` property in order to
    distinguish state updates from asset states.  [[#861], [#900]]
 -  Added an optional parameter `AccountBalanceGetter accountBalanceGetter` to
    `Block<T>.EvaluateActionsPerTx()` method.  [[#861], [#900]]
 -  `BlockChain<T>.StageTransaction()` became to throw
    `InvalidTxGenesisHashException` when it takes a `Transaction<T>` from
    a heterogeneous `BlockChain<T>` with a different genesis block.
    [[#796], [#878]]
 -  Added `renderers` optional parameter to `BlockChain<T>()` constructor.
    [[#883], [#959], [#963]]
 -  Added `BigInteger`-typed `totalDifficulty` parameter to `Block<T>()`
    constructor.  [[#666], [#917]]
 -  Added `BigInteger`-typed `previousTotalDifficulty` parameter to
    `Block<T>.Mine()` static method.  [[#666], [#917]]
 -  Added `options` optional parameter to `Swarm<T>()` constructor.
    [[#926]]
 -  `ICryptoBackend` became to `ICryptoBackend<T>`.  [[#932]]
 -  `ICryptoBackend.Verify(HashDigest<SHA256>, byte[], PublicKey)` became to
    `ICryptoBackend<T>.Verify(HashDigest<T>, byte[], PublicKey)` [[#932]]
 -  Added `ICryptoBackend<T>.Sign(HashDigest<T>, PrivateKey)` method.
    [[#932]]
 -  `DefaultCryptoBackend` became to `DefaultCryptoBackend<T>`.  [[#932]]
 -  Added `ImmutableArray<byte>`-typed `preEvaluationHash` parameter to
    `BlockHeader` constructor.  [[#931], [#935]]
 -  Added `HashDigest<SHA256>`-typed `preEvaluationHash` parameter to
    `Block<T>()` constructor.  [[#931], [#935]]
 -  Replaced `SerializationInfoExtensions.GetValueOrDefault<T>()` to
    `SerializationInfoExtensions.TryGetValue<T>()`.  [[#940]]
 -  Added `bool append = true` option to both `BlockChain<T>.MineBlock()`
    overloaded methods.  Although this breaks ABI-level backward compatibility
    (i.e., you need to rebuild your assemblies), still is backward-compatible at
    API-level as the option is turned on by default.  [[#946]]
 -  Added `int? maxTransactions` option to both `BlockChain<T>.MineBlock()`
    overloaded methods.
    Although this breaks ABI-level backward compatibility (i.e., you need to
    rebuild your assemblies), still is backward-compatible at API-level as
    the option is turned on by default.  [[#1037], [#1039], [#1050]]
 -  Added `StateCompleterSet<T>? stateCompleters` option to two
    `BlockChain<T>.Append()` overloaded methods.  Although this breaks ABI-level
    backward compatibility (i.e., you need to rebuild your assemblies), still
    is backward-compatible at API-level as the option has the default value
    (`StateCompleterSet<T>.Recalculate`).  [[#946]]
 -  Added `CancellationToken cancellationToken = default(CancellationToken)`
    option to `BlockChain<T>.MineBlock(Address miner)` overloaded method.
    Although this breaks ABI-level backward compatibility (i.e., you need to
    rebuild your assemblies), still is backward-compatible at API-level as
    the option has the default value.  [[#946]]
 -  Added `IImmutableSet<Address> trustedStateValidators = null` option to both
    `Swarm<T>.StartAsync()` overloaded methods.  Although this breaks ABI-level
    backward compatibility (i.e., you need to rebuild your assemblies), still
    is backward-compatible at API-level as the option is turned on by default.
    [[#946]]
 -  Removed `Peer.AppProtocolVersion` property.  [[#949]]
 -  Removed `Peer.IsCompatibleWith()` method.  [[#949]]
 -  Replaced `Peer(PublicKey, AppProtocolVersion)` constructor with
    `Peer(PublicKey)` constructor.  [[#949]]
 -  Replaced `BoundPeer(PublicKey, DnsEndPoint, AppProtocolVersion)` constructor
    with `Peer(PublicKey, DnsEndPoint)` constructor.  [[#949]]
 -  Extracted `IStore`'s some methods dedicated to block states into
    `IBlockStatesStore`.  [[#950]]
     -  `ListStateKeys()` method.
     -  `ListAllStateReferences()` method.
     -  `LookupStateReference()` method.
     -  `IterateStateReferences()` method.
     -  `StoreStateReference()` method.
     -  `ForkStateReferences()` method.
     -  `GetBlockStates()` method.
     -  `SetBlockStates()` method.
     -  `PruneBlockStates()` method.
 -  The signature of `IStore.LookupStateReference<T>(Guid, string, Block<T>)`
    method was changed to `LookupStateReference(Guid, string, long)`.  [[#950]]
 -  Added `IStateStore`-typed `stateStore` to `BlockChain<T>` constructor.
    [[#950]]
 -  Replaced `Swarm<T>.FindSpecificPeerAsync(Address, Address, int,
    BoundPeer, TimeSpan?, CancellationToken)` method with
    `Swarm<T>.FindSpecificPeerAsync(Address, int, TimeSpan?,
    CancellationToken)`.  [[#981]]
 -  Added `IActionContext.GetUnconsumedContext()` method.  [[#980]]
 -  Added `ImmutableArray<byte>`-typed `stateRootHash` parameter to
    `BlockHeader` constructor.  [[#986]]
 -  Added `HashDigest<SHA256>`-typed `stateRootHash` parameter to
    `Block<T>()` constructor.  [[#986]]
 -  Added `IBlockPolicy<T>.MaxTransactionsPerBlock` property.
    [[#1037], [#1050]]
 -  Added `IBlockPolicy<T>.GetMaxBlockBytes()` method.  [[#201], [#1050]]
 -  `IBlockPolicy<T>.DoesTransactionFollowPolicy()` method became to take
    additional `BlockChain<T>` parameter as its context.  [[#1012]]
 -  Methods in `BlockPolicy<T>` class became `virtual`.  [[#1010]]
 -  Added `int maxTransactionsPerBlock` option to both `BlockPolicy<T>()`
    overloaded constructors.  [[#1037], [#1050]]
 -  Added `int maxBlockBytes` and `int maxGenesisBytes` options to both
    `BlockPolicy<T>()` overloaded constructors.  [[#201], [#1050]]
 -  `BlockPolicy<T>()` constructor's `doesTransactionFollowPolicy` parameter
    became `Func<Transaction<T>, BlockChain<T>, bool>` on .  [[#1012]]
 -  Added `cacheSize` optional parameter to `BlockSet<T>()` constructor.
    [[#1013]]
 -  Removed `Address(SerializationInfo, StreamingContext)` constructor.
    [[#1022]]
 -  Removed constructors from `InvalidMessageException` class.  [[#1021]]

### Backward-incompatible network protocol changes

 -  The message field `RecentStates.StateReferences` became to
    `IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>>` from
    `IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>`.
    [[#912]]
 -  The existing `RecentStates` message type (with the type number `0x0f`) was
    replaced by a new `RecentStates` message type
    (with the type number `0x13`).  [[#912]]
 -  Added `BlockHeader.TotalDifficulty` property.  [[#666], [#917]]
 -  The existing `Pong` message type (with the type number `0x02`) was
    replaced by a new `Pong` message type
    (with the type number `0x14`).  [[#459], [#919], [#920], [#930]]
 -  The `TimestampThreshold` between `Block<T>`s was changed from 15 minutes to
    15 seconds.  [[#922], [#925]]
 -  `Swarm<T>` became to have 5 more message types:
     -  `GetChainStatus` (`0x20`)  [[#920], [#930]]
     -  `ChainStatus` (`0x24`)  [[#920], [#930], [#1003], [#1004]]
     -  `GetBlockStates` (`0x22`)  [[#946]]
     -  `BlockStates` (`0x23`)  [[#946]]
     -  `DifferentVersion` (`0x30`)  [[#949]]
 -  Every message now contains app protocol version in its header.  [[#949]]
 -  The existing `BlockHeaderMessage` message type (with the type number `0x0d`)
    was replaced by a new `BlockHeaderMessage` message type
    (with the type number `0x0c`).  [[#1003], [#1004]]
 -  Removed `PreloadBlockDownloadFailEventArgs` class.  [[#1002]]
 -  Removed `blockDownloadFailed` parameter from `Swarm<T>.PreloadAsync()`
    method.  Use `SwarmOptions.BlockDownloadTimeout` instead.  [[#1002]]

### Backward-incompatible storage format changes

 -  Added `RawTransaction<T>.GenesisHash` property.  [[#796], [#878]]
 -  Added `BlockHeader.TotalDifficulty` property.  [[#666], [#917]]

### Added APIs

 -  Added `Currency` struct.  [[#861], [#900], [#954]]
 -  Added `FungibleAssetValue` struct.  [[#861], [#944], [#954]]
 -  Added `AccountBalanceGetter` delegate.  [[#861], [#900], [#954]]
 -  Added `TurnClient.BindProxies()` method.  [[#756], [#868]]
 -  Added `ActionEvaluation.Exception` property.  [[#860], [[#875]]]
 -  Added `InvalidTxGenesisHashException` class.  [[#796], [#878]]
 -  Added `InvalidBlockBytesLengthException` class.  [[#201], [#1050]]
 -  Added `CurrencyPermissionException` class.  [[#861], [#900]]
 -  Added `InsufficientBalanceException` class.  [[#861], [#900], [#954]]
 -  Added `BlockChain<T>.GetBalance()` method.  [[#861], [#900]]
 -  Added `Block<T>.TotalDifficulty` property.  [[#666], [#917]]
 -  Added `Block<T>.BytesLength` property.  [[#201], [#1050]]
 -  Added `SwarmOptions` class.  [[#926]]
 -  Added `PeerChainState` struct.  [[#936]]
 -  Added `Swarm<T>.GetPeerChainStateAsync()` method.  [[#936]]
 -  Added `Swarm<T>.LastMessageTimestamp` property.  [[#964]]
 -  Added `Block<T>.PreEvaluationHash` property.  [[#931], [#935]]
 -  Added `BlockHeader.PreEvaluationHash` property.  [[#931], [#935]]
 -  Added `Transaction<T>.BytesLength` property.  [[#201], [#1050]]
 -  Added `HashDigest(ImmutableArray<byte>)` constructor.  [[#931], [#935]]
 -  Incomplete block states became able to be handled in more flexible way.
    [[#929], [#934], [#946], [#954]]
     -  Replaced `BlockChain<T>.GetState(Address, HashDigest<SHA256>?, bool)`
        method with `GetState(Address, HashDigest<SHA256>?, StateCompleter<T>)`
        method.  Specifying `completeStates: true` and `false` can be replaced
        by `stateCompleter: StateCompleters<T>.Recalculate` and
        `StateCompleters<T>.Reject`, respectively.
     -  Replaced
        `BlockChain<T>.GetBalance(Address, Currency, HashDigest<SHA256>?, bool)`
        method with
        `GetState(Address, Currency, HashDigest<SHA256>?, StateCompleter<T>)`
        method.  Specifying `completeStates: true` and `false` can be replaced
        by `stateCompleter: FungibleAssetStateCompleters<T>.Recalculate` and
        `FungibleAssetStateCompleters<T>.Reject`, respectively.
     -  Added `StateCompleter<T>` delegate.
     -  Added `FungibleAssetStateCompleter<T>` delegate.
     -  Added `StateCompleterSet<T>` struct.
     -  Added `StateCompleters<T>` static class.
     -  Added `FungibleAssetStateCompleters<T>` static class.
     -  Added `Swarm<T>.GetTrustedStateCompleterAsync()` method.
 -  Added `IRenderer<T>` interface.  [[#959], [#963]]
 -  Added `IActionRenderer<T>` interface.  [[#959], [#967], [#970]]
 -  Added `AnonymousRenderer<T>` class.  [[#959], [#963]]
 -  Added `AnonymousActionRenderer<T>` interface.  [[#959], [#967], [#970]]
 -  Added `DelayedRenderer<T>` class.  [[#980], [#1029]]
 -  Added `DelayedActionRenderer<T>` class.  [[#980], [#1029]]
 -  Added `LoggedRenderer<T>` class.  [[#959], [#963]]
 -  Added `LoggedActionRenderer<T>` interface.  [[#959], [#967], [#970]]
 -  Added `BlockChain<T>.Renderers` property.  [[#945], [#959], [#963]]
 -  Added `BlockChain<T>.ActionRenderers` property.  [[#959], [#967], [#970]]
 -  Added `Swarm<T>.AppProtocolVersion` property.  [[#949]]
 -  `DefaultStore` became to implement `IBlockStatesStore`.  [[#950]]
 -  Added `IStateStore` interface.  [[#950]]
 -  Added `IBlockStatesStore` interface.  [[#950]]
 -  Added `TrieStateStore` class.  [[#939]]
 -  Added `ITrie` interface.  [[#939], [#1023]]
 -  Added `MerkleTrie` class.  [[#939], [#1023]]
 -  Added `IKeyValueStore` interface.  [[#939]]
 -  Added `DefaultKeyValueStore` class.  [[#939]]
 -  Added `CacheableKeyValueStore` class.  [[#939]]
 -  (Libplanet.RocksDBStore) `RocksDBStore` became to implement
    `IBlockStatesStore`.  [[#950]]
 -  (Libplanet.RocksDBStore) Added `RocksDBKeyValueStore`.  [[#939]]
 -  Added `InvalidBlockStateRootHashException` class.  [[#986]]
 -  Added `Block<T>.StateRootHash` property.  [[#986]]
 -  Added `BlockHeader.StateRootHash` property.  [[#986]]
 -  Added `MerkleTrieExtensions` static class.  [[#1023]]
 -  Added `IAccountStateDelta.PreviousStateRootHash` property to
    calculate states until previous action as state root hash.  [[#1030]]
 -  Added `UnexpectedlyTerminatedActionException.PreviousStateRootHash`
    property.  [[#1032]]

### Behavioral changes

 -  Improved performance of `Swarm<T>`.
     -  Multiplexed response and broadcast.  [[#858], [#859]]
     -  Reduced internal delays.  [[#871], [#879]]
 -  `Transaction<T>.Create()`, `Transaction<T>.EvaluateActions()` and
    `Transaction<T>.EvaluateActionsGradually()` no longer throw
    `UnexpectedlyTerminatedActionException` directly.  Instead, it records
    an exception to `ActionEvaluation`s.  [[#860], [#875]]
 -  Added `Transaction<T>.GenesisHash` property.  [[#796], [#878]]
 -  Added `IAccountStateDelta.UpdatedAddresses` property contains
    asset updates besides state updates.  [[#861], [#900]]
 -  `BlockChain<T>.Append()` method became to throw
    `InvalidBlockBytesLengthException` if the given block's serialized bytes
    is longer than the limitation configured by
    `IBlockPolicy.GetMaxBlockBytes()`.  [[#201], [#1050]]
 -  `BlockChain<T>.MineBlock()` method became to cut off transactions to include
    to fit into the limitation configured by `IBlockPolicy.GetMaxBlockBytes()`.
    [[#201], [#1050]]
 -  `Swarm<T>` became to ignore received transaction with different
    genesis hash.  [[#796], [#878]]
 -  `Swarm<T>` became to ignore invalid `BlockHeader`s immediately.  [[#898]]
 -  `Swarm<T>.PreloadAsync()` became to clean up only temporary chains.
    [[#902]]
 -  `BlockPolicy<T>` became to validate `Block<T>.TotalDifficulty` property
    of a `Block<T>`.  [[#666], [#917]]
 -  `Swarm<T>` became to preload from peer that has the most difficult chain.
    [[#459], [#919]]
 -  `Swarm<T>` became to promote the most difficult chain as a canonical chain
    instead of the longest chain.  [[#459], [#919]]
 -  `Swarm<T>.BootstrapAsync()` method became not to throw `TimeoutException`
    when it fails to connect to all neighbors.  [[#933]]
 -  `Swarm<T>` became to respond to the messages with different app protocol
    version.  [[#949]]
 -  `Swarm<T>.PreloadAsync()` became to execute the actions from the branchpoint
    rather than the genesis block when there is a branch point.  [[#991]]
 -  `BlockPolicy<T>` became to validate `Block<T>.StateRootHash` property
     of a `Block<T>`.  [[#986]]
 -  `Swarm<T>` became not to sync `Block<T>`s from the peers with
    different genesis block.  [[#1003], [#1004]]
 -  `Swarm<T>` became to ignore `BlockHeaderMessage` from the peers with
    different genesis block.  [[#1003], [#1004]]
 -  `BlockChain<T>` instead of `BlockPolicy<T>` became to validate `Block<T>`s
    to append so that even if an empty implementation of `IBlockPolicy<T>` is
    used `Block<T>`s are unable to be appended to `BlockChain<T>`.  [[#1010]]
 -  `BlockSet<T>[HashDigest<SHA256>]` and `BlockChain<T>.Genesis` became cached
    so that they become faster to get.  [[#1013]]
 -  `Swarm<T>.PreloadAsync()` became to do not render blocks.  [[#1029]]

### Bug fixes

 -  Fixed a bug that `Swarm<T>` had failed to receive a request from TURN relay
    connections.  [[#404], [#871], [#890]]
 -  Fixed a bug where `Swarm<T>` had been terminated and never reconnected when
    it had been once disconnected from TURN (mostly due to [sleep mode], etc.).
    [[#909]]
 -  Fixed a bug in which pre-computed state delivery had failed when a state
    key is not an `Address` when preloading.  [[#912]]
 -  Fixed a bug where `UnexpectedlyTerminatedException` hadn't been serialized
    with `BinaryFormatter`.  [[#913]]
 -  Fixed a bug where `TurnClient` hadn't applied cancellation token to its
    connections.  [[#916]]
 -  Fixed a bug where `BlockChain<T>.GetRawState()` had overwritten block states
    without read lock.  [[#927]]
 -  Fixed a bug that `Swarm<T>` had not respond to `GetRecentStates` message
    when the target block does not exist in the chain.  [[#941]]
 -  Fixed a bug that `Swarm<T>.StartAsync()` had not worked after
    `Swarm<T>.StopAsync()` was once called.  [[#965]]
 -  Fixed a bug that `TurnClient` had thrown `InvalidOperationException` when
    reconnecting.  [[#957], [#972]]
 -  Fixed a bug that `Swarm<T>` had not received block headers after failing
    to receive previous blocks.  [[#996]]
 -  Fixed a bug that `Swarm<T>` had thrown `InvalidGenesisBlockException`
    when reorg its chain repeatedly.  [[#996]]
 -  Fixed a bug that `Swarm<T>` had propagated invalid transactions.
    [[#1043]]

### Static analyzer

 -  Introduced the *Libplanet.Analyzers* package, a Roslyn Analyzer, which
    checks if code has common mistakes prone to made with Libplanet-powered
    game apps, e.g., breaking determinism in `IAction` implementations.
    [[#1034]]

### CLI tools

 -  The `planet` command became installable using `npm`.  [[#923], [#982]]
 -  Fixed a bug that <kbd>^H</kbd> had not removed the rightmost character
    in passphrase prompts.  [[#983], [#984]]
 -  Added a new sub-command `planet mpt`.  [[#1023], [#1026]]
 -  Introduced a configuration file.  It's placed in:  [[#1023], [#1026]]
     -  Linux/macOS: *<var>$XDG_CONFIG_HOME</var>/planetarium/cli.json*
     -  Windows: *<var>%AppData%</var>\planetarium\cli.json*

[#201]: https://github.com/planetarium/libplanet/issues/201
[#404]: https://github.com/planetarium/libplanet/issues/404
[#459]: https://github.com/planetarium/libplanet/issues/459
[#666]: https://github.com/planetarium/libplanet/issues/666
[#756]: https://github.com/planetarium/libplanet/issues/756
[#796]: https://github.com/planetarium/libplanet/issues/796
[#858]: https://github.com/planetarium/libplanet/issues/858
[#859]: https://github.com/planetarium/libplanet/pull/859
[#860]: https://github.com/planetarium/libplanet/issues/860
[#861]: https://github.com/planetarium/libplanet/issues/861
[#868]: https://github.com/planetarium/libplanet/pull/868
[#871]: https://github.com/planetarium/libplanet/issues/871
[#875]: https://github.com/planetarium/libplanet/pull/875
[#878]: https://github.com/planetarium/libplanet/pull/878
[#879]: https://github.com/planetarium/libplanet/pull/879
[#883]: https://github.com/planetarium/libplanet/pull/883
[#890]: https://github.com/planetarium/libplanet/pull/890
[#898]: https://github.com/planetarium/libplanet/pull/898
[#900]: https://github.com/planetarium/libplanet/pull/900
[#902]: https://github.com/planetarium/libplanet/pull/902
[#909]: https://github.com/planetarium/libplanet/pull/909
[#912]: https://github.com/planetarium/libplanet/pull/912
[#913]: https://github.com/planetarium/libplanet/pull/913
[#916]: https://github.com/planetarium/libplanet/pull/916
[#917]: https://github.com/planetarium/libplanet/pull/917
[#919]: https://github.com/planetarium/libplanet/pull/919
[#920]: https://github.com/planetarium/libplanet/issues/920
[#922]: https://github.com/planetarium/libplanet/issues/922
[#923]: https://github.com/planetarium/libplanet/pull/923
[#925]: https://github.com/planetarium/libplanet/pull/925
[#926]: https://github.com/planetarium/libplanet/pull/926
[#927]: https://github.com/planetarium/libplanet/pull/927
[#929]: https://github.com/planetarium/libplanet/issues/929
[#930]: https://github.com/planetarium/libplanet/pull/930
[#931]: https://github.com/planetarium/libplanet/issues/931
[#932]: https://github.com/planetarium/libplanet/pull/932
[#933]: https://github.com/planetarium/libplanet/pull/933
[#934]: https://github.com/planetarium/libplanet/pull/934
[#935]: https://github.com/planetarium/libplanet/pull/935
[#936]: https://github.com/planetarium/libplanet/pull/936
[#939]: https://github.com/planetarium/libplanet/pull/939
[#940]: https://github.com/planetarium/libplanet/pull/940
[#941]: https://github.com/planetarium/libplanet/pull/941
[#944]: https://github.com/planetarium/libplanet/issues/944
[#945]: https://github.com/planetarium/libplanet/pull/945
[#946]: https://github.com/planetarium/libplanet/pull/946
[#949]: https://github.com/planetarium/libplanet/pull/949
[#950]: https://github.com/planetarium/libplanet/pull/950
[#957]: https://github.com/planetarium/libplanet/issues/957
[#959]: https://github.com/planetarium/libplanet/issues/959
[#954]: https://github.com/planetarium/libplanet/pull/954
[#963]: https://github.com/planetarium/libplanet/pull/963
[#964]: https://github.com/planetarium/libplanet/pull/964
[#965]: https://github.com/planetarium/libplanet/pull/965
[#967]: https://github.com/planetarium/libplanet/issues/967
[#970]: https://github.com/planetarium/libplanet/pull/970
[#972]: https://github.com/planetarium/libplanet/pull/972
[#980]: https://github.com/planetarium/libplanet/pull/980
[#981]: https://github.com/planetarium/libplanet/pull/981
[#982]: https://github.com/planetarium/libplanet/pull/982
[#983]: https://github.com/planetarium/libplanet/issues/983
[#984]: https://github.com/planetarium/libplanet/pull/984
[#986]: https://github.com/planetarium/libplanet/pull/986
[#991]: https://github.com/planetarium/libplanet/pull/991
[#996]: https://github.com/planetarium/libplanet/pull/996
[#1002]: https://github.com/planetarium/libplanet/pull/1002
[#1003]: https://github.com/planetarium/libplanet/issues/1003
[#1004]: https://github.com/planetarium/libplanet/pull/1004
[#1010]: https://github.com/planetarium/libplanet/pull/1010
[#1012]: https://github.com/planetarium/libplanet/pull/1012
[#1013]: https://github.com/planetarium/libplanet/pull/1013
[#1021]: https://github.com/planetarium/libplanet/pull/1021
[#1022]: https://github.com/planetarium/libplanet/pull/1022
[#1023]: https://github.com/planetarium/libplanet/pull/1023
[#1026]: https://github.com/planetarium/libplanet/pull/1026
[#1029]: https://github.com/planetarium/libplanet/pull/1029
[#1030]: https://github.com/planetarium/libplanet/pull/1030
[#1032]: https://github.com/planetarium/libplanet/pull/1032
[#1034]: https://github.com/planetarium/libplanet/pull/1034
[#1037]: https://github.com/planetarium/libplanet/pull/1037
[#1039]: https://github.com/planetarium/libplanet/pull/1039
[#1043]: https://github.com/planetarium/libplanet/pull/1043
[#1050]: https://github.com/planetarium/libplanet/pull/1050
[sleep mode]: https://en.wikipedia.org/wiki/Sleep_mode


Version 0.9.5
-------------

Released on June 12, 2020.

 -  Fixed a bug that had not properly received block hashes after the chain had
    reorged.  [[#880], [#905]]

[#905]: https://github.com/planetarium/libplanet/pull/905


Version 0.9.4
--------------

Released on June 2, 2020.

 -  (Libplanet.RocksDBStore) Fixed a bug that  `RocksDBStore.DeleteChainId()`
    method had thrown `KeyNotFoundException` when there's no such chain ID.
    [[#891]]
 -  (Libplanet.RocksDBStore) Fixed a bug that `RocksDBStore` had written logs
    into the incorrect context `DefaultContext`, not `RocksDBStore`
    the correct one.  [[#891]]

[#891]: https://github.com/planetarium/libplanet/pull/891


Version 0.9.3
-------------

Released on May 29, 2020.

 -  Fixed a `Swarm<T>.PreloadAsync()` method's bug that had hanged in a state
    downloading block hashes and finally unexpectedly terminated when a peer's
    chain had gotten reorged.   [[#880], [#884]]

[#880]: https://github.com/planetarium/libplanet/issues/880
[#884]: https://github.com/planetarium/libplanet/pull/884


Version 0.9.2
-------------

Released on May 20, 2020.

 -  (Libplanet.RocksDBStore) Fixed a memory leak bug in `RocksDBStore`.
    [[#870]]

[#870]: https://github.com/planetarium/libplanet/pull/870


Version 0.9.1
-------------

Released on May 7, 2020.

 -  Fixed a bug where the canonical chain had changed if any actions had thrown
    an exception during `Swarm<T>.PreloadAsync()`.  [[#862]]
 -  Fixed a `Swarm<T>.PreloadAsync()` method's bug that it had hung forever and
    raised `InvalidOperationException`.  [[#847], [#864]]

[#847]: https://github.com/planetarium/libplanet/issues/847
[#862]: https://github.com/planetarium/libplanet/pull/862
[#864]: https://github.com/planetarium/libplanet/pull/864


Version 0.9.0
-------------

Released on April 27, 2020.

### Backward-incompatible API changes

 -  `BaseStore` class became to implement `IDisposable`.  [[#789]]
 -  Removed `IStore.DeleteIndex(Guid, HashDigest<SHA256>)` method.  [[#802]]
 -  Extension classes was renamed.  However, it would not be affected
    if you have called it by using instance method syntax.  [[#803]]
     -  Renamed `StunAddressExtension` class to `StunAddressExtensions`.
     -  Renamed `BytesConvertExtension` class to `BytesConvertExtensions`.
     -  Renamed `RandomExtension` class to `RandomExtensions`.
     -  Renamed `AddressExtension` class to `AddressExtensions`.
     -  Renamed `HashDigestExtension` class to `HashDigestExtensions`.
     -  Renamed `NetMQFrameExtension` class to `NetMQFrameExtensions`.
     -  Renamed `NetMQSocketExtension` class to `NetMQSocketExtensions`.
     -  Renamed `SerializationInfoExtension` class to
        `SerializationInfoExtensions`.
     -  Renamed `StoreExtension` class to `StoreExtensions`.
 -  All parameters, fields, property, and method return values that had been
    represented as an `Int32` became retyped to `AppProtocolVersion`.
    [[#266], [#815]]
     -  `Swarm()` constructor's parameter `appProtocolVersion` became
        `AppProtocolVersion` (was `Int32`).
     -  `Peer()` and `BoundPeer()` constructors' parameter `appProtocolVersion`
        became `AppProtocolVersion` (was `Int32`).
     -  `Peer.AppProtocolVersion` property became `AppProtocolVersion`
        (was `Int32`).
     -  `DifferentProtocolVersionEventArgs.ExpectedVersion` and
        `DifferentProtocolVersionEventArgs.ActualVersion` properties became
        `AppProtocolVersion` (was `Int32`).
     -  Removed `DifferentAppProtocolVersionException` class.
 -  `Swarm()` constructor's `EventHandler<DifferentProtocolVersionEventArgs>
    differentVersionPeerEncountered = null` parameter became replaced by
    `DifferentAppProtocolVersionEncountered
    differentAppProtocolVersionEncountered = null` parameter.  [[#266], [#815]]
 -  Added `IEnumerable<PublicKey> trustedAppProtocolVersionSigners = null`
    parameter to `Swarm()` constructor.  [[#266], [#815]]
 -  Removed `DifferentProtocolVersionEventArgs` class.  [[#266], [#815]]
 -  Removed `createdAt` parameter from `Swarm()` constructor.  [[#838]]
 -  Replaced `BlockChain<T>.StageTransactions()` with `.StageTransaction()`
    that receives only one transaction.  [[#820]]
 -  Replaced `BlockChain<T>.UnstageTransactions()` with `.UnstageTransaction()`
    that receives only one transaction.  [[#820]]
 -  Added `IBlockPolicy.DoesTransactionFollowPolicy()` method which is a method
    to determine if a transaction follows the block policy.  [[#827]]

### Backward-incompatible network protocol changes

 -  The existing `BlockHashes` message type (with the type number `0x05`) was
    replaced by a new `BlockHashes` message type (with type number `0x0e`)
    in order to include an offset block index besides block hashes
    so that a receiver is able to determine their block indices too.
    [[#707], [#798]]
 -  `Peer` became to have 3 more fields to represent the whole fields of
    `AppProtocolVersion`, which is newly introduced.  [[#266], [#815]]
 -  The existing `RecentStates` message type (with the type number `0x0c`) was
    replaced by a new `RecentStates` message type (with type number `0x0f`)
    in order to compress its states.  [[#700], [#850]]

### Added APIs

 -  Added `AddressExtensions.ToAddress(this PrivateKey)` overloaded extension
    method.  [[#825]]
 -  Added `BlockHashDownloadState` class, a subclass of `PreloadState`.
    [[#707], [#798]]
 -  Added `BlockVerificationState` class, a subclass of `PreloadState`.
    [[#798]]
 -  Added `AppProtocolVersion` struct.  [[#266], [#815]]
 -  Added `IKeyStore` interface.  [[#831]]
 -  Added `Web3KeyStore` class.  [[#831]]
 -  Added `BlockDigest` struct.  [[#785]]
 -  Added `BlockHeader` struct.  [[#785]]
 -  Added `IStore.GetBlockDigest(HashDigest<SHA256>)` method.  [[#785]]
 -  Added `Block<T>.ToBlockDigest()` method.  [[#785]]
 -  Added `ByteArrayExtensions` class.  [[#803]]
 -  Added `IStore.PruneBlockStates<T>(Guid, Block<T>)` method.  [[#790]]
 -  Added `DifferentAppProtocolVersionEncountered` delegate.  [[#266], [#815]]
 -  Added `Swarm<T>.TrustedAppProtocolVersionSigners` property.
    [[#266], [#815]]
 -  Added `Peer.IsCompatibleWith()` method.  [[#266], [#815]]
 -  Added `TxViolatingBlockPolicyException` class.  [[#827]]
 -  Added `KeyStoreException` class.  [[#831]]
 -  Added `NoKeyException` class.  [[#831]]

### Behavioral changes

 -  `BlockChain.MineBlock()` method became to ignore transactions having
    lower nonce than the expected nonce in the chain.  [[#791]]
 -  `Swarm<T>.PreloadAsync()` and `Swarm<T>.StartAsync()` became to download
    only a list of block hashes first and then download blocks from
    simultaneously multiple peers.  [[#707], [#798]]
 -  Improved performance of `Swarm<T>` by preventing unnecessary task
    creation.  [[#817], [#837]]
 -  Improved performance of `Swarm<T>.PreloadAsync()` by parallelizing
    connections.  [[#846]]
 -  Improved response throughput of `Swarm<T>`.  [[#849]]

### Bug fixes

 -  `Swarm<T>` became not to sync the same `Block<T>`s or `Transaction<T>`s
    multiple times.  [[#784]]
 -  Fixed a `Swarm<T>`'s bug that had broadcasted a message to its source peer
    when the number of peers is not enough (less than the minimum number).
    [[#788]]
 -  Fixed a bug where `BlockChain.MineBlock()` had produced an invalid block
    when there is any staged transaction which has lower nonce than the expected
    nonce, that means, shares an already taken nonce by the same signer.
    [[#791]]
 -  Fixed a `Swarm<T>.PreloadAsync()` method's bug that temporary chain IDs
    in the store had been completely cleaned up in some corner cases
    if `cancellationToken` was requested.  [[#798]]
 -  Fixed a bug where `Swarm<T>` had crashed if it received invalid
    `Transaction<T>` from the nodes.  [[#820]]
 -  Fixed a bug where `Swarm<T>` hadn't reported `IProgress<PreloadState>`s
    correctly.[[#839]]
 -  Fixed a `Swarm<T>.PreloadAsync()` method's bug that it had hung forever
    when a block failed to be fetched due to an unexpected inner exception.
    [[#839]]
 -  Fixed a bug where actions had been evaluated twice when receiving blocks.
    [[#843], [#844]]
 -  Fixed `OverflowException` being thrown when a `passphrase` containing
    any non-ASCII characters was passed to `Pbkdf2.Derive()` method or
    `ProtectedPrivateKey.Protect()` method.  [[#845]]

### CLI tools

 -  Added the `planet` command and its alias `dotnet planet`.

[#266]: https://github.com/planetarium/libplanet/issues/266
[#700]: https://github.com/planetarium/libplanet/issues/700
[#707]: https://github.com/planetarium/libplanet/pull/707
[#784]: https://github.com/planetarium/libplanet/pull/784
[#785]: https://github.com/planetarium/libplanet/pull/785
[#788]: https://github.com/planetarium/libplanet/pull/788
[#789]: https://github.com/planetarium/libplanet/pull/789
[#790]: https://github.com/planetarium/libplanet/pull/790
[#791]: https://github.com/planetarium/libplanet/pull/791
[#798]: https://github.com/planetarium/libplanet/pull/798
[#802]: https://github.com/planetarium/libplanet/pull/802
[#803]: https://github.com/planetarium/libplanet/pull/803
[#815]: https://github.com/planetarium/libplanet/pull/815
[#817]: https://github.com/planetarium/libplanet/issues/817
[#820]: https://github.com/planetarium/libplanet/pull/820
[#825]: https://github.com/planetarium/libplanet/pull/825
[#827]: https://github.com/planetarium/libplanet/pull/827
[#831]: https://github.com/planetarium/libplanet/pull/831
[#837]: https://github.com/planetarium/libplanet/pull/837
[#838]: https://github.com/planetarium/libplanet/pull/838
[#839]: https://github.com/planetarium/libplanet/pull/839
[#843]: https://github.com/planetarium/libplanet/issues/843
[#844]: https://github.com/planetarium/libplanet/pull/844
[#845]: https://github.com/planetarium/libplanet/pull/845
[#846]: https://github.com/planetarium/libplanet/pull/846
[#849]: https://github.com/planetarium/libplanet/pull/849
[#850]: https://github.com/planetarium/libplanet/pull/850


Version 0.8.0
-------------

Released on February 4, 2020.

### Backward-incompatible API changes

 -  The internal representation for state keys became `string` (was `Address`).
    [[#368], [#774]]
     -  The return type of `IStore.GetBlockStates()` method became
        `IImmutableDictionary<string, IValue>` (was `AddressStateMap`,
        which was removed too).  [[#368], [#774]]
     -  The type of the second parameter of `IStore.SetBlockStates()` method
        became `IImmutableDictionary<string, IValue>` (was `AddressStateMap`,
        which was removed too).  [[#368], [#774]]
     -  The second parameter of `IStore.IterateStateReferences()` method became
        `string key` (was `Address address`).  [[#368], [#774]]
     -  The second parameter of `IStore.StoreStateReference()` method became
        `IImmutableSet<string> keys` (was `IImmutableSet<Address> addresses`).
        [[#368], [#774]]
     -  `IStore.ListAddresses()` method was replaced by `IStore.ListStateKeys()`
        method.  [[#368], [#774]]
 -  Added `Swarm<T>.FindSpecificPeer()` method to find a specific peer given
    the address.  [[#570], [#580]]
 -  Removed `LiteDBStore` class.  Use `DefaultStore` instead.  [[#662]]
 -  Removed `BlockChain<T>.Contains(TxId)` method.
    Use `IStore.ContainsTransaction(TxId)` instead.  [[#676]]
 -  Renamed `BlockChain<T>.Contains(HashDigest<SHA256>)` method to
    `BlockChain<T>.ContainsBlock(HashDigest<SHA256>)`.  [[#678]]
 -  Removed `BlockChain<T>.Contains(Block<T>)` method.  [[#678]]
 -  Changed semantics of `BlockChain<T>.ContainsBlock(HashDigest<SHA256>)`
    method and `BlockChain<T>[HashDigest<SHA256>]` indexer as lookups only
    the current chain, not entire storage.  [[#678]]
 -  Added `IStore.ContainsBlock(HashDigest<SHA256>)` method.  [[#678]]
 -  Removed `AddressStateMap` class.  [[#98], [#368], [#692], [#774]]
     -  The return type of `BlockChain<T>.GetState()` method became `IValue`
        (was `AddressStateMap`).
     -  The return type of `IStore.GetBlockStates()` method became
        `IImmutableDictionary<string, IValue>` (was `AddressStateMap`).
     -  `IStore.SetBlockStates()` method became to take
        `IImmutableDictionary<string, IValue>` instead of `AddressStateMap`.
 -  `Swarm<T>.PreloadAsync()` method and `Swarm<T>.StartAsync()` method became
    to take `preloadBlockDownloadFailed` event handler as an argument.
    [[#694]]
 -  Added the `genesisBlock` parameter to
    `BlockChain<T>()` constructor.  [[#688]]
 -  Removed `StateReferenceDownloadState` class.  [[#703]]
 -  Removed `BlockStateDownloadState` class.  [[#703]]
 -  Removed `TxReceived` and `BlockReceived` `AsyncAutoResetEvent`s
    from `Swarm<T>`.  [[#705], [#725]]
 -  Added `workers` optional parameter into `Swarm<T>()` constructor.
    [[#613], [#727]]
 -  `Block<T>` class became not to implement `ISerializable`.  [[#751]]
 -  `Transaction<T>` class became not to implement `ISerializable`.  [[#751]]
 -  `Block<T>.ToBencodex()` became to return `Bencodex.Types.Dictionary`.
    [[#751]]
 -  `Transaction<T>.ToBencodex()` became to return `Bencodex.Types.Dictionary`.
    [[#751]]
 -  Removed `Block<T>.FromBencodex(byte[])` method.  [[#751]]
 -  Removed `Transaction<T>.FromBencodex(byte[])` method.  [[#751]]
 -  `Block<T>.ToBencodex()` became to take no arguments.  [[#749], [#757]]
 -  Removed `Swarm<T>.BroadcastBlocks(IEnumerable<Block<T>>)` method.  [[#764]]
 -  `StoreExtension.LookupStateReference<T>()` method was replaced by
    `IStore.LookupStateReference<T>()` method.  [[#722], [#774]]

### Backward-incompatible network protocol changes

 -  Added `long`-typed `offset` parameter to `RecentStates` and
    `GetRecentStates` messages.  [[#703]]
 -  Added `int`-typed `iteration` parameter to `RecentStates` message.
    [[#703]]
 -  Added `BlockHeaderMessage` message.  [[#764]]

### Backward-incompatible storage format changes

 -  The introduced `DefaultStore` is incompatible at the file-level with
    the `LiteDBStore` which had existed.  `DefaultStore` became to take
    a directory instead of a single file, and it consists of multiple
    subdirectories and a LiteDB file for indices.  [[#662], [#680]]

### Added APIs

 -  Added `DefaultStore` class to replace `LiteDBStore`.  [[#662]]
 -  Added `IStore.ListAllStateReferences<T>()` method.  [[#701], [#703]]
 -  Added `IStore.ListStateKeys()` method to replace `IStore.ListAddresses()`
    method.  [[#368], [#774]]
 -  Added `IStore.LookupStateReference<T>()` method to replace
    `StoreExtension.LookupStateReference<T>()` method.  [[#368], [#722], [#774]]
 -  Added `BlockChain<T>.Genesis` property.  [[#688]]
 -  Added `BlockChain<T>.MakeGenesisBlock()` static method.  [[#688]]
 -  Added `InvalidGenesisBlockException` class.  [[#688]]
 -  Added `StateDownloadState` class, a subclass of `PreloadState`,
    which reports state preloading iteration progress.  [[#703]]
 -  Added `PeerDiscoveryException` class which inherits `SwarmException`
    class.  [[#604], [#726]]
 -  Added `Swarm<T>.Peers` property which returns an enumerable of peers in
    `Swarm<T>`'s routing table.  [[#739]]
 -  Added `Block<T>.Serialize()` method which returns `byte[]`.  [[#751]]
 -  Added `Transaction<T>.Serialize()` method which returns `byte[]`.  [[#751]]
 -  Added `Block<T>(Bencodex.Types.Dictionary)` constructor.  [[#751]]
 -  Added `Transaction<T>(Bencodex.Types.Dictionary)` constructor.  [[#751]]
 -  Added `Block<T>.Deserialize(byte[])` method.  [[#751]]
 -  Added `Transaction<T>.Deserialize(byte[])` method.  [[#751]]
 -  Added `StoreExtension.Copy(this IStore, IStore)` extension method.  [[#753]]
 -  Added a `HashDigest<SHA256>?`-typed `TxHash` property which digests
    all transactions in the block to `Block<T>` class.  [[#749], [#757]]
 -  Added `CryptoConfig` class.  [[#758]]
 -  Added `ICryptoBackend` class.  [[#758]]
 -  Added `DefaultCryptoBackend` class.  [[#758]]
 -  Added `Swarm<T>.BroadcastBlock(Block<T>)` method.  [[#764]]
 -  Added `Swarm<T>.PeerStates` property.  [[#772]]
 -  Added `PeerState` class which represents a `Peer`s state in the
    routing table.  [[#772]]
 -  Added `Swarm<T>.CheckAllPeersAsync()` method.  [[#772]]

### Behavioral changes

 -  `Swarm<T>` became to compare only peer's addresses instead of public keys
    to determine if a peer is in routing table or not.  [[#665]]
 -  When `Swarm<T>.PreloadAsync()` method fails to download blocks,
    `Swarm<T>` became to call `preloadBlockDownloadFailed` event handler
    taken as an argument.  If the event handler is not present, `Swarm<T>`
    throws `SwarmException`.  [[#694]]
 -  `Swarm<T>.PreloadAsync()` became not to sync state references and block
    states at once.  [[#703]]
 -  `Swarm<T>` became to print less logs on debug level during sending states.
    [[#706]]
 -  Increased `Swarm<T>`'s network timeout value, in order to be stable
    a high latency internet connection.  [[#709]]
 -  `Swarm<T>.BootstrapAsync()` became to report `PeerDiscoveryException`
    instead of `SwarmException` directly.  [[#604], [#726]]
 -  `BlockChain<T>.Append()` became to unstage the staged `Transaction<T>`s
    that have lower nonce than the highest nonce of the same signer's
    transactions in the same chain, since these virtually never become valid.
    [[#721], [#728]]
 -  `Swarm<T>` became not to fill blocks if received block hashes are
    continuous.  [[#732]]
 -  `Swarm<T>` became to can process more requests at once by creating TURN
    relaying proxy concurrently.  [[#744]]
 -  `Swarm<T>` became to throw `InvalidGenesisBlockException` when receiving
    block from the nodes that have a different genesis block.  [[#746]]
 -  `Swarm<T>` became to distinguish the starting stages clearly.
    In other words, `Swarm<T>.StartAsync()` became not to call
    `Swarm<T>.PreloadAsync()`.  [[#735], [#760]]
 -  The hash of `Block<T>` has changed due to the change in the method of
    serialization.  [[#762]]
 -  `Swarm<T>` became to ignore broadcasted block that has lower index than
    the current tip.  [[#764]]
 -  The way `Swarm<T>` chose peers to spread messages has changed.
    [[#765], [#767]]
     -  If there are less than 10 peers in the routing table, select all peers.
     -  If there are more than 10 peers in the routing table,
        choose one from each bucket, and if the number is less than 10,
        then select an additional peers so that the total is 10.

### Bug fixes

 -  Fixed a bug where the canonical chain could be deleted if `Swarm<T>` failed
    to download blocks due to network connection.  [[#675]]
 -  Fixed bug that re-download block from scratch in preloading.  [[#685]]
 -  Fixed a bug where state references become outdated if a chain is forked
    and then adding existing blocks into it.  [[#704]]
 -  Fixed a bug where `Swarm<T>` had exhausted all available sockets.  [[#709]]
 -  Fixed a bug where `Swarm<T>` had infinitely repeated failed requests.
    [[#709]]
 -  Fixed a bug where `Swarm<T>` hadn't stopped properly.  [[#709]]
 -  Fixed a bug where `Swarm<T>.BootstrapAsync()` had stopped due to trivial
    (recoverable) `TimeoutException`s.  [[#715], [#716]]
 -  Fixed a bug where `BlockChain<T>.GetNextTxNonce()` had returned invalid tx
    nonce.  [[#718]]
 -  Fixed a bug where mined transactions were staged again.  [[#719]]
 -  Fixed a bug where `Block<T>.Hash` property, `Block<T>.Mine()` method,
    `Block<T>.FromBencodex()` method, `Block<T>.ToBencodex()` method,
    `Transaction<T>.Id` property, `Transaction<T>.Signature` property,
    `Transaction<T>.Create()` method, `Transaction<T>.FromBencodex()` method,
    and `Transaction<T>.ToBencodex()` method had been non-deterministic on
    some `CultureInfo.CurrentCulture` (e.g., `ar_SA`, `fr_FR`, `th_TH`)
    so that it had caused network protocol incompatibilities.
    [[#734]]
 -  Fixed a bug where the states became empty between the tip of the peer to
    receive the states and the tip of the downloaded block.  [[#736]]
 -  Fixed a bug where `Swarm<T>.StartAsync()` had thrown
    `NullReferenceException` when `host` parameter is present on the outside
    of NAT.  [[#744]]
 -  Fixed a bug where `Swarm<T>` had failed to request a TURN relay when it has
    an IPv6 address.  [[#744]]
 -  Fixed a bug where `DefaultStore` had invalid state references cache after
    fork.  [[#759]]
 -  Fixed a bug where `BlockChain<T>` had rendered and evaluated actions in
    the genesis block during forking.  [[#763]]
 -  Fixed a `Swam<T>`'s bug that some `Transaction<T>`s had become excluded from
    mining `Block<T>`s after reorg from α to β where a `Transaction<T>` was once
    included by a `Block<T>` (α) and not included by an other `Block<T>` (β) for
    the same `Index` due to the latency gap between nodes.  [[#775]]
 -  Fixed a bug where `TransactionSet` and `BlockSet` has halt whole process
    when run `Trace.Assert()`.  [[#806], [#833]]

[#368]: https://github.com/planetarium/libplanet/issues/368
[#570]: https://github.com/planetarium/libplanet/issues/570
[#580]: https://github.com/planetarium/libplanet/pull/580
[#604]: https://github.com/planetarium/libplanet/issues/604
[#613]: https://github.com/planetarium/libplanet/issues/613
[#662]: https://github.com/planetarium/libplanet/pull/662
[#665]: https://github.com/planetarium/libplanet/pull/665
[#675]: https://github.com/planetarium/libplanet/pull/675
[#676]: https://github.com/planetarium/libplanet/pull/676
[#678]: https://github.com/planetarium/libplanet/pull/678
[#680]: https://github.com/planetarium/libplanet/pull/680
[#685]: https://github.com/planetarium/libplanet/pull/685
[#688]: https://github.com/planetarium/libplanet/pull/688
[#692]: https://github.com/planetarium/libplanet/pull/692
[#694]: https://github.com/planetarium/libplanet/pull/694
[#701]: https://github.com/planetarium/libplanet/pull/701
[#703]: https://github.com/planetarium/libplanet/pull/703
[#704]: https://github.com/planetarium/libplanet/pull/704
[#705]: https://github.com/planetarium/libplanet/issues/705
[#706]: https://github.com/planetarium/libplanet/pull/706
[#709]: https://github.com/planetarium/libplanet/pull/709
[#715]: https://github.com/planetarium/libplanet/issues/715
[#716]: https://github.com/planetarium/libplanet/pull/716
[#718]: https://github.com/planetarium/libplanet/pull/718
[#719]: https://github.com/planetarium/libplanet/pull/719
[#721]: https://github.com/planetarium/libplanet/issues/721
[#722]: https://github.com/planetarium/libplanet/pull/722
[#725]: https://github.com/planetarium/libplanet/pull/725
[#726]: https://github.com/planetarium/libplanet/pull/726
[#727]: https://github.com/planetarium/libplanet/pull/727
[#728]: https://github.com/planetarium/libplanet/pull/728
[#732]: https://github.com/planetarium/libplanet/pull/732
[#734]: https://github.com/planetarium/libplanet/pull/734
[#735]: https://github.com/planetarium/libplanet/issues/735
[#736]: https://github.com/planetarium/libplanet/pull/736
[#739]: https://github.com/planetarium/libplanet/pull/739
[#744]: https://github.com/planetarium/libplanet/pull/744
[#746]: https://github.com/planetarium/libplanet/pull/746
[#749]: https://github.com/planetarium/libplanet/issues/749
[#751]: https://github.com/planetarium/libplanet/pull/751
[#753]: https://github.com/planetarium/libplanet/pull/753
[#757]: https://github.com/planetarium/libplanet/pull/757
[#758]: https://github.com/planetarium/libplanet/pull/758
[#759]: https://github.com/planetarium/libplanet/pull/759
[#760]: https://github.com/planetarium/libplanet/pull/760
[#762]: https://github.com/planetarium/libplanet/pull/762
[#763]: https://github.com/planetarium/libplanet/pull/763
[#764]: https://github.com/planetarium/libplanet/pull/764
[#765]: https://github.com/planetarium/libplanet/issues/765
[#767]: https://github.com/planetarium/libplanet/pull/767
[#772]: https://github.com/planetarium/libplanet/pull/772
[#774]: https://github.com/planetarium/libplanet/pull/774
[#775]: https://github.com/planetarium/libplanet/pull/775
[#806]: https://github.com/planetarium/libplanet/issues/806
[#833]: https://github.com/planetarium/libplanet/pull/833


Version 0.7.0
-------------

Released on November 8, 2019.

### Backward-incompatible interface changes

 -  Renamed `minValue`/`maxValue` parameters to `lowerBound`/`upperBound` of
    `IRandom.Next()` methods.  [[#555], [#558]]
 -  Renamed `IStore.IterateIndex()` method to `IterateIndexes()`.
    [[#462], [#560]]
 -  `Swarm<T>` class became to implement `IDisposable` again and should be
    disposed to clean up its internal resources.  [[#485]]
 -  `IStore.IterateStateReferences()` method became to receive
    `highestIndex`, `lowestIndex`, and `limit` parameters.  [[#447], [#545]]
 -  Reworked `BlockChain<T>.GetStates()` into `GetState()` which takes only
    one `Address` instead of `IEnumerable<Address>`.  [[#510], [#563]]
 -  Types of `IAction.PlainValue` and states became restricted to
    `Bencodex.Types.IValue`.  [[#541], [#552]]
     -  `IAction.LoadPlainValue(IImmutableDictionary<string, object>)` method
        became replaced by `LoadPlainValue(IValue)`.
     -  `AccountStateGetter` became to return `IValue`, not `object`.
     -  Added `BencodexExtension` static class.
 -  Removed `BlockChain<T>.Blocks`.  [[#409], [#583]]
 -  Removed `BlockChain<T>.Transactions`.  [[#409], [#583]]
 -  Removed the `linger` parameter from the `Swarm<T>()` constructor, and added
    the `waitFor` parameter to `Swarm<T>.StopAsync()` method instead.  [[#581]]
 -  Removed the `dialTimeout` parameter from the `Swarm<T>`() constructor, and
    added it to `Swarm<T>.PreloadAsync()` & `Swarm<T>.StartAsync()` methods.
    [[#581]]
 -  Removed `broadcast` parameter from `BlockChain<T>.MakeTransaction()` method.
    [[#609]]
 -  `BlockChain<T>` does not implement `IReadOnlyList<T>` anymore.  [[#630]]
     -  Added `BlockChain<T>.Count` property.  [[#630]]
     -  Removed `BlockChain<T>.LongCount()` method.  [[#630]]
     -  Removed `BlockChain<T>.Validate()` method.  [[#630]]
     -  Removed `BlockChain<T>.GetEnumerate()` method.  [[#630]]
     -  Removed `BlockPolicyExtension.ValidateBlocks()` method.  [[#630]]
     -  `IBlockPolicy<T>.GetNextBlockDifficulty()` method became to receive
        `BlockChain<T>` instead of `IReadOnlyList<Block<T>>`.  [[#630]]
     -  `IBlockPolicy<T>.ValidateNextBlock()` method became to receive
        `BlockChain<T>` instead of `IReadOnlyList<Block<T>>`.  [[#630]]

### Added interfaces

 -  Added `ProtectedPrivateKey` class.  [[#577], [#614]]
 -  Added `IncorrectPassphraseException` class.  [[#577], [#614]]
 -  Added `MismatchedAddressException` class.  [[#577], [#614]]
 -  Added `KeyJsonException` abstract class.  [[#577], [#614]]
 -  Added `InvalidKeyJsonException` class.  [[#577], [#614]]
 -  Added `UnsupportedKeyJsonException` class.  [[#577], [#614]]
 -  Added `ICipher` interface.  [[#577], [#614]]
 -  Added `Aes128Ctr` class.  [[#577], [#614]]
 -  Added `IKdf` interface.  [[#577], [#614]]
 -  Added `Pbkdf2` class.  [[#577], [#614]]
 -  Added `Scrypt` class.  [[#642], [#654]]
 -  Added `BlockChain<T>.LongCount()` method.  [[#575]]
 -  Added `BlockChain<T>[HashDigest<T>]` indexer.  [[#409], [#583]]
 -  Added `BlockChain<T>.Contains(HashDigest<T>)` method.  [[#409], [#583]]
 -  Added `BlockChain<T>.GetTransaction(TxId)` method.  [[#409], [#583]]
 -  Added `BlockChain<T>.Contains(TxId)` method.  [[#409], [#583]]
 -  Added `ByteUtil.Hex(ImmutableArray<byte>)` overloaded method.  [[#614]]
 -  Added `BlockChain<T>.Contains(Block<T>)` method.  [[#630]]
 -  Added `BlockDownloadState.SourcePeer` property.  [[#636]]

### Behavioral changes

 -  Changed to send `Pong` before updating the message sender to the routing
    table when `Ping` is received.  [[#566]]
 -  Improved performance of `StoreExtension.LookupStateReference<T>()` method.
    [[#447], [#545]]
 -  Added .NET Core 2.2 as a targeted framework.  [[#209], [#561]]
 -  `TurnClient.AcceptRelayedStreamAsync()` became to ignore disconnected
    connections.  [[#469]]
 -  `Swarm<T>.PreloadAsync()` became to ignore peers with lower tip.  [[#592]]
 -  `Swarm<T>` became to validate only stale peers.  [[#568], [#593]]
 -  `Swarm<T>` became not to check cached peers immediately after
    removing peers from its routing table.  Instead, it checks cached peers
    periodically.  [[#608]]
 -  Marked `Address` and `HashDigest` as readonly.  [[#610]]
 -  `IceServer.CreateTurnClient()` became to throw `ArgumentException` when
    received invalid url.  [[#622]]
 -  `Swarm<T>` became to update peer table when receiving messages that are
    not related with [Kademlia protocol][Kademlia].  [[#594], [#627]]
 -  `Swarm<T>` became not to check least recently used peer every time when
    new peer is fetched.  [[#627]]
 -  `IAction` became guaranteed that the given
    `IActionContext.PreviousStates.GetState()` never throws
    `IncompleteBlockStatesException`.  Instead, now it may calculate the
    incomplete states from the beginning if necessary.  [[#645]]
 -  `IStore.PutBlock<T>()` became to do nothing when it takes
    the `Block<T>` more than once.  [[#647]]
 -  `Swarm<T>.PreloadAsync()` became to try downloading blocks from all neighbor
    peers, even if any peer among them is unavailable to send blocks.  [[#636]]

### Bug fixes

 -  Fixed a bug where `Swarm<T>` had tried to update a peer infinitely when
    the peer is evicted from its table.  [[#566]]
 -  Fixed a bug where `Swarm<T>.AppendBlocksAsync()` re-requests blocks that
    already received when blockchain is empty.  [[#550], [#562]]
 -  Fixed a bug that `Swarm<T>` had thrown `SocketException` with a message
    `Operation on non-blocking socket would block`.  [[#405], [#485]]
 -  Fixed a bug that accessed all blocks from the genesis block when a swap
    occurred.  [[#575]]
 -  Fixed a bug that `Swarm<T>` had thrown `InvalidBlockIndexException` during
    synchronizing with other reorganized peer.  [[#528], [#576]]
 -  Fixed a bug where `Swarm<T>` does not render actions in blocks which are
    filled from other peers.  [[#579]]
 -  Fixed a bug where `Swarm<T>` renders actions in same block multiple times
    when reorg happens.  [[#579]]
 -  `LiteDBStore` became to guarantee atomicity of storing blocks.  [[#584]]
 -  Fixed a bug that `BlockChain<T>` had appended a block even if fails to
    evaluate.  [[#591]]
 -  Fixed a bug where `Swarm<T>` hadn't removed stale peers.
    [[#568], [#593], [#602]]
 -  Fixed a bug that `TurnClient` had thrown `IOException` when accepting
    connection through a TURN relay server.  [[#453], [#599]]
 -  Fixed a bug that `KeyNotFoundException` occurred when sending a message
    through the TurnClient.
 -  Fixed a bug where `BlockChain<T>.GetNextTxNonce` only returned the same
    nonce when transactions with an old nonce were staged.  [[#637]]
 -  Fixed a bug that `BlockChain<T>` had reset when `Swarm<T>.PreloadAsync()`
    fails.  [[#644]]
 -  Fixed bug that whole processes could halt when received an invalid
    type of message.  [[#628], [#641]]
 -  Fixed a bug that received blocks could not be processed if a branch point
    is a stale block.  [[#655]]

[#209]: https://github.com/planetarium/libplanet/issues/209
[#405]: https://github.com/planetarium/libplanet/issues/405
[#409]: https://github.com/planetarium/libplanet/issues/409
[#447]: https://github.com/planetarium/libplanet/issues/447
[#453]: https://github.com/planetarium/libplanet/issues/453
[#462]: https://github.com/planetarium/libplanet/issues/462
[#469]: https://github.com/planetarium/libplanet/pull/469
[#485]: https://github.com/planetarium/libplanet/pull/485
[#510]: https://github.com/planetarium/libplanet/issues/510
[#528]: https://github.com/planetarium/libplanet/issues/528
[#541]: https://github.com/planetarium/libplanet/issues/541
[#545]: https://github.com/planetarium/libplanet/pull/545
[#550]: https://github.com/planetarium/libplanet/issues/550
[#552]: https://github.com/planetarium/libplanet/pull/552
[#555]: https://github.com/planetarium/libplanet/issues/555
[#558]: https://github.com/planetarium/libplanet/pull/558
[#560]: https://github.com/planetarium/libplanet/pull/560
[#561]: https://github.com/planetarium/libplanet/pull/561
[#562]: https://github.com/planetarium/libplanet/pull/562
[#563]: https://github.com/planetarium/libplanet/pull/563
[#566]: https://github.com/planetarium/libplanet/pull/566
[#568]: https://github.com/planetarium/libplanet/issues/568
[#575]: https://github.com/planetarium/libplanet/pull/575
[#576]: https://github.com/planetarium/libplanet/pull/576
[#577]: https://github.com/planetarium/libplanet/issues/577
[#579]: https://github.com/planetarium/libplanet/pull/579
[#581]: https://github.com/planetarium/libplanet/pull/581
[#583]: https://github.com/planetarium/libplanet/pull/583
[#584]: https://github.com/planetarium/libplanet/pull/584
[#591]: https://github.com/planetarium/libplanet/pull/591
[#592]: https://github.com/planetarium/libplanet/pull/592
[#593]: https://github.com/planetarium/libplanet/pull/593
[#594]: https://github.com/planetarium/libplanet/issues/594
[#599]: https://github.com/planetarium/libplanet/pull/599
[#602]: https://github.com/planetarium/libplanet/pull/602
[#608]: https://github.com/planetarium/libplanet/pull/608
[#609]: https://github.com/planetarium/libplanet/pull/609
[#610]: https://github.com/planetarium/libplanet/pull/610
[#614]: https://github.com/planetarium/libplanet/pull/614
[#622]: https://github.com/planetarium/libplanet/pull/622
[#627]: https://github.com/planetarium/libplanet/pull/627
[#628]: https://github.com/planetarium/libplanet/issues/628
[#630]: https://github.com/planetarium/libplanet/pull/630
[#636]: https://github.com/planetarium/libplanet/pull/636
[#637]: https://github.com/planetarium/libplanet/pull/637
[#641]: https://github.com/planetarium/libplanet/pull/641
[#642]: https://github.com/planetarium/libplanet/issues/642
[#644]: https://github.com/planetarium/libplanet/pull/644
[#645]: https://github.com/planetarium/libplanet/pull/645
[#647]: https://github.com/planetarium/libplanet/pull/647
[#654]: https://github.com/planetarium/libplanet/pull/654
[#655]: https://github.com/planetarium/libplanet/pull/655


Version 0.6.0
-------------

Released on October 1, 2019.

### Backward-incompatible interface changes

 -  `BlockChain<T>.MineBlock()` is now `async` and became to throw
    `OperationCanceledException` if `BlockChain<T>`'s tip index is changed while
    mining.  [[#460], [#517]]
 -  Users became able to give a cancellation token to `Block<T>.Mine()` and
    `Hashcash.Answer()` to cancel the operation.  [[#460], [#517]]
 -  Replaced `UnexpectedlyTerminatedTxRehearsalException` with
    `UnexpectedlyTerminatedActionException`.  [[#498]]
 -  The following methods became to throw
    `UnexpectedlyTerminatedActionException` with having its `InnerException`
    during actions being evaluated if any action of them throws an exception:
    [[#498]]
    -  `Transaction<T>.EvaluateActions()`
    -  `Transaction<T>.EvaluateActionsGradually()`
    -  `Block<T>.EvaluateActionsPerTx()`
    -  `Block<T>.Evaluate()`
    -  `BlockChain<T>.GetStates(completeStates: true)`
 -  The concept of "namespaces" in `IStore` was replaced by "chain IDs"
    to be consistent with `BlockChain<T>`.  [[#483], [#486]]
     -  Renamed `IStore.ListNamespaces()` method to `ListChainIds()`.
     -  Renamed `IStore.DeleteNamespace()` method to `DeleteChainId()`.
     -  Renamed `IStore.GetCanonicalNamespace()` method to
        `GetCanonicalChainId()`.
     -  Renamed `IStore.SetCanonicalNamespace(string)` method to
        `SetCanonicalChainId(Guid)`.
     -  Replaced `namespace`/`sourceNamespace`/`destinationNamespace` parameters
        taking `string` of methods in `IStore` and `StoreExtension` with
        `chainId`/`sourceChainId`/`destinationChainId` taking `Guid`.
     -  Renamed `NamespaceNotFoundException` to `ChainIdNotFoundException`.
     -  Replaced `NamespaceNotFoundException(string, string)` constructor with
        `ChainIdNotFoundException(Guid, string)` constructor.
     -  Replaced `NamespaceNotFoundException.Namespace` property with
        `ChainIdNotFoundException.ChainId` property.
 -  `IStore.StoreStateReference<T>(string, IImmutableSet<Address>, Block<T>)`
    method became replaced by `StoreStateReference(Guid, IImmutableSet<Address>,
    HashDigest<SHA256>, long)` method so that it takes hash and index of
    a block instead of an entire block.  [[#420]]
 -  Added `IStore.ForkBlockIndexes()` method.  [[#420]]
 -  Removed `addressesToStrip` parameter from `IStore.ForkStateReferences<T>()`
    method.  [[#454], [#467], [#509], [#522]]
 -  Removed the concept of "staged transactions that should not be broadcasted,"
    because its primary usage had been to make a transaction of a reward action
    for a candidate for block miner, and the case became achieved through
    `IBlockPolicy<T>.BlockAction` property which was introduced at 0.5.0.
    All staged transactions became broadcasted.  [[#319], [#470]]
     -  `BlockChain<T>.StageTransactions(IDictionary<Transaction<T>, bool>)`
        method became replaced by
        `StageTransactions(IImmutableSet<Transaction<T>>)`.
     -  Removed `toBroadcast` parameter from
        `IStore.IterateStagedTransactionIds(bool)` method.
     -  `IStore.StageTransactionIds(IDictionary<TxId, bool>)` method became
        replaced by `StageTransactionIds(IImmutableSet<TxId>()`.
 -  Removed `Swarm<T>.AddPeersAsync()` method.  To connect with seed peers, use
    `Swarm<T>.BootstrapAsync()` method instead.  [[#353]]
 -  `Peer` with endpoints should be typed as `BoundPeer` which is inherited from
    `Peer`.  [[#353]]
 -  Removed `IActionContext.NewGuid()` method.  To get a randomly generated
    [Guid][Guid], use `RandomExtension.GenerateRandomGuid()` which implements
    [RFC 4122] instead.  [[#508]]

### Added interfaces

 -  Added `BlockChain<T>.TipChanged` event which is invoked with an argument
    of `BlockChain<T>.TipChangedEventArgs` when `BlockChain<T>.Tip` is changed.
    [[#517], [#526]]
 -  Added `BlockChain<T>.TipChangedEventArgs` class.  [[#526]]
 -  Added `Swarm<T>.BootstrapAsync()` method to connect with seed peers.
    [[#353]]
 -  Added `RandomExtension` static class.  [[#508]]
 -  `TxId` class became to implement `IComparable<TxId>` and
    `IComparable` interfaces.  [[#244], [#511]]

### Behavioral changes

 -  `Swarm<T>` now broadcasts transactions as soon as new transactions are
    received.  [[#463], [#496]]
 -  `Swarm<T>` now ignores block hashes which already exists.  [[#461], [#484]]
 -  `Swarm<T>.PreloadAsync()` method became to download precalculated states
    of blocks from a likely branchpoint instead of a genesis block from
    a trusted peer (i.e., `trustedStateValidators`) where there are branches
    between peers.  [[#465], [#481]]
 -  `Swarm<T>`'s internal `GetRecentStates` message became to take
    `BlockLocator`, an internal data type to approximates a path of
    a chain of blocks for heuristics to search a likely branchpoint,
    instead of `HashDigest<SHA256>`.  [[#465], [#481]]
 -  NetMQ instances are now initialized at `Swarm<T>.StartAsync()` instead of
    `Swarm<T>()`.  [[#353]]
 -  Peers now connected via [Kademlia protocol][Kademlia].
    Peers are now selectively connected to each peer.  [[#353]]
 -  `TxId`s and `Block`s are now broadcasted to selected peers from routing
    table of the host peer.  [[#353]]
 -  `PolymorphicAction<T>.ToString()` method became to show the runtime type of
    its `InnerAction` for the sake of easier debugging.  [[#512]]
 -  The order of `Block<T>.Transactions` became to be determined by
    both a `Block<T>.Hash` and a `Transaction<T>.Id`, so that signers cannot
    predict the order of transactions in a block before it's mined.
    If there are multiple transactions signed by the same signer in a block
    these transactions become grouped together and the order is determined by
    a `Block<T>.Hash` and a fingerprint derived from all these transactions,
    and transactions in each group (per signer) are ordered by
    `Transaction<T>.Nonce`.  [[#244], [#355], [#511], [#520]]
 -  `LiteDBStore()` became to create the database in memory if the `path`
    parameter is `null`.  [[#521]]

### Bug fixes

 -  Fixed a bug that `Swarm<T>` hadn't released its TURN related resources on
    `Swarm<T>.StopAsync()`.  [[#450]]
 -  Fixed a bug that `IActionContext.Random` had been possible to generated
    equivalent results between actions of different transactions in
    a `Block<T>`.  [[#519]]
 -  Fixed a bug where a forked chain would not be deleted when an exception
    occurred during fetching block from other peers.  [[#527], [#537], [#540]]

[#244]: https://github.com/planetarium/libplanet/issues/244
[#353]: https://github.com/planetarium/libplanet/pull/353
[#355]: https://github.com/planetarium/libplanet/pull/355
[#420]: https://github.com/planetarium/libplanet/pull/420
[#450]: https://github.com/planetarium/libplanet/pull/450
[#460]: https://github.com/planetarium/libplanet/issues/460
[#461]: https://github.com/planetarium/libplanet/issues/461
[#463]: https://github.com/planetarium/libplanet/issues/463
[#467]: https://github.com/planetarium/libplanet/pull/467
[#470]: https://github.com/planetarium/libplanet/pull/470
[#481]: https://github.com/planetarium/libplanet/pull/481
[#483]: https://github.com/planetarium/libplanet/issues/483
[#484]: https://github.com/planetarium/libplanet/pull/484
[#486]: https://github.com/planetarium/libplanet/pull/486
[#498]: https://github.com/planetarium/libplanet/pull/498
[#496]: https://github.com/planetarium/libplanet/pull/496
[#508]: https://github.com/planetarium/libplanet/pull/508
[#509]: https://github.com/planetarium/libplanet/issues/509
[#511]: https://github.com/planetarium/libplanet/pull/511
[#512]: https://github.com/planetarium/libplanet/pull/512
[#517]: https://github.com/planetarium/libplanet/pull/517
[#519]: https://github.com/planetarium/libplanet/pull/519
[#520]: https://github.com/planetarium/libplanet/pull/520
[#521]: https://github.com/planetarium/libplanet/pull/521
[#522]: https://github.com/planetarium/libplanet/pull/522
[#526]: https://github.com/planetarium/libplanet/pull/526
[#527]: https://github.com/planetarium/libplanet/issues/527
[#537]: https://github.com/planetarium/libplanet/pull/537
[#540]: https://github.com/planetarium/libplanet/pull/540
[Kademlia]: https://en.wikipedia.org/wiki/Kademlia
[Guid]: https://docs.microsoft.com/ko-kr/dotnet/api/system.guid?view=netframework-4.8
[RFC 4122]: https://tools.ietf.org/html/rfc4122


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
    `Tuple<HashDigest<SHA256>, long>` which is a nullable tuple of
    `Block<T>.Hash` and `Block<T>.Index`.  [[#350]]
 -  Added `IBlockPolicy<T>.BlockAction` property.  [[#319], [#367]]
 -  Removed the type parameter of `ActionEvaluation`.  [[#319], [#367]]
 -  `ActionEvaluation.Action` became to `IAction` type.  [[#319], [#367]]
 -  `LiteDBStore()` constructor became to have a new option named `flush` and
    turned on by default.  [[#387], [LiteDB #1268]]
 -  `LiteDBStore()` constructor became to have a new option named `readOnly` and
    turned off by default.  [[#434]]
 -  `BaseIndex.ContainsKey()` method became `abstract`.  [[#390]]
 -  `BlockDownloadState.TotalBlockCount` and
    `BlockDownloadState.ReceivedBlockCount` became to `Int64` type.
    [[#396], [#399]]
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
    CancellationToken)` became to report progress for all phases.
    [[#397], [#400]]
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
 -  `BlockChain<T>` became to evaluate `IBlockPolicy<T>.BlockAction` and set the
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
 -  `BlockHashes` messages became to contain one more higher hash.
    [[#408], [#445]]
 -  `Swarm<T>.PreloadAsync()` became safe from data corruption even
    if a preloading process suddenly gets shutdown.  [[#417]]
 -  `FileStore` and `LiteDBStore` became to guarantee atomicity of storing
    transactions.  [[#413]]
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
    is no appropriate peer.  [[#418]]
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
 -  Added `IStore.ListTxNonces()` method.  [[#272], [#309], [#310]]
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
 -  Added `IStore.DeleteNamespace()` method.  [[#329]]
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
 -  Added IPv6 support to `Libplanet.Stun.StunAddress`.  [[#267], [#271]]
 -  `IStore.GetBlockStates()` became able to return `null` to represent
    an absence of states (i.e., incomplete states).  [[#272], [#285]]
 -  `Swarm<T>` became to broadcast staged `Transaction`s periodically
     so that game apps no more need to maintain their own thread to
     broadcast staged transactions.  [[#274], [#297]]
 -  Previously, `Swarm<T>` had sent an empty `GetTxs` message when it receives
    an empty `TxIds` from peers, and it had made the network waste bandwidth for
    unnecessary messages.  `Swam<T>` became to no more send such empty `GetTxs`.
    [[#297]]
 -  `BlockChain<T>.Swap()` became to delete an index, tx nonces, and state
    references in the replaced chain.  [[#329]]
 -  Reduced the memory footprint of `BlockChain<T>.FindBranchPoint()` method
    under the circumstances that the height of
    the `BlockChain<T>` object is high.  [[#282], [#299]]

### Bug fixes

 -  Fixed a bug that `Swarm<T>` reported `TaskCanceledException` as an unknown
    exception while stopping.  [[#275]]
 -  Fixed a bug that `Swarm<T>` didn't stop properly during
    `Swarm<T>.PreloadAsync()`.  [[#275]]
 -  Fixed a bug where the oldest `TxNonce` of an address is not invalidated
    when forking using `FileStore.ForkTxNonce()` method.  [[#281]]
 -  Fixed a bug where `LiteDBStore.GetTxNonce()` method throws a
    `System.IO.IOException` after forking.  [[#281]]
 -  Fixed a bug that `TurnClient` had not stopped properly.  [[#287]]
 -  Fixed a bug that `TurnClient` had been trying to use an already closed
    connection.  [[#303], [#308]]
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
    `IReadOnlyList<Block<T>>` instead of `IEnumerable<Block<T>>`.  [[#205]]
 -  `IBlockPolicy<T>.GetNextBlockDifficulty()` method became to receive
    `IReadOnlyList<Block<T>>` instead of `IEnumerable<Block<T>>`.  [[#205]]
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
 -  Also, `Swarm` class now does not implement `IDisposable` too.  Thus
    `Swarm.Dispose()` was removed too.  [[#218]]
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
 -  Removed `Block<T>.Validate()` and `Block<T>.EvaluateActions()` method.
    [[#243]]
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
    caught.  [[#133], [#251]]
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
    to the previous state.  [[#241]]
 -  `Block<T>.Validate()` and `Block<T>.EvaluateActions()` are integrated into
    `Block<T>.Evaluate()`.  [[#243]]
 -  `BlockChain<T>.Append()` became to execute `Action.Execute()` only once per
    action in the `Block<T>`.  [[#243]]
 -  `BlockChain<T>.Append()` method became to throw `InvalidTxNonceException`
    when the `Transaction<T>.Nonce` does not correspond to its `Signer`'s
    current nonce.  [[#246]]
 -  `Swarm` became to enforce `ForceDotNet.Force()` in [AsyncIO] while
    it's running on Mono runtime.  [[#247]]

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
    unnecessary race conditions.  [[#217]]
 -  Fixed a bug that `Swarm` could not properly communicate with `Peer` behind
    NAT.  [[#240]]
 -  Fixed a bug that `BlockChain<T>.FindNextHashes()` throws
    `ArgumentOutOfRangeException` when chain is empty.
 -  Fixed a bug that `TurnClient.AcceptRelayedStreamAsync()`didn't handle
    concurrent connections correctly.  [[#256]]

[AsyncIO]: https://github.com/somdoron/AsyncIO
[Ethereum Homestead algorithm]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2.md
[#31]: https://github.com/planetarium/libplanet/issues/31
[#133]: https://github.com/planetarium/libplanet/issues/133
[#185]: https://github.com/planetarium/libplanet/pull/185
[#187]: https://github.com/planetarium/libplanet/issues/187
[#190]: https://github.com/planetarium/libplanet/pull/190
[#191]: https://github.com/planetarium/libplanet/pull/191
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
    to NAT traversal.  To enable this, its constructor (`Swarm()`) takes the
    newly added `IceServer`s as configuration.
 -  Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to
    work around NAT so that `Peer`'s endpoints don't have to be multiple,
    `Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed
    from `IImmutableList<Uri>` to `DnsEndPoint`.
    [[#120], [#123] by Yang Chun Ung, [#126], [#127], [#165], [#166]]
 -  `Swarm` became to ignore tip blocks of the same height (`Index`) that it
    already has and deal with only longer (higher) blocks.
 -  Fixed a bug that occurred when `Swarm` was handling multiple responses at
    the same time.
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
 -  Turn into parameter in `BlockPolicy`'s constructor to milliseconds.
    [[#151]]
 -  `BencodexFormatter` became able to serialize `BigInteger`.  [[#159]]
 -  Made `Swarm` possible to configure its network `appProtocolVersion` and,
    to ignore peers if their version is different.  [[#167]], [[#170]]
 -  Added `DifferentAppProtocolVersionException` class.  [[#167], [#170]]
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
