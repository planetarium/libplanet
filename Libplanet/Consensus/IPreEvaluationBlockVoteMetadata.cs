using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// A common <see langword="interface"/> for <see cref="PreEvaluationBlockVote"/>s
    /// and <see cref="PreEvaluationBlockVoteMetadata"/>s.
    /// </summary>
    public interface IPreEvaluationBlockVoteMetadata
    {
        /// <summary>
        /// Height of the vote target pre-evaluation block.
        /// </summary>
        long Height { get; }

        /// <summary>
        /// Round of the vote in given height.
        /// </summary>
        int Round { get; }

        /// <summary>
        /// Hash of the pre-evaluation block in vote. If default, vote nil.
        /// </summary>
        HashDigest<SHA256> PreEvaluationBlockHash { get; }

        /// <summary>
        /// The <see cref="PublicKey"/> of the validator that voted.
        /// </summary>
        PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The <see cref="VoteFlag"/> indicating the type of a
        /// <see cref="PreEvaluationBlockVote"/>.
        /// </summary>
        VoteFlag Flag { get; }
    }
}
