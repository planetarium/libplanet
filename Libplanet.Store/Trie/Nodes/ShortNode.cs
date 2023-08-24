using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class ShortNode : BaseNode, IEquatable<ShortNode>
    {
        public ShortNode(in Nibbles nibbles, INode? value)
            : base(value)
        {
            Key = nibbles.Length > 0
                ? nibbles
                : throw new ArgumentException(
                    $"Given {nameof(nibbles)} cannot be empty", nameof(nibbles));
        }

        public Nibbles Key { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(ShortNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Key.Equals(node.Key) &&
                ((Value is null && node.Value is null) ||
                (Value is { } value && value.Equals(node.Value)));
        }

        public override bool Equals(object? obj) =>
            obj is ShortNode other && Equals(other);

        public override int GetHashCode()
        {
            unchecked
            {
                return (Key.GetHashCode() * 397) ^
                    (Value?.GetHashCode() ?? Null.Value.GetHashCode());
            }
        }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public override IValue ToBencodex() =>
            new List(new Binary(Key.ByteArray), Value?.ToBencodex() ?? Null.Value);
    }
}
