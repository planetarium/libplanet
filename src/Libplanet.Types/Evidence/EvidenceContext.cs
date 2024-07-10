using Libplanet.Types.Consensus;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// Indicates the context of evidence for creating and verification.
    /// </summary>
    public sealed class EvidenceContext : IEvidenceContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EvidenceContext"/> class.
        /// </summary>
        /// <param name="validatorSet">
        /// Indicates the <see cref="ValidatorSet" /> where the infraction occurred at the height.
        /// </param>
        public EvidenceContext(ValidatorSet validatorSet)
        {
            ValidatorSet = validatorSet;
        }

        /// <summary>
        /// Indicates the <see cref="ValidatorSet" /> where the infraction occurred at the height.
        /// </summary>
        public ValidatorSet ValidatorSet { get; }
    }
}
