using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Listens state changes on a <see cref="BlockChain{T}"/>.
    /// <para>Usually, implementations of this interface purpose to update the in-memory game states
    /// (if exist), or send a signal to the UI thread (usually the main thread) so that the graphics
    /// on the display is redrawn.</para>
    /// <para>The invocation order of methods for each <see cref="Block"/> are:</para>
    /// <list type="number">
    /// <item><description><see cref="RenderBlock(Block, Block)"/> (one time)</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public interface IRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Does things that should be done right after a new <see cref="Block"/> is appended to
        /// a <see cref="BlockChain{T}"/> (so that its <see cref="BlockChain{T}.Tip"/> has changed).
        /// </summary>
        /// <remarks>It is guaranteed to be called only once for a block, and only after applied to
        /// the blockchain, unless it has been stale due to reorg.</remarks>
        /// <param name="oldTip">The previous <see cref="BlockChain{T}.Tip"/>.</param>
        /// <param name="newTip">The current <see cref="BlockChain{T}.Tip"/>.</param>
        void RenderBlock(Block oldTip, Block newTip);
    }
}
