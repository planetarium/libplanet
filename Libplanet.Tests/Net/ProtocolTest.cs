using System;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Protocols;
using Serilog.Core;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class ProtocolTest
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;

        [Fact]
        public void BucketTest()
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
            Assert.Null(bucket.AddPeer(peer1));
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer2));
            Assert.False(bucket.IsEmpty());
            Assert.False(bucket.IsFull());
            Assert.Null(bucket.AddPeer(peer2));
            Assert.Null(bucket.AddPeer(peer3));
            Assert.Null(bucket.AddPeer(peer4));
            Assert.True(bucket.IsFull());
            Assert.Contains(
                bucket.GetRandomPeer(),
                new[] { peer1, peer2, peer3, peer4 });
            Assert.Equal(peer1, bucket.AddPeer(peer5));
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer5));
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
            Peer evict = await table.AddPeerAsync(peer1);
            Assert.Null(evict);
            evict = await table.AddPeerAsync(peer1);
            Assert.Null(evict);
            evict = await table.AddPeerAsync(peer2);
            Assert.Null(evict);
            evict = await table.AddPeerAsync(peer3);
            Assert.NotNull(evict);
            Assert.Equal(peer1, evict);
            await table.AddPeerAsync(peer1);
            evict = await table.AddPeerAsync(peer3);
            Assert.Equal(peer2, evict);
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

        [Fact]
        public void PrefixLength()
        {
            var addr1 = new Address("0000000000000000000000000000000000000000");
            var addr2 = new Address("0000000000000000000000000000000000000001");
            var addr3 = new Address("000000000000000000000000000000000000000c");
            var addr4 = new Address("0000000001000001111110001000011001000001");

            Assert.Equal(159, Kademlia.CommonPrefixLength(addr1, addr2));
            Assert.Equal(156, Kademlia.CommonPrefixLength(addr1, addr3));
            Assert.Equal(39, Kademlia.CommonPrefixLength(addr1, addr4));
        }

        private RoutingTable CreateTable(Address addr)
        {
            return new RoutingTable(addr, TableSize, BucketSize, new System.Random(), Logger.None);
        }
    }
}
