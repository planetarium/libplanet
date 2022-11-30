using System;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
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
        private IStagePolicy<DumbAction> _stagePolicy;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _fx = new MemoryStoreFixture();
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
                    : new TxPolicyViolationException("invalid signer", tx.Id);
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
        public void ValidateNextBlockTxWithInnerException()
        {
            var validKey = new PrivateKey();
            var invalidKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            //Invalid Transaction with inner-exception
            TxPolicyViolationException IsSignerValidWithInnerException(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException(
                        "invalid signer",
                        tx.Id,
                        new InvalidTxSignatureException("Invalid Signature", tx.Id));
            }

            // Invalid Transaction without Inner-exception
            var policy = new BlockPolicy<DumbAction>(
                validateNextBlockTx: IsSignerValid);

            var invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            var expected = policy.ValidateNextBlockTx(_chain, invalidTx);
            Assert.NotNull(expected);
            Assert.Null(expected.InnerException);

            // Invalid Transaction with Inner-exception.
            policy = new BlockPolicy<DumbAction>(
                validateNextBlockTx: IsSignerValidWithInnerException);

            invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            expected = policy.ValidateNextBlockTx(_chain, invalidTx);
            Assert.NotNull(expected);
            Assert.NotNull(expected.InnerException);
        }

        [SkippableFact]
        public async Task GetNextBlockDifficulty()
        {
            Skip.IfNot(
                Environment.GetEnvironmentVariable("XUNIT_UNITY_RUNNER") is null,
                "Flaky test : Libplanet.Blocks.InvalidBlockSignatureException"
            );

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var dateTimeOffset = FixtureEpoch;
            var chain =
                TestUtils.MakeBlockChain(_policy, store, stateStore, timestamp: dateTimeOffset);
            var miner = new PrivateKey();
            Assert.Equal(
                1024,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(1);
            await chain.MineBlock(miner, dateTimeOffset);

            Assert.Equal(
                1032,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(3);
            await chain.MineBlock(miner, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(7);
            await chain.MineBlock(miner, dateTimeOffset);

            Assert.Equal(
                1040,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(9);
            await chain.MineBlock(miner, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(chain)
            );
            dateTimeOffset = FixtureEpoch + TimeSpan.FromHours(13);
            await chain.MineBlock(miner, dateTimeOffset);

            Assert.Equal(
                1048,
                _policy.GetNextBlockDifficulty(chain)
            );
        }

        [Fact]
        public async Task GetMinTransactionsPerBlock()
        {
            const int policyLimit = 2;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var policy = new BlockPolicy<DumbAction>(
                blockAction: new MinerReward(1),
                getMinTransactionsPerBlock: index => index == 0 ? 0 : policyLimit);
            var privateKey = new PrivateKey();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore);

            _ = chain.MakeTransaction(privateKey, new DumbAction[] { });
            Assert.Single(chain.ListStagedTransactions());

            // Tests if MineBlock() method will throw an exception if less than the minimum
            // transactions are present
            await Assert.ThrowsAsync<OperationCanceledException>(
                async () => await chain.MineBlock(new PrivateKey()));
        }

        [Fact]
        public async Task GetMaxTransactionsPerBlock()
        {
            const int generatedTxCount = 10;
            const int policyLimit = 2;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var policy = new BlockPolicy<DumbAction>(
                getMaxTransactionsPerBlock: _ => policyLimit);
            var privateKey = new PrivateKey();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore);

            _ = Enumerable
                    .Range(0, generatedTxCount)
                    .Select(_ => chain.MakeTransaction(privateKey, new DumbAction[] { }))
                    .ToList();
            Assert.Equal(generatedTxCount, chain.ListStagedTransactions().Count);

            var block = await chain.MineBlock(privateKey);
            Assert.Equal(policyLimit, block.Transactions.Count);
        }

        [Fact]
        public async Task GetMaxTransactionsPerSignerPerBlock()
        {
            const int keyCount = 2;
            const int generatedTxCount = 10;
            const int policyLimit = 2;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var policy = new BlockPolicy<DumbAction>(
                getMaxTransactionsPerSignerPerBlock: _ => policyLimit);
            var privateKeys = Enumerable.Range(0, keyCount).Select(_ => new PrivateKey()).ToList();
            var minerKey = privateKeys.First();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore);

            privateKeys.ForEach(
                key => _ = Enumerable
                    .Range(0, generatedTxCount)
                    .Select(_ => chain.MakeTransaction(key, new DumbAction[] { }))
                    .ToList());
            Assert.Equal(generatedTxCount * keyCount, chain.ListStagedTransactions().Count);

            var block = await chain.MineBlock(minerKey);
            Assert.Equal(policyLimit * keyCount, block.Transactions.Count);
            privateKeys.ForEach(
                key => Assert.Equal(
                    policyLimit,
                    block.Transactions.Count(tx => tx.Signer.Equals(key.ToAddress()))));
        }

        [Fact]
        public async void GetMinBlockProtocolVersion()
        {
            var policy = new BlockPolicy<DumbAction>(
                getMinBlockProtocolVersion: index => index <= 1 ? 0 : 4);
            var chain = new BlockChain<DumbAction>(
                policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            var block1 = await chain.MineBlock(new PrivateKey(), append: false);
            Assert.Equal(1, block1.Index);
            Assert.Equal(0, policy.GetMinBlockProtocolVersion(block1.Index));
            chain.Append(block1);

            var block2 = await chain.MineBlock(new PrivateKey(), append: false);
            Assert.Equal(2, block2.Index);
            Assert.Equal(4, policy.GetMinBlockProtocolVersion(block2.Index));
            Assert.Throws<BlockPolicyViolationException>(() => chain.Append(block2));
            await Assert.ThrowsAsync<BlockPolicyViolationException>(
                async () => await chain.MineBlock(new PrivateKey()));
        }
    }
}
