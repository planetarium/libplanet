using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class StaticActionTypeLoaderTest
    {
        [Fact]
        public void Load()
        {
            var actionTypeLoader = new StaticActionLoader(
                new[] { typeof(Attack).Assembly },
                typeof(BaseAction)
            );

            Assert.Equal(
                new Dictionary<IValue, Type>
                {
                    [new Text("attack")] = typeof(Attack),
                    [new Text("sleep")] = typeof(Sleep),
                    [new Text("detect_rehearsal")] = typeof(DetectRehearsal),
                    [new Integer(2739)] =
                        Type.GetType("Libplanet.Tests.Action." +
                            "PolymorphicActionTest+IntegerTypeIdAction"),
                    [new Text("TextPlainValueAction")] =
                        Type.GetType("Libplanet.Tests.Action." +
                            "PolymorphicActionTest+TextPlainValueAction"),
                }, actionTypeLoader.Load());
        }

        [Fact]
        public void LoadAction()
        {
            var actionTypeLoader = new StaticActionLoader(
                new[] { typeof(Attack).Assembly }, typeof(Attack));
            actionTypeLoader.Load();

            var plainValue = Dictionary.Empty
                .Add("weapon", "foo")
                .Add("target", "bar")
                .Add("target_address", new Binary(TestUtils.GetRandomBytes(Address.Size)));
            var action = new Attack();
            action.LoadPlainValue(plainValue);

            var loadedAction = actionTypeLoader.LoadAction(0, action.PlainValue);
            Assert.Equal(plainValue, loadedAction.PlainValue);
            Assert.Throws<InvalidActionException>(
                () => actionTypeLoader.LoadAction(0, new Text("baz")));
        }

        [Fact]
        public void DuplicateIds()
        {
            var actionTypeLoader = new StaticActionLoader(
                new[] { typeof(Attack).Assembly }
            );

            Assert.Throws<DuplicateActionTypeIdentifierException>(() => actionTypeLoader.Load());
        }
    }
}
