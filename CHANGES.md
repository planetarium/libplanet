Libplanet changelog
===================

Version 5.1.0
-------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools


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
