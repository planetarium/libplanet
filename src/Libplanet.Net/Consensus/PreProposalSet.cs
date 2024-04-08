using System.Collections.Concurrent;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Consensus
{
    internal class PreProposalSet
    {
        private static readonly Codec _codec = new Codec();

        private ConsensusInformation _consensusInformation;
        private ValidatorSet _validatorSet;
        private ConcurrentDictionary<PublicKey, PreProposal> _preProsals;
        private int _drawSize;
        private (PreEvaluationBlock, BigInteger)? _dominantPreEvalBlock;

        public PreProposalSet(
            long height, int round, Proof? lastProof, ValidatorSet validatorSet, int drawSize)
            : this(new ConsensusInformation(height, round, lastProof), validatorSet, drawSize)
        {
        }

        public PreProposalSet(
            ConsensusInformation consensusInformation, ValidatorSet validatorSet, int drawSize)
        {
            _consensusInformation = consensusInformation;
            _validatorSet = validatorSet;
            _preProsals = new ConcurrentDictionary<PublicKey, PreProposal>();
            _drawSize = drawSize;
            _dominantPreEvalBlock = null;
        }

        public long Height => _consensusInformation.Height;

        public int Round => _consensusInformation.Round;

        public Proof? LastProof => _consensusInformation.LastProof;

        public (PreEvaluationBlock, BigInteger)? DominantPreEvalBlock
            => _dominantPreEvalBlock;

        public bool TryAdd(PreProposal preProposal)
        {
            PublicKey preProposer = preProposal.ValidatorPublicKey;

            if (!preProposal.Height.Equals(Height)
                || !preProposal.Round.Equals(Round)
                || !preProposal.LastProof.Equals(LastProof))
            {
                return false;
            }

            if (_preProsals.ContainsKey(preProposer))
            {
                return false;
            }

            if (_codec.Decode(preProposal.MarshaledPreEvalBlock) is Dictionary bencodedPreEvalBlock
                && BlockMarshaler.UnmarshalProof(bencodedPreEvalBlock) is Proof proof
                && _consensusInformation.Verify(proof, preProposer))
            {
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

                    return _preProsals.TryAdd(preProposer, preProposal);
                }
            }

            return false;
        }
    }
}
