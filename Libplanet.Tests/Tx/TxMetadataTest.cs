using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TxMetadataTest
    {
        private readonly PrivateKey _key1;
        private readonly PrivateKey _key2;

        public TxMetadataTest()
        {
            _key1 = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });

            _key2 = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
        }

        public static IEnumerable<object[]> ToBencodexTheoryData() =>
            new object[][]
            {
                new object[] { new DateTimeOffset(2022, 5, 23, 10, 2, 0, default) },
                new object[] { new DateTimeOffset(2022, 5, 23, 19, 2, 0, TimeSpan.FromHours(9)) },
            };

        [Fact]
        public void Constructor()
        {
            DateTimeOffset before = DateTimeOffset.UtcNow;
            var meta = new TxMetadata(_key1.PublicKey);
            DateTimeOffset after = DateTimeOffset.UtcNow;
            Assert.Equal(0L, meta.Nonce);
            AssertBytesEqual(_key1.ToAddress(), meta.Signer);
            Assert.Empty(meta.UpdatedAddresses);
            Assert.InRange(meta.Timestamp, before, after);
            Assert.Equal(_key1.PublicKey, meta.PublicKey);
            Assert.Null(meta.GenesisHash);
        }

        [Fact]
        public void CopyConstructor()
        {
            var meta1 = new MetadataTransaction
            {
                PublicKey = _key1.PublicKey,
                Nonce = 123L,
                Timestamp = new DateTimeOffset(2022, 5, 23, 10, 2, 0, default),
            };
            var copy1 = new TxMetadata(meta1);
            Assert.Equal(meta1.Nonce, copy1.Nonce);
            AssertBytesEqual(meta1.Signer, copy1.Signer);
            Assert.Equal(meta1.UpdatedAddresses, copy1.UpdatedAddresses);
            Assert.Equal(meta1.Timestamp, copy1.Timestamp);
            Assert.Equal(meta1.PublicKey, copy1.PublicKey);
            AssertBytesEqual(meta1.GenesisHash, copy1.GenesisHash);

            var meta2 = new MetadataTransaction
            {
                PublicKey = _key2.PublicKey,
                Nonce = 0L,
                UpdatedAddresses = new[]
                {
                    _key1.ToAddress(),
                    _key2.ToAddress(),
                }.ToImmutableHashSet(),
                Timestamp = new DateTimeOffset(2022, 1, 12, 4, 56, 7, 890, default),
                GenesisHash = BlockHash.FromString(
                    "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"),
            };
            var copy2 = new TxMetadata(meta2);
            Assert.Equal(meta2.Nonce, copy2.Nonce);
            AssertBytesEqual(meta2.Signer, copy2.Signer);
            Assert.Equal(meta2.UpdatedAddresses, copy2.UpdatedAddresses);
            Assert.Equal(meta2.Timestamp, copy2.Timestamp);
            Assert.Equal(meta2.PublicKey, copy2.PublicKey);
            AssertBytesEqual(meta2.GenesisHash, copy2.GenesisHash);
        }

        [Fact]
        public void Deserialize()
        {
            Bencodex.Types.Dictionary dict1 = Dictionary.Empty
                .Add(new byte[] { 0x6e }, 123L)
                .Add(new byte[] { 0x73 }, _key1.ToAddress().ByteArray)
                .Add(new byte[] { 0x75 }, new List())
                .Add(new byte[] { 0x74 }, "2022-05-23T10:02:00.000000Z")
                .Add(new byte[] { 0x70 }, _key1.PublicKey.ToImmutableArray(compress: false));
            var meta1 = new TxMetadata(dict1);
            Assert.Equal(123L, meta1.Nonce);
            AssertBytesEqual(_key1.ToAddress(), meta1.Signer);
            Assert.Empty(meta1.UpdatedAddresses);
            Assert.Equal(
                new DateTimeOffset(2022, 5, 23, 10, 2, 0, default),
                meta1.Timestamp);
            Assert.Equal(_key1.PublicKey, meta1.PublicKey);
            Assert.Null(meta1.GenesisHash);

            Bencodex.Types.Dictionary dict2 = Dictionary.Empty
                .Add(new byte[] { 0x6e }, 0L)
                .Add(new byte[] { 0x73 }, _key2.ToAddress().ByteArray)
                .Add(
                    new byte[] { 0x75 },
                    Bencodex.Types.List.Empty
                        .Add(_key1.ToAddress().ToByteArray())
                        .Add(_key2.ToAddress().ToByteArray()))
                .Add(new byte[] { 0x74 }, "2022-01-12T04:56:07.890000Z")
                .Add(new byte[] { 0x70 }, _key2.PublicKey.ToImmutableArray(compress: false))
                .Add(
                    new byte[] { 0x67 },
                    ByteUtil.ParseHex(
                        "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"));
            var meta2 = new TxMetadata(dict2);
            Assert.Equal(0L, meta2.Nonce);
            AssertBytesEqual(_key2.ToAddress(), meta2.Signer);
            Assert.Equal(
                new[] { _key1.ToAddress(), _key2.ToAddress() }.ToImmutableHashSet(),
                meta2.UpdatedAddresses);
            Assert.Equal(
                new DateTimeOffset(2022, 1, 12, 4, 56, 7, 890, default),
                meta2.Timestamp);
            Assert.Equal(_key2.PublicKey, meta2.PublicKey);
            AssertBytesEqual(
                BlockHash.FromString(
                    "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"),
                meta2.GenesisHash
            );
        }

        [Theory]
        [MemberData(nameof(ToBencodexTheoryData))]
        public void ToBencodex(DateTimeOffset timestamp)
        {
            var meta1 = new TxMetadata(_key1.PublicKey)
            {
                Nonce = 123L,
                Timestamp = timestamp,
            };
            Bencodex.Types.Dictionary expected1 = Dictionary.Empty
                .Add(new byte[] { 0x6e }, 123L)
                .Add(new byte[] { 0x73 }, _key1.ToAddress().ByteArray)
                .Add(new byte[] { 0x75 }, new List())
                .Add(new byte[] { 0x74 }, "2022-05-23T10:02:00.000000Z")
                .Add(new byte[] { 0x70 }, _key1.PublicKey.ToImmutableArray(compress: false));
            AssertBencodexEqual(
                expected1,
                meta1.ToBencodex());

            var meta2 = new TxMetadata(_key2.PublicKey)
            {
                Nonce = 0L,
                UpdatedAddresses = new[]
                {
                    _key1.ToAddress(),
                    _key2.ToAddress(),
                }.ToImmutableHashSet(),
                Timestamp = new DateTimeOffset(2022, 1, 12, 4, 56, 7, 890, default),
                GenesisHash = BlockHash.FromString(
                    "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"),
            };
            Bencodex.Types.Dictionary expected2 = Dictionary.Empty
                .Add(new byte[] { 0x6e }, 0L)
                .Add(new byte[] { 0x73 }, _key2.ToAddress().ByteArray)
                .Add(
                    new byte[] { 0x75 },
                    Bencodex.Types.List.Empty
                        .Add(_key1.ToAddress().ToByteArray())
                        .Add(_key2.ToAddress().ToByteArray()))
                .Add(new byte[] { 0x74 }, "2022-01-12T04:56:07.890000Z")
                .Add(new byte[] { 0x70 }, _key2.PublicKey.ToImmutableArray(compress: false))
                .Add(
                    new byte[] { 0x67 },
                    ByteUtil.ParseHex(
                        "83915317ebdbf870c567b263dd2e61ec9dca7fb381c592d80993291b6ffe5ad5"));
            AssertBencodexEqual(
                expected2,
                meta2.ToBencodex());
        }

        private class MetadataTransaction : ITransaction
        {
            public TxId Id { get; set; } = default(TxId);

            public long Nonce { get; set; } = 0L;

            public Address Signer => PublicKey.ToAddress();

            public IImmutableSet<Address> UpdatedAddresses { get; set; } =
                ImmutableHashSet<Address>.Empty;

            public DateTimeOffset Timestamp { get; set; }

            public PublicKey PublicKey { get; set; }

            public BlockHash? GenesisHash { get; set; }

            public byte[] Signature => Array.Empty<byte>();

            public TxActionList Actions => TxActionList.Empty;

            public FungibleAssetValue? MaxGasPrice => null;

            public long? GasLimit => null;

            bool IEquatable<ITxInvoice>.Equals(ITxInvoice other) => false;

            bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata other) => false;

            bool IEquatable<IUnsignedTx>.Equals(IUnsignedTx other) => false;
        }
    }
}
