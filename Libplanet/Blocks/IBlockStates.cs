using Libplanet.State;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A minimal interface to get states from output states of a <see cref="Block"/>.
    /// </summary>
    public interface IBlockStates : IAccountState
    {
        /// <summary>
        /// The <see cref="Block.Hash"/> of the <see cref="Block"/> that this
        /// <see cref="IBlockStates"/> represents.  This can be <see langword="null"/>
        /// in which case represents initial default states.
        /// </summary>
        BlockHash? BlockHash { get; }
    }
}
