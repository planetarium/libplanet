using System.Collections.Immutable;
using System.Text.Json;
using Libplanet.KeyStore;
using Libplanet.KeyStore.Kdfs;
using Org.BouncyCastle.Crypto.Digests;
using Xunit;

namespace Libplanet.Tests.KeyStore.Kdfs
{
    public class Pbkdf2Test : KdfTest<Pbkdf2<Sha256Digest>>
    {
        public override Pbkdf2<Sha256Digest> MakeInstance(byte[] randomBytes)
        {
            return new Pbkdf2<Sha256Digest>(10, randomBytes, randomBytes.Length);
        }

        [Fact]
        public void FromJson()
        {
            var options = new JsonDocumentOptions
            {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip,
            };

            Pbkdf2<Sha256Digest> Load(string json)
            {
                using (JsonDocument doc = JsonDocument.Parse(json, options))
                {
                    return (Pbkdf2<Sha256Digest>)Pbkdf2.FromJson(doc.RootElement);
                }
            }

            var kdf = Load(@"
            {
                ""c"": 10240,
                ""dklen"": 32,
                ""prf"": ""hmac-sha256"",
                ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
            }
            ");
            Assert.Equal(10240, kdf.Iterations);
            Assert.Equal(32, kdf.KeyLength);
            TestUtils.AssertBytesEqual(
                new byte[]
                {
                    0x3e, 0xea, 0xaf, 0x35, 0xda, 0x70, 0x92, 0x83, 0x87, 0xca, 0xe1,
                    0xea, 0xd3, 0x1e, 0xd7, 0x82, 0xb1, 0x13, 0x5d, 0x75, 0x78, 0xa8,
                    0x9d, 0x95, 0xe3, 0x0c, 0xc9, 0x14, 0x01, 0x0b, 0xa2, 0xed,
                }.ToImmutableArray(),
                kdf.Salt
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    // ""c"": 10240,  // lacks
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": true,  // not a number
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": null,  // not a number, but null
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    // ""dklen"": 32,  // lacks
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": false,  // not a number
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": null,  // not a number, but null
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    // ""prf"": ""hmac-sha256"",  // lacks
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": 123,  // not a string, but a number
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<UnsupportedKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha512"",  // unsupported prf
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    // ""salt"": ""..."",  // lacks
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": 1234,  // not a string, but a number
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""not a hexadecimal string"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""c"": 10240,
                    ""dklen"": 32,
                    ""prf"": ""hmac-sha256"",
                    ""salt"": ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2e"",
                    // salt: invalid length
                }
                ")
            );
        }
    }
}
