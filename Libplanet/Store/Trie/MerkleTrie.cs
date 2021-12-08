#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
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

        private const long OffloadThresholdBytes = 256L;

        private static readonly ConcurrentDictionary<Fingerprint, WeakReference<IValue>> _valueCache
            = new ConcurrentDictionary<Fingerprint, WeakReference<IValue>>();

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
                values[SHA256.Create().ComputeHash(serialized)] = serialized;
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

        private static void FreeValueCache()
        {
            foreach (KeyValuePair<Fingerprint, WeakReference<IValue>> kv in _valueCache)
            {
                if (!kv.Value.TryGetTarget(out _))
                {
                    _valueCache.TryRemove(kv.Key, out _);
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

            return Encode(fullNode.ToBencodex(), values);
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

            return Encode(encoded, values);
        }

        private INode CommitValueNode(ValueNode valueNode, IDictionary<byte[], byte[]> values)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            return Encode(encoded, values);
        }

        private HashNode Encode(IValue intermediateEncoding, IDictionary<byte[], byte[]> values)
        {
            var offloadOptions = new OffloadOptions(OffloadThresholdBytes, values, KeyValueStore);
            byte[] serialized = _codec.Encode(intermediateEncoding, offloadOptions);
            byte[] fullEncoding = offloadOptions.Offloaded
                ? _codec.Encode(intermediateEncoding)
                : serialized;
            byte[] nodeHash = SHA256.Create().ComputeHash(fullEncoding);
            values[nodeHash] = serialized;
            return new HashNode(new HashDigest<SHA256>(nodeHash));
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
            IValue intermediateEncoding = _codec.Decode(
                KeyValueStore.Get(nodeHash.ToByteArray()),
                LoadIndirectValue
            );
            return NodeDecoder.Decode(intermediateEncoding);
        }

        private IValue LoadIndirectValue(Fingerprint fp)
        {
            if (fp.EncodingLength >= OffloadThresholdBytes &&
                _valueCache.TryGetValue(fp, out WeakReference<IValue>? weakRef) &&
                weakRef is { } w)
            {
                if (w.TryGetTarget(out IValue? cached) && cached is { } cachedValue)
                {
                    return cachedValue;
                }

                _valueCache.TryRemove(fp, out _);
            }

            if (fp.Kind != ValueKind.Dictionary)
            {
                FreeValueCache();
                IValue v = _codec.Decode(KeyValueStore.Get(fp.Serialize()), LoadIndirectValue);
                if (fp != v.Fingerprint)
                {
                    throw new InvalidOperationException(
                        $"Failed to load an offloaded value." +
                        $"\nExpected: {fp}\nActual:   {v.Fingerprint}\nLoaded:   {v}"
                    );
                }
                else if (fp.EncodingLength >= OffloadThresholdBytes)
                {
                    _valueCache[fp] = new WeakReference<IValue>(v);
                }

                return v;
            }

            var pair = (List)_codec.Decode(KeyValueStore.Get(fp.Serialize()), LoadIndirectValue);
            IEnumerable<IndirectValue> reprs =
                pair.EnumerateIndirectValues(out IndirectValue.Loader? reprLoader);
            Dictionary value;
            if (reprLoader is { } l)
            {
                IndirectValue keysIv = reprs.First();
                var keys = keysIv.LoadedValue is List lst ? lst : (List)keysIv.GetValue(l);
                IEnumerable<KeyValuePair<IKey, IndirectValue>> indirectPairs = keys.Zip(
                    reprs.Skip(1).Select(group => (List)group.GetValue(l)).SelectMany(vs =>
                        vs.EnumerateIndirectValues(out _)
                    ),
                    (k, v) => new KeyValuePair<IKey, IndirectValue>((IKey)k, v)
                );
                value = new Dictionary(indirectPairs, l);
            }
            else
            {
                var keys = (List)pair[0];
                IEnumerable<KeyValuePair<IKey, IValue>> pairs = keys.Zip(
                    pair.Skip(1).SelectMany(group => (List)group),
                    (k, v) => new KeyValuePair<IKey, IValue>((IKey)k, v)
                );
                value = new Dictionary(pairs);
            }

            if (fp != value.Fingerprint)
            {
                throw new InvalidOperationException(
                    $"Failed to load an offloaded value." +
                    $"\nExpected: {fp}\nActual:   {value.Fingerprint}\nLoaded:   {value}"
                );
            }

            FreeValueCache();
            if (fp.EncodingLength >= OffloadThresholdBytes)
            {
                _valueCache[fp] = new WeakReference<IValue>(value);
            }

            return value;
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

        private sealed class OffloadOptions : IOffloadOptions
        {
            [SuppressMessage(
                "Microsoft.StyleCop.CSharp.CSharpRules",
                "SA1401:FieldsMustBePrivate",
                Justification = "It's a private class and we want to get rid of runtime overhead.")]
            public bool Offloaded;

            private readonly long _thresholdBytes;
            private readonly IDictionary<byte[], byte[]> _dirty;
            private readonly IKeyValueStore _store;

            public OffloadOptions(
                long thresholdBytes,
                IDictionary<byte[], byte[]> dirty,
                IKeyValueStore store
            )
            {
                _thresholdBytes = thresholdBytes;
                _dirty = dirty;
                _store = store;
                Offloaded = false;
            }

            public bool Embeds(in IndirectValue indirectValue) =>
                indirectValue.EncodingLength < _thresholdBytes;

            public void Offload(in IndirectValue indirectValue, IndirectValue.Loader? loader)
            {
                Offloaded = true;
                byte[] fp = indirectValue.Fingerprint.Serialize();
                if (!_dirty.ContainsKey(fp) && !_store.Exists(fp))
                {
                    IValue value = indirectValue.GetValue(loader);
                    IValue repr = value;
                    if (repr is Dictionary dict)
                    {
                        // For dictionaries, in order to reduce duplicate common keys (= schema),
                        // they are encoded in [keys, [v, v', ...], [v'', v''', ...], ...] where
                        // keys = [k, k', ...]  instead of [k, v, k', v', ...].
                        // Keys and value groups can be offloaded too.
                        const int groupSize = 5;
                        var keys = new List<IKey>(dict.Count);
                        var valueGroups =
                            new IValue[1 + (int)Math.Ceiling((double)dict.Count / groupSize)];
                        IEnumerable<KeyValuePair<IKey, IndirectValue>> pairs =
                            dict.EnumerableIndirectPairs(out loader);
                        if (loader is { } l)
                        {
                            var group = new List<IndirectValue>(groupSize);
                            int g = 1;
                            foreach (KeyValuePair<IKey, IndirectValue> pair in pairs)
                            {
                                keys.Add(pair.Key);
                                group.Add(pair.Value);
                                if (group.Count >= groupSize || keys.Count >= dict.Count)
                                {
                                    List valueGroup = new List(group, l);
                                    group.Clear();
                                    valueGroups[g] = valueGroup;
                                    g++;
                                }
                            }
                        }
                        else
                        {
                            var group = new List<IValue>(groupSize);
                            int g = 1;
                            foreach (KeyValuePair<IKey, IValue> pair in dict)
                            {
                                keys.Add(pair.Key);
                                group.Add(pair.Value);
                                if (group.Count >= groupSize || keys.Count >= dict.Count)
                                {
                                    List valueGroup = new List(group);
                                    group.Clear();
                                    valueGroups[g] = valueGroup;
                                    g++;
                                }
                            }
                        }

                        valueGroups[0] = new List(keys);
                        repr = new List(valueGroups);
                    }

                    _dirty[fp] = _codec.Encode(repr, this);
                    if (!_valueCache.ContainsKey(indirectValue.Fingerprint))
                    {
                        FreeValueCache();
                        _valueCache[indirectValue.Fingerprint] = new WeakReference<IValue>(value);
                    }
                }
            }
        }
    }
}
