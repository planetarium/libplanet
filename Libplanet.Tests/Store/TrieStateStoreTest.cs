using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
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

        public static KeyBytes KeyFoo => new KeyBytes("foo");

        public static KeyBytes KeyBar => new KeyBytes("bar");

        public static KeyBytes KeyBaz => new KeyBytes("baz");

        public static KeyBytes KeyQux => new KeyBytes("qux");

        public static KeyBytes KeyQuux => new KeyBytes("quux");

        [Fact]
        public void GetStateRoot()
        {
            var stateStore = new TrieStateStore(_stateKeyValueStore);
            ITrie empty = stateStore.GetStateRoot(null);
            Assert.True(empty.Recorded);
            Assert.Null(empty.Get(new[] { KeyFoo })[0]);
            Assert.Null(empty.Get(new[] { KeyBar })[0]);
            Assert.Null(empty.Get(new[] { KeyBaz })[0]);
            Assert.Null(empty.Get(new[] { KeyQux })[0]);
            Assert.Null(empty.Get(new[] { KeyQuux })[0]);

            KeyBytes fooKey = new KeyBytes("foo");
            KeyBytes barKey = new KeyBytes("bar");
            KeyBytes bazKey = new KeyBytes("baz");
            KeyBytes quxKey = new KeyBytes("qux");
            var values = ImmutableDictionary<KeyBytes, IValue>.Empty
                .Add(fooKey, (Binary)GetRandomBytes(32))
                .Add(barKey, (Text)ByteUtil.Hex(GetRandomBytes(32)))
                .Add(bazKey, (Bencodex.Types.Boolean)false)
                .Add(quxKey, Bencodex.Types.Dictionary.Empty);
            ITrie trie = stateStore.Commit(
                values.Aggregate(
                    stateStore.GetStateRoot(null),
                    (prev, kv) => prev.Set(kv.Key, kv.Value)));
            HashDigest<SHA256> hash = trie.Hash;
            ITrie found = stateStore.GetStateRoot(hash);
            Assert.True(found.Recorded);
            AssertBencodexEqual(values[fooKey], found.Get(new[] { KeyFoo })[0]);
            AssertBencodexEqual(values[barKey], found.Get(new[] { KeyBar })[0]);
            AssertBencodexEqual(values[bazKey], found.Get(new[] { KeyBaz })[0]);
            AssertBencodexEqual(values[quxKey], found.Get(new[] { KeyQux })[0]);
            Assert.Null(found.Get(new[] { KeyQuux })[0]);
        }

        [Fact]
        public void PruneStates()
        {
            var values = ImmutableDictionary<KeyBytes, IValue>.Empty
                .Add(new KeyBytes("foo"), (Binary)GetRandomBytes(4096))
                .Add(
                    new KeyBytes("bar"),
                    (Text)ByteUtil.Hex(GetRandomBytes(2048)))
                .Add(new KeyBytes("baz"), (Bencodex.Types.Boolean)false)
                .Add(new KeyBytes("qux"), Bencodex.Types.Dictionary.Empty)
                .Add(
                    new KeyBytes("zzz"),
                    Bencodex.Types.Dictionary.Empty
                        .Add("binary", GetRandomBytes(4096))
                        .Add("text", ByteUtil.Hex(GetRandomBytes(2048))));

            var stateStore = new TrieStateStore(_stateKeyValueStore);
            ITrie first = stateStore.Commit(
                values.Aggregate(
                    stateStore.GetStateRoot(null),
                    (prev, kv) => prev.Set(kv.Key, kv.Value)));

            int prevStatesCount = _stateKeyValueStore.ListKeys().Count();
            ImmutableDictionary<KeyBytes, IValue> nextState =
                values.SetItem(new KeyBytes("foo"), (Binary)GetRandomBytes(4096));
            ITrie second = stateStore.Commit(
                nextState.Aggregate(
                    first,
                    (prev, kv) => prev.Set(kv.Key, kv.Value)));

            // foo = 0x666f6f
            // updated branch node (0x6, aka root) + updated branch node (0x66) +
            // updated short node + new value nodes
            Assert.Equal(prevStatesCount + 4, _stateKeyValueStore.ListKeys().Count());

            stateStore.PruneStates(ImmutableHashSet<HashDigest<SHA256>>.Empty.Add(second.Hash));

            // It will stay at the same count of nodes.
            Assert.Equal(prevStatesCount, _stateKeyValueStore.ListKeys().Count());
        }

        [Fact]
        public void CopyStates()
        {
            var values = ImmutableDictionary<KeyBytes, IValue>.Empty
                .Add(new KeyBytes("foo"), (Binary)GetRandomBytes(4096))
                .Add(
                    new KeyBytes("bar"),
                    (Text)ByteUtil.Hex(GetRandomBytes(2048)))
                .Add(new KeyBytes("baz"), (Bencodex.Types.Boolean)false)
                .Add(new KeyBytes("qux"), Bencodex.Types.Dictionary.Empty)
                .Add(
                    new KeyBytes("zzz"),
                    Bencodex.Types.Dictionary.Empty
                        .Add("binary", GetRandomBytes(4096))
                        .Add("text", ByteUtil.Hex(GetRandomBytes(2048))));

            var stateStore = new TrieStateStore(_stateKeyValueStore);

            IKeyValueStore targetStateKeyValueStore = new MemoryKeyValueStore();
            var targetStateStore = new TrieStateStore(targetStateKeyValueStore);
            ITrie trie = stateStore.Commit(
                values.Aggregate(
                    stateStore.GetStateRoot(null),
                    (prev, kv) => prev.Set(kv.Key, kv.Value)));
            int prevStatesCount = _stateKeyValueStore.ListKeys().Count();

            _stateKeyValueStore.Set(
                new KeyBytes("alpha"),
                ByteUtil.ParseHex("00"));
            _stateKeyValueStore.Set(
                new KeyBytes("beta"),
                ByteUtil.ParseHex("00"));

            Assert.Equal(prevStatesCount + 2, _stateKeyValueStore.ListKeys().Count());
            Assert.Empty(targetStateKeyValueStore.ListKeys());

            stateStore.CopyStates(
                ImmutableHashSet<HashDigest<SHA256>>.Empty.Add(trie.Hash),
                targetStateStore);

            // It will stay at the same count of nodes.
            // FIXME: Bencodex fingerprints also should be tracked.
            //        https://github.com/planetarium/libplanet/issues/1653
            Assert.Equal(prevStatesCount, targetStateKeyValueStore.ListKeys().Count());
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
