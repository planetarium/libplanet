using System.Runtime.Serialization.Formatters.Binary;
using Xunit;

namespace Libplanet.Action.Tests
{
    public class BlockProtocolVersionNotSupportedExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var exc = new BlockProtocolVersionNotSupportedException("Foo", 5);

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = Assert.IsType<BlockProtocolVersionNotSupportedException>(
                    formatter.Deserialize(ms));
                Assert.Equal("Foo", deserialized.Message);
                Assert.Equal(5, deserialized.BlockProtocolVersion);
            }
        }
    }
}
