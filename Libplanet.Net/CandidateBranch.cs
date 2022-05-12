using System.Collections.Generic;
using System.Linq;
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
        private readonly List<Block<T>> _blocks;

        public CandidateBranch(
            List<Block<T>> blocks)
        {
            _blocks = blocks;
        }

        /// <summary>
        /// A list of <see cref="Block{T}"/>s in sorted order where each <see cref="Block{T}"/>
        /// in the list has <see cref="Block{T}.PreviousHash"/> pointing to the previous
        /// <see cref="Block{T}"/> in the list, except for the first <see cref="Block{T}"/>
        /// in the list.
        /// </summary>
        public IEnumerable<Block<T>> Blocks => _blocks;

        /// <summary>
        /// The root of this branch. The same as the first element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> Root => Blocks.First();

        /// <summary>
        /// The tip of this branch. The same as the last element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> Tip => Blocks.Last();
    }
}
