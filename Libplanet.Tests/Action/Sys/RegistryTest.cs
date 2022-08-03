using System;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Xunit;
using Random = System.Random;

namespace Libplanet.Tests.Action.Sys
{
    public class RegistryTest
    {
        private static readonly Currency FooCurrency = new Currency("FOO", 2, minters: null);

        [Fact]
        public void Deserialize()
        {
            var random = new Random();
            Address addr = random.NextAddress();
            Bencodex.Types.Dictionary dict = Dictionary.Empty
                .Add("type_id", 0)
                .Add("values", Dictionary.Empty);

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
