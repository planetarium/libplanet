using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes;

public sealed class FullNode : INode, IEquatable<FullNode>
{
    // Children 0x10 + Value 0x01
    public const byte ChildrenCount = 0x11;

    public static readonly FullNode Empty = new(new INode?[ChildrenCount].ToImmutableArray());

    public FullNode(in ImmutableArray<INode?> children)
    {
        if (children.Length != ChildrenCount)
        {
            throw new InvalidTrieNodeException(
                $"The number of {nameof(FullNode)}'s children should be {ChildrenCount}.");
        }

        Children = children;
    }

    public ImmutableArray<INode?> Children { get; }

    public INode? Value => Children[ChildrenCount - 1];

    public FullNode SetChild(int index, INode? node) => new(Children.SetItem(index, node));

    /// <inheritdoc cref="IEquatable{T}.Equals"/>
    public bool Equals(FullNode? other)
    {
        if (other is not null)
        {
            return Children.SequenceEqual(other.Children);
        }

        return false;
    }

    public override bool Equals(object? obj) => obj is FullNode other && Equals(other);

    public override int GetHashCode() => Children.GetHashCode();

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() =>
        new List(Children.Select(child => child?.ToBencodex() ?? Null.Value));
}
