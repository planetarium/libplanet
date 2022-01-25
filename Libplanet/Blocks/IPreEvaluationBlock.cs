using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A common interface for blocks that have their proof-of-work
    /// <see cref="IPreEvaluationBlockHeader.Nonce"/>s and
    /// <see cref="IBlockContent{T}.Transactions"/>, but are not evaluated yet (i.e., their state
    /// root hashes are not yet determined).
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    public interface IPreEvaluationBlock<T> : IBlockContent<T>, IPreEvaluationBlockHeader
        where T : IAction, new()
    {
    }
}
