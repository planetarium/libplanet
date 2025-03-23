using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Action.State.KeyConverters;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Action
{
    public partial class ActionEvaluatorTest
    {
        [Theory]
        [InlineData(false, 1, 1)]
        [InlineData(true, 1, 0)]
        public void Evaluate_WithGasTracer(
            bool cancelTrace, long goldAmount, long expectedGoldAmount)
        {
            var gold = Currency.Uncapped("FOO", 18, null);
            var gas = Currency.Uncapped("GAS", 18, null);
            var privateKey = new PrivateKey();
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray<IAction>.Empty,
                    beginTxActions: ImmutableArray.Create<IAction>(
                        new GasTraceAction() { CancelTrace = cancelTrace }),
                    endTxActions: ImmutableArray<IAction>.Empty),
                getMaxTransactionsBytes: _ => 50 * 1024);

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: policy,
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)));
            var action = new UseGasAction
            {
                GasUsage = 10,
                MintValue = gold * goldAmount,
                Receiver = privateKey.Address,
                Memo = string.Empty,
            };

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues(),
                maxGasPrice: gas * 10,
                gasLimit: 10);
            var expectedGold = gold * expectedGoldAmount;

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);
            chain.Append(block, CreateBlockCommit(block));
            var evaluations = chain.ActionEvaluator.Evaluate(
                block, chain.GetNextStateRootHash(block.PreviousHash) ?? default);

            var actualGold = chain.GetNextWorldState().GetBalance(privateKey.Address, gold);

            Assert.Equal(expectedGold, actualGold);
        }

        [Fact]
        public void Evaluate_CancelTrace_BeginBlockAction_Throw()
        {
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray.Create<IAction>(
                        new GasTraceAction() { CancelTrace = true }),
                    endBlockActions: ImmutableArray<IAction>.Empty,
                    beginTxActions: ImmutableArray<IAction>.Empty,
                    endTxActions: ImmutableArray<IAction>.Empty),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var evaluations = Evaluate_CancelTrace(policy);
            var exception = (UnexpectedlyTerminatedActionException)evaluations[0].Exception;

            Assert.IsType<GasTraceAction>(exception.Action);
            Assert.IsType<InvalidOperationException>(exception.InnerException);
            Assert.Equal(
                "CancelTrace can only be called in TxAction.", exception.InnerException.Message);
        }

        [Fact]
        public void Evaluate_CancelTrace_EndBlockAction_Throw()
        {
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray.Create<IAction>(
                        new GasTraceAction() { CancelTrace = true }),
                    beginTxActions: ImmutableArray<IAction>.Empty,
                    endTxActions: ImmutableArray<IAction>.Empty),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var evaluations = Evaluate_CancelTrace(policy);
            var exception = (UnexpectedlyTerminatedActionException)evaluations[1].Exception;

            Assert.IsType<GasTraceAction>(exception.Action);
            Assert.IsType<InvalidOperationException>(exception.InnerException);
            Assert.Equal(
                "CancelTrace can only be called in TxAction.", exception.InnerException.Message);
        }

        [Fact]
        public void Evaluate_CancelTrace_EndTxAction_Throw()
        {
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray<IAction>.Empty,
                    beginTxActions: ImmutableArray<IAction>.Empty,
                    endTxActions: ImmutableArray.Create<IAction>(
                        new GasTraceAction() { CancelTrace = true })),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var evaluations = Evaluate_CancelTrace(policy);
            var exception = (UnexpectedlyTerminatedActionException)evaluations[1].Exception;

            Assert.IsType<GasTraceAction>(exception.Action);
            Assert.IsType<InvalidOperationException>(exception.InnerException);
            Assert.Equal(
                "CancelTrace can only be called in TxAction.", exception.InnerException.Message);
        }

        [Fact]
        public void Evaluate_CancelTrace_Action_Throw()
        {
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(
                    beginBlockActions: ImmutableArray<IAction>.Empty,
                    endBlockActions: ImmutableArray<IAction>.Empty,
                    beginTxActions: ImmutableArray<IAction>.Empty,
                    endTxActions: ImmutableArray<IAction>.Empty),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var gold = Currency.Uncapped("FOO", 18, null);
            var gas = Currency.Uncapped("GAS", 18, null);
            var privateKey = new PrivateKey();

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: policy,
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(GasTraceAction)));
            var action = new GasTraceAction
            {
                CancelTrace = true,
            };

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues(),
                maxGasPrice: gas * 10,
                gasLimit: 10);

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);
            chain.Append(block, CreateBlockCommit(block));
            var evaluations = chain.ActionEvaluator.Evaluate(
                block, chain.GetNextStateRootHash(block.PreviousHash) ?? default);
            var exception = (UnexpectedlyTerminatedActionException)evaluations[0].Exception;

            Assert.IsType<GasTraceAction>(exception.Action);
            Assert.IsType<InvalidOperationException>(exception.InnerException);
            Assert.Equal(
                "CancelTrace can only be called in TxAction.", exception.InnerException.Message);
        }

        private IReadOnlyList<ICommittedActionEvaluation> Evaluate_CancelTrace(BlockPolicy policy)
        {
            var gold = Currency.Uncapped("FOO", 18, null);
            var gas = Currency.Uncapped("GAS", 18, null);
            var privateKey = new PrivateKey();

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: policy,
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)));
            var action = new UseGasAction
            {
                GasUsage = 10,
                MintValue = gold * 10,
                Receiver = privateKey.Address,
                Memo = string.Empty,
            };

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues(),
                maxGasPrice: gas * 10,
                gasLimit: 10);

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);
            chain.Append(block, CreateBlockCommit(block));
            return chain.ActionEvaluator.Evaluate(
                block, chain.GetNextStateRootHash(block.PreviousHash) ?? default);
        }

        private sealed class GasTraceAction : IAction
        {
            public bool CancelTrace { get; set; }

            public IValue PlainValue => new List(
                (Bencodex.Types.Boolean)CancelTrace);

            public void LoadPlainValue(IValue plainValue)
            {
                var list = (List)plainValue;
                CancelTrace = (Bencodex.Types.Boolean)list[0];
            }

            public IWorld Execute(IActionContext context)
            {
                if (CancelTrace)
                {
                    GasTracer.CancelTrace();
                }

                return context.PreviousState;
            }
        }
    }
}
