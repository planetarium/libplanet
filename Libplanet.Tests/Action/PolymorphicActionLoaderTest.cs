using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class PolymorphicActionLoaderTest
    {
        [Fact]
        public void Create()
        {
            var loader = new PolymorphicActionLoader(typeof(BaseAction));
            Assert.Equal(
                new Dictionary<IValue, Type>
                {
                    [new Text("attack")] = typeof(Attack),
                    [new Text("sleep")] = typeof(Sleep),
                    [new Integer(2739)] =
                        Type.GetType("Libplanet.Tests.Action." +
                            "PolymorphicActionTest+IntegerTypeIdAction"),
                    [new Text("TextPlainValueAction")] =
                        Type.GetType("Libplanet.Tests.Action." +
                            "PolymorphicActionTest+TextPlainValueAction"),
                },
                loader.Types);

            loader = new PolymorphicActionLoader(typeof(Attack));
            Assert.Equal(
                new Dictionary<IValue, Type> { [new Text("attack")] = typeof(Attack) },
                loader.Types);
        }

        [Fact]
        public void LoadAction()
        {
            var loader = new PolymorphicActionLoader(typeof(Attack));

            var plainValue = Dictionary.Empty
                .Add("type_id", "attack")
                .Add("values", Dictionary.Empty
                    .Add("weapon", "foo")
                    .Add("target", "bar")
                    .Add("target_address", new Binary(TestUtils.GetRandomBytes(Address.Size))));
#pragma warning disable 612
            var action = new PolymorphicAction<Attack>();
#pragma warning restore 612
            action.LoadPlainValue(plainValue);

            var loadedInnerAction = loader.LoadAction(0, action.PlainValue);
            var loadedAction = (PolymorphicAction<Attack>)((Attack)loadedInnerAction);
            Assert.Equal(action.PlainValue, loadedAction.PlainValue);
            Assert.Equal(action.InnerAction.PlainValue, loadedInnerAction.PlainValue);
            Assert.Throws<InvalidActionException>(
                () => loader.LoadAction(0, new Text("baz")));
        }
    }
}
