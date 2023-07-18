using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockBytesLengthExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            var e = new InvalidBlockBytesLengthException("A message.", 10);
            var f = new BinaryFormatter();
            InvalidBlockBytesLengthException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockBytesLengthException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.BytesLength, e2.BytesLength);
        }
    }
}
