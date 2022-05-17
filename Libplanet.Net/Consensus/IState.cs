using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IState<T>
        where T : IAction, new()
    {
        public string Name { get; }

        public ConsensusMessage? Handle(ConsensusContext<T> context, ConsensusMessage message);
    }
}
