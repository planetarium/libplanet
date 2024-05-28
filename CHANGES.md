Libplanet changelog
===================

Version Evidence
-------------

To be released.

### Deprecated APIs

### Backward-incompatible API changes

 -  (Libplanet.Types) Added `IBlockMetadata.EvidenceHash` property and
    the parameters required by the derived class's properties and constructors
    have been added.
    Affected classes are `Block`, `BlockContent`, `BlockHeader`,
    `BlockMetadata`, `PreEvaluationBlockHeader`.  [[#3696]]
 -  (Libplanet.Types) Added `IBlockContent.Evidences` property and the
    parameters required by the derived class's properties and constructors
    have been added.
    Affected classes are `Block`, `BlockContent`, `BlockHeader`,
    `PreEvaluationBlock`.  [[#3696]]
 -  (Libplanet) Added `IBlockPolicy.GetMaxEvidencePendingDuration` method.
    [[#3696]]

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  (Libplanet.Types) Added `InvalidBlockEvidencesException` class.  [[#3696]]
 -  (Libplanet.Types) Added `InvalidBlockEvidencesPendingDurationException`
    class.  [[#3696]]
 -  (Libplanet.Types) Added `Evidence` class.  [[#3696]]
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
 -  (Libplanet) Added `BlockChain.GetPendingEvidences`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.GetPendingEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.GetCommittedEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.AddEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.CommitEvidence`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidencePending`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidenceCommitted`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.IsEvidenceExpired`. method.  [[#3696]]
 -  (Libplanet) Added `BlockChain.DeletePendingEvidence`. method.  [[#3696]]
 -  (Libplanet.Action) Added `IActionContext.Evidences`. property.  [[#3696]]
 -  (Libplanet.Net) Added `Swarm.BroadcastEvidences`. property.  [[#3696]]
 -  (Libplanet.Net) Added `Context.CollectEvidenceExceptions`. property.
    [[#3696]]

### Behavioral changes

### Bug fixes

### Dependencies

### CLI tools

[#3696]: https://github.com/planetarium/libplanet/pull/3696


Version 5.0.0
-------------

To be released.

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

### Backward-incompatible network protocol changes

### Backward-incompatible storage format changes

### Added APIs

 -  Added `BlockChain.DetermineNextBlockStateRootHash()` method.  [[#3811]]

### Behavioral changes

 -  `Context.ProcessHeightOrRoundUponRules()` now appends block asynchronously,
    as a manner of fire-and-forget.  [[#3808]]
 -  `BlockHeader.StateRootHash` now means state root hash calculated by
    `BlockChain.DetermineNextBlockStateRootHash(previousBlockHash)`.
    [[#3811]]

### Bug fixes

### Dependencies

### CLI tools

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
