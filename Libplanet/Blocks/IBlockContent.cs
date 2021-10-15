#nullable enable
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A common interface for blocks that do not have any proofs, but have their metadata and
    /// containing <see cref="Transactions"/>.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    public interface IBlockContent<T> : IBlockMetadata
        where T : IAction, new()
    {
        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
        // FIXME: Need to change the type to IImmutableSet<Transaction<T>>.
        IReadOnlyList<Transaction<T>> Transactions { get; }
    }
}
