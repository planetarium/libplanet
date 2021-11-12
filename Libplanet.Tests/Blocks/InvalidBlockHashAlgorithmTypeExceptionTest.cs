using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class InvalidBlockHashAlgorithmTypeExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            var e = new InvalidBlockHashAlgorithmTypeException("A message.", hashAlgorithm);
            var f = new BinaryFormatter();
            InvalidBlockHashAlgorithmTypeException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidBlockHashAlgorithmTypeException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.HashAlgorithmName, e2.HashAlgorithmName);
        }
    }
}
