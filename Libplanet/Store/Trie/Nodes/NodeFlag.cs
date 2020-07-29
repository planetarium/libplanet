using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public struct NodeFlag
    {
        public NodeFlag(bool dirty, HashNode hash)
        {
            Dirty = dirty;
            Hash = hash;
        }

        public bool Dirty { get; }

        public HashNode Hash { get; }
    }
}
