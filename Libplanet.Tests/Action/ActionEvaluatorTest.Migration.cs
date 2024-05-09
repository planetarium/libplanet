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
using Libplanet.Mocks;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
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
        public void MigrateWorld()
        {
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionEvaluator = new ActionEvaluator(
                _ => null,
                stateStore,
                new SingleActionLoader(typeof(DumbAction)));
#pragma warning disable CS0618
            var legacyCurrency = Currency.Legacy("LEG", 2, null);
#pragma warning restore CS0618
            var modernCurrency = Currency.Uncapped("MOD", 4, null);

            var address = new PrivateKey().Address;
            var value = new Text("Foo");
            var validatorSet = new ValidatorSet(
                Enumerable
                    .Range(0, 4)
                    .Select(_ => new Validator(new PrivateKey().PublicKey, 1))
                    .ToList());

            // Throwaway addresses are used to differentiate balance and total supply.
            var world0 = new World(MockWorldState.CreateLegacy(stateStore)
                .SetBalance(address, legacyCurrency, 123)
                .SetBalance(address, modernCurrency, 456)
                .SetBalance(new PrivateKey().Address, legacyCurrency, 1000)
                .SetBalance(new PrivateKey().Address, modernCurrency, 2000)
                .SetValidatorSet(validatorSet));
            var trie0 = world0.Trie;
            trie0 = trie0.Set(KeyConverters.ToStateKey(address), value);
            trie0 = stateStore.Commit(trie0);
            world0 = new World(new WorldBaseState(trie0, stateStore));

            var world4 = stateStore.MigrateWorld(
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
            Assert.Equal(
                new Integer(123),
                world4.Trie.Get(KeyConverters.ToFungibleAssetKey(address, legacyCurrency)));
            Assert.Equal(
                new Integer(456),
                world4.Trie.Get(KeyConverters.ToFungibleAssetKey(address, modernCurrency)));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(legacyCurrency, 123),
                world4.GetBalance(address, legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 456),
                world4.GetBalance(address, modernCurrency));
            Assert.Null(world4.Trie.Get(KeyConverters.ToTotalSupplyKey(legacyCurrency)));
            Assert.Equal(
                new Integer(2456),
                world4.Trie.Get(KeyConverters.ToTotalSupplyKey(modernCurrency)));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                world4.GetTotalSupply(legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 2456),
                world4.GetTotalSupply(modernCurrency));

            var world5 = stateStore.MigrateWorld(
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
            Assert.Equal(
                new Integer(123),
                world5
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, legacyCurrency)));
            Assert.Equal(
                new Integer(456),
                world5
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, modernCurrency)));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(legacyCurrency, 123),
                world5.GetBalance(address, legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 456),
                world5.GetBalance(address, modernCurrency));
            Assert.Null(
                world5
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(legacyCurrency)));
            Assert.Equal(
                new Integer(2456),
                world5
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(modernCurrency)));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                world5.GetTotalSupply(legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 2456),
                world5.GetTotalSupply(modernCurrency));

            var world6 = stateStore.MigrateWorld(
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
            Assert.Equal(
                new Integer(123),
                world6
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, legacyCurrency)));
            Assert.Equal(
                new Integer(456),
                world6
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, modernCurrency)));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(legacyCurrency, 123),
                world6.GetBalance(address, legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 456),
                world6.GetBalance(address, modernCurrency));
            Assert.Null(
                world6
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(legacyCurrency)));
            Assert.Equal(
                new Integer(2456),
                world6
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(modernCurrency)));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                world6.GetTotalSupply(legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 2456),
                world6.GetTotalSupply(modernCurrency));

            var world7 = stateStore.MigrateWorld(
                world0, BlockMetadata.CurrencyAccountProtocolVersion);
            Assert.True(world7.Trie.Recorded);
            Assert.Equal(7, world7.Version);
            Assert.NotEqual(world0.Trie.Hash, world7.Trie.Hash);
            Assert.NotEqual(world6.Trie.Hash, world7.Trie.Hash);
            Assert.Null(world7.Trie.Get(KeyConverters.ToStateKey(address)));
            Assert.Equal(
                value,
                world7.GetAccount(ReservedAddresses.LegacyAccount).GetState(address));
            Assert.Null(world7.Trie.Get(KeyConverters.ValidatorSetKey));
            Assert.Null(
                world7
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ValidatorSetKey));
            Assert.Equal(
                validatorSet.Bencoded,
                world7
                    .GetAccount(ReservedAddresses.ValidatorSetAccount)
                    .Trie
                    .Get(KeyConverters.ToStateKey(ValidatorSetAccount.ValidatorSetAddress)));
            Assert.Equal(validatorSet, world7.GetValidatorSet());
            Assert.Null(
                world7
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, legacyCurrency)));
            Assert.Equal(
                new Integer(123),
                world7
                    .GetAccount(new Address(legacyCurrency.Hash.ByteArray))
                    .Trie
                    .Get(KeyConverters.ToStateKey(address)));
            Assert.Null(
                world7
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToFungibleAssetKey(address, modernCurrency)));
            Assert.Equal(
                new Integer(456),
                world7
                    .GetAccount(new Address(modernCurrency.Hash.ByteArray))
                    .Trie
                    .Get(KeyConverters.ToStateKey(address)));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(legacyCurrency, 123),
                world7.GetBalance(address, legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 456),
                world7.GetBalance(address, modernCurrency));
            Assert.Null(
                world7
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(legacyCurrency)));
            Assert.Equal(
                new Integer(1123),
                world7
                    .GetAccount(new Address(legacyCurrency.Hash.ByteArray))
                    .Trie
                    .Get(KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress)));
            Assert.Null(
                world7
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .Trie
                    .Get(KeyConverters.ToTotalSupplyKey(modernCurrency)));
            Assert.Equal(
                new Integer(2456),
                world7
                    .GetAccount(new Address(modernCurrency.Hash.ByteArray))
                    .Trie
                    .Get(KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress)));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(legacyCurrency, 1123),
                world7.GetTotalSupply(legacyCurrency));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(modernCurrency, 2456),
                world7.GetTotalSupply(modernCurrency));
        }

        [Fact]
        public void MigrateThroughBlockWorldState()
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

        [Fact]
        public void MigrateThroughBlockCurrencyAccount()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Log.Debug("Test Start.");
            var chain = MakeBlockChain(
                policy: new BlockPolicy(),
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(DumbAction)),
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
            var action = DumbAction.Create(
                null,
                (null, miner.Address, 10));

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: miner,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());

            chain.StageTransaction(tx);
            var block3 = chain.ProposeBlock(miner, blockCommit);
            chain.Append(block3, CreateBlockCommit(block3));
            Assert.Equal(BlockMetadata.CurrentProtocolVersion, chain.GetWorldState().Version);

            var currencyAccountStateRoot = stateStore
                    .GetStateRoot(block3.StateRootHash)
                    .Get(KeyConverters.ToStateKey(
                        new Address(DumbAction.DumbCurrency.Hash.ByteArray)));
            Assert.NotNull(currencyAccountStateRoot);
            var currencyAccountTrie = stateStore.GetStateRoot(
                new HashDigest<SHA256>(currencyAccountStateRoot));
            Assert.Equal(
                new Integer(10),
                currencyAccountTrie.Get(KeyConverters.ToStateKey(miner.Address)));
            Assert.Equal(
                new Integer(10),
                currencyAccountTrie.Get(
                    KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress)));
        }
    }
}
