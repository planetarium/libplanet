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

        private KeyBytes[]? _preStoredDataKeys;
        private byte[][]? _preStoredDataValues;

        protected abstract IKeyValueStore KeyValueStore { get; }

        protected Random Random { get; } = new Random();

        private KeyBytes[] PreStoredDataKeys => _preStoredDataKeys ??
            throw new InvalidOperationException();

        private byte[][] PreStoredDataValues => _preStoredDataValues ??
            throw new InvalidOperationException();

        [SkippableFact]
        public void Get()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }

            var randomKey = NewRandomKey();
            Assert.Throws<KeyNotFoundException>(() => KeyValueStore.Get(randomKey));
        }

        [SkippableFact]
        public void Set()
        {
            var key = new KeyBytes(Random.NextBytes(PreStoredDataKeySize));
            byte[] value = Random.NextBytes(PreStoredDataValueSize);
            KeyValueStore.Set(key, value);

            Assert.Equal(value, KeyValueStore.Get(key));
        }

        [SkippableFact]
        public void SetMany()
        {
            var values = new Dictionary<KeyBytes, byte[]>();
            foreach (int i in Enumerable.Range(0, 10))
            {
                values[new KeyBytes(Random.NextBytes(PreStoredDataKeySize))] =
                    Random.NextBytes(PreStoredDataValueSize);
            }

            KeyValueStore.Set(values);

            foreach (KeyValuePair<KeyBytes, byte[]> kv in values)
            {
                Assert.Equal(kv.Value, KeyValueStore.Get(kv.Key));
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
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);

                KeyValueStore.Set(key, randomValue);
                actual = KeyValueStore.Get(key);
                Assert.Equal(randomValue, actual);
                Assert.NotEqual(expectedValue, actual);
            }
        }

        [SkippableFact]
        public virtual void Delete()
        {
            foreach (KeyBytes key in PreStoredDataKeys)
            {
                KeyValueStore.Delete(key);
                Assert.False(KeyValueStore.Exists(key));
            }

            KeyBytes nonExistent = NewRandomKey();
            KeyValueStore.Delete(nonExistent);
            Assert.False(KeyValueStore.Exists(nonExistent));
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
            KeyValueStore.Delete(keys);
            Assert.All(keys, k => Assert.False(KeyValueStore.Exists(k)));
        }

        [SkippableFact]
        public void Exists()
        {
            foreach (var (key, _) in PreStoredDataKeys.Zip(PreStoredDataValues, ValueTuple.Create))
            {
                Assert.True(KeyValueStore.Exists(key));
            }

            var randomKey = NewRandomKey();
            Assert.False(KeyValueStore.Exists(randomKey));
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
                randomKey = new KeyBytes(Random.NextBytes(PreStoredDataKeySize));
            }
            while (KeyValueStore.Exists(randomKey));

            return randomKey;
        }

        protected void InitializePreStoredData()
        {
            _preStoredDataKeys = new KeyBytes[PreStoredDataCount];
            _preStoredDataValues = new byte[PreStoredDataCount][];

            for (int i = 0; i < PreStoredDataCount; ++i)
            {
                _preStoredDataKeys[i] = new KeyBytes(Random.NextBytes(PreStoredDataKeySize));
                _preStoredDataValues[i] = Random.NextBytes(PreStoredDataValueSize);
                KeyValueStore.Set(_preStoredDataKeys[i], _preStoredDataValues[i]);
            }
        }
    }
}
