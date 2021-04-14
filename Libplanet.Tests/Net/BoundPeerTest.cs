using System;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class BoundPeerTest
    {
        [Fact]
        public void ParsePeer()
        {
#pragma warning disable MEN002 // Line is too long
            var peerInfo = "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1,3333";
            var expected = new BoundPeer(
                new PublicKey(ByteUtil.ParseHex("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233")),
                new DnsEndPoint("192.168.0.1", 3333)
            );
#pragma warning restore MEN002 // Line is too long
            Assert.Equal(expected, BoundPeer.ParsePeer(peerInfo));
        }

        [Fact]
        public void ParsePeerException()
        {
            Assert.Throws<ArgumentNullException>(() => { BoundPeer.ParsePeer(null); });
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer(string.Empty));
#pragma warning disable MEN002 // Line is too long
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1"));
            Assert.Throws<ArgumentException>(() => BoundPeer.ParsePeer("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233,192.168.0.1,999999"));
#pragma warning restore MEN002 // Line is too long
        }
    }
}
