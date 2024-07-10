using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        public static bool IsValidProof(
            HashDigest<SHA256> stateRootHash,
            IReadOnlyList<INode> proof,
            KeyBytes key,
            IValue value)
        {
            HashDigest<SHA256> targetHash = stateRootHash;
            PathCursor cursor = new PathCursor(key);
            for (int i = 0; i < proof.Count; i++)
            {
                INode proofNode = proof[i];
                bool first = i == 0;
                bool last = i == proof.Count - 1;

                // A proof node cannot be a HashNode.
                if (proofNode is HashNode)
                {
                    return false;
                }

                if (!CheckProofNodeHash(targetHash, proofNode, first))
                {
                    return false;
                }

                if (!last)
                {
                    var resolved = ResolveToHashNode(proofNode, cursor);
                    if (resolved is { } r)
                    {
                        cursor = r.NextCursor;
                        targetHash = r.NextNode.HashDigest;
                        continue;
                    }
                }
                else
                {
                    var resolved = ResolveToValueNode(proofNode, cursor);
                    if (resolved is { } r)
                    {
                        return r.NextCursor.Offset == r.NextCursor.Length &&
                            r.ValueNode.Value.Equals(value);
                    }
                    else
                    {
                        return false;
                    }
                }
            }

            return false;
        }

        public IReadOnlyList<INode> GetProof(KeyBytes key, IValue value)
        {
            if (!Recorded)
            {
                throw new InvalidOperationException(
                    $"A proof can only be retrieved from a recorded {nameof(ITrie)}");
            }

            INode root = Root ??
                throw new InvalidOperationException(
                    $"A proof can only be retrieved from a non-null {nameof(Root)}");

            INode hashNode = root is HashNode h
                ? h
                : throw new InvalidOperationException(
                    $"Encountered an unexpected node type {root.GetType()}");

            List<INode> proof = new List<INode>();
            PathCursor cursor = new PathCursor(key);

            while (hashNode is HashNode currentHashNode)
            {
                INode unhashedNode = UnhashNode(currentHashNode);
                proof.Add(unhashedNode);
                var resolved = ResolveToNextCandidateNode(unhashedNode, cursor);

                if (resolved is { } r)
                {
                    if (r.NextNode is HashNode)
                    {
                        hashNode = r.NextNode;
                        cursor = r.NextCursor;
                        continue;
                    }
                    else if (r.NextNode is ValueNode nextValueNode)
                    {
                        if (r.NextCursor.Offset == r.NextCursor.Length)
                        {
                            return nextValueNode.Value.Equals(value)
                                ? proof.ToImmutableList()
                                : throw new ArgumentException(
                                    $"Given value {value} does not match " +
                                    $"the actual value {nextValueNode.Value}" +
                                    $"found at given key {key}",
                                    nameof(value));
                        }
                        else
                        {
                            throw new ArgumentException(
                                $"Given key {key} could not be resolved.",
                                nameof(key));
                        }
                    }
                    else
                    {
                        // NOTE: Should not be thrown.
                        throw new ArgumentException("Failed to get a proof.");
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Given key {key} could not be resolved.",
                        nameof(key));
                }
            }

            // NOTE: Should not be thrown.
            throw new ArgumentException("Something went wrong.");
        }

        private static bool CheckProofNodeHash(
            HashDigest<SHA256> targetHash,
            INode proofNode,
            bool first)
        {
            IValue bencoded = proofNode.ToBencodex();
            byte[] bytes = _codec.Encode(bencoded);

            // Only the first node in the proof is allowed to be have an encoding
            // length less than SHA256's size.
            if (!first && bytes.Length <= HashDigest<SHA256>.Size)
            {
                return false;
            }

            return targetHash.Equals(HashDigest<SHA256>.DeriveFrom(bytes));
        }

        private static (ValueNode ValueNode, PathCursor NextCursor)? ResolveToValueNode(
            INode node,
            PathCursor cursor)
        {
            switch (node)
            {
                case HashNode _:
                    return null;

                case ValueNode valueNode:
                    if (cursor.Offset == cursor.Length)
                    {
                        return (valueNode, cursor);
                    }
                    else
                    {
                        return null;
                    }

                case ShortNode shortNode:
                    if (cursor.RemainingNibblesStartWith(shortNode.Key))
                    {
                        return ResolveToValueNode(
                            shortNode.Value, cursor.Next(shortNode.Key.Length));
                    }
                    else
                    {
                        return null;
                    }

                case FullNode fullNode:
                    if (cursor.Offset == cursor.Length)
                    {
                        if (fullNode.Value is ValueNode v)
                        {
                            return (v, cursor);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    else
                    {
                        INode? nextNode = fullNode.Children[cursor.NextNibble];
                        if (nextNode is INode n)
                        {
                            return ResolveToValueNode(n, cursor.Next(1));
                        }
                        else
                        {
                            return null;
                        }
                    }

                default:
                    throw new ArgumentException(
                        $"Encountered an unexpected node type {node.GetType()}");
            }
        }

        private static (HashNode NextNode, PathCursor NextCursor)? ResolveToHashNode(
            INode node,
            PathCursor cursor)
        {
            switch (node)
            {
                // This operates under an assumption that the initial call to this method
                // will not be called with a HashNode.
                case HashNode hashNode:
                    return (hashNode, cursor);

                case ValueNode valueNode:
                    return null;

                case ShortNode shortNode:
                    if (cursor.RemainingNibblesStartWith(shortNode.Key))
                    {
                        return ResolveToHashNode(
                            shortNode.Value, cursor.Next(shortNode.Key.Length));
                    }
                    else
                    {
                        return null;
                    }

                case FullNode fullNode:
                    if (cursor.Offset == cursor.Length)
                    {
                        if (fullNode.Value is HashNode h)
                        {
                            return (h, cursor);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    else
                    {
                        INode? nextNode = fullNode.Children[cursor.NextNibble];
                        if (nextNode is INode n)
                        {
                            return ResolveToHashNode(n, cursor.Next(1));
                        }
                        else
                        {
                            return null;
                        }
                    }

                default:
                    throw new ArgumentException(
                        $"Encountered an unexpected node type {node.GetType()}");
            }
        }

        private static (INode NextNode, PathCursor NextCursor)? ResolveToNextCandidateNode(
            INode node,
            PathCursor cursor)
        {
            switch (node)
            {
                // This operates under an assumption that the initial call to this method
                // will not be called with a HashNode.
                case HashNode hashNode:
                    return (hashNode, cursor);

                case ValueNode valueNode:
                    if (cursor.Offset == cursor.Length)
                    {
                        return (valueNode, cursor);
                    }
                    else
                    {
                        return null;
                    }

                case ShortNode shortNode:
                    if (cursor.RemainingNibblesStartWith(shortNode.Key))
                    {
                        return ResolveToNextCandidateNode(
                            shortNode.Value, cursor.Next(shortNode.Key.Length));
                    }
                    else
                    {
                        return null;
                    }

                case FullNode fullNode:
                    if (cursor.Offset == cursor.Length)
                    {
                        if (fullNode.Value is INode n)
                        {
                            return (n, cursor);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    else
                    {
                        INode? nextNode = fullNode.Children[cursor.NextNibble];
                        if (nextNode is INode n)
                        {
                            return ResolveToNextCandidateNode(n, cursor.Next(1));
                        }
                        else
                        {
                            return null;
                        }
                    }

                default:
                    throw new ArgumentException(
                        $"Encountered an unexpected node type {node.GetType()}");
            }
        }
    }
}
