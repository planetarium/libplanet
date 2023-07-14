using System.Collections.Generic;
using Libplanet.Common.Types.Tx;

namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that do not have any proofs, but have their metadata and
    /// containing <see cref="Transactions"/>.
    /// </summary>
    /// <remarks>This is always ordered by <see cref="Transaction.Id"/>.</remarks>
    public interface IBlockContent : IBlockMetadata
    {
        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        IReadOnlyList<ITransaction> Transactions { get; }
    }
}
