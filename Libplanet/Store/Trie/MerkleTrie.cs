#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
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
            EmptyRootHash = Hashcash.Hash(
                _codec.Encode(default(Null)!));
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
        /// instead of bare keys.  <see cref="Hashcash.Hash" /> is used to hash them.</param>
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
        /// result from the given key as the key. It will hash with
        /// <see cref="Hashcash.Hash"/>.</param>
        internal MerkleTrie(IKeyValueStore keyValueStore, INode? root = null, bool secure = false)
        {
            KeyValueStore = keyValueStore;
            Root = root is HashNode hashNode && hashNode.HashDigest.Equals(EmptyRootHash)
                ? null
                : root;
            _secure = secure;
        }

        public HashDigest<SHA256> Hash => Root?.Hash() ?? EmptyRootHash;

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
        public ITrie Commit(bool rehearsal = false)
        {
            if (Root is null)
            {
                return new MerkleTrie(KeyValueStore, new HashNode(EmptyRootHash));
            }

            var newRoot = Commit(Root, rehearsal);

            // It assumes embedded node if it's not HashNode.
            if (!(newRoot is HashNode) && !rehearsal)
            {
                KeyValueStore.Set(newRoot.Hash().ToByteArray(), newRoot.Serialize());
            }

            return new MerkleTrie(KeyValueStore, newRoot);
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

        private INode Commit(INode node, bool rehearsal = false)
        {
            switch (node)
            {
                case HashNode _:
                    return node;

                case FullNode fullNode:
                    return CommitFullNode(fullNode, rehearsal);

                case ShortNode shortNode:
                    return CommitShortNode(shortNode, rehearsal);

                case ValueNode valueNode:
                    return CommitValueNode(valueNode, rehearsal);

                default:
                    throw new NotSupportedException("Not supported node came.");
            }
        }

        private INode CommitFullNode(FullNode fullNode, bool rehearsal)
        {
            var virtualChildren = new INode?[FullNode.ChildrenCount];
            for (int i = 0; i < FullNode.ChildrenCount; ++i)
            {
                INode? child = fullNode.Children[i];
                virtualChildren[i] = child is null
                    ? null
                    : Commit(child, rehearsal);
            }

            fullNode = new FullNode(virtualChildren.ToImmutableArray());
            if (fullNode.Serialize().Length <= HashDigest<SHA256>.Size)
            {
                return fullNode;
            }
            else
            {
                var fullNodeHash = fullNode.Hash();
                if (!rehearsal)
                {
                    KeyValueStore.Set(
                        fullNodeHash.ToByteArray(),
                        fullNode.Serialize());
                }

                return new HashNode(fullNodeHash);
            }
        }

        private INode CommitShortNode(ShortNode shortNode, bool rehearsal)
        {
            var committedValueNode = Commit(shortNode.Value!);
            shortNode = new ShortNode(shortNode.Key, committedValueNode);
            if (shortNode.Serialize().Length <= HashDigest<SHA256>.Size)
            {
                return shortNode;
            }
            else
            {
                var shortNodeHash = shortNode.Hash();
                if (!rehearsal)
                {
                    KeyValueStore.Set(
                        shortNodeHash.ToByteArray(),
                        shortNode.Serialize());
                }

                return new HashNode(shortNodeHash);
            }
        }

        private INode CommitValueNode(ValueNode valueNode, bool rehearsal)
        {
            int nodeSize = valueNode.Serialize().Length;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }
            else
            {
                var valueNodeHash = valueNode.Hash();
                if (!rehearsal)
                {
                    KeyValueStore.Set(
                        valueNodeHash.ToByteArray(),
                        valueNode.Serialize());
                }

                return new HashNode(valueNodeHash);
            }
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
                    throw new InvalidTrieNodeException("Not supported node came." +
                                                       $" raw: {node.ToBencodex().Inspection}");
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
                        $"Invalid node: raw: {node.ToBencodex().Inspection}");
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
                key = Hashcash.Hash(key).ToByteArray();
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
