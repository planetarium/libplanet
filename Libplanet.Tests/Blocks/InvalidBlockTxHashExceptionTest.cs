using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockTxHashExceptionTest
    {
        [Fact]
        public void Serialize()
        {
            var blockHash = new HashDigest<SHA256>(
                TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)
            );
            var calculatedBlockHash = new HashDigest<SHA256>(
                TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)
            );
            var exc = new InvalidBlockTxHashException("TESTING", blockHash, calculatedBlockHash);

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);
                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (InvalidBlockTxHashException)formatter.Deserialize(ms);

                Assert.Equal(deserialized, exc);
            }
        }
    }
}
