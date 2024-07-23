using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;
using Libplanet.Types.Tx;
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
        private BlockChain _chain;
        private IBlockPolicy _policy;
        private IStagePolicy _stagePolicy;

        public BlockPolicyTest(ITestOutputHelper output)
        {
            _fx = new MemoryStoreFixture();
            _output = output;
            _policy = new BlockPolicy(
                new PolicyActionsRegistry(),
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000));
            _stagePolicy = new VolatileStagePolicy();
            _chain = BlockChain.Create(
                _policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                new ActionEvaluator(
                    _policy.PolicyActionsRegistry,
                    stateStore: _fx.StateStore,
                    actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public void Constructors()
        {
            var tenSec = new TimeSpan(0, 0, 10);
            var a = new BlockPolicy(
                new PolicyActionsRegistry(),
                blockInterval: tenSec);
            Assert.Equal(tenSec, a.BlockInterval);

            var b = new BlockPolicy(
                blockInterval: TimeSpan.FromMilliseconds(65000));
            Assert.Equal(
                new TimeSpan(0, 1, 5),
                b.BlockInterval);

            var c = new BlockPolicy();
            Assert.Equal(
                new TimeSpan(0, 0, 5),
                c.BlockInterval);
        }

        [Fact]
        public void ValidateNextBlockTx()
        {
            var validKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy(validateNextBlockTx: IsSignerValid);

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
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            //Invalid Transaction with inner-exception
            TxPolicyViolationException IsSignerValidWithInnerException(
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException(
                        "invalid signer",
                        tx.Id,
                        new InvalidTxSignatureException("Invalid Signature", tx.Id));
            }

            // Invalid Transaction without Inner-exception
            var policy = new BlockPolicy(
                validateNextBlockTx: IsSignerValid);

            var invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            var expected = policy.ValidateNextBlockTx(_chain, invalidTx);
            Assert.NotNull(expected);
            Assert.Null(expected.InnerException);

            // Invalid Transaction with Inner-exception.
            policy = new BlockPolicy(
                validateNextBlockTx: IsSignerValidWithInnerException);

            invalidTx = _chain.MakeTransaction(invalidKey, new DumbAction[] { });
            expected = policy.ValidateNextBlockTx(_chain, invalidTx);
            Assert.NotNull(expected);
            Assert.NotNull(expected.InnerException);
        }

        [Fact]
        public void GetMinTransactionsPerBlock()
        {
            const int policyLimit = 2;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionLoader = new SingleActionLoader(typeof(DumbAction));
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    endBlockActions: ImmutableArray.Create<IAction>(new MinerReward(1))),
                getMinTransactionsPerBlock: index => index == 0 ? 0 : policyLimit);
            var privateKey = new PrivateKey();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore, actionLoader);

            _ = chain.MakeTransaction(privateKey, new DumbAction[] { });
            Assert.Single(chain.ListStagedTransactions());

            // Tests if MineBlock() method will throw an exception if less than the minimum
            // transactions are present
            Assert.Throws<OperationCanceledException>(
                () => chain.ProposeBlock(new PrivateKey()));
        }

        [Fact]
        public void GetMaxTransactionsPerBlock()
        {
            const int generatedTxCount = 10;
            const int policyLimit = 5;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionLoader = new SingleActionLoader(typeof(DumbAction));
            var policy = new BlockPolicy(
                getMaxTransactionsPerBlock: _ => policyLimit);
            var privateKey = new PrivateKey();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore, actionLoader);

            _ = Enumerable
                    .Range(0, generatedTxCount)
                    .Select(_ => chain.MakeTransaction(privateKey, new DumbAction[] { }))
                    .ToList();
            Assert.Equal(generatedTxCount, chain.ListStagedTransactions().Count);

            var block = chain.ProposeBlock(privateKey);
            Assert.Equal(policyLimit, block.Transactions.Count);
        }

        [Fact]
        public void GetMaxTransactionsPerSignerPerBlock()
        {
            const int keyCount = 2;
            const int generatedTxCount = 10;
            const int policyLimit = 4;

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionLoader = new SingleActionLoader(typeof(DumbAction));
            var policy = new BlockPolicy(
                getMaxTransactionsPerSignerPerBlock: _ => policyLimit);
            var privateKeys = Enumerable.Range(0, keyCount).Select(_ => new PrivateKey()).ToList();
            var minerKey = privateKeys.First();
            var chain = TestUtils.MakeBlockChain(policy, store, stateStore, actionLoader);

            privateKeys.ForEach(
                key => _ = Enumerable
                    .Range(0, generatedTxCount)
                    .Select(_ => chain.MakeTransaction(key, new DumbAction[] { }))
                    .ToList());
            Assert.Equal(generatedTxCount * keyCount, chain.ListStagedTransactions().Count);

            var block = chain.ProposeBlock(minerKey);
            Assert.Equal(policyLimit * keyCount, block.Transactions.Count);
            privateKeys.ForEach(
                key => Assert.Equal(
                    policyLimit,
                    block.Transactions.Count(tx => tx.Signer.Equals(key.Address))));
        }
    }
}
