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
        [InlineData(MessageContent.MessageType.Ping)]
        [InlineData(MessageContent.MessageType.Pong)]
        [InlineData(MessageContent.MessageType.GetBlockHashes)]
        [InlineData(MessageContent.MessageType.TxIds)]
        [InlineData(MessageContent.MessageType.GetBlocks)]
        [InlineData(MessageContent.MessageType.GetTxs)]
        [InlineData(MessageContent.MessageType.Blocks)]
        [InlineData(MessageContent.MessageType.Tx)]
        [InlineData(MessageContent.MessageType.FindNeighbors)]
        [InlineData(MessageContent.MessageType.Neighbors)]
        [InlineData(MessageContent.MessageType.BlockHeaderMessage)]
        [InlineData(MessageContent.MessageType.BlockHashes)]
        [InlineData(MessageContent.MessageType.GetChainStatus)]
        [InlineData(MessageContent.MessageType.ChainStatus)]
        [InlineData(MessageContent.MessageType.DifferentVersion)]
        public void CheckMessages(MessageContent.MessageType type)
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
            Assert.IsType(message.GetType(), parsed.Content);
            Assert.Equal(message.DataFrames, parsed.Content.DataFrames);
        }

        private MessageContent CreateMessage(MessageContent.MessageType type)
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
                case MessageContent.MessageType.Ping:
                    return new PingMsg();
                case MessageContent.MessageType.Pong:
                    return new PongMsg();
                case MessageContent.MessageType.GetBlockHashes:
                    return new GetBlockHashesMsg(chain.GetBlockLocator(), genesis.Hash);
                case MessageContent.MessageType.TxIds:
                    return new TxIdsMsg(new[] { transaction.Id });
                case MessageContent.MessageType.GetBlocks:
                    return new GetBlocksMsg(new[] { genesis.Hash }, 10);
                case MessageContent.MessageType.GetTxs:
                    return new GetTxsMsg(new[] { transaction.Id });
                case MessageContent.MessageType.Blocks:
                    return new Libplanet.Net.Messages.BlocksMsg(
                        new[] { codec.Encode(genesis.MarshalBlock()) });
                case MessageContent.MessageType.Tx:
                    return new Libplanet.Net.Messages.TxMsg(transaction.Serialize(true));
                case MessageContent.MessageType.FindNeighbors:
                    return new FindNeighborsMsg(privateKey.ToAddress());
                case MessageContent.MessageType.Neighbors:
                    return new NeighborsMsg(new[] { boundPeer });
                case MessageContent.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMsg(genesis.Hash, genesis.Header);
                case MessageContent.MessageType.BlockHashes:
                    return new BlockHashesMsg(0, new[] { genesis.Hash });
                case MessageContent.MessageType.GetChainStatus:
                    return new GetChainStatusMsg();
                case MessageContent.MessageType.ChainStatus:
                    return new ChainStatusMsg(
                        0,
                        genesis.Hash,
                        chain.Tip.Index,
                        chain.Tip.Hash,
                        chain.Tip.TotalDifficulty);
                case MessageContent.MessageType.DifferentVersion:
                    return new DifferentVersionMsg();
                default:
                    throw new Exception($"Cannot create a message of invalid type {type}");
            }
        }
    }
}
