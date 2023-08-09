using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Action.Tests.Sys
{
    public class RegistryTest
    {
        private static readonly ValidatorSet _validatorSet = new ValidatorSet(
            new List<Validator>()
            {
                new Validator(new PrivateKey().PublicKey, BigInteger.One),
            }
        );

        private static readonly IImmutableDictionary<Address, IImmutableDictionary<Address, IValue>>
            _states =
            new Dictionary<Address, IImmutableDictionary<Address, IValue>>
            {
                [default] =
                new Dictionary<Address, IValue>
                {
                    [default] = (Text)"initial value",
                }.ToImmutableDictionary(),
            }.ToImmutableDictionary();

        private static readonly Currency FooCurrency = Currency.Uncapped("FOO", 2, null);

        [Fact]
        public void Deserialize()
        {
            Dictionary value = Dictionary.Empty
                .Add("type_id", 2)
                .Add(
                    "values",
                    new List(
                        _validatorSet.Bencoded,
                        Dictionary.Empty.Add(
                                default(Address).ToByteArray(),
                                Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value"
                                ))));
            IAction action = Registry.Deserialize(value);
            var initialize = Assert.IsType<Initialize>(action);
            Assert.Equal(_validatorSet, initialize.ValidatorSet);
            Assert.Equal(_states, initialize.States);

            ArgumentException e;
            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize((Dictionary)value.Remove(new Text("type_id")))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("type_id", e.Message);

            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize((Dictionary)value.Remove(new Text("values")))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("values", e.Message);

            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize(value.SetItem("type_id", "non-integer"))
            );
            Assert.Equal("serialized", e.ParamName);
            Assert.Contains("type_id", e.Message);

            e = Assert.Throws<ArgumentException>(
                () => Registry.Deserialize(value.SetItem("type_id", short.MaxValue))
            );
            Assert.Contains(
                "Failed to deserialize",
                e.Message,
                StringComparison.InvariantCultureIgnoreCase);
        }

        [Fact]
        public void Serialize()
        {
            var random = new System.Random();
            Address addr = random.NextAddress();
            IValue actual = new Initialize(_validatorSet, _states).PlainValue;
            IValue expected = Dictionary.Empty
                .Add("type_id", 2)
                .Add(
                    "values",
                    new List(
                        _validatorSet.Bencoded,
                        Dictionary.Empty.Add(
                                default(Address).ToByteArray(),
                                Dictionary.Empty.Add(default(Address).ToByteArray(), "initial value"
                                ))));
            TestUtils.AssertBencodexEqual(expected, actual);
        }

        [Fact]
        public void IsSystemAction()
        {
            var random = new System.Random();
            Address addr = random.NextAddress();
            Assert.True(Registry.IsSystemAction(new Initialize(_validatorSet, _states)));
            Assert.False(Registry.IsSystemAction(new DumbAction(addr, "foo")));

            Assert.True(Registry.IsSystemAction(Dictionary.Empty
                .Add("type_id", new Integer(2))));
            Assert.False(Registry.IsSystemAction(Dictionary.Empty
                .Add("type_id", new Integer(2308))));
            Assert.False(Registry.IsSystemAction(Dictionary.Empty
                .Add("type_id", new Text("mint"))));
        }
    }
}
