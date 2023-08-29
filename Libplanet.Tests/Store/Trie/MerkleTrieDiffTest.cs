using System;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Tests.Store.Trie.TrieKVFixture;

namespace Libplanet.Tests.Store.Trie
{
    public class MerkleTrieDiffTest
    {
        [Fact]
        public void EmptySourceNode()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(null);
            ITrie target = stateStore.GetStateRoot(null);
            Assert.Null(target.Root);
            Assert.Empty(((MerkleTrie)source).Diff((MerkleTrie)target));

            target = target.Set(K01, V01);
            target = target.Commit();
            Assert.NotNull(target.Root);
            Assert.Empty(((MerkleTrie)source).Diff((MerkleTrie)target));
        }

        [Fact]
        public void ValueSourceNode()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(null);
            source = source.Set(K, V);
            source = source.Commit();

            ITrie target = stateStore.GetStateRoot(null);
            var diff = ((MerkleTrie)source).Diff((MerkleTrie)target).ToList();
            Assert.Single(diff);
            Assert.Equal(
                (new KeyBytes(Array.Empty<byte>()), V, null),
                diff[0]);
        }

        [Theory]
        [InlineData(false, false)]
        [InlineData(false, true)]
        [InlineData(true, false)]
        [InlineData(true, true)]
        public void Diff(bool commitSource, bool commitTarget)
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            IStateStore stateStore = new TrieStateStore(keyValueStore);
            ITrie source = stateStore.GetStateRoot(null);
            source = source.Set(K00, V00);
            source = source.Set(K01, V01);
            source = source.Set(K0000, V0000);
            source = source.Set(K0010, V0010);
            source = commitSource ? source.Commit() : source;

            // Same value for K00 and missing value for K0000
            ITrie target = stateStore.GetStateRoot(null);
            target = target.Set(K00, V00);
            target = target.Set(K01, new Text("foo"));
            target = target.Set(K0010, new Text("bar"));
            target = commitTarget ? target.Commit() : target;

            // source - target
            var diff = ((MerkleTrie)source).Diff((MerkleTrie)target).ToList();
            Assert.Equal(3, diff.Count);    // K01, K0000, K0010
            Assert.Contains(
                (K01, V01, new Text("foo")),
                diff);
            Assert.Contains(
                (K0000, V0000, null),
                diff);
            Assert.Contains(
                (K0010, V0010, new Text("bar")),
                diff);

            // target - source
            diff = ((MerkleTrie)target).Diff((MerkleTrie)source).ToList();
            Assert.Equal(2, diff.Count);    // K01, K0010
            Assert.Contains(
                (K01, new Text("foo"), V01),
                diff);
            Assert.Contains(
                (K0010, new Text("bar"), V0010),
                diff);
        }
    }
}
