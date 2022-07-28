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

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static readonly PrivateKey Peer0Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550"));

        public static readonly PrivateKey Peer1Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef"));

        public static readonly PrivateKey Peer2Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93"));

        public static readonly PrivateKey Peer3Priv =
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a"));

        public static readonly Peer Peer0 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550")).PublicKey);

        public static readonly Peer Peer1 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef")).PublicKey);

        public static readonly Peer Peer2 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93")).PublicKey);

        public static readonly Peer Peer3 = new Peer(
            new PrivateKey(
                ByteUtil.ParseHex(
                    "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a")).PublicKey);

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

        public static readonly List<PublicKey> Validators = new List<PublicKey>()
        {
            Peer0.PublicKey,
            Peer1.PublicKey,
            Peer2.PublicKey,
            Peer3.PublicKey,
        };

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        public static IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxBlockBytes: _ => 50 * 1024);

        public delegate void DelegateWatchConsensusMessage(ConsensusMessage message);

        public static Vote CreateVote(
            PublicKey publicKey,
            VoteFlag flag = VoteFlag.Null,
            long height = 0,
            int round = 0) =>
            new Vote(
                height,
                round,
                BlockHash0,
                DateTimeOffset.Now,
                publicKey,
                flag,
                ImmutableArray<byte>.Empty);

        public static Vote CreateVote(
            PrivateKey privateKey,
            long height = 0,
            int round = 0,
            BlockHash? hash = null,
            VoteFlag flag = VoteFlag.Null) =>
            new Vote(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                privateKey.PublicKey,
                flag,
                ImmutableArray<byte>.Empty).Sign(privateKey);

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

        public static ITransport CreateNetMQTransport(
            PrivateKey? privateKey = null,
            string host = "localhost",
            int port = 5000) => new NetMQTransport(
                privateKey ?? new PrivateKey(),
                TestUtils.AppProtocolVersion,
                null,
                8,
                host,
                port,
                Array.Empty<IceServer>(),
                null);

        public static ConsensusPropose CreateConsensusPropose(
            Block<DumbAction>? block,
            PrivateKey privateKey,
            long height = 1,
            int round = 0,
            int validRound = -1)
        {
            var codec = new Codec();
            return new ConsensusPropose(
                privateKey.PublicKey,
                height,
                round,
                block?.Hash ?? default,
                block is null ? Array.Empty<byte>() : codec.Encode(block.MarshalBlock()),
                validRound)
            {
                Remote = new Peer(privateKey.PublicKey),
            };
        }

        public static ConsensusContext<DumbAction>
            CreateStandaloneConsensusContext(
            BlockChain<DumbAction> blockChain,
            ITransport transport,
            TimeSpan newHeightDelay,
            long height = 0,
            string host = "localhost",
            int port = 18192,
            PrivateKey? privateKey = null,
            List<PublicKey>? validators = null,
            DelegateWatchConsensusMessage? watchConsensusMessage = null)
        {
            privateKey ??= new PrivateKey();
            var validatorPeers = new List<BoundPeer>()
            {
                new BoundPeer(privateKey.PublicKey, new DnsEndPoint(host, port)),
            };
            validators ??= new List<PublicKey>()
            {
                privateKey.PublicKey,
            };

            var exceptList = validators.Except(new[] { privateKey.PublicKey }).ToList();

            foreach (var publicKey in exceptList)
            {
                port += 1;
                validatorPeers.Add(
                    new BoundPeer(
                        publicKey, new DnsEndPoint("localhost", port)));
            }

            void BroadcastMessage(ConsensusMessage message) =>
                transport.BroadcastMessage(validatorPeers, message);

            var consensusContext = new ConsensusContext<DumbAction>(
                BroadcastMessage,
                blockChain,
                height,
                privateKey,
                validators,
                newHeightDelay: newHeightDelay);

            async Task DummyHandle(Message message)
            {
                switch (message)
                {
                    case ConsensusMessage consensusMessage:
                        await transport!.ReplyMessageAsync(message, default);
                        consensusContext!.HandleMessage(consensusMessage);
                        watchConsensusMessage?.Invoke(consensusMessage);
                        break;
                }
            }

            transport.ProcessMessageHandler.Register(DummyHandle);

            return consensusContext;
        }
    }
}
