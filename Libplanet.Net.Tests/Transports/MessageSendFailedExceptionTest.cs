#nullable disable
using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Tests.Net.Transports
{
    public class MessageSendFailedExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            Message ping = new Ping();
            BoundPeer peer = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));

            var e = new MessageSendFailedException("An error message", ping.Type, peer);
            var f = new BinaryFormatter();
            MessageSendFailedException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (MessageSendFailedException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.MessageType, e2.MessageType);
            Assert.Equal(e.Peer, e2.Peer);
        }
    }
}
