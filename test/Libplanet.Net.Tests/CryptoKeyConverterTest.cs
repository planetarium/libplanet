using System;
using Libplanet.Crypto;
using Nethermind.Libp2p.Core;
using Xunit;
using Libp2pPublicKey = Nethermind.Libp2p.Core.Dto.PublicKey;

namespace Libplanet.Net.Tests
{
    public class CryptoKeyConverterTest
    {
        [Fact]
        public void KeyConversionEquality()
        {
            PrivateKey privateKey = new PrivateKey();

            PublicKey publicKey1 = privateKey.PublicKey;
            Libp2pPublicKey libp2pPublicKey1 = CryptoKeyConverter.ToLibp2pPublicKey(publicKey1);
            PublicKey publicKey2 = CryptoKeyConverter.ToLibplanetPublicKey(libp2pPublicKey1);
            Assert.Equal(publicKey1, publicKey2);

            Libp2pPublicKey libp2pPublicKey2 =
                CryptoKeyConverter.ToLibp2pIdentity(privateKey).PublicKey;
            PublicKey publicKey3 = CryptoKeyConverter.ToLibplanetPublicKey(libp2pPublicKey2);
            Assert.Equal(publicKey1, publicKey3);
            Assert.Equal(libp2pPublicKey1, libp2pPublicKey2);
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
        public void CompareSignatures()
        {
            PrivateKey privateKey = new PrivateKey();
            Identity identity = new Identity(CryptoKeyConverter.ToLibp2pPrivateKey(privateKey));

            // Make sure keys are the same.
            Assert.Equal(
                privateKey.PublicKey,
                CryptoKeyConverter.ToLibplanetPublicKey(identity.PublicKey));

            Random random = new Random();
            byte[] message = new byte[1024];
            random.NextBytes(message);
            byte[] libplanetSignature = privateKey.Sign(message);
            byte[] libp2pSignature = identity.Sign(message);
            Assert.NotEqual(libplanetSignature, libp2pSignature);
            Assert.True(privateKey.PublicKey.Verify(message, libplanetSignature));
            Assert.True(identity.VerifySignature(message, libp2pSignature));
            Assert.True(privateKey.PublicKey.Verify(message, libp2pSignature));
            Assert.True(identity.VerifySignature(message, libplanetSignature));
        }
    }
}
