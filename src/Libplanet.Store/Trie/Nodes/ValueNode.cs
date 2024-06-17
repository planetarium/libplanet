using System;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    public class ValueNode : INode, IEquatable<ValueNode>
    {
        public ValueNode(IValue value)
        {
            Value = value;
        }

        public IValue Value { get; }

        public static bool operator ==(ValueNode left, ValueNode right) => left.Equals(right);

        public static bool operator !=(ValueNode left, ValueNode right) => !left.Equals(right);

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(ValueNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node && Value.Equals(node.Value);
        }

        public override bool Equals(object? obj) => obj is ValueNode other && Equals(other);

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() => new List(Null.Value, Value);

        public override int GetHashCode() => Value.GetHashCode();
    }
}
