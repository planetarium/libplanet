using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class ShortNode : BaseNode, IEquatable<ShortNode>
    {
        public ShortNode(in ImmutableArray<byte> key, INode? value)
            : base(value)
        {
            Key = key.IsDefaultOrEmpty
                ? throw new ArgumentException($"Given {nameof(key)} cannot be empty", nameof(key))
                : key;
        }

        // FIXME: We should declare a custom value type to represent nibbles...
        public ImmutableArray<byte> Key { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(ShortNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Key.SequenceEqual(node.Key) &&
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
            new List(new Binary(Key), Value?.ToBencodex() ?? Null.Value);
    }
}
