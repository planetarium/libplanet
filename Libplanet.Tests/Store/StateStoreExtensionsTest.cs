using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
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
        public static (string, IStateStore)[] StateStoreImpls => new (string, IStateStore)[]
        {
            (
                "TrieStateStore(secure: false)",
                new TrieStateStore(new DefaultKeyValueStore(null), false)
            ),
            (
                "TrieStateStore(secure: true)",
                new TrieStateStore(new DefaultKeyValueStore(null), true)
            ),
        };

        public static IEnumerable<object[]> StateStores =>
            StateStoreImpls.Select(pair => new object[] { pair.Item1, pair.Item2 });

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

        [Theory]
        [MemberData(nameof(StateStores))]
        public void Commit(string label, IStateStore stateStore)
        {
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

        [Theory]
        [MemberData(nameof(StateStores))]
        public void GetState(string label, IStateStore stateStore)
        {
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

        [Theory]
        [MemberData(nameof(StateStores))]
        public void ContainsStateRoot(string label, IStateStore stateStore)
        {
            ITrie a = stateStore.Commit(null, DeltaA);
            Assert.True(stateStore.ContainsStateRoot(a.Hash));
        }
    }
}
