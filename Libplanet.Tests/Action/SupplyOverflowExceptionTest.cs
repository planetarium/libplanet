using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Action;
using Libplanet.Assets;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class SupplyOverflowExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var minter = new Address(new byte[]
            {
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
            });

            var currency = Currency.Uncapped("PLT", 0, minter);
            var exc = new SupplyOverflowException(
                "for testing",
                FungibleAssetValue.FromRawValue(currency, 99)
            );

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (SupplyOverflowException)formatter.Deserialize(ms);
                Assert.Equal("for testing", deserialized.Message);
                Assert.Equal(FungibleAssetValue.FromRawValue(currency, 99), deserialized.Amount);
            }
        }
    }
}
