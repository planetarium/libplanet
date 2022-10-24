using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
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
    public partial class MerkleTrie : ITrie
    {
        public static readonly HashDigest<SHA256> EmptyRootHash;

        private const long OffloadThresholdBytes = 0x7fffffffffffffffL;

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
        /// <param name="root">The root node of <see cref="MerkleTrie"/>.  If it is
        /// <see langword="null"/>, it will be treated like empty trie.</param>
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
        public bool Recorded => Root is null || KeyValueStore.Exists(new KeyBytes(Hash.ByteArray));

        internal INode? Root { get; }

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
            var nextNodeHashes = new List<KeyBytes>(resolutions.Length);

            while (true)
            {
                nextNodeHashes.Clear();
                for (int i = 0; i < resolutions.Length; i++)
                {
                    PathResolution resolution = resolutions[i];
                    if (resolution.Next is (HashDigest<SHA256> nodeHash, _))
                    {
                        nextNodeHashes.Add(new KeyBytes(nodeHash.ByteArray));
                    }
                }

                if (!nextNodeHashes.Any())
                {
                    break;
                }

                IReadOnlyDictionary<KeyBytes, byte[]> nValues = KeyValueStore.Get(nextNodeHashes);
                for (int i = 0, j = 0; i < resolutions.Length; i++)
                {
                    PathResolution resolution = resolutions[i];
                    if (resolution.Next is (_, PathCursor cursor))
                    {
                        byte[]? nodeValue = nValues[nextNodeHashes[j]];
                        j++;
                        if (nodeValue is { } v)
                        {
                            IValue intermediateEncoding = _codec.Decode(v, LoadIndirectValue);
                            INode? nextNode = NodeDecoder.Decode(intermediateEncoding);
                            resolutions[i] = ResolvePath(nextNode, cursor);
                        }
                        else
                        {
                            resolutions[i] = PathResolution.Unresolved();
                        }
                    }
                }
            }

            return resolutions.Select(r => r.Value).ToArray();
        }

        /// <inheritdoc/>
        public ITrie Commit()
        {
            if (Root is null)
            {
                return new MerkleTrie(KeyValueStore, new HashNode(EmptyRootHash));
            }

            var values = new ConcurrentDictionary<KeyBytes, byte[]>();
            var newRoot = Commit(Root, values);

            // It assumes embedded node if it's not HashNode.
            if (!(newRoot is HashNode))
            {
                byte[] serialized = _codec.Encode(newRoot.ToBencodex());
                values[new KeyBytes(SHA256.Create().ComputeHash(serialized))] = serialized;
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

        internal IEnumerable<(INode Node, KeyBytes Path)> IterateNodes()
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
                bool noFingerprint = value.All(x => x != '*');
                if (noFingerprint)
                {
                    yield return (key, value);

                    // To avoid decode value node, it decodes when only there is '*' character,
                    // fingerprint.
                    if (isValueNode)
                    {
                        continue;
                    }
                }

                var node = NodeDecoder.Decode(_codec.Decode(value, LoadIndirectValue));
                if (!noFingerprint && !(node is null))
                {
                    yield return (key, _codec.Encode(node.ToBencodex()));
                }

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

        private INode Commit(INode node, IDictionary<KeyBytes, byte[]> values)
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

        private INode CommitFullNode(FullNode fullNode, IDictionary<KeyBytes, byte[]> values)
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

        private INode CommitShortNode(ShortNode shortNode, IDictionary<KeyBytes, byte[]> values)
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

        private INode CommitValueNode(ValueNode valueNode, IDictionary<KeyBytes, byte[]> values)
        {
            IValue encoded = valueNode.ToBencodex();
            var nodeSize = encoded.EncodingLength;
            if (nodeSize <= HashDigest<SHA256>.Size)
            {
                return valueNode;
            }

            return Encode(encoded, values);
        }

        private HashNode Encode(IValue intermediateEncoding, IDictionary<KeyBytes, byte[]> values)
        {
            var offloadOptions = new OffloadOptions(OffloadThresholdBytes, values, KeyValueStore);
            byte[] serialized = _codec.Encode(intermediateEncoding, offloadOptions);
            byte[] fullEncoding = offloadOptions.Offloaded
                ? _codec.Encode(intermediateEncoding)
                : serialized;
            var nodeHash = HashDigest<SHA256>.DeriveFrom(fullEncoding);
            values[new KeyBytes(nodeHash.ByteArray)] = serialized;
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
                KeyValueStore.Get(new KeyBytes(nodeHash.ByteArray)),
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

            var key = new KeyBytes(fp.Serialize());
            if (fp.Kind != ValueKind.Dictionary)
            {
                FreeValueCache();
                IValue v = _codec.Decode(KeyValueStore.Get(key), LoadIndirectValue);
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

            var pair = (List)_codec.Decode(KeyValueStore.Get(key), LoadIndirectValue);
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

        private sealed class OffloadOptions : IOffloadOptions
        {
            [SuppressMessage(
                "Microsoft.StyleCop.CSharp.CSharpRules",
                "SA1401:FieldsMustBePrivate",
                Justification = "It's a private class and we want to get rid of runtime overhead.")]
            public bool Offloaded;

            private readonly long _thresholdBytes;
            private readonly IDictionary<KeyBytes, byte[]> _dirty;
            private readonly IKeyValueStore _store;

            public OffloadOptions(
                long thresholdBytes,
                IDictionary<KeyBytes, byte[]> dirty,
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
                var fp = new KeyBytes(indirectValue.Fingerprint.Serialize());
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
                        const int groupSize = 0x7fffffff;
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
