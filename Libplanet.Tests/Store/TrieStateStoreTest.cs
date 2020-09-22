using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void SetStates(bool secure)
        {
            var stateStore = MakeTrieStateStoreFixture(secure);
            // Check to set and to get.
            Assert.Throws<KeyNotFoundException>(() => stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.False(stateStore.ContainsBlockStates(_fx.Block1.Hash));
            var states = ImmutableDictionary<string, IValue>.Empty
                .Add("foo", (Text)"value");
            stateStore.SetStates(_fx.Block1, states);
            Assert.Equal((Text)"value", stateStore.GetState("foo", _fx.Block1.Hash));
            Assert.IsType<HashDigest<SHA256>>(stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.True(stateStore.ContainsBlockStates(_fx.Block1.Hash));

            stateStore.SetStates(_fx.Block2, _prestoredValues);

            // Check same states have same state hash.
            Assert.NotEqual(
                stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                stateStore.GetRootHash(_fx.Block1.Hash));
            Assert.Equal(
                stateStore.GetRootHash(_fx.GenesisBlock.Hash),
                stateStore.GetRootHash(_fx.Block2.Hash));
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void GetState(bool secure)
        {
            var stateStore = MakeTrieStateStoreFixture(secure);
            foreach (var pair in _prestoredValues)
            {
                Assert.Equal(
                    pair.Value,
                    stateStore.GetState(pair.Key, _fx.GenesisBlock.Hash));
            }
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void ExistsBlockState(bool secure)
        {
            var stateStore = MakeTrieStateStoreFixture(secure);
            HashDigest<SHA256> randomBlockHash;
            do
            {
                randomBlockHash =
                    new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            }
            while (randomBlockHash.Equals(_fx.GenesisBlock.Hash));

            Assert.False(stateStore.ContainsBlockStates(randomBlockHash));
            Assert.True(stateStore.ContainsBlockStates(_fx.GenesisBlock.Hash));
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void PruneStates(bool secure)
        {
            var stateStore = MakeTrieStateStoreFixture(secure);
            int prevStateHashesCount = _stateHashKeyValueStore.ListKeys().Count(),
                prevStatesCount = _stateKeyValueStore.ListKeys().Count();
            var nextStates = _prestoredValues.SetItem("foo", (Binary)TestUtils.GetRandomBytes(32));
            stateStore.SetStates(_fx.Block1, nextStates);

            // Hash of _fx.Block1
            Assert.Equal(prevStateHashesCount + 1, _stateHashKeyValueStore.ListKeys().Count());
            // foo = 0x666f6f
            // updated branch node (0x6, aka root) + updated branch node (0x66) +
            // updated short node + new value node
            Assert.Equal(prevStatesCount + 4, _stateKeyValueStore.ListKeys().Count());

            stateStore.PruneStates(
                ImmutableHashSet<HashDigest<SHA256>>.Empty.Add(_fx.Block1.Hash));
            Assert.Single(_stateHashKeyValueStore.ListKeys());
            // It will stay at the same count of nodes.
            Assert.Equal(prevStatesCount, _stateKeyValueStore.ListKeys().Count());
        }

        private TrieStateStore MakeTrieStateStoreFixture(bool secure)
        {
            var stateStore = new TrieStateStore(
                _stateKeyValueStore, _stateHashKeyValueStore, secure);
            stateStore.SetStates(_fx.GenesisBlock, _prestoredValues);
            return stateStore;
        }
    }
}
