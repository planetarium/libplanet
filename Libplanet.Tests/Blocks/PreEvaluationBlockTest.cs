using System;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store;
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
            var blockAction = new SetStatesAtBlock(address, (Bencodex.Types.Integer)123, 0);
            var policy = new BlockPolicy<Arithmetic>(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000),
                getValidatorSet: idx => ValidatorSet);
            var stagePolicy = new VolatileStagePolicy<Arithmetic>();

            PreEvaluationBlock<Arithmetic> preEvalGenesis =
                _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                Block<Arithmetic> genesis = preEvalGenesis.Evaluate(
                    privateKey: _contents.GenesisKey,
                    blockAction: blockAction,
                    nativeTokenPredicate: _ => true,
                    stateStore: fx.StateStore
                );
                AssertPreEvaluationBlocksEqual(preEvalGenesis, genesis);
                _output.WriteLine("#1: {0}", genesis);

                var blockChain = new BlockChain<Arithmetic>(
                    policy,
                    stagePolicy,
                    fx.Store,
                    fx.StateStore,
                    genesis
                );
                AssertBencodexEqual((Bencodex.Types.Integer)123, blockChain.GetState(address));

                HashDigest<SHA256> identicalGenesisStateRootHash =
                    preEvalGenesis.DetermineStateRootHash(blockChain);
                AssertBytesEqual(genesis.StateRootHash, identicalGenesisStateRootHash);

                var txs = new[] { _contents.Block1Tx0 };
                BlockContent<Arithmetic> content1 = new BlockContent<Arithmetic>(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent<Arithmetic>.DeriveTxHash(txs),
                        lastCommit: null),
                    transactions: txs);
                PreEvaluationBlock<Arithmetic> preEval1 = content1.Propose();

                Block<Arithmetic> block1 = preEval1.Evaluate(_contents.Block1Key, blockChain);
                AssertPreEvaluationBlocksEqual(preEval1, block1);
                _output.WriteLine("#1: {0}", block1);

                HashDigest<SHA256> identicalBlock1StateRootHash =
                    preEval1.DetermineStateRootHash(blockChain);
                AssertBytesEqual(block1.StateRootHash, identicalBlock1StateRootHash);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual((Bencodex.Types.Integer)158, blockChain.GetState(address));
            }
        }

        [Fact]
        public void DetermineStateRootHash()
        {
            Address address = _contents.Block1Tx0.Signer;
            var blockAction = new SetStatesAtBlock(address, (Bencodex.Types.Integer)123, 0);
            var policy = new BlockPolicy<Arithmetic>(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000),
                getValidatorSet: idx => ValidatorSet);
            var stagePolicy = new VolatileStagePolicy<Arithmetic>();

            PreEvaluationBlock<Arithmetic> preEvalGenesis =
                _contents.GenesisContent.Propose();

            using (var fx = new MemoryStoreFixture())
            {
                HashDigest<SHA256> genesisStateRootHash = preEvalGenesis.DetermineStateRootHash(
                    blockAction: blockAction,
                    nativeTokenPredicate: _ => true,
                    stateStore: fx.StateStore
                );
                _output.WriteLine("#0 StateRootHash: {0}", genesisStateRootHash);
                Block<Arithmetic> genesis =
                    preEvalGenesis.Sign(_contents.GenesisKey, genesisStateRootHash);
                _output.WriteLine("#1: {0}", genesis);

                var blockChain = new BlockChain<Arithmetic>(
                    policy,
                    stagePolicy,
                    fx.Store,
                    fx.StateStore,
                    genesis
                );
                AssertBencodexEqual((Bencodex.Types.Integer)123, blockChain.GetState(address));

                HashDigest<SHA256> identicalGenesisStateRootHash =
                    preEvalGenesis.DetermineStateRootHash(blockChain);
                AssertBytesEqual(genesisStateRootHash, identicalGenesisStateRootHash);

                var txs = new[] { _contents.Block1Tx0 };
                BlockContent<Arithmetic> content1 = new BlockContent<Arithmetic>(
                    new BlockMetadata(
                        index: _contents.Block1Content.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _contents.Block1Content.PublicKey,
                        previousHash: genesis.Hash,
                        txHash: BlockContent<Arithmetic>.DeriveTxHash(txs),
                        lastCommit: null),
                    transactions: txs);
                PreEvaluationBlock<Arithmetic> preEval1 = content1.Propose();

                HashDigest<SHA256> b1StateRootHash = preEval1.DetermineStateRootHash(blockChain);
                _output.WriteLine("#1 StateRootHash: {0}", b1StateRootHash);
                Block<Arithmetic> block1 = preEval1.Sign(_contents.Block1Key, b1StateRootHash);
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
                AssertBencodexEqual((Bencodex.Types.Integer)158, blockChain.GetState(address));
            }
        }
    }
}
