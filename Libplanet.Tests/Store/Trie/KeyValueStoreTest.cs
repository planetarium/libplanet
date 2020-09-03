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

        private byte[][] PreStoredDataKeys { get; set; }

        private byte[][] PreStoredDataValues { get; set; }

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
        public void Delete()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }
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
            ImmutableHashSet<byte[]> keys = KeyValueStore.ListKeys().ToImmutableHashSet();
            Assert.Equal(PreStoredDataCount, keys.Count);
            var equalityComparer = new BytesEqualityComparer();
            Assert.True(PreStoredDataKeys.ToImmutableHashSet(equalityComparer).SetEquals(keys));
        }

        public byte[] NewRandomKey()
        {
            byte[] randomKey;
            do
            {
                randomKey = Random.NextBytes(PreStoredDataKeySize);
            }
            while (KeyValueStore.Exists(randomKey));

            return randomKey;
        }

        protected void InitializePreStoredData()
        {
            PreStoredDataKeys = new byte[PreStoredDataCount][];
            PreStoredDataValues = new byte[PreStoredDataCount][];

            for (int i = 0; i < PreStoredDataCount; ++i)
            {
                PreStoredDataKeys[i] = Random.NextBytes(PreStoredDataKeySize);
                PreStoredDataValues[i] = Random.NextBytes(PreStoredDataValueSize);
                KeyValueStore.Set(PreStoredDataKeys[i], PreStoredDataValues[i]);
            }
        }
    }
}
