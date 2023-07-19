using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Serilog.Core;
using Xunit;
#if NETFRAMEWORK && (NET47 || NET471)
using static Libplanet.Tests.HashSetExtensions;
#endif

namespace Libplanet.Net.Tests.Protocols
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

            // Checks for an empty bucket.
            Assert.True(bucket.IsEmpty);
            Assert.False(bucket.IsFull);
            Assert.Empty(bucket.Peers);
            Assert.Empty(bucket.PeerStates);
            Assert.Null(bucket.GetRandomPeer());
            Assert.Null(bucket.Head);
            Assert.Null(bucket.Tail);

            // Checks for a partially filled bucket.
            bucket.AddPeer(peer1, DateTimeOffset.UtcNow);
            Assert.False(bucket.IsEmpty);
            Assert.False(bucket.IsFull);
            Assert.True(bucket.Contains(peer1));
            Assert.False(bucket.Contains(peer2));
            Assert.NotNull(bucket.GetRandomPeer());
            Assert.Null(bucket.GetRandomPeer(peer1.Address));
            Assert.NotNull(bucket.GetRandomPeer(peer2.Address));
            Assert.Equal(peer1, bucket.Head?.Peer);
            Assert.Equal(peer1, bucket.Tail?.Peer);

            // Sleep statement is used to distinguish updated times.
            Thread.Sleep(100);
            bucket.AddPeer(peer2, DateTimeOffset.UtcNow);
            Assert.Contains(
                bucket.GetRandomPeer(),
                new[] { peer1, peer2 }
            );
            Assert.Contains(
                bucket.GetRandomPeer(peer1.Address),
                new[] { peer2 }
            );

            // Checks for a full bucket.
            Thread.Sleep(100);
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
            Assert.Equal(peer4, bucket.Head?.Peer);
            Assert.Equal(peer1, bucket.Tail?.Peer);

            // Check order has changed.
            Thread.Sleep(100);
            bucket.AddPeer(peer1, DateTimeOffset.UtcNow);
            Assert.Equal(peer1, bucket.Head?.Peer);
            Assert.Equal(peer2, bucket.Tail?.Peer);

            Assert.False(bucket.RemovePeer(peer5));
            Assert.True(bucket.RemovePeer(peer1));
            Assert.DoesNotContain(peer1, bucket.Peers);
            Assert.Equal(3, bucket.Peers.Count());

            // Clear the bucket.
            bucket.Clear();
            Assert.True(bucket.IsEmpty);
            Assert.Empty(bucket.Peers);
            Assert.Null(bucket.Head);
            Assert.Null(bucket.Tail);
            Assert.Null(bucket.GetRandomPeer());
        }
    }
}
