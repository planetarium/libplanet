using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class BreadcrumbTrailTest
    {
        [Fact]
        public void Serialize()
        {
            Address addr1 = new PrivateKey().PublicKey.ToAddress();
            Address addr2 = new PrivateKey().PublicKey.ToAddress();
            var time1 = DateTimeOffset.UtcNow;
            var time2 = DateTimeOffset.UtcNow + TimeSpan.FromSeconds(5);
            var trail = new BreadcrumbTrail(true);
            trail.Add(BreadcrumbTrail.TrailType.Sent, addr1, time1);
            trail.Add(BreadcrumbTrail.TrailType.Received, addr2, time2);

            var formatter = new BinaryFormatter();
            byte[] encoded;
            using (MemoryStream stream = new MemoryStream())
            {
                formatter.Serialize(stream, trail);
                encoded = stream.ToArray();
            }

            BreadcrumbTrail decoded;
            using (MemoryStream stream = new MemoryStream(encoded))
            {
                decoded = (BreadcrumbTrail)formatter.Deserialize(stream);
            }

            Assert.Equal(trail, decoded);
        }
    }
}
