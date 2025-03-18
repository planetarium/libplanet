using System;
using System.Collections.Immutable;
using System.ComponentModel;
using System.Linq;
using System.Text;
using Libplanet.Common;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Crypto
{
    public class PublicKeyTest
    {
        private readonly ITestOutputHelper _output;

        public PublicKeyTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Constructor()
        {
            byte[] bytes = ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a54" +
                "83440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db");

            var mutable = new PublicKey(bytes);
            var immutable = new PublicKey(bytes);
            Assert.Equal(mutable, immutable);
            var compressedMutable = new PublicKey(mutable.Format(compress: true));
            Assert.Equal(mutable, compressedMutable);
            var compressedImmutable = new PublicKey(
                immutable.ToImmutableArray(compress: true).ToArray());
            Assert.Equal(mutable, compressedImmutable);
        }

        [Fact]
        public void Format()
        {
            byte[] bytes = ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a54" +
                "83440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db");
            byte[] compressed = ByteUtil.ParseHex(
                "03b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a548");

            var key = new PublicKey(bytes);
            TestUtils.AssertBytesEqual(bytes, key.Format(compress: false));
            TestUtils.AssertBytesEqual(compressed, key.Format(compress: true));
            TestUtils.AssertBytesEqual(
                bytes.ToImmutableArray(),
                key.ToImmutableArray(compress: false)
            );
            TestUtils.AssertBytesEqual(
                compressed.ToImmutableArray(),
                key.ToImmutableArray(compress: true)
            );
        }

        [Fact]
        public void AddressTest()
        {
            var privateKey = new PrivateKey(ByteUtil.ParseHex(
                "bee6f9cc62412760b3696e05f6fb4abeb9e83c4f944f83fd62081b7454cbc038"));
            var publicKey = privateKey.PublicKey;
            var expected = new Address("f45A22dD63f6428e85eE0a6E13a763278f57626d");
            Assert.Equal(expected, publicKey.Address);
        }

        /// <summary>
        /// private key: "8dc9c703811d9ef7d513b88f07249f1b90cfa3981ad1e208fa62acda572831ac".
        /// </summary>
        [Fact]
        public void Verify()
        {
            var pubKey = new PublicKey(ByteUtil.ParseHex(
                "0409142d7919d50d48314bf877a9e86d5da7a20a49e230e89fbb18e8c4681a908" +
                "5ab74286cb0c6bf1e56f6e077b2e1630c329338c3bfd0471f1565fe8bcf8de935"));
            var payload = new byte[]
            {
                0x64, 0x37, 0x3a, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
                0x6c, 0x65, 0x31, 0x30, 0x3a, 0x70, 0x75, 0x62, 0x6c, 0x69,
                0x63, 0x5f, 0x6b, 0x65, 0x79, 0x36, 0x35, 0x3a, 0x04, 0xb5,
                0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b, 0xad, 0x39,
                0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b, 0x33, 0xe3,
                0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96, 0xf8, 0xa5,
                0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57, 0xac, 0x2e,
                0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45, 0x32, 0xfd,
                0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce, 0x1a, 0x3d,
                0x3c, 0x76, 0xdb, 0x39, 0x3a, 0x72, 0x65, 0x63, 0x69, 0x70,
                0x69, 0x65, 0x6e, 0x74, 0x32, 0x30, 0x3a, 0x8a, 0xe7, 0x2e,
                0xfa, 0xb0, 0x95, 0x94, 0x66, 0x51, 0x12, 0xe6, 0xd4, 0x9d,
                0xfd, 0x19, 0x41, 0x53, 0x8c, 0xf3, 0x74, 0x36, 0x3a, 0x73,
                0x65, 0x6e, 0x64, 0x65, 0x72, 0x32, 0x30, 0x3a, 0xb6, 0xc0,
                0x3d, 0xe5, 0x7d, 0xdf, 0x03, 0x69, 0xc7, 0x20, 0x7d, 0x2d,
                0x11, 0x3a, 0xdf, 0xf8, 0x20, 0x51, 0x99, 0xcf, 0x39, 0x3a,
                0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x32,
                0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x30, 0x31, 0x2d,
                0x30, 0x32, 0x54, 0x30, 0x33, 0x3a, 0x30, 0x34, 0x3a, 0x30,
                0x35, 0x2e, 0x30, 0x30, 0x36, 0x30, 0x30, 0x30, 0x5a, 0x65,
            };
            var signature = new byte[]
            {
                0x1f, 0x80, 0xfb, 0x27, 0xbd, 0xdb, 0xea, 0xa5, 0x3a, 0x9e,
                0x90, 0xc5, 0xbb, 0xc6, 0x1d, 0x99, 0x8d, 0xcd, 0x2d, 0x4e,
                0x15, 0xdc, 0xeb, 0x4a, 0x78, 0x5f, 0x55, 0xac, 0x1c, 0xcb,
                0x01, 0x93, 0x38, 0xb4, 0xbf, 0xaf, 0x85, 0xbb, 0x02, 0xe8,
                0xeb, 0xe8, 0xa4, 0x21, 0xbe, 0x9f, 0x09, 0x6e, 0x43, 0xbf,
                0x33, 0x74, 0x21, 0x04, 0x83, 0xb9, 0x21, 0x8b, 0x6a, 0xbd,
                0x49, 0xfb, 0x58, 0xb7, 0x1b,
            };
            Assert.True(pubKey.Verify(payload, signature));
            Assert.False(pubKey.Verify(payload, ImmutableArray<byte>.Empty));
            Assert.False(pubKey.Verify(payload, default(ImmutableArray<byte>)));
        }

        [Fact]
        public void VerifyShouldNotCrashForAnyInputs()
        {
            var random = new Random();
            var key = new PublicKey(ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a54" +
                "83440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db"));
            byte[][] testMessages =
            {
                // 0) Asn1ParsingException: corrupted stream - out of bounds length found: 77 >= 71
                ByteUtil.ParseHex(
                    "91cd3ac5b0ee0642dc5f3c64061d8b87d6a7a1f9bfd3c4159068ebffa229bebb" +
                    "a1b9932496f358b26a4e3611abf1e46cd39d3d8da5b2a1bd082535470306a0b2"
                ),
                // 1) Asn1ParsingException: corrupted stream - out of bounds length found: 104 >= 71
                ByteUtil.ParseHex(
                    "dbee28545e490ff2b1311a0545a7498eb1bae9156207ee732f1ee59ec1b18bb4" +
                    "7bdce857e2476eb4988e52263f9b51fdb3ceabb546e00cd4ffb52540637131ff"
                ),
            };
            byte[][] testSignatures =
            {
                // 0) Asn1ParsingException: corrupted stream - out of bounds length found: 77 >= 71
                ByteUtil.ParseHex(
                    "a180c24d8966f1e24fef8e709cb36a9e837e2c04ec3016ef17d51b70be10af64ad846f2" +
                    "a2e97e36cab5a3db623312055bb97c484da9cc6706ad335b34b81243f402ac218433f6f"
                ),
                // 1) Asn1ParsingException: corrupted stream - out of bounds length found: 104 >= 71
                ByteUtil.ParseHex(
                    "a5668968bef1ac694b357cd4b4c83494cde8eaf206d66d9ad014582c222e50275c5281d" +
                    "811e83ec12141691164381f378191727b863ff9cef8ee98aa997f461de4557862465b82"
                ),
            };
            Assert.Equal(testMessages.Length, testSignatures.Length);

            for (int i = 0; i < testMessages.Length; i++)
            {
                bool validity;
                byte[] message = testMessages[i];
                byte[] sig = testSignatures[i];
                try
                {
                    validity = key.Verify(message, sig);
                }
                catch (Exception)
                {
                    _output.WriteLine(
                        "An unexpected exception is thrown by {0}.{1}() method with input #{2}:",
                        nameof(PublicKey),
                        nameof(PublicKey.Verify),
                        i
                    );
                    _output.WriteLine("  message:   {0}", ByteUtil.Hex(message));
                    _output.WriteLine("  signature: {0}", ByteUtil.Hex(sig));
                    throw;
                }

                string msg =
                    $"{nameof(PublicKey.Verify)}() method made an incorrect answer for input " +
                    $"#{i}:\n" +
                    $"  message:   {ByteUtil.Hex(message)}\n" +
                    $"  signature: {ByteUtil.Hex(sig)}\n";
                Assert.False(validity, msg);
            }

            for (int i = 0; i < 100; i++)
            {
                byte[] message = random.NextBytes(64);
                byte[] sig = random.NextBytes(71);
                bool validity;
                try
                {
                    validity = key.Verify(message, sig);
                }
                catch (Exception)
                {
                    _output.WriteLine(
                        "An unexpected exception is thrown by {0}.{1}() method with the input:",
                        nameof(PublicKey),
                        nameof(PublicKey.Verify)
                    );
                    _output.WriteLine("  message:   {0}", ByteUtil.Hex(message));
                    _output.WriteLine("  signature: {0}", ByteUtil.Hex(sig));
                    throw;
                }

                string msg =
                    $"{nameof(PublicKey.Verify)}() method made an incorrect answer for the below " +
                    "arbitrary inputs:\n" +
                    $"  message:   {ByteUtil.Hex(message)}\n" +
                    $"  signature: {ByteUtil.Hex(sig)}\n";
                Assert.False(validity, msg);
            }
        }

        [Fact]
        public void EncryptTest()
        {
            var prvKey = new PrivateKey(
                "281747f1f29309b061e4a36a28ddc8276aec353cc312d3d8619d23ccf36172a5");
            var pubKey = prvKey.PublicKey;
            var bs = Encoding.ASCII.GetBytes("hello world");

            var encrypted = pubKey.Encrypt(bs);
            TestUtils.AssertBytesEqual(bs, prvKey.Decrypt(encrypted));

            ImmutableArray<byte> immutable = bs.ToImmutableArray();
            var encryptedImmutable = pubKey.Encrypt(immutable);
            TestUtils.AssertBytesEqual(immutable, prvKey.Decrypt(encryptedImmutable));
        }

        [Fact]
        public void EqualsTest()
        {
            // key2 is compression of key1
            var key1 = new PublicKey(ByteUtil.ParseHex(
                "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f7328" +
                "08711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"));
            var key2 = new PublicKey(ByteUtil.ParseHex(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280"));
            var key3 = new PublicKey(ByteUtil.ParseHex(
                "04b5a24aa2112720423bad39a0205182379d6f2b33e3487c9ab6cc8fc496f8a54" +
                "83440efbbef0657ac2ef6c6ee05db06a94532fda7ddc44a1695e5ce1a3d3c76db"));

            Assert.Equal(key1, key2);
            Assert.NotEqual(key2, key3);

            Assert.True(key1 == key2);
            Assert.False(key2 == key3);

            Assert.False(key1 != key2);
            Assert.True(key2 != key3);
        }

        [Fact]
        public void FromHex()
        {
            var expected = new PublicKey(
                new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }
            );
            PublicKey key = PublicKey.FromHex(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280");
            Assert.Equal(expected, key);

            key = PublicKey.FromHex(
                "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f7328" +
                "08711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296");
            Assert.Equal(expected, key);

            Assert.Throws<ArgumentOutOfRangeException>(() => PublicKey.FromHex("abc"));
            Assert.Throws<FormatException>(() => PublicKey.FromHex("zz"));
        }

        [Fact]
        public void ToHex()
        {
            var key1 = new PublicKey(
                new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }
            );

            Assert.Equal(
                "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f7328" +
                "08711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296",
                key1.ToHex(false)
            );
            Assert.Equal(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280",
                key1.ToHex(true)
            );
        }

        [Fact]
        public void String()
        {
            PublicKey key = PublicKey.FromHex(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280");
            Assert.Equal(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280",
                key.ToString());
        }

        [Fact]
        public void TypeConverter()
        {
            TypeConverter converter = TypeDescriptor.GetConverter(typeof(PublicKey));
            PublicKey key = PublicKey.FromHex(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280");
            Assert.True(converter.CanConvertFrom(typeof(string)));
            Assert.Equal(
                key,
                converter.ConvertFrom(
                    "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280"));
            Assert.Equal(
                key,
                converter.ConvertFrom(
                    "0246115B0131BACCF94A5856EDE871295F6F3D352E6847CDA9C03E89FE09F73280"));
            Assert.Equal(
                key,
                converter.ConvertFrom(
                    "0446115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f7328" +
                    "08711ec97af6e341f110a326da1bdb81f5ae3badf76a90b22c8c491aed3aaa296"));
            Assert.Throws<ArgumentException>(() => converter.ConvertFrom("INVALID"));

            Assert.True(converter.CanConvertTo(typeof(string)));
            Assert.Equal(
                "0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280",
                converter.ConvertTo(key, typeof(string)));
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            var key = new PublicKey(
                new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }
            );
            TestUtils.AssertJsonSerializable(
                key,
                "\"0246115b0131baccf94a5856ede871295f6f3d352e6847cda9c03e89fe09f73280\""
            );
        }
    }
}
