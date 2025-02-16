using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes;

public sealed record class ShortNode : INode
{
    public ShortNode(in Nibbles key, INode value)
    {
        if (key.Length == 0)
        {
            throw new ArgumentException($"Given {nameof(key)} cannot be empty.", nameof(key));
        }

        if (value is ShortNode)
        {
            throw new ArgumentException(
                $"Given {nameof(value)} cannot be a {nameof(ShortNode)}.", nameof(value));
        }

        Key = key;
        Value = value;
    }

    public Nibbles Key { get; }

    /// <summary>
    /// Represents an <see cref="INode"/> at the end of a <see cref="ShortNode"/>.
    /// It can be a <see cref="ValueNode"/>, a <see cref="FullNode"/>,
    /// or a <see cref="HashNode"/> of either a <see cref="ValueNode"/>
    /// or a <see cref="FullNode"/>.  That is, this can be neither a <see cref="ShortNode"/>
    /// nor a <see cref="HashNode"/> of a <see cref="ShortNode"/>.
    /// </summary>
    public INode Value { get; }

    public override int GetHashCode()
    {
        unchecked
        {
            return (Key.GetHashCode() * 397) ^ Value.GetHashCode();
        }
    }

    /// <inheritdoc cref="INode.ToBencodex()"/>
    public IValue ToBencodex() => new List(new Binary(Key.ByteArray), Value.ToBencodex());
}
