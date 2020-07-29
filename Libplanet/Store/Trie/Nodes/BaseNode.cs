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
                Codec codec = new Codec();
                var bytes = codec.Encode(ToBencodex());
                return Hashcash.Hash(bytes);
            }
        }

        public INode Value { get; }

        public byte[] Serialize()
        {
            var codec = new Codec();
            return codec.Encode(ToBencodex());
        }

        protected abstract IValue ToBencodex();
    }
}
