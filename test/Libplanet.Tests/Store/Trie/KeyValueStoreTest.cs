using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public abstract class KeyValueStoreTest
    {
        private const int PreStoredDataCount = 10;

        private const int PreStoredDataKeySize = 16;

        private const int PreStoredDataValueSize = 32;

        protected IKeyValueStore KeyValueStore { get; set; }

        protected Random Random { get; } = new Random();

        private KeyBytes[] PreStoredDataKeys { get; set; }

        private byte[][] PreStoredDataValues { get; set; }

        [SkippableFact]
        public void Get()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = KeyValueStore[key];
                Assert.Equal(expectedValue, actual);
            }

            var randomKey = NewRandomKey();
            Assert.Throws<KeyNotFoundException>(() => KeyValueStore[randomKey]);
        }

        [SkippableFact]
        public void Set()
        {
            var key = KeyBytes.Create(Random.NextBytes(PreStoredDataKeySize));
            byte[] value = Random.NextBytes(PreStoredDataValueSize);
            KeyValueStore[key] = value;

            Assert.Equal(value, KeyValueStore[key]);
        }

        [SkippableFact]
        public void SetMany()
        {
            var values = new Dictionary<KeyBytes, byte[]>();
            foreach (int i in Enumerable.Range(0, 10))
            {
                values[KeyBytes.Create(Random.NextBytes(PreStoredDataKeySize))] =
                    Random.NextBytes(PreStoredDataValueSize);
            }

            KeyValueStore.Set(values);

            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                Assert.Equal(kv.Value, KeyValueStore[kv.Key]);
            }
        }

        // This test will cover DefaultKeyValueStore.Set
        [SkippableFact]
        public void Overwrite()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var randomValue = Random.NextBytes(PreStoredDataValueSize);
                var actual = KeyValueStore[key];
                Assert.Equal(expectedValue, actual);

                KeyValueStore[key] = randomValue;
                actual = KeyValueStore[key];
                Assert.Equal(randomValue, actual);
                Assert.NotEqual(expectedValue, actual);
            }
        }

        [SkippableFact]
        public virtual void Delete()
        {
            foreach (KeyBytes key in PreStoredDataKeys)
            {
                KeyValueStore.Remove(key);
                Assert.False(KeyValueStore.ContainsKey(key));
            }

            KeyBytes nonExistent = NewRandomKey();
            KeyValueStore.Remove(nonExistent);
            Assert.False(KeyValueStore.ContainsKey(nonExistent));
        }

        [SkippableFact]
        public virtual void DeleteMany()
        {
            KeyBytes[] nonExistentKeys = Enumerable.Range(0, 10)
                .Select(_ => NewRandomKey())
                .ToArray();
            KeyBytes[] keys = PreStoredDataKeys
                .Concat(PreStoredDataKeys.Take(PreStoredDataCount / 2))
                .Concat(nonExistentKeys)
                .ToArray();
            KeyValueStore.RemoveMany(keys);
            Assert.All(keys, k => Assert.False(KeyValueStore.ContainsKey(k)));
        }

        [SkippableFact]
        public void Exists()
        {
            foreach (var (key, _) in PreStoredDataKeys.Zip(PreStoredDataValues, ValueTuple.Create))
            {
                Assert.True(KeyValueStore.ContainsKey(key));
            }

            var randomKey = NewRandomKey();
            Assert.False(KeyValueStore.ContainsKey(randomKey));
        }

        [SkippableFact]
        public void ListKeys()
        {
            ImmutableHashSet<KeyBytes> keys = KeyValueStore.ListKeys().ToImmutableHashSet();
            Assert.Equal(PreStoredDataCount, keys.Count);
            Assert.True(PreStoredDataKeys.ToImmutableHashSet().SetEquals(keys));
        }

        public KeyBytes NewRandomKey()
        {
            KeyBytes randomKey;
            do
            {
                randomKey = KeyBytes.Create(Random.NextBytes(PreStoredDataKeySize));
            }
            while (KeyValueStore.ContainsKey(randomKey));

            return randomKey;
        }

        protected void InitializePreStoredData()
        {
            PreStoredDataKeys = new KeyBytes[PreStoredDataCount];
            PreStoredDataValues = new byte[PreStoredDataCount][];

            for (int i = 0; i < PreStoredDataCount; ++i)
            {
                PreStoredDataKeys[i] = KeyBytes.Create(Random.NextBytes(PreStoredDataKeySize));
                PreStoredDataValues[i] = Random.NextBytes(PreStoredDataValueSize);
                KeyValueStore[PreStoredDataKeys[i]] = PreStoredDataValues[i];
            }
        }
    }
}
