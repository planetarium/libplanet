using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class BlockPolicyTest : IDisposable
    {
        private static readonly DateTimeOffset FixtureEpoch =
            new DateTimeOffset(2018, 1, 1, 0, 0, 0, TimeSpan.Zero);

        private readonly ITestOutputHelper _output;

        private StoreFixture _fx;
        private BlockChain<DumbAction> _chain;
        private IBlockPolicy<DumbAction> _policy;
        private List<Transaction<DumbAction>> _emptyTransaction;
        private Block<DumbAction> _genesis;
        private Block<DumbAction> _validNext;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _fx = new DefaultStoreFixture();
            _output = output;
            _policy = new BlockPolicy<DumbAction>(
                null,
                TimeSpan.FromHours(3),
                1024,
                128);
            _chain = new BlockChain<DumbAction>(_policy, _fx.Store);
            _emptyTransaction = new List<Transaction<DumbAction>>();
            _genesis = TestUtils.MineGenesis<DumbAction>();
            _validNext = Block<DumbAction>.Mine(
                1,
                1024,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddSeconds(1),
                _emptyTransaction);
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<DumbAction>(null, tenSec, 1024, 128);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<DumbAction>(null, 65000);
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval);

            var c = new BlockPolicy<DumbAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval);

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(null, tenSec.Negate(), 1024, 128));
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(null, -5));

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(null, tenSec, 0, 128));
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(null, tenSec, 1024, 1024));
        }

        [Fact]
        public async Task GetNextBlockDifficulty()
        {
            var dateTimeOffset = FixtureEpoch;
            var address = _fx.Address1;

            Assert.Equal(
                0,
                _policy.GetNextBlockDifficulty(_chain)
            );
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1024,
                _policy.GetNextBlockDifficulty(_chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(1);
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1032,
                _policy.GetNextBlockDifficulty(_chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(3);
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(_chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(7);
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(_chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(9);
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(_chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(13);
            await _chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(_chain)
            );
        }

        [Fact]
        public void ValidateNextBlock()
        {
            _policy.ValidateNextBlock(_chain, _genesis);
            _chain.Append(_genesis);

            var validNextBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _genesis.Hash,
                _genesis.Timestamp.AddDays(1),
                _emptyTransaction);
            _policy.ValidateNextBlock(_chain, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockGenesis()
        {
            var validGenesis = TestUtils.MineGenesis<DumbAction>();
            Assert.Null(
                _policy.ValidateNextBlock(_chain, validGenesis));

            var invalidIndexGenesis = TestUtils.MineNext(validGenesis);
            Assert.IsType<InvalidBlockIndexException>(
                _policy.ValidateNextBlock(_chain, invalidIndexGenesis));

            var invalidPreviousHashGenesis = new Block<DumbAction>(
                 0,
                 0,
                 new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                 _genesis.Miner,
                 new HashDigest<SHA256>(new byte[32]),
                 _genesis.Timestamp,
                 _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                _policy.ValidateNextBlock(
                    _chain,
                    invalidPreviousHashGenesis));
        }

        [Fact]
        public void ValidateNextBlockInvalidIndex()
        {
            _chain.Append(_genesis);
            _chain.Append(_validNext);

            var invalidIndexBlock = Block<DumbAction>.Mine(
                1,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockIndexException>(
                _policy.ValidateNextBlock(_chain, invalidIndexBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidDifficulty()
        {
            _chain.Append(_genesis);
            _chain.Append(_validNext);

            var invalidDifficultyBlock = Block<DumbAction>.Mine(
                2,
                1,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockDifficultyException>(
                _policy.ValidateNextBlock(
                    _chain,
                    invalidDifficultyBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidPreviousHash()
        {
            _chain.Append(_genesis);
            _chain.Append(_validNext);

            var invalidPreviousHashBlock = Block<DumbAction>.Mine(
                2,
                1032,
                _genesis.Miner.Value,
                new HashDigest<SHA256>(new byte[32]),
                _validNext.Timestamp.AddSeconds(1),
                _emptyTransaction);
            Assert.IsType<InvalidBlockPreviousHashException>(
                _policy.ValidateNextBlock(
                    _chain,
                    invalidPreviousHashBlock));
        }

        [Fact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _chain.Append(_genesis);
            _chain.Append(_validNext);

            var invalidPreviousTimestamp = Block<DumbAction>.Mine(
                2,
                1032,
                _genesis.Miner.Value,
                _validNext.Hash,
                _validNext.Timestamp.Subtract(TimeSpan.FromSeconds(1)),
                _emptyTransaction);
            Assert.IsType<InvalidBlockTimestampException>(
                _policy.ValidateNextBlock(
                    _chain,
                    invalidPreviousTimestamp));
        }
    }
}
