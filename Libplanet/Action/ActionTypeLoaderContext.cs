using Libplanet.Blocks;

namespace Libplanet.Action
{
    /// <summary>
    /// An <see cref="IActionTypeLoaderContext" /> implementation.
    /// </summary>
    internal class ActionTypeLoaderContext : IActionTypeLoaderContext
    {
        public ActionTypeLoaderContext(long index)
        {
            Index = index;
        }

        /// <inheritdoc />
        public long Index { get; }

        internal static ActionTypeLoaderContext From(
            IPreEvaluationBlockHeader blockHeader)
        {
            return new ActionTypeLoaderContext(blockHeader.Index);
        }
    }
}
