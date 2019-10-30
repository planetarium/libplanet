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

        [Fact]
        public void Unprotect()
        {
            Assert.Equal(AddressFixture, Fixture.Address);
            Assert.Equal(
                AddressFixture,
                Fixture.Unprotect(PassphraseFixture).PublicKey.ToAddress()
            );
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

        [Fact]
        public void Protect()
        {
            PrivateKey privKey = new PrivateKey();
            ProtectedPrivateKey protectedKey = ProtectedPrivateKey.Protect(privKey, "foobar");
            AssertBytesEqual(
                privKey.ByteArray,
                protectedKey.Unprotect("foobar").ByteArray
            );
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
                    ""address"": ""d80d933db45cc0cf69e9632090f8aaff635dc8e50"",  // Invalid length
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
            Assert.Equal(AddressFixture, key.Unprotect(PassphraseFixture).PublicKey.ToAddress());
        }
    }
}
