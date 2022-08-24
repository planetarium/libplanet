#nullable disable
using System;
using System.Collections.Immutable;
using System.Net;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using NetMQ;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Messages
{
    [Collection("NetMQConfiguration")]
    public class NetMQMessageCodecTest : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        [Theory]
        [InlineData(Message.MessageType.Ping)]
        [InlineData(Message.MessageType.Pong)]
        [InlineData(Message.MessageType.GetBlockHashes)]
        [InlineData(Message.MessageType.TxIds)]
        [InlineData(Message.MessageType.GetBlocks)]
        [InlineData(Message.MessageType.GetTxs)]
        [InlineData(Message.MessageType.Blocks)]
        [InlineData(Message.MessageType.Tx)]
        [InlineData(Message.MessageType.FindNeighbors)]
        [InlineData(Message.MessageType.Neighbors)]
        [InlineData(Message.MessageType.BlockHeaderMessage)]
        [InlineData(Message.MessageType.BlockHashes)]
        [InlineData(Message.MessageType.GetChainStatus)]
        [InlineData(Message.MessageType.ChainStatus)]
        [InlineData(Message.MessageType.DifferentVersion)]
        public void CheckMessages(Message.MessageType type)
        {
            var privateKey = new PrivateKey();
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 0));
            var dateTimeOffset = DateTimeOffset.UtcNow;
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var message = CreateMessage(type);
            var codec = new NetMQMessageCodec();
            NetMQMessage raw =
                codec.Encode(message, privateKey, apv, peer, dateTimeOffset);
            var parsed = codec.Decode(raw, true);
            Assert.Equal(apv, parsed.Version);
            Assert.Equal(peer, parsed.Remote);
            Assert.Equal(dateTimeOffset, parsed.Timestamp);
            Assert.IsType(message.GetType(), parsed);
            Assert.Equal(message.DataFrames, parsed.DataFrames);
        }

        private Message CreateMessage(Message.MessageType type)
        {
            var privateKey = new PrivateKey();
            var boundPeer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("localhost", 1000));
            IBlockPolicy<DumbAction> policy = new BlockPolicy<DumbAction>();
            BlockChain<DumbAction> chain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore())
            );
            var codec = new Codec();
            Block<DumbAction> genesis = chain.Genesis;
            var transaction = chain.MakeTransaction(privateKey, new DumbAction[] { });
            switch (type)
            {
                case Message.MessageType.Ping:
                    return new PingMsg();
                case Message.MessageType.Pong:
                    return new PongMsg();
                case Message.MessageType.GetBlockHashes:
                    return new GetBlockHashesMsg(chain.GetBlockLocator(), genesis.Hash);
                case Message.MessageType.TxIds:
                    return new TxIdsMsg(new[] { transaction.Id });
                case Message.MessageType.GetBlocks:
                    return new GetBlocksMsg(new[] { genesis.Hash }, 10);
                case Message.MessageType.GetTxs:
                    return new GetTxsMsg(new[] { transaction.Id });
                case Message.MessageType.Blocks:
                    return new Libplanet.Net.Messages.BlocksMsg(
                        new[] { codec.Encode(genesis.MarshalBlock()) });
                case Message.MessageType.Tx:
                    return new Libplanet.Net.Messages.TxMsg(transaction.Serialize(true));
                case Message.MessageType.FindNeighbors:
                    return new FindNeighborsMsg(privateKey.ToAddress());
                case Message.MessageType.Neighbors:
                    return new NeighborsMsg(new[] { boundPeer });
                case Message.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMsg(genesis.Hash, genesis.Header);
                case Message.MessageType.BlockHashes:
                    return new BlockHashesMsg(0, new[] { genesis.Hash });
                case Message.MessageType.GetChainStatus:
                    return new GetChainStatusMsg();
                case Message.MessageType.ChainStatus:
                    return new ChainStatusMsg(
                        0,
                        genesis.Hash,
                        chain.Tip.Index,
                        chain.Tip.Hash,
                        chain.Tip.TotalDifficulty);
                case Message.MessageType.DifferentVersion:
                    return new DifferentVersionMsg();
                default:
                    throw new Exception($"Cannot create a message of invalid type {type}");
            }
        }
    }
}
