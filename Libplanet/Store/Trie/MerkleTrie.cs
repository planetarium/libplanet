#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Misc;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// An <see cref="ITrie"/> implementation implemented
    /// <see href="https://eth.wiki/fundamentals/patricia-tree">Merkle Patricia Trie</see>.
    /// </summary>
    // TODO: implement 'logs' for debugging.
    [Equals]
    public class MerkleTrie : ITrie
    {
        public static readonly HashDigest<SHA256> EmptyRootHash;

        private static Codec _codec;

        private readonly bool _secure;

        static MerkleTrie()
        {
            _codec = new Codec();
            var bxNull = _codec.Encode(Null.Value!);
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
        /// <param name="root">The root node of <see cref="MerkleTrie"/>. If it is <c>null</c>,
        /// it will be treated like empty trie.</param>
        /// <param name="secure">Whether to use <see cref="MerkleTrie"/> in secure
        /// mode. If it is true, <see cref="MerkleTrie"/> will stores the value with the hashed
        /// result from the given key as the key. Keys will be hashed with SHA-256.</param>
        internal MerkleTrie(IKeyValueStore keyValueStore, INode? root = null, bool secure = false)
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
        public bool Recorded => Root is null || KeyValueStore.Exists(Hash.ToByteArray());

        internal INode? Root { get; }

        private IKeyValueStore KeyValueStore { get; }

        public static bool operator ==(MerkleTrie left, MerkleTrie right) =>
            Operator.Weave(left, right);

        public static bool operator !=(MerkleTrie left, MerkleTrie right) =>
            Operator.Weave(left, right);

        /// <inheritdoc/>
        public ITrie Set(byte[] key, IValue value)
        {
            if (value is null)
            {
                throw new ArgumentNullException(nameof(value));
            }

            INode newRootNode = Insert(
                Root,
                ImmutableArray<byte>.Empty,
                ToKey(key).ToImmutableArray(),
                new ValueNode(value));

            return new MerkleTrie(KeyValueStore, newRootNode, _secure);
        }

        /// <inheritdoc/>
        public bool TryGet(byte[] key, out IValue? value)
        {
            return TryGet(
                Root,
                ImmutableArray<byte>.Empty,
                ToKey(key).ToImmutableArray(),
                out value);
        }

        /// <inheritdoc/>
        public ITrie Commit()
        {
            if (Root is null)
            {
                return new MerkleTrie(KeyValueStore, new HashNode(EmptyRootHash));
            }

            var values = new ConcurrentDictionary<byte[], byte[]>(
                new ArrayEqualityComparer<byte>());
            var newRoot = Commit(Root, values);

            // It assumes embedded node if it's not HashNode.
            if (!(newRoot is HashNode))
            {
                byte[] serialized = _codec.Encode(newRoot.ToBencodex());
                KeyValueStore.Set(
                    HashDigest<SHA256>.DeriveFrom(serialized).ToByteArray(),
                    serialized
                );
            }

            KeyValueStore.Set(values);
            var rv = new MerkleTrie(KeyValueStore, newRoot);
            return rv;
        }

        internal IEnumerable<HashDigest<SHA256>> IterateHashNodes()
        {
            return IterateNodes().Where(pair => pair.Node is HashNode)
                .Select(pair => ((HashNode)pair.Node).HashDigest);
        }

        internal IEnumerable<(INode Node, ImmutableArray<byte> Path)> IterateNodes()
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
                yield return (node, path);
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

        private INode Commit(INode node, IDictionary<byte[], byte[]> values)
        {
            switch (node)
            {
                case HashNode _:
                    return node;

                case FullNode fullNode:
                    return CommitFullNode(fullNode, values);

                case ShortNode shortNode:
                    return CommitShortNode(shortNode, values);

                case ValueNode valueNode:
                    return CommitValueNode(valueNode, values);

                default:
                    throw new NotSupportedException("Not supported node came.");
            }
        }

        private INode CommitFullNode(FullNode fullNode, IDictionary<byte[], byte[]> values)
        {
            var virtualChildren = fullNode.Children
                .Select(c => c is null ? null : Commit(c, values))
                .ToImmutableArray();

            fullNode = new FullNode(virtualChildren);
            IValue encoded = fullNode.ToBencodex();

            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return fullNode;
            }

            byte[] nodeHash = Encode(fullNode.ToBencodex(), values);
            return new HashNode(new HashDigest<SHA256>(nodeHash));
        }

        private INode CommitShortNode(ShortNode shortNode, IDictionary<byte[], byte[]> values)
        {
            var committedValueNode = Commit(shortNode.Value!, values);
            shortNode = new ShortNode(shortNode.Key, committedValueNode);
            IValue encoded = shortNode.ToBencodex();
            if (encoded.EncodingLength <= HashDigest<SHA256>.Size)
            {
                return shortNode;
            }

            byte[] nodeHash = Encode(encoded, values);
            return new HashNode(new HashDigest<SHA256>(nodeHash));
        }

        private INode CommitValueNode(ValueNode valueNode, IDictionary<byte[], byte[]> values)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            byte[] nodeHash = Encode(encoded, values);
            return new HashNode(new HashDigest<SHA256>(nodeHash));
        }

        private byte[] Encode(IValue value, IDictionary<byte[], byte[]> values)
        {
            byte[] serialized = _codec.Encode(value);
            byte[] nodeHash = SHA256.Create().ComputeHash(serialized);
            values[nodeHash] = serialized;
            return nodeHash;
        }

        private INode Insert(
            INode? node,
            ImmutableArray<byte> prefix,
            ImmutableArray<byte> key,
            INode value)
        {
            // If path exists only last one
            if (key.Length == 0)
            {
                return value;
            }

            switch (node)
            {
                case ShortNode shortNode:
                    return InsertShortNode(shortNode, prefix, key, value);

                case FullNode fullNode:
                    var n = Insert(
                        fullNode.Children[key[0]],
                        prefix.Add(key[0]),
                        key.Skip(1).ToImmutableArray(),
                        value);
                    return fullNode.SetChild(key[0], n);

                case null:
                    return new ShortNode(key.ToArray(), value);

                case HashNode hashNode:
                    var hn = GetNode(hashNode.HashDigest);
                    return Insert(hn, prefix, key, value);

                default:
                    throw new InvalidTrieNodeException(
                        $"Unsupported node value: {node.ToBencodex().Inspect(false)}"
                    );
            }
        }

        private INode InsertShortNode(
            ShortNode shortNode,
            ImmutableArray<byte> prefix,
            ImmutableArray<byte> key,
            INode value)
        {
            int CommonPrefixLen(ImmutableArray<byte> a, ImmutableArray<byte> b)
            {
                var length = Math.Min(a.Length, b.Length);
                foreach (var i in Enumerable.Range(0, length))
                {
                    if (a[i] != b[i])
                    {
                        return i;
                    }
                }

                return length;
            }

            int commonPrefixLength = CommonPrefixLen(shortNode.Key, key);
            if (commonPrefixLength == shortNode.Key.Length)
            {
                var nn = Insert(
                    shortNode.Value,
                    prefix.AddRange(key.Take(commonPrefixLength)),
                    key.Skip(commonPrefixLength).ToImmutableArray(),
                    value);
                return new ShortNode(shortNode.Key, nn);
            }

            var branch = new FullNode();
            branch = branch.SetChild(
                key[commonPrefixLength],
                Insert(
                    null,
                    prefix.AddRange(key.Take(commonPrefixLength + 1)),
                    key.Skip(commonPrefixLength + 1).ToImmutableArray(),
                    value));
            branch = branch.SetChild(
                shortNode.Key[commonPrefixLength],
                Insert(
                    null,
                    prefix.AddRange(shortNode.Key.Take(commonPrefixLength + 1)),
                    shortNode.Key.Skip(commonPrefixLength + 1).ToImmutableArray(),
                    shortNode.Value!));

            if (commonPrefixLength == 0)
            {
                return branch;
            }

            // extension node
            return new ShortNode(key.Take(commonPrefixLength).ToArray(), branch);
        }

        private bool TryGet(
            INode? node,
            ImmutableArray<byte> prefix,
            ImmutableArray<byte> path,
            out IValue? value)
        {
            switch (node)
            {
                case null:
                    value = null;
                    return false;

                case ValueNode valueNode:
                    value = valueNode.Value;
                    return true;

                case ShortNode shortNode:
                    if (path.Length < shortNode.Key.Length
                        || !path.Take(shortNode.Key.Length).SequenceEqual(shortNode.Key))
                    {
                        value = null;
                        return false;
                    }

                    return TryGet(
                        shortNode.Value,
                        prefix.AddRange(path.Take(shortNode.Key.Length)),
                        path.Skip(shortNode.Key.Length).ToImmutableArray(),
                        out value);

                case FullNode fullNode:
                    INode? childNode = fullNode.Children[path[0]];
                    return TryGet(
                        childNode,
                        prefix.Add(path[0]).ToImmutableArray(),
                        path.Skip(1).ToImmutableArray(),
                        out value);

                case HashNode hashNode:
                    try
                    {
                        INode? resolvedNode = GetNode(hashNode.HashDigest);
                        return TryGet(resolvedNode, prefix, path, out value);
                    }
                    catch (KeyNotFoundException)
                    {
                        value = null;
                        return false;
                    }

                default:
                    throw new InvalidTrieNodeException(
                        $"Invalid node value: {node.ToBencodex().Inspect(false)}"
                    );
            }
        }

        /// <summary>
        /// Gets the node corresponding to <paramref name="nodeHash"/> from storage,
        /// (i.e., <see cref="KeyValueStore"/>).
        /// </summary>
        /// <param name="nodeHash">The hash of node to get.</param>
        /// <returns>The node corresponding to <paramref name="nodeHash"/>.</returns>
        private INode? GetNode(HashDigest<SHA256> nodeHash)
        {
            return NodeDecoder.Decode(
                _codec.Decode(KeyValueStore.Get(nodeHash.ToByteArray())));
        }

        private byte[] ToKey(byte[] key)
        {
            if (_secure)
            {
                SHA256 hasher = SHA256.Create();
                key = hasher.ComputeHash(key);
            }

            var res = new byte[key.Length * 2];
            const int lowerBytesMask = 0b00001111;
            for (var i = 0; i < key.Length; ++i)
            {
                res[i * 2] = (byte)(key[i] >> 4);
                res[i * 2 + 1] = (byte)(key[i] & lowerBytesMask);
            }

            return res;
        }
    }
}
