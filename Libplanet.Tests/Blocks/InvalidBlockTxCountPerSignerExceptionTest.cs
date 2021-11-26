using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockTxCountPerSignerExceptionTest
    {
        public InvalidBlockTxCountPerSignerExceptionTest()
        {
        }

        [Fact]
        public void Serialization()
        {
            Address signer = new PrivateKey().PublicKey.ToAddress();
            var e = new InvalidBlockTxCountPerSignerException("A message.", signer, 10);
            var f = new BinaryFormatter();
            InvalidBlockTxCountPerSignerException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockTxCountPerSignerException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.Signer, e2.Signer);
            Assert.Equal(e.TxCount, e2.TxCount);
        }
    }
}
