using System;
using Bencodex;
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

        public byte[] Serialize()
        {
            var codec = new Codec();
            return codec.Encode(ToBencodex());
        }

        public IValue ToBencodex()
        {
            return new List(new IValue[] { default(Null), Value });
        }

        public bool Equals(ValueNode other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Equals(Value, other.Value);
        }

        public override bool Equals(object obj)
        {
            if (obj is null)
            {
                return false;
            }

            if (ReferenceEquals(this, obj))
            {
                return true;
            }

            if (obj.GetType() != this.GetType())
            {
                return false;
            }

            return Equals((ValueNode)obj);
        }

        public override int GetHashCode()
        {
            return !(Value is null) ? Value.GetHashCode() : 0;
        }
    }
}
