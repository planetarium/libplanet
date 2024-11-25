#nullable disable
using System;
using System.Collections.Immutable;
using System.Net;
using System.Numerics;
using Bencodex;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
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
        [InlineData(MessageContent.MessageType.HaveMessage)]
        [InlineData(MessageContent.MessageType.WantMessage)]
        [InlineData(MessageContent.MessageType.ConsensusProposal)]
        [InlineData(MessageContent.MessageType.ConsensusVote)]
        [InlineData(MessageContent.MessageType.ConsensusCommit)]
        [InlineData(MessageContent.MessageType.ConsensusMaj23Msg)]
        [InlineData(MessageContent.MessageType.ConsensusVoteSetBitsMsg)]
        [InlineData(MessageContent.MessageType.ConsensusProposalClaimMsg)]
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
                codec.Encode(
                    new Message(
                        message,
                        apv,
                        peer,
                        dateTimeOffset,
                        null),
                    privateKey);
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
            var boundPeer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("127.0.0.1", 1000));
            IBlockPolicy policy = new BlockPolicy();
            BlockChain chain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction))
            );
            var codec = new Codec();
            Block genesis = chain.Genesis;
            var transaction = chain.MakeTransaction(privateKey, new DumbAction[] { });
            switch (type)
            {
                case MessageContent.MessageType.Ping:
                    return new PingMsg();
                case MessageContent.MessageType.Pong:
                    return new PongMsg();
                case MessageContent.MessageType.GetBlockHashes:
                    return new GetBlockHashesMsg(chain.GetBlockLocator());
                case MessageContent.MessageType.TxIds:
                    return new TxIdsMsg(new[] { transaction.Id });
                case MessageContent.MessageType.GetBlocks:
                    return new GetBlocksMsg(new[] { genesis.Hash }, 10);
                case MessageContent.MessageType.GetTxs:
                    return new GetTxsMsg(new[] { transaction.Id });
                case MessageContent.MessageType.Blocks:
                    return new Libplanet.Net.Messages.BlocksMsg(new[]
                    {
                        BitConverter.GetBytes(2),
                        codec.Encode(genesis.MarshalBlock()),
                        Array.Empty<byte>(),
                    });
                case MessageContent.MessageType.Tx:
                    return new Libplanet.Net.Messages.TxMsg(transaction.Serialize());
                case MessageContent.MessageType.FindNeighbors:
                    return new FindNeighborsMsg(privateKey.Address);
                case MessageContent.MessageType.Neighbors:
                    return new NeighborsMsg(new[] { boundPeer });
                case MessageContent.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMsg(genesis.Hash, genesis.Header);
                case MessageContent.MessageType.BlockHashes:
                    return new BlockHashesMsg(new[] { genesis.Hash });
                case MessageContent.MessageType.GetChainStatus:
                    return new GetChainStatusMsg();
                case MessageContent.MessageType.ChainStatus:
                    return new ChainStatusMsg(
                        0,
                        genesis.Hash,
                        chain.Tip.Index,
                        chain.Tip.Hash);
                case MessageContent.MessageType.DifferentVersion:
                    return new DifferentVersionMsg();
                case MessageContent.MessageType.HaveMessage:
                    return new HaveMessage(
                        new[] { new MessageId(TestUtils.GetRandomBytes(MessageId.Size)) });
                case MessageContent.MessageType.WantMessage:
                    return new WantMessage(
                        new[] { new MessageId(TestUtils.GetRandomBytes(MessageId.Size)) });
                case MessageContent.MessageType.ConsensusProposal:
                    return new ConsensusProposalMsg(
                        new ProposalMetadata(
                            0,
                            0,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            codec.Encode(genesis.MarshalBlock()),
                            -1).Sign(privateKey));
                case MessageContent.MessageType.ConsensusVote:
                    return new ConsensusPreVoteMsg(
                            new VoteMetadata(
                            0,
                            0,
                            genesis.Hash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            BigInteger.One,
                            VoteFlag.PreVote).Sign(privateKey));
                case MessageContent.MessageType.ConsensusCommit:
                    return new ConsensusPreCommitMsg(
                        new VoteMetadata(
                            0,
                            0,
                            genesis.Hash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            BigInteger.One,
                            VoteFlag.PreCommit).Sign(privateKey));
                case MessageContent.MessageType.ConsensusMaj23Msg:
                    return new ConsensusMaj23Msg(
                        new Maj23Metadata(
                            0,
                            0,
                            genesis.Hash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreVote).Sign(privateKey));
                case MessageContent.MessageType.ConsensusVoteSetBitsMsg:
                    return new ConsensusVoteSetBitsMsg(
                        new VoteSetBitsMetadata(
                            0,
                            0,
                            genesis.Hash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey,
                            VoteFlag.PreVote,
                            new[] { true, true, false, false }).Sign(privateKey));
                case MessageContent.MessageType.ConsensusProposalClaimMsg:
                    return new ConsensusProposalClaimMsg(
                        new ProposalClaimMetadata(
                            0,
                            0,
                            genesis.Hash,
                            DateTimeOffset.UtcNow,
                            privateKey.PublicKey).Sign(privateKey));
                default:
                    throw new Exception($"Cannot create a message of invalid type {type}");
            }
        }
    }
}
