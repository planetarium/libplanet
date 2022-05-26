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
        private readonly IComparer<IBlockExcerpt> _canonicalChainComparer;
        private readonly object _lock = new object();

        public BlockCandidateTable(IComparer<IBlockExcerpt> canonicalChainComparer)
        {
            Branches = new ConcurrentBag<CandidateBranch<T>>();
            _canonicalChainComparer = canonicalChainComparer;
        }

        /// <summary>
        /// Retrieves the <see cref="CandidateBranch{T}"/> with the best Tip, i.e.
        /// the highest <see cref="Block{T}.TotalDifficulty"/>.
        /// If <see cref="BlockCandidateTable{T}.Update"/> is not called, this value is the best
        /// branch in <see cref="BlockCandidateTable{T}.Branches"/> without any reduction.
        /// </summary>
        public CandidateBranch<T>? BestBranch { get; private set; }

        public long Count => Branches.Count;

        /// <summary>
        /// An <see cref="IEnumerable{T}"/> of
        /// <see cref="CandidateBranch{T}"/>es that can be appended
        /// to the <em>current</em> <see cref="BlockChain{T}"/>.
        /// </summary>
        private ConcurrentBag<CandidateBranch<T>> Branches { get; set; }

        /// <summary>
        /// Adds a <see cref="CandidateBranch{T}"/> to <see cref="Branches"/>.
        /// </summary>
        /// <param name="branch">The <see cref="CandidateBranch{T}"/>
        /// to add to <see cref="Branches"/>.
        /// </param>
        /// <param name="currentTip">The topmost <see cref="BlockChain{T}.Tip"/> for
        /// determining whether branch has higher comparer value.
        /// </param>
        public void Add(CandidateBranch<T> branch, IBlockHeader currentTip)
        {
            lock (_lock)
            {
                if (!IsBlockNeeded(branch.Tip, currentTip))
                {
                    return;
                }

                if (BestBranch is null)
                {
                    BestBranch = branch;
                    Branches.Add(branch);
                    return;
                }

                BestBranch = CompareSourceBranch(BestBranch, branch);

                Branches.Add(branch);
            }
        }

        /// <summary>
        /// Updates all <see cref="CandidateBranch{T}"/>es in <see cref="Branches"/> with
        /// an <see cref="UpdatePath{T}"/>.
        /// </summary>
        /// <param name="path">The <see cref="UpdatePath{T}"/> representing a path from the previous
        /// Tip to the newly changed Tip.</param>
        /// <remarks>
        /// <para>
        /// In order for this to be kept concurrent with the local <see cref="BlockChain{T}"/>,
        /// this should be invoked every time when the tip of the <see cref="BlockChain{T}"/> is
        /// updated.
        /// </para>
        /// <para>
        /// Also, while updating each <see cref="CandidateBranch{T}"/>,
        /// if an <see cref="CandidateBranch{T}"/> is no longer needed,
        /// e.g. if <see cref="CandidateBranch{T}.Tip"/>'s
        /// <see cref="Block{T}.TotalDifficulty"/> is
        /// no longer higher than that of <see cref="UpdatePath{T}.NewTip"/>,
        /// it should be discarded.
        /// </para>
        /// </remarks>
        public void Update(UpdatePath<T> path)
        {
            lock (_lock)
            {
                var newBranches = new List<CandidateBranch<T>>();
                CandidateBranch<T>? longestBranch = null;

                // if OldTip is equals to BranchPoint, means it is not reorg.
                if (path.OldTip.Equals(path.BranchPoint))
                {
                    foreach (CandidateBranch<T> branch in Branches)
                    {
                        if (!IsBlockNeeded(branch.Tip, path.NewTip))
                        {
                            continue;
                        }

                        try
                        {
                            var newBlocks =
                                branch.Blocks.ToList().FindAll(x => x.Index > path.NewTip.Index)
                                    .ToList();
                            var newBranch = new CandidateBranch<T>(newBlocks);

                            longestBranch ??= newBranch;
                            longestBranch = CompareSourceBranch(longestBranch, newBranch);
                        }
                        catch (ArgumentNullException)
                        {
                            // FIXME: This has to be done to prevent stopping Update() by
                            // exception thrown from FindAll().
                            continue;
                        }
                    }
                }
                else
                {
                    foreach (CandidateBranch<T> branch in Branches)
                    {
                        if (!IsBlockNeeded(branch.Tip, path.NewTip))
                        {
                            continue;
                        }

                        var newBlocks = branch.Blocks.ToList();
                        Block<T> index = branch.Root;
                        while (index.PreviousHash != null &&
                               path.Blocks.Contains(index))
                        {
                            try
                            {
                                index = path.Blocks.Single(x => x.Hash.Equals(index.PreviousHash));
                                newBlocks.Insert(0, index);
                            }
                            catch (Exception e) when (
                                e is ArgumentException ||
                                e is InvalidOperationException)
                            {
                                break;
                            }
                        }

                        if (newBlocks.First().Hash.Equals(path.OldTip.Hash) ||
                            newBlocks.First().Hash.Equals(path.BranchPoint.Hash))
                        {
                            var newBranch = new CandidateBranch<T>(newBlocks);

                            longestBranch ??= newBranch;
                            longestBranch = CompareSourceBranch(longestBranch, newBranch);
                        }
                    }
                }

                if (longestBranch is { })
                {
                    newBranches.Add(longestBranch);
                    BestBranch = longestBranch;
                }

                Branches = new ConcurrentBag<CandidateBranch<T>>(newBranches);
            }
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

        // FIXME: This method is duplicated with Swarm<T>.IsBlockNeeded()
        private bool IsBlockNeeded(IBlockExcerpt block, IBlockExcerpt tip) =>
            _canonicalChainComparer.Compare(block, tip) > 0;

        /// <summary>
        /// Comparing two <see cref="CandidateBranch{T}"/>s.
        /// </summary>
        /// <param name="source">
        /// a <see cref="CandidateBranch{T}"/> to be compared.
        /// </param>
        /// <param name="relative">
        /// a <see cref="CandidateBranch{T}"/> to compare with the <paramref name="source"/>.
        /// </param>
        /// <returns>
        /// returns <see cref="CandidateBranch{T}"/> with the higher comparer value between two.
        /// </returns>
        /// <remarks>
        /// If the comparer value of <paramref name="relative"/> is same as source, then
        /// <paramref name="source"/> will be returned as the comparison result.
        /// </remarks>
        private CandidateBranch<T> CompareSourceBranch(
            CandidateBranch<T> source,
            CandidateBranch<T> relative) =>
            _canonicalChainComparer.Compare(source.Tip, relative.Tip) > 0 ? source : relative;
    }
}
