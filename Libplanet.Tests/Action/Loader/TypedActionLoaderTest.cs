using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
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
                    [new Integer(0)] = typeof(Mint),
                    [new Integer(1)] = typeof(Transfer),
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

            var plainValue = Dictionary.Empty
                .Add("type_id", 0)
                .Add("values", Dictionary.Empty
                    .Add("recipient", TestUtils.GetRandomBytes(Address.Size))
                    .Add("currency", currency.Serialize())
                    .Add("amount", 5));
            var action = new Mint();
            action.LoadPlainValue(plainValue);

            var loadedAction = loader.LoadAction(0, action.PlainValue);
            Assert.Equal(action.PlainValue, loadedAction.PlainValue);
            Assert.Throws<InvalidActionException>(
                () => loader.LoadAction(0, new Text("baz")));
        }
    }
}
