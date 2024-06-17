using System;
using System.Collections.Immutable;
using System.Text.Json;
using Libplanet.KeyStore;
using Libplanet.KeyStore.Ciphers;
using Xunit;

namespace Libplanet.Tests.KeyStore.Ciphers
{
    public class Aes128CtrTest : CipherTest<Aes128Ctr>
    {
        public Aes128CtrTest()
        {
            var random = new Random();
            var buffer = new byte[16];
            random.NextBytes(buffer);
            Cipher = new Aes128Ctr(buffer.ToImmutableArray());
        }

        public override Aes128Ctr Cipher { get; }

        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(() =>
                new Aes128Ctr(new byte[0].ToImmutableArray())
            );
            var random = new Random();
            var buffer = new byte[17];
            random.NextBytes(buffer);
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new Aes128Ctr(buffer.ToImmutableArray())
            );
        }

        [Fact]
        public void FromJson()
        {
            var options = new JsonDocumentOptions
            {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip,
            };

            Aes128Ctr Load(string json)
            {
                using (JsonDocument doc = JsonDocument.Parse(json, options))
                {
                    return (Aes128Ctr)Aes128Ctr.FromJson(doc.RootElement);
                }
            }

            Aes128Ctr cipher = Load(@"{
                ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
            }");
            TestUtils.AssertBytesEqual(
                new byte[]
                {
                    0xbc, 0x7f, 0x2c, 0xa2, 0x3b, 0xfe, 0xe0, 0xdd,
                    0x97, 0x25, 0x22, 0x8a, 0xb2, 0xb0, 0xd9, 0x8a,
                }.ToImmutableArray(),
                cipher.Iv
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"{
                    // ""iv"": ""..."",  // lacks
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"{
                    ""iv"": true,  // not a string
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"{
                    ""iv"": null,  // not a string, but null
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"{
                    ""iv"": ""not a hexadecimal string"",
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"{
                    ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98"",
                    // iv: invalid length
                }")
            );
        }
    }
}
