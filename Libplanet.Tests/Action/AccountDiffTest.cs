using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class AccountDiffTest
    {
        public AccountDiffTest()
        {
            USD = Currency.Uncapped("USD", 2, null);
            KRW = Currency.Uncapped("KRW", 0, null);
            JPY = Currency.Uncapped("JPY", 0, null);
        }

        public Currency USD { get; }

        public Currency KRW { get; }

        public Currency JPY { get; }

        [Fact]
        public void EmptyAccountStateSource()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie targetTrie = stateStore.GetStateRoot(null);
            ITrie sourceTrie = stateStore.GetStateRoot(null);

            AccountDiff diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Empty(diff.StateDiffs);
            Assert.Empty(diff.FungibleAssetValueDiffs);
            Assert.Empty(diff.TotalSupplyDiffs);
            Assert.Null(diff.ValidatorSetDiff);

            IAccount targetAccount = new Account(new AccountState(targetTrie));
            PrivateKey signer = new PrivateKey();
            IActionContext context = CreateActionContext(signer.Address, targetTrie);
            targetAccount = targetAccount.MintAsset(
                context, signer.Address, new FungibleAssetValue(USD, 123, 45));
            targetAccount = targetAccount.SetState(signer.Address, new Text("Foo"));

            targetTrie = stateStore.Commit(targetAccount.Trie);

            diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Empty(diff.StateDiffs);
            Assert.Empty(diff.FungibleAssetValueDiffs);
            Assert.Empty(diff.TotalSupplyDiffs);
            Assert.Null(diff.ValidatorSetDiff);
        }

        [Fact]
        public void Diff()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie targetTrie = stateStore.GetStateRoot(null);
            ITrie sourceTrie = stateStore.GetStateRoot(null);

            Address addr1 = new Address(TestUtils.GetRandomBytes(Address.Size));
            Address addr2 = new Address(TestUtils.GetRandomBytes(Address.Size));
            Address addr3 = new Address(TestUtils.GetRandomBytes(Address.Size));

            AccountDiff diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Empty(diff.StateDiffs);
            Assert.Empty(diff.FungibleAssetValueDiffs);
            Assert.Empty(diff.TotalSupplyDiffs);
            Assert.Null(diff.ValidatorSetDiff);

            IAccount targetAccount = new Account(new AccountState(targetTrie));
            PrivateKey signer = new PrivateKey();
            IActionContext context = CreateActionContext(signer.Address, targetTrie);
            targetAccount = targetAccount.SetState(addr1, new Text("One"));
            targetAccount = targetAccount.SetState(addr2, new Text("Two"));
            targetAccount = targetAccount.MintAsset(
                context, signer.Address, new FungibleAssetValue(USD, 123, 45));
            targetTrie = stateStore.Commit(targetAccount.Trie);

            sourceTrie = targetTrie;

            IAccount sourceAccount = new Account(new AccountState(sourceTrie));
            sourceAccount = sourceAccount.SetState(addr2, new Text("Two_"));
            sourceAccount = sourceAccount.SetState(addr3, new Text("Three"));
            sourceAccount = sourceAccount.MintAsset(
                context, signer.Address, new FungibleAssetValue(USD, 456, 78));
            sourceAccount = sourceAccount.MintAsset(
                context, signer.Address, new FungibleAssetValue(KRW, 10, 0));
            sourceAccount = sourceAccount.BurnAsset(
                context, signer.Address, new FungibleAssetValue(KRW, 10, 0));
            sourceAccount = sourceAccount.MintAsset(
                context, signer.Address, new FungibleAssetValue(JPY, 321, 0));
            sourceAccount = sourceAccount.SetValidator(new Validator(signer.PublicKey, 1));

            sourceTrie = stateStore.Commit(sourceAccount.Trie);

            diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Equal(2, diff.StateDiffs.Count);
            Assert.Equal((new Text("Two"), new Text("Two_")), diff.StateDiffs[addr2]);
            Assert.Equal((null, new Text("Three")), diff.StateDiffs[addr3]);

            Assert.Equal(2, diff.FungibleAssetValueDiffs.Count);    // KRW is treated as unchanged
            Assert.Equal(
                (new Integer(12345), new Integer(12345 + 45678)),
                diff.FungibleAssetValueDiffs[(signer.Address, USD.Hash)]);
            Assert.Equal(
                (new Integer(0), new Integer(321)),
                diff.FungibleAssetValueDiffs[(signer.Address, JPY.Hash)]);

            Assert.Equal(2, diff.TotalSupplyDiffs.Count);           // KRW is treated as unchanged
            Assert.Equal(
                (new Integer(12345), new Integer(12345 + 45678)),
                diff.TotalSupplyDiffs[USD.Hash]);
            Assert.Equal(
                (new Integer(0), new Integer(321)),
                diff.TotalSupplyDiffs[JPY.Hash]);

            Assert.Equal(
                (
                    new ValidatorSet(),
                    new ValidatorSet(new List<Validator>() { new Validator(signer.PublicKey, 1) })
                ),
                diff.ValidatorSetDiff);

            diff = AccountDiff.Create(sourceTrie, targetTrie);
            Assert.Single(diff.StateDiffs);                 // Note addr3 is not tracked
            Assert.Equal((new Text("Two_"), new Text("Two")), diff.StateDiffs[addr2]);
            Assert.Single(diff.FungibleAssetValueDiffs);    // Only USD is tracked
            Assert.Equal(
                (new Integer(12345 + 45678), new Integer(12345)),
                diff.FungibleAssetValueDiffs[(signer.Address, USD.Hash)]);
            Assert.Single(diff.TotalSupplyDiffs);           // Only USD is tracked
            Assert.Equal(
                (new Integer(12345 + 45678), new Integer(12345)),
                diff.TotalSupplyDiffs[USD.Hash]);
            Assert.Null(diff.ValidatorSetDiff);             // Note ValidatorSet is not tracked
        }

        public IActionContext CreateActionContext(Address signer, ITrie trie) =>
            new ActionContext(
                signer,
                null,
                signer,
                0,
                Block.CurrentProtocolVersion,
                null,
                new World(
                    new WorldBaseState(
                        trie,
                        new TrieStateStore(new MemoryKeyValueStore()))),
                0,
                true,
                0);
    }
}
