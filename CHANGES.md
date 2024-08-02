Libplanet changelog
===================

Version 5.3.0
-------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

 -  Changed `BlockLocator.Create()` to take a single `BlockHash`.  [[#3913]]
 -  Removed `threshold` parameter from `BlockChain.GetBlockLocator()`  [[#3913]]
 -  (Libplanet.Net) Removed `SwarmOptions.BranchpointThreshold` property.
    [[#3913]]
 -  (Libplanet.Store) Removed unused `HashNode.Serialize()` method.
    [[#3922], [#3924]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

### Behavioral changes

 -  Changed `BlockChain.FindBranchPoint()` to only check for the first
    `BlockHash` in a given `BlockLocator`.  [[#3913]]
 -  (Libplanet.Store) Optimized `HashNode.ToBencodex()` method.
    [[#3922], [#3924]]

### Bug fixes

### Dependencies

### CLI tools

[#3922]: https://github.com/planetarium/libplanet/issues/3922
[#3924]: https://github.com/planetarium/libplanet/pull/3924


Version 5.2.2
-------------

Released on August 8, 2024.

 - Ported changes from [Libplanet 5.2.2] release.  [[#3915]]

[#3915]: https://github.com/planetarium/libplanet/pull/3915
[Libplanet 5.2.2]: https://www.nuget.org/packages/Libplanet/5.2.2


Version 5.2.1
-------------

Released on July 31, 2024.

 - Ported changes from [Libplanet 5.1.3] release.  [[#3902]]

[#3902]: https://github.com/planetarium/libplanet/pull/3902
[Libplanet 5.1.3]: https://www.nuget.org/packages/Libplanet/5.1.3


Version 5.2.0
-------------

Released on July 23, 2024.

### Backward-incompatible API changes

 -  Removed `IBlockPolicy.BlockAction` property.  [[#3701]]
 -  Added `IBlockPolicy.PolicyActionsRegistry` property.  [[#3701]]
 -  `BlockPolicy` constructor now requires `policyActionsRegistry`
    parameter instead of the `blockAction` parameter.  [[#3701], [#3748]]
 -  (Libplanet.Action) Removed `PolicyBlockActionGetter` delegate.
    [[#3701], [#3748]]
 -  (Libplanet.Action) `ActionEvaluator` constructor requires
    `PolicyActionsRegistry` parameter instead of the
    `policyBlockActionGetter` parameter.  [[#3701], [#3748]]
 -  (Libplanet.Action) Renamed `IActionContext.BlockAction` property to
    `IActionContext.IsPolicyAction`.  [[#3764]]

### Added APIs

 -  (Libplanet.Store) Added `MerkleTrie.GenerateProof()` method.  [[#3870]]
 -  (Libplanet.Store) Added `MerkleTrie.ValidateProof()` method.  [[#3870]]
 -  (Libplanet.Action) Added `PolicyActionsRegistry` class.  [[#3748]]

[#3870]: https://github.com/planetarium/libplanet/pull/3870
[#3701]: https://github.com/planetarium/libplanet/pull/3701
[#3748]: https://github.com/planetarium/libplanet/pull/3748
[#3764]: https://github.com/planetarium/libplanet/pull/3764


Version 5.1.3
-------------

Released on July 30, 2024.

 -  (Libplanet.Explorer) Removed code that was used in development.  [[#3898]]

[#3898]: https://github.com/planetarium/libplanet/pull/3898


Version 5.1.2
-------------

Released on July 17, 2024.

 -  Fix an issue where currency does not work correctly in dotnet6.
    [[#3880]]
 -  Fix an issue where evidence queries cause errors in the explorer. [[#3883]]

[#3880]: https://github.com/planetarium/libplanet/pull/3880
[#3883]: https://github.com/planetarium/libplanet/pull/3883


Version 5.1.1
-------------

Released on July 15, 2024.

 -  Fixed an issue with the evidence hash changing depending on the version.
    [[#3874]]

[#3874]: https://github.com/planetarium/libplanet/pull/3874


Version 5.1.0
-------------

Released on July 11, 2024.

### Backward-incompatible API changes

 -  (Libplanet.Explorer) Added `ValidatorPower` field to `VoteType`.
    [[#3737], [#3813]]
 -  (Libplanet.Types) Added `ValidatorPower` property to `IVoteMetadata`
    interface and its implementations.  [[#3737], [#3813]]
 -  (Libplanet.Types) Added `IBlockMetadata.EvidenceHash` property and
    the parameters required by the derived class's properties and constructors
    have been added.
    Affected classes are `Block`, `BlockContent`, `BlockHeader`,
    `BlockMetadata`, `PreEvaluationBlockHeader`.  [[#3696]]
 -  (Libplanet.Types) Added `IBlockContent.Evidence` property and the
    parameters required by the derived class's properties and constructors
    have been added.
    Affected classes are `Block`, `BlockContent`, `BlockHeader`,
    `PreEvaluationBlock`.  [[#3696]]
 -  (Libplanet) Added `IBlockPolicy.GetMaxEvidencePendingDuration` method.
    [[#3696]]

### Added APIs

 -  (Libplanet.Types) Added `InvalidBlockEvidenceHashException` class.
    [[#3696]]
 -  (Libplanet.Types) Added `InvalidBlockEvidencePendingDurationException`
    class.  [[#3696]]
 -  (Libplanet.Types) Added `EvidenceBase` abstract class.  [[#3696]]
 -  (Libplanet.Types) Added `DuplicateVoteEvidence` class.  [[#3696]]
 -  (Libplanet.Types) Added `DuplicateVoteException` class.  [[#3696]]
 -  (Libplanet.Types) Added `EvidenceContext` class.  [[#3696]]
 -  (Libplanet.Types) Added `EvidenceException` class.  [[#3696]]
 -  (Libplanet.Types) Added `EvidenceId` class.  [[#3696]]
 -  (Libplanet.Types) Added `IEvidenceContext` class.  [[#3696]]
 -  (Libplanet.Types) Added `InvalidEvidenceException` class.  [[#3696]]
 -  (Libplanet.Net) Added `EvidenceCompletion` class.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.IteratePendingEvidenceIds`. method.
    [[#3696]]
 -  (Libplanet.Store) Added `IStore.GetPendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.GetCommittedEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.PutPendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.PutCommittedEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.DeletePendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.DeleteCommittedEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.ContainsPendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Store) Added `IStore.ContainsCommittedEvidence`. method.
    [[#3696]]
 -  (Libplanet) Added `BlockChain.GetPendingEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.GetCommittedEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.AddEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.CommitEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidencePending`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidenceCommitted`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidenceExpired`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.DeletePendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Action) Added `IActionContext.Evidence`. property.  [[#3696]]
 -  (Libplanet.Net) Added `Swarm.BroadcastEvidence`. property.  [[#3696]]
 -  (Libplanet.Net) Added `Context.CollectEvidenceExceptions`. property.
    [[#3696]]

### Dependencies

The entire project is now defined by common properties in the
`Directory.Build.props` file. The Directory.Build.props file is located at
the root and in the src, tools, test path.

The project structure and affected Directory.Build.props locations are shown
below.

```plain
┌ Directory.Build.props
├ src
│  ├ Directory.Build.props
│  ├ Libplanet
│  ├ Libplanet.Action
│  ├ Libplanet.Common
│  ├ Libplanet.Crypto.Secp256k1
│  ├ Libplanet.Crypto
│  ├ Libplanet.Net
│  ├ Libplanet.RocksDBStore
│  ├ Libplanet.Store.Remote
│  ├ Libplanet.Store
│  ├ Libplanet.Stun
│  └ Libplanet.Types
├ test
│  ├ Directory.Build.props
│  ├ Libplanet.Action.Tests
│  ├ Libplanet.Analyzers.Tests
│  ├ Libplanet.Crypto.Secp256k1.Tests
│  ├ Libplanet.Explorer.Cocona.Tests
│  ├ Libplanet.Explorer.Tests
│  ├ Libplanet.Extensions.Cocona.Tests
│  ├ Libplanet.Mocks
│  ├ Libplanet.Net.Tests
│  ├ Libplanet.RocksDBStore.Tests
│  ├ Libplanet.Store.Remote.Tests
│  ├ Libplanet.Stun.Tests
│  └ Libplanet.Tests
└ tools
   ├ Directory.Build.props
   ├ Libplanet.Analyzers
   ├ Libplanet.Benchmarks
   ├ Libplanet.Explorer.Cocona
   ├ Libplanet.Explorer.Executable
   ├ Libplanet.Explorer
   ├ Libplanet.Extensions.Cocona
   └ Libplanet.Tools
```

The default SDK version for the project has been bumped up to .NET 6.0.
The list of supported SDKs is as follows
 - netstandard2.0
 - netstandard2.1
 - netcoreapp3.1
 - net6.0"

> Support for `netstandard2.0` is coming to an end soon, please note that
projects using `netstandard2.0` will be deprecated.

The `VersionPrefix` property has been moved from the
*src/Libplanet/Libplanet.csproj* file to the `Directory.Build.props` file.

[#3696]: https://github.com/planetarium/libplanet/pull/3696
[#3737]: https://github.com/planetarium/libplanet/pull/3737
[#3813]: https://github.com/planetarium/libplanet/pull/3813


Version 5.0.0
-------------

Released on July 2, 2024.

### Deprecated APIs

 -  `BlockChain.DetermineGenesisStateRootHash()` has been removed.  [[#3811]]
 -  `BlockChain.EvaluateGenesis()` has been removed.  [[#3811]]
 -  `BlockChain.DetermineBlockStateRootHash()` has been removed.
    [[#3811]]

### Backward-incompatible API changes

 -  (Libplanet.Action) `IBlockChainStates.GetWorldState(BlockHash?)`
    does not accept null parameter any more.  [[#3811]]
 -  Bumped `BlockMetadata.CurrentProtocolVersion` to 8.  [[#3811]]
 -  `BlockChain.EvaluateBlock()` accepts `Block`
    instead of `IPreEvaluationBlock`.  [[#3811]]
 -  `BlockChain.ProposeGenesisBlock()` receives parameter
    `HashDigest<SHA256>? stateRootHash`.  [[#3811]]
 -  `BlockChain.ProposeGenesisBlock()` does not receive
    parameter `IActionEvaluator actionEvaluator` any more.  [[#3811]]
 -  `BlockChain.ProposeBlock()` receives parameter
    `HashDigest<SHA256> stateRootHash`.  [[#3811]]
 -  (Libplanet.Net) Changed `Context()` to accept additional `BlockCommit?`
    typed argument.  Removed `lastCommit` parameter from `Context.Start()`.
    [[#3833], [#3845]]
 -  (Libplanet.Net) Changed `Context.Start()` to throw an
    `InvalidOperationException` when `Context` is not in a valid state.
    [[#3846]]
 -  (Libplanet.Net) Removed `IConsensusMessageCommunicator` parameter from
    `Context()`.  [[#3848], [#3849]]
 -  (Libplanet.Net) Added `Running` property to `ConsensusContext`.  [[#3851]]
 -  (Libplanet.Net) Added `Start()` method to `ConsensusContext`.  [[#3851]]
 -  (Libplanet.Net) Changed `NewHeight()` to throw a `NullReferenceException`
    if it is called while its internal `BlockChain` is in an invalid state.
    [[#3851]]
 -  (Libplanet.Net) Removed `Null` value from `ConsensusStep` enum.  [[#3851]]

### Added APIs

 -  Added `BlockChain.DetermineNextBlockStateRootHash()` method.  [[#3811]]

### Behavioral changes

 -  `Context.ProcessHeightOrRoundUponRules()` now appends block asynchronously,
    as a manner of fire-and-forget.  [[#3808]]
 -  `BlockHeader.StateRootHash` now means state root hash calculated by
    `BlockChain.DetermineNextBlockStateRootHash(previousBlockHash)`.
    [[#3811]]

[#3808]: https://github.com/planetarium/libplanet/pull/3808
[#3811]: https://github.com/planetarium/libplanet/pull/3811
[#3833]: https://github.com/planetarium/libplanet/issues/3833
[#3845]: https://github.com/planetarium/libplanet/pull/3845
[#3846]: https://github.com/planetarium/libplanet/pull/3846
[#3848]: https://github.com/planetarium/libplanet/issues/3848
[#3849]: https://github.com/planetarium/libplanet/issues/3849
[#3851]: https://github.com/planetarium/libplanet/pull/3851


Previous version changes
------------------------

 -  [Version 4.x.x]
 -  [Version 3.x.x]
 -  [Version 2.x.x]
 -  [Version 1.x.x]
 -  [Version 0.x.x]


[Version 4.x.x]: ./changes/v4.md
[Version 3.x.x]: ./changes/v3.md
[Version 2.x.x]: ./changes/v2.md
[Version 1.x.x]: ./changes/v1.md
[Version 0.x.x]: ./changes/v0.md
