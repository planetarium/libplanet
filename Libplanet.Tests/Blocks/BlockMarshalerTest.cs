using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Blocks;
using Libplanet.Tests.Fixtures;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;
using FxAction = Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.BaseAction>;

namespace Libplanet.Tests
{
    public class BlockMarshalerTest
        : IClassFixture<BlockFixture>, IClassFixture<BlockContentFixture>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // Header fields:
        private static readonly byte[] ProtocolVersionKey = { 0x00 };
        private static readonly byte[] IndexKey = { 0x69 }; // 'i'
        private static readonly byte[] TimestampKey = { 0x74 }; // 't'
        private static readonly byte[] DifficultyKey = { 0x64 }; // 'd'
        private static readonly byte[] TotalDifficultyKey = { 0x54 }; // 'T'
        private static readonly byte[] NonceKey = { 0x6e }; // 'n'
        private static readonly byte[] MinerKey = { 0x6d }; // 'm'
        private static readonly byte[] PublicKeyKey = { 0x50 }; // 'P'
        private static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'
        private static readonly byte[] TxHashKey = { 0x78 }; // 'x'
        private static readonly byte[] HashKey = { 0x68 }; // 'h'
        private static readonly byte[] StateRootHashKey = { 0x73 }; // 's'
        private static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static readonly byte[] PreEvaluationHashKey = { 0x63 }; // 'c'

        // Block fields:
        private static readonly byte[] HeaderKey = { 0x48 }; // 'H'
        private static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

        private readonly ITestOutputHelper _output;
        private readonly BlockFixture _fx;
        private readonly BlockContentFixture _content;
        private readonly Dictionary _marshaledGenesisMetadata;
        private readonly Dictionary _marshaledGenesis;
        private readonly Dictionary _marshaledNextMetadata;
        private readonly Dictionary _marshaledNext;
        private readonly Dictionary _marshaledHasTxMetadata;
        private readonly Dictionary _marshaledHasTx;

        public BlockMarshalerTest(
            BlockFixture fixture,
            BlockContentFixture contentFixture,
            ITestOutputHelper output
        )
        {
            _output = output;
            _fx = fixture;
            _content = contentFixture;

            _marshaledGenesisMetadata = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.Genesis.ProtocolVersion)
                .Add(IndexKey, _fx.Genesis.Index)
                .Add(
                    TimestampKey,
                    _fx.Genesis.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.Genesis.Difficulty)
                .Add(TotalDifficultyKey, _fx.Genesis.TotalDifficulty)
                .Add(PublicKeyKey, _fx.Genesis.PublicKey.Format(compress: true));
            var expectedGenesisHeader = _marshaledGenesisMetadata
                .Add(NonceKey, _fx.Genesis.Nonce.ByteArray)
                .Add(PreEvaluationHashKey, _fx.Genesis.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.Genesis.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.Genesis.Signature ?? default)
                .Add(HashKey, _fx.Genesis.Hash.ByteArray);
            _marshaledGenesis = Dictionary.Empty
                .Add(HeaderKey, expectedGenesisHeader);

