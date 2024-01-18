using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie : ITrie
    {
        /// <inheritdoc cref="ITrie.Diff"/>
        public IEnumerable<(KeyBytes Path, IValue? TargetValue, IValue SourceValue)>
            Diff(ITrie other)
        {
            if (Root is null)
            {
                yield break;
            }

            var queue = new Queue<(INode, Nibbles)>();
            queue.Enqueue((Root, new Nibbles(ImmutableArray<byte>.Empty)));

            while (queue.Count > 0)
            {
                (INode node, Nibbles path) = queue.Dequeue();
                INode? target = other.GetNode(path);

                if (target is { } targetNode)
                {
                    switch (node)
                    {
                        case HashNode hn:
                            // NOTE: If source node is a hashed node, check if the target node
                            // is also a hashed node and is the same.  Otherwise queue
                            // the unhashed version.
                            if (targetNode is HashNode targetHashNode && hn.Equals(targetHashNode))
                            {
                                continue;
                            }
                            else
                            {
                                queue.Enqueue((UnhashNode(hn), path));
                                continue;
                            }

                        default:
                            // Try comparing unhashed version of both.
                            switch (node)
                            {
                                case ValueNode valueNode:
                                    IValue? targetValue = ValueAtNodeRoot(targetNode);
                                    if (targetValue is { } tv && valueNode.Value.Equals(tv))
                                    {
                                        continue;
                                    }
                                    else
                                    {
                                        yield return
                                            (path.ToKeyBytes(), targetValue, valueNode.Value);
                                        continue;
                                    }

                                case ShortNode shortNode:
                                    queue.Enqueue((shortNode.Value, path.AddRange(shortNode.Key)));
                                    continue;

                                case FullNode fullNode:
                                    foreach (
                                        int i in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                                    {
                                        if (fullNode.Children[i] is { } child)
                                        {
                                            queue.Enqueue((child, path.Add((byte)i)));
                                        }
                                    }

                                    if (fullNode.Children[FullNode.ChildrenCount - 1] is { } value)
                                    {
                                        queue.Enqueue((value, path));
                                    }

                                    continue;

                                default:
                                    throw new InvalidTrieNodeException(
                                        $"Unknown node type encountered at {path.Hex}: " +
                                        $"{node.GetType()}");
                            }
                    }
                }
                else
                {
                    // NOTE: Target node being null at given path does not mean
                    // there will not be a node at the end of an extended path.
                    // Hence, we need to iterate rest of the source node.
                    switch (node)
                    {
                        case HashNode hashNode:
                            queue.Enqueue((UnhashNode(hashNode), path));
                            continue;

                        case ValueNode valueNode:
                            yield return (path.ToKeyBytes(), null, valueNode.Value);
                            continue;

                        case ShortNode shortNode:
                            queue.Enqueue((shortNode.Value, path.AddRange(shortNode.Key)));
                            continue;

                        case FullNode fullNode:
                            foreach (int i in Enumerable.Range(0, FullNode.ChildrenCount - 1))
                            {
                                if (fullNode.Children[i] is { } c)
                                {
                                    queue.Enqueue((c, path.Add((byte)i)));
                                }
                            }

                            if (fullNode.Children[FullNode.ChildrenCount - 1] is { } v)
                            {
                                queue.Enqueue((v, path));
                            }

                            continue;

                        default:
                            throw new InvalidTrieNodeException(
                                $"Unknown node type encountered at {path.Hex}: {node.GetType()}");
                    }
                }
            }
        }

        /// <summary>
        /// Returns the value at the root of <paramref name="node"/>.
        /// Note that only <see cref="ValueNode"/>s and <see cref="FullNode"/>s are allowed to
        /// have a value at its root.  If <paramref name="node"/> is a <see cref="HashNode"/>,
        /// its unhashed version is checked.
        /// </summary>
        /// <param name="node">The <see cref="INode"/> to check.</param>
        /// <returns>The value associated with the root of <paramref name="node"/>.
        /// If no such value exists, then <see langword="null"/>.</returns>
        private IValue? ValueAtNodeRoot(INode node)
        {
            switch (node)
            {
                case HashNode hashNode:
                    return ValueAtNodeRoot(UnhashNode(hashNode));
                case ValueNode valueNode:
                    return valueNode.Value;
                case FullNode fullNode:
                    return fullNode.Value is ValueNode vn
                        ? vn.Value
                        : null;
                default:
                    return null;
            }
        }
    }
}
