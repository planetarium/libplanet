using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Blocks;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;
using FxAction = Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.BaseAction>;

namespace Libplanet.Tests
{
    public class BlockMarshalerTest : IClassFixture<BlockFixture>
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
        private static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'
        private static readonly byte[] TxHashKey = { 0x78 }; // 'x'
        private static readonly byte[] HashKey = { 0x68 }; // 'h'
        private static readonly byte[] StateRootHashKey = { 0x73 }; // 's'
        private static readonly byte[] PreEvaluationHashKey = { 0x63 }; // 'c'

        // Block fields:
        private static readonly byte[] HeaderKey = { 0x48 }; // 'H'
        private static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

        private readonly ITestOutputHelper _output;
        private readonly BlockFixture _fx;
        private readonly Dictionary _marshaledGenesis;
        private readonly Dictionary _marshaledNext;
        private readonly Dictionary _marshaledHasTx;

        public BlockMarshalerTest(BlockFixture fixture, ITestOutputHelper output)
        {
            _output = output;
            _fx = fixture;

            var expectedGenesisHeader = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.Genesis.ProtocolVersion)
                .Add(IndexKey, _fx.Genesis.Index)
                .Add(
                    TimestampKey,
                    _fx.Genesis.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.Genesis.Difficulty)
                .Add(TotalDifficultyKey, (IValue)(Integer)_fx.Genesis.TotalDifficulty)
                .Add(NonceKey, _fx.Genesis.Nonce.ByteArray)
                .Add(MinerKey, _fx.Genesis.Miner.ByteArray)
                .Add(PreEvaluationHashKey, _fx.Genesis.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.Genesis.StateRootHash.ByteArray)
                .Add(HashKey, _fx.Genesis.Hash.ByteArray);
            _marshaledGenesis = Dictionary.Empty
                .Add(HeaderKey, expectedGenesisHeader);

            var expectedNextHeader = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.Next.ProtocolVersion)
                .Add(IndexKey, _fx.Next.Index)
                .Add(PreviousHashKey, _fx.Next.PreviousHash.Value.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.Next.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.Next.Difficulty)
                .Add(TotalDifficultyKey, (IValue)(Integer)_fx.Next.TotalDifficulty)
                .Add(NonceKey, _fx.Next.Nonce.ByteArray)
                .Add(MinerKey, _fx.Next.Miner.ByteArray)
                .Add(PreEvaluationHashKey, _fx.Next.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.Next.StateRootHash.ByteArray)
                .Add(HashKey, _fx.Next.Hash.ByteArray);
            _marshaledNext = Dictionary.Empty
                .Add(HeaderKey, expectedNextHeader);

            var expectedHasTxHeader = Dictionary.Empty
                .Add(ProtocolVersionKey, _fx.HasTx.ProtocolVersion)
                .Add(IndexKey, _fx.HasTx.Index)
                .Add(PreviousHashKey, _fx.HasTx.PreviousHash.Value.ByteArray)
                .Add(
                    TimestampKey,
                    _fx.HasTx.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(DifficultyKey, _fx.HasTx.Difficulty)
                .Add(TotalDifficultyKey, (IValue)(Integer)_fx.HasTx.TotalDifficulty)
                .Add(NonceKey, _fx.HasTx.Nonce.ByteArray)
                .Add(MinerKey, _fx.HasTx.Miner.ByteArray)
                .Add(TxHashKey, _fx.HasTx.TxHash.Value.ByteArray)
                .Add(PreEvaluationHashKey, _fx.HasTx.PreEvaluationHash)
                .Add(StateRootHashKey, _fx.HasTx.StateRootHash.ByteArray)
                .Add(HashKey, _fx.HasTx.Hash.ByteArray);
            IValue expectedHasTxTxs = new List(
                _fx.HasTx.Transactions.Select(tx => (Binary)tx.Serialize(true)).Cast<IValue>()
            );
            _marshaledHasTx = Dictionary.Empty
                .Add(HeaderKey, expectedHasTxHeader)
                .Add(TransactionsKey, expectedHasTxTxs);
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
                BlockMarshaler.UnmarshalBlock<FxAction>(_fx.GetHashAlgorithm, _marshaledGenesis)
            );
            Assert.Equal(
                _fx.Next,
                BlockMarshaler.UnmarshalBlock<FxAction>(_fx.GetHashAlgorithm, _marshaledNext)
            );
            Assert.Equal(
                _fx.HasTx,
                BlockMarshaler.UnmarshalBlock<FxAction>(_fx.GetHashAlgorithm, _marshaledHasTx)
            );
        }
    }
}
