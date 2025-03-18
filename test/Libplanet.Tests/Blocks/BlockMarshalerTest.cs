using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Blocks;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public partial class BlockMarshalerTest
        : IClassFixture<BlockFixture>, IClassFixture<BlockContentFixture>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // Header fields:
        private static readonly byte[] ProtocolVersionKey = { 0x00 };
        private static readonly byte[] IndexKey = { 0x69 }; // 'i'
        private static readonly byte[] TimestampKey = { 0x74 }; // 't'
        private static readonly byte[] DifficultyKey = { 0x64 }; // 'd'; Legacy, unused.
        private static readonly byte[] TotalDifficultyKey = { 0x54 }; // 'T'; Legacy, unused.
        private static readonly byte[] NonceKey = { 0x6e }; // 'n'; Legacy, unused.
        private static readonly byte[] MinerKey = { 0x6d }; // 'm'
        private static readonly byte[] PublicKeyKey = { 0x50 }; // 'P'
        private static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'
        private static readonly byte[] TxHashKey = { 0x78 }; // 'x'
        private static readonly byte[] HashKey = { 0x68 }; // 'h'
        private static readonly byte[] StateRootHashKey = { 0x73 }; // 's'
        private static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static readonly byte[] PreEvaluationHashKey = { 0x63 }; // 'c'
        private static readonly byte[] LastCommitKey = { 0x43 }; // 'C'
        private static readonly byte[] EvidenceHashKey = { 0x76 }; // 'v

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
                .Add(PublicKeyKey, _fx.Genesis.PublicKey.Format(compress: true))
                .Add(TxHashKey, _fx.Genesis.TxHash.Value.ByteArray);
            var expectedGenesisHeader = _marshaledGenesisMetadata
                .Add(PreEvaluationHashKey, _fx.Genesis.PreEvaluationHash.ByteArray)
                .Add(StateRootHashKey, _fx.Genesis.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.Genesis.Signature ?? default)
                .Add(HashKey, _fx.Genesis.Hash.ByteArray);
            IValue expectedGenesisTx = new List(
                _fx.Genesis.Transactions.Select(tx => tx.Serialize()));
            _marshaledGenesis = Dictionary.Empty
                .Add(HeaderKey, expectedGenesisHeader)
                .Add(TransactionsKey, expectedGenesisTx);

            // Index #1 block does not have LastCommit.
            _marshaledNextMetadata = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.Next.ProtocolVersion)
                .Add(IndexKey, _fx.Next.Index)
                .Add(PreviousHashKey, _fx.Next.PreviousHash.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.Next.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(PublicKeyKey, _fx.Next.PublicKey.Format(compress: true));
            var expectedNextHeader = _marshaledNextMetadata
                .Add(PreEvaluationHashKey, _fx.Next.PreEvaluationHash.ByteArray)
                .Add(StateRootHashKey, _fx.Next.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.Next.Signature ?? default)
                .Add(HashKey, _fx.Next.Hash.ByteArray);
            _marshaledNext = Dictionary.Empty
                .Add(HeaderKey, expectedNextHeader);

            _marshaledHasTxMetadata = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.HasTx.ProtocolVersion)
                .Add(IndexKey, _fx.HasTx.Index)
                .Add(PreviousHashKey, _fx.HasTx.PreviousHash.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.HasTx.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(PublicKeyKey, _fx.HasTx.PublicKey.Format(true))
                .Add(TxHashKey, _fx.HasTx.TxHash.Value.ByteArray)
                .Add(LastCommitKey, _fx.HasTx.LastCommit.Bencoded);
            var expectedHasTxHeader = _marshaledHasTxMetadata
                .Add(PreEvaluationHashKey, _fx.HasTx.PreEvaluationHash.ByteArray)
                .Add(StateRootHashKey, _fx.HasTx.StateRootHash.ByteArray)
                .Add(SignatureKey, _fx.HasTx.Signature ?? default)
                .Add(HashKey, _fx.HasTx.Hash.ByteArray);
            IValue expectedHasTxTxs = new List(
                _fx.HasTx.Transactions.Select(tx => tx.Serialize()));
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
                    .Add(MinerKey, _content.GenesisContentPv0.Miner.Bencoded),
                BlockMarshaler.MarshalBlockMetadata(_content.GenesisContentPv0)
            );
            AssertBencodexEqual(
                Dictionary.Empty
                    .Add(ProtocolVersionKey, 1)
                    .Add(IndexKey, 1L)
                    .Add(
                        PreviousHashKey,
                        _content.Block1ContentPv1.PreviousHash.ByteArray)
                    .Add(TimestampKey, "2021-09-06T08:01:09.045000Z")
                    .Add(MinerKey, _content.Block1ContentPv1.Miner.Bencoded)
                    .Add(TxHashKey, _content.Block1ContentPv1.TxHash?.ByteArray ?? default)
                    .Add(
                        EvidenceHashKey,
                        _content.Block1ContentPv1.EvidenceHash?.ByteArray ?? default),
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
        public void UnmarshalBlockHash()
        {
            Assert.Equal(
                _fx.Genesis.Hash,
                BlockMarshaler.UnmarshalBlockHash(_fx.Genesis.MarshalBlock()));

            Assert.Equal(
                _fx.Next.Hash,
                BlockMarshaler.UnmarshalBlockHash(_fx.Next.MarshalBlock()));

            Assert.Equal(
                _fx.HasTx.Hash,
                BlockMarshaler.UnmarshalBlockHash(_fx.HasTx.MarshalBlock()));
        }

        [Fact]
        public void UnmarshalBlock()
        {
            _output.WriteLine(
                "{0} = {1}",
                nameof(_marshaledGenesis),
                _marshaledGenesis.Inspect());
            Assert.Equal(
                _fx.Genesis,
                BlockMarshaler.UnmarshalBlock(_marshaledGenesis)
            );
            _output.WriteLine(
                "{0} = {1}",
                nameof(_marshaledNext),
                _marshaledNext.Inspect());
            Assert.Equal(
                _fx.Next,
                BlockMarshaler.UnmarshalBlock(_marshaledNext)
            );
            _output.WriteLine(
                "{0} = {1}",
                nameof(_marshaledHasTx),
                _marshaledHasTx.Inspect());
            Assert.Equal(
                _fx.HasTx,
                BlockMarshaler.UnmarshalBlock(_marshaledHasTx)
            );
        }
    }
}
