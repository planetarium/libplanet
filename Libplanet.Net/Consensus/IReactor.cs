using System;
using System.Threading;
using System.Threading.Tasks;

namespace Libplanet.Net.Consensus
{
    public interface IReactor : IDisposable
    {
        public Task StartAsync(CancellationToken cancellationToken);

        public Task StopAsync(CancellationToken cancellationToken);
    }
}
