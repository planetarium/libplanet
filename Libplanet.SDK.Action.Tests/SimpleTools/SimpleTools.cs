using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Tests.SimpleTools.Actions;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.SDK.Action.Tests.Calculator
{
    public class SimpleToolsTest
    {
        private TypedActionLoader _loader;
        private IStateStore _stateStore;
        private IWorld _world;

        public SimpleToolsTest()
        {
            _loader = TypedActionLoader.Create(baseType: typeof(SimpleToolsActionBase));
            _stateStore = new TrieStateStore(new MemoryKeyValueStore());

            ITrie trie = _stateStore.GetStateRoot(null);
            trie = trie.SetMetadata(new TrieMetadata(Block.CurrentProtocolVersion));
            trie = _stateStore.Commit(trie);
            _world = new World(new WorldBaseState(trie, _stateStore));
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public void Execute(bool commit)
        {
            Address signer = new PrivateKey().Address;
            IWorld world = _world;
            IValue plainValue;
            IAction action;

            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "Add")
                .Add("args", List.Empty.Add(5).Add(3));
            action = Assert.IsType<CalculatorAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(8),
                world.GetAccountState(((CalculatorAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "Subtract")
                .Add("args", List.Empty.Add(17).Add(13));
            action = Assert.IsType<CalculatorAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(4),
                world.GetAccountState(((CalculatorAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "Multiply")
                .Add("args", List.Empty.Add(2).Add(-3));
            action = Assert.IsType<CalculatorAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(-6),
                world.GetAccountState(((CalculatorAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4, -6"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "Square")
                .Add("args", List.Empty.Add(7));
            action = Assert.IsType<CalculatorAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(49),
                world.GetAccountState(((CalculatorAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4, -6, 49"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Text")
                .Add("exec", "ToUpper")
                .Add("args", List.Empty.Add(new Text("Hello")));
            action = Assert.IsType<TextAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Text("HELLO"),
                world.GetAccountState(((TextAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4, -6, 49, HELLO"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Text")
                .Add("exec", "ToLower")
                .Add("args", List.Empty.Add(new Text("World")));
            action = Assert.IsType<TextAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Text("world"),
                world.GetAccountState(((TextAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4, -6, 49, HELLO, world"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "LogLength")
                .Add("args", List.Empty);
            action = Assert.IsType<CalculatorAction>(_loader.LoadAction(0, plainValue));
            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Integer(26),
                world.GetAccountState(((CalculatorAction)action).StorageAddress).GetState(signer));
            Assert.Equal(
                new Text("8, 4, -6, 49, HELLO, world, 26"),
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));
        }

        [Fact]
        public void ValidatePlainValue()
        {
            IValue plainValue;
            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", nameof(CalculatorAction.Add))
                .Add("args", List.Empty.Add(5).Add(3));
            ActionBase.ValidatePlainValue<CalculatorAction>(plainValue);

            // Wrong type_id.
            plainValue = Dictionary.Empty
                .Add("type_id", "Invalid")
                .Add("exec", nameof(CalculatorAction.Add))
                .Add("args", List.Empty.Add(5).Add(3));
            Assert.Contains(
                "\"type_id\" for plainValue does not match the expected",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<CalculatorAction>(plainValue)).Message);

            // Unknown exec.
            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", "Divide")
                .Add("args", List.Empty.Add(5).Add(3));
            Assert.Contains(
                "Method named Divide cannot be found",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<CalculatorAction>(plainValue)).Message);

            // Invalid argument type.
            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", nameof(CalculatorAction.Add))
                .Add("args", List.Empty.Add("Hello").Add("World"));
            Assert.Contains(
                $"The argument at ",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<CalculatorAction>(plainValue)).Message);

            // Invalid arguments length.
            plainValue = Dictionary.Empty
                .Add("type_id", "Calc")
                .Add("exec", nameof(CalculatorAction.Add))
                .Add("args", List.Empty.Add(5));
            Assert.Contains(
                $"The length of \"args\" for plainValue should be",
                Assert.Throws<ArgumentException>(() =>
                    ActionBase.ValidatePlainValue<CalculatorAction>(plainValue)).Message);
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
                                    .Add("type_id", Dictionary.Empty.Add("const", "Calc"))
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
                                                List.Empty
                                                    .Add(Dictionary.Empty.Add("type", "integer"))
                                                    .Add(Dictionary.Empty.Add("type", "integer")))
                                            .Add("minItems", 2)
                                            .Add("maxItems", 2)))));
            var generated = ActionBase.GenerateMethodConstraintsSchema(
                typeof(CalculatorAction), nameof(CalculatorAction.Add));
            Assert.Equal(expected, generated);

            expected = List.Empty.Add(
                Dictionary.Empty
                .Add(
                    "if",
                    Dictionary.Empty
                        .Add(
                            "properties",
                            Dictionary.Empty
                                .Add("type_id", Dictionary.Empty.Add("const", "Calc"))
                                .Add("exec", Dictionary.Empty.Add("const", "LogLength"))))
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
                typeof(CalculatorAction), nameof(CalculatorAction.LogLength));
            Assert.Equal(expected, generated);
        }

        [Fact]
        public void GenerateClassConstraintsSchema()
        {
            var expected = List.Empty.Add(
                Dictionary.Empty
                    .Add(
                        "if",
                        Dictionary.Empty
                            .Add(
                                "properties",
                                Dictionary.Empty
                                    .Add("type_id", Dictionary.Empty.Add("const", "Calc"))))
                    .Add(
                        "then",
                        Dictionary.Empty
                            .Add(
                                "properties",
                                Dictionary.Empty
                                    .Add(
                                        "exec",
                                        Dictionary.Empty
                                            .Add(
                                                "enum",
                                                List.Empty
                                                    .Add("Add")
                                                    .Add("Subtract")
                                                    .Add("Multiply")
                                                    .Add("Square")
                                                    .Add("LogLength"))))));
            List<string> methodNames = new List<string>()
            {
                "Add", "Subtract", "Multiply", "Square", "LogLength"
            };
            foreach (var constraints in methodNames.Select(
                methodName => ActionBase.GenerateMethodConstraintsSchema(
                    typeof(CalculatorAction), methodName)))
            {
                foreach (var constraint in constraints)
                {
                    expected = expected.Add(constraint);
                }
            };

            var generated = ActionBase.GenerateClassConstraintsSchema(typeof(CalculatorAction));
            Assert.Equal(expected, generated);
        }

        [Fact]
        public void GenerateConstraintsSchema()
        {
            var expected = List.Empty.Add(
                Dictionary.Empty
                    .Add(
                        "properties",
                        Dictionary.Empty
                            .Add(
                                "type_id",
                                Dictionary.Empty
                                    .Add("enum", List.Empty.Add("Calc").Add("Text")))));
            List<Type> actionTypes = new List<Type>()
            {
                typeof(CalculatorAction), typeof(TextAction)
            };
            foreach (var constraints in actionTypes.Select(
                actionType => ActionBase.GenerateClassConstraintsSchema(
                    actionType)))
            {
                foreach (var constraint in constraints)
                {
                    expected = expected.Add(constraint);
                }
            };

            var generated = ActionBase.GenerateConstraintsSchema(typeof(SimpleToolsActionBase));
            Assert.Equal(expected, generated);
        }
    }
}
