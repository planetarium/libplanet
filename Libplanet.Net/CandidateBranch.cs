using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A class to store an appendable <see cref="CandidateBranch{T}"/> for a
    /// <see cref="BlockChain{T}"/>. If Any <see cref="Block{T}.PreviousHash"/> of
    /// <see cref="Block{T}"/>, except for the first block, is not pointing to any unique
    /// <see cref="Block{T}.Hash"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type. It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class CandidateBranch<T>
        where T : IAction, new()
    {
        private readonly List<Block<T>> _blocks;

        /// <summary>
        /// Creates a new <see cref="CandidateBranch{T}"/>.
        /// </summary>
        /// <param name="blocks">A series of <see cref="Block{T}"/> that every
        /// <see cref="Block{T}"/>s, except for the first block, are pointing to any
        /// <see cref="Block{T}.Hash"/>.
        /// </param>
        /// <exception cref="CreateCandidateBranchException">Some <paramref name="blocks"/>
        /// does not have <see cref="Block{T}.PreviousHash"/> that is pointing to any
        /// <see cref="Block{T}.Hash"/> or given <paramref name="blocks"/>
        /// are empty.
        /// </exception>
        public CandidateBranch(List<Block<T>> blocks)
        {
            if (!blocks.Any())
            {
                throw new CreateCandidateBranchException(
                    "No block has given for creating a new CandidateBranch");
            }

            if (blocks.Count == 1)
            {
                _blocks = blocks;
                return;
            }

            var precedingBlocks = blocks.Skip(1);
            foreach (var block in precedingBlocks)
            {
                if (!blocks.Any(x => block.PreviousHash != null &&
                                     x.Hash.Equals(block.PreviousHash.Value)))
                {
                    throw new CreateCandidateBranchException(
                        $"Some blocks are orphans. Blocks : {blocks}");
                }
            }

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
