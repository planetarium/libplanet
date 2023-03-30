using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Random = System.Random;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static readonly BlockHash BlockHash0 =
            BlockHash.FromString(
                "042b81bef7d4bca6e01f5975ce9ac7ed9f75248903d08836bed6566488c8089d");

        public static readonly List<PrivateKey> PrivateKeys =
            Libplanet.Tests.TestUtils.ValidatorPrivateKeys;

        public static readonly List<BoundPeer> Peers = new List<BoundPeer>()
        {
            new BoundPeer(PrivateKeys[0].PublicKey, new DnsEndPoint("1.0.0.0", 1000)),
            new BoundPeer(PrivateKeys[0].PublicKey, new DnsEndPoint("1.0.0.1", 1001)),
            new BoundPeer(PrivateKeys[0].PublicKey, new DnsEndPoint("1.0.0.2", 1002)),
            new BoundPeer(PrivateKeys[0].PublicKey, new DnsEndPoint("1.0.0.3", 1003)),
        };

        public static readonly ValidatorSet ValidatorSet = Libplanet.Tests.TestUtils.ValidatorSet;

        public static readonly IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxTransactionsBytes: _ => 50 * 1024);

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        private static readonly Random Random = new Random();

        public static Vote CreateVote(
            PrivateKey privateKey,
            long height = 0,
            int round = 0,
            BlockHash? hash = null,
            VoteFlag flag = VoteFlag.Null) =>
            new VoteMetadata(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                privateKey.PublicKey,
                flag).Sign(privateKey);

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

        public static BlockChain<DumbAction> CreateDummyBlockChain(MemoryStoreFixture fx)
        {
            var blockChain = Libplanet.Tests.TestUtils.MakeBlockChain(
                Policy,
                fx.Store,
                new TrieStateStore(new MemoryKeyValueStore()));

            return blockChain;
        }

        public static ConsensusProposalMsg CreateConsensusPropose(
            Block<DumbAction> block,
            PrivateKey privateKey,
            long height = 1,
            int round = 0,
            int validRound = -1)
        {
            var codec = new Codec();
            return new ConsensusProposalMsg(
                new ProposalMetadata(
                    height,
                    round,
                    DateTimeOffset.UtcNow,
                    privateKey.PublicKey,
                    codec.Encode(block.MarshalBlock()),
                    validRound).Sign(privateKey));
        }

        public static BlockCommit CreateBlockCommit<T>(Block<T> block)
            where T : IAction, new() => Libplanet.Tests.TestUtils.CreateBlockCommit(block);

        public static BlockCommit CreateBlockCommit(BlockHash blockHash, long height, int round) =>
            Libplanet.Tests.TestUtils.CreateBlockCommit(blockHash, height, round);

        public static void HandleFourPeersPreCommitMessages(
            ConsensusContext<DumbAction> consensusContext,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in PrivateKeys.Zip(Peers, (first, second) => (first, second)))
            {
                if (privateKey == nodePrivateKey)
                {
                    continue;
                }

                consensusContext.HandleMessage(
                    new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            consensusContext.Height,
                            (int)consensusContext.Round,
                            roundBlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreCommit).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreCommitMessages(
            Context<DumbAction> context,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in PrivateKeys.Zip(Peers, (first, second) => (first, second)))
            {
                if (privateKey == nodePrivateKey)
                {
                    continue;
                }

                context.ProduceMessage(
                    new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            context.Height,
                            context.Round,
                            roundBlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreCommit).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreVoteMessages(
            Context<DumbAction> context,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BoundPeer peer)
                     in PrivateKeys.Zip(Peers, (first, second) => (first, second)))
            {
                if (privateKey == nodePrivateKey)
                {
                    continue;
                }

                context.ProduceMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            context.Height,
                            context.Round,
                            roundBlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreVote).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreVoteMessages(
            ConsensusContext<DumbAction> consensusContext,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach (PrivateKey privateKey in PrivateKeys)
            {
                if (privateKey == nodePrivateKey)
                {
                    continue;
                }

                consensusContext.HandleMessage(
                    new ConsensusPreVoteMsg(
                        new VoteMetadata(
                            consensusContext.Height,
                            (int)consensusContext.Round,
                            roundBlockHash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreVote).Sign(privateKey)));
            }
        }

        public static (
            BlockChain<DumbAction> BlockChain,
            ConsensusContext<DumbAction> ConsensusContext)
            CreateDummyConsensusContext(
                TimeSpan contextMinInterval,
                IBlockPolicy<DumbAction>? policy = null,
                PrivateKey? privateKey = null,
                ConsensusContext<DumbAction>.DelegateBroadcastMessage? broadcastMessage = null,
                long blockCommitClearThreshold = 30,
                ContextTimeoutOption? contextTimeoutOptions = null)
        {
            policy ??= Policy;
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockChain = CreateDummyBlockChain(fx);
            ConsensusContext<DumbAction>? consensusContext = null;

            privateKey ??= PrivateKeys[1];

            void BroadcastMessage(ConsensusMsg message) =>
                Task.Run(() =>
                {
                    // ReSharper disable once AccessToModifiedClosure
                    consensusContext!.HandleMessage(message);
                });

            broadcastMessage ??= BroadcastMessage;

            consensusContext = new ConsensusContext<DumbAction>(
                broadcastMessage,
                blockChain,
                privateKey,
                contextMinInterval,
                contextTimeoutOptions ?? new ContextTimeoutOption());

            return (blockChain, consensusContext);
        }

        public static (
            BlockChain<DumbAction> BlockChain,
            Context<DumbAction> Context)
            CreateDummyContext(
                long height = 1,
                IBlockPolicy<DumbAction>? policy = null,
                PrivateKey? privateKey = null,
                ContextTimeoutOption? contextTimeoutOptions = null,
                ValidatorSet? validatorSet = null)
        {
            Context<DumbAction>? context = null;
            privateKey ??= PrivateKeys[1];
            policy ??= Policy;

            void BroadcastMessage(ConsensusMsg message) =>
                Task.Run(() =>
                {
                    context!.ProduceMessage(message);
                });

            var (blockChain, consensusContext) = CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                policy,
                PrivateKeys[1],
                broadcastMessage: BroadcastMessage);

            context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                height,
                privateKey,
                validatorSet ?? blockChain.GetValidatorSet(blockChain[height - 1].Hash),
                contextTimeoutOptions: contextTimeoutOptions ?? new ContextTimeoutOption());

            return (blockChain, context);
        }

        public static ConsensusReactor<DumbAction> CreateDummyConsensusReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            string host = "127.0.0.1",
            int consensusPort = 5101,
            List<BoundPeer>? validatorPeers = null,
            int contextMinIntervalMilliseconds = 10_000,
            ContextTimeoutOption? contextTimeoutOptions = null)
        {
            key ??= PrivateKeys[1];
            validatorPeers ??= Peers;

            var apvOption = new AppProtocolVersionOptions
                { AppProtocolVersion = AppProtocolVersion };
            var hostOption = new HostOptions(host, Array.Empty<IceServer>(), consensusPort);
            var consensusTransport = NetMQTransport.Create(
                key,
                apvOption,
                hostOption).ConfigureAwait(false).GetAwaiter().GetResult();

            return new ConsensusReactor<DumbAction>(
                consensusTransport,
                blockChain,
                key,
                validatorPeers.ToImmutableList(),
                new List<BoundPeer>().ToImmutableList(),
                TimeSpan.FromMilliseconds(contextMinIntervalMilliseconds),
                contextTimeoutOption: contextTimeoutOptions ?? new ContextTimeoutOption());
        }

        public static byte[] GetRandomBytes(int size)
        {
            var bytes = new byte[size];
            Random.NextBytes(bytes);

            return bytes;
        }
    }
}
