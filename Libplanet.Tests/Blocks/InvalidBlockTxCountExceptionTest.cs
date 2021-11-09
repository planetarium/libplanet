using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockTxCountExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            var e = new InvalidBlockTxCountException("A message.", 10);
            var f = new BinaryFormatter();
            InvalidBlockTxCountException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockTxCountException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.TxCount, e2.TxCount);
        }
    }
}
