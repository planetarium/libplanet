using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
{
    public class RegistryTest
    {
        private static readonly Currency FooCurrency = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void Deserialize()
        {
            var random = new Random();
            Address addr = random.NextAddress();
            Bencodex.Types.Dictionary dict = Dictionary.Empty
                .Add("type_id", 1)
                .Add(
                    "values",
                    Dictionary.Empty
                        .Add("recipient", addr.ByteArray)
                        .Add("currency", FooCurrency.Serialize())
                        .Add("amount", 200)
                );
            IAction action = Registry.Deserialize(dict);
            Assert.IsType<Transfer>(action);
            var transfer = (Transfer)action;
            Assert.Equal(addr, transfer.Recipient);
            Assert.Equal(FooCurrency * 2, transfer.Amount);

            ArgumentException e;
            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize((Dictionary)dict.Remove(new Text("type_id")))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("type_id", e.Message);

            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize((Dictionary)dict.Remove(new Text("values")))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("values", e.Message);

            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize(dict.SetItem("type_id", "non-integer"))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("type_id", e.Message);

            e = Assert.Throws<ArgumentOutOfRangeException>(
                () => Registry.Deserialize(dict.SetItem("type_id", short.MaxValue))
            );
            Assert.Contains(
                "unknown system type id",
                e.Message,
                StringComparison.InvariantCultureIgnoreCase);
        }

        [Fact]
        public void Serialize()
        {
            var random = new Random();
            Address addr = random.NextAddress();
            Bencodex.Types.Dictionary actual =
                Registry.Serialize(new Transfer(addr, FooCurrency * 123));
            Bencodex.Types.Dictionary expected = Dictionary.Empty
                .Add("type_id", 1)
                .Add(
                    "values",
                    Dictionary.Empty
                        .Add("recipient", addr.ByteArray)
                        .Add("currency", FooCurrency.Serialize())
                        .Add("amount", 12300)
                );
            AssertBencodexEqual(expected, actual);

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => Registry.Serialize(new DumbAction(addr, "foo"))
            );
            Assert.Contains(
                "unknown system action type",
                e.Message,
                StringComparison.InvariantCultureIgnoreCase);
        }
    }
}
