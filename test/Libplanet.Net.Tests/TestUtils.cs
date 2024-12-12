using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Random = System.Random;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static readonly BlockHash BlockHash0 =
            BlockHash.FromString(
                "042b81bef7d4bca6e01f5975ce9ac7ed9f75248903d08836bed6566488c8089d");

        public static readonly ImmutableList<PrivateKey> PrivateKeys =
            Libplanet.Tests.TestUtils.ValidatorPrivateKeys;

        public static readonly List<BoundPeer> Peers = new List<BoundPeer>()
        {
            new BoundPeer(PrivateKeys[0].PublicKey, new DnsEndPoint("1.0.0.0", 1000)),
            new BoundPeer(PrivateKeys[1].PublicKey, new DnsEndPoint("1.0.0.1", 1001)),
            new BoundPeer(PrivateKeys[2].PublicKey, new DnsEndPoint("1.0.0.2", 1002)),
            new BoundPeer(PrivateKeys[3].PublicKey, new DnsEndPoint("1.0.0.3", 1003)),
        };

        public static readonly ValidatorSet ValidatorSet = Libplanet.Tests.TestUtils.ValidatorSet;

        public static readonly IBlockPolicy Policy = new BlockPolicy(
            new PolicyActionsRegistry(
                endBlockActions: ImmutableArray.Create<IAction>(new MinerReward(1))),
            getMaxTransactionsBytes: _ => 50 * 1024);

        public static readonly IActionLoader ActionLoader = new SingleActionLoader(
            typeof(DumbAction));

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        private static readonly Random Random = new Random();

        public static Vote CreateVote(
            PrivateKey privateKey,
            BigInteger power,
            long height,
            int round,
            BlockHash hash,
            VoteFlag flag) =>
            new VoteMetadata(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                privateKey.PublicKey,
                power,
                flag).Sign(privateKey);

        public static PrivateKey GeneratePrivateKeyOfBucketIndex(Address tableAddress, int target)
        {
            var table = new RoutingTable(tableAddress);
            PrivateKey privateKey;
            do
            {
                privateKey = new PrivateKey();
            }
            while (table.GetBucketIndexOf(privateKey.Address) != target);

            return privateKey;
        }

        public static BlockChain CreateDummyBlockChain(
            IBlockPolicy? policy = null,
            IActionLoader? actionLoader = null,
            Block? genesisBlock = null)
        {
            policy ??= Policy;
            actionLoader ??= ActionLoader;
            var fx = new MemoryStoreFixture(policy.PolicyActionsRegistry);
            var blockChain = Libplanet.Tests.TestUtils.MakeBlockChain(
                policy,
                fx.Store,
                new TrieStateStore(new MemoryKeyValueStore()),
                actionLoader,
                genesisBlock: genesisBlock);

            return blockChain;
        }

        public static ConsensusProposalMsg CreateConsensusPropose(
            Block block,
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

        public static BlockCommit CreateBlockCommit(Block block) =>
            Libplanet.Tests.TestUtils.CreateBlockCommit(block);

        public static BlockCommit CreateBlockCommit(BlockHash blockHash, long height, int round) =>
            Libplanet.Tests.TestUtils.CreateBlockCommit(blockHash, height, round);

        public static void HandleFourPeersPreCommitMessages(
            ConsensusContext consensusContext,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BigInteger power)
                     in PrivateKeys.Zip(
                         ValidatorSet.Validators.Select(v => v.Power),
                         (first, second) => (first, second)))
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
                            power,
                            VoteFlag.PreCommit).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreCommitMessages(
            Context context,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BigInteger power)
                     in PrivateKeys.Zip(
                         ValidatorSet.Validators.Select(v => v.Power),
                         (first, second) => (first, second)))
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
                            power,
                            VoteFlag.PreCommit).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreVoteMessages(
            Context context,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BigInteger power)
                     in PrivateKeys.Zip(
                         ValidatorSet.Validators.Select(v => v.Power),
                         (first, second) => (first, second)))
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
                            power,
                            VoteFlag.PreVote).Sign(privateKey)));
            }
        }

        public static void HandleFourPeersPreVoteMessages(
            ConsensusContext consensusContext,
            PrivateKey nodePrivateKey,
            BlockHash roundBlockHash)
        {
            foreach ((PrivateKey privateKey, BigInteger power)
                     in PrivateKeys.Zip(
                         ValidatorSet.Validators.Select(v => v.Power),
                         (first, second) => (first, second)))
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
                            power,
                            VoteFlag.PreVote).Sign(privateKey)));
            }
        }

        public static (BlockChain BlockChain, ConsensusContext ConsensusContext)
            CreateDummyConsensusContext(
                TimeSpan newHeightDelay,
                IBlockPolicy? policy = null,
                IActionLoader? actionLoader = null,
                PrivateKey? privateKey = null,
                ContextOption? contextOption = null)
        {
            policy ??= Policy;
            var blockChain = CreateDummyBlockChain(policy, actionLoader);
            ConsensusContext? consensusContext = null;

            privateKey ??= PrivateKeys[1];

            void BroadcastMessage(ConsensusMsg message) =>
                Task.Run(() =>
                {
                    // ReSharper disable once AccessToModifiedClosure
                    consensusContext!.HandleMessage(message);
                });

            consensusContext = new ConsensusContext(
                new DummyConsensusMessageHandler(BroadcastMessage),
                blockChain,
                privateKey,
                newHeightDelay,
                contextOption ?? new ContextOption());

            return (blockChain, consensusContext);
        }

        public static Context CreateDummyContext(
            BlockChain blockChain,
            long height = 1,
            BlockCommit? lastCommit = null,
            PrivateKey? privateKey = null,
            ContextOption? contextOption = null,
            ValidatorSet? validatorSet = null)
        {
            Context? context = null;
            privateKey ??= PrivateKeys[0];
            context = new Context(
                blockChain,
                height,
                lastCommit,
                privateKey,
                validatorSet ?? blockChain
                    .GetNextWorldState(height - 1)
                    .GetValidatorSet(),
                contextOption: contextOption ?? new ContextOption());
            context.MessageToPublish += (sender, message) => context.ProduceMessage(message);
            return context;
        }

        public static (BlockChain BlockChain, Context Context)
            CreateDummyContext(
                long height = 1,
                BlockCommit? lastCommit = null,
                IBlockPolicy? policy = null,
                IActionLoader? actionLoader = null,
                PrivateKey? privateKey = null,
                ContextOption? contextOption = null,
                ValidatorSet? validatorSet = null)
        {
            Context? context = null;
            privateKey ??= PrivateKeys[1];
            policy ??= Policy;

            var blockChain = CreateDummyBlockChain(policy, actionLoader);
            context = new Context(
                blockChain,
                height,
                lastCommit,
                privateKey,
                validatorSet ?? blockChain
                    .GetNextWorldState(height - 1)
                    .GetValidatorSet(),
                contextOption: contextOption ?? new ContextOption());
            context.MessageToPublish += (sender, message) => context.ProduceMessage(message);

            return (blockChain, context);
        }

        public static ConsensusReactor CreateDummyConsensusReactor(
            BlockChain blockChain,
            PrivateKey? key = null,
            string host = "127.0.0.1",
            int consensusPort = 5101,
            List<BoundPeer>? validatorPeers = null,
            int newHeightDelayMilliseconds = 10_000,
            ContextOption? contextOption = null)
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

            return new ConsensusReactor(
                consensusTransport,
                blockChain,
                key,
                validatorPeers.ToImmutableList(),
                new List<BoundPeer>().ToImmutableList(),
                TimeSpan.FromMilliseconds(newHeightDelayMilliseconds),
                contextOption: contextOption ?? new ContextOption());
        }

        public static byte[] GetRandomBytes(int size)
        {
            var bytes = new byte[size];
            Random.NextBytes(bytes);

            return bytes;
        }

        public class DummyConsensusMessageHandler : IConsensusMessageCommunicator
        {
            private Action<ConsensusMsg> _publishMessage;

            public DummyConsensusMessageHandler(Action<ConsensusMsg> publishMessage)
            {
                _publishMessage = publishMessage;
            }

            public void PublishMessage(ConsensusMsg message)
                => _publishMessage(message);

            public void OnStartHeight(long height)
            {
            }

            public void OnStartRound(int round)
            {
            }
        }
    }
}
