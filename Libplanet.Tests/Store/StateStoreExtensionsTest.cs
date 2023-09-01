using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using Bencodex.Types;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Store
{
    [SuppressMessage(
        "Usage",
        "xUnit1026",
        Justification = "Labels purpose to distinguish " + nameof(IStateStore) + " impls.")]
    public class StateStoreExtensionsTest
    {
        public static IImmutableDictionary<KeyBytes, IValue> ZeroDelta =>
            ImmutableDictionary<KeyBytes, IValue>.Empty;

        public static KeyBytes KeyFoo => new KeyBytes("foo");

        public static KeyBytes KeyBar => new KeyBytes("bar");

        public static KeyBytes KeyBaz => new KeyBytes("baz");

        public static IImmutableDictionary<KeyBytes, IValue> DeltaA => ZeroDelta
            .Add(KeyFoo, (Text)"abc")
            .Add(KeyBar, (Text)"def");

        public static IImmutableDictionary<KeyBytes, IValue> DeltaB => ZeroDelta
            .Add(KeyFoo, (Text)"ABC")
            .Add(KeyBaz, (Text)"ghi");

        [Fact]
        public void Commit()
        {
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie a = stateStore.Commit(null, DeltaA);
            Assert.True(a.Recorded);
            AssertBencodexEqual((Text)"abc", a.Get(new[] { KeyFoo })[0]);
            AssertBencodexEqual((Text)"def", a.Get(new[] { KeyBar })[0]);
            Assert.Null(a.Get(new[] { KeyBaz })[0]);

            ITrie recordA = stateStore.GetStateRoot(a.Hash);
            AssertBytesEqual(a.Hash, recordA.Hash);
            AssertBencodexEqual((Text)"abc", recordA.Get(new[] { KeyFoo })[0]);
            AssertBencodexEqual((Text)"def", recordA.Get(new[] { KeyBar })[0]);
            Assert.Null(recordA.Get(new[] { KeyBaz })[0]);

            ITrie b = stateStore.Commit(a.Hash, DeltaB);
            Assert.True(b.Recorded);
            AssertBencodexEqual((Text)"ABC", b.Get(new[] { KeyFoo })[0]);
            AssertBencodexEqual((Text)"def", b.Get(new[] { KeyBar })[0]);
            AssertBencodexEqual((Text)"ghi", b.Get(new[] { KeyBaz })[0]);
        }

        [Fact]
        public void GetState()
        {
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie a = stateStore.Commit(null, DeltaA);
            ITrie b = stateStore.Commit(a.Hash, DeltaB);

            AssertBencodexEqual(
                (Text)"abc", stateStore.GetStates(a.Hash, new[] { new KeyBytes("foo") })[0]);
            AssertBencodexEqual(
                (Text)"def", stateStore.GetStates(a.Hash, new[] { new KeyBytes("bar") })[0]);
            AssertBencodexEqual(
                null, stateStore.GetStates(a.Hash, new[] { new KeyBytes("baz") })[0]);

            AssertBencodexEqual(
                (Text)"ABC", stateStore.GetStates(b.Hash, new[] { new KeyBytes("foo") })[0]);
            AssertBencodexEqual(
                (Text)"def", stateStore.GetStates(b.Hash, new[] { new KeyBytes("bar") })[0]);
            AssertBencodexEqual(
                (Text)"ghi", stateStore.GetStates(b.Hash, new[] { new KeyBytes("baz") })[0]);
        }

        [Fact]
        public void ContainsStateRoot()
        {
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie a = stateStore.Commit(null, DeltaA);
            Assert.True(stateStore.ContainsStateRoot(a.Hash));
        }
    }
}
