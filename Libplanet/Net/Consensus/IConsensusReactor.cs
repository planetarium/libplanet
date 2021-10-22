using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IConsensusReactor
    {
        public bool AppendMessage(ConsensusMessage message);

        public Task ReactConsensusAsync(int tick, CancellationToken token);
    }
}
