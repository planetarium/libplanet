using System;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Serilog.Core;
using Xunit;

namespace Libplanet.Net.Tests.Protocols
{
    public class KBucketDictionaryTest
    {
        [Fact]
        public void KBucketDictionary()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new KBucketDictionary(size: 0, replace: false, logger: Logger.None));
        }

        [Fact]
        public void MutateWithoutReplacement()
        {
            var kBucketDictionary = new KBucketDictionary(
                size: 4, replace: false, logger: Logger.None);
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

            // Initial state
            Assert.Equal(0, kBucketDictionary.Count);
            Assert.Null(kBucketDictionary.Head);
            Assert.Null(kBucketDictionary.Tail);

            // Add more peers than allowed
            Assert.True(kBucketDictionary.AddOrUpdate(peer1));
            Assert.True(kBucketDictionary.AddOrUpdate(peer2));
            Assert.True(kBucketDictionary.AddOrUpdate(peer3));
            Assert.True(kBucketDictionary.AddOrUpdate(peer4));
            Assert.False(kBucketDictionary.AddOrUpdate(peer5));
            Assert.Equal(4, kBucketDictionary.Count);
            Assert.Equal(peer1.Address, kBucketDictionary.Tail!.Peer.Address);
            Assert.Equal(peer4.Address, kBucketDictionary.Head!.Peer.Address);
            Assert.True(kBucketDictionary.Contains(peer1));
            Assert.False(kBucketDictionary.Contains(peer5));

            // Replace one of the peers
            Assert.True(kBucketDictionary.AddOrUpdate(peer2));
            Assert.Equal(peer1.Address, kBucketDictionary.Tail!.Peer.Address);
            Assert.Equal(peer2.Address, kBucketDictionary.Head!.Peer.Address);

            // Remove
            Assert.True(kBucketDictionary.Remove(peer3));
            Assert.False(kBucketDictionary.Remove(peer5));

            // Clear
            kBucketDictionary.Clear();
            Assert.Equal(0, kBucketDictionary.Count);
            Assert.Null(kBucketDictionary.Head);
            Assert.Null(kBucketDictionary.Tail);
        }

        [Fact]
        public void MutateWithReplacement()
        {
            var kBucketDictionary = new KBucketDictionary(
                size: 4, replace: true, logger: Logger.None);
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

            // Initial state
            Assert.Equal(0, kBucketDictionary.Count);
            Assert.Null(kBucketDictionary.Head);
            Assert.Null(kBucketDictionary.Tail);

            // Add more peers than allowed
            Assert.True(kBucketDictionary.AddOrUpdate(peer1));
            Assert.True(kBucketDictionary.AddOrUpdate(peer2));
            Assert.True(kBucketDictionary.AddOrUpdate(peer3));
            Assert.True(kBucketDictionary.AddOrUpdate(peer4));
            Assert.True(kBucketDictionary.AddOrUpdate(peer5));
            Assert.Equal(4, kBucketDictionary.Count);
            Assert.Equal(peer2.Address, kBucketDictionary.Tail!.Peer.Address);
            Assert.Equal(peer5.Address, kBucketDictionary.Head!.Peer.Address);
            Assert.False(kBucketDictionary.Contains(peer1));
            Assert.True(kBucketDictionary.Contains(peer5));

            // Replace one of the peers
            Assert.True(kBucketDictionary.AddOrUpdate(peer2));
            Assert.Equal(peer3.Address, kBucketDictionary.Tail!.Peer.Address);
            Assert.Equal(peer2.Address, kBucketDictionary.Head!.Peer.Address);

            // Remove
            Assert.True(kBucketDictionary.Remove(peer2));
            Assert.False(kBucketDictionary.Remove(peer1));
        }
    }
}
