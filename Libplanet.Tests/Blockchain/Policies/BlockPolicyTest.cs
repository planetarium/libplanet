using System;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tests.Store.Trie;
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
        private IStagePolicy<DumbAction> _stagePolicy;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _fx = new DefaultStoreFixture();
            _output = output;
            _policy = new BlockPolicy<DumbAction>(
                blockAction: null,
                blockIntervalMilliseconds: 3 * 60 * 60 * 1000
            );
            _stagePolicy = new VolatileStagePolicy<DumbAction>();
            _chain = new BlockChain<DumbAction>(
                _policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<DumbAction>(
                blockAction: null,
                blockInterval: tenSec,
                minimumDifficulty: 1024L,
                difficultyBoundDivisor: 128,
                maxTransactionsPerBlock: 100,
                maxBlockBytes: 100 * 1024,
                maxGenesisBytes: 1024 * 1024
            );
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<DumbAction>(null, 65000);
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval);

            var c = new BlockPolicy<DumbAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval);

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(
                    blockAction: null,
                    blockInterval: tenSec.Negate(),
                    minimumDifficulty: 1024,
                    difficultyBoundDivisor: 128,
                    maxTransactionsPerBlock: 100,
                    maxBlockBytes: 100 * 1024,
                    maxGenesisBytes: 1024 * 1024
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(
                () => new BlockPolicy<DumbAction>(null, -5));

            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(
                    blockAction: null,
                    blockInterval: tenSec,
                    minimumDifficulty: 0,
                    difficultyBoundDivisor: 128,
                    maxTransactionsPerBlock: 100,
                    maxBlockBytes: 100 * 1024,
                    maxGenesisBytes: 1024 * 1024
                )
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                new BlockPolicy<DumbAction>(
                    blockAction: null,
                    blockInterval: tenSec,
                    minimumDifficulty: 1024,
                    difficultyBoundDivisor: 1024,
                    maxTransactionsPerBlock: 100,
                    maxBlockBytes: 100 * 1024,
                    maxGenesisBytes: 1024 * 1024
                )
            );
        }

        [Fact]
        public void DoesTransactionFollowPolicy()
        {
            var validKey = new PrivateKey();

            bool IsSignerValid(Transaction<DumbAction> tx, BlockChain<DumbAction> chain)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress);
            }

            var policy = new BlockPolicy<DumbAction>(doesTransactionFollowPolicy: IsSignerValid);

            // Valid Transaction
            var validTx = _chain.MakeTransaction(validKey, new DumbAction[] { });
            var expected = policy.DoesTransactionFollowsPolicy(validTx, _chain);
            Assert.True(expected);

            // Invalid Transaction
            var invalidKey = new PrivateKey();
            var invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            expected = policy.DoesTransactionFollowsPolicy(invalidTx, _chain);
            Assert.False(expected);
        }

        [Fact]
        public async Task GetNextBlockDifficulty()
        {
            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            var dateTimeOffset = FixtureEpoch;
            var chain =
                TestUtils.MakeBlockChain(_policy, store, stateStore, timestamp: dateTimeOffset);
            var address = _fx.Address1;
            Assert.Equal(
                1024,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(1);
            await chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1032,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(3);
            await chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(7);
            await chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(9);
            await chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(13);
            await chain.MineBlock(address, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(chain)
            );
        }
    }
}
