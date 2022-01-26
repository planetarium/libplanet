#nullable disable
using System.Collections.Generic;
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
        public static IEnumerable<object[]> GetPeers =>
            new List<object[]>
            {
                new object[] { new Peer(new PrivateKey().PublicKey) },
                new object[] { new Peer(new PrivateKey().PublicKey, IPAddress.Parse("1.2.3.4")) },
            };

        [Theory]
        [MemberData(nameof(GetPeers))]
        public void Serializable(Peer peer)
        {
            var formatter = new BinaryFormatter();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, peer);
                byte[] serialized = stream.ToArray();
                stream.Seek(0, SeekOrigin.Begin);
                Peer deserialized = (Peer)formatter.Deserialize(stream);
                Assert.IsType(peer.GetType(), deserialized);
                Assert.Equal(peer, deserialized);
            }
        }

        [Theory]
        [MemberData(nameof(GetPeers))]
        public void Serialize(Peer peer)
        {
            Bencodex.Types.Dictionary serialized = peer.ToBencodex();
            var deserialized = new Peer(serialized);

            Assert.Equal(peer, deserialized);
        }
    }
}
