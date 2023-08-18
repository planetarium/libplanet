using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    public sealed class FullNode : BaseNode, IEquatable<FullNode>
    {
        // Children 0x10 + Value 0x1
        public const byte ChildrenCount = 0x11;

        public FullNode(ImmutableArray<INode?> children)
            : base(children[ChildrenCount - 1])
        {
            if (children.Length != ChildrenCount)
            {
                throw new InvalidTrieNodeException(
                    $"The number of {nameof(FullNode)}'s children should be {ChildrenCount}.");
            }

            Children = children;
        }

        public FullNode()
            : this(new INode?[ChildrenCount].ToImmutableArray())
        {
        }

        public ImmutableArray<INode?> Children { get; }

        public FullNode SetChild(int index, INode childNode)
        {
            return new FullNode(Children.SetItem(index, childNode));
        }

        /// <inheritdoc cref="IEquatable{T}.Equals"/>
        public bool Equals(FullNode? other)
        {
            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return other is { } node &&
                Children.Where((n, i) => n is { })
                    .SequenceEqual(node.Children.Where((n, i) => n is { }));
        }

        public override bool Equals(object? obj) =>
            obj is FullNode other && Equals(other);

        public override int GetHashCode()
        {
            return Children.GetHashCode();
        }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public override IValue ToBencodex() =>
            new List(Children.Select(child => child?.ToBencodex() ?? Null.Value));
    }
}
