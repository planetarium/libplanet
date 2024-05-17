using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action.State;
using Libplanet.Types.Evidences;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// Retrieve pending <see cref="Evidence"/>s from the <see cref="Store"/>.
        /// </summary>
        /// <returns><see cref="Evidence"/>s that are pending waiting to be committed.
        /// Returned <see cref="Evidence"/>s are sorted by its <see cref="Evidence.Id"/>.
        /// </returns>
        public ImmutableArray<Evidence> GetPendingEvidences()
            => Store.IteratePendingEvidenceIds()
                    .OrderBy(id => id)
                    .Select(id => Store.GetPendingEvidence(id))
                    .OfType<Evidence>()
                    .ToImmutableArray();

        public Evidence GetPendingEvidence(EvidenceId evidenceId)
        {
            if (Store.GetPendingEvidence(evidenceId) is Evidence evidence)
            {
                return evidence;
            }

            throw new KeyNotFoundException($"Pending evidence {evidenceId} is not found.");
        }

        public Evidence GetCommittedEvidence(EvidenceId evidenceId)
        {
            if (Store.GetCommittedEvidence(evidenceId) is Evidence evidence)
            {
                return evidence;
            }

            throw new KeyNotFoundException($"Committed evidence {evidenceId} is not found.");
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
                throw new ArgumentException(
                    message: $"Evidence {evidence.Id} is already committed.",
                    paramName: nameof(evidence));
            }

            if (IsEvidencePending(evidence.Id))
            {
                throw new ArgumentException(
                    message: $"Evidence {evidence.Id} is already pending.",
                    paramName: nameof(evidence));
            }

            if (evidence.Height > Tip.Index)
            {
                throw new ArgumentException(
                    message: $"Evidence {evidence.Id} is from the future: " +
                             $"{evidence.Height} > {Tip.Index + 1}",
                    paramName: nameof(evidence));
            }

            if (IsEvidenceExpired(evidence))
            {
                throw new ArgumentException($"Evidence {evidence.Id} is expired");
            }

            var stateRootHash = GetNextStateRootHash(evidence.Height);
            var worldState = GetWorldState(stateRootHash);
            var validatorSet = worldState.GetValidatorSet();
            var evidenceContext = new EvidenceContext(validatorSet);
            evidence.Verify(evidenceContext);
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

            if (IsEvidenceExpired(evidence))
            {
                throw new ArgumentException($"Evidence {evidence.Id} is expired");
            }

            if (IsEvidencePending(evidence.Id))
            {
                DeletePendingEvidence(evidence.Id);
            }

            Store.PutCommittedEvidence(evidence);
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
        /// Check if <see cref="Evidence"/> is expired.
        /// </summary>
        /// <param name="evidence"><see cref="Evidence"/> to check its expiry.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="Evidence"/> is expired;
        /// otherwise, <see langword="false"/>.
        /// </returns>
        public bool IsEvidenceExpired(Evidence evidence)
            => evidence.Height + Policy.GetMaxEvidencePendingDuration(evidence.Height) < Tip.Index;

        /// <summary>
        /// Delete pending <see cref="Evidence"/> from the <see cref="Store"/> with
        /// its <see cref="Evidence.Id"/>.
        /// </summary>
        /// <param name="evidenceId"><see cref="EvidenceId"/> of the <see cref="Evidence"/>
        /// to delete.</param>
        /// <returns>
        /// <see langword="true"/> if <see cref="Evidence"/> is deleted from the pending pool.
        /// </returns>
        public bool DeletePendingEvidence(EvidenceId evidenceId)
        {
            if (IsEvidencePending(evidenceId))
            {
                Store.DeletePendingEvidence(evidenceId);
                return true;
            }

            return false;
        }
    }
}
