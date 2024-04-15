using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Serilog;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Action
{
    public partial class ActionEvaluatorTest
    {
        [Fact]
        public void MigrateWorldWithValidatorSet()
        {
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionEvaluator = new ActionEvaluator(
                new PolicyActionsRegistry(
                    beginBlockActionsGetter: _ => ImmutableArray<IAction>.Empty,
                    endBlockActionsGetter: _ => ImmutableArray<IAction>.Empty,
                    beginTxActionsGetter: _ => ImmutableArray<IAction>.Empty,
                    endTxActionsGetter: _ => ImmutableArray<IAction>.Empty),
                stateStore,
                new SingleActionLoader(typeof(DumbAction)));

            var address = new PrivateKey().Address;
            var value = new Text("Foo");
            var validatorSet = new ValidatorSet(
                Enumerable
                    .Range(0, 4)
                    .Select(_ => new Validator(new PrivateKey().PublicKey, 1))
                    .ToList());

            var trie0 = stateStore.GetStateRoot(null);
            trie0 = trie0.Set(KeyConverters.ToStateKey(address), value);
            trie0 = trie0.Set(KeyConverters.ValidatorSetKey, validatorSet.Bencoded);
            trie0 = stateStore.Commit(trie0);
            var world0 = new World(new WorldBaseState(trie0, stateStore));

            var world4 = actionEvaluator.MigrateWorld(
                world0, BlockMetadata.PBFTProtocolVersion);
            Assert.True(world4.Trie.Recorded);
            Assert.Equal(0, world4.Version);
            Assert.Equal(world0.Trie.Hash, world4.Trie.Hash);
            Assert.Equal(value, world4.Trie.Get(KeyConverters.ToStateKey(address)));
            Assert.Equal(
                value,
                world4.GetAccount(ReservedAddresses.LegacyAccount).GetState(address));
            Assert.Equal(
                validatorSet.Bencoded,
                world4.Trie.Get(KeyConverters.ValidatorSetKey));
            Assert.Equal(
                validatorSet,
                world4.GetValidatorSet());

            var world5 = actionEvaluator.MigrateWorld(
                world0, BlockMetadata.WorldStateProtocolVersion);
            Assert.True(world5.Trie.Recorded);
            Assert.Equal(5, world5.Version);
            Assert.NotEqual(world0.Trie.Hash, world5.Trie.Hash);
            Assert.Null(world5.Trie.Get(KeyConverters.ToStateKey(address)));
            Assert.Equal(
                value,
                world5.GetAccount(ReservedAddresses.LegacyAccount).GetState(address));
            Assert.Null(world5.Trie.Get(KeyConverters.ValidatorSetKey));
            Assert.Equal(
                validatorSet.Bencoded,
                world5
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ValidatorSetKey));
            Assert.Equal(validatorSet, world5.GetValidatorSet());

            var world6 = actionEvaluator.MigrateWorld(
                world0, BlockMetadata.ValidatorSetAccountProtocolVersion);
            Assert.True(world6.Trie.Recorded);
            Assert.Equal(6, world6.Version);
            Assert.NotEqual(world0.Trie.Hash, world6.Trie.Hash);
            Assert.NotEqual(world5.Trie.Hash, world6.Trie.Hash);
            Assert.Null(world6.Trie.Get(KeyConverters.ToStateKey(address)));
            Assert.Equal(
                value,
                world6.GetAccount(ReservedAddresses.LegacyAccount).GetState(address));
            Assert.Null(world6.Trie.Get(KeyConverters.ValidatorSetKey));
            Assert.Null(
                world6
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ValidatorSetKey));
            Assert.Equal(
                validatorSet.Bencoded,
                world6
                    .GetAccount(ReservedAddresses.ValidatorSetAccount)
                    .Trie
                    .Get(KeyConverters.ToStateKey(ValidatorSetAccount.ValidatorSetAddress)));
            Assert.Equal(validatorSet, world6.GetValidatorSet());
        }

        [Fact]
        public void MigrateThroughBlock()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Log.Debug("Test Start.");
            var chain = MakeBlockChain(
                policy: new BlockPolicy(),
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(ModernAction)),
                protocolVersion: BlockMetadata.WorldStateProtocolVersion - 1);
            Assert.Equal(0, chain.GetWorldState().Version);
            var miner = new PrivateKey();
            var preEval1 = TestUtils.ProposeNext(
                chain.Tip,
                miner: miner.PublicKey,
                protocolVersion: BlockMetadata.WorldStateProtocolVersion - 1);
            var block1 = chain.EvaluateAndSign(preEval1, miner);
            var blockCommit = CreateBlockCommit(block1);
            chain.Append(block1, blockCommit);
            Assert.Equal(0, chain.GetWorldState().Version);

            // A block that doesn't touch any state does not migrate its state.
            var block2 = chain.ProposeBlock(miner, blockCommit);
            blockCommit = CreateBlockCommit(block2);
            chain.Append(block2, blockCommit);
            Assert.Equal(0, chain.GetWorldState().Version);

            // Check if after migration, accounts can be created correctly.
            var action = new ModernAction()
            {
                Memo = "foo",
            };

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: miner,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());

            chain.StageTransaction(tx);
            var block3 = chain.ProposeBlock(miner, blockCommit);
            chain.Append(block3, CreateBlockCommit(block3));
            Assert.Equal(BlockMetadata.CurrentProtocolVersion, chain.GetWorldState().Version);
            var accountStateRoot = stateStore.GetStateRoot(block3.StateRootHash)
                .Get(KeyConverters.ToStateKey(ModernAction.AccountAddress));
            Assert.NotNull(accountStateRoot);
            var accountTrie = stateStore.GetStateRoot(new HashDigest<SHA256>(accountStateRoot));
            Assert.Equal(
                (Text)"foo",
                accountTrie.Get(KeyConverters.ToStateKey(ModernAction.Address)));
        }
    }
}
