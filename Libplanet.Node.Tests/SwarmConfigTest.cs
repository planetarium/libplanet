using System;
using System.Collections.Generic;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Node.Tests
{
    public class SwarmConfigTest
    {
        public static IEnumerable<object[]> SerializationData => new[]
        {
            new object[]
            {
                "foo",
                1001,
                new List<IceServer>()
                {
                    new IceServer(new Uri("turn://user:cred@www.foo.com:1002")),
                    new IceServer(new Uri("turn://www.bar.com:1003")),
                },
                new List<BoundPeer>()
                {
                    new BoundPeer(
                        new PrivateKey().PublicKey, new DnsEndPoint("localhost", 0)),
                    new BoundPeer(
                        new PrivateKey().PublicKey, new DnsEndPoint("planetarium.com", 1004)),
                },
                false,
                new List<BoundPeer>()
                {
                    new BoundPeer(
                        new PrivateKey().PublicKey, new DnsEndPoint("localhost", 0)),
                    new BoundPeer(
                        new PrivateKey().PublicKey, new DnsEndPoint("planetarium.com", 1005)),
                },
            },
            new object[]
            {
                null,
                null,
                new List<IceServer>(),
                new List<BoundPeer>(),
                true,
                new List<BoundPeer>(),
            },
        };

        [SkippableTheory]
        [MemberData(nameof(SerializationData))]
        public void Serialization(
            string host,
            int port,
            IEnumerable<IceServer> iceServers,
            IEnumerable<BoundPeer> seedPeers,
            bool render,
            IEnumerable<BoundPeer> staticPeers)
        {
            Skip.IfNot(
                Environment.GetEnvironmentVariable("XUNIT_UNITY_RUNNER") is null,
                "System.Text.Json 6.0.0+ does not work well with Unity/Mono."
            );

            SwarmConfig original = new SwarmConfig()
            {
                InitConfig = new InitConfig()
                {
                    MaxTimeout = TimeSpan.FromSeconds(101),
                    MinTimeout = TimeSpan.FromSeconds(102),
                    RoutingTableNumBuckets = 103,
                    RoutingTableBucketSize = 104,
                    BlockLocatorIndexSampleThreshold = 105,
                    Host = host,
                    Port = port,
                    IceServers = iceServers,
                },
                BootstrapConfig = new BootstrapConfig()
                {
                    SeedPeers = seedPeers,
                    SearchDepth = 107,
                    DialTimeout = TimeSpan.FromSeconds(108),
                },
                PreloadConfig = new PreloadConfig()
                {
                    DialTimeout = TimeSpan.FromSeconds(109),
                    Render = render,
                    DeltaThreshold = 110,
                },
                SyncConfig = new SyncConfig()
                {
                    TipLifespan = TimeSpan.FromSeconds(111),
                    DialTimeout = TimeSpan.FromSeconds(112),
                    BlockBroadcastInterval = TimeSpan.FromSeconds(113),
                    TxBroadcastInterval = TimeSpan.FromSeconds(114),
                    StaticPeers = staticPeers,
                    StaticPeersMaintainPeriod = TimeSpan.FromSeconds(115),
                    RoutingTableRefreshPeriod = TimeSpan.FromSeconds(116),
                    RoutingTableBoundPeerLifespan = TimeSpan.FromSeconds(117),
                    MaximumPollNumPeers = 118,
                    MinimumBroadcastNumPeers = 119,
                    BlockDemandLifespan = TimeSpan.FromSeconds(120),
                },
            };

            string jsonString = original.ToJson();
            SwarmConfig loaded = SwarmConfig.FromJson(jsonString);

            Assert.True(InitConfigEquals(original.InitConfig, loaded.InitConfig));
            Assert.True(BootstrapConfigEquals(original.BootstrapConfig, loaded.BootstrapConfig));
            Assert.True(PreloadConfigEquals(original.PreloadConfig, loaded.PreloadConfig));
            Assert.True(SyncConfigEquals(original.SyncConfig, loaded.SyncConfig));
        }

        private bool InitConfigEquals(InitConfig first, InitConfig second)
        {
            Assert.Equal(first.MaxTimeout, second.MaxTimeout);
            Assert.Equal(first.MinTimeout, second.MinTimeout);
            Assert.Equal(first.RoutingTableBucketSize, second.RoutingTableBucketSize);
            Assert.Equal(first.RoutingTableNumBuckets, second.RoutingTableNumBuckets);
            Assert.Equal(
                first.BlockLocatorIndexSampleThreshold,
                second.BlockLocatorIndexSampleThreshold);
            Assert.Equal(first.Host, second.Host);
            Assert.Equal(first.Port, second.Port);
            Assert.Equal(first.IceServers, second.IceServers, new IceServerComparer());
            return true;
        }

        private bool BootstrapConfigEquals(BootstrapConfig first, BootstrapConfig second)
        {
            Assert.Equal(first.SeedPeers, second.SeedPeers);
            Assert.Equal(first.SearchDepth, second.SearchDepth);
            Assert.Equal(first.DialTimeout, second.DialTimeout);
            return true;
        }

        private bool PreloadConfigEquals(PreloadConfig first, PreloadConfig second)
        {
            Assert.Equal(first.DialTimeout, second.DialTimeout);
            Assert.Equal(first.Render, second.Render);
            Assert.Equal(first.DeltaThreshold, second.DeltaThreshold);
            return true;
        }

        private bool SyncConfigEquals(SyncConfig first, SyncConfig second)
        {
            Assert.Equal(first.TipLifespan, second.TipLifespan);
            Assert.Equal(first.DialTimeout, second.DialTimeout);
            Assert.Equal(first.BlockBroadcastInterval, second.BlockBroadcastInterval);
            Assert.Equal(first.TxBroadcastInterval, second.TxBroadcastInterval);
            Assert.Equal(first.StaticPeers, second.StaticPeers);
            Assert.Equal(first.StaticPeersMaintainPeriod, second.StaticPeersMaintainPeriod);
            Assert.Equal(first.RoutingTableRefreshPeriod, second.RoutingTableRefreshPeriod);
            Assert.Equal(first.RoutingTableBoundPeerLifespan, second.RoutingTableBoundPeerLifespan);
            Assert.Equal(first.MaximumPollNumPeers, second.MaximumPollNumPeers);
            Assert.Equal(first.MinimumBroadcastNumPeers, second.MinimumBroadcastNumPeers);
            Assert.Equal(first.BlockDemandLifespan, second.BlockDemandLifespan);
            return true;
        }

        private class IceServerComparer : IEqualityComparer<IceServer>
        {
            public bool Equals(IceServer x, IceServer y)
            {
                if (x is null && y is null)
                {
                    return true;
                }
                else if (x is null || y is null)
                {
                    return false;
                }
                else
                {
                    return x.Url == y.Url
                        && x.Username == y.Username
                        && x.Credential == y.Credential;
                }
            }

            public int GetHashCode(IceServer x)
            {
                return x.Url.GetHashCode();
            }
        }
    }
}
