using Bencodex;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    public class ValueNode : INode
    {
        public ValueNode(IValue value)
        {
            Value = value;
        }

        public IValue Value { get; }

        public byte[] Serialize()
        {
            var codec = new Codec();
            return codec.Encode(Value);
        }
    }
}
