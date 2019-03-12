using System.IO;
using System.Net;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class PeerTest
    {
        [Fact]
        public void Serialize()
        {
            var key = new PublicKey(
                ByteUtil.ParseHex(
                    "038f92e8098c897c2a9ae3226eb6337eb" +
                    "7ca8dbad5e1c8c9b130a9d39171a44134"
                    ));
            var endPoint = new IPEndPoint(IPAddress.Parse("0.0.0.0"), 1234);
            var peer = new Peer(key, endPoint);
            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, peer);
                byte[] serialized = stream.ToArray();
                stream.Seek(0, SeekOrigin.Begin);
                Peer deserialized = (Peer)formatter.Deserialize(stream);
                Assert.Equal(peer, deserialized);
            }
        }
    }
}
