using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Xunit;
using Libp2pKeyType = Nethermind.Libp2p.Core.Dto.KeyType;
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

            PublicKey publicKey1 = privateKey1.PublicKey;
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

        [Fact]
        public void IdentityConversionEquality()
        {
            // NOTE: PublicKey derived from Identity(PrivateKey) may be different from
            // PublicKey directly derived from PrivateKey.
            PrivateKey privateKey = new PrivateKey();
            Identity identity1 = new Identity(
                privateKey.ToByteArray(),
                Libp2pKeyType.Secp256K1);
            Identity identity2 = new Identity(
                CryptoKeyConverter.ToLibp2pPrivateKey(privateKey));
            Assert.Equal(identity1.PeerId, identity2.PeerId);
        }
    }
}
