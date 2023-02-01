using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Xunit;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task DetectAppProtocolVersion()
        {
            var signer = new PrivateKey();
            AppProtocolVersionOptions v2 = new AppProtocolVersionOptions()
                { AppProtocolVersion = AppProtocolVersion.Sign(signer, 2) };
            AppProtocolVersionOptions v3 = new AppProtocolVersionOptions()
                { AppProtocolVersion = AppProtocolVersion.Sign(signer, 3) };
            var a = await CreateSwarm(appProtocolVersionOptions: v2).ConfigureAwait(false);
            var b = await CreateSwarm(appProtocolVersionOptions: v3).ConfigureAwait(false);
            var c = await CreateSwarm(appProtocolVersionOptions: v2).ConfigureAwait(false);
            var d = await CreateSwarm(appProtocolVersionOptions: v3).ConfigureAwait(false);

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
            AppProtocolVersionOptions v1 = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = AppProtocolVersion.Sign(signer, 1),
                TrustedAppProtocolVersionSigners =
                    new HashSet<PublicKey>() { signer.PublicKey }.ToImmutableHashSet(),
                DifferentAppProtocolVersionEncountered = (_, ver, __) => { isCalled = true; },
            };
            AppProtocolVersionOptions v2 = new AppProtocolVersionOptions()
                { AppProtocolVersion = AppProtocolVersion.Sign(signer, 2) };
            var a = await CreateSwarm(appProtocolVersionOptions: v1).ConfigureAwait(false);
            var b = await CreateSwarm(appProtocolVersionOptions: v2).ConfigureAwait(false);

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

            var trustedSigners = new[] { signer.PublicKey }.ToImmutableHashSet();
            var untrustedSigners = new[] { untrustedSigner.PublicKey }.ToImmutableHashSet();
            var optionsA = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = older,
                TrustedAppProtocolVersionSigners = trustedSigners,
                DifferentAppProtocolVersionEncountered = DifferentAppProtocolVersionEncountered,
            };
            var a = await CreateSwarm(appProtocolVersionOptions: optionsA).ConfigureAwait(false);
            var optionsB = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = newer,
                TrustedAppProtocolVersionSigners = trustedSigners,
            };
            var b = await CreateSwarm(appProtocolVersionOptions: optionsB).ConfigureAwait(false);
            var optionsC = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = older,
                TrustedAppProtocolVersionSigners = trustedSigners,
            };
            var c = await CreateSwarm(appProtocolVersionOptions: optionsC).ConfigureAwait(false);
            var optionsD = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = newer,
                TrustedAppProtocolVersionSigners = trustedSigners,
            };
            var d = await CreateSwarm(appProtocolVersionOptions: optionsD).ConfigureAwait(false);
            var optionsE = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = untrustedOlder,
                TrustedAppProtocolVersionSigners = untrustedSigners,
            };
            var e = await CreateSwarm(appProtocolVersionOptions: optionsE).ConfigureAwait(false);
            var optionsF = new AppProtocolVersionOptions()
            {
                AppProtocolVersion = untrustedNewer,
                TrustedAppProtocolVersionSigners = untrustedSigners,
            };
            var f = await CreateSwarm(appProtocolVersionOptions: optionsF).ConfigureAwait(false);

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
