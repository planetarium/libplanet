using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Action;
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

            var currency = new Currency("PLT", minter);
            var exc = new InsufficientBalanceException(account, currency, 99, "for testing");

            var formatter = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                formatter.Serialize(ms, exc);

                ms.Seek(0, SeekOrigin.Begin);
                var deserialized = (InsufficientBalanceException)formatter.Deserialize(ms);
                Assert.Equal("for testing", deserialized.Message);
                Assert.Equal(account, deserialized.Address);
                Assert.Equal(currency.Hash, deserialized.Currency.Hash);
                Assert.Equal(99, deserialized.Balance);
            }
        }
    }
}
