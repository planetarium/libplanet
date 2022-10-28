using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using NetMQ;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests.Messages
{
    public class MessageTest
    {
        [Fact]
        public void BlockHeaderMsg()
        {
            var privateKey = new PrivateKey();
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 0));
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var dateTimeOffset = DateTimeOffset.UtcNow;
            Block<DumbAction> genesis = ProposeGenesisBlock<DumbAction>(GenesisMiner);
            var message = new BlockHeaderMsg(genesis.Hash, genesis.Header);
            var codec = new NetMQMessageCodec();
            NetMQMessage raw =
                codec.Encode(message, privateKey, apv, peer, dateTimeOffset);
            var parsed = codec.Decode(raw, true);
            Assert.Equal(peer, parsed.Remote);
        }

        [Fact]
        public void InvalidCredential()
        {
            var message = new PingMsg();
            var privateKey = new PrivateKey();
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 0));
            var timestamp = DateTimeOffset.UtcNow;
            var badPrivateKey = new PrivateKey();
            var codec = new NetMQMessageCodec();
            Assert.Throws<InvalidCredentialException>(() =>
                codec.Encode(message, badPrivateKey, apv, peer, timestamp));
        }

        [Fact]
        public void UseInvalidSignature()
        {
            // Victim
            var privateKey = new PrivateKey();
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 0));
            var timestamp = DateTimeOffset.UtcNow;
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var ping = new PingMsg();
            var codec = new NetMQMessageCodec();
            var netMqMessage = codec.Encode(ping, privateKey, apv, peer, timestamp).ToArray();

            // Attacker
            var fakePeer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 0));
            var fakeMessage = codec.Encode(ping, privateKey, apv, fakePeer, timestamp).ToArray();

            var frames = new NetMQMessage();
            frames.Push(netMqMessage[4]);
            frames.Push(netMqMessage[3]);
            frames.Push(fakeMessage[2]);
            frames.Push(netMqMessage[1]);
            frames.Push(netMqMessage[0]);

            Assert.Throws<InvalidMessageSignatureException>(() =>
                codec.Decode(frames, true));
        }

        [Fact]
        public void InvalidArguments()
        {
            var codec = new NetMQMessageCodec();
            var message = new PingMsg();
            var privateKey = new PrivateKey();
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            Assert.Throws<ArgumentException>(
                () => codec.Decode(new NetMQMessage(), true));
        }

        [Fact]
        public void GetId()
        {
            var privateKey = new PrivateKey();
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 1234));
            var apv = new AppProtocolVersion(
                1,
                new Bencodex.Types.Integer(0),
                ImmutableArray<byte>.Empty,
                default(Address));
            var dateTimeOffset = DateTimeOffset.MinValue + TimeSpan.FromHours(6.1234);
            Block<DumbAction> genesis = ProposeGenesisBlock<DumbAction>(GenesisMiner);
            var message = new BlockHeaderMsg(genesis.Hash, genesis.Header)
            {
                Timestamp = dateTimeOffset,
                Remote = peer,
            };
            Assert.Equal(
                new MessageId(ByteUtil.ParseHex(
                    "dae1eaa93fd023279c4d0eb73000d66fdbf196c1239a4cee3d1d84f28d49ece6")),
                message.Id);
        }

        [Fact]
        public void InvalidVoteFlagConsensus()
        {
            var blockHash = new BlockHash(TestUtils.GetRandomBytes(32));

            var preVote = TestUtils.CreateVote(
                TestUtils.Peer0Priv,
                1,
                0,
                blockHash,
                VoteFlag.PreVote);

            var preCommit = TestUtils.CreateVote(
                TestUtils.Peer0Priv,
                1,
                0,
                blockHash,
                VoteFlag.PreCommit);

            // Valid message cases
            _ = new ConsensusPreVoteMsg(preVote);
            _ = new ConsensusPreCommitMsg(preCommit);

            // Invalid message cases
            Assert.Throws<InvalidMessageException>(() => new ConsensusPreVoteMsg(preCommit));
            Assert.Throws<InvalidMessageException>(() => new ConsensusPreCommitMsg(preVote));
        }

        [Fact]
        public void DifferentBlockHashProposal()
        {
            var codec = new Codec();
            var fx = new MemoryStoreFixture();
            var key = new PrivateKey();

            var baseProposal = new ProposalMetaData(
                1,
                0,
                codec.Encode(fx.Block1.MarshalBlock()),
                fx.Block1.Timestamp,
                key.PublicKey,
                -1).Sign(key);

            // Valid message case
            _ = new ConsensusProposeMsg(key.PublicKey, 1, 0, fx.Block1.Hash, baseProposal);

            // Invalid message case
            Assert.Throws<ArgumentException>(() =>
                new ConsensusProposeMsg(key.PublicKey, 1, 0, fx.Block2.Hash, baseProposal));
        }
    }
}
