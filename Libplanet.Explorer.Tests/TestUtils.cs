using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Explorer.Tests
{
    public static class TestUtils
    {
        private static readonly Random _random;

        static TestUtils()
        {
            _random = new Random();
        }

        public static readonly List<PrivateKey> ValidatorPrivateKeys = new List<PrivateKey>
        {
            PrivateKey.FromString(
                "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef"),
            PrivateKey.FromString(
                "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93"),
            PrivateKey.FromString(
                "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550"),
            PrivateKey.FromString(
                "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a"),
        };  // The ordering here should match the ordering by address.

        public static byte[] GetRandomBytes(int size)
        {
            var bytes = new byte[size];
            _random.NextBytes(bytes);
            return bytes;
        }

        public static BlockCommit CreateBlockCommit(
            BlockHash blockHash,
            long height,
            int round,
            VoteFlag voteFlag = VoteFlag.PreCommit)
        {
            // Index #1 block cannot have lastCommit: There was no consensus of genesis block.
            if (height == 0)
            {
                return null;
            }

            var votes = ValidatorPrivateKeys.Select(key => new VoteMetadata(
                height,
                round,
                blockHash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();

            return new BlockCommit(
                height, round, blockHash, votes);
        }

        public static int GetRandomNumber() => _random.Next();
    }
}
