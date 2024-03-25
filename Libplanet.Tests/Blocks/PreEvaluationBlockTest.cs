using System;
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
            var blockAction = new SetStatesAtBlock(
                address, (Bencodex.Types.Integer)123, ReservedAddresses.LegacyAccount, 0);
            var policy = new BlockPolicy(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
            var stagePolicy = new VolatileStagePolicy();

            PreEvaluationBlock preEvalGenesis =
                _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                var actionEvaluator = new ActionEvaluator(
                    _ => policy.BlockAction,
                    fx.StateStore,
                    new SingleActionLoader(typeof(Arithmetic)));
                Block genesis = preEvalGenesis.Sign(
                    _contents.GenesisKey,
                    BlockChain.DetermineGenesisStateRootHash(
                        actionEvaluator, preEvalGenesis, out _));
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
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));

                HashDigest<SHA256> identicalGenesisStateRootHash =
                    blockChain.DetermineBlockStateRootHash(preEvalGenesis, out _);
                AssertBytesEqual(genesis.StateRootHash, identicalGenesisStateRootHash);

                var txs = new[] { _contents.Block1Tx0 };
                BlockContent content1 = new BlockContent(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        proof: null),
                    transactions: txs);
                PreEvaluationBlock preEval1 = content1.Propose();

                Block block1 = blockChain.EvaluateAndSign(preEval1, _contents.Block1Key);
                AssertPreEvaluationBlocksEqual(preEval1, block1);
                _output.WriteLine("#1: {0}", block1);

                HashDigest<SHA256> identicalBlock1StateRootHash =
                    blockChain.DetermineBlockStateRootHash(preEval1, out _);
                AssertBytesEqual(block1.StateRootHash, identicalBlock1StateRootHash);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)158,
                    blockChain
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));
            }
        }

        [Fact]
        public void DetermineStateRootHash()
        {
            Address address = _contents.Block1Tx0.Signer;
            var blockAction = new SetStatesAtBlock(
                address, (Bencodex.Types.Integer)123, ReservedAddresses.LegacyAccount, 0);
            var policy = new BlockPolicy(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
            var stagePolicy = new VolatileStagePolicy();

            PreEvaluationBlock preEvalGenesis = _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                var actionEvaluator = new ActionEvaluator(
                    _ => policy.BlockAction,
                    stateStore: fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(Arithmetic)));
                HashDigest<SHA256> genesisStateRootHash =
                    BlockChain.DetermineGenesisStateRootHash(
                        actionEvaluator, preEvalGenesis, out var _);
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
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));

                HashDigest<SHA256> identicalGenesisStateRootHash =
                    blockChain.DetermineBlockStateRootHash(preEvalGenesis, out _);
                AssertBytesEqual(genesisStateRootHash, identicalGenesisStateRootHash);

                var txs = new[] { _contents.Block1Tx0 };
                BlockContent content1 = new BlockContent(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent.DeriveTxHash(txs),
                        lastCommit: null,
                        proof: null),
                    transactions: txs);
                PreEvaluationBlock preEval1 = content1.Propose();

                HashDigest<SHA256> b1StateRootHash =
                    blockChain.DetermineBlockStateRootHash(preEval1, out _);
                _output.WriteLine("#1 StateRootHash: {0}", b1StateRootHash);
                Block block1 = preEval1.Sign(_contents.Block1Key, b1StateRootHash);
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual(
                    (Bencodex.Types.Integer)158,
                    blockChain
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address));
            }
        }
    }
}
