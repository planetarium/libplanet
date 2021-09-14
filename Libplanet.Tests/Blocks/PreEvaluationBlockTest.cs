using System;
using System.Security.Cryptography;
using Libplanet.Action;
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
        public override void UnsafeConstructor()
        {
            BlockContent<Arithmetic> content = _contents.Genesis.Clone();
            var preEvalBlock =
                new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof);
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1.Clone();
            preEvalBlock = new PreEvaluationBlock<Arithmetic>(content, _sha256, _validBlock1Proof);
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            Assert.Throws<InvalidBlockNonceException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _invalidBlock1Proof)
            );

            content = _contents.Block1.Clone();
            content.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validBlock1Proof)
            );

            content = _contents.Genesis.Clone();
            content.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof)
            );

            content = _contents.Block1.Clone();
            content.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validBlock1Proof.Nonce)
            );

            content = _contents.Genesis.Clone();
            content.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof)
            );

            content = _contents.Genesis.Clone();
            content.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public override void SafeConstructorWithPreEvaluationHash()
        {
            BlockContent<Arithmetic> content = _contents.Genesis.Clone();
            var preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1.Clone();
            preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockContent<T> instance does not affect PreEvaluatingBlock<T> instance:
            content.Index++;
            Assert.Equal(_contents.Block1.Index, preEvalBlock.Index);

            content = _contents.Block1.Clone();
            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    content,
                    hashAlgorithm: _sha256,
                    nonce: _invalidBlock1Proof.Nonce,
                    preEvaluationHash: _invalidBlock1Proof.PreEvaluationHash
                )
            );
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    content,
                    hashAlgorithm: _sha256,
                    nonce: _validBlock1Proof.Nonce,
                    preEvaluationHash: _invalidBlock1Proof.PreEvaluationHash
                )
            );
        }

        [Fact]
        public override void SafeConstructorWithoutPreEvaluationHash()
        {
            BlockContent<Arithmetic> content = _contents.Genesis.Clone();
            var preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content,
                hashAlgorithm: _sha256,
                nonce: _validGenesisProof.Nonce
            );
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validGenesisProof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validGenesisProof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            content = _contents.Block1.Clone();
            preEvalBlock = new PreEvaluationBlock<Arithmetic>(
                content,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBlockContentEquals(content, preEvalBlock);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlock.Nonce);
            Assert.Same(_sha256, preEvalBlock.HashAlgorithm);
            AssertBytesEqual(_validBlock1Proof.PreEvaluationHash, preEvalBlock.PreEvaluationHash);

            // Mutating the BlockContent<T> instance does not affect PreEvaluatingBlock<T> instance:
            content.Index++;
            Assert.Equal(_contents.Block1.Index, preEvalBlock.Index);

            Assert.Throws<InvalidBlockNonceException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    content,
                    hashAlgorithm: _sha256,
                    nonce: _invalidBlock1Proof.Nonce
                )
            );

            content = _contents.Block1.Clone();
            content.PreviousHash = null;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validBlock1Proof.Nonce)
            );

            content = _contents.Genesis.Clone();
            content.PreviousHash = _contents.GenesisHash;
            Assert.Throws<InvalidBlockPreviousHashException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof.Nonce)
            );

            content = _contents.Block1.Clone();
            content.Difficulty = 0L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validBlock1Proof.Nonce)
            );

            content = _contents.Genesis.Clone();
            content.Difficulty = 1L;
            Assert.Throws<InvalidBlockDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof)
            );

            content = _contents.Genesis.Clone();
            content.TotalDifficulty = 1;
            Assert.Throws<InvalidBlockTotalDifficultyException>(
                () => new PreEvaluationBlock<Arithmetic>(content, _sha256, _validGenesisProof)
            );
        }

        [Fact]
        public override void DontCheckPreEvaluationHashWithProtocolVersion0()
        {
            // Since PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0, we need to maintain this bug on
            // ProtocolVersion < 1 for backward compatibility:
            BlockContent<Arithmetic> contentPv0 = _contents.Block1.Clone();
            contentPv0.ProtocolVersion = 0;
            contentPv0.Timestamp += TimeSpan.FromSeconds(1);
            var preEvalBlockPv0 = new PreEvaluationBlock<Arithmetic>(
                contentPv0,
                hashAlgorithm: _sha256,
                nonce: _validBlock1Proof.Nonce,
                preEvaluationHash: _validBlock1Proof.PreEvaluationHash
            );
            AssertBlockContentEquals(contentPv0, preEvalBlockPv0);
            AssertBytesEqual(_validBlock1Proof.Nonce, preEvalBlockPv0.Nonce);
            Assert.Same(_sha256, preEvalBlockPv0.HashAlgorithm);
            AssertBytesEqual(
                _validBlock1Proof.PreEvaluationHash,
                preEvalBlockPv0.PreEvaluationHash
            );

            // However, such bug must be fixed after ProtocolVersion > 0:
            BlockContent<Arithmetic> contentPv1 = _contents.Block1.Clone();
            contentPv1.Timestamp += TimeSpan.FromSeconds(1);
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new PreEvaluationBlock<Arithmetic>(
                    contentPv1,
                    hashAlgorithm: _sha256,
                    nonce: _validBlock1Proof.Nonce,
                    preEvaluationHash: _validBlock1Proof.PreEvaluationHash
                )
            );
        }

        [Fact]
        public void DetermineStateRootHash()
        {
            Address address = _contents.Tx0InBlock1.Signer;
            var blockAction = new SetStatesAtBlock(address, (Bencodex.Types.Integer)123, 0);
            var policy = new BlockPolicy<Arithmetic>(
                blockAction: blockAction,
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000),
                minimumDifficulty: 2,
                difficultyStability: 1
            );
            var stagePolicy = new VolatileStagePolicy<Arithmetic>();

            PreEvaluationBlock<Arithmetic> preEvalGenesis =
                _contents.Genesis.Mine(policy.GetHashAlgorithm(0));

            using (var fx = new DefaultStoreFixture())
            {
                HashDigest<SHA256> genesisStateRootHash =
                    preEvalGenesis.DetermineStateRootHash(blockAction, fx.StateStore);
                _output.WriteLine("#0 StateRootHash: {0}", genesisStateRootHash);
                // FIXME: Define a Block<T>() overloaded constructor taking PreEvaluationBlock<T>.
                var genesis = new Block<Arithmetic>(
                    preEvalGenesis.Index,
                    preEvalGenesis.Difficulty,
                    preEvalGenesis.TotalDifficulty,
                    preEvalGenesis.Nonce,
                    preEvalGenesis.Miner,
                    preEvalGenesis.PreviousHash,
                    preEvalGenesis.Timestamp,
                    preEvalGenesis.Transactions,
                    preEvaluationHash: preEvalGenesis.PreEvaluationHash,
                    stateRootHash: genesisStateRootHash,
                    protocolVersion: preEvalGenesis.ProtocolVersion
                );
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

                BlockContent<Arithmetic> content1 = _contents.Block1;
                content1.PreviousHash = genesis.Hash;
                content1.Difficulty = 2;
                content1.Transactions = new[] { _contents.Tx0InBlock1 };
                PreEvaluationBlock<Arithmetic> preEval1 = content1.Mine(policy.GetHashAlgorithm(1));

                HashDigest<SHA256> b1StateRootHash = preEval1.DetermineStateRootHash(blockChain);
                _output.WriteLine("#1 StateRootHash: {0}", b1StateRootHash);
                // FIXME: Define a Block<T>() overloaded constructor taking PreEvaluationBlock<T>.
                var block1 = new Block<Arithmetic>(
                    preEval1.Index,
                    preEval1.Difficulty,
                    preEval1.TotalDifficulty,
                    preEval1.Nonce,
                    preEval1.Miner,
                    preEval1.PreviousHash,
                    preEval1.Timestamp,
                    preEval1.Transactions,
                    preEvaluationHash: preEval1.PreEvaluationHash,
                    stateRootHash: b1StateRootHash,
                    protocolVersion: preEval1.ProtocolVersion
                );
                _output.WriteLine("#1: {0}", block1);

                blockChain.Append(block1);
                AssertBencodexEqual((Bencodex.Types.Integer)158, blockChain.GetState(address));
            }
        }

        private void AssertBlockContentEquals<T>(
            BlockContent<T> expected,
            PreEvaluationBlock<T> actual
        )
            where T : IAction, new()
        {
            base.AssertBlockContentEquals(expected, actual);
            Assert.NotNull(expected);
            Assert.NotNull(actual);
            Assert.Equal(expected.ProtocolVersion, actual.ProtocolVersion);
            Assert.Equal(expected.Index, actual.Index);
            Assert.Equal(expected.Timestamp, actual.Timestamp);
            AssertBytesEqual(expected.Miner, actual.Miner);
            Assert.Equal(expected.Difficulty, actual.Difficulty);
            Assert.Equal(expected.TotalDifficulty, actual.TotalDifficulty);
            AssertBytesEqual(expected.PreviousHash, actual.PreviousHash);
            Assert.Equal(expected.Transactions, actual.Transactions);
            AssertBytesEqual(expected.TxHash, actual.TxHash);
        }
    }
}
