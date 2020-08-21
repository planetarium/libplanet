#nullable enable
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    [Equals]
    internal class ValueNode : INode
    {
        public ValueNode(IValue value)
        {
            Value = value;
        }

        public IValue Value { get; }

        public static bool operator ==(ValueNode left, ValueNode right) =>
            Operator.Weave(left, right);

        public static bool operator !=(ValueNode left, ValueNode right) =>
            Operator.Weave(left, right);

        public byte[] Serialize()
        {
            var codec = new Codec();
            return codec.Encode(ToBencodex());
        }

        public IValue ToBencodex()
        {
            return new List(new IValue[] { default(Null)!, Value });
        }

        public override int GetHashCode() => Value?.GetHashCode() ?? 0;
    }
}
