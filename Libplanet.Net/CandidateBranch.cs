using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A class to store an appendable <see cref="CandidateBranch{T}"/> for
    /// a <see cref="BlockChain{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class CandidateBranch<T>
        where T : IAction, new()
    {
        public CandidateBranch(
            List<Block<T>> blocks,
            Block<T> root,
            Block<T> tip)
        {
            Blocks = blocks;
            Root = root;
            Tip = tip;
        }

        /// <summary>
        /// A list of <see cref="Block{T}"/>s in sorted order where each <see cref="Block{T}"/>
        /// in the list has <see cref="Block{T}.PreviousHash"/> pointing to the previous
        /// <see cref="Block{T}"/> in the list, except for the first <see cref="Block{T}"/>
        /// in the list.
        /// </summary>
        public List<Block<T>> Blocks { get; }

        /// <summary>
        /// The root of this branch. The same as the first element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> Root { get; }

        /// <summary>
        /// The tip of this branch. The same as the last element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> Tip { get; }
    }
}
