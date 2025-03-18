using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockHeaderTest.
    public class PreEvaluationBlockTest : PreEvaluationBlockHeaderTest
    {
        private readonly ITestOutputHelper _output;

        public PreEvaluationBlockTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Evaluate()
        {
            Address address = _contents.Block1Tx0.Signer;
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray.Create<IAction>(
                        new SetStatesAtBlock(
                        address,
                        (Bencodex.Types.Integer)123,
                        ReservedAddresses.LegacyAccount,
                        0))),
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
            var stagePolicy = new VolatileStagePolicy();

            PreEvaluationBlock preEvalGenesis =
                _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                var actionEvaluator = new ActionEvaluator(
                    policy.PolicyActionsRegistry,
                    fx.StateStore,
                    new SingleActionLoader(typeof(Arithmetic)));
                Block genesis = preEvalGenesis.Sign(
                    _contents.GenesisKey,
                    default);
                AssertPreEvaluationBlocksEqual(preEvalGenesis, genesis);
                _output.WriteLine("#1: {0}", genesis);

                var blockChain = BlockChain.Create(
                    policy,
                    stagePolicy,
                    fx.Store,
                    fx.StateStore,
                    genesis,
                    actionEvaluator);
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)123,
                    blockChain
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));

                var txs = new[] { _contents.Block1Tx0 };
                var evs = Array.Empty<EvidenceBase>();
                BlockContent content1 = new BlockContent(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        evidenceHash: null),
                    transactions: txs,
                    evidence: evs);
                PreEvaluationBlock preEval1 = content1.Propose();

                HashDigest<SHA256> b1StateRootHash =
                    blockChain.DetermineNextBlockStateRootHash(genesis, out _);
                Block block1 = blockChain.EvaluateAndSign(preEval1, _contents.Block1Key);
                AssertBytesEqual(b1StateRootHash, block1.StateRootHash);
                AssertPreEvaluationBlocksEqual(preEval1, block1);
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)158,
                    blockChain
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));
            }
        }

        [Fact]
        public void DetermineStateRootHash()
        {
            Address address = _contents.Block1Tx0.Signer;
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray.Create<IAction>(
                        new SetStatesAtBlock(
                            address,
                            (Bencodex.Types.Integer)123,
                            ReservedAddresses.LegacyAccount,
                            0))),
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
            var stagePolicy = new VolatileStagePolicy();

            PreEvaluationBlock preEvalGenesis = _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                var actionEvaluator = new ActionEvaluator(
                    policyActionsRegistry: policy.PolicyActionsRegistry,
                    stateStore: fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(Arithmetic)));
                HashDigest<SHA256> genesisStateRootHash = default;
                _output.WriteLine("#0 StateRootHash: {0}", genesisStateRootHash);
                Block genesis =
                    preEvalGenesis.Sign(_contents.GenesisKey, genesisStateRootHash);
                _output.WriteLine("#1: {0}", genesis);

                var blockChain = BlockChain.Create(
                    policy,
                    stagePolicy,
                    fx.Store,
                    fx.StateStore,
                    genesis,
                    actionEvaluator);
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)123,
                    blockChain
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));

                var txs = new[] { _contents.Block1Tx0 };
                var evs = Array.Empty<EvidenceBase>();
                BlockContent content1 = new BlockContent(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        evidenceHash: null),
                    transactions: txs,
                    evidence: evs);
                PreEvaluationBlock preEval1 = content1.Propose();

                HashDigest<SHA256> b1StateRootHash =
                    blockChain.DetermineNextBlockStateRootHash(genesis, out _);
                AssertBytesEqual(
                    b1StateRootHash, blockChain.GetNextStateRootHash(genesis.Hash));

                _output.WriteLine("#1 StateRootHash: {0}", b1StateRootHash);
                Block block1 = preEval1.Sign(_contents.Block1Key, b1StateRootHash);
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)158,
                    blockChain
                        .GetNextWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));
            }
        }
    }
}
