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
        public override void SafeConstructorWithPreEvaluationHash()
        {
            BlockContent<Arithmetic> content = _contents.GenesisContent;
            var preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content,
                _validGenesisProof);
            AssertBlockContentsEqual(content, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1Content;
            preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content, _validBlock1Proof);
            AssertBlockContentsEqual(content, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1Content;
            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    content, _invalidBlock1Proof));
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    content,
                    (_validBlock1Proof.Nonce, _invalidBlock1Proof.PreEvaluationHash)));
        }

        [Fact]
        public void SafeConstructorWithoutPreEvaluationHash()
        {
            BlockContent<Arithmetic> content = _contents.GenesisContent;
            var preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content, _validGenesisProof);
            AssertBlockContentsEqual(content, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1Content;
            preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content, _validBlock1Proof);
            AssertBlockContentsEqual(content, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    _contents.Block1Content, _invalidBlock1Proof));
        }

        [Fact]
        public override void DontCheckPreEvaluationHashWithProtocolVersion0()
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            BlockContent<Arithmetic> contentPv0 = new BlockContent<Arithmetic>(
                new BlockMetadata(
                    protocolVersion: 0,
                    index: _contents.Block1Content.Index,
                    timestamp: _contents.Block1Content.Timestamp.AddSeconds(1),
                    miner: _contents.Block1Content.Miner,
                    publicKey: null,
                    difficulty: _contents.Block1Content.Difficulty,
                    totalDifficulty: _contents.Block1Content.TotalDifficulty,
                    previousHash: _contents.Block1Content.PreviousHash,
                    txHash: _contents.Block1Content.TxHash),
                transactions: _contents.Block1Content.Transactions);
            var preEvalBlockPv0 = new PreEvaluationBlock<Arithmetic>(
                contentPv0, _validBlock1Proof);
            AssertBlockContentsEqual(contentPv0, preEvalBlockPv0);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlockPv0.Nonce);
            AssertBytesEqual(
                _validBlock1Proof.PreEvaluationHash,
                preEvalBlockPv0.PreEvaluationHash);

            // However, such bug must be fixed after ProtocolVersion > 0:
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    _contents.Block1ContentPv1, _validBlock1Proof));
        }

        [Fact]
        public void Evaluate()
        {
            Address address = _contents.Block1Tx0.Signer;
            var blockAction = new SetStatesAtBlock(address, (Bencodex.Types.Integer)123, 0);
            var policy = new BlockPolicy<Arithmetic>(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000),
                minimumDifficulty: 2,
                difficultyStability: 1
            );
            var stagePolicy = new VolatileStagePolicy<Arithmetic>();

            PreEvaluationBlock<Arithmetic> preEvalGenesis =
                _contents.GenesisContent.Mine();

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
                        difficulty: _contents.Block1Content.Difficulty,
                        totalDifficulty: _contents.Block1Content.TotalDifficulty,
                        previousHash: genesis.Hash,
                        txHash: BlockContent<Arithmetic>.DeriveTxHash(txs)),
                    transactions: txs);
                PreEvaluationBlock<Arithmetic> preEval1 = content1.Mine();

                Block<Arithmetic> block1 = preEval1.Evaluate(_contents.Block1Key, blockChain);
                AssertPreEvaluationBlocksEqual(preEval1, block1);
                _output.WriteLine("#1: {0}", block1);

                HashDigest<SHA256> identicalBlock1StateRootHash =
                    preEval1.DetermineStateRootHash(blockChain);
                AssertBytesEqual(block1.StateRootHash, identicalBlock1StateRootHash);

                blockChain.Append(block1);
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
                minimumDifficulty: 2,
                difficultyStability: 1
            );
            var stagePolicy = new VolatileStagePolicy<Arithmetic>();

            PreEvaluationBlock<Arithmetic> preEvalGenesis =
                _contents.GenesisContent.Mine();

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
                        difficulty: _contents.Block1Content.Difficulty,
                        totalDifficulty: _contents.Block1Content.TotalDifficulty,
                        previousHash: genesis.Hash,
                        txHash: BlockContent<Arithmetic>.DeriveTxHash(txs)),
                    transactions: new[] { _contents.Block1Tx0 });
                PreEvaluationBlock<Arithmetic> preEval1 = content1.Mine();

                HashDigest<SHA256> b1StateRootHash = preEval1.DetermineStateRootHash(blockChain);
                _output.WriteLine("#1 StateRootHash: {0}", b1StateRootHash);
                Block<Arithmetic> block1 = preEval1.Sign(_contents.Block1Key, b1StateRootHash);
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1);
                AssertBencodexEqual((Bencodex.Types.Integer)158, blockChain.GetState(address));
            }
        }
    }
}
