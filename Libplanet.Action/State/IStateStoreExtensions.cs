using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    internal static class IStateStoreExtensions
    {
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
    }
}
