using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;

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
        /// Method that will be called on the
        /// <see cref="Context.Start(BlockCommit?)"/> call.
        /// </summary>
        /// <param name="height"><see cref="Context.Height"/>
        /// to trigger this method.</param>
        public void OnStartHeight(long height);

        /// <summary>
        /// Method that will be called on the
        /// <see cref="Context.StartRound(int)"/> call.
        /// </summary>
        /// <param name="round"><see cref="Context.Round"/>
        /// to trigger this method.</param>
        public void OnStartRound(int round);
    }
}
