using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal abstract class BaseNode : INode
    {
        public BaseNode(INode value)
        {
            Value = value;
        }

        public HashDigest<SHA256> Hash
        {
            get
            {
                return Hashcash.Hash(Serialize());
            }
        }

        // It will not support embedded node.
        public INode Value { get; }

        public byte[] Serialize()
        {
            var codec = new Codec();
            return codec.Encode(ToBencodex());
        }

        public abstract IValue ToBencodex();
    }
}
