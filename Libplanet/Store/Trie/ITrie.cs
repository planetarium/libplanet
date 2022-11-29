using System.Collections.Generic;
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
        /// Whether the trie root is recorded in the store.
        /// </summary>
        /// <remarks>Empty root is considered as recorded.</remarks>
        bool Recorded { get; }

        /// <summary>
        /// Stores the <paramref name="value"/> to the
        /// node corresponding to given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">The unique key to associate with the <paramref name="value"/>.</param>
        /// <param name="value">The value to store.</param>
        /// <exception cref="System.ArgumentNullException">Thrown when the given
        /// <paramref name="value"/> is <see langword="null"/>.</exception>
        /// <returns>Returns new updated <see cref="ITrie"/>.</returns>
        ITrie Set(in KeyBytes key, IValue value);

        /// <summary>
        /// Gets the values stored with <paramref name="keys"/> in <see cref="Set"/>.
        /// </summary>
        /// <param name="keys">The keys used in <see cref="Set"/> to store a value.</param>
        /// <returns>The values associated to the specified <paramref name="keys"/>.  The associated
        /// values are ordered in the same way to the corresponding <paramref name="keys"/>.  Absent
        /// values are represented as <see langword="null"/>.</returns>
        IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys);

        /// <summary>
        /// Cleans up and stores the <see cref="ITrie"/> in storage.
        /// </summary>
        /// <returns>Returns new committed <see cref="ITrie"/>.</returns>
        ITrie Commit();
    }
}
