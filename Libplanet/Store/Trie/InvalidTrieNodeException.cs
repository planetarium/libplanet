using System;
using System.Runtime.Serialization;

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

        protected InvalidTrieNodeException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
