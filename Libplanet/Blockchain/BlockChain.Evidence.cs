using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Libplanet.Consensus;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        public long EvidenceExpirationHeight => Tip.Index - _maxEvidenceDuration;

        public ImmutableArray<Evidence> GetPendingEvidences()
            => Store.IteratePendingEvidenceIds().OrderBy(id => id).Select(
                id => Store.GetPendingEvidence(id)).ToImmutableArray();

        public void PutPendingEvidence(Evidence evidence)
        {
            Store.PutPendingEvidence(evidence);
        }

        public void DeletePendingEvidence(Evidence evidence)
        {
            Store.DeletePendingEvidence(evidence.Id);
        }

        public void AddEvidence(Evidence evidence)
        {
            if (IsEvidenceCommitted(evidence))
            {
                throw new ArgumentException($"Evidence {evidence} already committed.");
            }

            if (IsEvidencePending(evidence))
            {
                throw new ArgumentException($"Evidence {evidence} already pending.");
            }

            VerifyEvidence(evidence);

            PutPendingEvidence(evidence);
        }

        public void CommitEvidence(Evidence evidence)
        {
            if (IsEvidenceCommitted(evidence))
            {
                throw new ArgumentException($"Evidence {evidence} already committed.");
            }

            if (IsEvidencePending(evidence))
            {
                DeletePendingEvidence(evidence);
            }

            Store.PutCommittedEvidence(evidence);
        }

        public void ProcessEvidenceExpiration()
        {
            foreach (Evidence evidence in GetPendingEvidences())
            {
                if (IsEvidenceExpired(evidence))
                {
                    DeletePendingEvidence(evidence);
                }
            }
        }

        public void UpdateEvidence(
            IEnumerable<Vote[]> duplicatedVoteSets, IEnumerable<Evidence>? blockEvidences)
        {
            ProcessDuplicatedVoteSets(duplicatedVoteSets);

            if (blockEvidences is { } evidences)
            {
                foreach (var evidence in evidences)
                {
                    CommitEvidence(evidence);
                }
            }

            ProcessEvidenceExpiration();
        }

        public void ProcessDuplicatedVoteSets(IEnumerable<Vote[]> duplicatedVoteSets)
        {
            foreach (Vote[] votes in duplicatedVoteSets)
            {
                AddEvidence(
                    new DuplicateVoteEvidence(
                        votes,
                        GetValidatorSet(this[votes[0].Height].Hash),
                        DateTimeOffset.UtcNow));
            }
        }

        public bool IsEvidencePending(Evidence evidence)
            => Store.ContainsPendingEvidence(evidence.Id);

        public bool IsEvidenceCommitted(Evidence evidence)
            => Store.ContainsCommittedEvidence(evidence.Id);

        public bool IsEvidenceExpired(Evidence evidence)
            => evidence.Height < EvidenceExpirationHeight;

        public void VerifyEvidence(Evidence evidence)
        {
            switch (evidence)
            {
                case DuplicateVoteEvidence duplicateVoteEvidence:
                    VerifyDuplicateVoteEvidence(duplicateVoteEvidence);
                    break;
                default:
                    break;
            }
        }

        public void VerifyDuplicateVoteEvidence(DuplicateVoteEvidence evidence)
        {
            ValidatorSet validatorSet = GetValidatorSet(this[evidence.Height].Hash);
            BigInteger validatorPower
                = validatorSet.GetValidator(evidence.Votes[0].ValidatorPublicKey).Power;
            BigInteger totalPower = validatorSet.TotalPower;

            if (validatorSet.PublicKeys.Contains(evidence.Votes[0].ValidatorPublicKey))
            {
                throw new InvalidEvidenceException(
                    $"Evidence public key is not a validator. " +
                    $"PublicKey: {evidence.Votes[0].ValidatorPublicKey}");
            }

            if (evidence.ValidatorPower != validatorPower)
            {
                throw new InvalidEvidenceException(
                    $"Evidence validator power is different from the actual. " +
                    $"Expected: {validatorPower}, " +
                    $"Actual: {evidence.ValidatorPower}");
            }

            if (evidence.TotalPower != validatorSet.TotalPower)
            {
                throw new InvalidEvidenceException(
                    $"Evidence total power is different from the actual. " +
                    $"Expected: {totalPower}, " +
                    $"Actual: {evidence.TotalPower}");
            }
        }
    }
}
