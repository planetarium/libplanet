using Libplanet.Crypto;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// Interface for communicating <see cref="ConsensusMsg"/>s with peers.
    /// </summary>
    public interface IConsensusMessageCommunicator
    {
        /// <summary>
        /// Publish given <paramref name="message"/> to peers.
        /// </summary>
        /// <param name="message"><see cref="ConsensusMsg"/> to publish.</param>
        public void PublishMessage(ConsensusMsg message);

        /// <summary>
        /// Deny <see cref="ConsensusMsg"/>s from given <paramref name="publicKey"/>.
        /// </summary>
        /// <param name="publicKey"><see cref="PublicKey"/> to deny.</param>
        public void DenyPublicKey(PublicKey publicKey);

        /// <summary>
        /// Allow <see cref="ConsensusMsg"/>s from given <paramref name="publicKey"/>.
        /// </summary>
        /// <param name="publicKey"><see cref="PublicKey"/> to allow.</param>
        public void AllowPublicKey(PublicKey publicKey);

        /// <summary>
        /// Clear cache of consensus message communicator.
        /// </summary>
        public void ClearCache();

        /// <summary>
        /// Clear deny set to allow messages from any peers.
        /// </summary>
        public void ClearDenySet();
    }
}
