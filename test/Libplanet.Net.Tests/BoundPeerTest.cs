using System;
using System.Net;
using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Xunit;

namespace Libplanet.Net.Tests
{
    public class BoundPeerTest
    {
        private readonly string _host;
        private readonly int _port;
        private readonly string _peerString;
        private readonly PublicKey _publicKey;
        private readonly Identity _identity;

        public BoundPeerTest()
        {
            Random random = new Random();
            _publicKey = new PrivateKey().PublicKey;
            _identity = new Identity(CryptoKeyConverter.ToLibp2pPublicKey(_publicKey));
            _host = $"{random.Next(256)}.{random.Next(256)}.{random.Next(256)}.{random.Next(256)}";
            _port = random.Next(65354);
            _peerString = $"/ip4/{_host}/tcp/{_port}/p2p/{_identity.PeerId}";
        }

        [Fact]
        public void Bencoded()
        {
            var expected = new BoundPeer(_peerString);
            var deserialized = new BoundPeer(expected.Bencoded);
            Assert.Equal(expected, deserialized);
        }

        [Fact]
        public void Constructor()
        {
            var fromPeerString = new BoundPeer(_peerString);
            var fromPublicKey = new BoundPeer(_publicKey, new DnsEndPoint(_host, _port));
            Assert.Equal(fromPeerString, fromPublicKey);

            Assert.Equal(_host, fromPeerString.EndPoint.Host);
            Assert.Equal(_port, fromPeerString.EndPoint.Port);
            Assert.Equal(_peerString, fromPeerString.PeerString);
            Assert.Equal(_publicKey, fromPeerString.PublicKey);
            Assert.Equal(_publicKey.Address, fromPeerString.Address);
        }

        [Fact]
        public void ParsePeer()
        {
            var peerInfo = _peerString;
            var expected = new BoundPeer(peerInfo);
            Assert.Equal(expected, BoundPeer.ParsePeer(peerInfo));
        }

        [Fact]
        public void PeerString()
        {
            var expected = _peerString;
            var boundPeer = new BoundPeer(_peerString);
            Assert.Equal(expected, boundPeer.PeerString);
        }

        [Fact]
        public void ParsePeerException()
        {
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer(string.Empty));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/{_host}/tcp/{_port}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/{_host}/tcp/{_port}/"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/{_host}/tcp/{_port}/{_identity.PeerId}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/{_host}/{_port}/p2p/{_identity.PeerId}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/{_host}/{_port}/p2p/{_identity.PeerId}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/{_host}/{_port}/p2p/{_identity.PeerId}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/www.foo.com/tcp/{_port}/p2p/{_identity.PeerId}"));
            Assert.Throws<ArgumentException>(
                () => BoundPeer.ParsePeer($"/ip4/{_host}/tcp/p2p/{_identity.PeerId}"));
        }
    }
}
