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
            loader = new SingleActionLoader(typeof(PolymorphicAction<BaseAction>));
            Assert.Equal(typeof(PolymorphicAction<BaseAction>), loader.Type);
        }

        [Fact]
        public void LoadAction()
        {
            var actionTypeLoader = new SingleActionLoader(typeof(Attack));

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
        public void HandlePolymorphicAction()
        {
            var loader = new SingleActionLoader(typeof(PolymorphicAction<BaseAction>));

            var weapon = "frying pan";
            var target = "mosquito";
            var address = new Address(TestUtils.GetRandomBytes(Address.Size));
            var innerPlainValue = Dictionary.Empty
                .Add("weapon", weapon)
                .Add("target", target)
                .Add("target_address", address.ByteArray);
            var plainValue = Dictionary.Empty
                .Add("type_id", "attack")
                .Add("values", innerPlainValue);

            var innerAction = new Attack();
            innerAction.LoadPlainValue(innerPlainValue);
            var polyAction = new PolymorphicAction<BaseAction>(innerAction);

            var loaded = loader.LoadAction(0, polyAction.PlainValue);
            var loadedPoly = Assert.IsType<PolymorphicAction<BaseAction>>(loaded);
            var loadedInner = Assert.IsType<Attack>(loadedPoly.InnerAction);
            Assert.Equal(plainValue, loaded.PlainValue);
            Assert.Equal(weapon, loadedInner.Weapon);
            Assert.Equal(target, loadedInner.Target);
            Assert.Equal(address, loadedInner.TargetAddress);
        }
    }
}
