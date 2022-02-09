#nullable disable
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Net.Tests.Transports
{
    public class TransportExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var e = new TransportException("A message.");
            var f = new BinaryFormatter();
            TransportException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (TransportException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
        }
    }
}
