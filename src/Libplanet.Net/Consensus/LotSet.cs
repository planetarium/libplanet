using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class LotSet
    {
        private static readonly Codec _codec = new Codec();
        private readonly ILogger _logger;
        private ConsensusInformation _consensusInformation;
        private ValidatorSet _validatorSet;
        private ConcurrentDictionary<PublicKey, Lot> _lots;
        private int _drawSize;
        private (Lot, BigInteger)? _dominantLot;
        private ConcurrentDictionary<PublicKey, DominantLot> _dominantLots;
        private ConcurrentDictionary<Lot, BigInteger> _lotsPower;

        public LotSet(
            long height, int round, Proof? lastProof, ValidatorSet validatorSet, int drawSize)
            : this(
                  new ConsensusInformation(height, Math.Max(round, 0), lastProof),
                  validatorSet,
                  drawSize)
        {
        }

        public LotSet(
            ConsensusInformation consensusInformation, ValidatorSet validatorSet, int drawSize)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<LotSet>()
                .ForContext("Source", nameof(LotSet));
            _consensusInformation = consensusInformation;
            _validatorSet = validatorSet;
            _lots = new ConcurrentDictionary<PublicKey, Lot>();
            _drawSize = drawSize;
            _dominantLot = null;
            _dominantLots = new ConcurrentDictionary<PublicKey, DominantLot>();
            _lotsPower = new ConcurrentDictionary<Lot, BigInteger>();
            Maj23 = null;
        }

        public long Height => _consensusInformation.Height;

        public int Round => _consensusInformation.Round;

        public Proof? LastProof => _consensusInformation.LastProof;

        public ConsensusInformation Consensusinformation => _consensusInformation;

        public Lot? Maj23 { get; private set; }

        public Lot? DominantLot
            => _dominantLot?.Item1;

        public ImmutableDictionary<PublicKey, Lot> Lots
            => _lots.ToImmutableDictionary();

        public ImmutableDictionary<PublicKey, DominantLot> DominantLots
            => _dominantLots.ToImmutableDictionary();

        public void SetRound(int round, Proof? lastProof)
        {
            _consensusInformation = new ConsensusInformation(Height, Math.Max(round, 0), lastProof);
            _lots.Clear();
            _dominantLots.Clear();
        }

        public Proof GenerateProof(PrivateKey privateKey)
            => _consensusInformation.Prove(privateKey);

        public Lot GenerateLot(PrivateKey privateKey)
            => _consensusInformation.ToLot(privateKey);

        public void AddLot(Lot lot)
        {
            if (_lots.ContainsKey(lot.PublicKey))
            {
                throw new InvalidLotException(
                    $"Found duplicated {nameof(lot)} of public key {lot.PublicKey}",
                    lot);
            }

            ValidateLot(lot);
            _lots.TryAdd(lot.PublicKey, lot);
            CompeteLot(lot);
        }

        public void AddDominantLot(DominantLot dominantLot)
        {
            if (_dominantLots.ContainsKey(dominantLot.ValidatorPublicKey))
            {
                throw new InvalidDominantLotException(
                    $"Found duplicated {nameof(dominantLot)} " +
                    $"of public key {dominantLot.ValidatorPublicKey}",
                    dominantLot);
            }

            if (!_validatorSet.ContainsPublicKey(dominantLot.ValidatorPublicKey))
            {
                throw new InvalidDominantLotException(
                    $"Public key of {nameof(dominantLot)} {dominantLot.ValidatorPublicKey} " +
                    $"is not in the validator set.",
                    dominantLot);
            }

            ValidateLot(dominantLot.Lot);
            _dominantLots.TryAdd(dominantLot.ValidatorPublicKey, dominantLot);
            UpdateMaj23(dominantLot);
        }

        public void UpdateMaj23(DominantLot dominantLot)
        {
            BigInteger validatorPower = _validatorSet.GetValidatorsPower(
                new List<PublicKey>() { dominantLot.ValidatorPublicKey });
            _lotsPower.AddOrUpdate(
                dominantLot.Lot, validatorPower, (lot, power) => power + validatorPower);

            if (!_lotsPower.TryGetValue(dominantLot.Lot, out BigInteger lotPower))
            {
                throw new NullReferenceException(
                    "Lot is expected to exist in the dictionary, but it does not.");
            }

            if (lotPower > _validatorSet.TwoThirdsPower)
            {
                Maj23 = dominantLot.Lot;
            }
        }

        private void ValidateLot(Lot lot)
        {
            if (!lot.ConsensusInformation.Equals(_consensusInformation))
            {
                throw new InvalidLotException(
                    $"{nameof(lot)} has different consensus information with " +
                    $"{nameof(LotSet)}. " +
                    $"Expected : height {Height}, round {Round}, last proof {LastProof}" +
                    $"Actual : height {lot.ConsensusInformation.Height}, " +
                    $"round {lot.ConsensusInformation.Round}, " +
                    $"last proof {lot.ConsensusInformation.LastProof}",
                    lot);
            }

            if (!_validatorSet.ContainsPublicKey(lot.PublicKey))
            {
                throw new InvalidLotException(
                    $"Public key of {nameof(lot)} {lot.PublicKey} is not in the validator set.",
                    lot);
            }
        }

        private void CompeteLot(Lot lot)
        {
            BigInteger drawn = lot.Proof.Draw(
                _drawSize,
                _validatorSet.GetValidator(lot.PublicKey).Power,
                _validatorSet.TotalPower);

            if (!(_dominantLot is { } dominantLot
                && drawn < dominantLot.Item2))
            {
                _dominantLot = (lot, drawn);
            }
        }
    }
}
