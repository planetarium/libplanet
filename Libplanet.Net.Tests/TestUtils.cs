using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static readonly Peer Peer0 = new Peer(
            new PublicKey(
                ByteUtil.ParseHex(
                    "0204b09e833560269d0dc1100c221442b9969e74a3949ca306aecda20a6a2afba4")));

        public static readonly BlockHash BlockHash0 =
            BlockHash.FromString(
                "042b81bef7d4bca6e01f5975ce9ac7ed9f75248903d08836bed6566488c8089d");

        public static readonly List<PublicKey> Validators = new List<PublicKey>
        {
            Peer0.PublicKey,
        };

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        public static IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxBlockBytes: _ => 50 * 1024);

        public static ConsensusContext<DumbAction> CreateConsensusContext(
            BlockChain<DumbAction> blockChain,
            long id = 0) =>
            CreateConsensusContext(Validators, blockChain, id);

        public static ConsensusContext<DumbAction> CreateConsensusContext(
            List<PublicKey> validator,
            BlockChain<DumbAction> blockChain,
            long id = 0) =>
            new ConsensusContext<DumbAction>(
                id,
                validator,
                blockChain);

        public static RoundContext<DumbAction> CreateRoundContext(
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext<DumbAction>(id, Validators, height, round);

        public static RoundContext<DumbAction> CreateRoundContext(
            List<PublicKey> validators,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext<DumbAction>(id, validators, height, round);

        public static Vote CreateVote(
            PublicKey publicKey,
            VoteFlag flag = VoteFlag.Null,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new Vote(
                height,
                round,
                BlockHash0,
                DateTimeOffset.Now,
                publicKey,
                flag,
                id,
                ImmutableArray<byte>.Empty);

        public static Vote CreateVote(
            BlockHash hash,
            VoteFlag flag = VoteFlag.Null,
            long id = 0,
            long height = 0,
            long round = 0,
            PublicKey? publicKey = null) =>
            new Vote(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                publicKey ?? Peer0.PublicKey,
                flag,
                id,
                ImmutableArray<byte>.Empty);

        public static Vote CreateVote(
            VoteFlag flag = VoteFlag.Null,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new Vote(
                height,
                round,
                BlockHash0,
                DateTimeOffset.Now,
                new PrivateKey().PublicKey,
                flag,
                id,
                ImmutableArray<byte>.Empty);

        public static PrivateKey GeneratePrivateKeyOfBucketIndex(Address tableAddress, int target)
        {
            var table = new RoutingTable(tableAddress);
            PrivateKey privateKey;
            do
            {
                privateKey = new PrivateKey();
            }
            while (table.GetBucketIndexOf(privateKey.ToAddress()) != target);

            return privateKey;
        }
    }
}
