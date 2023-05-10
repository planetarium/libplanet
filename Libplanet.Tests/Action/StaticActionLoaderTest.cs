using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class StaticActionLoaderTest
    {
        [Fact]
        public void Create()
        {
            var loader = new StaticActionLoader(typeof(Attack));
            Assert.Equal(typeof(Attack), loader.Type);
            loader = new StaticActionLoader(typeof(BaseAction));
            Assert.Equal(typeof(BaseAction), loader.Type);
        }

        [Fact]
        public void LoadAction()
        {
            var actionTypeLoader = new StaticActionLoader(typeof(Attack));

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
    }
}
