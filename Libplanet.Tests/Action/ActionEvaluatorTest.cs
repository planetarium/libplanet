using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store.Trie;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluatorTest
    {
        [Fact]
        public void Idempotent()
        {
            // NOTE: This test checks that blocks can be evaluated idempotently. Also it checks
            // the action results in pre-evaluation step and in evaluation step are equal.
            const int repeatCount = 2;
            var signer = new PrivateKey();
            Address address = signer.ToAddress();
            var timestamp = DateTimeOffset.UtcNow;
            var txs = new[]
            {
                Transaction<RandomAction>.Create(
                    0,
                    signer,
                    null,
                    new[] { new RandomAction(address), }),
            };
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            Block<RandomAction> noStateRootBlock = TestUtils.MineGenesis(
                timestamp: timestamp,
                transactions: txs);
            Block<RandomAction> stateRootBlock = TestUtils.MineGenesis(
                timestamp: timestamp,
                transactions: txs).AttachStateRootHash(stateStore, null);
            var actionEvaluator =
                new ActionEvaluator<RandomAction>(null, NullStateGetter, NullBalanceGetter, null);
            var generatedRandomNumbers = new List<int>();

            Assert.NotEqual(stateRootBlock.Hash, noStateRootBlock.Hash);
            Assert.Equal(stateRootBlock.PreEvaluationHash, noStateRootBlock.PreEvaluationHash);

            for (int i = 0; i < repeatCount; ++i)
            {
                var actionEvaluations = actionEvaluator.Evaluate(
                    noStateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(address));
                actionEvaluations = actionEvaluator.Evaluate(
                    stateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(address));
            }

            for (int i = 1; i < generatedRandomNumbers.Count; ++i)
            {
                Assert.Equal(generatedRandomNumbers[0], generatedRandomNumbers[i]);
            }
        }

        private IValue NullStateGetter<T>(
            Address address,
            BlockHash? hashDigest,
            StateCompleter<T> stateCompleter)
            where T : IAction, new() => null;

        private FungibleAssetValue NullBalanceGetter<T>(
            Address address,
            Currency currency,
            BlockHash? hashDigest,
            FungibleAssetStateCompleter<T> fungibleAssetStateCompleter)
            where T : IAction, new() => new FungibleAssetValue(currency);
    }
}
