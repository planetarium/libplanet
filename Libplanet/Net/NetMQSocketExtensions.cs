using System;
using System.Threading;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQSocketExtensions
    {
        public static async Task SendMultipartMessageAsync(
            this NetMQSocket socket,
            NetMQMessage message,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var timeoutCts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                timeoutCts.CancelAfter(timeoutNotNull);
            }

            CancellationTokenSource cts = CancellationTokenSource.CreateLinkedTokenSource(
                cancellationToken,
                timeoutCts.Token
            );

            try
            {
                await socket.SendMultipartMessageAsync(
                    message: message,
                    more: false,
                    cancellationToken: cts.Token);
            }
            catch (OperationCanceledException)
            {
                if (timeoutCts.Token.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }

                throw;
            }
            finally
            {
                timeoutCts.Dispose();
                cts.Dispose();
            }
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this NetMQSocket socket,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var timeoutCts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                timeoutCts.CancelAfter(timeoutNotNull);
            }

            CancellationTokenSource cts = CancellationTokenSource.CreateLinkedTokenSource(
                cancellationToken,
                timeoutCts.Token
            );

            try
            {
                return await socket.ReceiveMultipartMessageAsync(
                    expectedFrameCount: 4,
                    cancellationToken: cts.Token);
            }
            catch (OperationCanceledException)
            {
                if (timeoutCts.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }

                throw;
            }
            finally
            {
                timeoutCts.Dispose();
                cts.Dispose();
            }
        }
    }
}
