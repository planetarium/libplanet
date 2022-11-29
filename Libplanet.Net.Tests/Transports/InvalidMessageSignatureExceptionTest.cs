using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Transports.Tests
{
    public class InvalidMessageSignatureExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            var random = new Random();
            var publicKey = new PrivateKey().PublicKey;
            var messageToVerify = new byte[8];
            var signature = new byte[8];
            random.NextBytes(messageToVerify);
            random.NextBytes(signature);

            var e1 = new InvalidMessageSignatureException(
                "An error message",
                new BoundPeer(publicKey, new DnsEndPoint("0.0.0.0", 0)),
                publicKey,
                messageToVerify,
                signature);
            var f = new BinaryFormatter();
            InvalidMessageSignatureException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e1);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidMessageSignatureException)f.Deserialize(s);
            }

            Assert.Equal(e1.Message, e2.Message);
            Assert.Equal(e1.Peer, e2.Peer);
            Assert.Equal(e1.PublicKey, e2.PublicKey);
            Assert.True(e1.MessageToVerify.SequenceEqual(e2.MessageToVerify));
            Assert.True(e1.Signature.SequenceEqual(e2.Signature));
        }
    }
}