            _marshaledNextMetadata = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.Next.ProtocolVersion)
                .Add(IndexKey, _fx.Next.Index)
                .Add(PreviousHashKey, _fx.Next.PreviousHash.Value.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.Next.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.Next.Difficulty)
                .Add(TotalDifficultyKey, _fx.Next.TotalDifficulty)
                .Add(PublicKeyKey, _fx.Next.PublicKey.Format(compress: true));
            var expectedNextHeader = _marshaledNextMetadata
                .Add(NonceKey, _fx.Next.Nonce.ByteArray)
                .Add(PreEvaluationHashKey, _fx.Next.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.Next.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.Next.Signature ?? default)
                .Add(HashKey, _fx.Next.Hash.ByteArray);
            _marshaledNext = Dictionary.Empty
                .Add(HeaderKey, expectedNextHeader);

            _marshaledHasTxMetadata = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.HasTx.ProtocolVersion)
                .Add(IndexKey, _fx.HasTx.Index)
                .Add(PreviousHashKey, _fx.HasTx.PreviousHash.Value.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.HasTx.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.HasTx.Difficulty)
                .Add(TotalDifficultyKey, _fx.HasTx.TotalDifficulty)
                .Add(PublicKeyKey, _fx.HasTx.PublicKey.Format(true))
                .Add(TxHashKey, _fx.HasTx.TxHash.Value.ByteArray);
            var expectedHasTxHeader = _marshaledHasTxMetadata
                .Add(NonceKey, _fx.HasTx.Nonce.ByteArray)
                .Add(PreEvaluationHashKey, _fx.HasTx.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.HasTx.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.HasTx.Signature ?? default)
                .Add(HashKey, _fx.HasTx.Hash.ByteArray);
            IValue expectedHasTxTxs = new List(
                _fx.HasTx.Transactions.Select(tx => tx.Serialize(true)));
            _marshaledHasTx = Dictionary.Empty
                .Add(HeaderKey, expectedHasTxHeader)
                .Add(TransactionsKey, expectedHasTxTxs);
        }

        [Fact]
        public void MarshalBlockMetadata()
        {
            AssertBencodexEqual(
                _marshaledGenesisMetadata,
                BlockMarshaler.MarshalBlockMetadata(_fx.Genesis)
            );
            AssertBencodexEqual(
                _marshaledNextMetadata,
                BlockMarshaler.MarshalBlockMetadata(_fx.Next)
            );
            AssertBencodexEqual(
                _marshaledHasTxMetadata,
                BlockMarshaler.MarshalBlockMetadata(_fx.HasTx)
            );
            AssertBencodexEqual(
                Dictionary.Empty
                    .Add(IndexKey, 0L)
                    .Add(TimestampKey, "2021-09-06T04:46:39.123000Z")
                    .Add(DifficultyKey, 0L)
                    .Add(TotalDifficultyKey, 0)
                    .Add(MinerKey, _content.GenesisContentPv0.Miner.ByteArray),
                BlockMarshaler.MarshalBlockMetadata(_content.GenesisContentPv0)
            );
            AssertBencodexEqual(
                Dictionary.Empty
                    .Add(ProtocolVersionKey, 1)
                    .Add(IndexKey, 1L)
                    .Add(
                        PreviousHashKey,
                        _content.Block1ContentPv1.PreviousHash?.ByteArray ?? default)
                    .Add(TimestampKey, "2021-09-06T08:01:09.045000Z")
                    .Add(DifficultyKey, 123L)
                    .Add(TotalDifficultyKey, 123)
                    .Add(MinerKey, _content.Block1ContentPv1.Miner.ByteArray)
                    .Add(TxHashKey, _content.Block1ContentPv1.TxHash?.ByteArray ?? default),
                BlockMarshaler.MarshalBlockMetadata(_content.Block1ContentPv1)
            );
        }

        [Fact]
        public void MarshalBlock()
        {
            AssertBencodexEqual(_marshaledGenesis, _fx.Genesis.MarshalBlock());
            AssertBencodexEqual(_marshaledNext, _fx.Next.MarshalBlock());
            AssertBencodexEqual(_marshaledHasTx, _fx.HasTx.MarshalBlock());
        }

        [Fact]
        public void UnmarshalBlock()
        {
            Assert.Equal(
                _fx.Genesis,
                BlockMarshaler.UnmarshalBlock<FxAction>(_marshaledGenesis)
            );
            Assert.Equal(
                _fx.Next,
                BlockMarshaler.UnmarshalBlock<FxAction>(_marshaledNext)
            );
            Assert.Equal(
                _fx.HasTx,
                BlockMarshaler.UnmarshalBlock<FxAction>(_marshaledHasTx)
            );
        }
    }
}
