using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class BlockHashesTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentNullException>(() =>
                new BlockHashes(null, new[] { default(BlockHash) })
            );
            Assert.Throws<ArgumentException>(() =>
                new BlockHashes(123, new BlockHash[0])
            );
        }

        [Fact]
        public void Decode()
        {
            BlockHash[] blockHashes = GenerateRandomBlockHashes(100L).ToArray();
            var msg = new BlockHashes(123, blockHashes);
            Assert.Equal(123, msg.StartIndex);
            Assert.Equal(blockHashes, msg.Hashes);
            var privKey = new PrivateKey();
            AppProtocolVersion ver = AppProtocolVersion.Sign(privKey, 3);
            Peer peer = new BoundPeer(privKey.PublicKey, new DnsEndPoint("0.0.0.0", 1234));
            var messageCodec = new NetMQMessageCodec();
            NetMQMessage encoded = messageCodec.Encode(
                msg,
                privKey,
                peer,
                DateTimeOffset.UtcNow,
                ver);
            BlockHashes restored = (BlockHashes)messageCodec.Decode(
                encoded,
                true,
                (b, p, a) => { },
                null);
            Assert.Equal(msg.StartIndex, restored.StartIndex);
            Assert.Equal(msg.Hashes, restored.Hashes);
        }

        private static IEnumerable<BlockHash> GenerateRandomBlockHashes(long count)
        {
            var random = new Random();
            var buffer = new byte[32];
            for (long i = 0; i < count; i++)
            {
                random.NextBytes(buffer);
                yield return new BlockHash(buffer);
            }
        }
    }
}
