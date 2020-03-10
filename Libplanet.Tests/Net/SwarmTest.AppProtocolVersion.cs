using System.Linq;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Protocols;
using Xunit;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        private static readonly AppProtocolVersion DefaultAppProtocolVersion =
            new AppProtocolVersion(new PrivateKey(), 1);

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var blockChain = _blockchains[0];

            var signer = new PrivateKey();
            var v2 = new AppProtocolVersion(signer, 2);
            var v3 = new AppProtocolVersion(signer, 3);
            var a = CreateSwarm(blockChain, appProtocolVersion: v2);
            var b = CreateSwarm(blockChain, appProtocolVersion: v3);
            var c = CreateSwarm(blockChain, appProtocolVersion: v2);
            var d = CreateSwarm(blockChain, appProtocolVersion: v3);

            try
            {
                await StartAsync(c);
                await StartAsync(d);

                var peers = new[] { c.AsPeer, d.AsPeer };

                foreach (var peer in peers)
                {
                    await a.AddPeersAsync(new[] { peer }, null);
                    await b.AddPeersAsync(new[] { peer }, null);
                }

                Assert.Equal(new[] { c.AsPeer }, a.Peers.ToArray());
                Assert.Equal(new[] { d.AsPeer }, b.Peers.ToArray());
            }
            finally
            {
                await StopAsync(c);
                await StopAsync(d);

                a.Dispose();
                b.Dispose();
                c.Dispose();
                d.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleDifferentAppProtocolVersion()
        {
            var isCalled = false;

            void GameHandler(object sender, DifferentProtocolVersionEventArgs e)
            {
                isCalled = true;
            }

            var signer = new PrivateKey();
            var v2 = new AppProtocolVersion(signer, 2);
            var v3 = new AppProtocolVersion(signer, 3);
            var a = CreateSwarm(
                _blockchains[0],
                appProtocolVersion: v2,
                differentVersionPeerEncountered: GameHandler);
            var b = CreateSwarm(_blockchains[1], appProtocolVersion: v3);

            try
            {
                await StartAsync(b);

                await Assert.ThrowsAsync<PeerDiscoveryException>(() => BootstrapAsync(a, b.AsPeer));

                Assert.True(isCalled);
            }
            finally
            {
                await StopAsync(a);
                await StopAsync(b);

                a.Dispose();
                b.Dispose();
            }
        }
    }
}
