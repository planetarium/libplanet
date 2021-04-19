using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockPreEvaluationHashExceptionTest
    {
        [Fact]
        public void Serialize()
        {
            var actual = new BlockHash(TestUtils.GetRandomBytes(32));
            var expected = new BlockHash(TestUtils.GetRandomBytes(32));
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
