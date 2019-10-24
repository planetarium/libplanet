using System.Collections.Immutable;
using Libplanet.KeyStore;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.KeyStore
{
    public class IncorrectPassphraseExceptionTest
    {
        [Fact]
        public void Constructor()
        {
            ImmutableArray<byte>
                expectedMac = new byte[] { 0x00, 0x01, 0x02, 0x03 }.ToImmutableArray(),
                inputMac = new byte[] { 0x04, 0x05, 0x06, 0x07 }.ToImmutableArray();
            var e = new IncorrectPassphraseException(
                "Some message.",
                "paramName",
                expectedMac,
                inputMac
            );
            Assert.StartsWith(
                "Some message.\nExpected MAC: 00010203\nInput MAC: 04050607",
                e.Message
            );
            Assert.Equal("paramName", e.ParamName);
            AssertBytesEqual(expectedMac, e.ExpectedMac);
            AssertBytesEqual(inputMac, e.InputMac);
        }
    }
}
