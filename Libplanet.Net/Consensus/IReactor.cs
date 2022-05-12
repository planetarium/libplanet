using System;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public interface IReactor : IDisposable
    {
        public Task ReceivedMessage(ConsensusMessage message);

        public void Propose(byte[] data);

        public Task<Task> StartAsync(CancellationToken ctx);

        public Task StopAsync(CancellationToken ctx);

        public string ToString();
    }
}
