using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IConsensusBroadcaster
    {
        public void BroadcastMessage(ConsensusMessage message);
    }
}
