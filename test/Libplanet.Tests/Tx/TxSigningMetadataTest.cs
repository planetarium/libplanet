using System;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class TxSigningMetadataTest
    {
        private static readonly PublicKey PublicKey = new PublicKey(
            ByteUtil.ParseHex(
                "03f804c12768bf9e05978ee37c56d037f68523fd9079642691eec82e233e1559bf"));

        [Fact]
        public void Constructor()
        {
            var metadata = new TxSigningMetadata(PublicKey, 123L);
            Assert.Equal(PublicKey.Address, metadata.Signer);
            Assert.Equal(123L, metadata.Nonce);

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new TxSigningMetadata(PublicKey, -1L));
        }

        [Fact]
        public void CopyConstructor()
        {
            var metadata = new TxSigningMetadata(PublicKey, 123L);
            var copy = new TxSigningMetadata(metadata);
            Assert.Equal(PublicKey.Address, copy.Signer);
            Assert.Equal(123L, copy.Nonce);

            var copyFromInterface = new TxSigningMetadata(new MockingTxSigningMetadata());
            Assert.Equal(PublicKey.Address, copyFromInterface.Signer);
            Assert.Equal(123L, copyFromInterface.Nonce);
        }

        [Fact]
        public void Equality()
        {
            var metadata = new TxSigningMetadata(PublicKey, 123L);
            var copy = new TxSigningMetadata(metadata);
            Assert.True(metadata.Equals(copy));
            Assert.True(metadata.Equals((object)copy));
            Assert.Equal(metadata.GetHashCode(), copy.GetHashCode());

            var mock = new MockingTxSigningMetadata();
            Assert.True(metadata.Equals(mock));
            Assert.True(metadata.Equals((object)mock));

            var diffPublicKey = new TxSigningMetadata(new PrivateKey().PublicKey, 123L);
            Assert.False(metadata.Equals(diffPublicKey));
            Assert.False(metadata.Equals((object)diffPublicKey));
            Assert.NotEqual(metadata.GetHashCode(), diffPublicKey.GetHashCode());
            Assert.False(diffPublicKey.Equals(mock));
            Assert.False(diffPublicKey.Equals((object)mock));
            Assert.NotEqual(diffPublicKey.GetHashCode(), mock.GetHashCode());

            var diffNonce = new TxSigningMetadata(PublicKey, 456L);
            Assert.False(metadata.Equals(diffNonce));
            Assert.False(metadata.Equals((object)diffNonce));
            Assert.NotEqual(metadata.GetHashCode(), diffNonce.GetHashCode());
            Assert.False(diffNonce.Equals(mock));
            Assert.False(diffNonce.Equals((object)mock));
            Assert.NotEqual(diffNonce.GetHashCode(), mock.GetHashCode());
        }

        [Fact]
        public void JsonSerialization()
        {
#pragma warning disable MEN002  // Long lines are OK for test JSON data.
            TestUtils.AssertJsonSerializable(
                new TxSigningMetadata(PublicKey, 123L),
                @"
                    {
                      ""signer"": ""89F0eE48e8BeaE3131B17Dc79A1282A0D7EdC6b9"",
                      ""nonce"": 123
                    }
                ",
                false);
#pragma warning restore MEN002
        }

        private class MockingTxSigningMetadata : ITxSigningMetadata
        {
            long ITxSigningMetadata.Nonce => 123L;

            Address ITxSigningMetadata.Signer => PublicKey.Address;

            bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata other) => false;
        }
    }
}
