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

        /// <summary>
        /// Instantiates a new <see cref="LotSet"/>.
        /// </summary>
        /// <param name="height">The height of the consensus.</param>
        /// <param name="round">The round of the consensus.</param>
        /// <param name="lastProof">The last <see cref="Proof"/>
        /// that has been decided on last round.
        /// if last round is zero, it represents <see cref="Proof"/> of the last block.</param>
        /// <param name="validatorSet">The <see cref="ValidatorSet"/> of consensus.</param>
        /// <param name="drawSize">The size of draw for selecting dominant lot.
        /// if this value is too small, probability of selection can be close to even,
        /// and influence of validator power can be reduced.</param>
        public LotSet(
            long height, int round, Proof? lastProof, ValidatorSet validatorSet, int drawSize)
            : this(
                  new ConsensusInformation(height, Math.Max(round, 0), lastProof),
                  validatorSet,
                  drawSize)
        {
        }

        /// <summary>
        /// Instantiates a new <see cref="LotSet"/>.
        /// </summary>
        /// <param name="consensusInformation">The information of the consensus.</param>
        /// <param name="validatorSet">The <see cref="ValidatorSet"/> of consensus.</param>
        /// <param name="drawSize">The size of draw for selecting dominant lot.
        /// if this value is too small, probability of selection can be close to even,
        /// and influence of validator power can be reduced.</param>
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

        /// <summary>
        /// The height of the consensus.
        /// </summary>
        public long Height => _consensusInformation.Height;

        /// <summary>
        /// The round of the consensus.
        /// </summary>
        public int Round => _consensusInformation.Round;

        /// <summary>
        /// The last <see cref="Proof"/> that has been decided on last round.
        /// if last round is zero, it represents <see cref="Proof"/> of the last block.
        /// </summary>
        public Proof? LastProof => _consensusInformation.LastProof;

        /// <summary>
        /// The information of the consensus.
        /// </summary>
        public ConsensusInformation ConsensusInformation => _consensusInformation;

        /// <summary>
        /// The <see cref="Lot"/> that has gain the majority +2/3 of the power of the validator set
        /// by <see cref="Libplanet.Consensus.DominantLot"/>.
        /// </summary>
        public Lot? Maj23 { get; private set; }

        /// <summary>
        /// The <see cref="Lot"/> that is dominant among the gathered.
        /// </summary>
        public Lot? DominantLot
            => _dominantLot?.Item1;

        /// <summary>
        /// The <see cref="Lot"/>s that have been gathered.
        /// </summary>
        public ImmutableDictionary<PublicKey, Lot> Lots
            => _lots.ToImmutableDictionary();

        /// <summary>
        /// The <see cref="Libplanet.Consensus.DominantLot"/>s that have been gathered.
        /// </summary>
        public ImmutableDictionary<PublicKey, DominantLot> DominantLots
            => _dominantLots.ToImmutableDictionary();

        /// <summary>
        /// Sets the round of the <see cref="LotSet"/>.
        /// </summary>
        /// <param name="round">The round of the consensus.</param>
        /// <param name="lastProof">The last proof that has been decided on the last round.</param>
        public void SetRound(int round, Proof? lastProof)
        {
            if (round <= Round)
            {
                throw new ArgumentException(
                    $"Parameter round must be greater than the current round {Round}.",
                    nameof(round));
            }

            _consensusInformation = new ConsensusInformation(Height, Math.Max(round, 0), lastProof);
            _lots.Clear();
            _dominantLot = null;
            _dominantLots.Clear();
            _lotsPower.Clear();
            Maj23 = null;
        }

        /// <summary>
        /// Generate a <see cref="Proof"/> for the <see cref="ConsensusInformation"/>.
        /// </summary>
        /// <param name="privateKey">The prover of the <see cref="Proof"/>.</param>
        /// <returns>A <see cref="Proof"/> that has been proved by <paramref name="privateKey"/>,
        /// with the <see cref="ConsensusInformation"/>.</returns>
        public Proof GenerateProof(PrivateKey privateKey)
            => _consensusInformation.Prove(privateKey);

        /// <summary>
        /// Generate a <see cref="Lot"/> for the <see cref="ConsensusInformation"/>.
        /// </summary>
        /// <param name="privateKey">The prover of the <see cref="Lot"/>.</param>
        /// <returns>A <see cref="Lot"/> that has been proved by <paramref name="privateKey"/>,
        /// with the <see cref="ConsensusInformation"/>.</returns>
        public Lot GenerateLot(PrivateKey privateKey)
            => _consensusInformation.ToLot(privateKey);

        /// <summary>
        /// Add a <see cref="Lot"/> to the <see cref="LotSet"/>.
        /// </summary>
        /// <param name="lot">A <see cref="Lot"/> to be added.</param>
        /// <exception cref="InvalidLotException">Thrown when <paramref name="lot"/>
        /// is duplicated, or does not match with <see cref="ConsensusInformation"/>,
        /// or prover does not belongs to the validator set.</exception>
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

        /// <summary>
        /// Add a <see cref="Libplanet.Consensus.DominantLot"/> to the <see cref="LotSet"/>.
        /// </summary>
        /// <param name="dominantLot">A <see cref="Libplanet.Consensus.DominantLot"/>
        /// to be added.</param>
        /// <exception cref="InvalidDominantLotException">Thrown when
        /// <paramref name="dominantLot"/> is duplicated, or does not belongs to the
        /// validator set.</exception>
        /// <exception cref="InvalidLotException">Thrown when <see cref="Lot"/> of
        /// <paramref name="dominantLot"/> does not match with
        /// <see cref="ConsensusInformation"/>, or prover does not belongs to the validator set.
        /// </exception>
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

        private void UpdateMaj23(DominantLot dominantLot)
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
                && (drawn < dominantLot.Item2
                    || (drawn == dominantLot.Item2 && lot.Proof <= dominantLot.Item1.Proof))))
            {
                _dominantLot = (lot, drawn);
            }
        }
    }
}
