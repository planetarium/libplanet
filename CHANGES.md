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
 -  (Libplanet.Explorer) Added `ValidatorPower` field to `VoteType`.  [[#3737]]
 -  (Libplanet.Types) Added `ValidatorPower` property to `IVoteMetadata`
    interface and its implementations.  [[#3737]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Action) Added `PolicyActionsRegistry` class.  [[#3748]]

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


Version Sloth
-------------------------

To be released.

### Deprecated APIs

 -  (Libplanet) `BlockChain.DetermineGenesisStateRootHash()`
    has been removed.  [[#Sloth]]
 -  (Libplanet) `BlockChain.EvaluateGenesis()` has been removed.
    [[#Sloth]]
 -  (Libplanet) `BlockChain.DetermineBlockStateRootHash()`
    has been removed.  [[#Sloth]]

### Backward-incompatible API changes

 -  (Libplanet.Action) `IBlockChainStates.GetWorldState(BlockHash?)`
    does not accept null parameter any more.  [[#Sloth]]
 -  Bumped `BlockMetadata.CurrentProtocolVersion` to 8.  [[#Sloth]]
 -  (Libplanet) `BlockChain.EvaluateBlock()` accepts `Block`
    instead of `IPreEvaluationBlock`.  [[#Sloth]]
 -  (Libplanet) `BlockChain.ProposeGenesisBlock()` receives parameter
    `HashDigest<SHA256>? stateRootHash`.  [[#Sloth]]
 -  (Libplanet) `BlockChain.ProposeGenesisBlock()` does not receive
    parameter `IActionEvaluator actionEvaluator` any more.  [[#Sloth]]
 -  (Libplanet) `BlockChain.ProposeBlock()` receives parameter
    `HashDigest<SHA256> stateRootHash`.  [[#Sloth]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Store) Added `IStore.GetNextStateRootHash()` method.
    [[#Sloth]]
 -  (Libplanet.Store) Added `IStore.PutNextStateRootHash()` method.
    [[#Sloth]]
 -  (Libplanet.Store) Added `IStore.DeleteNextStateRootHash()` method.
    [[#Sloth]]
 -  (Libplanet.Action) Added
    `IBlockChainStates.GetNextWorldState()` method.  [[#Sloth]]
 -  (Libplanet) Added `BlockChain.DetermineNextBlockStateRootHash()`
    method.  [[#Sloth]]

### Behavioral changes

 -  `BlockHeader.StateRootHash` now means state root hash calculated by
    `BlockChain.DetermineNextBlockStateRootHash(previousBlockHash)`.
    [[#Sloth]]
 -  `IBlockChainStates.GetWorldState(BlockHash)` now means the `IWorldState`
    before state transition from the `Block`.  [[#Sloth]]

### Bug fixes

### Dependencies

### CLI tools

[#Sloth]: https://github.com/planetarium/libplanet/pull/TBD


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
