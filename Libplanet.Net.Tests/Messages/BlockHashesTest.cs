#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Net.Tests.Messages
{
    [Collection("NetMQConfiguration")]
    public class BlockHashesTest : IDisposable
    {
        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(() =>
                new BlockHashesMsg(null, new[] { default(BlockHash) })
            );
            Assert.Throws<ArgumentException>(() =>
                new BlockHashesMsg(123, new BlockHash[0])
            );
        }

        [Fact]
        public void Decode()
        {
            BlockHash[] blockHashes = GenerateRandomBlockHashes(100L).ToArray();
            var msg = new BlockHashesMsg(123, blockHashes);
            Assert.Equal(123, msg.StartIndex);
            Assert.Equal(blockHashes, msg.Hashes);
            var privateKey = new PrivateKey();
            AppProtocolVersion apv = AppProtocolVersion.Sign(privateKey, 3);
            var peer = new BoundPeer(privateKey.PublicKey, new DnsEndPoint("0.0.0.0", 1234));
            var messageCodec = new NetMQMessageCodec();
            NetMQMessage encoded = messageCodec.Encode(
                msg,
                privateKey,
                apv,
                peer,
                DateTimeOffset.UtcNow);
            BlockHashesMsg restored = (BlockHashesMsg)messageCodec.Decode(encoded, true);
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
