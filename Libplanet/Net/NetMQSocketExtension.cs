using System;
using System.Threading.Tasks;
using NetMQ;

namespace Libplanet.Net
{
    public static class NetMQSocketExtension
    {
        public static async Task SendFrameAsync(
            this IOutgoingSocket socket,
            byte[] data,
            int? timeout = null,
            int delay = 100)
        {
            int elapsed = 0;
            while (!socket.TrySendFrame(data))
            {
                await Task.Delay(delay);

                elapsed += 100;
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
            int? timeout = null,
            int delay = 100)
        {
            int elapsed = 0;
            while (!socket.TrySendMultipartMessage(message))
            {
                await Task.Delay(delay);

                elapsed += 100;
                if (elapsed > timeout)
                {
                    throw new TimeoutException(
                        $"The operation exceeded the specified time[{timeout}].");
                }
            }
        }

        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this IReceivingSocket socket,
            int? timeout = null,
            int delay = 100)
        {
            NetMQMessage message = new NetMQMessage();
            int elapsed = 0;
            while (!socket.TryReceiveMultipartMessage(ref message))
            {
                await Task.Delay(delay);

                elapsed += delay;
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
