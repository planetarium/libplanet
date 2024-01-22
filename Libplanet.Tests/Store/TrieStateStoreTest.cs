using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
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
        public void CopyStates()
        {
            var stateStore = new TrieStateStore(_stateKeyValueStore);
            IKeyValueStore targetStateKeyValueStore = new MemoryKeyValueStore();
            var targetStateStore = new TrieStateStore(targetStateKeyValueStore);
            Random random = new Random();
            List<(KeyBytes, IValue)> kvs = Enumerable.Range(0, 1_000)
                .Select(_ =>
                (
                    new KeyBytes(GetRandomBytes(random.Next(1, 20))),
                    (IValue)new Binary(GetRandomBytes(20))
                ))
                .ToList();

            ITrie trie = stateStore.GetStateRoot(null);
            foreach (var kv in kvs)
            {
                trie = trie.Set(kv.Item1, kv.Item2);
            }

            trie = stateStore.Commit(trie);
            int prevStatesCount = _stateKeyValueStore.ListKeys().Count();

            // NOTE: Avoid possible collision of KeyBytes, just in case.
            _stateKeyValueStore.Set(
                new KeyBytes(GetRandomBytes(30)),
                ByteUtil.ParseHex("00"));
            _stateKeyValueStore.Set(
                new KeyBytes(GetRandomBytes(40)),
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
            Assert.Equal(
                trie.IterateNodes().Count(),
                targetStateStore.GetStateRoot(trie.Hash).IterateNodes().Count());
            Assert.Equal(
                trie.IterateValues().Count(),
                targetStateStore.GetStateRoot(trie.Hash).IterateValues().Count());
        }

        [Fact]
        public void CopyWorldStates()
        {
            var stateStore = new TrieStateStore(_stateKeyValueStore);
            IKeyValueStore targetStateKeyValueStore = new MemoryKeyValueStore();
            var targetStateStore = new TrieStateStore(targetStateKeyValueStore);
            Random random = new Random();
            Dictionary<Address, List<(KeyBytes, IValue)>> data = Enumerable
                .Range(0, 20)
                .Select(_ => new Address(GetRandomBytes(Address.Size)))
                .ToDictionary(
                    address => address,
                    _ => Enumerable
                        .Range(0, 100)
                        .Select(__ =>
                        (
                            new KeyBytes(GetRandomBytes(random.Next(20))),
                            (IValue)new Binary(GetRandomBytes(20))
                        ))
                        .ToList());

            ITrie worldTrie = stateStore.GetStateRoot(null);
            worldTrie = worldTrie.SetMetadata(new TrieMetadata(5));

            List<HashDigest<SHA256>> accountHashes = new List<HashDigest<SHA256>>();
            foreach (var elem in data)
            {
                ITrie trie = stateStore.GetStateRoot(null);
                foreach (var kv in elem.Value)
                {
                    trie = trie.Set(kv.Item1, kv.Item2);
                }

                trie = stateStore.Commit(trie);
                worldTrie = worldTrie.Set(new KeyBytes(elem.Key.ByteArray), trie.Hash.Bencoded);
                accountHashes.Add(trie.Hash);
            }

            worldTrie = stateStore.Commit(worldTrie);
            int prevStatesCount = _stateKeyValueStore.ListKeys().Count();

            // NOTE: Avoid possible collision of KeyBytes, just in case.
            _stateKeyValueStore.Set(
                new KeyBytes(GetRandomBytes(30)),
                ByteUtil.ParseHex("00"));
            _stateKeyValueStore.Set(
                new KeyBytes(GetRandomBytes(40)),
                ByteUtil.ParseHex("00"));

            Assert.Equal(prevStatesCount + 2, _stateKeyValueStore.ListKeys().Count());
            Assert.Empty(targetStateKeyValueStore.ListKeys());

            stateStore.CopyStates(
                ImmutableHashSet<HashDigest<SHA256>>.Empty.Add(worldTrie.Hash),
                targetStateStore);

            // It will stay at the same count of nodes.
            // FIXME: Bencodex fingerprints also should be tracked.
            //        https://github.com/planetarium/libplanet/issues/1653
            Assert.Equal(prevStatesCount, targetStateKeyValueStore.ListKeys().Count());
            Assert.Equal(
                worldTrie.IterateNodes().Count(),
                targetStateStore.GetStateRoot(worldTrie.Hash).IterateNodes().Count());
            Assert.Equal(
                worldTrie.IterateValues().Count(),
                targetStateStore.GetStateRoot(worldTrie.Hash).IterateValues().Count());
            Assert.Equal(
                stateStore.GetStateRoot(accountHashes.First()).IterateNodes().Count(),
                targetStateStore.GetStateRoot(accountHashes.First()).IterateNodes().Count());
            Assert.Equal(
                stateStore.GetStateRoot(accountHashes.First()).IterateValues().Count(),
                targetStateStore.GetStateRoot(accountHashes.First()).IterateValues().Count());
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
