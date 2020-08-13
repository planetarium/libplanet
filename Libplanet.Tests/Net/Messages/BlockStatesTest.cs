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
            NetMQMessage msg =
                blockStates.ToNetMQMessage(signer, new Peer(signer.PublicKey, default));
            Assert.Equal(5, msg.FrameCount);
            TestUtils.AssertBytesEqual(blockHash, new HashDigest<SHA256>(msg[3].Buffer));
            Assert.Equal(-1, msg[4].ConvertToInt32());

            var parsed = new BlockStates(msg.Skip(3).ToArray());
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
            NetMQMessage msg =
                blockStates.ToNetMQMessage(signer, new Peer(signer.PublicKey, default));
            Assert.Equal(5 + 3 * 3, msg.FrameCount);
            TestUtils.AssertBytesEqual(blockHash, new HashDigest<SHA256>(msg[3].Buffer));
            Assert.Equal(states.Count, msg[4].ConvertToInt32());

            var parsed = new BlockStates(msg.Skip(3).ToArray());
            TestUtils.AssertBytesEqual(blockHash, parsed.BlockHash);
            Assert.Equal(states, parsed.States);
        }
    }
}
