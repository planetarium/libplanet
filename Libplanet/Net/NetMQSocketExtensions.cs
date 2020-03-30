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
            var cts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                cts.CancelAfter(timeoutNotNull);
            }

            var ct = CancellationTokenSource.CreateLinkedTokenSource(
                cancellationToken,
                cts.Token
            );

            return socket.SendMultipartMessageAsync(
                message,
                false,
                cancellationToken: ct.Token
            ).ContinueWith(t =>
            {
                if (t.IsCanceled && cts.Token.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }

                cts.Dispose();
                ct.Dispose();
                return t;
            });
        }

        public static Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this NetMQSocket socket,
            TimeSpan? timeout = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var cts = new CancellationTokenSource();
            if (timeout is TimeSpan timeoutNotNull)
            {
                cts.CancelAfter(timeoutNotNull);
            }

            var ct = CancellationTokenSource.CreateLinkedTokenSource(
                cancellationToken,
                cts.Token
            );

            return socket.ReceiveMultipartMessageAsync(
                expectedFrameCount: 4,
                cancellationToken: ct.Token
            ).ContinueWith(t =>
            {
                if (t.IsCanceled && cts.IsCancellationRequested)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time: {timeout}."
                    );
                }

                cts.Dispose();
                ct.Dispose();
                return t.Result;
            });
        }
    }
}
