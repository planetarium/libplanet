using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using Libplanet.KeyStore;
using Libplanet.KeyStore.Kdfs;
using Xunit;

namespace Libplanet.Tests.KeyStore.Kdfs
{
    public class ScryptTest : KdfTest<Scrypt>
    {
        public override Scrypt MakeInstance(byte[] randomBytes)
        {
            return new Scrypt(8, randomBytes, randomBytes.Length, 1, 8);
        }

        [Fact]
        public void ScryptInitialize()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new Scrypt(1, ImmutableArray<byte>.Empty, 0, 1, 8)
                // Cost must be a power of 2 greater than 1!
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new Scrypt(2, ImmutableArray<byte>.Empty, 0, 1, int.MaxValue)
                // Parameter cost is too large!
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new Scrypt(2, ImmutableArray<byte>.Empty, 0, int.MaxValue, 8)
                // Parameter blockSize is too large!
            );
        }

        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "MEN003",
            Justification = "There are just test cases.")]
        [Fact]
        public void FromJson()
        {
            var options = new JsonDocumentOptions
            {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip,
            };

            Scrypt Load(string json)
            {
                using (JsonDocument doc = JsonDocument.Parse(json, options))
                {
                    return (Scrypt)Scrypt.FromJson(doc.RootElement);
                }
            }

            var kdf = Load(@"
            {
                ""dklen"": 32,
                ""n"": 262144,
                ""p"": 1,
                ""r"": 8,
                ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
            }
            ");
            Assert.Equal(262144, kdf.Cost);
            Assert.Equal(32, kdf.KeyLength);
            Assert.Equal(1, kdf.Parallelization);
            Assert.Equal(8, kdf.BlockSize);
            TestUtils.AssertBytesEqual(
                new byte[]
                {
                    0x3a, 0xda, 0x4b, 0xad, 0x70, 0x33, 0xfd, 0xaa, 0x65, 0x68, 0x4e,
                    0xcf, 0x93, 0xda, 0xb3, 0x18, 0x6e, 0x48, 0xd3, 0xf8, 0x09, 0x65,
                    0x07, 0x0d, 0x5f, 0xc9, 0xaa, 0xc0, 0x78, 0x11, 0xdc, 0x8f,
                }.ToImmutableArray(),
                kdf.Salt
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    // ""dklen"": 32,  // lacks
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": true,  // not a number
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": null,  // not a number, but null
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    // ""n"": 262144,  // lacks
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": false,  // not a number
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": null,  // not a number, but null
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    // ""p"": 1,  // lacks
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": false,  // not a number
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": null,  // not a number, but null
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    // ""r"": 8,  // lacks
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": false,  // not a number
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": null,  // not a number, but null
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    // ""salt"": ""..."",  // lacks
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": null,
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": 1234,  // not a string, but a number
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""not a hexadecimal string"",
                }
                ")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                Load(@"
                {
                    ""dklen"": 32,
                    ""n"": 262144,
                    ""p"": 1,
                    ""r"": 8,
                    ""salt"": ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8"",
                    // salt: invalid length
                }
                ")
            );
        }
    }
}
