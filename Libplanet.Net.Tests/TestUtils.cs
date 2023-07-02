using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
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

        public static readonly IBlockPolicy Policy = new BlockPolicy(
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
            BlockHash hash = default,
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

        public static BlockChain CreateDummyBlockChain(
            MemoryStoreFixture fx,
            IBlockPolicy? policy = null,
            Block? genesisBlock = null)
        {
            var blockChain = Libplanet.Tests.TestUtils.MakeBlockChain<DumbAction>(
                policy ?? Policy,
                fx.Store,
                new TrieStateStore(new MemoryKeyValueStore()),
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
            Context context,
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
            Context context,
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
            ConsensusContext consensusContext,
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

        public static (BlockChain BlockChain, ConsensusContext ConsensusContext)
            CreateDummyConsensusContext(
                TimeSpan newHeightDelay,
                IBlockPolicy? policy = null,
                PrivateKey? privateKey = null,
                ContextTimeoutOption? contextTimeoutOptions = null)
        {
            policy ??= Policy;
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockChain = CreateDummyBlockChain(fx, policy);
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
                contextTimeoutOptions ?? new ContextTimeoutOption());

            return (blockChain, consensusContext);
        }

        public static (BlockChain BlockChain, Context Context)
            CreateDummyContext(
                long height = 1,
                IBlockPolicy? policy = null,
                PrivateKey? privateKey = null,
                ContextTimeoutOption? contextTimeoutOptions = null,
                ValidatorSet? validatorSet = null)
        {
            Context? context = null;
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
                PrivateKeys[1]);

            context = new Context(
                new DummyConsensusMessageHandler(BroadcastMessage),
                blockChain,
                height,
                privateKey,
                validatorSet ?? blockChain.GetValidatorSet(blockChain[height - 1].Hash),
                contextTimeoutOptions: contextTimeoutOptions ?? new ContextTimeoutOption());

            return (blockChain, context);
        }

        public static ConsensusReactor CreateDummyConsensusReactor(
            BlockChain blockChain,
            PrivateKey? key = null,
            string host = "127.0.0.1",
            int consensusPort = 5101,
            List<BoundPeer>? validatorPeers = null,
            int newHeightDelayMilliseconds = 10_000,
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

            return new ConsensusReactor(
                consensusTransport,
                blockChain,
                key,
                validatorPeers.ToImmutableList(),
                new List<BoundPeer>().ToImmutableList(),
                TimeSpan.FromMilliseconds(newHeightDelayMilliseconds),
                contextTimeoutOption: contextTimeoutOptions ?? new ContextTimeoutOption());
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

            public void AllowPublicKey(PublicKey publicKey)
            {
            }

            public void ClearCache()
            {
            }

            public void ClearDenySet()
            {
            }

            public void DenyPublicKey(PublicKey publicKey)
            {
            }

            public void PublishMessage(ConsensusMsg message)
                => _publishMessage(message);
        }
    }
}
