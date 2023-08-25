using Bencodex.Types;

namespace Libplanet.Store.Trie.Nodes
{
    /// <summary>
    /// Represents a node in MPT that can have a value.
    /// </summary>
    public abstract class BaseNode : INode
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
