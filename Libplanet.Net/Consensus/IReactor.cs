using System;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IReactor : IDisposable
    {
        public Task ReceivedMessage(ConsensusMessage message);

        public void Propose();

        public Task StartAsync(CancellationToken cancellationToken);

        public Task StopAsync(CancellationToken cancellationToken);
    }
}
