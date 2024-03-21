using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class AccountDiffTest
    {
        [Fact]
        public void EmptyAccountStateSource()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            ITrie targetTrie = stateStore.GetStateRoot(null);
            ITrie sourceTrie = stateStore.GetStateRoot(null);

            AccountDiff diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Empty(diff.StateDiffs);

            IAccount targetAccount = new Account(new AccountState(targetTrie));
            PrivateKey signer = new PrivateKey();
            targetAccount = targetAccount.SetState(signer.Address, new Text("Foo"));

            targetTrie = stateStore.Commit(targetAccount.Trie);

            diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Empty(diff.StateDiffs);
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

            IAccount targetAccount = new Account(new AccountState(targetTrie));
            PrivateKey signer = new PrivateKey();
            targetAccount = targetAccount.SetState(addr1, new Text("One"));
            targetAccount = targetAccount.SetState(addr2, new Text("Two"));
            targetTrie = stateStore.Commit(targetAccount.Trie);

            sourceTrie = targetTrie;

            IAccount sourceAccount = new Account(new AccountState(sourceTrie));
            sourceAccount = sourceAccount.SetState(addr2, new Text("Two_"));
            sourceAccount = sourceAccount.SetState(addr3, new Text("Three"));

            sourceTrie = stateStore.Commit(sourceAccount.Trie);

            diff = AccountDiff.Create(targetTrie, sourceTrie);
            Assert.Equal(2, diff.StateDiffs.Count);
            Assert.Equal((new Text("Two"), new Text("Two_")), diff.StateDiffs[addr2]);
            Assert.Equal((null, new Text("Three")), diff.StateDiffs[addr3]);

            diff = AccountDiff.Create(sourceTrie, targetTrie);
            Assert.Single(diff.StateDiffs);                 // Note addr3 is not tracked
            Assert.Equal((new Text("Two_"), new Text("Two")), diff.StateDiffs[addr2]);
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
                0);
    }
}
