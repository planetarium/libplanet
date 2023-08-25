using System;
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
                new ValueNode(value),
                true);

            return new MerkleTrie(KeyValueStore, newRootNode, _secure);
        }

        /// <inheritdoc cref="ITrie.Get(KeyBytes)"/>
        public IValue? Get(KeyBytes key) => ResolvePath(Root, new PathCursor(key, _secure));

        /// <inheritdoc cref="ITrie.Get(IReadOnlyList{KeyBytes})"/>
        public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys)
        {
            const int parallelThreshold = 4;
            return keys.Count <= parallelThreshold
                ? keys.Select(key => Get(key)).ToArray()
                : keys.AsParallel().Select(key => Get(key)).ToArray();
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
                                    path.Concat(shortNode.Key.ByteArray).ToImmutableArray()));
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
                                queue.Enqueue((key, value, path.AddRange(shortNode.Key.ByteArray)));
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
            // FIXME: Assumes value is not null.
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

        private INode Insert(
            INode? node,
            in PathCursor cursor,
            ValueNode value,
            bool allowNull)
        {
            switch (node)
            {
                case HashNode hashNode:
                    return InsertToHashNode(hashNode, cursor, value, allowNull);

                case null:
                    return allowNull
                        ? InsertToNullNode(cursor, value)
                        : throw new NullReferenceException(
                            $"Given {nameof(node)} is not allowed to be null");

                case ValueNode valueNode:
                    return InsertToValueNode(valueNode, cursor, value);

                case ShortNode shortNode:
                    return InsertToShortNode(shortNode, cursor, value);

                case FullNode fullNode:
                    return InsertToFullNode(fullNode, cursor, value);

                default:
                    throw new InvalidTrieNodeException(
                        $"Unsupported node value: {node.ToBencodex().Inspect(false)}");
            }
        }

        // Note: Should not be called on short node or full node's value.
        private INode InsertToNullNode(PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                return new ShortNode(cursor.GetRemainingNibbles(), value);
            }
            else
            {
                return value;
            }
        }

        // Note: Should not be called on full node's value.
        private INode InsertToValueNode(ValueNode valueNode, PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                return new FullNode()
                    .SetChild(FullNode.ChildrenCount - 1, valueNode)
                    .SetChild(cursor.NextNibble, InsertToNullNode(cursor.Next(1), value));
            }
            else
            {
                // Overwrite existing value
                return value;
            }
        }

        private INode InsertToShortNode(ShortNode shortNode, in PathCursor cursor, ValueNode value)
        {
            // Two cases are possible:
            // - common prefix length == short node's key length: insert directly into short node's
            //   value
            // - common prefix length < short node's key length: branch off and handle remaining
            //   short node and remaining path
            //   - in this case, a full node is created at current cursor + common prefix nibbles
            Nibbles commonNibbles = cursor.GetCommonStartingNibbles(shortNode.Key);
            PathCursor nextCursor = cursor.Next(commonNibbles.Length);

            if (commonNibbles.Length == shortNode.Key.Length)
            {
                // FIXME: This assumes short node's value is not null.
                return new ShortNode(
                    shortNode.Key,
                    Insert(shortNode.Value, nextCursor, value, false));
            }
            else
            {
                FullNode fullNode = new FullNode();
                byte newChildIndex = shortNode.Key[commonNibbles.Length];
                Nibbles newShortNodeKey =
                    new Nibbles(
                        shortNode.Key.ByteArray.Skip(commonNibbles.Length + 1).ToImmutableArray());

                // FIXME: Deal with null; this assumes short node's value is not null
                // Handles modified short node.
                fullNode = newShortNodeKey.Length > 0
                    ? fullNode.SetChild(
                        newChildIndex,
                        new ShortNode(newShortNodeKey, shortNode.Value))
                    : fullNode.SetChild(newChildIndex, shortNode.Value!);

                // Handles value node.
                // Assumes next cursor nibble (including non-remaining case)
                // does not conflict with short node above.
                if (nextCursor.RemainingNibbleLength > 0)
                {
                    fullNode = fullNode.SetChild(
                        nextCursor.NextNibble,
                        InsertToNullNode(nextCursor.Next(1), value));
                }
                else
                {
                    fullNode = fullNode.SetChild(
                        FullNode.ChildrenCount - 1,
                        value);
                }

                // Full node is created at the branching point and may not be at the original root.
                if (commonNibbles.Length == 0)
                {
                    return fullNode;
                }
                else
                {
                    return new ShortNode(
                        commonNibbles,
                        fullNode);
                }
            }
        }

        private INode InsertToFullNode(FullNode fullNode, PathCursor cursor, ValueNode value)
        {
            if (cursor.RemainingAnyNibbles)
            {
                byte nextNibble = cursor.NextNibble;
                return fullNode.SetChild(
                    nextNibble,
                    Insert(fullNode.Children[nextNibble], cursor.Next(1), value, true));
            }
            else
            {
                // Overwrite existing value
                return fullNode.SetChild(FullNode.ChildrenCount - 1, value);
            }
        }

        private INode InsertToHashNode(
            HashNode hashNode,
            PathCursor cursor,
            ValueNode value,
            bool allowNull)
        {
            // FIXME: Probably needs to check unhashedNode to be ValueNode, ShortNode, or FullNode.
            INode? unhashedNode = GetNode(hashNode.HashDigest);
            return Insert(unhashedNode, cursor, value, allowNull);
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
