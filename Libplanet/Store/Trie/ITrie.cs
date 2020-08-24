#nullable enable
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    internal interface ITrie
    {
        /// <summary>
        /// The root node of the trie.
        /// </summary>
        INode? Root { get; }

        /// <summary>
        /// Stores the <paramref name="value"/> to the
        /// node corresponding to given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">An index to look with <see cref="TryGet"/> after.</param>
        /// <param name="value">The value to store.</param>
        void Set(byte[] key, IValue value);

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
        /// <returns>Returns new committed <see cref="ITrie"/>.</returns>
        ITrie Commit();
    }
}
