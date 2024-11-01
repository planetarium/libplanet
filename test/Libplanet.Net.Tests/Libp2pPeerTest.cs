using System;
using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Xunit;

#pragma warning disable MEN002 // Line is too long
namespace Libplanet.Net.Tests
{
    public class Libp2pPeerTest
    {
        private readonly string _host;
        private readonly int _port;
        private readonly string _peerString;
        private readonly PublicKey _publicKey;

        public Libp2pPeerTest()
        {
            Random random = new Random();
            _publicKey = new PrivateKey().PublicKey;

            Identity identity = new Identity(CryptoKeyConverter.ToLibp2pPublicKey(_publicKey));
            _host = $"{random.Next(256)}.{random.Next(256)}.{random.Next(256)}.{random.Next(256)}";
            _port = random.Next(65354);
            _peerString = $"/ip4/{_host}/tcp/{_port}/p2p/{identity.PeerId}";
        }

        [Fact]
        public void Constructor()
        {
            var libp2pPeer = new Libp2pPeer(_peerString);
            Assert.Equal(_host, libp2pPeer.EndPoint.Host);
            Assert.Equal(_port, libp2pPeer.EndPoint.Port);
            Assert.Equal(_peerString, libp2pPeer.PeerString);
            Assert.Equal(_publicKey, libp2pPeer.PublicKey);
            Assert.Equal(_publicKey.Address, libp2pPeer.Address);
        }

        [Fact]
        public void Bencoded()
        {
            var expected = new Libp2pPeer(_peerString);
            var deserialized = new Libp2pPeer(expected.Bencoded);
            Assert.Equal(expected, deserialized);
        }
    }
}
#pragma warning restore MEN002
