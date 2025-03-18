using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie;

/// <summary>
/// An <see cref="ITrie"/> implementation implemented
/// <see href="https://eth.wiki/fundamentals/patricia-tree">Merkle Patricia Trie</see>.
/// </summary>
/// <remarks>
/// An <see cref="ITrie"/> implementation.
/// </remarks>
/// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
/// nodes.</param>
/// <param name="node">The root node of <see cref="MerkleTrie"/>.  If it is
/// <see langword="null"/>, it will be treated like empty trie.</param>
/// <param name="cache">The <see cref="HashNodeCache"/> to use as cache.</param>
// TODO: implement 'logs' for debugging.
public sealed partial class MerkleTrie(IKeyValueStore keyValueStore, INode? node) : ITrie
{
    private static readonly Codec _codec = new();

    /// <summary>
    /// An <see cref="ITrie"/> implementation.
    /// </summary>
    /// <param name="keyValueStore">The <see cref="IKeyValueStore"/> storage to store
    /// nodes.</param>
    /// <param name="rootHash">The root <see cref="ITrie.Hash"/> of
    /// <see cref="MerkleTrie"/>.</param>
    /// <param name="cache">The <see cref="HashNodeCache"/> to use as cache.</param>
    public MerkleTrie(IKeyValueStore keyValueStore, HashDigest<SHA256> rootHash)
        : this(keyValueStore, HashNode.CreateOrDefault(rootHash))
    {
    }

    public MerkleTrie(IKeyValueStore keyValueStore)
        : this(keyValueStore, node: null)
    {
    }

    /// <inheritdoc cref="ITrie.Node"/>
    public INode? Node { get; } = node;

    /// <inheritdoc cref="ITrie.Hash"/>
    public HashDigest<SHA256> Hash => GetHash(Node);

    /// <inheritdoc cref="ITrie.Recorded"/>
    public bool Recorded => Node is null || keyValueStore[new KeyBytes(Hash.ByteArray)] != null;

    /// <inheritdoc cref="ITrie.Set"/>
    public ITrie Set(in KeyBytes key, IValue value)
    {
        var cursor = PathCursor.Create(key);
        var valueNode = new ValueNode(value);
        var nodeInserter = new NodeInserter(keyValueStore);
        var node = nodeInserter.Insert(Node, cursor, valueNode);
        return new MerkleTrie(keyValueStore, node);
    }

    /// <inheritdoc cref="ITrie.Remove"/>
    public ITrie Remove(in KeyBytes key)
    {
        if (Node is not { } node)
        {
            throw new InvalidOperationException("Cannot remove from an empty trie.");
        }

        var cursor = PathCursor.Create(key);
        var nodeRemover = new NodeRemover(keyValueStore);
        var newNode = nodeRemover.Remove(node, cursor);
        return new MerkleTrie(keyValueStore, newNode);
    }

    /// <inheritdoc cref="ITrie.Get(KeyBytes)"/>
    public IValue? Get(KeyBytes key) => ResolveToValue(Node, PathCursor.Create(key));

    /// <inheritdoc cref="ITrie.Get(IReadOnlyList{KeyBytes})"/>
    public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys)
    {
        const int parallelThreshold = 4;
        return keys.Count <= parallelThreshold
            ? keys.Select(key => Get(key)).ToArray()
            : keys.AsParallel().Select(key => Get(key)).ToArray();
    }

    /// <inheritdoc cref="ITrie.GetNode(Nibbles)"/>
    public INode? GetNode(Nibbles nibbles) => ResolveToNode(Node, new PathCursor(nibbles));

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
        if (Node is null)
        {
            yield break;
        }

        var stack = new Stack<INode>();
        stack.Push(Node);

        while (stack.Count > 0)
        {
            INode node = stack.Pop();
            if (node is HashNode poppedHashNode)
            {
                var storedKey = new KeyBytes(poppedHashNode.HashDigest.ByteArray);
                var storedValue = keyValueStore[storedKey];
                var intermediateEncoding = _codec.Decode(storedValue);
                stack.Push(
                    NodeDecoder.Decode(
                        intermediateEncoding,
                        NodeDecoder.HashEmbeddedNodeTypes) ??
                        throw new NullReferenceException());
                yield return (storedKey, storedValue);
                continue;
            }

            switch (node)
            {
                case FullNode fullNode:
                    foreach (var (index, child) in fullNode.Children)
                    {
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

    private static HashDigest<SHA256> GetHash(INode? node)
    {
        if (node is null)
        {
            return default;
        }

        if (node is HashNode hashNode)
        {
            return hashNode.HashDigest;
        }

        return HashDigest<SHA256>.DeriveFrom(_codec.Encode(node.ToBencodex()));
    }

    private IEnumerable<(Nibbles Path, INode Node)> IterateNodes(Nibbles rootPrefix, INode root)
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
                    foreach (var (index, child) in fullNode.Children)
                    {
                        if (child is not null)
                        {
                            stack.Push((path.Add((byte)index), child));
                        }
                    }

                    if (fullNode.Value is { } value)
                    {
                        stack.Push((path, value));
                    }

                    break;

                case ShortNode shortNode:
                    if (shortNode.Value is not null)
                    {
                        stack.Push((path.AddRange(shortNode.Key), shortNode.Value));
                    }

                    break;

                case HashNode hashNode:
                    stack.Push((path, hashNode.Expand(keyValueStore)));
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
    // private INode UnhashNode(HashNode hashNode)
    // {
    //     IValue intermediateEncoding;
    //     if (HashNodeCache.TryGetValue(hashNode.HashDigest, out var value))
    //     {
    //         intermediateEncoding = value!;
    //     }
    //     else
    //     {
    //         var keyBytes = new KeyBytes(hashNode.HashDigest.ByteArray);
    //         intermediateEncoding = _codec.Decode(keyValueStore[keyBytes]);
    //         HashNodeCache.AddOrUpdate(hashNode.HashDigest, intermediateEncoding);
    //     }

    //     return NodeDecoder.Decode(hashNode.KeyValueStore, intermediateEncoding, NodeDecoder.HashEmbeddedNodeTypes) ??
    //         throw new NullReferenceException();
    // }
}
