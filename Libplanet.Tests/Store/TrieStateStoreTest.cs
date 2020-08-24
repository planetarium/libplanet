using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
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
        private readonly Func<HashDigest<SHA256>, Block<DumbAction>> _fxBlockGetter;

        public TrieStateStoreTest()
        {
            _fx = new DefaultStoreFixture();
            _fxBlockGetter = (blockHash) =>
            {
                if (blockHash.Equals(_fx.Hash1))
                {
                    return _fx.Block1;
                }

                if (blockHash.Equals(_fx.Hash2))
                {
                    return _fx.Block2;
                }

                if (blockHash.Equals(_fx.Hash3))
                {
                    return _fx.Block3;
                }

                if (blockHash.Equals(_fx.GenesisBlock.Hash))
                {
                    return _fx.GenesisBlock;
                }

                return null;
            };

            _stateKeyValueStore = new DefaultKeyValueStore(null);
            _stateHashKeyValueStore = new DefaultKeyValueStore(null);

            _prestoredValues = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Binary)TestUtils.GetRandomBytes(32))
                .Add("bar", (Text)ByteUtil.Hex(TestUtils.GetRandomBytes(32)))
                .Add("baz", (Bencodex.Types.Boolean)false)
                .Add("qux", Bencodex.Types.Dictionary.Empty);

            _stateStore = new TrieStateStore(_stateKeyValueStore, _stateHashKeyValueStore);
            _stateStore.SetStates(_fx.GenesisBlock.Hash, _prestoredValues, _fxBlockGetter);
        }

        [Fact]
        public void SetStates()
        {
            // Check to set and to get.
            Assert.Throws<KeyNotFoundException>(() => _stateStore.GetRootHash(_fx.Hash1));
            Assert.False(_stateStore.ContainsBlockStates(_fx.Hash1));
            var states = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Text)"value");
            _stateStore.SetStates(_fx.Hash1, states, _fxBlockGetter);
            Assert.Equal((Text)"value", _stateStore.GetState("foo", _fx.Hash1));
            Assert.IsType<HashDigest<SHA256>>(_stateStore.GetRootHash(_fx.Hash1));
            Assert.True(_stateStore.ContainsBlockStates(_fx.Hash1));

            _stateStore.SetStates(_fx.Hash2, _prestoredValues, _fxBlockGetter);

            // Check same states have same state hash.
            Assert.NotEqual(
                _stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                _stateStore.GetRootHash(_fx.Hash1));
            Assert.Equal(
                _stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                _stateStore.GetRootHash(_fx.Hash2));
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
