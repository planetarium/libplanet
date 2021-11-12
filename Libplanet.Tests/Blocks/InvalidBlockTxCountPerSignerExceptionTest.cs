using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Libplanet.Tests.Tx;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockTxCountPerSignerExceptionTest
    {
        private TxFixture _txFx;

        public InvalidBlockTxCountPerSignerExceptionTest()
        {
            _txFx = new TxFixture(null);
        }

        [Fact]
        public void Serialization()
        {
            Address signer = _txFx.Address1;
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
