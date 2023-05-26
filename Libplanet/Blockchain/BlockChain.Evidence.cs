using System;
using System.Collections.Generic;
using System.Numerics;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        public long ExpirationHeight => Tip.Index - _maxEvidenceDuration;

        public IEnumerable<DuplicateVoteEvidence> GetPendingEvidences()
            => Store.GetPendingEvidences();

        public void PutPendingEvidence(DuplicateVoteEvidence evidence)
        {
            Store.PutPendingEvidence(evidence);
        }

        public void DeletePendingEvidence(DuplicateVoteEvidence evidence)
        {
            Store.DeletePendingEvidence(evidence.Id);
        }

        public IEnumerable<DuplicateVoteEvidence> GetCommittedEvidences()
            => Store.GetCommittedEvidences();

        public void AddEvidence(DuplicateVoteEvidence evidence)
        {
            if (IsPending(evidence))
            {
                throw new ArgumentException($"Evidence {evidence} already pending.");
            }

            if (IsCommitted(evidence))
            {
                throw new ArgumentException($"Evidence {evidence} already committed.");
            }

            Verify(evidence);

            PutPendingEvidence(evidence);
        }

        public void CommitEvidence(DuplicateVoteEvidence evidence)
        {
            if (IsPending(evidence))
            {
                DeletePendingEvidence(evidence);
            }

            Store.PutCommittedEvidence(evidence);
        }

        public void ProcessExpiration()
        {
            foreach (DuplicateVoteEvidence evidence in GetPendingEvidences())
            {
                if (IsExpired(evidence))
                {
                    DeletePendingEvidence(evidence);
                }
            }
        }

        public void Update(List<DuplicateVoteEvidence> evidenceList)
        {
            ProcessDuplicatedVotesPool();
            foreach (var evidence in evidenceList)
            {
                CommitEvidence(evidence);
            }

            ProcessExpiration();
        }

        public void ProcessDuplicatedVotesPool()
        {
            foreach (Vote[] votes in _duplicatedVotesPool.Exhaust())
            {
                AddEvidence(
                    new DuplicateVoteEvidence(
                        votes,
                        GetValidatorSet(this[votes[0].Height].Hash),
                        DateTimeOffset.UtcNow));
            }
        }

        public void ReportConflictingVotes(Vote vote, Vote voteDup)
        {
            _duplicatedVotesPool.Add(vote, voteDup);
        }

        public bool IsPending(DuplicateVoteEvidence evidence)
            => Store.ContainsPendingEvidence(evidence.Id);

        public bool IsCommitted(DuplicateVoteEvidence evidence)
            => Store.ContainsCommittedEvidence(evidence.Id);

        public bool IsExpired(DuplicateVoteEvidence evidence)
            => evidence.Height < ExpirationHeight;

        public void Verify(DuplicateVoteEvidence evidence)
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
