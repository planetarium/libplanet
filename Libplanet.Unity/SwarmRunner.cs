using System;
using System.Collections;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net;
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// <see cref="SwarmRunner"/> class provides <see cref="Swarm{T}"/> start coroutine.
    /// </summary>
    public class SwarmRunner
    {
        private CancellationTokenSource _cancellationTokenSource;

        private Swarm<PolymorphicAction<ActionBase>> _swarm;

        private BlockChain<PolymorphicAction<ActionBase>> _blockChain;

        /// <summary>
        /// Initialize a <see cref="SwarmRunner"/> instance.
        /// </summary>
        /// <param name="swarm">The <see cref="Swarm{T}"/> to use.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to use.</param>
        public SwarmRunner(
            Swarm<PolymorphicAction<ActionBase>> swarm,
            PrivateKey privateKey)
        {
            _swarm = swarm;
            _blockChain = _swarm.BlockChain;
            PrivateKey = privateKey;

            _cancellationTokenSource = new CancellationTokenSource();
        }

        private PrivateKey PrivateKey { get; set; }

        /// <summary>
        /// Start <see cref="Swarm{T}"/> bootstrap, preload and wait.
        /// </summary>
        /// <returns>It exists only for WaitUntil.</returns>
        public IEnumerator CoSwarmRunner()
        {
            if (_swarm is null)
            {
                yield break;
            }

            var bootstrapTask = Task.Run(async () =>
            {
                try
                {
                    // FIXME: Swarm<T> should handle the filtering internally.
                    await _swarm.BootstrapAsync(
                        cancellationToken: _cancellationTokenSource.Token);
                }
                catch (Exception e)
                {
                    Debug.LogFormat("Exception occurred during bootstrap {0}", e);
                }
            });

            yield return new WaitUntil(() => bootstrapTask.IsCompleted);

            Debug.Log("PreloadingStarted event was invoked");

            DateTimeOffset started = DateTimeOffset.UtcNow;
            long existingBlocks = _blockChain?.Tip?.Index ?? 0;
            Debug.Log("Starting preload...");

            var swarmPreloadTask = Task.Run(async () =>
            {
                await _swarm.PreloadAsync(
                    progress: null,
                    render: false,
                    cancellationToken: _cancellationTokenSource.Token);
            });

            yield return new WaitUntil(() => swarmPreloadTask.IsCompleted);
            DateTimeOffset ended = DateTimeOffset.UtcNow;

            if (swarmPreloadTask.Exception is Exception exc)
            {
                Debug.LogErrorFormat(
                    "Preload terminated with an exception: {0}",
                    exc
                );
                throw exc;
            }

            var index = _blockChain?.Tip?.Index ?? 0;
            Debug.LogFormat(
                "Preload finished; elapsed time: {0}; blocks: {1}",
                ended - started,
                index - existingBlocks
            );

            var swarmStartTask = Task.Run(async () =>
            {
                try
                {
                    await _swarm.StartAsync(cancellationToken: _cancellationTokenSource.Token);
                }
                catch (TaskCanceledException)
                {
                }
                catch (Exception e)
                {
                    Debug.LogErrorFormat(
                        "Swarm terminated with an exception: {0}",
                        e
                    );
                    throw;
                }
            });

            Task.Run(async () =>
            {
                await _swarm.WaitForRunningAsync();

                Debug.LogFormat(
                    "The address of this node: {0},{1},{2}",
                    ByteUtil.Hex(PrivateKey.PublicKey.Format(true)),
                    _swarm.EndPoint.Host,
                    _swarm.EndPoint.Port
                );
            });

            yield return new WaitUntil(() => swarmStartTask.IsCompleted);
        }
    }
}
