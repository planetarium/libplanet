using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockBytesLengthExceptionTest
    {
        public void Serialization()
        {
            var e = new InvalidBlockBytesLengthException(10, 5, "A message.");
            var f = new BinaryFormatter();
            InvalidBlockBytesLengthException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockBytesLengthException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.BlockBytesLength, e2.BlockBytesLength);
            Assert.Equal(e.MaxBlockBytesLength, e2.MaxBlockBytesLength);
        }
    }
}
