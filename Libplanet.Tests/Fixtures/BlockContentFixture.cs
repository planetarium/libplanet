using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Tests.Fixtures
{
    public class BlockContentFixture
    {
        public readonly PrivateKey GenesisKey;
        public readonly BlockHash GenesisHash;
        public readonly BlockMetadata GenesisMetadata;
        public readonly BlockContent<Arithmetic> Genesis;

        public readonly PrivateKey Block1Key;
        public readonly BlockMetadata BlockMetadata1;
        public readonly BlockContent<Arithmetic> Block1;
        public readonly Transaction<Arithmetic> Tx0InBlock1;
        public readonly Transaction<Arithmetic> Tx1InBlock1;

        public readonly BlockMetadata BlockMetadataPv0;
        public readonly BlockContent<Arithmetic> BlockPv0;
        public readonly BlockMetadata BlockMetadataPv1;
        public readonly BlockContent<Arithmetic> BlockPv1;

        public BlockContentFixture()
        {
            TimeSpan kst = TimeSpan.FromHours(9);
            GenesisKey = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });
            GenesisMetadata = new BlockMetadata
            {
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                PublicKey = GenesisKey.PublicKey,
                Difficulty = 0,
                PreviousHash = null,
                TxHash = null,
            };
            Genesis = new BlockContent<Arithmetic>(GenesisMetadata);
            GenesisHash = BlockHash.FromString(
                "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
            );
            Block1Key = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
            BlockMetadata1 = new BlockMetadata
            {
                Index = 1,
                Timestamp = new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                PublicKey = Block1Key.PublicKey,
                Difficulty = 123,
                PreviousHash = GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
            };
            var block1Tx0Key = PrivateKey.FromString(
                "2d5c20079bc4b2e6eab9ecbb405da8ba6590c436edfb07b7d4466563d7dac096"
            );
            Tx0InBlock1 = new Transaction<Arithmetic>(
                metadata: new TxMetadata(block1Tx0Key.PublicKey)
                {
                    Nonce = 0L,
                    GenesisHash = GenesisHash,
                    UpdatedAddresses = ImmutableHashSet.Create(block1Tx0Key.ToAddress()),
                    Timestamp = new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                },
                customActions: new[]
                {
                    Arithmetic.Add(10), Arithmetic.Add(50), Arithmetic.Sub(25),
                },
                signature: ByteUtil.ParseHex(
                    "30440220422c85ea44845a56253654d95595ad06d6f09f862ca71b97e986ecbb453eac" +
                    "ae0220606e76276e40fa8f0795b880f712531fd6bd9db253bd8ab9c86aa4ab7d791d37"
                )
            );
            Tx0InBlock1.Validate(block1Tx0Key);
            var block1Tx1Key = PrivateKey.FromString(
                "105341c78dfb0dd313b961081630444c2586a1f01fb0c625368ffdc9136cfa30"
            );
            Tx1InBlock1 = new Transaction<Arithmetic>(
                metadata: new TxMetadata(block1Tx1Key.PublicKey)
                {
                    Nonce = 1L,
                    GenesisHash = GenesisHash,
                    UpdatedAddresses = ImmutableHashSet.Create(block1Tx1Key.ToAddress()),
                    Timestamp = new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                },
                customActions: new[] { Arithmetic.Add(30) },
                signature: ByteUtil.ParseHex(
                    "3045022100abe3caabf2a46a297f2e4496f2c46d7e2f723e75fc42025d19f3ed7fce382" +
                    "d4e02200ffd36f7bef759b6c7ab43bc0f8959a0c463f88fd0f1faeaa209a8661506c4f0"
                )
            );
            Tx1InBlock1.Validate(block1Tx1Key);
            Block1 = new BlockContent<Arithmetic>(
                BlockMetadata1,
                new[]
                {
                    Tx0InBlock1,
                    Tx1InBlock1,
                }
            );
            BlockMetadataPv0 = new BlockMetadata
            {
                ProtocolVersion = 0,
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                Miner = GenesisKey.ToAddress(),
                Difficulty = 0,
                PreviousHash = null,
                TxHash = null,
            };
            BlockPv0 = new BlockContent<Arithmetic>(BlockMetadataPv0);
            BlockPv1 = new BlockContent<Arithmetic>(Block1)
            {
                ProtocolVersion = 1,
                PublicKey = null,
            };
            BlockMetadataPv1 = new BlockMetadata(BlockPv1);
        }
    }
}
