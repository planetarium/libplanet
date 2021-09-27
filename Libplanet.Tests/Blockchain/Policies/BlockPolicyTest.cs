using System;
using System.Security.Cryptography;
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
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
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
        public void DifficultyAdjustment()
        {
            TimeSpan defaultInterval =
                DifficultyAdjustment<DumbAction>.DefaultTargetBlockInterval;
            long defaultStability =
                DifficultyAdjustment<DumbAction>.DefaultDifficultyStability;
            long defaultMinimum =
                DifficultyAdjustment<DumbAction>.DefaultMinimumDifficulty;

            // Should work with defaults.
            DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                defaultInterval,
                defaultStability,
                defaultMinimum);

            // Negative block interval.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                    TimeSpan.FromMilliseconds(-5),
                    defaultStability,
                    defaultMinimum));

            // Zero block interval.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                    TimeSpan.FromMilliseconds(0),
                    defaultStability,
                    defaultMinimum));

            // Invalid stability due to being too low.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                    defaultInterval,
                    0,
                    defaultMinimum));

            // Stability being equal to minimum difficulty should be fine.
            DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                defaultInterval,
                defaultMinimum,
                defaultMinimum);

            // Invalid stability in relation to minimum difficulty for stability being too high.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                    defaultInterval,
                    defaultMinimum + 1,
                    defaultMinimum));

            // Invalid minimum difficulty for being too low.
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                DifficultyAdjustment<DumbAction>.AlgorithmFactory(
                    defaultInterval,
                    defaultStability,
                    0));
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy<DumbAction>(
                blockAction: null,
                blockInterval: tenSec,
                difficultyStability: 128,
                minimumDifficulty: 1024L);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy<DumbAction>(
                blockInterval: TimeSpan.FromMilliseconds(65000));
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval);

            var c = new BlockPolicy<DumbAction>();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval);
        }

        [Fact]
        public void ValidateNextBlockTx()
        {
            var validKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException(tx.Id, "invalid signer");
            }

            var policy = new BlockPolicy<DumbAction>(validateNextBlockTx: IsSignerValid);

            // Valid Transaction
            var validTx = _chain.MakeTransaction(validKey, new DumbAction[] { });
            var expected = policy.ValidateNextBlockTx(_chain, validTx);
            Assert.Null(expected);

            // Invalid Transaction
            var invalidKey = new PrivateKey();
            var invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            expected = policy.ValidateNextBlockTx(_chain, invalidTx);
            Assert.NotNull(expected);
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

        [Fact]
        public void GetHashAlgorithm()
        {
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), _policy.GetHashAlgorithm(0));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), _policy.GetHashAlgorithm(1));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), _policy.GetHashAlgorithm(2));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), _policy.GetHashAlgorithm(10));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), _policy.GetHashAlgorithm(15));

            var p = new BlockPolicy<DumbAction>(hashAlgorithmGetter: i =>
                i % 2 == 0 ? HashAlgorithmType.Of<MD5>() : HashAlgorithmType.Of<SHA1>()
            );
            Assert.Equal(HashAlgorithmType.Of<MD5>(), p.GetHashAlgorithm(0));
            Assert.Equal(HashAlgorithmType.Of<SHA1>(), p.GetHashAlgorithm(1));
            Assert.Equal(HashAlgorithmType.Of<MD5>(), p.GetHashAlgorithm(2));
            Assert.Equal(HashAlgorithmType.Of<MD5>(), p.GetHashAlgorithm(10));
            Assert.Equal(HashAlgorithmType.Of<SHA1>(), p.GetHashAlgorithm(15));
        }
    }
}
