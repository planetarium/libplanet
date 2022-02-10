#nullable disable
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
            CancellationToken cancellationToken = default(CancellationToken))
        {
            return socket.ReceiveMultipartMessageAsync(
                expectedFrameCount: 4,
                cancellationToken: cancellationToken
            ).ContinueWith(t =>
            {
                if (t.IsCanceled)
                {
                    throw new OperationCanceledException(
                        $"{nameof(ReceiveMultipartMessageAsync)}() was canceled during " +
                        "its operation.");
                }

                return t.Result;
            });
        }
    }
}
