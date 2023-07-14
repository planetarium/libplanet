using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    internal abstract class BaseNode : INode
    {
        protected BaseNode(INode? value)
        {
            Value = value;
        }

        // It will not support embedded node.
        public INode? Value { get; }

        /// <inheritdoc cref="INode.ToBencodex()"/>
        public abstract IValue ToBencodex();
    }
}
