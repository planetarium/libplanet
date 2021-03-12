using System;
using System.Threading;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQSocketExtensions
    {
        public static Task SendMultipartMessageAsync(
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

            return socket.SendMultipartMessageAsync(
                message,
                false,
                cancellationToken: cts.Token
            ).ContinueWith(t =>
            {
                try
                {
                    if (t.IsCanceled && timeoutCts.Token.IsCancellationRequested)
                    {
                        throw new TimeoutException(
                            $"The operation exceeded the specified time: {timeout}."
                        );
                    }

                    return t;
                }
                finally
                {
                    timeoutCts.Dispose();
                    cts.Dispose();
                }
            });
        }

        public static Task<NetMQMessage> ReceiveMultipartMessageAsync(
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

            return socket.ReceiveMultipartMessageAsync(
                expectedFrameCount: 4,
                cancellationToken: cts.Token
            ).ContinueWith(t =>
            {
                try
                {
                    if (t.IsCanceled && timeoutCts.IsCancellationRequested)
                    {
                        throw new TimeoutException(
                            $"The operation exceeded the specified time: {timeout}."
                        );
                    }

                    return t.Result;
                }
                finally
                {
                    timeoutCts.Dispose();
                    cts.Dispose();
                }
            });
        }
    }
}
