using System;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Transports
{
    [Collection("NetMQConfiguration")]
    public class BoundPeerExtensionsTest : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        [Fact]
        public async Task QueryAppProtocolVersion()
        {
            var fx = new MemoryStoreFixture();
            var policy = new BlockPolicy<DumbAction>();
            var blockchain = TestUtils.MakeBlockChain(policy, fx.Store, fx.StateStore);
            var apvKey = new PrivateKey();
            var swarmKey = new PrivateKey();
            AppProtocolVersion apv = AppProtocolVersion.Sign(apvKey, 1);

            string host = IPAddress.Loopback.ToString();
            int port = FreeTcpPort();

            using (var swarm = new Swarm<DumbAction>(
                blockchain,
                swarmKey,
                apv,
                host: host,
                listenPort: port))
            {
                var peer = new BoundPeer(swarmKey.PublicKey, new DnsEndPoint(host, port));
                // Before swarm starting...
                Assert.Throws<TimeoutException>(() =>
                {
                    peer.QueryAppProtocolVersion(timeout: TimeSpan.FromSeconds(1));
                });
                _ = swarm.StartAsync();
                try
                {
                    AppProtocolVersion receivedAPV = peer.QueryAppProtocolVersion();
                    Assert.Equal(apv, receivedAPV);
                }
                finally
                {
                    await swarm.StopAsync();
                }
            }
        }

        private static int FreeTcpPort()
        {
            var l = new TcpListener(IPAddress.Loopback, 0);
            l.Start();
            int port = ((IPEndPoint)l.LocalEndpoint).Port;
            l.Stop();
            return port;
        }
    }
}
