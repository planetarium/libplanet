using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class ShortNode : INode, IEquatable<ShortNode>
    {
        public ShortNode(in Nibbles nibbles, INode value)
        {
            Key = nibbles.Length > 0
                ? nibbles
                : throw new ArgumentException(
                    $"Given {nameof(nibbles)} cannot be empty", nameof(nibbles));
            Value = value;
        }

        public Nibbles Key { get; }

        public INode Value { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(ShortNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Key.Equals(node.Key) &&
                Value.Equals(node.Value);
        }

        /// <inheritdoc cref="object.Equals"/>
        public override bool Equals(object? obj) =>
            obj is ShortNode other && Equals(other);

        public override int GetHashCode()
        {
            unchecked
            {
                return (Key.GetHashCode() * 397) ^ Value.GetHashCode();
            }
        }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() =>
            new List(new Binary(Key.ByteArray), Value.ToBencodex());
    }
}
