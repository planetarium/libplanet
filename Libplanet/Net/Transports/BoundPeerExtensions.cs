using System;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using NetMQ;
using NetMQ.Sockets;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// This extension class activates transport-oriented methods on <see cref="BoundPeer"/>.
    /// </summary>
    /// <seealso cref="BoundPeer"/>
    public static class BoundPeerExtensions
    {
        /// <summary>
        /// Queries <see cref="AppProtocolVersion"/> of given <see cref="BoundPeer"/>.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to query
        /// <see cref="AppProtocolVersion"/>.</param>
        /// <param name="timeout">Timeout value for request.</param>
        /// <returns><see cref="AppProtocolVersion"/> of given peer. </returns>
        public static AppProtocolVersion QueryAppProtocolVersion(
            this BoundPeer peer,
            TimeSpan? timeout = null
        )
        {
            using var dealerSocket = new DealerSocket(ToNetMQAddress(peer));
            var key = new PrivateKey();
            var ping = new Ping();
            var netMQMessageCodec = new NetMQMessageCodec();
            NetMQMessage request = netMQMessageCodec.Encode(
                ping,
                key,
                new Peer(key.PublicKey),
                DateTimeOffset.UtcNow,
                default
            );

            TimeSpan timeoutNotNull = timeout ?? TimeSpan.FromSeconds(5);
            if (dealerSocket.TrySendMultipartMessage(timeoutNotNull, request))
            {
                var response = new NetMQMessage();
                if (dealerSocket.TryReceiveMultipartMessage(timeoutNotNull, ref response))
                {
                    return AppProtocolVersion.FromToken(response.First.ConvertToString());
                }
            }

            throw new TimeoutException(
                $"Peer[{peer}] didn't respond within the specified time[{timeout}]."
            );
        }

        internal static string ToNetMQAddress(this BoundPeer peer)
        {
            return $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
        }
    }
}
