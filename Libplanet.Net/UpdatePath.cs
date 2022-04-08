using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// <para>
    /// A class representing a path from an old <see cref="BlockChain{T}.Tip"/>
    /// to a new <see cref="BlockChain{T}.Tip"/> when a change is made to
    /// a <see cref="BlockChain{T}"/>.
    /// </para>
    /// <para>
    /// The following properties must always hold:
    /// <list type="bullet">
    ///     <item><description>
    ///         <see cref="NewTip"/> always has a higher <see cref="Block{T}.TotalDifficulty"/>
    ///         than that of <see cref="OldTip"/>.
    ///     </description></item>
    ///     <item><description>
    ///         Each <see cref="Block{T}"/> in <see cref="Blocks"/> is unique.
    ///     </description></item>
    ///     <item><description>
    ///         Each adjacent pair of <see cref="Block{T}"/>s in <see cref="Blocks"/> has
    ///         <see cref="Block{T}.Index"/> difference of exactly one.
    ///     </description></item>
    /// </list>
    /// </para>
    /// </summary>
    /// <remarks>
    /// By the first property, <see cref="Blocks"/> should always have at least
    /// two <see cref="Block{T}"/>s.
    /// </remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class UpdatePath<T>
        where T : IAction, new()
    {
        public UpdatePath(
            IEnumerable<Block<T>> blocks,
            Block<T> oldTip,
            Block<T> branchPoint,
            Block<T> newTip)
        {
            Blocks = blocks;
            OldTip = oldTip;
            BranchPoint = branchPoint;
            NewTip = newTip;
        }

        /// <summary>
        /// The <see cref="IEnumerable{T}"/> of <see cref="Block{T}"/> in the path.
        /// </summary>
        public IEnumerable<Block<T>> Blocks { get; }

        /// <summary>
        /// The old <see cref="BlockChain{T}.Tip"/> before the update of
        /// a <see cref="BlockChain{T}"/>. The same as the first element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> OldTip { get; }

        /// <summary>
        /// The branchpoint used when updating a <see cref="BlockChain{T}"/>.
        /// </summary>
        public Block<T> BranchPoint { get; }

        /// <summary>
        /// The old <see cref="BlockChain{T}.Tip"/> after the update of
        /// a <see cref="BlockChain{T}"/>. The same as the last element in <see cref="Blocks"/>.
        /// </summary>
        public Block<T> NewTip { get; }
    }
}
