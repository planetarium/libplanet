using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Listens state changes on a <see cref="BlockChain{T}"/>.
    /// <para>Usually, implementations of this interface purpose to update the in-memory game states
    /// (if exist), or send a signal to the UI thread (usually the main thread) so that the graphics
    /// on the display is redrawn.</para>
    /// <para>The invocation order of methods for each <see cref="Block{T}"/> are:</para>
    /// <list type="number">
    /// <item><description><see cref="RenderReorg(Block{T}, Block{T}, Block{T})"/> (one time)
    /// </description></item>
    /// <item><description><see cref="RenderBlock(Block{T}, Block{T})"/> (one time)</description>
    /// </item>
    /// <item><description><see cref="RenderReorgEnd(Block{T}, Block{T}, Block{T})"/> (one time)
    /// </description></item>
    /// </list>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public interface IRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Does things that should be done right after a new <see cref="Block{T}"/> is appended to
        /// a <see cref="BlockChain{T}"/> (so that its <see cref="BlockChain{T}.Tip"/> has changed).
        /// </summary>
        /// <remarks>It is guaranteed to be called only once for a block, and only after applied to
        /// the blockchain, unless it has been stale due to reorg (for that case, <see
        /// cref="RenderReorg(Block{T}, Block{T}, Block{T})"/> is called in advance).</remarks>
        /// <param name="oldTip">The previous <see cref="BlockChain{T}.Tip"/>.</param>
        /// <param name="newTip">The current <see cref="BlockChain{T}.Tip"/>.</param>
        void RenderBlock(Block<T> oldTip, Block<T> newTip);

        /// <summary>
        /// Does things that should be done right before reorg happens to a <see
        /// cref="BlockChain{T}"/>.
        /// </summary>
        /// <remarks>For every call to this method, calls to
        /// <see cref="RenderBlock(Block{T}, Block{T})"/> and
        /// <see cref="RenderReorgEnd(Block{T}, Block{T}, Block{T})" /> methods with the same
        /// <paramref name="newTip"/> is made too.  Note that this method is guaranteed to be called
        /// before <see cref="RenderBlock(Block{T}, Block{T})"/> method for the same
        /// <paramref name="newTip"/>.</remarks>
        /// <param name="oldTip">The <see cref="BlockChain{T}.Tip"/> right before reorg.</param>
        /// <param name="newTip">The <see cref="BlockChain{T}.Tip"/> after reorg.</param>
        /// <param name="branchpoint">The highest common <see cref="Block{T}"/> between
        /// <paramref name="oldTip"/> and <paramref name="newTip"/>.</param>
        void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint);

        /// <summary>
        /// Does things that should be done right after reorg happens to a <see
        /// cref="BlockChain{T}"/>.
        /// </summary>
        /// <remarks>Note that this method is guaranteed to be called after
        /// <see cref="RenderReorg(Block{T}, Block{T}, Block{T})"/> and
        /// <see cref="RenderBlock(Block{T}, Block{T})"/> methods for the same
        /// <paramref name="newTip"/>.</remarks>
        /// <param name="oldTip">The <see cref="BlockChain{T}.Tip"/> right before reorg.</param>
        /// <param name="newTip">The <see cref="BlockChain{T}.Tip"/> after reorg.</param>
        /// <param name="branchpoint">The highest common <see cref="Block{T}"/> between
        /// <paramref name="oldTip"/> and <paramref name="newTip"/>.</param>
        void RenderReorgEnd(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint);
    }
}
