using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An <see cref="ITrie"/> implementation implemented
    /// <see href="https://eth.wiki/fundamentals/patricia-tree">Merkle Patricia Trie</see>.
    /// </summary>
    // TODO: implement 'logs' for debugging.
    public partial class MerkleTrie : ITrie
    {
        public static readonly HashDigest<SHA256> EmptyRootHash;

        private static readonly Codec _codec;

        private readonly bool _secure;

        static MerkleTrie()
        {
            _codec = new Codec();
            var bxNull = _codec.Encode(Null.Value);
            EmptyRootHash = HashDigest<SHA256>.DeriveFrom(bxNull);
        }

        /// <summary>
        /// An <see cref="ITrie"/> implementation.
        /// </summary>
        /// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
        /// nodes.</param>
        /// <param name="rootHash">The root <see cref="ITrie.Hash"/> of
        /// <see cref="MerkleTrie"/>.</param>
        /// <param name="secure">Whether to use <see cref="MerkleTrie"/> in
        /// secure mode.  If it is turned on, <see cref="MerkleTrie"/> internally stores hashed keys
        /// instead of bare keys.  Keys will be hashed with SHA-256.</param>
        public MerkleTrie(
            IKeyValueStore keyValueStore,
            HashDigest<SHA256> rootHash,
            bool secure = false)
            : this(keyValueStore, new HashNode(rootHash), secure)
        {
        }

        /// <summary>
        /// An <see cref="ITrie"/> implementation.
        /// </summary>
        /// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
        /// nodes.</param>
        /// <param name="root">The root node of <see cref="MerkleTrie"/>.  If it is
        /// <see langword="null"/>, it will be treated like empty trie.</param>
        /// <param name="secure">Whether to use <see cref="MerkleTrie"/> in secure
        /// mode. If it is true, <see cref="MerkleTrie"/> will stores the value with the hashed
        /// result from the given key as the key. Keys will be hashed with SHA-256.</param>
        public MerkleTrie(IKeyValueStore keyValueStore, INode? root = null, bool secure = false)
        {
            KeyValueStore = keyValueStore;
            Root = root is HashNode hashNode && hashNode.HashDigest.Equals(EmptyRootHash)
                ? null
                : root;
            _secure = secure;
        }

        /// <inheritdoc cref="ITrie.Hash"/>
        public HashDigest<SHA256> Hash => Root?.Hash() ?? EmptyRootHash;

        /// <inheritdoc cref="ITrie.Recorded"/>
        public bool Recorded => Root is null || KeyValueStore.Exists(new KeyBytes(Hash.ByteArray));

        public INode? Root { get; }

        private IKeyValueStore KeyValueStore { get; }

        /// <inheritdoc/>
        public ITrie Set(in KeyBytes key, IValue value)
        {
            if (value is null)
            {
                throw new ArgumentNullException(nameof(value));
            }

            INode newRootNode = Insert(
                Root,
                new PathCursor(key, _secure),
                new ValueNode(value));

            return new MerkleTrie(KeyValueStore, newRootNode, _secure);
        }

        /// <inheritdoc cref="ITrie.Get(IReadOnlyList{KeyBytes})"/>
        public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys)
        {
            PathResolution[] resolutions = keys
                .Select(k => ResolvePath(Root, new PathCursor(k, _secure)))
                .ToArray();

            for (int i = 0; i < resolutions.Length; i++)
            {
                while (resolutions[i].Next is (HashDigest<SHA256> nodeHash, PathCursor cursor))
                {
                    KeyBytes nextNodeHash = new KeyBytes(nodeHash.ByteArray);
                    byte[] nodeValue = KeyValueStore.Get(nextNodeHash);
                    IValue intermediateEncoding = _codec.Decode(nodeValue);
                    INode? nextNode = NodeDecoder.Decode(intermediateEncoding);
                    resolutions[i] = ResolvePath(nextNode, cursor);
                }
            }

            return resolutions.Select(resolution => resolution.Value).ToArray();
        }

        /// <inheritdoc/>
        public ITrie Commit()
        {
            if (Root is null)
            {
                return new MerkleTrie(KeyValueStore, new HashNode(EmptyRootHash));
            }

            var writeBatch = new WriteBatch(KeyValueStore, 4096);
            INode newRoot = Commit(Root, writeBatch);

            // It assumes embedded node if it's not HashNode.
            if (!(newRoot is HashNode))
            {
                byte[] serialized = _codec.Encode(newRoot.ToBencodex());
                writeBatch.Add(new KeyBytes(SHA256.Create().ComputeHash(serialized)), serialized);
            }

            writeBatch.Flush();

            return new MerkleTrie(KeyValueStore, newRoot);
        }

        public IEnumerable<(INode Node, KeyBytes Path)> IterateNodes()
        {
            if (Root is null)
            {
                yield break;
            }

            var queue = new Queue<(INode, ImmutableArray<byte>)>();
            queue.Enqueue((Root, ImmutableArray<byte>.Empty));

            while (queue.Count > 0)
            {
                (INode node, ImmutableArray<byte> path) = queue.Dequeue();
                yield return (node, new KeyBytes(path));
                switch (node)
                {
                    case FullNode fullNode:
                        foreach (int index in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                        {
                            INode? child = fullNode.Children[index];
                            if (!(child is null))
                            {
                                queue.Enqueue((child, path.Add((byte)index)));
                            }
                        }

                        if (!(fullNode.Value is null))
                        {
                            queue.Enqueue((fullNode.Value, path));
                        }

                        break;

                    case ShortNode shortNode:
                        if (!(shortNode.Value is null))
                        {
                            queue.Enqueue((
                                    shortNode.Value,
                                    path.Concat(shortNode.Key).ToImmutableArray()));
                        }

                        break;

                    case HashNode hashNode:
                        INode? nn = GetNode(hashNode.HashDigest);
                        if (!(nn is null))
                        {
                            queue.Enqueue((nn, path));
                        }

                        break;
                }
            }
        }

        internal IEnumerable<HashDigest<SHA256>> IterateHashNodes()
        {
            return IterateNodes().Where(pair => pair.Node is HashNode)
                .Select(pair => ((HashNode)pair.Node).HashDigest);
        }

        internal IEnumerable<(KeyBytes Key, byte[] Value)> IterateNodeKeyValuePairs()
        {
            if (Root is null)
            {
                yield break;
            }

            var queue =
                new Queue<(KeyBytes Key, byte[] Value, ImmutableArray<byte> Path)>();
            switch (Root)
            {
                case ValueNode valueNode:
                    var value = _codec.Encode(valueNode.ToBencodex());
                    var key = new KeyBytes(HashDigest<SHA256>.DeriveFrom(value).ByteArray);
                    yield return (key, value);
                    yield break;

                case HashNode hashNode:
                    key = new KeyBytes(hashNode.HashDigest.ToByteArray());
                    queue.Enqueue((key, KeyValueStore.Get(key), ImmutableArray<byte>.Empty));
                    break;

                case FullNode _:
                case ShortNode _:
                    value = _codec.Encode(Root.ToBencodex());
                    key = new KeyBytes(HashDigest<SHA256>.DeriveFrom(value).ByteArray);
                    queue.Enqueue((key, value, ImmutableArray<byte>.Empty));
                    break;
            }

            bool GuessValueNodeByPath(in ImmutableArray<byte> path)
            {
                if (path.Length < 2)
                {
                    return false;
                }

                bool isStartedWithUnderbar = (path[0] << 4) + path[1] == '_';

                bool isStatePath = !isStartedWithUnderbar &&
                                   path.Length == Address.Size * 2 * 2;
                return isStatePath;
            }

            while (queue.Count > 0)
            {
                (KeyBytes key, byte[] value, ImmutableArray<byte> path) =
                    queue.Dequeue();

                // It assumes every length of value nodes is same with Address' hexadecimal
                // string's hexadecimal string's size.
                bool isValueNode = GuessValueNodeByPath(path);

                yield return (key, value);

                if (isValueNode)
                {
                    continue;
                }

                var node = NodeDecoder.Decode(_codec.Decode(value));
                if (isValueNode)
                {
                    continue;
                }

                switch (node)
                {
                    case FullNode fullNode:
                        foreach (int index in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                        {
                            INode? child = fullNode.Children[index];
                            if (child is HashNode hashNode)
                            {
                                key = new KeyBytes(hashNode.HashDigest.ByteArray);
                                value = KeyValueStore.Get(key);
                                queue.Enqueue((key, value, path.Add((byte)index)));
                            }
                        }

                        switch (fullNode.Value)
                        {
                            case HashNode hashNode:
                                key = new KeyBytes(hashNode.HashDigest.ByteArray);
                                value = KeyValueStore.Get(key);
                                queue.Enqueue((key, value, path));
                                break;
                        }

                        break;

                    case ShortNode shortNode:
                        switch (shortNode.Value)
                        {
                            case HashNode hashNode:
                                key = new KeyBytes(hashNode.HashDigest.ByteArray);
                                value = KeyValueStore.Get(key);
                                queue.Enqueue((key, value, path.AddRange(shortNode.Key)));
                                break;
                        }

                        break;

                    case ValueNode _:
                        break;

                    default:
                        throw new InvalidOperationException();
                }
            }
        }

        private INode Commit(INode node, WriteBatch writeBatch)
        {
            switch (node)
            {
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

        private INode CommitFullNode(FullNode fullNode, WriteBatch writeBatch)
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

            return Encode(fullNode.ToBencodex(), writeBatch);
        }

        private INode CommitShortNode(ShortNode shortNode, WriteBatch writeBatch)
        {
            var committedValueNode = Commit(shortNode.Value!, writeBatch);
            shortNode = new ShortNode(shortNode.Key, committedValueNode);
            IValue encoded = shortNode.ToBencodex();
            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return shortNode;
            }

            return Encode(encoded, writeBatch);
        }

        private INode CommitValueNode(ValueNode valueNode, WriteBatch writeBatch)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            return Encode(encoded, writeBatch);
        }

        private HashNode Encode(IValue intermediateEncoding, WriteBatch writeBatch)
        {
            byte[] serialized = _codec.Encode(intermediateEncoding);
            var nodeHash = HashDigest<SHA256>.DeriveFrom(serialized);
            writeBatch.Add(new KeyBytes(nodeHash.ByteArray), serialized);
            return new HashNode(nodeHash);
        }

        private INode Insert(INode? node, in PathCursor cursor, INode value)
        {
            // If path exists only last one
            if (!cursor.RemainingAnyNibbles)
            {
                return value;
            }

            switch (node)
            {
                case ShortNode shortNode:
                    return InsertShortNode(shortNode, cursor, value);

                case FullNode fullNode:
                    byte nextNibble = cursor.NextNibble;
                    var n = Insert(
                        fullNode.Children[nextNibble],
                        cursor.Next(1),
                        value);
                    return fullNode.SetChild(nextNibble, n);

                case null:
                    return new ShortNode(cursor.GetRemainingNibbles(), value);

                case HashNode hashNode:
                    var hn = GetNode(hashNode.HashDigest);
                    return Insert(hn, cursor, value);

                default:
                    throw new InvalidTrieNodeException(
                        $"Unsupported node value: {node.ToBencodex().Inspect(false)}"
                    );
            }
        }

        private INode InsertShortNode(ShortNode shortNode, in PathCursor cursor, INode value)
        {
            int commonPrefixLength = cursor.CountCommonStartingNibbles(shortNode.Key);
            if (commonPrefixLength == shortNode.Key.Length)
            {
                INode nn = Insert(shortNode.Value, cursor.Next(commonPrefixLength), value);
                return new ShortNode(shortNode.Key, nn);
            }

            var branch = new FullNode();
            branch = branch.SetChild(
                cursor.NibbleAt(commonPrefixLength),
                Insert(null, cursor.Next(commonPrefixLength + 1), value)
            );
            PathCursor branchCursor =
                PathCursor.FromNibbles(shortNode.Key, commonPrefixLength + 1);
            branch = branch.SetChild(
                shortNode.Key[commonPrefixLength],
                Insert(null, branchCursor, shortNode.Value!)
            );

            if (commonPrefixLength == 0)
            {
                return branch;
            }

            // extension node
            ImmutableArray<byte> commonPrefixNibbles = shortNode.Key.RemoveRange(
                commonPrefixLength,
                shortNode.Key.Length - commonPrefixLength
            );
            return new ShortNode(commonPrefixNibbles, branch);
        }

        /// <summary>
        /// Gets the node corresponding to <paramref name="nodeHash"/> from storage,
        /// (i.e., <see cref="KeyValueStore"/>).
        /// </summary>
        /// <param name="nodeHash">The hash of node to get.</param>
        /// <returns>The node corresponding to <paramref name="nodeHash"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when the <paramref name="nodeHash"/> is
        /// not found.</exception>
        private INode? GetNode(HashDigest<SHA256> nodeHash)
        {
            IValue intermediateEncoding = _codec.Decode(
                KeyValueStore.Get(new KeyBytes(nodeHash.ByteArray)));
            return NodeDecoder.Decode(intermediateEncoding);
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
