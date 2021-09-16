using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;
        private ITestOutputHelper _output;

        public BlockTest(BlockFixture fixture, ITestOutputHelper output)
        {
            _fx = fixture;
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            var contents = new BlockContentFixture();
            var random = new System.Random();
            var stateRootHash = random.NextHashDigest<SHA256>();
            PreEvaluationBlock<Arithmetic> preEval = contents.Genesis.Mine(_fx.GetHashAlgorithm(0));
            var block = new Block<Arithmetic>(
                preEval,
                stateRootHash
            );
            AssertPreEvaluationBlocksEqual(preEval, block);
            AssertBytesEqual(stateRootHash, block.StateRootHash);
        }

        [Fact]
        public void Transactions()
        {
            // Creates fixtures.
            PrivateKey[] privKeys =
                Enumerable.Repeat((object)null, 5).Select(_ => new PrivateKey()).ToArray();
            var random = new System.Random();
            Transaction<DumbAction>[] txs = Enumerable.Range(0, 50)
                .Select(i => (privKeys[i % privKeys.Length], i / privKeys.Length))
                .Select(pair =>
                    Transaction<DumbAction>.Create(
                        nonce: pair.Item2,
                        privateKey: pair.Item1,
                        genesisHash: null,
                        actions: new DumbAction[0]
                    )
                )
                .OrderBy(_ => random.Next())
                .ToArray();
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: new Address(new byte[Address.Size]),
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: txs,
                stateRootHash: default(HashDigest<SHA256>),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>()
            );

            // For transactions signed by the same signer, these should be ordered by its tx nonce.
            Address[] signers = privKeys.Select(AddressExtensions.ToAddress).ToArray();
            foreach (Address signer in signers)
            {
                IEnumerable<Transaction<DumbAction>> signersTxs =
                    block.Transactions.Where(tx => tx.Signer == signer);
                Assert.Equal(signersTxs.OrderBy(tx => tx.Nonce).ToArray(), signersTxs.ToArray());
            }
        }

        [Fact]
        public void Mine()
        {
            Assert.Equal(0, _fx.Genesis.Index);
            Assert.Equal(0, _fx.Genesis.Difficulty);
            Assert.Null(_fx.Genesis.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero),
                _fx.Genesis.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Genesis.Miner);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), _fx.Genesis.Nonce);
            AssertBytesEqual(
                BlockHash.FromString(
                    "1f83d5e19ffe9e91661c01fae11e4946" +
                    "ad290947f0e7b266409eee7d3adee78e"
                ),
                _fx.Genesis.Hash
            );

            Block<PolymorphicAction<BaseAction>> next =
                MineNextBlock(_fx.Genesis, _fx.GetHashAlgorithm);

            Assert.Equal(1, _fx.Next.Index);
            Assert.Equal(1, _fx.Next.Difficulty);
            Assert.Equal(_fx.Genesis.Hash, _fx.Next.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 29, 0, 0, 15, TimeSpan.Zero),
                _fx.Next.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Next.Miner);
        }

        [Fact]
        public void DetectInvalidNonce()
        {
            const int easyDifficulty = 4;

            Assert.Throws<InvalidBlockNonceException>(() =>
                new Block<PolymorphicAction<BaseAction>>(
                    index: _fx.Next.Index,
                    difficulty: easyDifficulty,
                    totalDifficulty: _fx.Genesis.TotalDifficulty + easyDifficulty,
                    nonce: new Nonce(new byte[] { 0x00 }),
                    miner: _fx.Next.Miner,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    transactions: _fx.Next.Transactions,
                    preEvaluationHash: _fx.Next.PreEvaluationHash,
                    stateRootHash: default(HashDigest<SHA256>),
                    protocolVersion: _fx.Next.ProtocolVersion,
                    hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
                )
            );
        }

        [Fact]
        public void DetectInvalidDifficulty()
        {
            HashAlgorithmType hashAlgo = _fx.GetHashAlgorithm(_fx.Genesis.Index);
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                new Block<DumbAction>(
                    index: _fx.Genesis.Index,
                    difficulty: 1, // invalid
                    totalDifficulty: 1,
                    nonce: _fx.Genesis.Nonce,
                    miner: _fx.Genesis.Miner,
                    previousHash: _fx.Genesis.PreviousHash,
                    timestamp: _fx.Genesis.Timestamp,
                    transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                    hashAlgorithm: hashAlgo,
                    stateRootHash: default(HashDigest<SHA256>)
                )
            );

            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                new Block<DumbAction>(
                    index: _fx.Genesis.Index,
                    difficulty: 0,
                    totalDifficulty: 1, // invalid
                    nonce: _fx.Genesis.Nonce,
                    miner: _fx.Genesis.Miner,
                    previousHash: _fx.Genesis.PreviousHash,
                    timestamp: _fx.Genesis.Timestamp,
                    transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: hashAlgo
                )
            );

            HashAlgorithmType hashAlgoNext = _fx.GetHashAlgorithm(_fx.Next.Index);
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                new Block<PolymorphicAction<BaseAction>>(
                    index: _fx.Next.Index,
                    difficulty: 0, // invalid,
                    totalDifficulty: _fx.Genesis.TotalDifficulty,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    transactions: _fx.Next.Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: hashAlgoNext
                )
            );

            Assert.Throws<InvalidBlockTotalDifficultyException>(() =>
                new Block<PolymorphicAction<BaseAction>>(
                    index: _fx.Next.Index,
                    difficulty: 1,
                    totalDifficulty: 0,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    transactions: _fx.Next.Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: hashAlgoNext
                )
            );
        }

        [Fact]
        public void DetectInvalidPreviousHash()
        {
            HashAlgorithmType hashAlgo = _fx.GetHashAlgorithm(_fx.Genesis.Index);

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                new Block<DumbAction>(
                    index: _fx.Genesis.Index,
                    difficulty: _fx.Genesis.Difficulty,
                    totalDifficulty: _fx.Genesis.TotalDifficulty,
                    nonce: _fx.Genesis.Nonce,
                    miner: _fx.Genesis.Miner,
                    previousHash: new BlockHash(GetRandomBytes(32)), // invalid
                    timestamp: _fx.Genesis.Timestamp,
                    transactions: MineGenesis<DumbAction>(_fx.GetHashAlgorithm).Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: hashAlgo
                )
            );

            HashAlgorithmType hashAlgoNext = _fx.GetHashAlgorithm(_fx.Next.Index);

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                new Block<PolymorphicAction<BaseAction>>(
                    index: _fx.Next.Index,
                    difficulty: _fx.Next.Difficulty,
                    totalDifficulty: _fx.Next.TotalDifficulty,
                    nonce: _fx.Next.Nonce,
                    miner: _fx.Next.Miner,
                    previousHash: null,
                    timestamp: _fx.Next.Timestamp,
                    transactions: _fx.Next.Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: hashAlgoNext
                )
            );
        }

        [Fact]
        public void CompareToOtherBlock()
        {
            Block<PolymorphicAction<BaseAction>> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<PolymorphicAction<BaseAction>>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                totalDifficulty: sameBlock1.TotalDifficulty,
                nonce: sameBlock1.Nonce,
                miner: sameBlock1.Miner,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions,
                preEvaluationHash: sameBlock1.PreEvaluationHash,
                stateRootHash: sameBlock1.StateRootHash,
                hashAlgorithm: _fx.GetHashAlgorithm(sameBlock1.Index)
            );
            Block<PolymorphicAction<BaseAction>> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1.Equals(sameBlock2));
            Assert.False(sameBlock2.Equals(differentBlock));
        }

        [Fact]
        public void OrderTxsForEvaluation()
        {
            // New test should be written once this breaks with a protocol version bump.
            const int protocolVersion = BlockMetadata.CurrentProtocolVersion;
            const int numSigners = 5;
            const int numTxsPerSigner = 3;
            var epoch = DateTimeOffset.FromUnixTimeSeconds(0);

            ImmutableArray<PrivateKey> signers = ImmutableArray.Create(new PrivateKey[]
                {
                    _fx.TxFixture.PrivateKey1,
                    _fx.TxFixture.PrivateKey2,
                    _fx.TxFixture.PrivateKey3,
                    _fx.TxFixture.PrivateKey4,
                    _fx.TxFixture.PrivateKey5,
                });
            ImmutableArray<ImmutableArray<int>> noncesPerSigner = ImmutableArray.Create(
                new ImmutableArray<int>[]
                    {
                        ImmutableArray.Create(new int[] { 0, 2, 1 }),
                        ImmutableArray.Create(new int[] { 1, 0, 2 }),
                        ImmutableArray.Create(new int[] { 1, 2, 0 }),
                        ImmutableArray.Create(new int[] { 2, 0, 1 }),
                        ImmutableArray.Create(new int[] { 2, 1, 0 }),
                    });
            // Unix Epoch used for hard coded timestamp.
            ImmutableArray<Transaction<RandomAction>> txs =
                signers.Zip(noncesPerSigner, (signer, nonces) => (signer, nonces))
                    .SelectMany(
                        signerNoncesPair => signerNoncesPair.nonces,
                        (signerNoncesPair, nonce) => (signerNoncesPair.signer, nonce))
                    .Select(signerNoncePair => Transaction<RandomAction>.Create(
                        nonce: signerNoncePair.nonce,
                        privateKey: signerNoncePair.signer,
                        genesisHash: null,
                        actions: new[] { new RandomAction(signerNoncePair.signer.ToAddress()) },
                        timestamp: epoch)).ToImmutableArray();
            // Rearrange transactions so that transactions are not grouped by signers
            // while keeping the hard coded mixed order nonces above.
            txs = txs
                .Where((tx, i) => i % numTxsPerSigner == 0)
                .Concat(txs.Where((tx, i) => i % numTxsPerSigner != 0)).ToImmutableArray();
            byte[] preEvaluationHashBytes =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            ImmutableArray<byte> preEvaluationHash = preEvaluationHashBytes.ToImmutableArray();

            var orderedTxs = Block<RandomAction>.OrderTxsForEvaluation(
                protocolVersion: protocolVersion,
                txs: txs,
                preEvaluationHash: preEvaluationHash).ToImmutableArray();

            // Check signers are grouped together.
            for (int i = 0; i < numSigners; i++)
            {
                var signerTxs = orderedTxs.Skip(i * numTxsPerSigner).Take(numTxsPerSigner);
                Assert.True(signerTxs.Select(tx => tx.Signer).Distinct().Count() == 1);
            }

            // Check nonces are ordered.
            foreach (var signer in signers)
            {
                var signerTxs = orderedTxs.Where(tx => tx.Signer == signer.ToAddress());
                Assert.Equal(signerTxs.OrderBy(tx => tx.Nonce).ToArray(), signerTxs.ToArray());
            }

            string[] originalAddresses =
            {
                "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
                "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
            };
            string[] orderedAddresses =
            {
                "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
                "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
            };

            Assert.True(originalAddresses.SequenceEqual(
                signers.Select(signer => signer.ToAddress().ToString())));
            Assert.True(orderedAddresses.SequenceEqual(
                orderedTxs
                    .Where((tx, i) => i % numTxsPerSigner == 0)
                    .Select(tx => tx.Signer.ToString())));
        }

        [Fact]
        public void TransactionOrderIdempotent()
        {
            const int signerCount = 5;
            DateTimeOffset timestamp = DateTimeOffset.UtcNow;
            var signers = Enumerable.Range(0, signerCount).Select(_ => new PrivateKey());
            ImmutableArray<Transaction<RandomAction>> txs = signers.Select(signer =>
                Transaction<RandomAction>.Create(
                    0,
                    signer,
                    null,
                    new[] { new RandomAction(signer.ToAddress()) })).ToImmutableArray();
            HashAlgorithmGetter algoGetter = _ => HashAlgorithmType.Of<SHA256>();
            var blockA = MineGenesis(algoGetter, timestamp: timestamp, transactions: txs);
            var blockB = MineGenesis(algoGetter, timestamp: timestamp, transactions: txs);

            Assert.True(blockA.Transactions.SequenceEqual(blockB.Transactions));
        }

        [Fact]
        public void BytesLength()
        {
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: default,
                miner: default(Address),
                previousHash: null,
                timestamp: default,
                transactions: Array.Empty<Transaction<DumbAction>>(),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>(),
                stateRootHash: default
            );
            Assert.Equal(210, block.BytesLength);
            Assert.Equal(214, _fx.Genesis.BytesLength);
        }

        [Fact]
        public void DetectInvalidPreEvaluationHash()
        {
            Assert.Throws<InvalidBlockPreEvaluationHashException>(() =>
                new Block<PolymorphicAction<BaseAction>>(
                    index: _fx.Next.Index,
                    difficulty: _fx.Next.Difficulty,
                    totalDifficulty: _fx.Next.TotalDifficulty * 10000, // invalid
                    preEvaluationHash: _fx.Next.PreEvaluationHash,
                    nonce: new Nonce(new byte[] { 0x00 }),
                    miner: _fx.Next.Miner,
                    previousHash: _fx.Next.PreviousHash,
                    timestamp: _fx.Next.Timestamp,
                    transactions: _fx.Next.Transactions,
                    stateRootHash: default(HashDigest<SHA256>),
                    hashAlgorithm: _fx.GetHashAlgorithm(_fx.Next.Index)
                )
            );
        }

        [Fact]
        public void DetectInvalidTxSignature()
        {
            RawTransaction rawTx = new RawTransaction(
                0,
                _fx.TxFixture.Address1.ByteArray,
                _fx.Genesis.Hash.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString(
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture
                ),
                ImmutableArray<IValue>.Empty,
                new byte[10].ToImmutableArray()
            );
            var invalidTx = new Transaction<DumbAction>(rawTx);
            Assert.Throws<InvalidTxSignatureException>(() =>
                MineNext(
                    MineGenesisBlock<DumbAction>(_fx.GetHashAlgorithm),
                    _fx.GetHashAlgorithm,
                    new List<Transaction<DumbAction>>
                    {
                        invalidTx,
                    }
                )
            );
        }

        [Fact]
        public void DetectInvalidTxPublicKey()
        {
            RawTransaction rawTxWithoutSig = new RawTransaction(
                0,
                new PrivateKey().ToAddress().ByteArray,
                _fx.Genesis.Hash.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString(
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture
                ),
                ImmutableArray<IValue>.Empty,
                ImmutableArray<byte>.Empty
            );
            byte[] sig = _fx.TxFixture.PrivateKey1.Sign(
                new Transaction<DumbAction>(rawTxWithoutSig).Serialize(false)
            );
            var invalidTx = new Transaction<DumbAction>(
                new RawTransaction(
                    0,
                    rawTxWithoutSig.Signer,
                    rawTxWithoutSig.GenesisHash,
                    rawTxWithoutSig.UpdatedAddresses,
                    rawTxWithoutSig.PublicKey,
                    rawTxWithoutSig.Timestamp,
                    rawTxWithoutSig.Actions,
                    sig.ToImmutableArray()
                )
            );
            Assert.Throws<InvalidTxPublicKeyException>(() =>
                MineNext(
                    MineGenesisBlock<DumbAction>(_fx.GetHashAlgorithm),
                    _fx.GetHashAlgorithm,
                    new List<Transaction<DumbAction>> { invalidTx }
                )
            );
        }
    }
}
