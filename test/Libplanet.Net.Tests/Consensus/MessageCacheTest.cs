using System;
using System.Collections.Generic;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class MessageCacheTest
    {
        [Fact]
        public void Put()
        {
            var cache = new MessageCache();
            var msg = new PingMsg();
            cache.Put(msg);
            Assert.Throws<ArgumentException>("message", () => cache.Put(msg));
        }

        [Fact]
        public void Get()
        {
            var cache = new MessageCache();
            var messageId = TestUtils.GetRandomBytes(MessageId.Size);
            // Had to use HaveMessage for testing the persistent dataFrame.
            var msg = new HaveMessage(new[] { messageId });
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg.Id));
            cache.Put(msg);
            var ret = cache.Get(msg.Id);
            Assert.NotEqual(ret, msg);

            // Message data is persistent
            Assert.Equal(msg.Type, ret.Type);
            Assert.Equal(msg.Ids, ((HaveMessage)ret).Ids);
        }
    }
}
