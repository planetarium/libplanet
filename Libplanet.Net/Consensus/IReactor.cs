using System;
using System.Threading;
using System.Threading.Tasks;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A interface of consensus reactors.
    /// </summary>
    public interface IReactor : IDisposable
    {
        /// <summary>
        /// Starts a reactor.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>A awaitable tasks from reactor for starting.</returns>
        public Task StartAsync(CancellationToken cancellationToken);

        /// <summary>
        /// Stops a reactor.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>A awaitable tasks from reactor for stopping.</returns>
        public Task StopAsync(CancellationToken cancellationToken);
    }
}
