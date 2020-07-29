using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal sealed class FullNode : BaseNode
    {
        // Children 0x10 + Value 0x1
        public const byte ChildrenCount = 0x11;

        public FullNode(ImmutableArray<INode> children)
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
            : this(new INode[ChildrenCount].ToImmutableArray())
        {
        }

        public ImmutableArray<INode> Children { get; }

        public NodeFlag NodeFlag { get; set; }

        public FullNode SetChild(int index, INode childNode)
        {
            return new FullNode(Children.SetItem(index, childNode));
        }

        protected override IValue ToBencodex()
        {
            return (Bencodex.Types.List)Children.Select(child => (IValue)(Binary)child.Serialize());
        }
    }
}
