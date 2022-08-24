using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Xunit;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        private static readonly AppProtocolVersion DefaultAppProtocolVersion =
            AppProtocolVersion.Sign(new PrivateKey(), 1);

        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var signer = new PrivateKey();
            AppProtocolVersion v2 = AppProtocolVersion.Sign(signer, 2);
            AppProtocolVersion v3 = AppProtocolVersion.Sign(signer, 3);
            var a = CreateSwarm(appProtocolVersion: v2);
            var b = CreateSwarm(appProtocolVersion: v3);
            var c = CreateSwarm(appProtocolVersion: v2);
            var d = CreateSwarm(appProtocolVersion: v3);

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

            var signer = new PrivateKey();
            AppProtocolVersion v1 = AppProtocolVersion.Sign(signer, 1);
            AppProtocolVersion v2 = AppProtocolVersion.Sign(signer, 2);
            var a = CreateSwarm(
                appProtocolVersion: v1,
                differentAppProtocolVersionEncountered: (_, ver, __) =>
                {
                    isCalled = true;
                }
            );
            var b = CreateSwarm(appProtocolVersion: v2);

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

        [Fact(Timeout = Timeout)]
        public async Task IgnoreUntrustedAppProtocolVersion()
        {
            var signer = new PrivateKey();
            AppProtocolVersion older = AppProtocolVersion.Sign(signer, 2);
            AppProtocolVersion newer = AppProtocolVersion.Sign(signer, 3);

            var untrustedSigner = new PrivateKey();
            AppProtocolVersion untrustedOlder = AppProtocolVersion.Sign(untrustedSigner, 2);
            AppProtocolVersion untrustedNewer = AppProtocolVersion.Sign(untrustedSigner, 3);

            _output.WriteLine("Trusted version signer: {0}", signer.ToAddress());
            _output.WriteLine("Untrusted version signer: {0}", untrustedSigner.ToAddress());

            var logs = new ConcurrentDictionary<BoundPeer, AppProtocolVersion>();

            void DifferentAppProtocolVersionEncountered(
                BoundPeer peer,
                AppProtocolVersion peerVersion,
                AppProtocolVersion localVersion
            )
            {
                logs[peer] = peerVersion;
            }

            var a = CreateSwarm(
                appProtocolVersion: older,
                trustedAppProtocolVersionSigners: new[] { signer.PublicKey },
                differentAppProtocolVersionEncountered: DifferentAppProtocolVersionEncountered
            );
            var b = CreateSwarm(
                appProtocolVersion: newer,
                trustedAppProtocolVersionSigners: new[] { signer.PublicKey }
            );
            var c = CreateSwarm(
                appProtocolVersion: older,
                trustedAppProtocolVersionSigners: new[] { signer.PublicKey }
            );
            var d = CreateSwarm(
                appProtocolVersion: newer,
                trustedAppProtocolVersionSigners: new[] { signer.PublicKey }
            );
            var e = CreateSwarm(
                appProtocolVersion: untrustedOlder,
                trustedAppProtocolVersionSigners: new[] { untrustedSigner.PublicKey }
            );
            var f = CreateSwarm(
                appProtocolVersion: untrustedNewer,
                trustedAppProtocolVersionSigners: new[] { untrustedSigner.PublicKey }
            );

            try
            {
                await StartAsync(c);
                await StartAsync(d);
                await StartAsync(e);
                await StartAsync(f);

                await a.AddPeersAsync(new[] { c.AsPeer }, TimeSpan.FromSeconds(1));
                await a.AddPeersAsync(new[] { d.AsPeer }, TimeSpan.FromSeconds(1));
                await a.AddPeersAsync(new[] { e.AsPeer }, TimeSpan.FromSeconds(1));
                await a.AddPeersAsync(new[] { f.AsPeer }, TimeSpan.FromSeconds(1));

                await b.AddPeersAsync(new[] { c.AsPeer }, TimeSpan.FromSeconds(1));
                await b.AddPeersAsync(new[] { d.AsPeer }, TimeSpan.FromSeconds(1));
                await b.AddPeersAsync(new[] { e.AsPeer }, TimeSpan.FromSeconds(1));
                await b.AddPeersAsync(new[] { f.AsPeer }, TimeSpan.FromSeconds(1));

                Assert.Equal(new[] { c.AsPeer }, a.Peers.ToArray());
                Assert.Equal(new[] { d.AsPeer }, b.Peers.ToArray());

                _output.WriteLine("Logged encountered peers:");
                foreach (KeyValuePair<BoundPeer, AppProtocolVersion> kv in logs)
                {
                    _output.WriteLine(
                        "{0}; {1}; {2} -> {3}",
                        kv.Key,
                        kv.Value.Version,
                        kv.Value.Signer,
                        kv.Value.Verify(signer.PublicKey) ? "verified" : "not verified"
                    );
                }
            }
            finally
            {
                await StopAsync(c);
                await StopAsync(d);
                await StopAsync(e);
                await StopAsync(f);

                a.Dispose();
                b.Dispose();
                c.Dispose();
                d.Dispose();
                e.Dispose();
                f.Dispose();
            }
        }
    }
}
