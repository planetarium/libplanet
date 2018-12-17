using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class PeerTest
    {
        private static PublicKey _samplePublicKey = new PublicKey(
            ByteUtil.ParseHex(
                "038f92e8098c897c2a9ae3226eb6337eb" +
                "7ca8dbad5e1c8c9b130a9d39171a44134"
            )
        );

        private static Uri[] _sampleUrls = new Uri[]
        {
            new Uri("inproc://a"),
            new Uri("inproc://b"),
            new Uri("tcp://[::1]:1234"),
        };

        [Fact]
        public void ConstructorWithImmutableList()
        {
            Assert.Throws<ArgumentNullException>(
                () => new Peer(_samplePublicKey, (IImmutableList<Uri>)null)
            );
            var peer = new Peer(
                _samplePublicKey,
                _sampleUrls.ToImmutableList() as IImmutableList<Uri>
            );
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(_sampleUrls, peer.Urls);
        }

        [Fact]
        public void ConstructorWithEnumerable()
        {
            Assert.Throws<ArgumentNullException>(
                () => new Peer(_samplePublicKey, (IEnumerable<Uri>)null)
            );
            var peer = new Peer(_samplePublicKey, _sampleUrls);
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(_sampleUrls, peer.Urls);
        }

        [Fact]
        public void AddUrl()
        {
            var peer = new Peer(_samplePublicKey, _sampleUrls);
            Assert.Equal(_samplePublicKey, peer.PublicKey);
            Assert.Equal(
                new Uri[]
                {
                    new Uri("inproc://a"),
                    new Uri("inproc://b"),
                    new Uri("tcp://[::1]:1234"),
                    new Uri("ipc:///tmp/planet"),
                },
                peer.AddUrl(new Uri("ipc:///tmp/planet")).Urls
            );
        }
    }
}
