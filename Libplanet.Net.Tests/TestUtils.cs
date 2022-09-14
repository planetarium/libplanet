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
            PrivateKey.FromString(
                "b17c919b07320edfb3e6da2f1cfed75910322de2e49377d6d4d226505afca550");

        public static readonly BlsPrivateKey Peer0ConsensusPriv =
            BlsPrivateKey.FromString(
                "0737a644f11acfda44aba8169125f731827c6fd8306f58ca791e397aea60576d");

        public static readonly PrivateKey Peer1Priv =
            PrivateKey.FromString(
                "e5792a1518d9c7f7ecc35cd352899211a05164c9dde059c9811e0654860549ef");

        public static readonly BlsPrivateKey Peer1ConsensusPriv =
            BlsPrivateKey.FromString(
                "22201e0a87100ad90618463780bbf5c78ac5981e5b300a70e44071ebf15b5e2d");

        public static readonly PrivateKey Peer2Priv =
            PrivateKey.FromString(
                "91d61834be824c952754510fcf545180eca38e036d3d9b66564f0667b30d5b93");

        public static readonly BlsPrivateKey Peer2ConsensusPriv =
            BlsPrivateKey.FromString(
                "3c23ed27989c855dd4d5581a3fdf7a413cdac429b0b0f31edbe0586b62fb4316");

        public static readonly PrivateKey Peer3Priv =
            PrivateKey.FromString(
                "91602d7091c5c7837ac8e71a8d6b1ed1355cfe311914d9a76107899add0ad56a");

        public static readonly BlsPrivateKey Peer3ConsensusPriv =
            BlsPrivateKey.FromString(
                "4b8134267722faee98c34c8a440279a30a4e3dbdd8013c6251afa1d2066c9d4c");

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

        public static readonly List<BoundPeer> Peers = new List<BoundPeer>()
        {
            Peer0,
            Peer1,
            Peer2,
            Peer3,
        };

        public static readonly List<PrivateKey> PrivateKeys = new List<PrivateKey>()
        {
            Peer0Priv,
            Peer1Priv,
            Peer2Priv,
            Peer3Priv,
        };

        public static readonly List<BlsPrivateKey> ConsensusPrivateKeys = new List<BlsPrivateKey>()
        {
            Peer0ConsensusPriv,
            Peer1ConsensusPriv,
            Peer2ConsensusPriv,
            Peer3ConsensusPriv,
        };

        public static readonly List<BlsPublicKey> Validators = new List<BlsPublicKey>()
        {
            Peer0ConsensusPriv.PublicKey,
            Peer1ConsensusPriv.PublicKey,
            Peer2ConsensusPriv.PublicKey,
            Peer3ConsensusPriv.PublicKey,
        };

        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        public static IBlockPolicy<DumbAction> Policy = new BlockPolicy<DumbAction>(
            blockAction: new MinerReward(1),
            getMaxTransactionsBytes: _ => 50 * 1024);

        public delegate void DelegateWatchConsensusMessage(ConsensusMessage message);

        public static Vote CreateVote(
            BlsPublicKey publicKey,
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
            BlsPrivateKey privateKey,
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
            BlsPrivateKey privateKey,
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
                Remote = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 1234)),
            };
        }

        public static ConsensusContext<DumbAction> CreateStandaloneConsensusContext(
            BlockChain<DumbAction> blockChain,
            ITransport transport,
            TimeSpan newHeightDelay,
            long height = 0,
            string host = "localhost",
            int port = 18192,
            PrivateKey? privateKey = null,
            BlsPrivateKey? consensusPrivateKey = null,
            List<BlsPublicKey>? validators = null,
            DelegateWatchConsensusMessage? watchConsensusMessage = null)
        {
            consensusPrivateKey ??= new BlsPrivateKey();
            privateKey ??= new PrivateKey();
            var validatorPeers = new List<BoundPeer>()
            {
                new BoundPeer(consensusPrivateKey.PublicKey, new DnsEndPoint(host, port)),
            };
            validators ??= new List<BlsPublicKey>()
            {
                consensusPrivateKey.PublicKey,
            };

            var exceptList = validators.Except(new[] { consensusPrivateKey.PublicKey }).ToList();

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
                consensusPrivateKey,
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
