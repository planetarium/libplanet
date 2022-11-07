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
        public static readonly PrivateKey Peer0Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef"));

        public static readonly PrivateKey Peer1Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93"));

        public static readonly PrivateKey Peer2Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550"));

        public static readonly PrivateKey Peer3Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a"));

        public static readonly BoundPeer Peer0 = new BoundPeer(
            Peer0Priv.PublicKey, new DnsEndPoint("1.0.0.0", 1000));

        public static readonly BoundPeer Peer1 = new BoundPeer(
            Peer1Priv.PublicKey, new DnsEndPoint("1.0.0.1", 1001));

        public static readonly BoundPeer Peer2 = new BoundPeer(
            Peer2Priv.PublicKey, new DnsEndPoint("1.0.0.2", 1002));

        public static readonly BoundPeer Peer3 = new BoundPeer(
            Peer3Priv.PublicKey, new DnsEndPoint("1.0.0.3", 1003));

        public static readonly BlockHash BlockHash0 =
            BlockHash.FromString(
                "042b81bef7d4bca6e01f5975ce9ac7ed9f75248903d08836bed6566488c8089d");

        public static readonly List<PrivateKey> PrivateKeys = new List<PrivateKey>()
        {
            Peer0Priv,
            Peer1Priv,
            Peer2Priv,
            Peer3Priv,
        };

        public static readonly List<BoundPeer> Peers = new List<BoundPeer>()
        {
            Peer0,
            Peer1,
            Peer2,
            Peer3,
        };

        public static readonly ValidatorSet ValidatorSet = new ValidatorSet(
            new List<PublicKey>()
            {
                Peer0.PublicKey,
                Peer1.PublicKey,
                Peer2.PublicKey,
                Peer3.PublicKey,
            });

        public static readonly IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxTransactionsBytes: _ => 50 * 1024,
            getValidatorSet: _ => ValidatorSet);

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
            var store = new MemoryStore();
            var blockChain = new BlockChain<DumbAction>(
                TestUtils.Policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                new TrieStateStore(new MemoryKeyValueStore()),
                fx.GenesisBlock);

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

        public static BlockCommit CreateLastCommit(BlockHash blockHash, long height, int round)
        {
            var votes = PrivateKeys.Select(key => new VoteMetadata(
                height,
                round,
                blockHash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();

            return new BlockCommit(
                height, round, blockHash, votes);
        }

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
                            VoteFlag.PreCommit).Sign(privateKey))
                    {
                        Remote = peer,
                    });
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
                            VoteFlag.PreCommit).Sign(privateKey))
                    {
                        Remote = peer,
                    });
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
                            VoteFlag.PreVote).Sign(privateKey))
                    {
                        Remote = peer,
                    });
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
            StoreFixture Fx,
            BlockChain<DumbAction> BlockChain,
            ConsensusContext<DumbAction> ConsensusContext)
            CreateDummyConsensusContext(
                TimeSpan newHeightDelay,
                IBlockPolicy<DumbAction>? policy = null,
                PrivateKey? privateKey = null,
                ValidatorSet? validators = null,
                ConsensusContext<DumbAction>.DelegateBroadcastMessage? broadcastMessage = null,
                long lastCommitClearThreshold = 30,
                ContextTimeoutOption? contextTimeoutOptions = null)
        {
            policy ??= Policy;
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var blockChain = CreateDummyBlockChain(fx);
            ConsensusContext<DumbAction>? consensusContext = null;

            privateKey ??= Peer1Priv;
            validators ??= ValidatorSet;

            void BroadcastMessage(ConsensusMsg message) =>
                Task.Run(() =>
                {
                    // ReSharper disable once AccessToModifiedClosure
                    message.Remote = new BoundPeer(
                        privateKey.PublicKey,
                        new DnsEndPoint("1.2.3.4", 1234));
                    // ReSharper disable once AccessToModifiedClosure
                    consensusContext!.HandleMessage(message);
                });

            broadcastMessage ??= BroadcastMessage;

            consensusContext = new ConsensusContext<DumbAction>(
                broadcastMessage,
                blockChain,
                privateKey,
                newHeightDelay,
                _ => validators,
                lastCommitClearThreshold,
                contextTimeoutOptions ?? new ContextTimeoutOption());

            return (fx, blockChain, consensusContext);
        }

        public static (
            StoreFixture Fx,
            BlockChain<DumbAction> BlockChain,
            Context<DumbAction> Context)
            CreateDummyContext(
                long height = 1,
                IBlockPolicy<DumbAction>? policy = null,
                PrivateKey? privateKey = null,
                ValidatorSet? validators = null,
                ContextTimeoutOption? contextTimeoutOptions = null)
        {
            Context<DumbAction>? context = null;
            privateKey ??= Peer1Priv;
            policy ??= Policy;
            validators ??= ValidatorSet;

            void BroadcastMessage(ConsensusMsg message) =>
                Task.Run(() =>
                {
                    message.Remote = new BoundPeer(
                        privateKey!.PublicKey,
                        new DnsEndPoint("1.2.3.4", 1234));
                    context!.ProduceMessage(message);
                });

            var (fx, blockChain, consensusContext) = CreateDummyConsensusContext(
                TimeSpan.FromSeconds(1),
                policy,
                Peer1Priv,
                validators,
                broadcastMessage: BroadcastMessage);

            context = new Context<DumbAction>(
                consensusContext,
                blockChain,
                height,
                privateKey,
                validators,
                contextTimeoutOptions: contextTimeoutOptions ?? new ContextTimeoutOption());

            return (fx, blockChain, context);
        }

        public static ConsensusReactor<DumbAction> CreateDummyConsensusReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            string host = "localhost",
            int consensusPort = 5101,
            List<BoundPeer>? validatorPeers = null,
            int newHeightDelayMilliseconds = 10_000,
            ContextTimeoutOption? contextTimeoutOptions = null)
        {
            key ??= Peer1Priv;
            validatorPeers ??= Peers;

            var consensusTransport = NetMQTransport.Create(
                key,
                AppProtocolVersion,
                null,
                8,
                host,
                consensusPort,
                Array.Empty<IceServer>(),
                null).ConfigureAwait(false).GetAwaiter().GetResult();

            return new ConsensusReactor<DumbAction>(
                consensusTransport,
                blockChain,
                key,
                validatorPeers.ToImmutableList(),
                new List<BoundPeer>().ToImmutableList(),
                TimeSpan.FromMilliseconds(newHeightDelayMilliseconds),
                30,
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
