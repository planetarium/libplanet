using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store
{
    public partial class TrieStateStore
    {
        private static readonly Codec _codec = new Codec();

        /// <inheritdoc cref="IStateStore.Commit"/>
        public ITrie Commit(ITrie trie)
        {
            // FIXME: StateKeyValueStore used might not be the same as
            // the one referenced by the argument trie.  Some kind of sanity check
            // would be nice, if possible.
            INode? root = trie.Root;
            if (root is null)
            {
                return trie;
            }
            else
            {
                var writeBatch = new WriteBatch(StateKeyValueStore, 4096);
                INode newRoot = Commit(root, writeBatch, _cache);

                // It assumes embedded node if it's not HashNode.
                if (!(newRoot is HashNode))
                {
                    IValue bencoded = newRoot.ToBencodex();
                    byte[] serialized = _codec.Encode(bencoded);
                    byte[] hash = SHA256.Create().ComputeHash(serialized);

                    writeBatch.Add(new KeyBytes(hash), serialized);
                }

                writeBatch.Flush();

                return new MerkleTrie(StateKeyValueStore, newRoot, _cache);
            }
        }

        private static INode Commit(INode node, WriteBatch writeBatch, HashNodeCache cache)
        {
            switch (node)
            {
                // NOTE: If it is a hashed node, it has been recorded already.
                case HashNode _:
                    return node;

                case FullNode fullNode:
                    return CommitFullNode(fullNode, writeBatch, cache);

                case ShortNode shortNode:
                    return CommitShortNode(shortNode, writeBatch, cache);

                case ValueNode valueNode:
                    return CommitValueNode(valueNode, writeBatch, cache);

                default:
                    throw new NotSupportedException("Not supported node came.");
            }
        }

        private static INode CommitFullNode(
            FullNode fullNode, WriteBatch writeBatch, HashNodeCache cache)
        {
            var virtualChildren = fullNode.Children
                .Select(c => c is null ? null : Commit(c, writeBatch, cache))
                .ToImmutableArray();

            fullNode = new FullNode(virtualChildren);
            IValue encoded = fullNode.ToBencodex();

            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return fullNode;
            }

            return Write(fullNode.ToBencodex(), writeBatch, cache);
        }

        private static INode CommitShortNode(
            ShortNode shortNode, WriteBatch writeBatch, HashNodeCache cache)
        {
            // FIXME: Assumes value is not null.
            var committedValueNode = Commit(shortNode.Value!, writeBatch, cache);
            shortNode = new ShortNode(shortNode.Key, committedValueNode);
            IValue encoded = shortNode.ToBencodex();
            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return shortNode;
            }

            return Write(encoded, writeBatch, cache);
        }

        private static INode CommitValueNode(
            ValueNode valueNode, WriteBatch writeBatch, HashNodeCache cache)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            return Write(encoded, writeBatch, cache);
        }

        /// <summary>
        /// Writes <paramref name="bencodedNode"/> to storage as an embedded <see cref="INode"/>.
        /// </summary>
        /// <param name="bencodedNode">The <see cref="IValue"/> representation of
        /// an <see cref="INode"/> to embed.</param>
        /// <param name="writeBatch">A batched writer to use for performance reasons.</param>
        /// <returns>A <see cref="HashNode"/> already written to storage with
        /// <paramref name="bencodedNode"/> embedded inside.</returns>
        /// <param name="cache">A <see cref="HashNodeCache"/> to cache nodes.</param>
        private static HashNode Write(
            IValue bencodedNode, WriteBatch writeBatch, HashNodeCache cache)
        {
            byte[] serialized = _codec.Encode(bencodedNode);
            var nodeHash = HashDigest<SHA256>.DeriveFrom(serialized);
            cache.AddOrUpdate(nodeHash, bencodedNode);
            writeBatch.Add(new KeyBytes(nodeHash.ByteArray), serialized);
            return new HashNode(nodeHash);
        }

        private class WriteBatch
        {
            private readonly IKeyValueStore _store;
            private readonly int _batchSize;
            private readonly Dictionary<KeyBytes, byte[]> _batch;

            public WriteBatch(IKeyValueStore store, int batchSize)
            {
                _store = store;
                _batchSize = batchSize;
                _batch = new Dictionary<KeyBytes, byte[]>(_batchSize);
            }

            public bool ContainsKey(KeyBytes key) => _batch.ContainsKey(key);

            public void Add(KeyBytes key, byte[] value)
            {
                _batch[key] = value;

                if (_batch.Count == _batchSize)
                {
                    Flush();
                }
            }

            public void Flush()
            {
                _store.Set(_batch);
                _batch.Clear();
            }
        }
    }
}
