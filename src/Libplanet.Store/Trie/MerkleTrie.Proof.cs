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
        /// <summary>
        /// Checks whether given <paramref name="proof"/> is a valid proof
        /// for given <paramref name="key"/> and <paramref name="value"/> against
        /// given <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="stateRootHash">A known <see cref="ITrie.Hash"/> of a <see cref="ITrie"/>
        /// to check <paramref name="proof"/> against.</param>
        /// <param name="proof">An <see cref="IReadOnlyList{T}"/> of <see cref="INode"/>s
        /// that acts as a proof of existence for <paramref name="value"/>
        /// at <paramref name="key"/>.</param>
        /// <param name="key">The path in <see cref="KeyBytes"/> to validate.</param>
        /// <param name="value">The <see cref="IValue"/> to search.</param>
        /// <returns><see langword="true"/> if <paramref name="proof"/> is valid,
        /// <see langword="false"/> otherwise.</returns>
        public static bool ValidateProof(
            HashDigest<SHA256> stateRootHash,
            IReadOnlyList<INode> proof,
            KeyBytes key,
            IValue value)
        {
            HashDigest<SHA256> targetHash = stateRootHash;
            PathCursor cursor = PathCursor.Create(key);
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

                var resolved = ResolveToNextCandidateNode(proofNode, cursor);
                if (resolved is { } r)
                {
                    switch (r.NextNode)
                    {
                        case HashNode hashNode:
                            if (!last)
                            {
                                cursor = r.NextCursor;
                                targetHash = hashNode.HashDigest;
                                continue;
                            }
                            else
                            {
                                return false;
                            }

                        case ValueNode valueNode:
                            if (last)
                            {
                                return r.NextCursor.Position == r.NextCursor.Length &&
                                    valueNode.Value.Equals(value);
                            }
                            else
                            {
                                return false;
                            }

                        default:
                            // NOTE: Should never be reached. Non-null resolved next node is
                            // expected to be either HashNode or ValueNode.
                            return false;
                    }
                }
                else
                {
                    return false;
                }
            }

            return false;
        }

        /// <summary>
        /// Generates a proof of existence for <paramref name="value"/> at <paramref name="key"/>.
        /// </summary>
        /// <param name="key">The path in <see cref="KeyBytes"/> to search.</param>
        /// <param name="value">The <see cref="IValue"/> to search.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <see cref="INode"/>s
        /// that can prove <paramref name="key"/> and <paramref name="value"/> pair exists or not
        /// given an <see cref="ITrie"/>'s <see cref="ITrie.Hash"/>.
        /// </returns>
        /// <exception cref="InvalidOperationException">Thrown when either
        /// <see cref="Recorded"/> is <see langword="false"/> or
        /// <see cref="Node"/> is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="key"/>
        /// and <paramref name="value"/> pair is invalid, i.e. not a key value pair
        /// found in this <see cref="ITrie"/>.</exception>
        /// <remarks>
        /// In order to generate a valid proof, both a valid <paramref name="key"/> and
        /// a valid <paramref name="value"/> must be known beforehand.
        /// </remarks>
        public IReadOnlyList<INode> GenerateProof(KeyBytes key, IValue value)
        {
            if (!Recorded)
            {
                throw new InvalidOperationException(
                    $"A proof can only be retrieved from a recorded {nameof(ITrie)}");
            }

            INode root = Node ??
                throw new InvalidOperationException(
                    $"A proof can only be retrieved from a non-null {nameof(Node)}");

            // NOTE: Should never be thrown. A recorded non-null root must always be a HashNode.
            INode hashNode = root is HashNode h
                ? h
                : throw new InvalidOperationException(
                    $"Encountered an unexpected node type {root.GetType()}");

            List<INode> proof = new List<INode>();
            PathCursor cursor = PathCursor.Create(key);

            while (hashNode is HashNode currentHashNode)
            {
                INode unhashedNode = currentHashNode.Expand(keyValueStore);
                proof.Add(unhashedNode);
                var resolved = ResolveToNextCandidateNode(unhashedNode, cursor);

                if (resolved is { } r)
                {
                    switch (r.NextNode)
                    {
                        case HashNode _:
                            hashNode = r.NextNode;
                            cursor = r.NextCursor;
                            continue;

                        case ValueNode nextValueNode:
                            if (r.NextCursor.Position == r.NextCursor.Length)
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
                                    $"Given key {key} could not be fully resolved due to " +
                                    $"prematurely encountering a {nameof(ValueNode)}",
                                    nameof(key));
                            }

                        default:
                            // NOTE: Should never be thrown. Non-null resolved next node is
                            // expected to be either HashNode or ValueNode.
                            throw new ArgumentException("Failed to get a proof.");
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Given key {key} could not be properly resolved.",
                        nameof(key));
                }
            }

            // NOTE: Should never be thrown.
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

        private static (INode NextNode, PathCursor NextCursor)? ResolveToNextCandidateNode(
            INode node,
            PathCursor cursor)
        {
            switch (node)
            {
                // This operates under an assumption that the initial non-recursive
                // call to this method will not be called with a HashNode.
                case HashNode hashNode:
                    return (hashNode, cursor);

                case ValueNode valueNode:
                    return (valueNode, cursor);

                case ShortNode shortNode:
                    if (cursor.NextNibbles.StartsWith(shortNode.Key))
                    {
                        return ResolveToNextCandidateNode(
                            shortNode.Value, cursor.Next(shortNode.Key.Length));
                    }
                    else
                    {
                        return null;
                    }

                case FullNode fullNode:
                    if (cursor.Position == cursor.Length)
                    {
                        // Note: FullNode.Value is either null, a HashNode, or a ValueNode.
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
                        INode? nextNode = fullNode.Children[cursor.Current];
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
                    // NOTE: Should never be thrown.
                    throw new ArgumentException(
                        $"Encountered an unexpected node type {node.GetType()}");
            }
        }
    }
}
