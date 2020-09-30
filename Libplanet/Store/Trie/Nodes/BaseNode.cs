#nullable enable
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal abstract class BaseNode : INode
    {
        private static Codec _codec;

        static BaseNode()
        {
            _codec = new Codec();
        }

        protected BaseNode(INode? value)
        {
            Value = value;
        }

        // It will not support embedded node.
        public INode? Value { get; }

        public byte[] Serialize() => _codec.Encode(ToBencodex());

        public abstract IValue ToBencodex();
    }
}
