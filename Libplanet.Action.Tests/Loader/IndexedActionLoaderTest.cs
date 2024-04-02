using Bencodex.Types;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Action.Tests.Loader
{
    public class IndexedActionLoaderTest
    {
        [Fact]
        public void Create()
        {
            var loader1 = new SingleActionLoader(typeof(DumbAction));
            var loader2 = new SingleActionLoader(typeof(Attack));
            var loader3 = new SingleActionLoader(typeof(RandomAction));

            // Works fine with single loader
            var indexedLoader = new IndexedActionLoader(
                new List<(long, IActionLoader)> { (0, loader1) });

            // First index does not start with 0
            Assert.Throws<ArgumentException>(() => new IndexedActionLoader(
                new List<(long, IActionLoader)> { (1, loader1) }));

            // Indices not strictly increasing
            Assert.Throws<ArgumentException>(() => new IndexedActionLoader(
                new List<(long, IActionLoader)>
                    { (0, loader1), (5, loader2), (5, loader3) }));

            indexedLoader = new IndexedActionLoader(
                new List<(long, IActionLoader)>
                    { (0, loader1), (5, loader2), (7, loader3) });
        }

        [Fact]
        public void LoadAction()
        {
            var loader1 = new SingleActionLoader(typeof(DumbAction));
            var loader2 = new SingleActionLoader(typeof(Attack));
            var loader3 = new SingleActionLoader(typeof(RandomAction));
            var action1 = DumbAction.Create((new PrivateKey().Address, "foo"));
            var action2 = new Attack();
            action2.LoadPlainValue(Dictionary.Empty
                .Add("type_id", "attack")
                .Add("values", Dictionary.Empty
                    .Add("weapon", "sword")
                    .Add("target", "dummy")
                    .Add("target_address", new PrivateKey().Address.Bencoded)));
            var action3 = new RandomAction(new PrivateKey().Address);

            var loader = new IndexedActionLoader(
                new List<(long, IActionLoader)>
                    { (0, loader1), (5, loader2), (7, loader3) });

            foreach (var i in new List<int>() { 0, 1, 2, 3, 4 })
            {
                var action = loader.LoadAction(i, action1.PlainValue);
                Assert.Equal(action1.PlainValue, action.PlainValue);
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action2.PlainValue));
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action3.PlainValue));
            }

            foreach (var i in new List<int>() { 5, 6 })
            {
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action1.PlainValue));
                var action = loader.LoadAction(i, action2.PlainValue);
                Assert.Equal(action2.PlainValue, action.PlainValue);
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action3.PlainValue));
            }

            foreach (var i in new List<int>() { 7, 8, 9 })
            {
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action1.PlainValue));
                Assert.Throws<InvalidActionException>(
                    () => loader.LoadAction(i, action2.PlainValue));
                var action = loader.LoadAction(i, action3.PlainValue);
                Assert.Equal(action3.PlainValue, action.PlainValue);
            }
        }
    }
}
