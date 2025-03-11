using System;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
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
            Block genesis = ProposeGenesisBlock(GenesisProposer);
            var messageContent = new BlockHeaderMsg(genesis.Hash, genesis.Header);
            var codec = new NetMQMessageCodec();
            NetMQMessage raw = codec.Encode(
                new Message(messageContent, apv, peer, dateTimeOffset, null), privateKey);
            var parsed = codec.Decode(raw, true);
            Assert.Equal(peer, parsed.Remote);
        }

        [Fact]
        public void InvalidCredential()
        {
            var ping = new PingMsg();
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
                codec.Encode(
                    new Message(ping, apv, peer, timestamp, null), badPrivateKey));
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
            var netMqMessage = codec.Encode(
                new Message(ping, apv, peer, timestamp, null), privateKey).ToArray();

            // Attacker
            var fakePeer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("1.2.3.4", 0));
            var fakeMessage = codec.Encode(
                new Message(ping, apv, fakePeer, timestamp, null), privateKey).ToArray();

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
            Block genesis = ProposeGenesisBlock(GenesisProposer);
            var message = new BlockHeaderMsg(genesis.Hash, genesis.Header);
            Assert.Equal(
                new MessageId(ByteUtil.ParseHex(
                    "e1acbdc4d0cc1eb156cec60d0bf6d40fae3a90192e95719b12e6ee944c71b742")),
                message.Id);
        }

        [Fact]
        public void InvalidVoteFlagConsensus()
        {
            var blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            var preVote = TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                TestUtils.ValidatorSet[0].Power,
                1,
                0,
                blockHash,
                VoteFlag.PreVote);

            var preCommit = TestUtils.CreateVote(
                TestUtils.PrivateKeys[0],
                TestUtils.ValidatorSet[0].Power,
                1,
                0,
                blockHash,
                VoteFlag.PreCommit);

            // Valid message cases
            _ = new ConsensusPreVoteMsg(preVote);
            _ = new ConsensusPreCommitMsg(preCommit);

            // Invalid message cases
            Assert.Throws<ArgumentException>(() => new ConsensusPreVoteMsg(preCommit));
            Assert.Throws<ArgumentException>(() => new ConsensusPreCommitMsg(preVote));
        }
    }
}
