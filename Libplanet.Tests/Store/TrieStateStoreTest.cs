using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class TrieStateStoreTest
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly IKeyValueStore _stateHashKeyValueStore;
        private readonly TrieStateStore _stateStore;

        private readonly IImmutableDictionary<string, IValue> _prestoredValues;

        private readonly DefaultStoreFixture _fx;

        public TrieStateStoreTest()
        {
            _fx = new DefaultStoreFixture();

            _stateKeyValueStore = new DefaultKeyValueStore(null);
            _stateHashKeyValueStore = new DefaultKeyValueStore(null);

            _prestoredValues = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Binary)TestUtils.GetRandomBytes(32))
                .Add("bar", (Text)ByteUtil.Hex(TestUtils.GetRandomBytes(32)))
                .Add("baz", (Bencodex.Types.Boolean)false)
                .Add("qux", Bencodex.Types.Dictionary.Empty);

            _stateStore = new TrieStateStore(_stateKeyValueStore, _stateHashKeyValueStore);
            _stateStore.SetStates(_fx.GenesisBlock, _prestoredValues);
        }

        [Fact]
        public void SetStates()
        {
            // Check to set and to get.
            Assert.Throws<KeyNotFoundException>(() => _stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.False(_stateStore.ContainsBlockStates(_fx.Block1.Hash));
            var states = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Text)"value");
            _stateStore.SetStates(_fx.Block1, states);
            Assert.Equal((Text)"value", _stateStore.GetState("foo", _fx.Block1.Hash));
            Assert.IsType<HashDigest<SHA256>>(_stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.True(_stateStore.ContainsBlockStates(_fx.Block1.Hash));

            _stateStore.SetStates(_fx.Block2, _prestoredValues);

            // Check same states have same state hash.
            Assert.NotEqual(
                _stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                _stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.Equal(
                _stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                _stateStore.GetRootHash(_fx.Block2.Hash));
        }

        [Fact]
        public void GetState()
        {
            foreach (var pair in _prestoredValues)
            {
                Assert.Equal(
                    pair.Value,
                    _stateStore.GetState(pair.Key, _fx.GenesisBlock.Hash));
            }
        }

        [Fact]
        public void ExistsBlockState()
        {
            HashDigest<SHA256> randomBlockHash;
            do
            {
                randomBlockHash =
                    new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            }
            while (randomBlockHash.Equals(_fx.GenesisBlock.Hash));

            Assert.False(_stateStore.ContainsBlockStates(randomBlockHash));
            Assert.True(_stateStore.ContainsBlockStates(_fx.GenesisBlock.Hash));
        }
    }
}
