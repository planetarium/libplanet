using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class BlockExceedingTransactionsExceptionTest
    {
        public void Serialization()
        {
            var e = new BlockExceedingTransactionsException(100, 50, "A message.");
            var f = new BinaryFormatter();
            InvalidBlockBytesLengthException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockBytesLengthException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.ActualTransactions, e2.BlockBytesLength);
            Assert.Equal(e.MaxTransactionsPerBlock, e2.MaxBlockBytesLength);
        }
    }
}
