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
            INode? root = trie.Root;
            if (root is null)
            {
                return trie;
            }
            else
            {
                var writeBatch = new WriteBatch(StateKeyValueStore, 4096);
                INode newRoot = Commit(root, writeBatch);

                // It assumes embedded node if it's not HashNode.
                if (!(newRoot is HashNode))
                {
                    byte[] serialized = _codec.Encode(newRoot.ToBencodex());
                    writeBatch.Add(
                        new KeyBytes(SHA256.Create().ComputeHash(serialized)), serialized);
                }

                writeBatch.Flush();

                // FIXME: StateKeyValueStore passed in might not be the same as
                // the one referenced by the argument trie.  Some kind of sanity check
                // would be nice, if possible.
                return new MerkleTrie(StateKeyValueStore, newRoot);
            }
        }

        private static INode Commit(INode node, WriteBatch writeBatch)
        {
            switch (node)
            {
                // NOTE: If it is a hashed node, it has been recorded already.
                case HashNode _:
                    return node;

                case FullNode fullNode:
                    return CommitFullNode(fullNode, writeBatch);

                case ShortNode shortNode:
                    return CommitShortNode(shortNode, writeBatch);

                case ValueNode valueNode:
                    return CommitValueNode(valueNode, writeBatch);

                default:
                    throw new NotSupportedException("Not supported node came.");
            }
        }

        private static INode CommitFullNode(FullNode fullNode, WriteBatch writeBatch)
        {
            var virtualChildren = fullNode.Children
                .Select(c => c is null ? null : Commit(c, writeBatch))
                .ToImmutableArray();

            fullNode = new FullNode(virtualChildren);
            IValue encoded = fullNode.ToBencodex();

            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return fullNode;
            }

            return Write(fullNode.ToBencodex(), writeBatch);
        }

        private static INode CommitShortNode(ShortNode shortNode, WriteBatch writeBatch)
        {
            // FIXME: Assumes value is not null.
            var committedValueNode = Commit(shortNode.Value!, writeBatch);
            shortNode = new ShortNode(shortNode.Key, committedValueNode);
            IValue encoded = shortNode.ToBencodex();
            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return shortNode;
            }

            return Write(encoded, writeBatch);
        }

        private static INode CommitValueNode(ValueNode valueNode, WriteBatch writeBatch)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            return Write(encoded, writeBatch);
        }

        /// <summary>
        /// Writes <paramref name="bencodedNode"/> to storage as an embeded <see cref="INode"/>.
        /// </summary>
        /// <param name="bencodedNode">The <see cref="IValue"/> representation of
        /// an <see cref="INode"/> to embed.</param>
        /// <param name="writeBatch">A batched writer to use for performance reasons.</param>
        /// <returns>A <see cref="HashNode"/> already written to storage with
        /// <paramref name="bencodedNode"/> embeded inside.</returns>
        private static HashNode Write(IValue bencodedNode, WriteBatch writeBatch)
        {
            byte[] serialized = _codec.Encode(bencodedNode);
            var nodeHash = HashDigest<SHA256>.DeriveFrom(serialized);
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
