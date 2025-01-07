using System.Collections.Immutable;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Tests.SimpleRPG.Actions;
using Libplanet.SDK.Action.Tests.SimpleRPG.Models;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.SDK.Action.Tests.Sample
{
    public class SimpleRPGActionsTest
    {
        private TypedActionLoader _loader;
        private IStateStore _stateStore;
        private IWorld _world;

        public SimpleRPGActionsTest()
        {
            _loader = new TypedActionLoader(
                ImmutableDictionary<IValue, Type>.Empty
                    .Add(new Text("Avatar"), typeof(AvatarAction))
                    .Add(new Text("Farm"), typeof(FarmAction)));

            _stateStore = new TrieStateStore(new MemoryKeyValueStore());

            ITrie trie = _stateStore.GetStateRoot(null);
            trie = trie.SetMetadata(new TrieMetadata(Block.CurrentProtocolVersion));
            trie = _stateStore.Commit(trie);
            _world = new World(new WorldBaseState(trie, _stateStore));
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public void Scenario(bool commit)
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Avatar")
                .Add("exec", "Create")
                .Add("args", List.Empty.Add("Hero"));
            IAction action = Assert.IsType<AvatarAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            world = action.Execute(new MockActionContext(signer, signer, world));
            world = commit ? _stateStore.CommitWorld(world) : world;
            Assert.Equal(
                new Info("Hero").Serialized,
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000001"))
                    .GetState(signer));
            Assert.Equal(
                new Inventory().Serialized,
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));

            const int repeat = 3;
            foreach (var _ in Enumerable.Range(0, repeat))
            {
                plainValue = Dictionary.Empty
                    .Add("type_id", "Farm")
                    .Add("exec", "Farm")
                    .Add("args", List.Empty);
                action = Assert.IsType<FarmAction>(_loader.LoadAction(0, plainValue));
                world = action.Execute(new MockActionContext(signer, signer, world));
                world = commit ? _stateStore.CommitWorld(world) : world;
            }

            Assert.Equal(
                new Info("Hero", FarmAction.ExpPerFarm * repeat).Serialized,
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000001"))
                    .GetState(signer));
            Assert.Equal(
                new Inventory(FarmAction.GoldPerFarm * repeat).Serialized,
                world
                    .GetAccountState(new Address("0x1000000000000000000000000000000000000002"))
                    .GetState(signer));
        }

        [Fact]
        public void CannotCreateTwice()
        {
            IValue plainValue = Dictionary.Empty
                .Add("type_id", "Avatar")
                .Add("exec", "Create")
                .Add("args", List.Empty.Add("Hero"));
            IAction action = Assert.IsType<AvatarAction>(_loader.LoadAction(0, plainValue));
            Address signer = new PrivateKey().Address;
            IWorld world = _world;

            world = action.Execute(new MockActionContext(signer, signer, world));
            world = _stateStore.CommitWorld(world);

            plainValue = Dictionary.Empty
                .Add("type_id", "Avatar")
                .Add("exec", "Create")
                .Add("args", List.Empty.Add("Princess"));
            action = Assert.IsType<AvatarAction>(_loader.LoadAction(0, plainValue));
            Assert.Contains(
                "Info already exists",
                Assert.IsType<InvalidOperationException>(
                    Assert.IsType<TargetInvocationException>(
                        Assert.Throws<TargetInvocationException>(() =>
                            action.Execute(new MockActionContext(signer, signer, world)))
                            .InnerException)
                        .InnerException)
                    .Message);
        }
    }
}
