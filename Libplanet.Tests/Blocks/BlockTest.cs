using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
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
                new Address("66575E6FC6e4D06eA52FFF0B12258e8C3B99e65A"),
                _fx.Genesis.Miner);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), _fx.Genesis.Nonce);
            AssertBytesEqual(
                BlockHash.FromString(
                    "dd24a6c5ddfcd311e11183ac16e1209b479dda7dc58f7100260b78a75d871431"
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
            Assert.Equal(new Address("66575E6FC6e4D06eA52FFF0B12258e8C3B99e65A"), _fx.Next.Miner);
        }

        [Fact]
        public void CompareToOtherBlock()
        {
            Block<PolymorphicAction<BaseAction>> sameBlock1 = _fx.Genesis;
            var sameBlock2 = BlockMarshaler.UnmarshalBlock<PolymorphicAction<BaseAction>>(
                _ => _fx.Genesis.HashAlgorithm,
                _fx.Genesis.MarshalBlock()
            );
            Block<PolymorphicAction<BaseAction>> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1.Equals(sameBlock2));
            Assert.False(sameBlock2.Equals(differentBlock));
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
            Assert.Equal(
                new Codec().Encode(_fx.Genesis.MarshalBlock()).Length,
                _fx.Genesis.BytesLength
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
