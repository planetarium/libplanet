using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Net.Transports.Tests
{
    public class InvalidCredentialExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            var random = new Random();
            var privateKey = new PrivateKey();
            var badPrivateKey = new PrivateKey();

            var e1 = new InvalidCredentialException(
                "An error message",
                expected: privateKey.PublicKey,
                actual: badPrivateKey.PublicKey);
            var f = new BinaryFormatter();
            InvalidCredentialException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e1);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidCredentialException)f.Deserialize(s);
            }

            Assert.Equal(e1.Message, e2.Message);
            Assert.Equal(e1.Expected, e2.Expected);
            Assert.Equal(e1.Actual, e2.Actual);
        }
    }
}
