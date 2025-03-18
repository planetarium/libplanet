using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes;

/// <summary>
/// Wrapper class.
/// </summary>
internal sealed record class ValueNode(IValue Value) : INode
{
    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() => new List(Null.Value, Value);

    public override int GetHashCode() => Value.GetHashCode();
}
