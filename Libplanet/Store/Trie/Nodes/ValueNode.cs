using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    internal class ValueNode : INode, IEquatable<ValueNode>
    {
        public ValueNode(IValue value)
        {
            Value = value;
        }

        public IValue Value { get; }

        public static bool operator ==(ValueNode left, ValueNode right) => left.Equals(right);

        public static bool operator !=(ValueNode left, ValueNode right) => !left.Equals(right);

        public bool Equals(ValueNode? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Value.Equals(other.Value);
        }

        public override bool Equals(object? obj) => obj is ValueNode other && Equals(other);

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() =>
            new List(Null.Value, Value);

        public override int GetHashCode() => Value?.GetHashCode() ?? 0;
    }
}
