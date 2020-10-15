#nullable enable
using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An interface for <see href="https://en.wikipedia.org/wiki/Merkle_tree">Merkle Tree</see>.
    /// </summary>
    /// <seealso cref="MerkleTrie"/>
    public interface ITrie
    {
        /// <summary>
        /// The state root hash of the trie.
        /// </summary>
        HashDigest<SHA256> Hash { get; }

        /// <summary>
        /// Stores the <paramref name="value"/> to the
        /// node corresponding to given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">An index to look with <see cref="TryGet"/> after.</param>
        /// <param name="value">The value to store.</param>
        /// <exception cref="System.ArgumentNullException">Thrown when the given
        /// <paramref name="value"/> is <c>null</c>.</exception>
        /// <returns>Returns new updated <see cref="ITrie"/>.</returns>
        ITrie Set(byte[] key, IValue value);

        /// <summary>
        /// Gets the value stored with <paramref name="key"/> in <see cref="Set"/>.
        /// </summary>
        /// <param name="key">The key used in <see cref="Set"/> to store a value.</param>
        /// <param name="value">The reference pointer to be set the value stored.</param>
        /// <returns>If there is a value corresponded to <paramref name="key"/>,
        /// set <paramref name="value"/> to it and return true. If not, set <paramref name="value"/>
        /// to null and return false.</returns>
        bool TryGet(byte[] key, out IValue? value);

        /// <summary>
        /// Cleans up and stores the <see cref="ITrie"/> in storage.
        /// </summary>
        /// <param name="rehearsal">Whether to store nodes.</param>
        /// <returns>Returns new committed <see cref="ITrie"/>.</returns>
        ITrie Commit(bool rehearsal = false);
    }
}
