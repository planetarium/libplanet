using System.Text;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Crypto
{
    public class PublicKeyTest
    {
        [Fact]
        public void VerifyTest()
        {
            var pubKey = new PublicKey(ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a5483440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db"));
            var payload = ByteUtil.ParseHex(
                "64373a616374696f6e736c6531303a7075626c69635f6b657936353a04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a5483440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db393a726563697069656e7432303a8ae72efab09594665112e6d49dfd1941538cf374363a73656e64657232303ab6c03de57ddf0369c7207d2d113adff8205199cf393a74696d657374616d7032373a323031382d30312d30325430333a30343a30352e3030363030305a65");
            var signature = ByteUtil.ParseHex(
                "3044022062cf8a04419c6a03baf55de10d9b200edaa9df2b9bf0cf989fd65d71c55c356002202aa55969d0adb15e9e708d8300e105311e1a16165db73ed8f4f0051d9f1381fd");
            Assert.True(pubKey.Verify(payload, signature));
        }

        [Fact]
        public void EncryptTest()
        {
            var prvKey = new PrivateKey();
            var pubKey = prvKey.PublicKey;
            var bs = Encoding.ASCII.GetBytes("hello world");
            var encrypted = pubKey.Encrypt(bs);

            Assert.Equal(bs, prvKey.Decrypt(encrypted));
        }

        [Fact]
        public void EqualsTest()
        {
            var key1 = new PublicKey(ByteUtil.ParseHex(
                "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f732808711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"));
            var key2 = new PublicKey(ByteUtil.ParseHex(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280")); // compressed of key1
            var key3 = new PublicKey(ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a5483440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db"));

            Assert.Equal(key1, key2);
            Assert.NotEqual(key2, key3);

            Assert.True(key1 == key2);
            Assert.False(key2 == key3);

            Assert.False(key1 != key2);
            Assert.True(key2 != key3);
        }
    }
}
