using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Tests.Sample.Actions;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.SDK.Action.Tests.Sample
{
    public class SampleActionsTest
    {
        private TypedActionLoader _loader;
        private IStateStore _stateStore;
        private IWorld _world;

        public SampleActionsTest()
        {
            _loader = new TypedActionLoader(
                ImmutableDictionary<IValue, Type>.Empty
                    .Add(new Text("Number"), typeof(NumberAction))
                    .Add(new Text("Text"), typeof(TextAction)));

            _stateStore = new TrieStateStore(new MemoryKeyValueStore());

            ITrie trie = _stateStore.GetStateRoot(null);
            trie = trie.SetMetadata(new TrieMetadata(Block.CurrentProtocolVersion));
            trie = _stateStore.Commit(trie);
            _world = new World(new WorldBaseState(trie, _stateStore));
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public void NumberAddAndSubtract(bool commit)
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("call", "Add")
                .Add("args", 5);
            NumberAction action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(5),
                world.GetAccountState(action.StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("5"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("call", "Subtract")
                .Add("args", 8);
            action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(-3),
                world.GetAccountState(action.StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("5 - 8"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public void TextAppend(bool commit)
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Text")
                .Add("call", "Append")
                .Add("args", "Hello");
            TextAction action = Assert.IsType<TextAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Text("Hello"),
                world.GetAccountState(action.StorageAddress).GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Text")
                .Add("call", "Append")
                .Add("args", " world");
            action = Assert.IsType<TextAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Text("Hello world"),
                world.GetAccountState(action.StorageAddress).GetState(signer));
        }

        [Fact]
        public void InvalidPlainValueForLoading()
        {
            IValue plainValue = Dictionary.Empty    // Invalid type_id
                .Add("type_id", "Run")
                .Add("call", "Append")
                .Add("args", "Hello");
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty           // Missing type_id
                .Add("call", "Append")
                .Add("args", "Hello");
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty           // Missing call
                .Add("type_id", "Number")
                .Add("args", 5);
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty           // Missing args
                .Add("type_id", "Number")
                .Add("call", "Add");
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));
        }

        [Fact]
        public void InvalidPlainValueForExecution()
        {
            IValue plainValue = Dictionary.Empty    // Invalid call
                .Add("type_id", "Number")
                .Add("call", "Divide")
                .Add("args", 5);
            IAction action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Address address = new PrivateKey().Address;
            Assert.Throws<InvalidOperationException>(() =>
                action.Execute(new MockActionContext(address, address, _world)));

            plainValue = Dictionary.Empty           // Invalid args
                .Add("type_id", "Number")
                .Add("call", "Add")
                .Add("args", "Hello");
            action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Assert.IsType<InvalidCastException>(
                Assert.Throws<TargetInvocationException>(() =>
                    action.Execute(new MockActionContext(address, address, _world)))
                    .InnerException);
        }

        [Fact]
        public void CallableAttributeIsRequired()
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("call", "Multiply")
                .Add("args", 5);
            NumberAction action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            Assert.IsType<Exception>(
                Assert.Throws<TargetInvocationException>(() =>
                    action.Execute(new MockActionContext(signer, signer, world)))
                    .InnerException);
        }
    }
}
