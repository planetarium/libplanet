using Bencodex.Types;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Action.Tests.Loader
{
    public class TypedActionLoaderTest
    {
        [Fact]
        public void Create()
        {
            var loader = TypedActionLoader.Create(typeof(Registry).Assembly, null);
            Assert.Equal(
                new Dictionary<IValue, Type>
                {
                    [new Integer(2)] = typeof(Initialize),
                },
                loader.Types);

            loader = TypedActionLoader.Create(null, typeof(Attack));
            Assert.Equal(
                new Dictionary<IValue, Type> { [new Text("attack")] = typeof(Attack) },
                loader.Types);

            // Wrong assembly
            Assert.Throws<ArgumentException>(
                () => TypedActionLoader.Create(typeof(Registry).Assembly, typeof(Attack)));
        }

        [Fact]
        public void LoadAction()
        {
            // We use a system action since BaseAction and its subtypes are incompatible.
            var loader = TypedActionLoader.Create(typeof(Registry).Assembly, null);
            Currency currency = Currency.Uncapped("FOO", 0, null);

            Dictionary plainValue = Dictionary.Empty
                .Add("type_id", 2)
                .Add(
                    "values",
                    new List(
                        new ValidatorSet(
                            new List<Validator>()
                                { new Validator(new PrivateKey().PublicKey, 1) }).Bencoded,
                        Dictionary.Empty.Add(
                            ReservedAddresses.LegacyAccount.ToByteArray(),
                            Dictionary.Empty.Add(
                                default(Address).ToByteArray(), "initial value"))));
            var action = new Initialize();
            action.LoadPlainValue(plainValue);

            var loadedAction = loader.LoadAction(0, action.PlainValue);
            Assert.Equal(action.PlainValue, loadedAction.PlainValue);
            Assert.Throws<InvalidActionException>(
                () => loader.LoadAction(0, new Text("baz")));
        }
    }
}
