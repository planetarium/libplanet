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

        private readonly HashNodeCache _cache;

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
        /// <param name="cache">The <see cref="HashNodeCache"/> to use as a cache.</param>
        public MerkleTrie(
            IKeyValueStore keyValueStore,
            HashDigest<SHA256> rootHash,
            HashNodeCache? cache = null)
            : this(keyValueStore, new HashNode(rootHash))
        {
        }

        /// <summary>
        /// An <see cref="ITrie"/> implementation.
        /// </summary>
        /// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
        /// nodes.</param>
        /// <param name="root">The root node of <see cref="MerkleTrie"/>.  If it is
        /// <see langword="null"/>, it will be treated like empty trie.</param>
        /// <param name="cache">The <see cref="HashNodeCache"/> to use as a cache.</param>
        public MerkleTrie(
            IKeyValueStore keyValueStore, INode? root = null, HashNodeCache? cache = null)
        {
            // FIXME: It might be a good idea to have something like IReadOnlyKeyValueStore.
            KeyValueStore = keyValueStore;
            Root = root is HashNode hashNode && hashNode.HashDigest.Equals(EmptyRootHash)
                ? null
                : root;
            _cache = cache ?? new HashNodeCache();
        }

        /// <inheritdoc cref="ITrie.Root"/>
        public INode? Root { get; }

        /// <inheritdoc cref="ITrie.Hash"/>
        public HashDigest<SHA256> Hash => Root?.Hash() ?? EmptyRootHash;

        /// <inheritdoc cref="ITrie.Recorded"/>
        public bool Recorded => Root is null || KeyValueStore.Exists(new KeyBytes(Hash.ByteArray));

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
                new PathCursor(key),
                new ValueNode(value),
                true);

            return new MerkleTrie(KeyValueStore, newRootNode);
        }

        /// <inheritdoc cref="ITrie.Get(KeyBytes)"/>
        public IValue? Get(KeyBytes key) => ResolveToValue(Root, new PathCursor(key));

        /// <inheritdoc cref="ITrie.Get(IReadOnlyList{KeyBytes})"/>
        public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys)
        {
            const int parallelThreshold = 4;
            return keys.Count <= parallelThreshold
                ? keys.Select(key => Get(key)).ToArray()
                : keys.AsParallel().Select(key => Get(key)).ToArray();
        }

        /// <inheritdoc cref="ITrie.GetNode(Nibbles)"/>
        public INode? GetNode(Nibbles nibbles) => ResolveToNode(Root, new PathCursor(nibbles));

        /// <inheritdoc cref="ITrie.IterateValues"/>
        public IEnumerable<(KeyBytes Path, IValue Value)> IterateValues()
        {
            foreach ((var path, var node) in IterateNodes())
            {
                if (node is ValueNode valueNode)
                {
                    yield return (path.ToKeyBytes(), valueNode.Value);
                }
            }
        }

        public IEnumerable<(Nibbles Path, INode Node)> IterateNodes()
        {
            if (Root is null)
            {
                yield break;
            }

            var queue = new Queue<(Nibbles, INode)>();
            queue.Enqueue((Nibbles.Empty, Root));

            while (queue.Count > 0)
            {
                (Nibbles path, INode node) = queue.Dequeue();
                yield return (path, node);
                switch (node)
                {
                    case FullNode fullNode:
                        foreach (int index in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                        {
                            INode? child = fullNode.Children[index];
                            if (!(child is null))
                            {
                                queue.Enqueue((path.Add((byte)index), child));
                            }
                        }

                        if (!(fullNode.Value is null))
                        {
                            queue.Enqueue((path, fullNode.Value));
                        }

                        break;

                    case ShortNode shortNode:
                        if (!(shortNode.Value is null))
                        {
                            queue.Enqueue((path.AddRange(shortNode.Key), shortNode.Value));
                        }

                        break;

                    case HashNode hashNode:
                        queue.Enqueue((path, UnhashNode(hashNode)));
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

                var node = NodeDecoder.Decode(_codec.Decode(value), NodeDecoder.AnyNodeType);
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
                Nibbles newShortNodeKey = shortNode.Key.Skip(commonNibbles.Length + 1);

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
                fullNode = nextCursor.RemainingNibbleLength > 0
                    ? fullNode.SetChild(
                        nextCursor.NextNibble,
                        InsertToNullNode(nextCursor.Next(1), value))
                    : fullNode.SetChild(
                        FullNode.ChildrenCount - 1,
                        value);

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
            INode unhashedNode = UnhashNode(hashNode);
            return Insert(unhashedNode, cursor, value, allowNull);
        }

        /// <summary>
        /// Gets the concrete inner node corresponding to <paramref name="hashNode"/> from storage.
        /// </summary>
        /// <param name="hashNode">The <see cref="HashNode"/> to un-hash and retrieve
        /// the inner node from.</param>
        /// <returns>The node corresponding to <paramref name="hashNode"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when <paramref name="hashNode"/>'s
        /// <see cref="HashNode.HashDigest"/> is not found in storage.</exception>
        /// <remarks>
        /// As <see langword="null"/> is never hashed, this is never <see langword="null"/>.
        /// Specifically, hashing of <see langword="null"/> never happens.
        /// Calling of this method is explicitly bypassed for an empty <see cref="ITrie"/>.
        /// </remarks>
        private INode UnhashNode(HashNode hashNode)
        {
            IValue intermediateEncoding;
            if (_cache.TryGetValue(hashNode.HashDigest, out var value))
            {
                intermediateEncoding = value!;
            }
            else
            {
                intermediateEncoding =
                    _codec.Decode(KeyValueStore.Get(new KeyBytes(hashNode.HashDigest.ByteArray)));
                _cache.AddOrUpdate(hashNode.HashDigest, intermediateEncoding);
            }

            return NodeDecoder.Decode(intermediateEncoding, NodeDecoder.HashEmbeddedNodeType) ??
                throw new NullReferenceException();
        }
    }
}
