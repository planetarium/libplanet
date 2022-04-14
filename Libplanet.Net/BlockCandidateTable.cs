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
        /// Retrieves the <see cref="CandidateBranch{T}"/> with the best Tip, i.e.
        /// the highest <see cref="Block{T}.TotalDifficulty"/>.
        /// </summary>
        public CandidateBranch<T>? BestBranch { get; private set; }

        public long Count
        {
            get => Branches.Count;
        }

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of
        /// <see cref="CandidateBranch{T}"/>es that can be appended
        /// to the <em>current</em> <see cref="BlockChain{T}"/>.
        /// </summary>
        private ConcurrentBag<CandidateBranch<T>> Branches { get; set; }

        /// <summary>
        /// Adds an <see cref="CandidateBranch{T}"/> to <see cref="Branches"/>.
        /// </summary>
        /// <param name="branch">The <see cref="CandidateBranch{T}"/>
        /// to add to <see cref="Branches"/>.
        /// </param>
        public void Add(CandidateBranch<T> branch)
        {
            BestBranch ??= branch;
            BestBranch = CompareBranch(BestBranch, branch);

            Branches.Add(branch);
        }

        /// <summary>
        /// Updates all <see cref="CandidateBranch{T}"/>es in <see cref="Branches"/> with
        /// an <see cref="UpdatePath{T}"/>.
        /// </summary>
        /// <param name="path">The <see cref="UpdatePath{T}"/> representing a path from the previous
        /// Tip to the newly changed Tip.</param>
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
        /// i.e. if <see cref="CandidateBranch{T}.Tip"/>'s
        /// <see cref="Block{T}.TotalDifficulty"/> is
        /// no longer higher than that of <see cref="UpdatePath{T}.NewTip"/>,
        /// it should be discarded.
        /// </para>
        /// </remarks>
        public void Update(UpdatePath<T> path, Func<IBlockExcerpt, bool> predicate)
        {
            var newBag = new ConcurrentBag<CandidateBranch<T>>();
            CandidateBranch<T>? longestBranch = null;

            // if OldTip is equals to BranchPoint, means it is not reorg.
            if (path.OldTip.Equals(path.BranchPoint))
            {
                foreach (CandidateBranch<T> branch in Branches)
                {
                    if (!predicate(branch.Tip))
                    {
                        continue;
                    }

                    var newBlocks =
                        branch.Blocks.FindAll(x => x.Index > path.NewTip.Index).ToList();
                    var newBranch = new CandidateBranch<T>(
                        newBlocks,
                        newBlocks.First(),
                        newBlocks.Last());

                    longestBranch ??= newBranch;
                    longestBranch = CompareBranch(longestBranch, newBranch);
                }
            }
            else
            {
                foreach (CandidateBranch<T> branch in Branches)
                {
                    if (!predicate(branch.Tip))
                    {
                        continue;
                    }

                    var newBlocks = branch.Blocks;
                    Block<T> index = branch.Root;
                    while (index.PreviousHash != null &&
                           path.Blocks.Contains(index))
                    {
                        try
                        {
                            index = path.Blocks.Single(x => x.Hash.Equals(index.PreviousHash));
                            newBlocks.Insert(0, index);
                        }
                        catch (ArgumentNullException)
                        {
                            break;
                        }
                    }

                    if (newBlocks.First().PreviousHash.Equals(path.OldTip.Hash))
                    {
                        newBlocks.Insert(0, path.BranchPoint);
                    }

                    var newBranch = new CandidateBranch<T>(
                        newBlocks,
                        newBlocks.First(),
                        newBlocks.Last());

                    longestBranch ??= newBranch;
                    longestBranch = CompareBranch(longestBranch, newBranch);
                }
            }

            if (longestBranch is { })
            {
                newBag.Add(longestBranch);
                BestBranch = longestBranch;
            }

            Branches = newBag;
        }

        /// <summary>
        /// Removes every <see cref="CandidateBranch{T}"/> in <see cref="Branches"/>.
        /// </summary>
        public void Clear()
        {
            Branches = new ConcurrentBag<CandidateBranch<T>>();
            BestBranch = null;
        }

        public bool Any() => Branches.Any();

        private CandidateBranch<T> CompareBranch(CandidateBranch<T> lf, CandidateBranch<T> rf)
            => lf.Tip.TotalDifficulty < rf.Tip.TotalDifficulty ? rf : lf;
    }
}
