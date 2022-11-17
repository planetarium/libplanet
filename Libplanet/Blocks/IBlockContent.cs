using System.Collections.Generic;
using System.Collections.Immutable;
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
    // This interface will be replaced with `IBlockContent`, non-generic, in the future.
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

    /// <summary>
    /// A common interface for blocks that do not have any proofs, but have their metadata and
    /// containing <see cref="Transactions"/>.
    /// </summary>
    /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
    /// <remarks>It is similar with <see cref="IBlockContent{T}"/> but
    /// it is non-generic interface. It means that it doesn't check the action types
    /// in serialization.</remarks>
    public interface IBlockContent : IBlockMetadata
    {
        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        IImmutableSet<ITransaction> Transactions { get; }
    }
}
