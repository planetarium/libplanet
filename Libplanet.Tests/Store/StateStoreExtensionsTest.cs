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

        public static IImmutableDictionary<string, IValue> ZeroDelta =>
            ImmutableDictionary<string, IValue>.Empty;

        public static IImmutableDictionary<string, IValue> DeltaA => ZeroDelta
            .Add("foo", (Text)"abc")
            .Add("bar", (Text)"def");

        public static IImmutableDictionary<string, IValue> DeltaB => ZeroDelta
            .Add("foo", (Text)"ABC")
            .Add("baz", (Text)"ghi");

        public static byte[] KeyFoo => StateStoreExtensions.KeyEncoding.GetBytes("foo");

        public static byte[] KeyBar => StateStoreExtensions.KeyEncoding.GetBytes("bar");

        public static byte[] KeyBaz => StateStoreExtensions.KeyEncoding.GetBytes("baz");

        [Theory]
        [MemberData(nameof(StateStores))]
        public void Commit(string label, IStateStore stateStore)
        {
            IValue value;
            ITrie a = stateStore.Commit(null, DeltaA);
            Assert.True(a.Recorded);
            Assert.True(a.TryGet(KeyFoo, out value));
            AssertBencodexEqual((Text)"abc", value);
            Assert.True(a.TryGet(KeyBar, out value));
            AssertBencodexEqual((Text)"def", value);
            Assert.False(a.TryGet(KeyBaz, out _));

            ITrie recordA = stateStore.GetStateRoot(a.Hash);
            AssertBytesEqual(a.Hash, recordA.Hash);
            Assert.True(recordA.TryGet(KeyFoo, out value));
            AssertBencodexEqual((Text)"abc", value);
            Assert.True(recordA.TryGet(KeyBar, out value));
            AssertBencodexEqual((Text)"def", value);
            Assert.False(recordA.TryGet(KeyBaz, out _));

            ITrie b = stateStore.Commit(a.Hash, DeltaB);
            Assert.True(b.Recorded);
            Assert.True(b.TryGet(KeyFoo, out value));
            AssertBencodexEqual((Text)"ABC", value);
            Assert.True(b.TryGet(KeyBar, out value));
            AssertBencodexEqual((Text)"def", value);
            Assert.True(b.TryGet(KeyBaz, out value));
            AssertBencodexEqual((Text)"ghi", value);
        }

        [Theory]
        [MemberData(nameof(StateStores))]
        public void GetState(string label, IStateStore stateStore)
        {
            ITrie a = stateStore.Commit(null, DeltaA);
            ITrie b = stateStore.Commit(a.Hash, DeltaB);

            AssertBencodexEqual((Text)"abc", stateStore.GetState("foo", a.Hash));
            AssertBencodexEqual((Text)"def", stateStore.GetState("bar", a.Hash));
            AssertBencodexEqual(null, stateStore.GetState("baz", a.Hash));

            AssertBencodexEqual((Text)"ABC", stateStore.GetState("foo", b.Hash));
            AssertBencodexEqual((Text)"def", stateStore.GetState("bar", b.Hash));
            AssertBencodexEqual((Text)"ghi", stateStore.GetState("baz", b.Hash));
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
