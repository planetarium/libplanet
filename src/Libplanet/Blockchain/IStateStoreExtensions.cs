using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Convenient extension methods for <see cref="IStateStore"/>.
    /// </summary>
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
                var dictionary = data.ToDictionary(
                    outerPair => new Address(((Binary)outerPair.Key).ByteArray),
                    outerPair => ((Dictionary)outerPair.Value).ToDictionary(
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
            Dictionary<Address, Dictionary<Address, IValue>> data)
        {
            var stateRoot = stateStore.GetStateRoot(null);
            stateRoot = stateRoot.SetMetadata(
                new TrieMetadata(BlockMetadata.CurrentProtocolVersion));
            stateRoot = stateStore.Commit(stateRoot);
            foreach ((var key, var value) in data)
            {
                stateRoot = stateRoot.Set(
                    KeyConverters.ToStateKey(key),
                    new Binary(stateStore.CommitAccount(value).ByteArray));
            }

            return stateStore.Commit(stateRoot).Hash;
        }

        private static HashDigest<SHA256> CommitAccount(
            this IStateStore stateStore,
            Dictionary<Address, IValue> data)
        {
            var stateRoot = stateStore.GetStateRoot(null);
            foreach ((var key, var value) in data)
            {
                stateRoot = stateRoot.Set(
                    KeyConverters.ToStateKey(key),
                    value);
            }

            return stateStore.Commit(stateRoot).Hash;
        }
    }
}
