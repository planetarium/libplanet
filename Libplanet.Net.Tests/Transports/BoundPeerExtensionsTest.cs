using System;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;
using Xunit.Sdk;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Transports
{
    [Collection("NetMQConfiguration")]
    public class BoundPeerExtensionsTest : IAssemblyFixture<NetMQConfigFixture>
    {
        [Fact(Timeout = 60 * 1000)]
        public async Task QueryAppProtocolVersion()
        {
            var fx = new MemoryStoreFixture();
            var policy = new BlockPolicy<DumbAction>();
            var blockchain = MakeBlockChain(policy, fx.Store, fx.StateStore);
            var swarmKey = new PrivateKey();
            var apv = AppProtocolVersion.Sign(new PrivateKey(), 1);
            var apvOptions = new AppProtocolVersionOptions() { AppProtocolVersion = apv };
            string host = IPAddress.Loopback.ToString();
            int port = FreeTcpPort();
            var hostOptions = new HostOptions(
                IPAddress.Loopback.ToString(), new IceServer[] { }, port);

            var option = new SwarmOptions();

            using (var swarm = await Swarm<DumbAction>.Create(
                blockchain,
                swarmKey,
                apvOptions,
                hostOptions,
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
