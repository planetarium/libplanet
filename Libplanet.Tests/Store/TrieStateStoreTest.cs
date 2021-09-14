using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Store
{
    public class TrieStateStoreTest
    {
        private readonly IKeyValueStore _stateKeyValueStore;

        public TrieStateStoreTest()
        {
            _stateKeyValueStore = new DefaultKeyValueStore(null);
        }

        public static byte[] KeyFoo => StateStoreExtensions.KeyEncoding.GetBytes("foo");

        public static byte[] KeyBar => StateStoreExtensions.KeyEncoding.GetBytes("bar");

        public static byte[] KeyBaz => StateStoreExtensions.KeyEncoding.GetBytes("baz");

        public static byte[] KeyQux => StateStoreExtensions.KeyEncoding.GetBytes("qux");

        public static byte[] KeyQuux => StateStoreExtensions.KeyEncoding.GetBytes("quux");

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void GetStateRoot(bool secure)
        {
            var stateStore = new TrieStateStore(_stateKeyValueStore, secure);
            ITrie empty = stateStore.GetStateRoot(null);
            Assert.True(empty.Recorded);
            Assert.False(empty.TryGet(KeyFoo, out _));
            Assert.False(empty.TryGet(KeyBar, out _));
            Assert.False(empty.TryGet(KeyBaz, out _));
            Assert.False(empty.TryGet(KeyQux, out _));
            Assert.False(empty.TryGet(KeyQuux, out _));

            var values = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Binary)GetRandomBytes(32))
                .Add("bar", (Text)ByteUtil.Hex(GetRandomBytes(32)))
                .Add("baz", (Bencodex.Types.Boolean)false)
                .Add("qux", Bencodex.Types.Dictionary.Empty);
            HashDigest<SHA256> hash = stateStore.Commit(null, values, rehearsal: true).Hash;

            ITrie notFound = stateStore.GetStateRoot(hash);
            Assert.False(notFound.Recorded);

            IValue value;
            stateStore.Commit(null, values, rehearsal: false);
            ITrie found = stateStore.GetStateRoot(hash);
            Assert.True(found.Recorded);
            Assert.True(found.TryGet(KeyFoo, out value));
            AssertBencodexEqual(values["foo"], value);
            Assert.True(found.TryGet(KeyBar, out value));
            AssertBencodexEqual(values["bar"], value);
            Assert.True(found.TryGet(KeyBaz, out value));
            AssertBencodexEqual(values["baz"], value);
            Assert.True(found.TryGet(KeyQux, out value));
            AssertBencodexEqual(values["qux"], value);
            Assert.False(empty.TryGet(KeyQuux, out _));
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void PruneStates(bool secure)
        {
            var values = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Binary)GetRandomBytes(32))
                .Add("bar", (Text)ByteUtil.Hex(GetRandomBytes(32)))
                .Add("baz", (Bencodex.Types.Boolean)false)
                .Add("qux", Bencodex.Types.Dictionary.Empty);

            var stateStore = new TrieStateStore(_stateKeyValueStore, secure);
            ITrie first = stateStore.Commit(null, values);

            int prevStatesCount = _stateKeyValueStore.ListKeys().Count();
            ImmutableDictionary<string, IValue> nextStates =
                values.SetItem("foo", (Binary)GetRandomBytes(32));
            ITrie second = stateStore.Commit(first.Hash, nextStates);

            // foo = 0x666f6f
            // updated branch node (0x6, aka root) + updated branch node (0x66) +
            // updated short node + new value node
            Assert.Equal(prevStatesCount + 4, _stateKeyValueStore.ListKeys().Count());

            stateStore.PruneStates(ImmutableHashSet<HashDigest<SHA256>>.Empty.Add(second.Hash));

            // It will stay at the same count of nodes.
            Assert.Equal(prevStatesCount, _stateKeyValueStore.ListKeys().Count());
        }

        [Fact]
#pragma warning disable S2699 // Tests should include assertions
        public void IdempotentDispose()
#pragma warning restore S2699 // Tests should include assertions
        {
            var stateStore = new TrieStateStore(_stateKeyValueStore);
            stateStore.Dispose();
#pragma warning disable S3966 // Objects should not be disposed more than once
            stateStore.Dispose();
#pragma warning restore S3966 // Objects should not be disposed more than once
        }
    }
}
