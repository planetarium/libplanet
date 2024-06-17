using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class FullNode : INode, IEquatable<FullNode>
    {
        // Children 0x10 + Value 0x01
        public const byte ChildrenCount = 0x11;

        public static readonly FullNode Empty =
            new FullNode(new INode?[ChildrenCount].ToImmutableArray());

        public FullNode(ImmutableArray<INode?> children)
        {
            if (children.Length != ChildrenCount)
            {
                throw new InvalidTrieNodeException(
                    $"The number of {nameof(FullNode)}'s children should be {ChildrenCount}.");
            }

            Children = children;
            Value = children[ChildrenCount - 1];
        }

        public ImmutableArray<INode?> Children { get; }

        public INode? Value { get; }

        public FullNode SetChild(int index, INode childNode)
        {
            return new FullNode(Children.SetItem(index, childNode));
        }

        public FullNode RemoveChild(int index)
        {
            return new FullNode(Children.SetItem(index, null));
        }

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(FullNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Children.Select((n, i) => (n, i)).Where(pair => pair.n is { }).SequenceEqual(
                    node.Children.Select((n, i) => (n, i)).Where(pair => pair.n is { }));
        }

        public override bool Equals(object? obj) =>
            obj is FullNode other && Equals(other);

        public override int GetHashCode() => Children.GetHashCode();

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public IValue ToBencodex() =>
            new List(Children.Select(child => child?.ToBencodex() ?? Null.Value));
    }
}
