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
            var pubKey = PublicKey.FromBytes(ByteUtil.ParseHex("04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a5483440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db"));
            var payload = ByteUtil.ParseHex("64373a616374696f6e736c6531303a7075626c69635f6b657936353a04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a5483440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db393a726563697069656e7432303a8ae72efab09594665112e6d49dfd1941538cf374363a73656e64657232303ab6c03de57ddf0369c7207d2d113adff8205199cf393a74696d657374616d7032373a323031382d30312d30325430333a30343a30352e3030363030305a65");
            var signature = ByteUtil.ParseHex("3044022062cf8a04419c6a03baf55de10d9b200edaa9df2b9bf0cf989fd65d71c55c356002202aa55969d0adb15e9e708d8300e105311e1a16165db73ed8f4f0051d9f1381fd");
            Assert.True(pubKey.Verify(payload, signature));
        }

        [Fact]
        public void EncryptTest()
        {
            var prvKey = PrivateKey.Generate();
            var pubKey = prvKey.PublicKey;
            var bs = Encoding.ASCII.GetBytes("hello world");
            var encrypted = pubKey.Encrypt(bs);

            Assert.Equal(bs, prvKey.Decrypt(encrypted));
        }
    }
}
