using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Xunit;
using Libp2pPrivateKey = Nethermind.Libp2p.Core.Dto.PrivateKey;
using Libp2pPublicKey = Nethermind.Libp2p.Core.Dto.PublicKey;

namespace Libplanet.Net.Tests
{
    public class CryptoKeyConverterTest
    {
        [Fact]
        public void KeyConversionEquality()
        {
            PrivateKey privateKey1 = new PrivateKey();
            Libp2pPrivateKey libp2pPrivateKey = CryptoKeyConverter.ToLibp2pPrivateKey(privateKey1);
            PrivateKey privateKey2 = CryptoKeyConverter.ToLibplanetPrivateKey(libp2pPrivateKey);
            Assert.Equal(privateKey1, privateKey2);

            PublicKey publicKey1 = new PrivateKey().PublicKey;
            Libp2pPublicKey libp2pPublicKey = CryptoKeyConverter.ToLibp2pPublicKey(publicKey1);
            PublicKey publicKey2 = CryptoKeyConverter.ToLibplanetPublicKey(libp2pPublicKey);
            Assert.Equal(publicKey1, publicKey2);
        }

        [Fact]
        public void PeerIdKeyConversionEquality()
        {
            PrivateKey privateKey = new PrivateKey();
            PublicKey publicKey1 = privateKey.PublicKey;
            PeerId peerId = new PeerId(CryptoKeyConverter.ToLibp2pPublicKey(publicKey1));
            PublicKey publicKey2 = CryptoKeyConverter.ToLibplanetPublicKey(peerId);
            Assert.Equal(publicKey1, publicKey2);
        }
    }
}
