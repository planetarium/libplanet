using System;
using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class BlockSetTest : IDisposable
    {
        private readonly StoreFixture _fx;
        private readonly BlockSet<DumbAction> _set;

        public BlockSetTest()
        {
            _fx = new MemoryStoreFixture();
            _set = new BlockSet<DumbAction>(_fx.Store);
        }

        [Fact]
        public void CanStoreItem()
        {
            _set[_fx.Block1.Hash] = _fx.Block1;
            Assert.Equal(_set[_fx.Block1.Hash], _fx.Block1);
        }

        [Fact]
        public void CanIterateItems()
        {
            Assert.Empty(_set);
            Assert.Empty(_set.Keys);
            Assert.Empty(_set.Values);
            _set[_fx.Block1.Hash] = _fx.Block1;
            _set[_fx.Block2.Hash] = _fx.Block2;
            _set[_fx.Block3.Hash] = _fx.Block3;

            Assert.Equal(
                new HashSet<BlockHash>()
                {
                    _fx.Block1.Hash,
                    _fx.Block2.Hash,
                    _fx.Block3.Hash,
                },
                _set.Keys.ToHashSet());

            Assert.Equal(
                new HashSet<Block<DumbAction>>()
                {
                    _fx.Block1,
                    _fx.Block2,
                    _fx.Block3,
                },
                _set.Values.ToHashSet());
        }

        [Fact]
        public void CanCountItem()
        {
            Assert.Equal(0, _set.Count);

            _set[_fx.Block1.Hash] = _fx.Block1;
            Assert.Equal(1, _set.Count);

            _set[_fx.Block2.Hash] = _fx.Block2;
            _set[_fx.Block3.Hash] = _fx.Block3;
            Assert.Equal(3, _set.Count);
        }

        [Fact]
        public void CanDetectInvalidHash()
        {
            Assert.Throws<InvalidBlockHashException>(
                () => _set[_fx.Block1.Hash] = _fx.Block2);
        }

        [Fact]
        public void CanCheckContainsKey()
        {
            Assert.False(_set.ContainsKey(_fx.Block1.Hash));
            Assert.False(_set.ContainsKey(_fx.Block2.Hash));

            _set[_fx.Block1.Hash] = _fx.Block1;

            Assert.True(_set.ContainsKey(_fx.Block1.Hash));
            Assert.False(_set.ContainsKey(_fx.Block2.Hash));
        }

        [Fact]
        public void CanRemoveItem()
        {
            Assert.False(_set.Remove(_fx.Block1.Hash));
            _set[_fx.Block1.Hash] = _fx.Block1;
            Assert.True(_set.Remove(_fx.Block1.Hash));
            Assert.Throws<KeyNotFoundException>(() => { var val = _set[_fx.Block1.Hash]; });
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
