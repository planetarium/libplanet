using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using Libplanet.Crypto;
using Serilog.Core;
using Xunit;

namespace Libplanet.Net.Protocols
{
    public class KBucketTest
    {
        [Fact]
        public void BucketTest()
        {
            var bucket = new KBucket(4, new System.Random(), Logger.None);
            var peer1 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            var peer2 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            var peer3 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            var peer4 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            var peer5 = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));

            Assert.Empty(bucket.Peers);
            Assert.True(bucket.IsEmpty);
            bucket.AddPeer(peer1, DateTimeOffset.UtcNow);
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer2));
            Assert.False(bucket.IsEmpty);
            Assert.False(bucket.IsFull);
            // This sleep statement is used to distinguish updated time of followings.
            Thread.Sleep(100);
            bucket.AddPeer(peer2, DateTimeOffset.UtcNow);
            Thread.Sleep(100);
            Assert.Contains(
                bucket.GetRandomPeer(),
                new[] { peer1, peer2 }
            );
            Assert.Contains(
                bucket.GetRandomPeer(peer1.Address),
                new[] { peer2 }
            );
            bucket.AddPeer(peer3, DateTimeOffset.UtcNow);
            Thread.Sleep(100);
            bucket.AddPeer(peer4, DateTimeOffset.UtcNow);
            Assert.True(bucket.IsFull);
            Assert.Equal(
                bucket.Peers.ToHashSet(),
                new HashSet<BoundPeer> { peer1, peer2, peer3, peer4 }
            );
            Assert.Contains(
                bucket.GetRandomPeer(),
                new[] { peer1, peer2, peer3, peer4 }
            );
            Thread.Sleep(100);
            bucket.AddPeer(peer5, DateTimeOffset.UtcNow);
            Assert.Equal(
                bucket.Peers.ToHashSet(),
                new HashSet<BoundPeer> { peer1, peer2, peer3, peer4 }
            );
            Assert.False(bucket.Contains(peer5));
            Assert.Equal(peer4, bucket.Head.Peer);
            Assert.Equal(peer1, bucket.Tail.Peer);
            Thread.Sleep(100);
            bucket.AddPeer(peer1, DateTimeOffset.UtcNow);
            Assert.Equal(peer1, bucket.Head.Peer);
            Assert.Equal(peer2, bucket.Tail.Peer);

            Assert.False(bucket.RemovePeer(peer5));
            Assert.True(bucket.RemovePeer(peer1));
            Assert.DoesNotContain(peer1, bucket.Peers);
            Assert.Equal(3, bucket.Peers.Count());

            bucket.Clear();
            Assert.True(bucket.IsEmpty);
        }
    }
}