using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class UnexpectedlyTerminatedActionExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var innerExc = new Exception("inner");
            var exc = new UnexpectedlyTerminatedActionException(
                default, default, null, null, "for testing", innerExc
            );

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (UnexpectedlyTerminatedActionException)formatter.Deserialize(ms);
                Assert.Equal("for testing", deserialized.Message);
                Assert.IsType<Exception>(deserialized.InnerException);
                Assert.Equal(innerExc.Message, deserialized.InnerException.Message);
            }
        }
    }
}
