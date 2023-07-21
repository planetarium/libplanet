using System.Text;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Xunit;

namespace Libplanet.Action.State.Tests
{
    public class KeyConvertersTest
    {
        public KeyConvertersTest()
        {
        }

        [Fact]
        public void ToKeysSpec()
        {
            var address = new PrivateKey().ToAddress();
            var currency = Currency.Uncapped("Foo", 2, new PrivateKey().ToAddress());

            Assert.Equal(
                new KeyBytes(ByteUtil.Hex(address.ByteArray), Encoding.UTF8),
                KeyConverters.ToStateKey(address));

            Assert.Equal(
                new KeyBytes(
                    $"_{ByteUtil.Hex(address.ByteArray)}_{ByteUtil.Hex(currency.Hash.ByteArray)}",
                    Encoding.UTF8),
                KeyConverters.ToFungibleAssetKey(address, currency));

            Assert.Equal(
                new KeyBytes($"__{ByteUtil.Hex(currency.Hash.ByteArray)}", Encoding.UTF8),
                KeyConverters.ToTotalSupplyKey(currency));

            Assert.Equal(
                new KeyBytes("___", Encoding.UTF8),
                KeyConverters.ValidatorSetKey);
        }
    }
}
