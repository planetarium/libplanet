using System.Security.Cryptography;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Wrapper class.
    /// </summary>
    public class HashNode : INode
    {
        public HashNode(HashDigest<SHA256> hashDigest)
        {
            HashDigest = hashDigest;
        }

        public HashDigest<SHA256> HashDigest { get; }

        public byte[] Serialize()
        {
            return HashDigest.ToByteArray();
        }
    }
}
