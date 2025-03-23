using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.Store.Trie;

/// <summary>
/// A constituent unit of <see cref="MerkleTrie"/>.
/// </summary>
/// <seealso cref="FullNode"/>
/// <seealso cref="ShortNode"/>
/// <seealso cref="ValueNode"/>
/// <seealso cref="HashNode"/>
public interface INode
{
    IEnumerable<INode> Children { get; }

    IValue ToBencodex();
}
