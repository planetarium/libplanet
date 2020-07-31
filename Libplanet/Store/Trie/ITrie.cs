using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    internal interface ITrie
    {
        /// <summary>
        /// The root node of the trie.
        /// </summary>
        INode Root { get; }

        /// <summary>
        /// Stores the <paramref name="value"/> to the
        /// node corresponding to given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">An index to look with <see cref="TryGet"/> after.</param>
        /// <param name="value">The value to store.</param>
        void Set(byte[] key, IValue value);

        bool TryGet(byte[] key, out IValue value);

        ITrie Commit();
    }
}
