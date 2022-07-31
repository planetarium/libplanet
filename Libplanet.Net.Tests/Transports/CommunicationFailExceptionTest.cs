using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Net.Tests.Transports
{
    public class CommunicationFailExceptionTest
    {
        public static IEnumerable<object?[]> InnerExceptions => new List<object?[]>()
        {
            new object?[] { null },
            new object?[] { new Exception("An inner error message.") },
        };

        [Theory]
        [MemberData(nameof(InnerExceptions))]
        public void Serialization(Exception? innerException)
        {
            Message ping = new PingMsg();
            BoundPeer peer = new BoundPeer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));

            CommunicationFailException e;
            if (innerException is { } i)
            {
                e = new CommunicationFailException("An error message", ping.Type, peer, i);
            }
            else
            {
                e = new CommunicationFailException("An error message", ping.Type, peer);
            }

            var f = new BinaryFormatter();
            CommunicationFailException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (CommunicationFailException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.MessageType, e2.MessageType);
            Assert.Equal(e.Peer, e2.Peer);
            Assert.True(
                ((e.InnerException is { } ie && e2.InnerException is { } ie2) &&
                    ie.Message.Equals(ie2.Message)) ||
                (e.InnerException is null && e2.InnerException is null));
        }
    }
}
