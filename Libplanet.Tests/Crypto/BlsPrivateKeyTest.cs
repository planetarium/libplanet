using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Crypto
{
    public class BlsPrivateKeyTest
    {
        internal static readonly byte[] PrivKey1 =
        {
            0x04, 0xee, 0x18, 0x8b, 0x27, 0x83, 0x6e, 0xb3, 0x85, 0xf9, 0x87,
            0x61, 0x07, 0x84, 0x7b, 0x5e, 0x65, 0xcd, 0x99, 0x92, 0x04, 0x71,
            0x8a, 0x62, 0xf4, 0xc9, 0x2a, 0x94, 0xc4, 0x3e, 0xe2, 0x36,
        };

        private readonly byte[] _privKey2 =
        {
            0x43, 0xc7, 0x75, 0xd1, 0x17, 0x4b, 0xc5, 0x35, 0x5d, 0x91, 0x51,
            0x6c, 0x25, 0x2a, 0x36, 0x24, 0x2d, 0x2e, 0xe2, 0xc3, 0xfc, 0xd7,
            0x9d, 0x7f, 0x1c, 0x3b, 0x66, 0x06, 0x9a, 0x32, 0x9d, 0xcc,
        };

        private readonly byte[] _payload =
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

        [Fact]
        public void Constructor()
        {
            var privateKey = new BlsPrivateKey(PrivKey1);
            Assert.Equal(privateKey.ToByteArray(), PrivKey1);
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsPrivateKey(PrivKey1.Skip(1).ToArray()));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsPrivateKey(PrivKey1.Concat(new List<byte>() { 0x00, }).ToArray()));
            Assert.Throws<ArgumentNullException>(
                () => new BlsPrivateKey(ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentNullException>(
                () => new BlsPrivateKey(default(ImmutableArray<byte>)));
        }

        [Fact]
        public void IECPrivateKeyKeyBytes()
        {
            var privateKey = new BlsPrivateKey(PrivKey1);
            IPrivateKey pk = privateKey;
            AssertBytesEqual(PrivKey1, pk.KeyBytes.ToArray());
        }

        [Fact]
        public void FromString()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => BlsPrivateKey.FromString(string.Empty));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlsPrivateKey.FromString("a"));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlsPrivateKey.FromString("870912"));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlsSignature.FromString(
                    string.Concat(Enumerable.Repeat("0", 60)) + "01"
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlsSignature.FromString(
                    string.Concat(Enumerable.Repeat("0", 64)) + "01"
                )
            );
            Assert.Throws<FormatException>(() => BlsPrivateKey.FromString("zz"));
            Assert.Throws<CryptographicException>(() => BlsPrivateKey.FromString(
                "e07107ca4b0d19147fa1152a0f2c7884705d59cbb6318e2f901bd28dd9ff78e3"
            ));

            BlsPrivateKey actual = BlsPrivateKey.FromString(
                "04ee188b27836eb385f9876107847b5e65cd999204718a62f4c92a94c43ee236"
            );
            AssertBytesEqual(PrivKey1, actual.ToByteArray()
            );
        }

        [Fact]
        public void BytesTest()
        {
            var key = new BlsPrivateKey(PrivKey1);
            Assert.Equal(PrivKey1, key.ToByteArray());
            key = new BlsPrivateKey(PrivKey1.ToImmutableArray());
            Assert.Equal(PrivKey1, key.ByteArray);
        }

        [Fact]
        public void BytesSanityCheckTest()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsPrivateKey(new byte[] { 0x87, 0x09, 0x12 })
             );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsPrivateKey(new byte[31]
                {
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0x87, 0x09, 0x12,
                })
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsPrivateKey(new byte[33]
                {
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0x87, 0x09, 0x12,
                })
            );

            var bs = new byte[20]
            {
                0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
                0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
            };
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsPrivateKey(bs));
            ImmutableArray<byte> ibs = bs.ToImmutableArray();
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsPrivateKey(ibs));
        }

        [Fact]
        public void PublicKeyTest()
        {
            var expected = new byte[]
            {
                0x99, 0x7c, 0x83, 0x09, 0xaf, 0xf4, 0x61, 0xea, 0x72, 0xc3, 0xcb, 0x38,
                0x37, 0xae, 0xb8, 0x2a, 0x9f, 0xbd, 0x80, 0x56, 0x7c, 0x22, 0xd4, 0x0d,
                0x07, 0xc7, 0xa3, 0xdf, 0xf8, 0xdd, 0xf9, 0x72, 0x41, 0xc8, 0xd3, 0x36,
                0x24, 0xc7, 0xe0, 0x18, 0x30, 0xba, 0x2d, 0xd2, 0x41, 0x10, 0x3d, 0x77,
            };

            Assert.Equal(expected, new BlsPrivateKey(PrivKey1).PublicKey.KeyBytes);
            Assert.Equal(
                expected,
                new BlsPrivateKey(PrivKey1.ToImmutableArray()).PublicKey.KeyBytes);
        }

        [Fact]
        public void ProofOfPossessionTest()
        {
            var expected = new byte[]
            {
                0xaf, 0x92, 0xa3, 0x5d, 0xeb, 0x8c, 0xc2, 0x9b, 0xc6, 0x4a, 0x5d, 0x01, 0xe4, 0xb2,
                0x9f, 0x32, 0xd8, 0x28, 0x1f, 0x84, 0xf7, 0x3a, 0x20, 0xd4, 0x88, 0xd6, 0x40, 0x4e,
                0x45, 0x9f, 0x37, 0xf0, 0xbe, 0x0c, 0x78, 0x7b, 0xca, 0x99, 0xf8, 0x8e, 0x5e, 0x8a,
                0xf8, 0xa0, 0x06, 0x2d, 0x41, 0x0e, 0x17, 0xb8, 0x63, 0x9f, 0x47, 0xc9, 0x42, 0x4d,
                0xde, 0xc5, 0xff, 0xed, 0xbe, 0xf1, 0x82, 0xae, 0x4a, 0x09, 0xd9, 0x09, 0xc5, 0x03,
                0x4a, 0xdf, 0xac, 0x9a, 0x99, 0x28, 0x47, 0x6d, 0x99, 0x68, 0x7b, 0x49, 0x29, 0x7e,
                0x3f, 0xdb, 0xc7, 0x46, 0xac, 0x28, 0x6d, 0xcf, 0x85, 0x2c, 0x4d, 0x29,
            };

            var pk = new BlsPrivateKey(PrivKey1);
            Assert.Equal(expected, pk.ProofOfPossession.ToByteArray());
            Assert.True(pk.PublicKey.VerifyProofOfPossession(pk.ProofOfPossession));
        }

        [Fact]
        public void SignTest()
        {
            var pk = new BlsPrivateKey(PrivKey1);
            var pubKey = pk.PublicKey;
            var wrongPubKey = new BlsPrivateKey().PublicKey;

            Assert.True(pubKey.Verify(_payload, pk.Sign(_payload)));
            Assert.False(pubKey.Verify(_payload.Skip(1).ToArray(), pk.Sign(_payload)));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(
                    _payload, pk.Sign(_payload).Skip(1).ToArray()));
            Assert.False(wrongPubKey.Verify(_payload, pk.Sign(_payload)));
            Assert.True(pubKey.Verify(_payload, pk.Sign(_payload)));
        }

        [Fact]
        public void IPrivateKeySignTest()
        {
            IPrivateKey pk = new BlsPrivateKey(PrivKey1);
            var pubKey = pk.PublicKey;
            var wrongPubKey = new BlsPrivateKey().PublicKey;

            AssertBytesEqual(pk.Sign(_payload), pk.Sign(_payload));
            Assert.True(pubKey.Verify(_payload, pk.Sign(_payload)));
            Assert.False(pubKey.Verify(_payload.Skip(1).ToArray(), pk.Sign(_payload)));
            Assert.Throws<CryptographicException>(
                () => pubKey.Verify(
                    _payload, pk.Sign(_payload).Skip(1).ToArray()));
            Assert.False(wrongPubKey.Verify(_payload, pk.Sign(_payload)));
            Assert.True(pubKey.Verify(_payload, pk.Sign(_payload)));
        }

        [Fact]
        public void EqualsTest()
        {
            var key1 = new BlsPrivateKey(PrivKey1);
            var key2 = new BlsPrivateKey(PrivKey1);
            var key3 = new BlsPrivateKey(_privKey2);

            Assert.Equal(key1, key2);
            Assert.NotEqual(key2, key3);

            Assert.True(key1 == key2);
            Assert.False(key2 == key3);

            Assert.False(key1 != key2);
            Assert.True(key2 != key3);
        }

        [Fact]
        public void HexStringConstructor()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsPrivateKey(string.Empty));
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsPrivateKey("a"));
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsPrivateKey("870912"));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsPrivateKey(
                    "00000000000000000000000000000000000000000000000000000000870912"
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsPrivateKey(
                    "000000000000000000000000000000000000000000000000000000000000870912"
                )
            );
            Assert.Throws<FormatException>(() => new BlsPrivateKey("zz"));
            BlsPrivateKey actual = new BlsPrivateKey(
                "04ee188b27836eb385f9876107847b5e65cd999204718a62f4c92a94c43ee236"
            );
            AssertBytesEqual(PrivKey1, actual.ToByteArray()
            );
        }
    }
}
