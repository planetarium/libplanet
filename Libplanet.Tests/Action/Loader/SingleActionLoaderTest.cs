using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class SingleActionLoaderTest
    {
        [Fact]
        public void Create()
        {
            var loader = new SingleActionLoader(typeof(Attack));
            Assert.Equal(typeof(Attack), loader.Type);
            loader = new SingleActionLoader(typeof(BaseAction));
            Assert.Equal(typeof(BaseAction), loader.Type);
        }

        [Fact]
        public void LoadAction()
        {
            var actionTypeLoader = new SingleActionLoader(typeof(Attack));

            var plainValue = Dictionary.Empty
                .Add("type_id", "attack")
                .Add("values", Dictionary.Empty
                    .Add("weapon", "foo")
                    .Add("target", "bar")
                    .Add("target_address", new Binary(TestUtils.GetRandomBytes(Address.Size))));
            var action = new Attack();
            action.LoadPlainValue(plainValue);

            var loadedAction = actionTypeLoader.LoadAction(0, action.PlainValue);
            Assert.Equal(plainValue, loadedAction.PlainValue);
            Assert.Throws<InvalidActionException>(
                () => actionTypeLoader.LoadAction(0, new Text("baz")));
        }
    }
}
