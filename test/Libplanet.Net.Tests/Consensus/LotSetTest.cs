using System;
using System.Linq;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class LotSetTest
    {
        private const int DrawSize = 20;
        private readonly Proof _lastProof;
        private readonly ConsensusInformation _consensusInformation;
        private readonly LotSet _lotSet;

        public LotSetTest()
        {
            _lastProof = new ConsensusInformation(1L, 1, null).Prove(new PrivateKey());
            _consensusInformation = new ConsensusInformation(1L, 2, _lastProof);
            _lotSet = new LotSet(_consensusInformation, TestUtils.ValidatorSet, DrawSize);
        }

        [Fact]
        public void Constructor()
        {
            var lotSet = new LotSet(
                1L,
                2,
                _lastProof,
                TestUtils.ValidatorSet,
                DrawSize);

            Assert.Equal(1L, lotSet.Height);
            Assert.Equal(2, lotSet.Round);
            Assert.Equal(_lastProof, lotSet.LastProof);
            Assert.Equal(_consensusInformation, lotSet.ConsensusInformation);
            Assert.Null(lotSet.Maj23);
            Assert.Null(lotSet.DominantLot);
            Assert.Empty(lotSet.Lots);
            Assert.Empty(lotSet.DominantLots);
        }

        [Fact]
        public void SetRound()
        {
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[0]));
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[1]));
            _lotSet.AddDominantLot(
                new DominantLotMetadata(
                    _lotSet.Lots[TestUtils.PrivateKeys[0].PublicKey],
                    DateTimeOffset.MinValue,
                    TestUtils.PrivateKeys[1].PublicKey).Sign(TestUtils.PrivateKeys[1]));
            _lotSet.AddDominantLot(
                new DominantLotMetadata(
                    _lotSet.Lots[TestUtils.PrivateKeys[0].PublicKey],
                    DateTimeOffset.MinValue,
                    TestUtils.PrivateKeys[2].PublicKey).Sign(TestUtils.PrivateKeys[2]));
            _lotSet.AddDominantLot(
                new DominantLotMetadata(
                    _lotSet.Lots[TestUtils.PrivateKeys[0].PublicKey],
                    DateTimeOffset.MinValue,
                    TestUtils.PrivateKeys[3].PublicKey).Sign(TestUtils.PrivateKeys[3]));

            Assert.NotNull(_lotSet.Maj23);
            Assert.NotNull(_lotSet.DominantLot);
            Assert.Equal(2, _lotSet.Lots.Count);
            Assert.Equal(3, _lotSet.DominantLots.Count);

            Assert.Throws<ArgumentException>(() => _lotSet.SetRound(1, null));
            _lotSet.SetRound(3, null);
            Assert.Null(_lotSet.Maj23);
            Assert.Null(_lotSet.DominantLot);
            Assert.Empty(_lotSet.Lots);
            Assert.Empty(_lotSet.DominantLots);
        }

        [Fact]
        public void GenerateProof()
        {
            var prover = new PrivateKey();
            var proof = _lotSet.GenerateProof(prover);
            Assert.Equal(_consensusInformation.Prove(prover), proof);
            Assert.True(_consensusInformation.Verify(proof, prover.PublicKey));
        }

        [Fact]
        public void GenerateLot()
        {
            var prover = new PrivateKey();
            var lot = _lotSet.GenerateLot(prover);
            Assert.Equal(_consensusInformation.ToLot(prover), lot);
            Assert.Equal(1L, lot.Height);
            Assert.Equal(2, lot.Round);
            Assert.Equal(_lastProof, lot.LastProof);
            Assert.Equal(_consensusInformation, lot.ConsensusInformation);
            Assert.Equal(prover.PublicKey, lot.PublicKey);
        }

        [Fact]
        public void AddLot()
        {
            Assert.Throws<InvalidLotException>(
                () => _lotSet.AddLot(_consensusInformation.ToLot(new PrivateKey())));
            Assert.Throws<InvalidLotException>(
                () => _lotSet.AddLot(
                    new ConsensusInformation(0L, 0, null)
                    .ToLot(TestUtils.PrivateKeys[0])));
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[0]));
            Assert.Throws<InvalidLotException>(
                () => _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[0])));
            Assert.Single(_lotSet.Lots);
            _lotSet.DominantLot.Equals(_lotSet.Lots[TestUtils.PrivateKeys[0].PublicKey]);
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[1]));
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[2]));
            _lotSet.AddLot(_consensusInformation.ToLot(TestUtils.PrivateKeys[3]));
            Assert.Equal(4, _lotSet.Lots.Count);
            Lot dominantLot = (Lot)_lotSet.DominantLot!;
            var nonDominantLots
                = _lotSet.Lots.Remove(dominantLot.PublicKey).Select(e => e.Value);
            Assert.All(nonDominantLots, lot => Assert.True(FormerLotWins(dominantLot, lot)));
        }

        [Fact]
        public void AddDominantLot()
        {
            var nonValidator = new PrivateKey();
            Assert.Throws<InvalidDominantLotException>(
                () => _lotSet.AddDominantLot(
                    new DominantLotMetadata(
                        _consensusInformation.ToLot(TestUtils.PrivateKeys[0]),
                        DateTimeOffset.MinValue,
                        nonValidator.PublicKey).Sign(nonValidator)));
            Assert.Throws<InvalidLotException>(
                () => _lotSet.AddDominantLot(
                    new DominantLotMetadata(
                        _consensusInformation.ToLot(new PrivateKey()),
                        DateTimeOffset.MinValue,
                        TestUtils.PrivateKeys[0].PublicKey).Sign(TestUtils.PrivateKeys[0])));
            Assert.Throws<InvalidLotException>(
                () => _lotSet.AddDominantLot(
                    new DominantLotMetadata(
                        new ConsensusInformation(0L, 0, null)
                            .ToLot(TestUtils.PrivateKeys[0]),
                        DateTimeOffset.MinValue,
                        TestUtils.PrivateKeys[0].PublicKey).Sign(TestUtils.PrivateKeys[0])));
            var lotByValidator0 = _consensusInformation.ToLot(TestUtils.PrivateKeys[0]);
            _lotSet.AddDominantLot(new DominantLotMetadata(
                lotByValidator0,
                DateTimeOffset.MinValue,
                TestUtils.PrivateKeys[0].PublicKey).Sign(TestUtils.PrivateKeys[0]));
            Assert.Throws<InvalidDominantLotException>(
                () => _lotSet.AddDominantLot(
                    new DominantLotMetadata(
                        lotByValidator0,
                        DateTimeOffset.MinValue,
                        TestUtils.PrivateKeys[0].PublicKey).Sign(TestUtils.PrivateKeys[0])));
            Assert.Throws<InvalidDominantLotException>(
                () => _lotSet.AddDominantLot(
                    new DominantLotMetadata(
                        _consensusInformation.ToLot(TestUtils.PrivateKeys[1]),
                        DateTimeOffset.MinValue,
                        TestUtils.PrivateKeys[0].PublicKey).Sign(TestUtils.PrivateKeys[0])));
            Assert.Single(_lotSet.DominantLots);
            Assert.Null(_lotSet.Maj23);
            _lotSet.AddDominantLot(new DominantLotMetadata(
                lotByValidator0,
                DateTimeOffset.MinValue,
                TestUtils.PrivateKeys[1].PublicKey).Sign(TestUtils.PrivateKeys[1]));
            _lotSet.AddDominantLot(new DominantLotMetadata(
                _consensusInformation.ToLot(TestUtils.PrivateKeys[1]),
                DateTimeOffset.MinValue,
                TestUtils.PrivateKeys[2].PublicKey).Sign(TestUtils.PrivateKeys[2]));
            Assert.Equal(3, _lotSet.DominantLots.Count);
            _lotSet.AddDominantLot(new DominantLotMetadata(
                lotByValidator0,
                DateTimeOffset.MinValue,
                TestUtils.PrivateKeys[3].PublicKey).Sign(TestUtils.PrivateKeys[3]));
            Assert.Equal(lotByValidator0, _lotSet.Maj23);
        }

        private static bool FormerLotWins(Lot former, Lot latter)
        {
            var formerDraw = former.Proof.Draw(
                DrawSize,
                TestUtils.ValidatorSet.GetValidator(former.PublicKey).Power,
                TestUtils.ValidatorSet.TotalPower);
            var latterDraw = latter.Proof.Draw(
                DrawSize,
                TestUtils.ValidatorSet.GetValidator(former.PublicKey).Power,
                TestUtils.ValidatorSet.TotalPower);
            return formerDraw > latterDraw
                || (formerDraw == latterDraw && former.Proof > latter.Proof);
        }
    }
}
