using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// A constituent unit of <see cref="MerkleTrie"/>.
    /// </summary>
    /// <seealso cref="FullNode"/>
    /// <seealso cref="ShortNode"/>
    /// <seealso cref="ValueNode"/>
    /// <seealso cref="HashNode"/>
    internal interface INode
    {
        IValue ToBencodex();
    }
}
