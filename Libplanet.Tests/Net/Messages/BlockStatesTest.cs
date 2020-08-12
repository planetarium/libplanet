using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class BlockStatesTest
    {
        [Fact]
        public void Null()
        {
            HashDigest<SHA256> blockHash = new Random().NextHashDigest<SHA256>();
            var blockStates = new BlockStates(blockHash, null);
            var signer = new PrivateKey();
            NetMQMessage msg = blockStates.ToNetMQMessage(
                    signer,
                    new Peer(signer.PublicKey, default),
                    new AppProtocolVersion(
                        1,
                        new Bencodex.Types.Integer(0),
                        ImmutableArray<byte>.Empty,
                        default(Address)));
            Assert.Equal(Message.CommonFrames + 2, msg.FrameCount);
            TestUtils.AssertBytesEqual(
                blockHash,
                new HashDigest<SHA256>(msg[Message.CommonFrames].Buffer));
            Assert.Equal(-1, msg[Message.CommonFrames + 1].ConvertToInt32());

            var parsed = new BlockStates(msg.Skip(Message.CommonFrames).ToArray());
            TestUtils.AssertBytesEqual(blockHash, parsed.BlockHash);
            Assert.Null(parsed.States);
        }

        [Fact]
        public void NonEmpty()
        {
            HashDigest<SHA256> blockHash = new Random().NextHashDigest<SHA256>();
            // Note that here Unicode strings are used on purpose:
            IImmutableDictionary<string, IValue> states = ImmutableDictionary<string, IValue>.Empty
                .Add("foo甲", null)
                .Add("bar乙", default(Null))
                .Add("baz丙", new Text("a value 값"));
            var blockStates = new BlockStates(blockHash, states);
            var signer = new PrivateKey();
            NetMQMessage msg = blockStates.ToNetMQMessage(
                signer,
                new Peer(signer.PublicKey, default),
                new AppProtocolVersion(
                    1,
                    new Bencodex.Types.Integer(0),
                    ImmutableArray<byte>.Empty,
                    default(Address)));
            Assert.Equal(Message.CommonFrames + 2 + 3 * 3, msg.FrameCount);
            TestUtils.AssertBytesEqual(
                blockHash,
                new HashDigest<SHA256>(msg[Message.CommonFrames].Buffer));
            Assert.Equal(
                states.Count,
                msg[Message.CommonFrames + 1].ConvertToInt32());

            var parsed = new BlockStates(msg.Skip(Message.CommonFrames).ToArray());
            TestUtils.AssertBytesEqual(blockHash, parsed.BlockHash);
            Assert.Equal(states, parsed.States);
        }
    }
}
