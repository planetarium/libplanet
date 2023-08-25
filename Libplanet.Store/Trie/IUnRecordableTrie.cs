using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public interface IUnRecordableTrie
    {
        /// <summary>
        /// The root node of the current trie.
        /// </summary>
        INode? Root { get; }

        /// <summary>
        /// The state root hash of the branchpoint trie.
        /// </summary>
        HashDigest<SHA256> Hash { get; }

        /// <summary>
        /// Stores the <paramref name="value"/> to the
        /// node corresponding to given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">The unique key to associate with the <paramref name="value"/>.</param>
        /// <param name="value">The value to store.</param>
        /// <exception cref="System.ArgumentNullException">Thrown when the given
        /// <paramref name="value"/> is <see langword="null"/>.</exception>
        /// <returns>Returns new updated <see cref="ITrie"/>.</returns>
        IUnRecordableTrie Set(in KeyBytes key, IValue value);

        /// <summary>
        /// Gets the values stored with <paramref name="key"/> in <see cref="Set"/>.
        /// </summary>
        /// <param name="key">The key used in <see cref="Set"/> to store a value.</param>
        /// <returns>The value associated to the specified <paramref name="key"/>.  Absent
        /// value is represented as <see langword="null"/>.</returns>
        public IValue? Get(KeyBytes key);

        /// <summary>
        /// Gets the values stored with <paramref name="keys"/> in <see cref="Set"/>.
        /// </summary>
        /// <param name="keys">The keys used in <see cref="Set"/> to store a value.</param>
        /// <returns>The values associated to the specified <paramref name="keys"/>.  The associated
        /// values are ordered in the same way to the corresponding <paramref name="keys"/>.  Absent
        /// values are represented as <see langword="null"/>.</returns>
        IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys);
    }
}
