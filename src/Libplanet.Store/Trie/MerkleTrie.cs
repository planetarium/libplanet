using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
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
        /// <param name="cache">The <see cref="HashNodeCache"/> to use as cache.</param>
        public MerkleTrie(
            IKeyValueStore keyValueStore,
            HashDigest<SHA256> rootHash,
            HashNodeCache? cache = null)
            : this(keyValueStore, new HashNode(rootHash), cache)
        {
        }

        /// <summary>
        /// An <see cref="ITrie"/> implementation.
        /// </summary>
        /// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
        /// nodes.</param>
        /// <param name="root">The root node of <see cref="MerkleTrie"/>.  If it is
        /// <see langword="null"/>, it will be treated like empty trie.</param>
        /// <param name="cache">The <see cref="HashNodeCache"/> to use as cache.</param>
        public MerkleTrie(
            IKeyValueStore keyValueStore,
            INode? root = null,
            HashNodeCache? cache = null)
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

        /// <inheritdoc cref="ITrie.Set"/>
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

            return new MerkleTrie(KeyValueStore, newRootNode, _cache);
        }

        /// <inheritdoc cref="ITrie.Remove"/>
        public ITrie Remove(in KeyBytes key)
        {
            INode? newRootNode = RemoveFromRoot(new PathCursor(key));
            return new MerkleTrie(KeyValueStore, newRootNode, _cache);
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

        /// <inheritdoc cref="ITrie.IterateNodes"/>
        public IEnumerable<(Nibbles Path, INode Node)> IterateNodes() =>
            IterateSubTrieNodes(new KeyBytes(ImmutableArray<byte>.Empty));

        /// <summary>
        /// Iterates all values that can be reached from a sub-<see cref="ITrie"/> with
        /// <see cref="INode"/> at <paramref name="rootPath"/> as its root.
        /// </summary>
        /// <param name="rootPath">The <see cref="KeyBytes"/> path of an <see cref="INode"/>
        /// to use as the root of traversal.</param>
        /// <returns>All <see cref="IValue"/>s together with its <em>full</em>
        /// <see cref="KeyBytes"/> paths.</returns>
        /// <remarks>
        /// This requires an <see cref="INode"/> to exist at <paramref name="rootPath"/>.
        /// As such, this does not necessarily return all <see cref="INode"/> with paths starting
        /// with <paramref name="rootPath"/>.  In particular, if there doesn't exist
        /// an <see cref="INode"/> at <paramref name="rootPath"/>, this returns nothing.
        /// </remarks>
        public IEnumerable<(KeyBytes Path, IValue Value)> IterateSubTrieValues(KeyBytes rootPath)
        {
            foreach ((var path, var node) in IterateSubTrieNodes(rootPath))
            {
                if (node is ValueNode valueNode)
                {
                    yield return (path.ToKeyBytes(), valueNode.Value);
                }
            }
        }

        /// <summary>
        /// Iterates all sub-nodes from a sub-<see cref="ITrie"/> with <see cref="INode"/> at
        /// <paramref name="rootPath"/> as its root.
        /// </summary>
        /// <param name="rootPath">The <see cref="KeyBytes"/> path of an <see cref="INode"/>
        /// to use as the root of traversal.</param>
        /// <returns>All <see cref="INode"/>s together with its <em>full</em>
        /// <see cref="Nibbles"/> paths.</returns>
        /// <remarks>
        /// This requires an <see cref="INode"/> to exist at <paramref name="rootPath"/>.
        /// As such, this does not necessarily return all <see cref="INode"/> with paths starting
        /// with <paramref name="rootPath"/>.  In particular, if there doesn't exist
        /// an <see cref="INode"/> at <paramref name="rootPath"/>, this returns nothing.
        /// </remarks>
        public IEnumerable<(Nibbles Path, INode Node)> IterateSubTrieNodes(KeyBytes rootPath)
        {
            Nibbles rootPrefix = Nibbles.FromKeyBytes(rootPath);
            INode? root = GetNode(rootPrefix);
            if (root is { } node)
            {
                foreach (var pair in IterateNodes(rootPrefix, node))
                {
                    yield return pair;
                }
            }
            else
            {
                yield break;
            }
        }

        /// <summary>
        /// Iterates over <see cref="KeyBytes"/> and <see cref="byte[]"/> pairs stored
        /// necessary to fully represent this <see cref="ITrie"/>.
        /// </summary>
        /// <returns>An <see cref="IEnumerable"/> of all <see cref="KeyBytes"/> and
        /// <see cref="byte[]"/> pairs stored necessary to fully represent
        /// this <see cref="ITrie"/>.</returns>
        /// <exception cref="NullReferenceException">Thrown when a <see cref="HashNode"/>
        /// is encountered that can't be decoded into an <see cref="INode"/>.</exception>
        internal IEnumerable<(KeyBytes Key, byte[] Value)> IterateKeyValuePairs()
        {
            if (Root is null)
            {
                yield break;
            }

            var stack = new Stack<INode>();
            stack.Push(Root);

            while (stack.Count > 0)
            {
                INode node = stack.Pop();
                if (node is HashNode poppedHashNode)
                {
                    var storedKey = new KeyBytes(poppedHashNode.HashDigest.ByteArray);
                    var storedValue = KeyValueStore.Get(storedKey);
                    var intermediateEncoding = _codec.Decode(storedValue);
                    stack.Push(
                        NodeDecoder.Decode(
                            intermediateEncoding,
                            NodeDecoder.HashEmbeddedNodeType) ??
                            throw new NullReferenceException());
                    yield return (storedKey, storedValue);
                    continue;
                }

                switch (node)
                {
                    case FullNode fullNode:
                        foreach (int index in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                        {
                            INode? child = fullNode.Children[index];
                            if (child is HashNode childHashNode)
                            {
                                stack.Push(childHashNode);
                            }
                        }

                        if (fullNode.Value is HashNode fullNodeValueHashNode)
                        {
                            stack.Push(fullNodeValueHashNode);
                        }

                        break;

                    case ShortNode shortNode:
                        if (shortNode.Value is HashNode shortNodeValueHashNode)
                        {
                            stack.Push(shortNodeValueHashNode);
                        }

                        break;

                    case ValueNode _:
                        break;

                    case HashNode _:
                        throw new InvalidOperationException();
                }
            }
        }

        private IEnumerable<(Nibbles Path, INode Node)> IterateNodes(
            Nibbles rootPrefix,
            INode root)
        {
            var stack = new Stack<(Nibbles, INode)>();
            stack.Push((rootPrefix, root));

            while (stack.Count > 0)
            {
                (Nibbles path, INode node) = stack.Pop();
                yield return (path, node);
                switch (node)
                {
                    case FullNode fullNode:
                        foreach (int index in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                        {
                            INode? child = fullNode.Children[index];
                            if (!(child is null))
                            {
                                stack.Push((path.Add((byte)index), child));
                            }
                        }

                        if (!(fullNode.Value is null))
                        {
                            stack.Push((path, fullNode.Value));
                        }

                        break;

                    case ShortNode shortNode:
                        if (!(shortNode.Value is null))
                        {
                            stack.Push((path.AddRange(shortNode.Key), shortNode.Value));
                        }

                        break;

                    case HashNode hashNode:
                        stack.Push((path, UnhashNode(hashNode)));
                        break;
                }
            }
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
