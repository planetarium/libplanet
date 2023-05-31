using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using Libplanet.Consensus;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        public long EvidenceExpirationHeight => Tip.Index - _maxEvidenceDuration;

        public IEnumerable<DuplicateVoteEvidence> GetPendingEvidences()
            => Store.IteratePendingEvidenceIds().Select(id => Store.GetPendingEvidence(id));

        public void PutPendingEvidence(DuplicateVoteEvidence evidence)
        {
            Store.PutPendingEvidence(evidence);
        }

        public void DeletePendingEvidence(DuplicateVoteEvidence evidence)
        {
            Store.DeletePendingEvidence(evidence.Id);
        }

        public void AddEvidence(DuplicateVoteEvidence evidence)
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

        public void CommitEvidence(DuplicateVoteEvidence evidence)
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
            foreach (DuplicateVoteEvidence evidence in GetPendingEvidences())
            {
                if (IsEvidenceExpired(evidence))
                {
                    DeletePendingEvidence(evidence);
                }
            }
        }

        public void UpdateEvidence(
            IEnumerable<Vote[]> duplicatedVoteSets, List<DuplicateVoteEvidence> blockEvidence)
        {
            ProcessDuplicatedVoteSets(duplicatedVoteSets);
            foreach (var evidence in blockEvidence)
            {
                CommitEvidence(evidence);
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

        public bool IsEvidencePending(DuplicateVoteEvidence evidence)
            => Store.ContainsPendingEvidence(evidence.Id);

        public bool IsEvidenceCommitted(DuplicateVoteEvidence evidence)
            => Store.ContainsCommittedEvidence(evidence.Id);

        public bool IsEvidenceExpired(DuplicateVoteEvidence evidence)
            => evidence.Height < EvidenceExpirationHeight;

        public void VerifyEvidence(DuplicateVoteEvidence evidence)
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
