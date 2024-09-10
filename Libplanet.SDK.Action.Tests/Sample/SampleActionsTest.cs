using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;
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
                .Add("exec", "Add")
                .Add("args", List.Empty.Add(5));
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
                .Add("exec", "Subtract")
                .Add("args", List.Empty.Add(8));
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

            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", "Bump")
                .Add("args", List.Empty);
            action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(-2),
                world.GetAccountState(action.StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("5 - 8 + 1"),
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
                .Add("exec", "Append")
                .Add("args", List.Empty.Add("Hello"));
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
                .Add("exec", "Append")
                .Add("args", List.Empty.Add(" world"));
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
            IValue plainValue = Dictionary.Empty // Invalid type_id
                .Add("type_id", "Run")
                .Add("exec", "Append")
                .Add("args", List.Empty.Add("Hello"));
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty // Missing type_id
                .Add("exec", "Append")
                .Add("args", List.Empty.Add("Hello"));
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty // Missing call
                .Add("type_id", "Number")
                .Add("args", List.Empty.Add(5));
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));

            plainValue = Dictionary.Empty // Missing args
                .Add("type_id", "Number")
                .Add("exec", "Add");
            Assert.Throws<InvalidActionException>(() => _loader.LoadAction(0, plainValue));
        }

        [Fact]
        public void InvalidPlainValueForExecution()
        {
            IValue plainValue = Dictionary.Empty // Invalid call
                .Add("type_id", "Number")
                .Add("exec", "Divide")
                .Add("args", List.Empty.Add(5));
            IAction action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Address address = new PrivateKey().Address;
            Assert.Throws<InvalidOperationException>(() =>
                action.Execute(new MockActionContext(address, address, _world)));

            plainValue = Dictionary.Empty // Invalid args
                .Add("type_id", "Number")
                .Add("exec", "Add")
                .Add("args", List.Empty.Add("Hello"));
            action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Assert.Throws<ArgumentException>(() =>
                action.Execute(new MockActionContext(address, address, _world)));
        }

        [Fact]
        public void CallableAttributeIsRequired()
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", "Multiply")
                .Add("args", List.Empty.Add(5));
            NumberAction action = Assert.IsType<NumberAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            Assert.IsType<ArgumentException>(
                Assert.Throws<TargetInvocationException>(() =>
                    action.Execute(new MockActionContext(signer, signer, world)))
                    .InnerException);
        }

        [Fact]
        public void ValidatePlainValue()
        {
            IValue plainValue;
            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", nameof(NumberAction.Add))
                .Add("args", List.Empty.Add(5));
            ActionBase.ValidatePlainValue<NumberAction>(plainValue);

            plainValue = Dictionary.Empty
                .Add("type_id", "Text")
                .Add("exec", nameof(TextAction.Append))
                .Add("args", List.Empty.Add("Hello"));
            ActionBase.ValidatePlainValue<TextAction>(plainValue);

            // Missing type_id.
            plainValue = Dictionary.Empty
                .Add("type_id", "Invalid")
                .Add("exec", nameof(TextAction.Append))
                .Add("args", List.Empty.Add("Hello"));
            Assert.Contains(
                $"{nameof(ActionTypeAttribute)}",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<InvalidAction>(plainValue)).Message);

            // Unknown exec.
            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", "Divide")
                .Add("args", List.Empty.Add(5));
            Assert.Contains(
                $"cannot be found",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<NumberAction>(plainValue)).Message);

            // Missing attribute.
            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", nameof(NumberAction.NoAttribute))
                .Add("args", List.Empty);
            Assert.Contains(
                $"{nameof(ExecutableAttribute)}",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<NumberAction>(plainValue)).Message);

            // Invalid argument type.
            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", nameof(NumberAction.Add))
                .Add("args", List.Empty.Add("Hello"));
            Assert.Contains(
                $"argument at",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<NumberAction>(plainValue)).Message);

            // Invalid arguments length.
            plainValue = Dictionary.Empty
                .Add("type_id", "Number")
                .Add("exec", nameof(NumberAction.Add))
                .Add("args", List.Empty.Add(5).Add(6));
            Assert.Contains(
                $"The length",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<NumberAction>(plainValue)).Message);
        }

        [Fact]
        public void GenerateMethodConstraintsSchema()
        {
            var expected = List.Empty.Add(
                Dictionary.Empty
                .Add(
                    "if",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add("type_id", Dictionary.Empty.Add("const", "Number"))
                                .Add("exec", Dictionary.Empty.Add("const", "Add"))))
                .Add(
                    "then",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "args",
                                    Dictionary.Empty
                                        .Add("type", "list")
                                        .Add(
                                            "prefixItems",
                                            List.Empty.Add(Dictionary.Empty.Add("type", "integer")))
                                        .Add("minItems", 1)
                                        .Add("maxItems", 1)))));
            var generated = ActionBase.GenerateMethodConstraintsSchema(
                typeof(NumberAction), nameof(NumberAction.Add));
            Assert.Equal(expected, generated);

            expected = List.Empty.Add(
                Dictionary.Empty
                .Add(
                    "if",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add("type_id", Dictionary.Empty.Add("const", "Number"))
                                .Add("exec", Dictionary.Empty.Add("const", "Bump"))))
                .Add(
                    "then",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add(
                                    "args",
                                    Dictionary.Empty
                                        .Add("type", "list")
                                        .Add("prefixItems", List.Empty)
                                        .Add("minItems", 0)
                                        .Add("maxItems", 0)))));
            generated = ActionBase.GenerateMethodConstraintsSchema(
                typeof(NumberAction), nameof(NumberAction.Bump));
            Assert.Equal(expected, generated);
        }
    }
}
