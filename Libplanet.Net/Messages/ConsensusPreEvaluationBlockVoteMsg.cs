using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusPreEvaluationBlockVoteMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class.
        /// </summary>
        /// <param name="validatorPublicKey">
        /// A <see cref="PublicKey"/> of the validator who made this message.</param>
        /// <param name="height">A <see cref="Context.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context.Round"/> the message is written for.</param>
        /// <param name="preEvaluationBlockHash">A pre-evaluation block hash
        /// the message is written for.</param>
        /// <param name="flag">A <see cref="VoteFlag"/>.</param>
        protected ConsensusPreEvaluationBlockVoteMsg(
            PublicKey validatorPublicKey,
            long height,
            int round,
            HashDigest<SHA256> preEvaluationBlockHash,
            VoteFlag flag)
            : base(validatorPublicKey, height, round)
        {
            PreEvaluationBlockHash = preEvaluationBlockHash;
            Flag = flag;
        }

        /// <summary>
        /// A pre-evaluation block hash the message is written for.
        /// </summary>
        public HashDigest<SHA256> PreEvaluationBlockHash { get; }

        /// <summary>
        /// A <see cref="VoteFlag"/> of message's vote.
        /// </summary>
        public VoteFlag Flag { get; }
    }
}
