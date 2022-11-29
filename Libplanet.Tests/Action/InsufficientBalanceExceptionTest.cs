using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Action;
using Libplanet.Assets;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class InsufficientBalanceExceptionTest
    {
        [Fact]
        public void Serializable()
        {
            var minter = new Address(new byte[]
            {
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
            });
            var account = new Address(new byte[]
            {
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
            });

            var currency = Currency.Uncapped("PLT", 0, minter);
            var exc = new InsufficientBalanceException(
                "for testing",
                account,
                FungibleAssetValue.FromRawValue(currency, 99)
            );

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (InsufficientBalanceException)formatter.Deserialize(ms);
                Assert.Equal("for testing", deserialized.Message);
                Assert.Equal(account, deserialized.Address);
                Assert.Equal(FungibleAssetValue.FromRawValue(currency, 99), deserialized.Balance);
            }
        }
    }
}
