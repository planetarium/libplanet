using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockPreEvaluationHashExceptionTest
    {
        [Fact]
        public void Serialize()
        {
            var actual = new HashDigest<SHA256>(
                TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)
            );
            var expected = new HashDigest<SHA256>(
                TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)
            );
            var exc = new InvalidBlockPreEvaluationHashException(
                actual,
                expected,
                "TESTING"
            );

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);
                ms.Seek(0, SeekOrigin.Begin);
                var deserialized =
                    (InvalidBlockPreEvaluationHashException)formatter.Deserialize(ms);

                Assert.Equal(deserialized, exc);
            }
        }
    }
}
