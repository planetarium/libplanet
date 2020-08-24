#nullable enable
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal interface INode
    {
        IValue ToBencodex();
    }
}
