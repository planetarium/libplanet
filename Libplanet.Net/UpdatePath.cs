using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A class representing a path, <see cref="CandidateBranch{T}"/>, from an old
    /// <see cref="BlockChain{T}.Tip"/> to a new <see cref="BlockChain{T}.Tip"/> when a change is
    /// made to a <see cref="BlockChain{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class UpdatePath<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a new <see cref="UpdatePath{T}"/>.
        /// </summary>
        /// <param name="branch"> A <see cref="CandidateBranch{T}"/> used to update
        /// <see cref="BlockChain{T}"/>.
        /// </param>
        /// <param name="oldTip"> A <see cref="BlockChain{T}.Tip"/> before the given
        /// <paramref name="branch"/> is appended into <see cref="BlockChain{T}"/>.
        /// </param>
        public UpdatePath(CandidateBranch<T> branch, Block<T> oldTip)
        {
            Blocks = branch.Blocks;
            OldTip = oldTip;
        }

        /// <summary>
        /// The <see cref="IEnumerable{T}"/> of <see cref="Block{T}"/> in the path.
        /// </summary>
        public IEnumerable<Block<T>> Blocks { get; }

        /// <summary>
        /// The old <see cref="BlockChain{T}.Tip"/> before the update of
        /// a <see cref="BlockChain{T}"/>.
        /// </summary>
        public Block<T> OldTip { get; }

        /// <summary>
        /// The branchpoint used when updating a <see cref="BlockChain{T}"/>. The same as the first
        /// element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> BranchPoint => Blocks.First();

        /// <summary>
        /// The old <see cref="BlockChain{T}.Tip"/> after the update of
        /// a <see cref="BlockChain{T}"/>. The same as the last element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> NewTip => Blocks.Last();
    }
}
