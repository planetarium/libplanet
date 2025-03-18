using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes;

public sealed record class FullNode(ImmutableDictionary<byte, INode?> Children, INode? Value)
    : INode, IEquatable<FullNode>
{
    public const byte ChildrenCount = 16;

    [Obsolete("This field will be removed in the future. Use Constructor instead.")]
    public static readonly FullNode Empty = new(ImmutableDictionary<byte, INode?>.Empty, null);

    public ImmutableDictionary<byte, INode?> Children { get; } = ValidateChildren(Children);

    public INode? GetChild(byte index) => Children.GetValueOrDefault(index);

    public FullNode SetChild(byte index, INode? node)
    {
        return new(Children.SetItem(index, node), Value);
    }

    public FullNode SetValue(INode? value) => new(Children, value);

    /// <inheritdoc cref="IEquatable{T}.Equals"/>
    public bool Equals(FullNode? other)
    {
        if (other is not null)
        {
            return Children.SequenceEqual(other.Children) && Equals(Value, other.Value);
        }

        return false;
    }

    public override int GetHashCode() => Children.GetHashCode();

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex()
    {
        var items = Enumerable.Repeat<IValue>(Null.Value, 16 + 1).ToArray();
        foreach (var (key, value) in Children)
        {
            if (value is not null)
            {
                items[key] = value.ToBencodex();
            }
        }

        if (Value is not null)
        {
            items[16] = Value.ToBencodex();
        }

        return new List(items);
    }

    private static ImmutableDictionary<byte, INode?> ValidateChildren(
        ImmutableDictionary<byte, INode?> children)
    {
        foreach (var key in children.Keys)
        {
            if (key >= 0x10)
            {
                var message = $"The key of {nameof(FullNode)}'s children should be less than 0x0f.";
                throw new ArgumentException(message, nameof(children));
            }
        }

        return children;
    }
}
