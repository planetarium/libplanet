using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Listens state changes of every step of actions, besides blocks,
    /// on a <see cref="BlockChain"/>.
    /// If you need more fine-grained events than <see cref="IRenderer"/>,
    /// implement this interface instead.
    /// <para>The invocation order of methods for each <see cref="Block"/> are:</para>
    /// <list type="number">
    /// <item><description><see cref="IRenderer.RenderBlock(Block, Block)"/> (one time)
    /// </description></item>
    /// <item><description><see cref="RenderAction"/>
    /// &amp; <see cref="RenderActionError"/> (zero or more
    /// times)</description>
    /// </item>
    /// <item><description><see cref="RenderBlockEnd(Block, Block)"/> (one time)</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <remarks>Although <see cref="Transaction"/>s affect the states in
    /// the <see cref="IStateStore"/> all or nothing at all (i.e., atomically),
    /// <see cref="IActionRenderer"/> receives all action-related events
    /// (<see cref="RenderAction"/>/<see cref="RenderActionError"/>) <em>immediately</em>
    /// without buffering, which means actions are rendered <em>even before</em> whether there are
    /// any actions throwing an exception in the same transaction is determined.  In other words,
    /// for <see cref="IActionRenderer"/>s, it is not guaranteed that actions in a transaction
    /// are atomic.
    /// </remarks>
    public interface IActionRenderer : IRenderer
    {
        /// <summary>
        /// Does things that should be done right after an <paramref name="action"/>
        /// is executed and applied to the blockchain.
        /// </summary>
        /// <param name="action">An executed action.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousState"/> are the states right
        /// <em>before</em> this action executed.  For the states after this action executed,
        /// use the <paramref name="nextState"/> argument instead.</param>
        /// <param name="nextState">The state root hash right <em>after</em> this action executed,
        /// which means it is equivalent to the states <paramref name="action"/>'s
        /// <see cref="IAction.Execute(IActionContext)"/> method returned.</param>
        /// <remarks>
        /// It is guaranteed to be called only once for an <paramref name="action"/>,
        /// and only after applied to the blockchain, unless an exception is thrown during executing
        /// the <paramref name="action"/> (in that case <see
        /// cref="RenderActionError"/> is called instead) or
        /// once the <paramref name="action"/> has been unrendered.
        /// <para>Also note that this method is invoked after <see
        /// cref="IRenderer.RenderBlock(Block, Block)"/> method is called
        /// (where its second parameter <c>newTip</c> contains a transaction the <paramref
        /// name="action"/> belongs to).</para>
        /// </remarks>
        void RenderAction(
            IValue action,
            ICommittedActionContext context,
            HashDigest<SHA256> nextState);

        /// <summary>
        /// Does the similar things to <see cref="RenderAction"/>, except that this method
        /// is invoked when <paramref name="action"/> has terminated with an exception.
        /// </summary>
        /// <param name="action">An action which threw an exception during execution.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousState"/> are the states right
        /// <em>before</em> this action executed.</param>
        /// <param name="exception">The exception thrown during executing the <paramref
        /// name="action"/>.</param>
        /// <remarks>
        /// Also note that this method is invoked after <see
        /// cref="IRenderer.RenderBlock(Block, Block)"/> method is called
        /// (where its second parameter <c>newTip</c> contains a transaction the <paramref
        /// name="action"/> belongs to).
        /// </remarks>
        void RenderActionError(IValue action, ICommittedActionContext context, Exception exception);

        /// <summary>
        /// Does things that should be done right all actions in a new <see cref="Block"/> are
        /// rendered.
        /// </summary>
        /// <remarks>It is guaranteed to be called only once for a block.</remarks>
        /// <param name="oldTip">The previous <see cref="BlockChain.Tip"/>.</param>
        /// <param name="newTip">The current <see cref="BlockChain.Tip"/>.</param>
        void RenderBlockEnd(Block oldTip, Block newTip);
    }
}
