using Libplanet.Types.Consensus;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// Indicates the context of evidence for creating and verification.
    /// </summary>
    public interface IEvidenceContext
    {
        /// <summary>
        /// Indicates the <see cref="ValidatorSet" /> where the infraction occurred at the height.
        /// </summary>
        ValidatorSet ValidatorSet { get; }
    }
}
