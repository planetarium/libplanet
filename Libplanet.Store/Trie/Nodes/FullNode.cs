using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal sealed class FullNode : BaseNode, IEquatable<FullNode>
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

        bool IEquatable<FullNode>.Equals(FullNode? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return false;
            }

            for (var i = 0; i < ChildrenCount; ++i)
            {
                if (other.Children[i] is null ^ Children[i] is null)
                {
                    return false;
                }

                if (other.Children[i] is null && Children[i] is null)
                {
                    return true;
                }

                if (other.Children[i]?.GetType() != Children[i]?.GetType())
                {
                    return false;
                }

                if (other.Children[i]?.GetHashCode() != Children[i]?.GetHashCode())
                {
                    return false;
                }
            }

            return true;
        }

        public override bool Equals(object? obj)
        {
            return ReferenceEquals(this, obj) || (obj is FullNode other && Equals(other));
        }

        public override int GetHashCode()
        {
            return Children.GetHashCode();
        }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public override IValue ToBencodex() =>
            new List(Children.Select(child => child?.ToBencodex() ?? Null.Value));
    }
}
