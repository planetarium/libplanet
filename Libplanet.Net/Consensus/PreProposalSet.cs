using System.Collections.Concurrent;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class PreProposalSet
    {
        private static readonly Codec _codec = new Codec();
        private readonly ILogger _logger;
        private ConsensusInformation? _consensusInformation;
        private ValidatorSet _validatorSet;
        private ConcurrentDictionary<PublicKey, PreProposal> _preProposals;
        private int _drawSize;
        private (PreEvaluationBlock, BigInteger)? _dominantPreEvalBlock;

        public PreProposalSet(
            long height, int round, ValidatorSet validatorSet, int drawSize)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<PreProposalSet>()
                .ForContext("Source", nameof(PreProposalSet));
            _consensusInformation = null;
            Height = height;
            Round = round;
            Maj23 = null;
            _validatorSet = validatorSet;
            _preProposals = new ConcurrentDictionary<PublicKey, PreProposal>();
            _drawSize = drawSize;
            _dominantPreEvalBlock = null;
        }

        public PreProposalSet(
            ConsensusInformation consensusInformation, ValidatorSet validatorSet, int drawSize)
            : this(consensusInformation.Height, consensusInformation.Round, validatorSet, drawSize)
        {
            _consensusInformation = consensusInformation;
        }

        public PreProposalSet(
            long height, int round, Proof? lastProof, ValidatorSet validatorSet, int drawSize)
            : this(new ConsensusInformation(height, round, lastProof), validatorSet, drawSize)
        {
        }

        public long Height { get; }

        public int Round { get; }

        public Proof? LastProof { get; private set; }

        public PreEvaluationBlock? Maj23 { get; private set; }

        public (PreEvaluationBlock, BigInteger)? DominantPreEvalBlock
            => _dominantPreEvalBlock;

        public void UpdateLastProof(Proof? lastProof)
        {
            _consensusInformation = new ConsensusInformation(Height, Round, lastProof);
            foreach (PreProposal preProposal in _preProposals.Values)
            {
                CompetePreProposal(preProposal);
            }
        }

        public void AddPreProposal(PreProposal preProposal)
        {
            PublicKey preProposer = preProposal.ValidatorPublicKey;
            _preProposals.TryAdd(preProposer, preProposal);

            if (_consensusInformation is null)
            {
                return;
            }

            CompetePreProposal(preProposal);
        }

        public bool TryGetPreEvaluationBlock(
            HashDigest<SHA256> preEvaluationBlockhash,
            out PreEvaluationBlock? preEvaluationBlock)
        {
            preEvaluationBlock = null;

            if (DominantPreEvalBlock is { } dominant
                && dominant.Item1.PreEvaluationHash.Equals(preEvaluationBlockhash))
            {
                preEvaluationBlock = dominant.Item1;
                return true;
            }

            PreProposal preProposal;
            try
            {
                preProposal = _preProposals.Values.First(
                    v => v.PreEvaluationHash.Equals(preEvaluationBlockhash));
                preEvaluationBlock = BlockMarshaler.UnmarshalPreEvaluationBlock(
                    (Dictionary)_codec.Decode(preProposal.MarshaledPreEvalBlock));
            }
            catch
            {
                return false;
            }

            return true;
        }

        public void AddMaj23(PreEvaluationBlock maj23)
        {
            Maj23 = maj23;
        }

        private void CompetePreProposal(PreProposal preProposal)
        {
            if (!(_consensusInformation is ConsensusInformation consensusInformation))
            {
                throw new ConsensusInformationNotPreparedException(
                    $"{nameof(_consensusInformation)} is expected to exist during competition," +
                    $"but it's empty");
            }

            PublicKey preProposer = preProposal.ValidatorPublicKey;

            if (!preProposal.Height.Equals(Height)
                || !preProposal.Round.Equals(Round)
                || !preProposal.LastProof.Equals(LastProof))
            {
                throw new InvalidPreProposalException(
                    $"{nameof(preProposal)} has different consensus information with " +
                    $"{nameof(PreProposalSet)}. " +
                    $"Expected : height {Height}, round {Round}, last proof {LastProof}" +
                    $"Actual : height {preProposal.Height}, round {preProposal.Round}, " +
                    $"last proof {preProposal.LastProof}",
                    preProposal);
            }

            if (_preProposals.ContainsKey(preProposer))
            {
                throw new InvalidPreProposalException(
                    $"Found duplicated {nameof(preProposal)} of pre-proposer {preProposer}",
                    preProposal);
            }

            if (!(_codec.Decode(preProposal.MarshaledPreEvalBlock)
                is Dictionary bencodedPreEvalBlock))
            {
                throw new InvalidPreProposalException(
                    $"{nameof(preProposal.MarshaledPreEvalBlock)} of {nameof(preProposal)} " +
                    $"cannot be decoded as a {nameof(Dictionary)}",
                    preProposal);
            }

            if (!(BlockMarshaler.UnmarshalProof(bencodedPreEvalBlock)
                is Proof proof))
            {
                throw new InvalidPreProposalException(
                    $"{nameof(preProposal.MarshaledPreEvalBlock)} does not have {nameof(Proof)}",
                    preProposal);
            }

            if (consensusInformation.Verify(proof, preProposer))
            {
                throw new InvalidPreProposalException(
                    $"{nameof(Proof)} of {nameof(preProposal)} {proof} cannot be verified with" +
                    $"{nameof(preProposer)} {preProposer} and {nameof(ConsensusInformation)}" +
                    $"{_consensusInformation}",
                    preProposal);
            }

            BigInteger drawn = proof.Draw(
                _drawSize,
                _validatorSet.GetValidator(preProposer).Power,
                _validatorSet.TotalPower);

            if (!(_dominantPreEvalBlock is { } dominantPreEvalBlock
                && drawn < dominantPreEvalBlock.Item2))
            {
                PreEvaluationBlock preEvalBlock
                    = BlockMarshaler.UnmarshalPreEvaluationBlock(bencodedPreEvalBlock);

                // Won't check PreEvaluationBlock integrity.
                // Only proof integrity check helds on pre-propose step.
                _dominantPreEvalBlock = (preEvalBlock, drawn);
            }
        }
    }
}
