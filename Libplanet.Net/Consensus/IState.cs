using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IState
    {
        public ConsensusMessage? Handle(ConsensusContext context, ConsensusMessage message);
    }
}
