using System;
using System.Threading;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQSocketExtension
    {
        public static async Task SendFrameAsync(
            this IOutgoingSocket socket,
            byte[] data,
            TimeSpan? timeout = null,
            TimeSpan? delay = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            TimeSpan delayNotNull = delay ?? TimeSpan.FromMilliseconds(100);
            TimeSpan elapsed = TimeSpan.Zero;

            while (!socket.TrySendFrame(data))
            {
                await Task.Delay(delayNotNull, cancellationToken);

                elapsed += delayNotNull;
                if (elapsed > timeout)
                {
                    throw new TimeoutException(
                        "The operation exceeded the specified time: " +
                        $"{timeout}."
                    );
                }
            }
        }

        public static async Task SendMultipartMessageAsync(
            this IOutgoingSocket socket,
            NetMQMessage message,
            TimeSpan? timeout = null,
            TimeSpan? delay = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            TimeSpan delayNotNull = delay ?? TimeSpan.FromMilliseconds(100);
            TimeSpan elapsed = TimeSpan.Zero;

            while (!socket.TrySendMultipartMessage(message))
            {
                await Task.Delay(delayNotNull, cancellationToken);

                elapsed += delayNotNull;
                if (elapsed > timeout)
                {
                    throw new TimeoutException(
                        "The operation exceeded the specified time: " +
                        $"{timeout}."
                    );
                }
            }
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this IReceivingSocket socket,
            TimeSpan? timeout = null,
            TimeSpan? delay = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            NetMQMessage message = new NetMQMessage();
            TimeSpan delayNotNull = delay ?? TimeSpan.FromMilliseconds(100);
            TimeSpan elapsed = TimeSpan.Zero;

            while (!socket.TryReceiveMultipartMessage(ref message))
            {
                await Task.Delay(delayNotNull, cancellationToken);

                elapsed += delayNotNull;
                if (elapsed > timeout)
                {
                    throw new TimeoutException(
                        "The operation exceeded the specified time: " +
                        $"{timeout}."
                    );
                }
            }

            return message;
        }
    }
}
