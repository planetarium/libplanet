using System;
using System.Collections.Immutable;
using System.IO;
using System.Text;
using Libplanet.Crypto;
using Libplanet.KeyStore;
using Libplanet.KeyStore.Ciphers;
using Libplanet.KeyStore.Kdfs;
using Org.BouncyCastle.Crypto.Digests;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.KeyStore
{
    public class ProtectedPrivateKeyTest
    {
        public const string PassphraseFixture = "asdf";

        public static readonly byte[] CiphertextFixture =
        {
            0x53, 0x5b, 0xab, 0x75, 0xc1, 0x12, 0xfe, 0x32, 0x7d, 0xc2, 0xe2,
            0x93, 0xf8, 0x02, 0x97, 0xff, 0x33, 0x9e, 0x1e, 0x3c, 0xb7, 0x67,
            0x49, 0x61, 0x53, 0x13, 0xcd, 0xc2, 0xaa, 0xa3, 0xb3, 0x7a,
        };

        public static readonly ImmutableArray<byte> IvFixture = new byte[]
        {
            0xbc, 0x7f, 0x2c, 0xa2, 0x3b, 0xfe, 0xe0, 0xdd,
            0x97, 0x25, 0x22, 0x8a, 0xb2, 0xb0, 0xd9, 0x8a,
        }.ToImmutableArray();

        public static readonly byte[] SaltFixture =
        {
            0x3e, 0xea, 0xaf, 0x35, 0xda, 0x70, 0x92, 0x83, 0x87, 0xca, 0xe1,
            0xea, 0xd3, 0x1e, 0xd7, 0x82, 0xb1, 0x13, 0x5d, 0x75, 0x78, 0xa8,
            0x9d, 0x95, 0xe3, 0x0c, 0xc9, 0x14, 0x01, 0x0b, 0xa2, 0xed,
        };

        public static readonly byte[] MacFixture =
        {
            0xd8, 0x6a, 0xb9, 0xef, 0xf2, 0x3f, 0x28, 0x21, 0x0d, 0xc0, 0x10,
            0x2a, 0x23, 0x64, 0x98, 0xe5, 0xc9, 0x68, 0x88, 0xbe, 0x6b, 0x5c,
            0xd6, 0xf3, 0x09, 0x81, 0xaa, 0x89, 0x6b, 0xe8, 0x42, 0xd1,
        };

        public static readonly Address AddressFixture =
            new Address("d80d933db45cc0cf69e9632090f8aaff635dc8e5");

        public static readonly IKdf KdfFixture = new Pbkdf2<Sha256Digest>(10240, SaltFixture, 32);

        public static readonly ICipher CipherFixture = new Aes128Ctr(IvFixture);

        public static readonly ProtectedPrivateKey Fixture = new ProtectedPrivateKey(
            AddressFixture,
            KdfFixture,
            MacFixture,
            CipherFixture,
            CiphertextFixture
        );

        public static readonly byte[] CiphertextFixture2 =
        {
            0x78, 0x70, 0xdf, 0xf7, 0x1e, 0x17, 0x4a, 0xf3, 0xcd, 0xc3, 0xe9,
            0xdd, 0x47, 0xec, 0xfd, 0x2d, 0xbe, 0xca, 0x66, 0x5c, 0xd1, 0x33,
            0xfb, 0x0f, 0x87, 0xdd, 0x93, 0x59, 0xf3, 0x27, 0x9e, 0x0b,
        };

        public static readonly ImmutableArray<byte> IvFixture2 = new byte[]
        {
            0x85, 0x4e, 0x9d, 0x92, 0x31, 0x6a, 0x08, 0x02,
            0xab, 0x5a, 0x9c, 0x09, 0x58, 0x78, 0x61, 0x94,
        }.ToImmutableArray();

        public static readonly ICipher CipherFixture2 = new Aes128Ctr(IvFixture2);

        public static readonly Address AddressFixture2 =
            new Address("89c2b1031ade56524ecb2fe73bf45f18e6d2f06d");

        public static readonly byte[] SaltFixture2 =
        {
            0x75, 0xde, 0x08, 0x2f, 0x96, 0xf1, 0xc7, 0x80, 0xe4, 0x60, 0xb8,
            0x40, 0x01, 0x66, 0xd4, 0x11, 0x48, 0x2b, 0xff, 0x40, 0x24, 0x44,
            0xb8, 0x69, 0x12, 0x5e, 0x75, 0x59, 0x31, 0x5e, 0xa8, 0x92,
        };

        public static readonly IKdf KdfFixture2 = new Scrypt(
            262144, SaltFixture2, 32, 1, 8
        );

        public static readonly byte[] MacFixture2 =
        {
            0xc3, 0xf7, 0xe2, 0xbe, 0x00, 0xe7, 0xf6, 0xc3, 0x37, 0x71, 0x21,
            0xbc, 0x7f, 0xe2, 0x96, 0x7c, 0x22, 0xd6, 0x27, 0xc3, 0x28, 0x9b,
            0xe1, 0xb8, 0xac, 0xe3, 0xa6, 0xb3, 0xc4, 0xa5, 0x4d, 0xad,
        };

        public static readonly ProtectedPrivateKey Fixture2 = new ProtectedPrivateKey(
            AddressFixture2,
            KdfFixture2,
            MacFixture2,
            CipherFixture2,
            CiphertextFixture2
        );

        [Fact]
        public void Unprotect()
        {
            Assert.Equal(AddressFixture, Fixture.Address);
            Assert.Equal(AddressFixture, Fixture.Unprotect(PassphraseFixture).ToAddress());
            Assert.Equal(AddressFixture2, Fixture2.Unprotect(PassphraseFixture).ToAddress());
            var incorrectPassphraseException = Assert.Throws<IncorrectPassphraseException>(
                () => Fixture.Unprotect("wrong passphrase")
            );
            TestUtils.AssertBytesEqual(
                MacFixture.ToImmutableArray(),
                incorrectPassphraseException.ExpectedMac
            );
            Assert.NotEqual(MacFixture, incorrectPassphraseException.InputMac);

            var invalidPpk = new ProtectedPrivateKey(
                default,
                KdfFixture,
                MacFixture,
                CipherFixture,
                CiphertextFixture
            );
            var mismatchedAddressException = Assert.Throws<MismatchedAddressException>(
                () => invalidPpk.Unprotect(PassphraseFixture)
            );
            Assert.Equal(default(Address), mismatchedAddressException.ExpectedAddress);
            Assert.Equal(AddressFixture, mismatchedAddressException.ActualAddress);
        }

        [Theory]
        [InlineData("foobar")]
        [InlineData("unicode-暗號")]
        public void Protect(string passphrase)
        {
            PrivateKey privKey = new PrivateKey();
            ProtectedPrivateKey protectedKey = ProtectedPrivateKey.Protect(privKey, passphrase);
            AssertBytesEqual(
                privKey.ByteArray,
                protectedKey.Unprotect(passphrase).ByteArray
            );
            Assert.Throws<IncorrectPassphraseException>(() => protectedKey.Unprotect("WRONG"));
        }

        [Fact]
        public void FromJson()
        {
            ProtectedPrivateKey key = ProtectedPrivateKey.FromJson(@"{
                ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                ""crypto"": {
                    ""cipher"": ""aes-128-ctr"",
                    ""cipherparams"": {
                        ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                    },
                    ""ciphertext"":
                        ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                    ""kdf"": ""pbkdf2"",
                    ""kdfparams"": {
                        ""c"": 10240,
                        ""dklen"": 32,
                        ""prf"": ""hmac-sha256"",
                        ""salt"":
                            ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed"",
                    },
                    ""mac"": ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                },
                ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                ""version"": 3,
            }");

            Assert.Equal(
                new Address("d80d933db45cc0cf69e9632090f8aaff635dc8e5"),
                key.Address
            );
            Assert.IsType<Aes128Ctr>(key.Cipher);
            AssertBytesEqual(
                new byte[]
                {
                    0x53, 0x5b, 0xab, 0x75, 0xc1, 0x12, 0xfe, 0x32, 0x7d, 0xc2, 0xe2,
                    0x93, 0xf8, 0x02, 0x97, 0xff, 0x33, 0x9e, 0x1e, 0x3c, 0xb7, 0x67,
                    0x49, 0x61, 0x53, 0x13, 0xcd, 0xc2, 0xaa, 0xa3, 0xb3, 0x7a,
                }.ToImmutableArray(),
                key.Ciphertext
            );
            Assert.IsType<Pbkdf2<Sha256Digest>>(key.Kdf);
            AssertBytesEqual(
                new byte[]
                {
                    0xd8, 0x6a, 0xb9, 0xef, 0xf2, 0x3f, 0x28, 0x21, 0x0d, 0xc0, 0x10,
                    0x2a, 0x23, 0x64, 0x98, 0xe5, 0xc9, 0x68, 0x88, 0xbe, 0x6b, 0x5c,
                    0xd6, 0xf3, 0x09, 0x81, 0xaa, 0x89, 0x6b, 0xe8, 0x42, 0xd1,
                }.ToImmutableArray(),
                key.Mac
            );

            ProtectedPrivateKey key2 = ProtectedPrivateKey.FromJson(@"{
                ""address"": ""8e5f4b9b8f84ff90c559c6a4deb3c1febe551f29"",
                ""crypto"": {
                    ""cipher"": ""aes-128-ctr"",
                    ""cipherparams"": {
                        ""iv"": ""cc730222e304f4c230854c63f105ff5b""
                    },
                    ""ciphertext"":
                        ""45a5b80fd3ea8f4f0db824b9b56b42be2c1e3759e77c0197cfa3a136f18d5957"",
                    ""kdf"": ""scrypt"",
                    ""kdfparams"": {
                        ""dklen"": 32,
                        ""n"": 262144,
                        ""p"": 1,
                        ""r"": 8,
                        ""salt"":
                            ""3ada4bad7033fdaa65684ecf93dab3186e48d3f80965070d5fc9aac07811dc8f""
                    },
                    ""mac"": ""445c0bbc6c310d1fcabf7d7456fd3c558e504c4d308ddb83eddb0b2b8f66f834""
                },
                ""id"": ""29ee8172-710d-44b3-9fe9-f401f7b35ad5"",
                ""version"": 3,
            }");
            Assert.Equal(
                new Address("8e5f4b9b8f84ff90c559c6a4deb3c1febe551f29"),
                key2.Address
            );
            Assert.IsType<Aes128Ctr>(key2.Cipher);
            AssertBytesEqual(
                new byte[]
                {
                    0x45, 0xa5, 0xb8, 0x0f, 0xd3, 0xea, 0x8f, 0x4f, 0x0d, 0xb8, 0x24,
                    0xb9, 0xb5, 0x6b, 0x42, 0xbe, 0x2c, 0x1e, 0x37, 0x59, 0xe7, 0x7c,
                    0x01, 0x97, 0xcf, 0xa3, 0xa1, 0x36, 0xf1, 0x8d, 0x59, 0x57,
                }.ToImmutableArray(),
                key2.Ciphertext
            );
            Assert.IsType<Scrypt>(key2.Kdf);
            AssertBytesEqual(
                new byte[]
                {
                    0x44, 0x5c, 0x0b, 0xbc, 0x6c, 0x31, 0x0d, 0x1f, 0xca, 0xbf, 0x7d,
                    0x74, 0x56, 0xfd, 0x3c, 0x55, 0x8e, 0x50, 0x4c, 0x4d, 0x30, 0x8d,
                    0xdb, 0x83, 0xed, 0xdb, 0x0b, 0x2b, 0x8f, 0x66, 0xf8, 0x34,
                }.ToImmutableArray(),
                key2.Mac
            );
        }

        #pragma warning disable MEN003
        [Fact]
        public void FromJsonInvalidCases()
        {
            Func<string, ProtectedPrivateKey> load = ProtectedPrivateKey.FromJson;

            Assert.Throws<InvalidKeyJsonException>(() =>
                load("[]  // Not an object")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    // ""version"": 3,  // Lacks
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": true,  // Not a number
                }")
            );

            Assert.Throws<UnsupportedKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 2,  // Unsupported version
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    // ""crypto"": {},  // Lacks
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": null,  // Not an object
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    // ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",  // Lacks
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": 123,  // Not a string
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": null,  // Not a string, but null
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""Not a hexadecimal string"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e500"",  // Invalid length
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        // ""cipher"": ""aes-128-ctr"",  // Lacks
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": null,  // Not a string, but null
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<UnsupportedKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-256-ctr"",  // Unsupported
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        // ""cipherparams"": {},  // Lacks
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": ""Not an object, but a string"",
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        // ""ciphertext"": ""..."",  // Lacks
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        // ""kdf"": ""pbkdf2"",  // Lacks
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": 123,  // Not a string, but a number
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<UnsupportedKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""unsupported-kdf"",  // Unsupported KDF
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        // ""kdfparams"": {},  // Lacks
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": ""Not an object, but a string"",
                        ""mac"":
                            ""d86ab9eff23f28210dc0102a236498e5c96888be6b5cd6f30981aa896be842d1"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        // ""mac"": ""..."",  // Lacks
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"": 123,  // Not a string, but a number
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e5"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""cipherparams"": {
                            ""iv"": ""bc7f2ca23bfee0dd9725228ab2b0d98a"",
                        },
                        ""ciphertext"":
                            ""535bab75c112fe327dc2e293f80297ff339e1e3cb76749615313cdc2aaa3b37a"",
                        ""kdf"": ""pbkdf2"",
                        ""kdfparams"": {
                            ""c"": 10240,
                            ""dklen"": 32,
                            ""prf"": ""hmac-sha256"",
                            ""salt"":
                                ""3eeaaf35da70928387cae1ead31ed782b1135d7578a89d95e30cc914010ba2ed""
                        },
                        ""mac"": ""Not a hexadecimal string"",
                    },
                    ""id"": ""3b647634-1234-cd02-e93c-02e1c0f54faa"",
                    ""version"": 3,
                }")
            );

            Assert.Throws<InvalidKeyJsonException>(() =>
                load(@"{
                    ""address"": ""89c2b1031ade56524ecb2fe73bf45f18e6d2f06d"",
                    ""crypto"": {
                        ""cipher"": ""aes-128-ctr"",
                        ""ciphertext"":
                            ""7870dff71e174af3cdc3e9dd47ecfd2dbeca665cd133fb0f87dd9359f3279e0b"",
                        ""cipherparams"": {
                            ""iv"": ""854e9d92316a0802ab5a9c0958786194""
                        },
                        ""kdf"": ""scrypt"",
                        ""kdfparams"": {
                            ""dklen"": 32,
                            ""n"": 1,  //  n(Cost) must be a power of 2 greater than 1.
                            ""p"": 1,
                            ""r"": 8,
                            ""salt"":
                                ""75de082f96f1c780e460b8400166d411482bff402444b869125e7559315ea892""
                        },
                        ""mac"":
                            ""c3f7e2be00e7f6c3377121bc7fe2967c22d627c3289be1b8ace3a6b3c4a54dad"",
                    },
                    ""id"": ""c3348c6a-de9c-4c61-828e-7d6b0ec3da26"",
                    ""version"": 3,
                }")
            );
        }
        #pragma warning restore MEN003

        [Fact]
        public void WriteJson()
        {
            string json;
            using (var stream = new MemoryStream())
            {
                Fixture.WriteJson(stream);
                json = Encoding.UTF8.GetString(stream.ToArray());
            }

            // TODO: More decent tests should be written.
            ProtectedPrivateKey key = ProtectedPrivateKey.FromJson(json);
            Assert.Equal(AddressFixture, key.Address);
            Assert.Equal(AddressFixture, key.Unprotect(PassphraseFixture).ToAddress());

            using (var stream = new MemoryStream())
            {
                Fixture2.WriteJson(stream);
                json = Encoding.UTF8.GetString(stream.ToArray());
            }

            ProtectedPrivateKey key2 = ProtectedPrivateKey.FromJson(json);
            Assert.Equal(AddressFixture2, key2.Address);
            Assert.Equal(AddressFixture2, key2.Unprotect(PassphraseFixture).ToAddress());
        }
    }
}
