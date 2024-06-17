#nullable disable
using System;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
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
        /// Queries <see cref="AppProtocolVersion"/> of given <see cref="BoundPeer"/>
        /// specialized for NetMQ based transport.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to query
        /// <see cref="AppProtocolVersion"/>.</param>
        /// <param name="timeout">Timeout value for request.</param>
        /// <returns><see cref="AppProtocolVersion"/> of given peer. </returns>
        public static AppProtocolVersion QueryAppProtocolVersionNetMQ(
            this BoundPeer peer,
            TimeSpan? timeout = null
        )
        {
            using var dealerSocket = new DealerSocket(ToNetMQAddress(peer));
            var privateKey = new PrivateKey();
            var ping = new PingMsg();
            var netMQMessageCodec = new NetMQMessageCodec();
            NetMQMessage request = netMQMessageCodec.Encode(
                ping,
                privateKey,
                default,
                new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 0)),
                DateTimeOffset.UtcNow);

            TimeSpan timeoutNotNull = timeout ?? TimeSpan.FromSeconds(5);
            try
            {
                if (dealerSocket.TrySendMultipartMessage(timeoutNotNull, request))
                {
                    var response = new NetMQMessage();
                    if (dealerSocket.TryReceiveMultipartMessage(timeoutNotNull, ref response))
                    {
                        return AppProtocolVersion.FromToken(response.First.ConvertToString());
                    }
                }
            }
            catch (TerminatingException)
            {
                throw new TimeoutException($"Peer didn't respond.");
            }

            throw new TimeoutException(
                $"Peer[{peer}] didn't respond within the specified time[{timeout}]."
            );
        }

        internal static string ToNetMQAddress(this BoundPeer peer)
        {
            return $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
        }

        /// <summary>
        /// Get IPv4 TCP address <see cref="string"/> of given <see cref="BoundPeer"/>
        /// to be used on NetMQ transport.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to get TCP NetMQ address.</param>
        /// <returns>IPv4 TCP address <see cref="string"/> of given <paramref name="peer"/>.
        /// </returns>
        /// <exception cref="TransportException">Thrown if failed to resolve address for given peer.
        /// </exception>
        internal static async Task<string> ResolveNetMQAddressAsync(this BoundPeer peer)
        {
            string addr = peer.EndPoint.Host;

            IPAddress[] addresses = await Dns.GetHostAddressesAsync(addr).ConfigureAwait(false);

            // FIXME IPs are restricted with IPv4 for now, and have to be fixed later on.
            string ipv4 = addresses.FirstOrDefault(
                addr => addr.AddressFamily is AddressFamily.InterNetwork)?.ToString()
                ?? throw new TransportException($"Failed to resolve for {addr}");
            int port = peer.EndPoint.Port;

            return $"tcp://{ipv4}:{port}";
        }
    }
}
