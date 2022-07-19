#nullable disable
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Xunit;
using Xunit.Sdk;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Transports
{
    [Collection("NetMQConfiguration")]
    public class BoundPeerExtensionsTest : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        [Fact(Timeout = 60 * 1000)]
        public async Task QueryAppProtocolVersion()
        {
            var fx = new MemoryStoreFixture();
            var policy = new BlockPolicy<DumbAction>();
            var blockchain = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var apvKey = new PrivateKey();
            var swarmKey = new PrivateKey();
            var consensusKey = new PrivateKey();
            var validators = new List<PublicKey>()
            {
                swarmKey.PublicKey,
            };
            AppProtocolVersion apv = AppProtocolVersion.Sign(apvKey, 1);

            string host = IPAddress.Loopback.ToString();
            int port = FreeTcpPort();

            var option = new SwarmOptions();

            using (var swarm = new Swarm<DumbAction>(
                blockchain,
                swarmKey,
                apv,
                host: host,
                listenPort: port,
                options: option))
            {
                var peer = new BoundPeer(swarmKey.PublicKey, new DnsEndPoint(host, port));
                // Before swarm starting...
                Assert.Throws<TimeoutException>(() =>
                {
                    if (swarm.Transport is NetMQTransport)
                    {
                        peer.QueryAppProtocolVersionNetMQ(timeout: TimeSpan.FromSeconds(1));
                    }
                    else
                    {
                        throw new XunitException(
                            "Each type of transport must have corresponding test case.");
                    }
                });
                _ = swarm.StartAsync();
                try
                {
                    AppProtocolVersion receivedAPV = default;
                    if (swarm.Transport is NetMQTransport)
                    {
                        receivedAPV = peer.QueryAppProtocolVersionNetMQ(
                            timeout: TimeSpan.FromSeconds(1));
                    }
                    else
                    {
                        throw new XunitException(
                            "Each type of transport must have corresponding test case.");
                    }

                    Assert.Equal(apv, receivedAPV);
                }
                finally
                {
                    await swarm.StopAsync();
                }
            }

            NetMQConfig.Cleanup(false);
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
