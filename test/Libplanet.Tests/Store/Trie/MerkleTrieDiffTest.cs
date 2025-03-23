using System.Linq;
using Bencodex.Types;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieDiffTest
    {
        [Fact]
        public void EmptySourceNode()
        {
            KeyBytes k01 = KeyBytes.Parse("01");
            IValue v01 = new Text("01");

            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(default);
            ITrie target = stateStore.GetStateRoot(default);
            Assert.Null(target.Node);
            Assert.Empty(((MerkleTrie)source).Diff((MerkleTrie)target));

            target = target.Set(k01, v01);
            target = stateStore.Commit(target);
            Assert.NotNull(target.Node);
            Assert.Empty(source.Diff(target));
        }

        [Fact]
        public void ValueSourceNode()
        {
            KeyBytes k = KeyBytes.Parse(string.Empty);
            IValue v = new Text(string.Empty);

            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(default);
            source = source.Set(k, v);
            source = stateStore.Commit(source);

            ITrie target = stateStore.GetStateRoot(default);
            var diff = source.Diff(target).ToList();
            Assert.Single(diff);
            Assert.Contains((k, null, v), diff);
        }

        [Theory]
        [InlineData(false, false)]
        [InlineData(false, true)]
        [InlineData(true, false)]
        [InlineData(true, true)]
        public void Diff(bool commitSource, bool commitTarget)
        {
            KeyBytes k00 = KeyBytes.Parse("00");
            IValue v00 = new Text("00");
            KeyBytes k01 = KeyBytes.Parse("01");
            IValue v01 = new Text("01");
            IValue v01a = new Text("01A");
            KeyBytes k0000 = KeyBytes.Parse("0000");
            IValue v0000 = new Text("0000");
            KeyBytes k0010 = KeyBytes.Parse("0010");
            IValue v0010 = new Text("0010");
            IValue v0010a = new Text("0010A");

            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(default);
            source = source.Set(k00, v00);
            source = source.Set(k01, v01);
            source = source.Set(k0000, v0000);
            source = source.Set(k0010, v0010);
            source = commitSource ? stateStore.Commit(source) : source;

            // Same value for K00 and missing value for K0000
            ITrie target = stateStore.GetStateRoot(default);
            target = target.Set(k00, v00);
            target = target.Set(k01, v01a);
            target = target.Set(k0010, v0010a);
            target = commitTarget ? stateStore.Commit(target) : target;

            // source - target
            var diff = source.Diff(target).ToList();
            Assert.Equal(3, diff.Count);    // K01, K0000, K0010
            Assert.Contains((k01, v01a, v01), diff);
            Assert.Contains((k0000, null, v0000), diff);
            Assert.Contains((k0010, v0010a, v0010), diff);

            // target - source
            diff = target.Diff(source).ToList();
            Assert.Equal(2, diff.Count);    // K01, K0010
            Assert.Contains((k01, v01, v01a), diff);
            Assert.Contains((k0010, v0010, v0010a), diff);
        }
    }
}
