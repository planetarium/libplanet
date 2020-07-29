using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal sealed class ShortNode : BaseNode
    {
        public ShortNode(byte[] key, INode value)
            : this(key.ToImmutableArray(), value)
        {
        }

        public ShortNode(ImmutableArray<byte> key, INode value)
            : base(value)
        {
            Key = key;
            NodeFlag = new NodeFlag(true, null);
        }

        public ImmutableArray<byte> Key { get; }

        public NodeFlag NodeFlag { get; set; }

        protected override IValue ToBencodex()
        {
            var list = new List<IValue>
            {
                (Bencodex.Types.Binary)Key.ToArray(),
            };
            if (Value is ValueNode valueNode)
            {
                list.Add(valueNode.Value);
            }

            return new Bencodex.Types.List(list);
        }
    }
}
