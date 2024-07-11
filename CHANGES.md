Libplanet changelog
===================

Version DPoS
-------------

### Deprecated APIs

### Backward-incompatible API changes

 -  (Libplanet) Removed `IBlockPolicy.BlockAction` property. [[#3701]]
 -  (Libplanet) Added `IBlockPolicy.BeginBlockActions`. property. [[#3701]]
 -  (Libplanet) Added `IBlockPolicy.EndBlockActions`. property. [[#3701]]
 -  (Libplanet) Added `IBlockPolicy.BeginTxActions`. property. [[#3748]]
 -  (Libplanet) Added `IBlockPolicy.EndTxActions`. property. [[#3748]]
 -  (Libplanet) `BlockPolicy` constructor requires `beginBlockActions`,
    `endBlockActions`, `beginTxActions` and `endTxActions` parameters
    instead of the `blockAction` parameter.
    [[#3701], [#3748]]
 -  (Libplanet.Action) Renamed `PolicyBlockActionGetter` delegate to
    `PolicyActionsGetter` and changed return type to
    `ImmutableArray<IAction>`.  [[#3701], [#3748]]
 -  (Libplanet.Action) `ActionEvaluator` constructor requires
    `PolicyActionsRegistry` parameter instead of the
    `policyBlockActionGetter` parameter.  [[#3701], [#3748]]
 -  (Libplanet.Action) Renamed `IActionContext.BlockAction` property to
    `IActionContext.IsBlockAction`.  [[#3764]]
 -  (Libplanet.Action) Added `SetValidatorSet` method to `IAccount` interface
    and its implementations.  [[#3730]]
 -  (Libplanet.Action) Added `MaxGasPrice` property to `IActionContext`
    interface and its implementations.  [[#3762]]
 -  (Libplanet.Action) Removed `IFeeCollector` interface
    and its implementations.  [[#3867]]
 -  (Libplanet.Action) Removed following methods from the
    `IActionContext` interface.  [[#3868]]
     -  Removed `IActionContext.UseGas(long)`.
     -  Removed `IActionContext.GasUsed()`.
     -  Removed `IActionContext.GasLimit()`.
 -  (Libplanet.Explorer) Added `ValidatorPower` field to `VoteType`.
    [[#3737], [#3813]]
 -  (Libplanet.Explorer) Added `self` field to `NoteStateType`.   [[#3841]]
 -  (Libplanet.Types) Added `ValidatorPower` property to `IVoteMetadata`
    interface and its implementations.  [[#3737], [#3813]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Action) Added `PolicyActionsRegistry` class.  [[#3748]]
 -  (Libplanet.Action) Added `GasTracer` static class.  [[#3868]]

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools

[#3701]: https://github.com/planetarium/libplanet/pull/3701
[#3730]: https://github.com/planetarium/libplanet/pull/3730
[#3737]: https://github.com/planetarium/libplanet/pull/3737
[#3748]: https://github.com/planetarium/libplanet/pull/3748
[#3762]: https://github.com/planetarium/libplanet/pull/3762
[#3764]: https://github.com/planetarium/libplanet/pull/3764
[#3813]: https://github.com/planetarium/libplanet/pull/3813
[#3841]: https://github.com/planetarium/libplanet/pull/3841
[#3867]: https://github.com/planetarium/libplanet/pull/3867
[#3868]: https://github.com/planetarium/libplanet/pull/3868


Version 5.0.0
-------------

To be released.

### Deprecated APIs

 -  (Libplanet) `BlockChain.DetermineGenesisStateRootHash()`
    has been removed.  [[#3811]]
 -  (Libplanet) `BlockChain.EvaluateGenesis()` has been removed.
    [[#3811]]
 -  (Libplanet) `BlockChain.DetermineBlockStateRootHash()`
    has been removed.  [[#3811]]

### Backward-incompatible API changes

 -  (Libplanet.Action) `IBlockChainStates.GetWorldState(BlockHash?)`
    does not accept null parameter any more.  [[#3811]]
 -  Bumped `BlockMetadata.CurrentProtocolVersion` to 8.  [[#3811]]
 -  (Libplanet) `BlockChain.EvaluateBlock()` accepts `Block`
    instead of `IPreEvaluationBlock`.  [[#3811]]
 -  (Libplanet) `BlockChain.ProposeGenesisBlock()` receives parameter
    `HashDigest<SHA256>? stateRootHash`.  [[#3811]]
 -  (Libplanet) `BlockChain.ProposeGenesisBlock()` does not receive
    parameter `IActionEvaluator actionEvaluator` any more.  [[#3811]]
 -  (Libplanet) `BlockChain.ProposeBlock()` receives parameter
    `HashDigest<SHA256> stateRootHash`.  [[#3811]]
 -  (Libplanet) Added `BlockChain.GetNextWorldState()` and
    `BlockChain.GetNextWorldState(BlockHash?)` methods.  [[#3821]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Store) Added `IStore.GetNextStateRootHash()` method.
    [[#3811]]
 -  (Libplanet.Store) Added `IStore.PutNextStateRootHash()` method.
    [[#3811]]
 -  (Libplanet.Store) Added `IStore.DeleteNextStateRootHash()` method.
    [[#3811]]
 -  (Libplanet) Added `BlockChain.DetermineNextBlockStateRootHash()`
    method.  [[#3811]]

### Behavioral changes

 -  `BlockHeader.StateRootHash` now means state root hash calculated by
    `BlockChain.DetermineNextBlockStateRootHash(previousBlockHash)`.
    [[#Sloth]]
 -  `IBlockChainStates.GetWorldState(BlockHash)` now means the `IWorldState`
    before state transition from the `Block`.  [[#3811]]
 -  `Context.ProcessHeightOrRoundUponRules()` now appends block asynchronously,
    as a manner of fire-and-forget.  [[#3808]]

### Bug fixes

### Dependencies

### CLI tools

[#3811]: https://github.com/planetarium/libplanet/pull/3811


Version 4.6.1
-------------

Released on June 11, 2024.

-  Ported changes from [Libplanet 4.5.2] release.  [[#3816]]

[#3816]: https://github.com/planetarium/libplanet/pull/3816
[Libplanet 4.5.2]: https://www.nuget.org/packages/Libplanet/4.5.2


Version 4.6.0
-------------

Released on May 27, 2024.

Due to changes in [#3789], a network ran with a prior version
may not be compatible with this version.  The native implementation of
`IActionEvaluator`, which is `ActionEvaluator`, no longer supports
evaluation of PoW `Block`s.  That is, it is no longer possible to
reconstruct states with valid state root hashes purely from past
`Block`s that includes PoW `Block`s.

### Deprecated APIs

 -  (Libplanet.Common) Removed `Nonce` struct.  [[#3793], [#3794]]
 -  Removed `AtomicActionRenderer` class.  [[#3795]]

### Backward-incompatible API changes

 -  (Libplanet.Action) Changed `ActionEvaluate.Evaluate()` to no longer
    accept `IPreEvaluationBlock` with a protocol version less than
    `BlockMetadata.PBFTProtocolVersion`.  [[#3789]]
 -  (Libplanet.Action) Changed the description of `IActionEvaluate.Evaluate()`
    so that it may throw `BlockProtocolVersionNotSupportedException` if
    its implementation is not able to handle `IPreEvaluationBlock` with
    certain `BlockMetadata.ProtocolVersion`s.  [[#3789]]
 -  (Libplanet.Types) Removed `nonce` parameter from
    `BlockMetadata.DerivePreEvaluationHash()` and
    `BlockMetadata.MakeCandidateData()` methods.  [[#3793], [#3794]]
 -  (Libplanet.Explorer.Executable) Removed unused `difficultyBoundDivisor`
    parameter for the executable and removed `Options.DifficultyBoundDivisor`
    property.  [[#3796]]
 -  (Libplanet.Explorer) Added `balance`, `totalSupply`, and `validatorSet`
    queries to `WorldStateType`.  [[#3792], [#3798]]
 -  (Libplanet.Explorer) Deprecated `balance`, `balances`, `totalSupply` and
    `validatorSet` query from `AccountStateType`.  [[#3792], [#3798]]
 -  (Libplanet.Explorer) Changed `totalSupply` query under `StateQuery` to
    no longer throw an `Exception` and return a zero amount instead.  [[#3799]]

### Added APIs

 -  (Libplanet.Action) Added `BlockProtocolVersionNotSupportedException` class.
    [[#3789]]
 -  (Libplanet.Mocks) Added `MockBlockChainStates` class.  [[#3799]]

[#3789]: https://github.com/planetarium/libplanet/pull/3789
[#3792]: https://github.com/planetarium/libplanet/issues/3792
[#3793]: https://github.com/planetarium/libplanet/issues/3793
[#3794]: https://github.com/planetarium/libplanet/pull/3794
[#3795]: https://github.com/planetarium/libplanet/pull/3795
[#3796]: https://github.com/planetarium/libplanet/pull/3796
[#3798]: https://github.com/planetarium/libplanet/pull/3798
[#3799]: https://github.com/planetarium/libplanet/pull/3799


Version 4.5.2
-------------

Released on June 10, 2024.

 -  (Libplanet.Explorer) Added `ProtocolVersion` field to `BlockType`.
    [[#3810]]

[#3810]: https://github.com/planetarium/libplanet/pull/3810


Version 4.5.1
-------------

Released on May 27, 2024.

 -  Suppressed build warnings as a temporary measure that may result in
    build failures due to security vulnerabilities found in
    [LiteDB 4.1.4] and [BouncyCastle.Cryptography 2.0.0] packages.  [[#3800]]

[#3800]: https://github.com/planetarium/libplanet/pull/3800
[BouncyCastle.Cryptography 2.0.0]: https://www.nuget.org/packages/BouncyCastle.Cryptography/2.0.0


Version 4.5.0
-------------

Released on May 14, 2024.

Due to changes in [#3780] and [#3783], a network ran with a prior version
may not be compatible with this version.  Regarding [#3780], a network
that ran with an `IAction` that has used `GetTotalSupply()` with
its execution result dependent on its value may not be compatible.
Regarding [#3783], a network that ran with an `IAction` that has either
used `MintAsset()` and `BurnAsset()` with its execution result dependent on
handling of a possible `Exception` thrown by these methods
may not be compatible.

### Backward-incompatible API changes

 -  (Libplanet.Types) Updated `BlockMetadata.CurrentProtocolVersion`
    from 6 to 7.  [[#3769]]
 -  (Libplanet.Store) Added `IterateSubTrieValues(KeyBytes)` and
    `IterateSubTrieNodes(KeyBytes)` methods to `MerkleTrie`.  [[#3774]]
 -  (Libplanet.Types) Added `BlockMetadata.CurrencyAccountProtocolVersion`.
    [[#3775]]
 -  (Libplanet.Mocks) Removed `MockWorldState.ToModern()` and
    `MockWorldState.SetTotalSupply()` methods.  [[#3778]]
 -  (Libplanet.Action) Removed `TotalSupplyNotTrackableException` class.
    [[#3780]]
 -  (Libplanet.Action) `IWorldState.GetTotalSupply()` no longer throws
    a `TotalSupplyNotTrackableException` but returns a zero amount of
    corresponding `FungibleAssetValue`.  [[#3780]]
 -  (Libplanet.Action) Changed the precednce for the types of `Exception`s
    that may be thrown by `IWorld.MintAsset()` and
    `IWorld.BurnAsset()`.

### Added APIs

 -  (Libplanet.Action) Added `CurrencyAccount` class.  [[#3779]]

### Behavioral changes

 -  (Libplanet.Mocks) `MockWorldState.SetBalance()` now automatically updates
    the total supply of the provided `Currency`.  [[#3778]]

[#3769]: https://github.com/planetarium/libplanet/pull/3769
[#3774]: https://github.com/planetarium/libplanet/pull/3774
[#3775]: https://github.com/planetarium/libplanet/pull/3775
[#3778]: https://github.com/planetarium/libplanet/pull/3778
[#3779]: https://github.com/planetarium/libplanet/pull/3779
[#3780]: https://github.com/planetarium/libplanet/pull/3780
[#3783]: https://github.com/planetarium/libplanet/pull/3783


Version 4.4.2
-------------

Released on April 29, 2024.

 -  (Libplanet.Explorer) Added `KeyBytesType` and `TrieType`.  [[#3763]]
 -  (Libplanet.Explorer) Added `RawStateQuery`.  [[#3763]]

[#3763]: https://github.com/planetarium/libplanet/pull/3763


Version 4.4.1
-------------

Released on April 18, 2024.

 -  Ported changes from [Libplanet 4.3.1] release.  [[#3757]]

[#3757]: https://github.com/planetarium/libplanet/pull/3757
[Libplanet 4.3.1]: https://www.nuget.org/packages/Libplanet/4.3.1


Version 4.4.0
-------------

Released on April 17, 2024.

### Backward-incompatible API changes

 -  (Libplanet.Action) Removed `IWorld.SetValidator()` extension method.
    Use `IWorld.SetValidatorSet()` extension method instead.  [[#3735]]
 -  (Libplanet.Types) Renamed `BlockMetadata.PoWProtocolVersion` to
    `BlockMetadata.PBFTProtocolVersion` and `BlockMetadata.LegacyStateVersion`
    to `BlockMetadata.WorldStateProtocolVersion` while increasing each value
    by 1.  [[#3736]]
 -  (Libplanet.Store) Changed the type of `TrieMetadata.Version` from
    `BigInteger` to `int`.  [[#3738]]
 -  (Libplanet.Store) Changed `TrieMetadata` to throw an `ArgumentException`
    when trying to create an instance with an invalid version.  [[#3738]]
 -  (Libplanet.Action) Added `IWorldState.Version` interface property.
    [[#3739]]
 -  (Libplanet.Types) Updated `BlockMetadata.CurrentProtocolVersion`
    from 5 to 6.  [[#3741]]
 -  (Libplanet.Types) Added `BlockMetadata.TransferFixProtocolVersion`,
    `BlockMetadata.SignatureProtocolVersion`, and
    `BlockMetadata.TransactionOrderingFixProtocolVersion` constants.  [[#3742]]
 -  (Libplanet.Action) Removed `ReservedAddresses.FungibleAssetAccount`.
    [[#3745]]
 -  (Libplanet.Action) Changed `ReservedAddresses.ValidatorSetAccount`'s value
    from `0x1000000000000000000000000000000000000002`
    to `0x100000000000000000000000000000000000001`.  [[#3745]]

### Added APIs

 -  (Libplanet.Action) Added `ValidatorSetAccount` class.  [[#3745]]
 -  (Libplanet.Explorer) Added `WorldState.version` field.  [[#3746]]

[#3735]: https://github.com/planetarium/libplanet/pull/3735
[#3736]: https://github.com/planetarium/libplanet/pull/3736
[#3738]: https://github.com/planetarium/libplanet/pull/3738
[#3739]: https://github.com/planetarium/libplanet/pull/3739
[#3741]: https://github.com/planetarium/libplanet/pull/3741
[#3742]: https://github.com/planetarium/libplanet/pull/3742
[#3745]: https://github.com/planetarium/libplanet/pull/3745
[#3746]: https://github.com/planetarium/libplanet/pull/3746


Version 4.3.1
-------------

Released on April 18, 2024.

 -  Downgraded *LiteDB* from [5.0.15][LiteDB 5.0.15] to
    [4.1.4][LiteDB 4.1.4].  [[#3753]]

[#3753]: https://github.com/planetarium/libplanet/pull/3753


Version 4.3.0
-------------

Released on April 8, 2024.

Due to changes in #3728, a network ran with a prior version may not be
compatible with this version, specifically those that ran with
`IAction`s that has allowed negative balances through `TransferAssets()`
with `allowNegativeBalance` as `true`.

### Backward-incompatible API changes

 -  (Libplanet.Action) Added `Txs` property of
    type `IReadOnlyList<ITransaction>?` to `IActionContext`.  [[#3713]]
 -  (Libplanet.Action) Removed `TotalFungibleAssets` property from
    `IWorld`.  [[#3714]]
 -  (Libplanet.Action) Changed `GetBalance()`, `GetTotalSupply()`, and
    `GetValidatorSet()` of `IWorldState` to extension methods.  [[#3715]]
 -  (Libplanet.Action) Changed `MintAsset()`, `BurnAsset()`, `TransferAsset()`,
    and `SetValidator()` of `IWorld` to extension methods.  [[#3715]]
 -  (Libplanet.Action) Removed `allowNegativeBalance` parameter from
    `IWorld.TransferAsset()` extension method.  [[#3725], [#3728]]
 -  (Libplanet.Store) Removed `journal`, `indexCacheSize`, and `flush`
    parameters from `DefaultStore`'s constructor.  [[#3729]]

### Dependencies

 -  Upgraded *LiteDB* from [4.1.4][LiteDB 4.1.4] to
    [5.0.15][LiteDB 5.0.15].  [[#3729]]

[#3713]: https://github.com/planetarium/libplanet/pull/3713
[#3714]: https://github.com/planetarium/libplanet/pull/3714
[#3715]: https://github.com/planetarium/libplanet/pull/3715
[#3725]: https://github.com/planetarium/libplanet/issues/3725
[#3728]: https://github.com/planetarium/libplanet/pull/3728
[#3729]: https://github.com/planetarium/libplanet/pull/3729
[LiteDB 4.1.4]: https://www.nuget.org/packages/LiteDB/4.1.4
[LiteDB 5.0.15]: https://www.nuget.org/packages/LiteDB/5.0.15


Version 4.2.0
-------------

Released on March 22, 2024.

### Backward-incompatible API changes

 -  (Libplanet.Action) Moved `GetBalance()` and `GetTotalSupply()` methods from
    `IAccountState` to `IWorldState`.  [[#3694], [#3697]]
 -  (Libplanet.Action) Moved `MintAsset()`, `BurnAsset()`, and `TransferAsset()`
    methods from `IAccount` to `IWorld`.  [[#3694], [#3697]]
 -  (Libplanet.Action) Removed `TotalSupplyDiff`, `FungibleAssetValueDiff`,
    and `ValidatorDiff` properties from `AccountDiff`.  [[#3694], [#3697]]
 -  (Libplanet.Action) Removed `Uncommitted` property and `CommitAccount()`
    method from `IWorldDelta`.  [[#3694], [#3699]]
 -  (Libplanet.Action) Moved `GetValidatorSet()` from `IAccountState`
    to `IWorldState`.  [[#3702]]
 -  (Libplanet.Action) Moved `SetValidator()` from `IAccount` to `IWorld`.
    [[#3702]]

### Added APIs

 -  Added `Libplanet.Mocks` project.  [[#3642]]

[#3642]: https://github.com/planetarium/libplanet/pull/3642
[#3694]: https://github.com/planetarium/libplanet/issues/3694
[#3697]: https://github.com/planetarium/libplanet/pull/3697
[#3699]: https://github.com/planetarium/libplanet/pull/3699
[#3702]: https://github.com/planetarium/libplanet/pull/3702


Version 4.1.0
-------------

Released on March 8, 2024.

### Backward-incompatible API changes

 -  Removed the '#nullable disable' from 3 projects
    (Action, Common, Explorer). [[#3622]]
 -  Removed the '#nullable disable' from the Libplanet.Store project. [[#3644]]
 -  Removed the '#nullable disable' from the Libplanet.RocksDBStore project.
    [[#3651]]
 -  Removed `BaseIndex` class and changed `BlockSet` base class from
    `BaseIndex<BlockHash, Block>` to `IReadOnlyDictionary<BlockHash, Block>`.
    [[#3686]]

### Backward-incompatible network protocol changes

 -  (Libplanet.Net) Changed some types due to removal of 'nullable keyword'.
    [[#3669]]
     -  Changed `blocks` parameter type of `Branch` class constructor from
        `IEnumerable<(Block, BlockCommit)>` to
        `IEnumerable<(Block, BlockCommit?)>`.
     -  Changed `AppProtocolVersion.Extra` field type from
        `IValue` to `IValue?`.
     -  Changed `extra` parameter type of `AppProtocolVersion` class constructor
        from `IValue` to `IValue?`.
     -  Changed `extra` parameter type of `AppProtocolVersion.Sign` method
        from `IValue` to `IValue?`.

### Added APIs

 -  (Libplanet.Store.Remote) Introduce
    `Libplanet.Store.Server.RemoteKeyValueService`  [[#3688]]
 -  (Libplanet.Store.Remote) Introduce
    `Libplanet.Store.Client.RemoteKeyValueStore`  [[#3688]]

### Behavioral changes

 -  (Libplanet.Store) Optimized `ITrie.IterateNodes()` to greatly
    reduce the amount of memory used.  [[#3687]]


[#3622]: https://github.com/planetarium/libplanet/pull/3622
[#3644]: https://github.com/planetarium/libplanet/pull/3644
[#3651]: https://github.com/planetarium/libplanet/pull/3651
[#3669]: https://github.com/planetarium/libplanet/pull/3669
[#3686]: https://github.com/planetarium/libplanet/pull/3686
[#3687]: https://github.com/planetarium/libplanet/pull/3687
[#3688]: https://github.com/planetarium/libplanet/pull/3688


Version 4.0.6
-------------

Released on February 22, 2024.

 -  (Libplanet.Action) Fixed a bug where `FeeCollector.Mortgage()`
    unintentionally resets accumulated `Account.TotalUpdatedFungibleAssets`.
    [[#3680]]

[#3680]: https://github.com/planetarium/libplanet/pull/3680


Version 4.0.5
-------------

Released on February 20, 2024.

 -  (Libplanet.Action) Optimized `ActionEvaluation` by removing
    redundant commits.  [[#3675]]

[#3675]: https://github.com/planetarium/libplanet/pull/3675


Version 4.0.4
-------------

Released on February 7, 2024.

 -  (Libplanet.Explorer) Revert a GraphQL query argument type change to make it
    compatible with old schema.  [[#3663]]

[#3663]: https://github.com/planetarium/libplanet/pull/3663


Version 4.0.3
-------------

Released on February 6, 2024.

 -  (Libplanet.Explorer) Revert GraphQL types to make it more compatible
    with old schema.  [[#3657]]
     -  Rolled back `TxResultType`'s name to auto generated `TxResultType`
        from specified `TxResult`.
     -  Rolled back `BlockHash` and `TxId` to be handled as `IDGraphType`
        instead of `BlockHashType` and `TxIdType` in legacy queries.
     -  Rolled back `HashDigest<SHA256>` to be handled as `HashDigestSHA256Type`
        instead of `HashDigestType<T>` in legacy queries.

[#3657]: https://github.com/planetarium/libplanet/pull/3657


Version 4.0.2
-------------

Released on February 6, 2024.

 -  (Libplanet.Net) Changed `AppProtocolVersion.FromToken()` to throw an
    `Exception` with more details.  [[#3648]]
 -  (Libplanet.Explorer) Updated outdated GraphQL schema.  [[#3649]]

[#3648]: https://github.com/planetarium/libplanet/pull/3648
[#3649]: https://github.com/planetarium/libplanet/pull/3649


Version 4.0.1
-------------

Released on January 26, 2024.

 -  (Libplanet.Action) Changed `IWorld.SetAccount()` to throw an
    `ArgumentException` under certain undesirable circumstances.  [[#3633]]

[#3633]: https://github.com/planetarium/libplanet/pull/3633


Version 4.0.0
-------------

Released on January 22, 2024.

### Backward-incompatible API changes

 -  Bumped `BlockMetadata.CurrentProtocolVersion` to 5.  [[#3524]]
 -  Removed `BlockChain.GetBalance(Address, Currency, Address)` method.
    [[#3583]]
 -  Removed `BlockChain.GetTotalSupply(Currency, Address)` method.
    [[#3583]]
 -  (Libplanet.Action) Changed `ActionEvaluator` to accept `IWorld`
    instead of `IAccount`.  [[#3462]]
 -  (Libplanet.Action) `IActionEvaluation.OutputState` became `IWorld`.
    (was `IAccount`)  [[#3462]]
 -  (Libplanet.Action) `IAction.Execute()` became to return `IWorld`.
    (was `IAccount`)  [[#3462]]
 -  (Libplanet.Action) `IActionContext.PreviousState` became `IWorld`.
    (was `IAccount`)  [[#3462]]
 -  (Libplanet.Action) Following methods in `IFeeCollector` interface
    became to accept and return `IWorld`. (was `IAccount`)  [[#3462]]
     -  `IFeeCollector.Mortgage()`
     -  `IFeeCollector.Refund()`
     -  `IFeeCollector.Reward()`
 -  (Libplanet.Action) `IBlockChainStates` interface has been overhauled.
    [[#3462], [#3583]]
     -  Added `IBlockChainStates.GetWorldState(BlockHash?)` method.
     -  Added `IBlockChainStates.GetWorldState(HashDigest<SHA256>?)` method.
     -  Removed `IBlockChainStates.GetAccountState(BlockHash?)` method.
     -  Removed `IBlockChainStates.GetState(Address, BlockHash?)` method.
     -  Removed
        `IBlockChainStates.GetStates(IReadOnlyList<Address>, BlockHash?)`
        method.
     -  Removed
        `IBlockChainStates.GetBalance(Address, Currency, BlockHash?)`
        method.
     -  Removed `IBlockChainStates.GetTotalSupply(Currency, BlockHash?)` method.
     -  Removed `IBlockChainStates.GetValidatorSet(BlockHash?)` method.
 -  (@planetarium/tx)  Remove the `T` generic argument of `SignedTx<T>`.
    [[#3512]]
 -  (Libplanet.Common) Removed `EnumerableExtensions` class.  [[#3625], [#3626]]

### Added APIs

 -  Added `BlockMetadata.LegacyStateVersion` constant.  [[#3524]]
 -  (Libplanet.Action) Added `IWorld` interface and its implementation.
    [[#3462]]
     -  Added `World` class.
 -  (Libplanet.Action) Added `IWorldDelta` interface.  [[#3462]]
 -  (Libplanet.Action) Added `IWorldState` interface and its implementation.
    [[#3462]]
     -  Added `WorldBaseState` class.
 -  (Libplanet.Action) Added `ReservedAddresses` static class.  [[#3462]]
 -  (Libplanet.Store) Added `TrieMetadata` class.  [[#3540]]
 -  (Libplanet.Explorer) Added `AccountStateType` class.  [[#3462]]
 -  (Libplanet.Explorer) Added `WorldStateType` class.  [[#3462]]
 -  (Libplanet.Explorer) Added `StateQuery.world` field.  [[#3462]]
 -  (Libplanet.Explorer) Changed `account` and `accounts` query in
    `StateQuery` to be compatible with `stateQuery.world`.  [[#3589]]

[#3462]: https://github.com/planetarium/libplanet/pull/3462
[#3494]: https://github.com/planetarium/libplanet/pull/3494
[#3512]: https://github.com/planetarium/libplanet/pull/3512
[#3524]: https://github.com/planetarium/libplanet/pull/3524
[#3540]: https://github.com/planetarium/libplanet/pull/3540
[#3583]: https://github.com/planetarium/libplanet/pull/3583
[#3589]: https://github.com/planetarium/libplanet/pull/3589
[#3625]: https://github.com/planetarium/libplanet/issues/3625
[#3626]: https://github.com/planetarium/libplanet/pull/3626


Previous version changes
------------------------

 -  [Version 3.x.x]
 -  [Version 2.x.x]
 -  [Version 1.x.x]
 -  [Version 0.x.x]


[Version 3.x.x]: ./changes/v3.md
[Version 2.x.x]: ./changes/v2.md
[Version 1.x.x]: ./changes/v1.md
[Version 0.x.x]: ./changes/v0.md
