#nullable enable
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public interface INode
    {
        IValue ToBencodex();
    }
}
