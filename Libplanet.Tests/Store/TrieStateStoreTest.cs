using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class TrieStateStoreTest
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly IKeyValueStore _stateHashKeyValueStore;
        private readonly TrieStateStore _stateStore;

        private readonly HashDigest<SHA256> _prestoredBlockHash;
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

            _prestoredBlockHash =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            _prestoredValues = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Binary)TestUtils.GetRandomBytes(32))
                .Add("bar", (Text)ByteUtil.Hex(TestUtils.GetRandomBytes(32)))
                .Add("baz", (Bencodex.Types.Boolean)false)
                .Add("qux", Bencodex.Types.Dictionary.Empty);

            var trie = new Libplanet.Store.Trie.Trie(_stateKeyValueStore);
            foreach (var (key, value) in _prestoredValues)
            {
                trie.Set(Encoding.UTF8.GetBytes(key), value);
            }

            var committedTrie = trie.Commit();
            _stateHashKeyValueStore.Set(
                _prestoredBlockHash.ToByteArray(), committedTrie.Root.Hash().ToByteArray());

            _stateStore = new TrieStateStore(_stateKeyValueStore, _stateHashKeyValueStore);
        }

        [Fact]
        public void SetStates()
        {
            // Check to set and to get.
            Assert.Null(_stateStore.GetRootHash(_fx.GenesisBlock.Hash));
            Assert.False(_stateStore.ExistsBlockState(_fx.GenesisBlock.Hash));
            var states = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Text)"value");
            _stateStore.SetStates(_fx.GenesisBlock.Hash, states, _fxBlockGetter);
            Assert.Equal((Text)"value", _stateStore.GetState("foo", _fx.GenesisBlock.Hash));
            Assert.NotNull(_stateStore.GetRootHash(_fx.GenesisBlock.Hash));
            Assert.True(_stateStore.ExistsBlockState(_fx.GenesisBlock.Hash));

            // Check same states have same state hash.
            _stateStore.SetStates(_fx.Hash1, _prestoredValues, _fxBlockGetter);
            Assert.Equal(_prestoredBlockHash, _stateStore.GetRootHash(_fx.Hash1));
        }

        [Fact]
        public void GetState()
        {
            foreach (var (key, state) in _prestoredValues)
            {
                Assert.Equal(
                    state,
                    _stateStore.GetState(key, _prestoredBlockHash));
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
            while (!randomBlockHash.Equals(_prestoredBlockHash));

            Assert.False(_stateStore.ExistsBlockState(randomBlockHash));
            Assert.True(_stateStore.ExistsBlockState(_prestoredBlockHash));
        }
    }
}
