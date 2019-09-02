using System;
using System.Threading;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQSocketExtension
    {
        public static async Task SendMultipartMessageAsync(
            this NetMQSocket socket,
            NetMQMessage message,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var cts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                cts.CancelAfter(timeoutNotNull);
            }

            var ct = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);
            try
            {
                await socket.SendMultipartMessageAsync(message, false, cancellationToken: ct.Token);
            }
            catch (TaskCanceledException)
            {
                if (cts.Token.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }
                else
                {
                    throw;
                }
            }
            finally
            {
                cts.Dispose();
                ct.Dispose();
            }
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this NetMQSocket socket,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var cts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                cts.CancelAfter(timeoutNotNull);
            }

            var ct = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);
            try
            {
                return await socket.ReceiveMultipartMessageAsync(
                    expectedFrameCount: 4,
                    cancellationToken: ct.Token);
            }
            catch (TaskCanceledException)
            {
                if (cts.Token.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }
                else
                {
                    throw;
                }
            }
            finally
            {
                cts.Dispose();
                ct.Dispose();
            }
        }
    }
}
