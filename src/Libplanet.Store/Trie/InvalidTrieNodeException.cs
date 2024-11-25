using System;

namespace Libplanet.Store.Trie
{
    [Serializable]
    public class InvalidTrieNodeException : Exception
    {
        public InvalidTrieNodeException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        public InvalidTrieNodeException(string message)
            : base(message)
        {
        }
    }
}
