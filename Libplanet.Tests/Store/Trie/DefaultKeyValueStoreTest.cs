using System;
using System.Linq;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class DefaultKeyValueStoreTest
    {
        private const int PreStoredDataCount = 10;

        private const int PreStoredDataKeySize = 16;

        private const int PreStoredDataValueSize = 32;

        private readonly IKeyValueStore _keyValueStore;

        public DefaultKeyValueStoreTest()
        {
            // Memory mode.
            _keyValueStore = new DefaultKeyValueStore(null);

            PreStoredDataKeys = new byte[PreStoredDataCount][];
            PreStoredDataValues = new byte[PreStoredDataCount][];

            for (int i = 0; i < PreStoredDataCount; ++i)
            {
                PreStoredDataKeys[i] = TestUtils.GetRandomBytes(PreStoredDataKeySize);
                PreStoredDataValues[i] = TestUtils.GetRandomBytes(PreStoredDataValueSize);
                _keyValueStore.Set(PreStoredDataKeys[i], PreStoredDataValues[i]);
            }
        }

        private byte[][] PreStoredDataKeys { get; }

        private byte[][] PreStoredDataValues { get; }

        [Fact]
        public void Get()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = _keyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }

            var randomKey = NewRandomKey();
            Assert.Null(_keyValueStore.Get(randomKey));
        }

        // This test will cover DefaultKeyValueStore.Set
        [Fact]
        public void Overwrite()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var randomValue = TestUtils.GetRandomBytes(PreStoredDataValueSize);
                var actual = _keyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);

                _keyValueStore.Set(key, randomValue);
                actual = _keyValueStore.Get(key);
                Assert.Equal(randomValue, actual);
                Assert.NotEqual(expectedValue, actual);
            }
        }

        [Fact]
        public void Delete()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = _keyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }
        }

        [Fact]
        public void Exists()
        {
            foreach (var (key, _) in PreStoredDataKeys.Zip(PreStoredDataValues, ValueTuple.Create))
            {
                Assert.True(_keyValueStore.Exists(key));
            }

            var randomKey = NewRandomKey();
            Assert.False(_keyValueStore.Exists(randomKey));
        }

        public byte[] NewRandomKey()
        {
            byte[] randomKey;
            do
            {
                randomKey = TestUtils.GetRandomBytes(PreStoredDataKeySize);
            }
            while (_keyValueStore.Exists(randomKey));

            return randomKey;
        }
    }
}
