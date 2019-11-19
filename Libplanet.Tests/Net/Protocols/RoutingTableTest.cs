using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Protocols;
using Serilog.Core;
using Xunit;

namespace Libplanet.Tests.Net.Protocols
{
    public class RoutingTableTest
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;

        [Fact]
        public async void BucketTest()
        {
            var bucket = new KBucket(4, new System.Random(), Logger.None);
            var peer1 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234),
                0);
            var peer2 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234),
                0);
            var peer3 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234),
                0);
            var peer4 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234),
                0);
            var peer5 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234),
                0);

            Assert.Empty(bucket.Peers);
            Assert.True(bucket.IsEmpty());
            await bucket.AddPeerAsync(peer1);
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer2));
            Assert.False(bucket.IsEmpty());
            Assert.False(bucket.IsFull());
            await bucket.AddPeerAsync(peer2);
            await bucket.AddPeerAsync(peer3);
            await bucket.AddPeerAsync(peer4);
            Assert.True(bucket.IsFull());
            Assert.Equal(
                bucket.Peers.ToHashSet(),
                new HashSet<BoundPeer> { peer1, peer2, peer3, peer4 }
            );
            Assert.Contains(
                bucket.GetRandomPeer(),
                new[] { peer1, peer2, peer3, peer4 }
            );
            await bucket.AddPeerAsync(peer5);
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer5));
            Assert.Equal(peer4, bucket.Head.Key);
            Assert.Equal(peer1, bucket.Tail.Key);
            await bucket.AddPeerAsync(peer1);
            Assert.Equal(peer1, bucket.Head.Key);
            Assert.Equal(peer2, bucket.Tail.Key);
            bucket.Clear();
            Assert.True(bucket.IsEmpty());
        }

        [Fact]
        public async Task AddSelf()
        {
            var pubKey = new PrivateKey().PublicKey;
            RoutingTable table = CreateTable(pubKey.ToAddress());
            var peer = new BoundPeer(pubKey, new DnsEndPoint("0.0.0.0", 1234), 0);
            await Assert.ThrowsAsync<ArgumentException>(() => table.AddPeerAsync(peer));
        }

        [Fact]
        public async Task AddNull()
        {
            var pubKey = new PrivateKey().PublicKey;
            RoutingTable table = CreateTable(pubKey.ToAddress());
            await Assert.ThrowsAsync<ArgumentNullException>(() => table.AddPeerAsync(null));
        }

        [Fact]
        public async Task AddPeer()
        {
            var pubKey0 = new PrivateKey().PublicKey;
            var pubKey1 = new PrivateKey().PublicKey;
            var pubKey2 = new PrivateKey().PublicKey;
            var pubKey3 = new PrivateKey().PublicKey;
            var table = new RoutingTable(
                pubKey0.ToAddress(),
                1,
                2,
                new System.Random(),
                Logger.None);
            var peer1 = new BoundPeer(pubKey1, new DnsEndPoint("0.0.0.0", 1234), 0);
            var peer2 = new BoundPeer(pubKey2, new DnsEndPoint("0.0.0.0", 1234), 0);
            var peer3 = new BoundPeer(pubKey3, new DnsEndPoint("0.0.0.0", 1234), 0);
            await table.AddPeerAsync(peer1);
            await table.AddPeerAsync(peer2);
            await table.AddPeerAsync(peer3);
            await table.AddPeerAsync(peer1);
            await table.AddPeerAsync(peer3);
            Assert.Equal(
                new HashSet<BoundPeer> { peer1, peer2 },
                table.Peers.ToHashSet()
            );
        }

        [Fact]
        public async Task RemovePeer()
        {
            var pubKey1 = new PrivateKey().PublicKey;
            var pubKey2 = new PrivateKey().PublicKey;
            var table = new RoutingTable(
                pubKey1.ToAddress(),
                1,
                2,
                new System.Random(),
                Logger.None);
            var peer1 = new BoundPeer(pubKey1, new DnsEndPoint("0.0.0.0", 1234), 0);
            var peer2 = new BoundPeer(pubKey2, new DnsEndPoint("0.0.0.0", 1234), 0);

            await Assert.ThrowsAsync<ArgumentException>(() => table.RemovePeerAsync(peer1));
            await Assert.ThrowsAsync<ArgumentNullException>(() => table.RemovePeerAsync(null));

            bool ret = await table.RemovePeerAsync(peer2);
            Assert.False(ret);
            await table.AddPeerAsync(peer2);
            ret = await table.RemovePeerAsync(peer2);
            Assert.True(ret);
        }

        private RoutingTable CreateTable(Address addr)
        {
            return new RoutingTable(addr, TableSize, BucketSize, new System.Random(), Logger.None);
        }
    }
}
