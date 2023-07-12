namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// A common interface for blocks that have their
    /// <see cref="IBlockContent.Transactions"/>, but are not evaluated yet (i.e., their state
    /// root hashes are not yet determined).
    /// </summary>
    public interface IPreEvaluationBlock : IBlockContent, IPreEvaluationBlockHeader
    {
    }
}
