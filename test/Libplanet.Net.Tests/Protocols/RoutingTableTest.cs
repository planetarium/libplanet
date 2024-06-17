#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Serilog;
using Xunit;
using Xunit.Abstractions;
#if NETFRAMEWORK && (NET47 || NET471)
using static Libplanet.Tests.HashSetExtensions;
#endif

namespace Libplanet.Net.Tests.Protocols
{
    public class RoutingTableTest
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;

        private static readonly PrivateKey VersionSigner = new PrivateKey();
        private static readonly AppProtocolVersion AppProtocolVer =
            AppProtocolVersion.Sign(VersionSigner, 1);

        public RoutingTableTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<RoutingTableTest>();
        }

        [Fact]
        public void AddSelf()
        {
            var pubKey = new PrivateKey().PublicKey;
            var table = new RoutingTable(pubKey.Address);
            var peer = new BoundPeer(pubKey, new DnsEndPoint("0.0.0.0", 1234));
            Assert.Throws<ArgumentException>(() => table.AddPeer(peer));
        }

        [Fact]
        public void AddPeer()
        {
            var pubKey0 = new PrivateKey().PublicKey;
            var pubKey1 = new PrivateKey().PublicKey;
            var pubKey2 = new PrivateKey().PublicKey;
            var pubKey3 = new PrivateKey().PublicKey;
            var table = new RoutingTable(pubKey0.Address, 1, 2);
            var peer1 = new BoundPeer(pubKey1, new DnsEndPoint("0.0.0.0", 1234));
            var peer2 = new BoundPeer(pubKey2, new DnsEndPoint("0.0.0.0", 1234));
            var peer3 = new BoundPeer(pubKey3, new DnsEndPoint("0.0.0.0", 1234));
            table.AddPeer(peer1);
            table.AddPeer(peer2);
            table.AddPeer(peer3);
            table.AddPeer(peer1);
            table.AddPeer(peer3);
            Assert.Equal(
                new HashSet<BoundPeer> { peer1, peer2 },
                table.Peers.ToHashSet()
            );
        }

        [Fact]
        public void RemovePeer()
        {
            var pubKey1 = new PrivateKey().PublicKey;
            var pubKey2 = new PrivateKey().PublicKey;
            var table = new RoutingTable(pubKey1.Address, 1, 2);
            var peer1 = new BoundPeer(pubKey1, new DnsEndPoint("0.0.0.0", 1234));
            var peer2 = new BoundPeer(pubKey2, new DnsEndPoint("0.0.0.0", 1234));

            Assert.Throws<ArgumentException>(() => table.RemovePeer(peer1));

            bool ret = table.RemovePeer(peer2);
            Assert.False(ret);
            table.AddPeer(peer2);
            ret = table.RemovePeer(peer2);
            Assert.True(ret);
        }

        [Fact]
        public void Generate()
        {
            var table = new RoutingTable(
                new Address(
                    new byte[]
                    {
                        0xaa, 0xba, 0xf4, 0x9a, 0x08, 0x49, 0xaf, 0xa2, 0x43, 0x0b, 0x8e, 0x2b,
                        0xf7, 0xaf, 0x9c, 0x48, 0x05, 0xb7, 0x63, 0xb9,
                    }));
            const int targetBucket = 5;
            int count = 0;
            PublicKey publicKey;
            do
            {
                count++;
                publicKey = new PrivateKey().PublicKey;
            }
            while (table.GetBucketIndexOf(publicKey.Address) != targetBucket);

            Log.Debug(
                "Found public key of bucket index {Index} in {Count} tries: {Key}",
                table.GetBucketIndexOf(publicKey.Address),
                count,
                ByteArrayToString(publicKey.Format(true)));
            Assert.Equal(targetBucket, table.GetBucketIndexOf(publicKey.Address));
        }

        [Fact]
        public void PeersToBroadcast()
        {
            var (publicKey, publicKeys) = GeneratePeersDifferentBuckets();

            var table = new RoutingTable(publicKey.Address);
            var peers = publicKeys
                .Select(pk => new BoundPeer(pk, new DnsEndPoint("0.0.0.0", 1234)))
                .ToArray();
            Assert.Equal(10, peers.Length);
            for (var i = 0; i < peers.Length; i++)
            {
                var peer = peers[i];
                table.AddPeer(peer);
                Assert.Equal(i / 2, table.GetBucketIndexOf(peer.Address));
            }

            var broadcastCandidate = table.PeersToBroadcast(null, 0);
            Assert.Equal(5, broadcastCandidate.Count);
            Assert.Equal(
                new HashSet<int> { 0, 1, 2, 3, 4 },
                broadcastCandidate.Select(peer => table.GetBucketIndexOf(peer.Address))
                    .ToHashSet());

            broadcastCandidate = table.PeersToBroadcast(null, 10);
            Assert.Equal(10, broadcastCandidate.Count);
            Assert.Equal(peers.ToHashSet(), broadcastCandidate.ToHashSet());
        }

        [Fact]
        public void PeersToRefresh()
        {
            var (publicKey, publicKeys) = GeneratePeersDifferentBuckets();
            var table = new RoutingTable(publicKey.Address);
            int peerCount = publicKeys.Length;
            BoundPeer[] peers = publicKeys
                .Select(
                    key => new BoundPeer(
                        key,
                        new DnsEndPoint("0.0.0.0", 1234)))
                .ToArray();
            for (var i = 0; i < peerCount; i++)
            {
                table.AddPeer(
                    peers[i],
                    DateTimeOffset.UtcNow - (i % 2 == 0 ? TimeSpan.Zero : TimeSpan.FromMinutes(2)));
            }

            Assert.Equal(peerCount, table.Peers.Count);
            Assert.Equal(
                Enumerable
                    .Range(0, peerCount / 2)
                    .Select(i => peers[i * 2 + 1]).ToHashSet(),
                table.PeersToRefresh(TimeSpan.FromMinutes(1)).ToHashSet());
        }

        [Fact]
        public void PeersToRefreshInSingleBucket()
        {
            var publicKey = new PrivateKey().PublicKey;
            var table = new RoutingTable(publicKey.Address, 1);
            const int peerCount = 10;
            BoundPeer[] peers = Enumerable.Range(0, peerCount)
                .Select(
                    i => new BoundPeer(
                        new PrivateKey().PublicKey,
                        new DnsEndPoint("0.0.0.0", 1000 + i)))
                .ToArray();
            for (int i = 0; i < peerCount; i++)
            {
                table.AddPeer(
                    peers[i],
                    DateTimeOffset.UtcNow - TimeSpan.FromMinutes(2) + TimeSpan.FromSeconds(i));
            }

            Assert.Equal(peerCount, table.Peers.Count);
            for (int i = 0; i < peerCount; i++)
            {
                Assert.Equal(peers[i], table.PeersToRefresh(TimeSpan.FromMinutes(1)).First());
                table.AddPeer(peers[i]);
            }

            Assert.Empty(table.PeersToRefresh(TimeSpan.FromMinutes(1)));
        }

        private (PublicKey, PublicKey[]) GeneratePeersDifferentBuckets()
        {
            var publicKey = new PublicKey(ByteUtil.ParseHex(
                "031df3534d8dee5d35d26cf41c52629326fc20bf96d49bdd6c4596db491896daf7"));
            var publicKeys = new[]
            {
                // Peer 0 is in bucket 0
                new PublicKey(ByteUtil.ParseHex(
                    "02ac9d719f8dd7fb8d32a61f95b341e232edf7cae330c76bbfc3b988ef664d36b7")),
                // Peer 1 is in bucket 0
                new PublicKey(ByteUtil.ParseHex(
                    "03a6a0eabb9a025e20b0890a0d5bfdf2168d3af96ac8e19d83265f75ce98a2dade")),
                // Peer 2 is in bucket 1
                new PublicKey(ByteUtil.ParseHex(
                    "0224973583a36a2b80fdb7aea7e37fc5d3cd97aacc6a83f50eff3f499d6edc0b45")),
                // Peer 3 is in bucket 1
                new PublicKey(ByteUtil.ParseHex(
                    "02bda770f7a0608135b47e1f07de2802d2a2ec61ae1e93f9416bb065a622b687a6")),
                // Peer 4 is in bucket 2
                new PublicKey(ByteUtil.ParseHex(
                    "0273472fb28a73fe14a3ec598e7390340bacf5d83c7f4b22165a395d0b2fd9c721")),
                // Peer 5 is in bucket 2
                new PublicKey(ByteUtil.ParseHex(
                    "035f735b3ea526d6af53d1102a5fe2b3cc95c7caae41dd58e1a35f1b8459ff8ada")),
                // Peer 6 is in bucket 3
                new PublicKey(ByteUtil.ParseHex(
                    "0365bd28ceeb8b4a1e5636260f36ddd19f140e8e1e48201cdd57de7152266ea95b")),
                // Peer 7 is in bucket 3
                new PublicKey(ByteUtil.ParseHex(
                    "0241049ccd1ecb8ac2be2c98db628e9ff29b9c3d2d8a3d63f2d1b7a6c3d30c7d8f")),
                // Peer 8 is in bucket 4
                new PublicKey(ByteUtil.ParseHex(
                    "03384eeffb76caf5e95fccf154b4af1685d648a7c87d4474fffcf15d92a6e9796e")),
                // Peer 9 is in bucket 4
                new PublicKey(ByteUtil.ParseHex(
                    "024c11057c7e18d604d45b01dbba6c03f06c9545a99850bc8e9b7c65be4197ce5c")),
            };

            return (publicKey, publicKeys);
        }

        private string ByteArrayToString(byte[] bytes)
        {
            var str = BitConverter.ToString(bytes);
            str = "0x" + str.Replace("-", ", 0x").ToLower();

            return str + ",";
        }
    }
}
