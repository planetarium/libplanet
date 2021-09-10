using System;
using System.Collections.Immutable;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Tests.Fixtures
{
    public class BlockContentFixture
    {
        public readonly BlockHash GenesisHash;
        public readonly BlockContent<Arithmetic> Genesis;
        public readonly BlockContent<Arithmetic> Block1;
        public readonly Transaction<Arithmetic> Tx0InBlock1;
        public readonly Transaction<Arithmetic> Tx1InBlock1;
        public readonly BlockContent<Arithmetic> BlockPv0;

        public BlockContentFixture()
        {
            TimeSpan kst = TimeSpan.FromHours(9);
            var genesisKey = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });
            Genesis = new BlockContent<Arithmetic>
            {
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                Miner = genesisKey.ToAddress(),
                Difficulty = 0,
                PreviousHash = null,
                Transactions = Array.Empty<Transaction<Arithmetic>>(),
            };
            GenesisHash = BlockHash.FromString(
                "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
            );
            var block1Key = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
            var block1Tx0Key = PrivateKey.FromString(
                "2d5c20079bc4b2e6eab9ecbb405da8ba6590c436edfb07b7d4466563d7dac096"
            );
            Tx0InBlock1 = new Transaction<Arithmetic>(
                nonce: 0L,
                signer: block1Tx0Key.ToAddress(),
                publicKey: block1Tx0Key.PublicKey,
                genesisHash: GenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(block1Tx0Key.ToAddress()),
                timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                actions: new[]
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
                nonce: 1L,
                signer: block1Tx1Key.ToAddress(),
                publicKey: block1Tx1Key.PublicKey,
                genesisHash: GenesisHash,
                updatedAddresses: ImmutableHashSet<Address>.Empty.Add(block1Tx1Key.ToAddress()),
                timestamp: new DateTimeOffset(2021, 9, 6, 17, 0, 1, 1, kst),
                actions: new[] { Arithmetic.Add(30) },
                signature: ByteUtil.ParseHex(
                    "3045022100abe3caabf2a46a297f2e4496f2c46d7e2f723e75fc42025d19f3ed7fce382" +
                    "d4e02200ffd36f7bef759b6c7ab43bc0f8959a0c463f88fd0f1faeaa209a8661506c4f0"
                )
            );
            Tx1InBlock1.Validate(block1Tx1Key);
            Block1 = new BlockContent<Arithmetic>
            {
                Index = 1,
                Timestamp = new DateTimeOffset(2021, 9, 6, 17, 1, 9, 45, kst),
                Miner = block1Key.ToAddress(),
                Difficulty = 12345,
                PreviousHash = GenesisHash,
                Transactions = new[]
                {
                    Tx0InBlock1,
                    Tx1InBlock1,
                },
            };
            BlockPv0 = new BlockContent<Arithmetic>
            {
                ProtocolVersion = 0,
                Index = 0,
                Timestamp = new DateTimeOffset(2021, 9, 6, 13, 46, 39, 123, kst),
                Miner = genesisKey.ToAddress(),
                Difficulty = 0,
                PreviousHash = null,
                Transactions = Array.Empty<Transaction<Arithmetic>>(),
            };
        }
    }
}
