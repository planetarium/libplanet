using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes;

/// <summary>
/// Wrapper class.
/// </summary>
internal sealed record class ValueNode(IValue Value) : INode
{
    IEnumerable<INode> INode.Children => [];

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() => new List(Null.Value, Value);

    public override int GetHashCode() => Value.GetHashCode();
}
