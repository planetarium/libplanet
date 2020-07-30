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
    internal class Trie : ITrie
    {
        public Trie(IKeyValueStore keyValueStore, INode root = null)
        {
            KeyValueStore = keyValueStore;
            Root = root;
            Codec = new Codec();
        }

        public INode Root { get; private set; }

        private IKeyValueStore KeyValueStore { get; }

        private Codec Codec { get; }

        public void Set(byte[] key, IValue value)
        {
            Root = Insert(
                Root,
                ImmutableArray<byte>.Empty,
                ToKey(key).ToImmutableArray(),
                new ValueNode(value));
        }

        public bool TryGet(byte[] key, out IValue value)
        {
            return TryGet(
                Root,
                ImmutableArray<byte>.Empty,
                ToKey(key).ToImmutableArray(),
                out value);
        }

        public void Commit()
        {
            throw new NotSupportedException();
        }

        private INode Insert(
            INode node,
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
                            shortNode.Value));

                    if (commonPrefixLength == 0)
                    {
                        return branch;
                    }

                    // extension node
                    return new ShortNode(key.Take(commonPrefixLength).ToArray(), branch);

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

        private bool TryGet(
            INode node,
            ImmutableArray<byte> prefix,
            ImmutableArray<byte> path,
            out IValue value)
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
                    INode childNode = fullNode.Children[path[0]];
                    return TryGet(
                        childNode,
                        prefix.Add(path[0]).ToImmutableArray(),
                        path.Skip(1).ToImmutableArray(),
                        out value);

                case HashNode hashNode:
                    try
                    {
                        INode resolvedNode = GetNode(hashNode.HashDigest);
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
        private INode GetNode(HashDigest<SHA256> nodeHash)
        {
            return NodeDecoder.Decode(Codec.Decode(KeyValueStore.Get(nodeHash.ToByteArray())));
        }

        // TODO: Support secure trie.
        private byte[] ToKey(byte[] key)
        {
            var res = new byte[key.Length * 2];
            for (var i = 0; i < key.Length; ++i)
            {
                res[i * 2] = (byte)(key[i] >> 4);
                res[i * 2 + 1] = (byte)(key[i] & 0b00001111);
            }

            return res;
        }
    }
}
