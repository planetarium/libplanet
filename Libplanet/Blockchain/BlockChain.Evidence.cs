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
        /// <summary>
        /// Retrive pending <see cref="Evidence"/>s from the <see cref="Store"/>.
        /// </summary>
        /// <returns><see cref="Evidence"/>s that are pending waiting to be commmitted.
        /// Returned <see cref="Evidence"/>s are sorted by its <see cref="Evidence.Id"/>.
        /// </returns>
        public ImmutableArray<Evidence> GetPendingEvidences()
            => Store.IteratePendingEvidenceIds().OrderBy(id => id).Select(
                id => Store.GetPendingEvidence(id)).ToImmutableArray();

        /// <summary>
        /// Delete pending <see cref="Evidence"/> from the <see cref="Store"/> with
        /// its <see cref="Evidence.Id"/>.
        /// </summary>
        /// <param name="evidenceId"><see cref="EvidenceId"/> of the <see cref="Evidence"/>
        /// to delete.</param>
        public void DeletePendingEvidence(EvidenceId evidenceId)
        {
            Store.DeletePendingEvidence(evidenceId);
        }

        /// <summary>
        /// Add given <paramref name="evidence"/> to the <see cref="Store"/> as pending.
        /// </summary>
        /// <param name="evidence"><see cref="Evidence"/> to be added on the
        /// pending pool.</param>
        /// <exception cref="ArgumentException">Thrown if <paramref name="evidence"/>
        /// is already on the <see cref="Store"/>.</exception>
        public void AddEvidence(Evidence evidence)
        {
            if (IsEvidenceCommitted(evidence.Id))
            {
                throw new ArgumentException($"Evidence {evidence.Id} is already committed.");
            }

            if (IsEvidencePending(evidence.Id))
            {
                throw new ArgumentException($"Evidence {evidence.Id} is already pending.");
            }

            VerifyEvidence(evidence);

            Store.PutPendingEvidence(evidence);
        }

        /// <summary>
        /// Add given <paramref name="evidence"/> to the <see cref="Store"/> as committed.
        /// If <paramref name="evidence"/> is pending, it will be dropped from the pending pool.
        /// </summary>
        /// <param name="evidence"><see cref="Evidence"/> to be added on the
        /// committed pool.</param>
        /// <exception cref="ArgumentException">Thrown if <paramref name="evidence"/>
        /// is already on the <see cref="Store"/> as committed.</exception>
        public void CommitEvidence(Evidence evidence)
        {
            if (IsEvidenceCommitted(evidence.Id))
            {
                throw new ArgumentException($"Evidence {evidence.Id} is already committed.");
            }

            if (IsEvidencePending(evidence.Id))
            {
                DeletePendingEvidence(evidence.Id);
            }

            Store.PutCommittedEvidence(evidence);
        }

        /// <summary>
        /// Remove pending <see cref="Evidence"/>s that will be expired on the next
        /// <see cref="Blocks.Block"/>.
        /// This have to be called ahead of the proposer's proposal
        /// in order to <see cref="Blocks.Block.Evidences"/>
        /// on the <see cref="Consensus.Proposal"/> have valid height.
        /// </summary>
        public void ProcessEvidenceExpirationAhead()
        {
            foreach (Evidence evidence in GetPendingEvidences())
            {
                if (IsEvidenceExpired(evidence, Tip.Index + 1))
                {
                    DeletePendingEvidence(evidence.Id);
                }
            }
        }

        /// <summary>
        /// Update <see cref="Store"/> with given <paramref name="duplicatedVoteSets"/>
        /// and <paramref name="blockEvidences"/>.
        /// Add <paramref name="duplicatedVoteSets"/> on the pending evidence pool,
        /// and update <paramref name="blockEvidences"/> as committed.
        /// </summary>
        /// <param name="duplicatedVoteSets"><see cref="Vote"/>s that are found duplicated.</param>
        /// <param name="blockEvidences"><see cref="Evidence"/>s committed on the block.</param>
        public void UpdateEvidence(
            IEnumerable<IEnumerable<Vote>> duplicatedVoteSets,
            IEnumerable<Evidence>? blockEvidences)
        {
            foreach (IEnumerable<Vote> votes in duplicatedVoteSets)
            {
                try
                {
                    AddEvidence(
                        new DuplicateVoteEvidence(
                            votes,
                            GetValidatorSet(this[votes.First().Height].Hash),
                            votes.ElementAt(1).Timestamp));
                }
                catch (Exception e)
                {
                    _logger.Debug(e, $"Evidence couldn't be added as pending : {e.Message}");
                }
            }

            if (blockEvidences is { } evidences)
            {
                foreach (var evidence in evidences)
                {
                    try
                    {
                        CommitEvidence(evidence);
                    }
                    catch (Exception e)
                    {
                        _logger.Debug(e, $"Evidence couldn't be committed : {e.Message}");
                    }
                }
            }

            ProcessEvidenceExpirationAhead();
        }

        /// <summary>
        /// Check if <see cref="Evidence"/> is on the <see cref="Store"/>'s pending pool.
        /// </summary>
        /// <param name="evidenceId"><see cref="EvidenceId"/> of the <see cref="Evidence"/>
        /// to be checked.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="Store"/> contains <see cref="Evidence"/>
        /// with the specified <paramref name="evidenceId"/> on the pending pool;
        /// otherwise, <see langword="false"/>.
        /// </returns>
        public bool IsEvidencePending(EvidenceId evidenceId)
            => Store.ContainsPendingEvidence(evidenceId);

        /// <summary>
        /// Check if <see cref="Evidence"/> is on the <see cref="Store"/>'s committed pool.
        /// </summary>
        /// <param name="evidenceId"><see cref="EvidenceId"/> of the <see cref="Evidence"/>
        /// to be checked.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="Store"/> contains <see cref="Evidence"/>
        /// with the specified <paramref name="evidenceId"/> on the committed pool;
        /// otherwise, <see langword="false"/>.
        /// </returns>
        public bool IsEvidenceCommitted(EvidenceId evidenceId)
            => Store.ContainsCommittedEvidence(evidenceId);

        /// <summary>
        /// Get experiation height of <see cref="Evidence"/>s with <see cref="BlockChain"/>'s
        /// <see cref="Policy"/>, and base <paramref name="height"/>.
        /// </summary>
        /// <param name="height">Base height to check expiration height.
        /// In common usage, height of proposing block.</param>
        /// <returns>Expiration height of <see cref="Evidence"/>s.</returns>
        public long EvidenceExpirationHeight(long height)
            => height - Policy.GetMaxEvidencePendingDuration(height);

        /// <summary>
        /// Check if <paramref name="evidence"/> is expired under given <paramref name="height"/>.
        /// </summary>
        /// <param name="evidence"><see cref="Evidence"/> to check its expiry.</param>
        /// <param name="height">Base height to check <see cref="Evidence"/>'s expiery.</param>
        /// <returns>
        /// <see langword="true"/> if the <paramref name="evidence"/> is expired;
        /// otherwise, <see langword="false"/>.
        /// </returns>
        public bool IsEvidenceExpired(Evidence evidence, long height)
            => evidence.Height < EvidenceExpirationHeight(height);

        /// <summary>
        /// Verify if <paramref name="evidence"/> is valid.
        /// </summary>
        /// <param name="evidence"><see cref="Evidence"/> to be verified.</param>
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

        /// <summary>
        /// Verify if <paramref name="evidence"/> is valid <see cref="DuplicateVoteEvidence"/>.
        /// </summary>
        /// <param name="evidence"><see cref="DuplicateVoteEvidence"/> to be verified.</param>
        /// <exception cref="InvalidEvidenceException">Thrown when given
        /// <paramref name="evidence"/> is invalid.</exception>
        public void VerifyDuplicateVoteEvidence(DuplicateVoteEvidence evidence)
        {
            ValidatorSet validatorSet = GetValidatorSet(this[evidence.Height].Hash);

            if (!validatorSet.PublicKeys.Contains(evidence.Votes[0].ValidatorPublicKey))
            {
                throw new InvalidEvidenceException(
                    $"Evidence public key is not a validator. " +
                    $"PublicKey: {evidence.Votes[0].ValidatorPublicKey}");
            }

            BigInteger validatorPower
                = validatorSet.GetValidator(evidence.Votes[0].ValidatorPublicKey).Power;
            BigInteger totalPower = validatorSet.TotalPower;

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
