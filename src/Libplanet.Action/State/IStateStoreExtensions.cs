using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    public static class IStateStoreExtensions
    {
        /// <summary>
        /// Commits <paramref name="data"/> representing a world state directly
        /// to <see cref="IStateStore"/> and returns its state root hash.
        /// The world state created is set to <see cref="BlockMetadata.CurrentProtocolVersion"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to commit to.</param>
        /// <param name="data">The data representing a world state to commit.</param>
        /// <returns>The state root hash of the <paramref name="data"/> committed.</returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="data"/>
        /// is not in the right format.
        /// <list type="bullet">
        /// <item><description>
        ///   Every key in <paramref name="data"/> must be a <see cref="Binary"/> of length
        ///   <see cref="Address.Size"/>.
        /// </description></item>
        /// <item><description>
        ///   Every value in <paramref name="data"/> must be a <see cref="Dictionary"/> with
        ///   each key in the <see cref="Dictionary"/> being a <see cref="Binary"/> of length
        ///   <see cref="Address.Size"/>.
        /// </description></item>
        /// </list>
        /// </exception>
        public static HashDigest<SHA256> CommitWorld(
            this IStateStore stateStore,
            Dictionary data)
        {
            try
            {
                var dictionary = data.ToImmutableDictionary(
                    outerPair => new Address(((Binary)outerPair.Key).ByteArray),
                    outerPair => ((Dictionary)outerPair.Value).ToImmutableDictionary(
                        innerPair => new Address(((Binary)innerPair.Key).ByteArray),
                        innerPair => innerPair.Value));
                return stateStore.CommitWorld(dictionary);
            }
            catch (Exception e)
            {
                throw new ArgumentException(
                    $"Could not convert {nameof(data)} to a proper format",
                    nameof(data),
                    e);
            }
        }

        /// <summary>
        /// Commits <paramref name="data"/> representing a world state directly
        /// to <see cref="IStateStore"/> and returns its state root hash.
        /// The world state created is set to <see cref="BlockMetadata.CurrentProtocolVersion"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to commit to.</param>
        /// <param name="data">The data representing a world state to commit.</param>
        /// <returns>The state root hash of the <paramref name="data"/> committed.</returns>
        public static HashDigest<SHA256> CommitWorld(
            this IStateStore stateStore,
            ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>> data)
        {
            var stateRoot = stateStore.GetStateRoot(null);
            stateRoot = stateRoot.SetMetadata(
                new TrieMetadata(BlockMetadata.CurrentProtocolVersion));
            stateRoot = stateStore.Commit(stateRoot);
            foreach (var pair in data)
            {
                stateRoot = stateRoot.Set(
                    KeyConverters.ToStateKey(pair.Key),
                    new Binary(stateStore.CommitAccount(pair.Value).ByteArray));
            }

            return stateStore.Commit(stateRoot).Hash;
        }

        /// <summary>
        /// Retrieves the <see cref="IWorld"/> associated with
        /// given <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to retrieve
        /// an <see cref="IWorld"/> from.</param>
        /// <param name="stateRootHash">The state root hash of the <see cref="IWorld"/>
        /// to retrieve.</param>
        /// <returns>The <see cref="IWorld"/> associated with
        /// given <paramref name="stateRootHash"/>.</returns>
        internal static IWorld GetWorld(
            this IStateStore stateStore,
            HashDigest<SHA256>? stateRootHash)
        {
            return new World(
                new WorldBaseState(stateStore.GetStateRoot(stateRootHash), stateStore));
        }

        /// <summary>
        /// Commits given <paramref name="world"/> to given <paramref name="stateStore"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to commit
        /// <paramref name="world"/> to.</param>
        /// <param name="world">The <see cref="IWorld"/> to commit.</param>
        /// <returns>The committed <see cref="IWorld"/>.</returns>
        internal static IWorld CommitWorld(this IStateStore stateStore, IWorld world)
        {
            if (world.Version >= BlockMetadata.WorldStateProtocolVersion)
            {
                var worldTrie = world.Trie;
                foreach (var account in world.Delta.Accounts)
                {
                    var accountTrie = stateStore.Commit(account.Value.Trie);
                    worldTrie = worldTrie.Set(
                        KeyConverters.ToStateKey(account.Key),
                        new Binary(accountTrie.Hash.ByteArray));
                }

                return new World(
                    new WorldBaseState(stateStore.Commit(worldTrie), stateStore));
            }
            else
            {
                return new World(
                    new WorldBaseState(
                        stateStore.Commit(world.GetAccount(ReservedAddresses.LegacyAccount).Trie),
                        stateStore));
            }
        }

        /// <summary>
        /// Migrates given <paramref name="world"/> to <paramref name="targetVersion"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to commit
        /// the migrated <see cref="IWorld"/>.</param>
        /// <param name="world">The <see cref="IWorld"/> to migrate.</param>
        /// <param name="targetVersion">The target <see cref="IWorld"/> version
        /// to migrate to.</param>
        /// <returns>The migrated <see cref="IWorld"/> of <paramref name="world"/> with
        /// <see cref="IWorld.Version"/> equal to:
        /// <list type="bullet">
        ///     <item><description>
        ///         zero if <paramref name="targetVersion"/> is less than
        ///         <see cref="BlockMetadata.WorldStateProtocolVersion"/>.
        ///     </description></item>
        ///     <item><description>
        ///         <paramref name="targetVersion"/> if <paramref name="targetVersion"/> is
        ///         greater than or equal to <see cref="BlockMetadata.WorldStateProtocolVersion"/>.
        ///     </description></item>
        /// </list>
        /// </returns>
        /// <exception cref="ApplicationException">Thrown when <paramref name="targetVersion"/> is
        /// lower than the <see cref="IWorld.Version"/> of <paramref name="world"/>.</exception>
        /// <remarks>
        /// Migrated <see cref="IWorld"/> is automatically committed before returning.
        /// </remarks>
        internal static IWorld MigrateWorld(
            this IStateStore stateStore,
            IWorld world,
            int targetVersion)
        {
            if (world.Version > targetVersion)
            {
                throw new ApplicationException(
                    $"Given {nameof(world)} with version {world.Version} " +
                    $"cannot be migrated to a lower version {targetVersion}.");
            }

            // Migrate up to BlockMetadata.WorldStateProtocolVersion
            // if conditions are met.
            if (targetVersion >= BlockMetadata.WorldStateProtocolVersion &&
                world.Version < BlockMetadata.WorldStateProtocolVersion)
            {
                var worldTrie = stateStore.GetStateRoot(null);
                worldTrie = worldTrie.SetMetadata(
                    new TrieMetadata(BlockMetadata.WorldStateProtocolVersion));
                worldTrie = worldTrie.Set(
                    KeyConverters.ToStateKey(ReservedAddresses.LegacyAccount),
                    new Binary(world.Trie.Hash.ByteArray));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));
            }

            // Migrate up to BlockMetadata.ValidatorSetAccountProtocolVersion
            // if conditions are met.
            if (targetVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion &&
                world.Version < BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                var worldTrie = world.Trie;
                worldTrie = worldTrie.SetMetadata(
                    new TrieMetadata(BlockMetadata.ValidatorSetAccountProtocolVersion));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));

                var legacyAccountTrie =
                    world.GetAccount(ReservedAddresses.LegacyAccount).Trie;
                IValue? rawValidatorSet = legacyAccountTrie.Get(KeyConverters.ValidatorSetKey);

                // Move encoded validator set only if it already exists.
                if (rawValidatorSet is { } rawValue)
                {
                    legacyAccountTrie = legacyAccountTrie.Remove(KeyConverters.ValidatorSetKey);
                    legacyAccountTrie = stateStore.Commit(legacyAccountTrie);

                    var validatorSetAccountTrie =
                        world.GetAccount(ReservedAddresses.ValidatorSetAccount).Trie;
                    validatorSetAccountTrie = validatorSetAccountTrie.Set(
                        KeyConverters.ToStateKey(ValidatorSetAccount.ValidatorSetAddress),
                        rawValue);
                    validatorSetAccountTrie = stateStore.Commit(validatorSetAccountTrie);

                    worldTrie = worldTrie.Set(
                        KeyConverters.ToStateKey(ReservedAddresses.LegacyAccount),
                        new Binary(legacyAccountTrie.Hash.ByteArray));
                    worldTrie = worldTrie.Set(
                        KeyConverters.ToStateKey(ReservedAddresses.ValidatorSetAccount),
                        new Binary(validatorSetAccountTrie.Hash.ByteArray));
                    worldTrie = stateStore.Commit(worldTrie);
                    world = new World(new WorldBaseState(worldTrie, stateStore));
                }
            }

            // Migrate up to BlockMetadata.CurrencyAccountProtocolVersion
            // if conditions are met.
            if (targetVersion >= BlockMetadata.CurrencyAccountProtocolVersion &&
                world.Version < BlockMetadata.CurrencyAccountProtocolVersion)
            {
                var worldTrie = world.Trie;
                worldTrie = worldTrie.SetMetadata(
                    new TrieMetadata(BlockMetadata.CurrencyAccountProtocolVersion));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));

                // Remove all total supply tracking.
                const int totalSupplyKeyLength = 42;
                var subRootPath = new KeyBytes(Encoding.ASCII.GetBytes("__"));
                var legacyAccountTrie =
                    world.GetAccount(ReservedAddresses.LegacyAccount).Trie;
                var tempTrie = (MerkleTrie)legacyAccountTrie.Set(subRootPath, Null.Value);
                foreach (var pair in tempTrie.IterateSubTrieValues(subRootPath))
                {
                    if (pair.Path.Length == totalSupplyKeyLength)
                    {
                        legacyAccountTrie = legacyAccountTrie.Remove(pair.Path);
                    }
                }

                legacyAccountTrie = stateStore.Commit(legacyAccountTrie);
                worldTrie = worldTrie.Set(
                    KeyConverters.ToStateKey(ReservedAddresses.LegacyAccount),
                    new Binary(legacyAccountTrie.Hash.ByteArray));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));

                // Remove all fungible assets
                const int fungibleAssetKeyLength = 82;
                subRootPath = new KeyBytes(Encoding.ASCII.GetBytes("_"));
                tempTrie = (MerkleTrie)legacyAccountTrie.Set(subRootPath, Null.Value);
                byte[] addressBytesBuffer = new byte[40];
                byte[] currencyBytesBuffer = new byte[40];
                List<(KeyBytes Address, KeyBytes Currency, Integer Amount)> favs =
                    new List<(KeyBytes Address, KeyBytes Currency, Integer Amount)>();
                foreach (var pair in tempTrie.IterateSubTrieValues(subRootPath))
                {
                    if (pair.Path.Length == fungibleAssetKeyLength)
                    {
                        legacyAccountTrie = legacyAccountTrie.Remove(pair.Path);
                        pair.Path.ByteArray.CopyTo(1, addressBytesBuffer, 0, 40);
                        pair.Path.ByteArray.CopyTo(42, currencyBytesBuffer, 0, 40);
                        favs.Add((
                            new KeyBytes(addressBytesBuffer),
                            new KeyBytes(currencyBytesBuffer),
                            (Integer)pair.Value));
                    }
                }

                legacyAccountTrie = stateStore.Commit(legacyAccountTrie);
                worldTrie = worldTrie.Set(
                    KeyConverters.ToStateKey(ReservedAddresses.LegacyAccount),
                    new Binary(legacyAccountTrie.Hash.ByteArray));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));

                // Add in fungible assets to new accounts.
                KeyBytes totalSupplyKeyBytes =
                    KeyConverters.ToStateKey(CurrencyAccount.TotalSupplyAddress);
                var grouped = favs.GroupBy(fav => fav.Currency);
                foreach (var group in grouped)
                {
                    var currencyAccountTrie = world.Trie.Get(group.Key) is Binary hash
                        ? stateStore.GetStateRoot(new HashDigest<SHA256>(hash))
                        : stateStore.GetStateRoot(null);
                    foreach (var fav in group)
                    {
                        Integer balance = fav.Amount;
                        Integer prevTotalSupply =
                            currencyAccountTrie.Get(totalSupplyKeyBytes) is Integer i
                                ? i
                                : new Integer(0);
                        Integer newTotalSupply = new Integer(prevTotalSupply.Value + balance.Value);
                        currencyAccountTrie =
                            currencyAccountTrie.Set(
                                fav.Address,
                                balance);
                        currencyAccountTrie =
                            currencyAccountTrie.Set(
                                totalSupplyKeyBytes,
                                newTotalSupply);
                    }

                    currencyAccountTrie = stateStore.Commit(currencyAccountTrie);
                    worldTrie = worldTrie.Set(
                        group.Key,
                        new Binary(currencyAccountTrie.Hash.ByteArray));
                    worldTrie = stateStore.Commit(worldTrie);
                    world = new World(new WorldBaseState(worldTrie, stateStore));
                }
            }

            // Migrate up to target version if conditions are met.
            if (targetVersion >= BlockMetadata.WorldStateProtocolVersion &&
                world.Version < targetVersion)
            {
                var worldTrie = world.Trie;
                worldTrie = worldTrie.SetMetadata(new TrieMetadata(targetVersion));
                worldTrie = stateStore.Commit(worldTrie);
                world = new World(new WorldBaseState(worldTrie, stateStore));
            }

            return world;
        }

        private static HashDigest<SHA256> CommitAccount(
            this IStateStore stateStore,
            ImmutableDictionary<Address, IValue> data)
        {
            var stateRoot = stateStore.GetStateRoot(null);
            foreach (var pair in data)
            {
                stateRoot = stateRoot.Set(
                    KeyConverters.ToStateKey(pair.Key),
                    pair.Value);
            }

            return stateStore.Commit(stateRoot).Hash;
        }
    }
}
