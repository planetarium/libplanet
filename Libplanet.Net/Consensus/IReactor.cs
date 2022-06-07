using System;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IReactor : IDisposable
    {
        public Task ReceivedMessage(ConsensusMessage message);

        public void Propose(BlockHash blockHash);

        /// <summary>
        /// Returns a collected <see cref="VoteSet"/> for the certain block index.
        /// </summary>
        /// <param name="height">Block index to get <see cref="VoteSet"/>.</param>
        /// <returns>A <see cref="VoteSet"/> for the block of index <paramref name="height"/>.
        /// If <see cref="VoteSet"/> does not exist, return <c>null</c>.
        /// </returns>
        public VoteSet? VoteSetOf(long height);

        public Task<Task> StartAsync();

        public Task StopAsync();

        public string ToString();
    }
}
