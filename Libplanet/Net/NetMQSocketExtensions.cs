using System;
using System.Threading;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQSocketExtensions
    {
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
