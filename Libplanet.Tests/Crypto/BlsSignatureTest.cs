using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Crypto;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Crypto
{
    public class BlsSignatureTest
    {
        internal static readonly byte[] InfiniteSignature =
            new byte[] { 0xc0 }.Concat(new byte[95]).ToArray();

        private readonly BlsPrivateKey _privKey1 = new BlsPrivateKey(
            new byte[]
            {
                0x04, 0xee, 0x18, 0x8b, 0x27, 0x83, 0x6e, 0xb3, 0x85, 0xf9, 0x87,
                0x61, 0x07, 0x84, 0x7b, 0x5e, 0x65, 0xcd, 0x99, 0x92, 0x04, 0x71,
                0x8a, 0x62, 0xf4, 0xc9, 0x2a, 0x94, 0xc4, 0x3e, 0xe2, 0x36,
            });

        private readonly BlsPrivateKey _privKey2 = new BlsPrivateKey(
            new byte[]
            {
                0x43, 0xc7, 0x75, 0xd1, 0x17, 0x4b, 0xc5, 0x35, 0x5d, 0x91, 0x51,
                0x6c, 0x25, 0x2a, 0x36, 0x24, 0x2d, 0x2e, 0xe2, 0xc3, 0xfc, 0xd7,
                0x9d, 0x7f, 0x1c, 0x3b, 0x66, 0x06, 0x9a, 0x32, 0x9d, 0xcc,
            }
        );

        private readonly BlsPrivateKey _privKey3 = new BlsPrivateKey(
            new byte[]
            {
                0x1a, 0x87, 0x2c, 0xdd, 0xa5, 0x6a, 0x2c, 0xdc, 0xed, 0x7a, 0x49,
                0xdb, 0xb6, 0xe5, 0xba, 0xf5, 0x98, 0x70, 0x94, 0x1a, 0x66, 0x66,
                0xa6, 0x3e, 0x57, 0xca, 0x2b, 0xb5, 0x53, 0xb3, 0x50, 0x3f,
            }
        );

        [Fact]
        public void Constructor()
        {
            byte[] bytes =
            {
                0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b, 0xd8,
                0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f, 0xa9, 0xdd,
                0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75, 0x3d, 0x7a, 0x26,
                0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5, 0x79, 0x2e, 0x84, 0x6d,
                0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10, 0xa6, 0x18, 0x6d, 0x99, 0x92,
                0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c, 0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7,
                0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6, 0x8d, 0x4e, 0x56, 0xc6, 0x7d,
            };

            byte[] proofOfPossessionBytes =
            {
                0xa3, 0x01, 0x26, 0x09, 0x63, 0xf2, 0x82, 0xbe, 0x76, 0xc3, 0x49, 0x63, 0x83, 0x45,
                0x54, 0x35, 0x85, 0x7c, 0x02, 0x65, 0x8f, 0x35, 0x99, 0x6c, 0x30, 0x8b, 0xb4, 0x42,
                0x8e, 0x16, 0x93, 0x66, 0xb4, 0x3d, 0x73, 0x11, 0x6e, 0x47, 0x35, 0x1f, 0xea, 0xc7,
                0xf4, 0xb0, 0x70, 0xf3, 0xfc, 0xf2, 0x11, 0xba, 0x5f, 0x41, 0xa7, 0xe3, 0xd3, 0xbd,
                0x7a, 0xec, 0xdd, 0x88, 0x55, 0x02, 0x14, 0x95, 0x86, 0x1d, 0x43, 0xa9, 0xd6, 0x15,
                0x73, 0x8d, 0xa5, 0x1a, 0x3a, 0x53, 0xa2, 0x68, 0x5a, 0x10, 0x8e, 0x6b, 0x9f, 0x67,
                0xe6, 0x7b, 0x46, 0x2a, 0x0a, 0x88, 0x02, 0xae, 0xaa, 0xcb, 0xdc, 0x27,
            };

            var signature = new BlsSignature(bytes);
            var proofOfPossession = new BlsSignature(proofOfPossessionBytes);

            Assert.Equal(signature.ToByteArray(), bytes);
            Assert.Equal(proofOfPossession.ToByteArray(), proofOfPossessionBytes);

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsSignature(bytes.Skip(1).ToArray()));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsSignature(bytes.Concat(new List<byte>() { 0x00, }).ToArray()));
            Assert.Throws<ArgumentNullException>(
                () => new BlsSignature(ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentNullException>(
                () => new BlsSignature(default(ImmutableArray<byte>)));
            Assert.Throws<CryptographicException>(
                () => new BlsSignature(new byte[96]));

            var infinite = new BlsSignature(InfiniteSignature);
            Assert.Equal(infinite.ToByteArray(), InfiniteSignature);
        }

        [Fact]
        public void FromString()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => BlsSignature.FromString(string.Empty));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlsSignature.FromString("a"));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlsSignature.FromString("870912"));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlsSignature.FromString(
                    string.Concat(Enumerable.Repeat("0", 188)) + "01"
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                BlsSignature.FromString(
                    string.Concat(Enumerable.Repeat("0", 192)) + "01"
                )
            );
            Assert.Throws<FormatException>(() => BlsSignature.FromString("zz"));
            Assert.Throws<CryptographicException>(() => BlsSignature.FromString(
                "ffcc8a2b0e0eddd0c9df5c579bd859b0dc7c27c42e3844cf862fa9ddb50765a317ce7977927" +
                "c753d7a26bcb9d7f0124a012afff5792e846dadc25ac9dc9ad3d610a6186d9992e5960c3532" +
                "36085c7649a9865bd77aeafb7ad71bf68d4e56c67d"
            ));
            Assert.Throws<CryptographicException>(() => BlsSignature.FromString(
                string.Concat(Enumerable.Repeat(0, 192))
            ));

            BlsSignature actual = BlsSignature.FromString(
                "b8cc8a2b0e0eddd0c9df5c579bd859b0dc7c27c42e3844cf862fa9ddb50765a317ce7977927" +
                "c753d7a26bcb9d7f0124a012afff5792e846dadc25ac9dc9ad3d610a6186d9992e5960c3532" +
                "36085c7649a9865bd77aeafb7ad71bf68d4e56c67d"
            );
            AssertBytesEqual(
                new byte[96]
                {
                    0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b,
                    0xd8, 0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f,
                    0xa9, 0xdd, 0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75,
                    0x3d, 0x7a, 0x26, 0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5,
                    0x79, 0x2e, 0x84, 0x6d, 0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10,
                    0xa6, 0x18, 0x6d, 0x99, 0x92, 0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c,
                    0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7, 0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6,
                    0x8d, 0x4e, 0x56, 0xc6, 0x7d,
                },
                actual.ToByteArray()
            );
        }

        [Fact]
        public void BytesTest()
        {
            var bs = new byte[]
            {
                0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b, 0xd8,
                0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f, 0xa9, 0xdd,
                0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75, 0x3d, 0x7a, 0x26,
                0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5, 0x79, 0x2e, 0x84, 0x6d,
                0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10, 0xa6, 0x18, 0x6d, 0x99, 0x92,
                0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c, 0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7,
                0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6, 0x8d, 0x4e, 0x56, 0xc6, 0x7d,
            };
            var key = new BlsSignature(bs);
            Assert.Equal(bs, key.ToByteArray());
            key = new BlsSignature(bs.ToImmutableArray());
            Assert.Equal(bs, key.ByteArray);
        }

        [Fact]
        public void BytesSanityCheckTest()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlsSignature(new byte[] { 0x87, 0x09, 0x12 })
             );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsSignature(
                    Enumerable.Repeat((byte)0x00, 94).Concat(new[] { (byte)0x01 }).ToArray())
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlsSignature(
                    Enumerable.Repeat((byte)0x00, 96).Concat(new[] { (byte)0x01 }).ToArray())
            );

            var bs = new byte[20]
            {
                0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
                0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
            };
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsSignature(bs));
            ImmutableArray<byte> ibs = bs.ToImmutableArray();
            Assert.Throws<ArgumentOutOfRangeException>(() => new BlsSignature(ibs));
        }

        [Fact]
        public void EqualsTest()
        {
            var sign1 = new BlsSignature(
                new byte[]
                {
                    0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b,
                    0xd8, 0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f,
                    0xa9, 0xdd, 0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75,
                    0x3d, 0x7a, 0x26, 0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5,
                    0x79, 0x2e, 0x84, 0x6d, 0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10,
                    0xa6, 0x18, 0x6d, 0x99, 0x92, 0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c,
                    0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7, 0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6,
                    0x8d, 0x4e, 0x56, 0xc6, 0x7d,
                });
            var sign2 = new BlsSignature(
                new byte[]
                {
                    0xb8, 0xcc, 0x8a, 0x2b, 0x0e, 0x0e, 0xdd, 0xd0, 0xc9, 0xdf, 0x5c, 0x57, 0x9b,
                    0xd8, 0x59, 0xb0, 0xdc, 0x7c, 0x27, 0xc4, 0x2e, 0x38, 0x44, 0xcf, 0x86, 0x2f,
                    0xa9, 0xdd, 0xb5, 0x07, 0x65, 0xa3, 0x17, 0xce, 0x79, 0x77, 0x92, 0x7c, 0x75,
                    0x3d, 0x7a, 0x26, 0xbc, 0xb9, 0xd7, 0xf0, 0x12, 0x4a, 0x01, 0x2a, 0xff, 0xf5,
                    0x79, 0x2e, 0x84, 0x6d, 0xad, 0xc2, 0x5a, 0xc9, 0xdc, 0x9a, 0xd3, 0xd6, 0x10,
                    0xa6, 0x18, 0x6d, 0x99, 0x92, 0xe5, 0x96, 0x0c, 0x35, 0x32, 0x36, 0x08, 0x5c,
                    0x76, 0x49, 0xa9, 0x86, 0x5b, 0xd7, 0x7a, 0xea, 0xfb, 0x7a, 0xd7, 0x1b, 0xf6,
                    0x8d, 0x4e, 0x56, 0xc6, 0x7d,
                }
            );
            var sign3 = new BlsSignature(
                new byte[]
                {
                    0xa3, 0x01, 0x26, 0x09, 0x63, 0xf2, 0x82, 0xbe, 0x76, 0xc3, 0x49, 0x63, 0x83,
                    0x45, 0x54, 0x35, 0x85, 0x7c, 0x02, 0x65, 0x8f, 0x35, 0x99, 0x6c, 0x30, 0x8b,
                    0xb4, 0x42, 0x8e, 0x16, 0x93, 0x66, 0xb4, 0x3d, 0x73, 0x11, 0x6e, 0x47, 0x35,
                    0x1f, 0xea, 0xc7, 0xf4, 0xb0, 0x70, 0xf3, 0xfc, 0xf2, 0x11, 0xba, 0x5f, 0x41,
                    0xa7, 0xe3, 0xd3, 0xbd, 0x7a, 0xec, 0xdd, 0x88, 0x55, 0x02, 0x14, 0x95, 0x86,
                    0x1d, 0x43, 0xa9, 0xd6, 0x15, 0x73, 0x8d, 0xa5, 0x1a, 0x3a, 0x53, 0xa2, 0x68,
                    0x5a, 0x10, 0x8e, 0x6b, 0x9f, 0x67, 0xe6, 0x7b, 0x46, 0x2a, 0x0a, 0x88, 0x02,
                    0xae, 0xaa, 0xcb, 0xdc, 0x27,
                }
            );

            Assert.Equal(sign1, sign2);
            Assert.NotEqual(sign2, sign3);

            Assert.True(sign1 == sign2);
            Assert.False(sign2 == sign3);

            Assert.False(sign1 != sign2);
            Assert.True(sign2 != sign3);
        }

        [Fact]
        public void FastAggregateVerifyWithSameMessage()
        {
            // Same message should be given for FastAggregateVerify.
            var message = "test";
            var messageByte = Encoding.UTF8.GetBytes(message);

            var sign1 = new BlsSignature(_privKey1.Sign(messageByte));
            var sign2 = new BlsSignature(_privKey2.Sign(messageByte));
            var sign3 = new BlsSignature(_privKey3.Sign(messageByte));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.True(aggSign.FastAggregateVerify(
                new[]
                {
                    _privKey1.PublicKey, _privKey2.PublicKey, _privKey3.PublicKey,
                },
                messageByte));
        }

        [Fact]
        public void FastAggregateVerifyWithDifferentMessages()
        {
            // Same message should be given for FastAggregateVerify.
            var message = "test";
            var message1Byte = Encoding.UTF8.GetBytes(message);
            var message2Byte = Encoding.UTF8.GetBytes(message + "2");

            var sign1 = new BlsSignature(_privKey1.Sign(message1Byte));
            var sign2 = new BlsSignature(_privKey2.Sign(message2Byte));
            var sign3 = new BlsSignature(_privKey3.Sign(message1Byte));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.False(aggSign.FastAggregateVerify(
                new[]
                {
                    _privKey1.PublicKey, _privKey2.PublicKey, _privKey3.PublicKey,
                },
                message1Byte));
        }

        [Fact]
        public void FastAggregateVerifyWithInfinite()
        {
            var message = "test";
            var messageByte = Encoding.UTF8.GetBytes(message);

            var sign1 = new BlsSignature(_privKey1.Sign(messageByte));
            var sign2 = new BlsSignature(_privKey2.Sign(messageByte));
            var sign3 = new BlsSignature(InfiniteSignature);

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.False(aggSign.FastAggregateVerify(
                new[]
                {
                    _privKey1.PublicKey, _privKey2.PublicKey, _privKey3.PublicKey,
                },
                messageByte));
        }

        [Fact]
        public void AggregateWithDifferentMessage()
        {
            var message = "test";

            var sign1Message = Encoding.UTF8.GetBytes(message + "1");
            var sign2Message = Encoding.UTF8.GetBytes(message + "2");
            var sign3Message = Encoding.UTF8.GetBytes(message + "3");

            var sign1 = new BlsSignature(_privKey1.Sign(sign1Message));
            var sign2 = new BlsSignature(_privKey2.Sign(sign2Message));
            var sign3 = new BlsSignature(_privKey3.Sign(sign3Message));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            var tp = new byte[]
            {
                0x92, 0x48, 0x31, 0x4a, 0xcd, 0xc6, 0xc8, 0xc1, 0x39, 0x93, 0x19, 0x4d, 0x09, 0x8f,
                0x33, 0x8f, 0x40, 0xe3, 0xf1, 0xaa, 0xf8, 0xee, 0x99, 0xcb, 0xaa, 0x12, 0x26, 0x6c,
                0x41, 0x7f, 0x16, 0x0c, 0x6c, 0xe4, 0x30, 0xb3, 0x62, 0x7e, 0x7f, 0xf9, 0x90, 0x7d,
                0x33, 0x38, 0x49, 0x17, 0x98, 0x72, 0x08, 0x96, 0x00, 0xc9, 0x88, 0x75, 0xef, 0x2c,
                0x1c, 0x04, 0x73, 0x59, 0x15, 0x35, 0xd4, 0xca, 0x18, 0x1f, 0x16, 0x8a, 0xd1, 0x7f,
                0x73, 0xd7, 0xc1, 0xca, 0xaa, 0xec, 0x2f, 0xa8, 0x58, 0xc6, 0xe0, 0xb3, 0xf1, 0xe5,
                0xd5, 0xb8, 0x35, 0x89, 0x6c, 0x01, 0xf1, 0xb1, 0x8e, 0x43, 0x38, 0xd3,
            };

            Assert.Equal(tp, aggSign.ToByteArray());
        }

        [Fact]
        public void AggregateWithInfinite()
        {
            // NOTE: Aggregating with infinite signature will creates a signature without infinite
            // signature.
            var message = "test";

            var sign1Message = Encoding.UTF8.GetBytes(message + "1");
            var sign2Message = Encoding.UTF8.GetBytes(message + "2");

            var sign1 = new BlsSignature(_privKey1.Sign(sign1Message));
            var sign2 = new BlsSignature(_privKey2.Sign(sign2Message));
            var sign3 = new BlsSignature(InfiniteSignature);

            var aggSign = new[] { sign1, sign2, sign3 }.AggregateAll();
            var aggSignWithoutInfinite = new[] { sign1, sign2 }.AggregateAll();

            var tp = new byte[]
            {
                0xa0, 0x82, 0x88, 0x93, 0xad, 0x3e, 0x75, 0x4a, 0x7b, 0x9a, 0x92, 0xde, 0x9e, 0xc4,
                0x3b, 0x07, 0xb3, 0xb1, 0x27, 0x91, 0x67, 0xb4, 0xf6, 0x8b, 0x1b, 0xed, 0x25, 0x88,
                0x64, 0x7f, 0xe2, 0x1a, 0x11, 0x28, 0xc1, 0x6c, 0x55, 0xc9, 0x67, 0x55, 0x80, 0xb2,
                0xed, 0x60, 0x6e, 0xaa, 0xb1, 0x90, 0x18, 0xd3, 0xd6, 0xc0, 0xb5, 0xb8, 0x7a, 0x86,
                0x12, 0x9a, 0x34, 0xdf, 0xa6, 0x99, 0x6f, 0x3c, 0xc2, 0x30, 0x2e, 0x8e, 0x10, 0xb8,
                0xeb, 0xe3, 0xa2, 0x30, 0xeb, 0x46, 0x14, 0xd3, 0xd4, 0x62, 0x5c, 0xec, 0x18, 0xa8,
                0x0a, 0xdc, 0x71, 0x85, 0x7b, 0xc3, 0x86, 0x38, 0xd7, 0x3f, 0x4d, 0xc7,
            };

            Assert.Equal(tp, aggSign.ToByteArray());
            Assert.Equal(aggSign.ToByteArray(), aggSignWithoutInfinite.ToByteArray());
        }

        [Fact]
        public void AggregateWithSameMessage()
        {
            var message = "test";

            var sign1Message = Encoding.UTF8.GetBytes(message);
            var sign2Message = Encoding.UTF8.GetBytes(message);
            var sign3Message = Encoding.UTF8.GetBytes(message);

            var sign1 = new BlsSignature(_privKey1.Sign(sign1Message));
            var sign2 = new BlsSignature(_privKey2.Sign(sign2Message));
            var sign3 = new BlsSignature(_privKey3.Sign(sign3Message));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            var tp = new byte[]
            {
                0xa9, 0x63, 0xa3, 0xa5, 0xf1, 0xb2, 0xa2, 0x80, 0x20, 0x4a, 0xf4, 0x99, 0x23, 0x66,
                0x75, 0x21, 0xcf, 0x1e, 0x09, 0x17, 0x45, 0xe2, 0x4e, 0x11, 0x73, 0x83, 0xf0, 0xc2,
                0x0b, 0xe1, 0xe7, 0xac, 0x39, 0x64, 0xf2, 0x7c, 0x16, 0xcb, 0x57, 0x84, 0xa8, 0xab,
                0xcd, 0x04, 0x09, 0xba, 0x42, 0x8c, 0x0c, 0x5d, 0xee, 0x9c, 0x36, 0x4a, 0x5f, 0xb2,
                0x02, 0xef, 0xb4, 0x37, 0x47, 0xa8, 0xbb, 0x89, 0x5b, 0x40, 0x8e, 0xa6, 0xd0, 0x4d,
                0x96, 0x70, 0xf3, 0x57, 0x4e, 0x0c, 0x12, 0x81, 0x7d, 0x0a, 0x2a, 0x11, 0xdf, 0xd0,
                0x88, 0x72, 0xc6, 0xe1, 0xd6, 0x4b, 0xd5, 0x00, 0x37, 0xbf, 0x17, 0xcf,
            };

            Assert.Equal(tp, aggSign.ToByteArray());
        }

        [Fact]
        public void MultiVerifyWithSameMessages()
        {
            var message = "test";
            var messageBytes = Encoding.UTF8.GetBytes(message);

            var sign1 = new BlsSignature(_privKey1.Sign(messageBytes));
            var sign2 = new BlsSignature(_privKey2.Sign(messageBytes));
            var sign3 = new BlsSignature(_privKey3.Sign(messageBytes));

            Assert.True(
                BlsSignature.MultiVerify(
                    new BlsSignature[]
                    {
                        sign1,
                        sign2,
                        sign3,
                    },
                    new BlsPublicKey[]
                    {
                        _privKey1.PublicKey,
                        _privKey2.PublicKey,
                        _privKey3.PublicKey,
                    },
                    Enumerable.Repeat(messageBytes, 3).ToArray()));
        }

        [Fact]
        public void MultiVerifyWithDifferentMessages()
        {
            var message = "test";
            var message1Bytes = Encoding.UTF8.GetBytes(message + "1");
            var message2Bytes = Encoding.UTF8.GetBytes(message + "2");
            var message3Bytes = Encoding.UTF8.GetBytes(message + "3");

            var sign1 = new BlsSignature(_privKey1.Sign(message1Bytes));
            var sign2 = new BlsSignature(_privKey2.Sign(message2Bytes));
            var sign3 = new BlsSignature(_privKey3.Sign(message3Bytes));

            Assert.True(
                BlsSignature.MultiVerify(
                    new BlsSignature[]
                    {
                        sign1,
                        sign2,
                        sign3,
                    },
                    new BlsPublicKey[]
                    {
                        _privKey1.PublicKey,
                        _privKey2.PublicKey,
                        _privKey3.PublicKey,
                    },
                    new IReadOnlyList<byte>[]
                    {
                        message1Bytes,
                        message2Bytes,
                        message3Bytes,
                    }));
        }

        [Fact]
        public void MultiVerifyWithInfinite()
        {
            var message = "test";
            var message1Bytes = Encoding.UTF8.GetBytes(message + "1");
            var message2Bytes = Encoding.UTF8.GetBytes(message + "2");
            var message3Bytes = Encoding.UTF8.GetBytes(message + "3");

            var sign1 = new BlsSignature(_privKey1.Sign(message1Bytes));
            var sign2 = new BlsSignature(_privKey2.Sign(message2Bytes));
            var sign3 = new BlsSignature(InfiniteSignature);

            Assert.False(
                BlsSignature.MultiVerify(
                    new BlsSignature[]
                    {
                        sign1,
                        sign2,
                        sign3,
                    },
                    new BlsPublicKey[]
                    {
                        _privKey1.PublicKey,
                        _privKey2.PublicKey,
                        new BlsPublicKey(BlsPublicKeyTest.InfinitePublicKey),
                    },
                    new IReadOnlyList<byte>[]
                    {
                        message1Bytes,
                        message2Bytes,
                        message3Bytes,
                    }));
        }

        [Fact]
        public void AggregateVerifyWithDifferentMessages()
        {
            var message = "test";

            var sign1Message = Encoding.UTF8.GetBytes(message + "1");
            var sign2Message = Encoding.UTF8.GetBytes(message + "2");
            var sign3Message = Encoding.UTF8.GetBytes(message + "3");

            var sign1 = new BlsSignature(_privKey1.Sign(sign1Message));
            var sign2 = new BlsSignature(_privKey2.Sign(sign2Message));
            var sign3 = new BlsSignature(_privKey3.Sign(sign3Message));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.True(aggSign.AggregateVerify(
                new[]
                {
                    _privKey1.PublicKey, _privKey2.PublicKey, _privKey3.PublicKey,
                },
                new IReadOnlyList<byte>[]
                {
                    sign1Message,
                    sign2Message,
                    sign3Message,
                }));
        }

        [Fact]
        public void AggregateVerifyWithSameMessage()
        {
            // Unique messages should be given for AggregateVerify.
            var message = "test";

            var sign1 = new BlsSignature(_privKey1.Sign(Encoding.UTF8.GetBytes(message)));
            var sign2 = new BlsSignature(_privKey2.Sign(Encoding.UTF8.GetBytes(message)));
            var sign3 = new BlsSignature(_privKey3.Sign(Encoding.UTF8.GetBytes(message)));

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.False(aggSign.AggregateVerify(
                new[]
                {
                    _privKey1.PublicKey, _privKey2.PublicKey, _privKey3.PublicKey,
                },
                new IReadOnlyList<byte>[]
                {
                    Encoding.UTF8.GetBytes(message),
                    Encoding.UTF8.GetBytes(message),
                    Encoding.UTF8.GetBytes(message),
                }));
        }

        [Fact]
        public void AggregateVerifyWithInfinite()
        {
            var message = "test";

            var sign1Message = Encoding.UTF8.GetBytes(message + "1");
            var sign2Message = Encoding.UTF8.GetBytes(message + "2");
            var sign3Message = Encoding.UTF8.GetBytes(message + "3");

            var sign1 = new BlsSignature(_privKey1.Sign(sign1Message));
            var sign2 = new BlsSignature(_privKey2.Sign(sign2Message));
            var sign3 = new BlsSignature(InfiniteSignature);

            var aggSign = new[] { sign1, sign2, sign3, }.AggregateAll();

            Assert.False(aggSign.AggregateVerify(
                new[]
                {
                    _privKey1.PublicKey,
                    _privKey2.PublicKey,
                    new BlsPublicKey(BlsPublicKeyTest.InfinitePublicKey),
                },
                new IReadOnlyList<byte>[]
                {
                    sign1Message,
                    sign2Message,
                    sign3Message,
                }));
        }
    }
}
