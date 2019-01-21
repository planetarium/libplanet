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
            TimeSpan? delay = null)
        {
            await SendFrameAsync(
                socket, data, CancellationToken.None, timeout, delay);
        }

        public static async Task SendFrameAsync(
            this IOutgoingSocket socket,
            byte[] data,
            CancellationToken cancellationToken,
            TimeSpan? timeout = null,
            TimeSpan? delay = null)
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
                        $"The operation exceeded the specified time[{timeout}].");
                }
            }
        }

        public static async Task SendMultipartMessageAsync(
            this IOutgoingSocket socket,
            NetMQMessage message,
            TimeSpan? timeout = null,
            TimeSpan? delay = null)
        {
            await SendMultipartMessageAsync(
                socket, message, CancellationToken.None, timeout, delay);
        }

        public static async Task SendMultipartMessageAsync(
            this IOutgoingSocket socket,
            NetMQMessage message,
            CancellationToken cancellationToken,
            TimeSpan? timeout = null,
            TimeSpan? delay = null)
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
                        $"The operation exceeded the specified time[{timeout}].");
                }
            }
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this IReceivingSocket socket,
            TimeSpan? timeout = null,
            TimeSpan? delay = null)
        {
            return await ReceiveMultipartMessageAsync(
                socket, CancellationToken.None, timeout, delay);
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this IReceivingSocket socket,
            CancellationToken cancellationToken,
            TimeSpan? timeout = null,
            TimeSpan? delay = null)
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
                        $"The operation exceeded the specified time[{timeout}].");
                }
            }

            return message;
        }
    }
}
