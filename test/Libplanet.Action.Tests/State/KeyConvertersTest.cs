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
            var address = new PrivateKey().Address;
            var currency = Currency.Uncapped("Foo", 2, new PrivateKey().Address);

            Assert.Equal(
                new KeyBytes(ByteUtil.Hex(address.ByteArray)),
                KeyConverters.ToStateKey(address));

            Assert.Equal(
                new KeyBytes(
                    $"_{ByteUtil.Hex(address.ByteArray)}_{ByteUtil.Hex(currency.Hash.ByteArray)}"),
                KeyConverters.ToFungibleAssetKey(address, currency));

            Assert.Equal(
                new KeyBytes($"__{ByteUtil.Hex(currency.Hash.ByteArray)}"),
                KeyConverters.ToTotalSupplyKey(currency));

            Assert.Equal(
                new KeyBytes("___"),
                KeyConverters.ValidatorSetKey);
        }
    }
}
