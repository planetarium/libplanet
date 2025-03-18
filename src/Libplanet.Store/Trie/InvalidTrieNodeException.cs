using System;

namespace Libplanet.Store.Trie;

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
