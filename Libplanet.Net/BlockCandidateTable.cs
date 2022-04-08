using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// A class which table data structure that stores <see cref="Block{T}"/>s
    /// received from <see cref="Peer"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class BlockCandidateTable<T>
        where T : IAction, new()
    {
        public BlockCandidateTable()
        {
            Branches = new ConcurrentBag<CandidateBranch<T>>();
        }

       /// <summary>
        /// Reference to <see cref="BlockChain{T}.Tip"/>.
        /// </summary>
        public Block<T>? Tip { get; }

        /// <summary>
        /// Retrieves the <see cref="CandidateBranch{T}"/> with the best <see cref="Tip"/>, i.e.
        /// the highest <see cref="Block{T}.TotalDifficulty"/>.
        /// </summary>
        public CandidateBranch<T>? BestBranch { get; }

        public long Count
        {
            get => Branches.Count;
        }

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of <see cref="CandidateBranch{T}"/>es that can be appended
        /// to the <em>current</em> <see cref="BlockChain{T}"/>.
        /// </summary>
        private ConcurrentBag<CandidateBranch<T>> Branches { get; }

        /// <summary>
        /// Adds an <see cref="CandidateBranch{T}"/> to <see cref="Branches"/>.
        /// </summary>
        /// <param name="branch">The <see cref="CandidateBranch{T}"/>
        /// to add to <see cref="Branches"/>.
        /// </param>
        /// <remarks>
        /// Note that <see cref="Tip"/> could have changed while downloading <see cref="Block{T}"/>s
        /// to create <paramref name="branch"/>.  This should be dealt with accordingly in order
        /// to ensure concurrency and enforce the stated properties in the interface summary.
        /// In particular, the first point may no longer be <c>true</c> even if
        /// <paramref name="branch"/> can still be "appended".
        /// </remarks>
        public void Add(CandidateBranch<T> branch)
        {
            Branches.Add(branch);
        }

        /// <summary>
        /// Updates all <see cref="CandidateBranch{T}"/>es in <see cref="Branches"/> with
        /// an <see cref="UpdatePath{T}"/>.
        /// </summary>
        /// <param name="path">The <see cref="UpdatePath{T}"/> representing a path from the previous
        /// <see cref="Tip"/> to the newly changed <see cref="Tip"/>.</param>
        /// <param name="predicate"><see cref="Func{TResult}"/> for predicate which
        /// <see cref="Branches"/> are no more needed.</param>
        /// <remarks>
        /// <para>
        /// In order for this to be kept concurrent with the local <see cref="BlockChain{T}"/>,
        /// this should be invoked every time when the tip of the <see cref="BlockChain{T}"/> is
        /// updated.
        /// </para>
        /// <para>
        /// Also, while updating each <see cref="CandidateBranch{T}"/>,
        /// if an <see cref="CandidateBranch{T}"/> is no longer needed,
        /// i.e. if <see cref="CandidateBranch{T}.Tip"/>'s <see cref="Block{T}.TotalDifficulty"/> is
        /// no longer higher than that of <see cref="UpdatePath{T}.NewTip"/>, it should be discarded.
        /// </para>
        /// </remarks>
        public void Update(UpdatePath<T> path, Func<IBlockExcerpt, bool> predicate)
        {
            return;
        }

        /// <summary>
        /// Removes every <see cref="CandidateBranch{T}"/> in <see cref="Branches"/>.
        /// </summary>
        public void Clear()
        {
            return;
        }

        public bool Any() => Branches.Any();
    }
}
