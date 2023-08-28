using Bencodex.Types;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie
{
    public partial class MerkleTrie
    {
        private IValue? ResolveToValue(INode? node, in PathCursor cursor) =>
            node switch
            {
                null => null,
                ValueNode valueNode => valueNode.Value,
                ShortNode shortNode => cursor.RemainingNibblesStartWith(shortNode.Key)
                    ? ResolveToValue(shortNode.Value, cursor.Next(shortNode.Key.Length))
                    : null,
                FullNode fullNode => cursor.RemainingAnyNibbles
                    ? ResolveToValue(
                        fullNode.Children[cursor.NextNibble],
                        cursor.Next(1))
                    : ResolveToValue(
                        fullNode.Value,
                        cursor),
                HashNode hashNode => ResolveToValue(UnhashNode(hashNode), cursor),
                _ => throw new InvalidTrieNodeException(
                    $"An unknown type of node was encountered " +
                    $"at {cursor.GetConsumedNibbles().Hex}: {node.GetType()}"),
            };

        /// <summary>
        /// Returns the first node encountered at the end of <paramref name="cursor"/>.
        /// </summary>
        /// <param name="node">The <see cref="INode"/> that <paramref name="cursor"/> is
        /// currently pointing to.</param>
        /// <param name="cursor">The path to traverse.  The offset of the cursor should point to
        /// <paramref name="node"/>.</param>
        /// <returns>The first <see cref="INode"/> at the end of <paramref name="cursor"/>, if any.
        /// Otherwise, <see langword="null"/>.</returns>
        /// <exception cref="InvalidTrieNodeException">Thrown when an unknown type
        /// of <see cref="INode"/> is encountered while traversing.</exception>
        private INode? ResolveToNode(INode? node, in PathCursor cursor)
        {
            if (cursor.RemainingAnyNibbles)
            {
                switch (node)
                {
                    case null:
                    case ValueNode _:
                        return null;
                    case ShortNode shortNode:
                        return cursor.RemainingNibblesStartWith(shortNode.Key)
                            ? ResolveToNode(shortNode.Value, cursor.Next(shortNode.Key.Length))
                            : null;
                    case FullNode fullNode:
                        return ResolveToNode(fullNode.Children[cursor.NextNibble], cursor.Next(1));
                    case HashNode hashNode:
                        return ResolveToNode(UnhashNode(hashNode), cursor);
                    default:
                        throw new InvalidTrieNodeException(
                            $"An unknown type of node was encountered " +
                            $"at {cursor.GetConsumedNibbles().Hex}: {node.GetType()}");
                }
            }
            else
            {
                return node;
            }
        }
    }
}
