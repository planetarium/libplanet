using System;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Listens state changes of every step of actions, besides blocks,
    /// on a <see cref="BlockChain{T}"/>.
    /// If you need more fine-grained events than <see cref="IRenderer{T}"/>,
    /// implement this interface instead.
    /// <para>The invocation order of methods for each <see cref="Block{T}"/> are:</para>
    /// <list type="number">
    /// <item><description><see cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
    /// (one time)</description></item>
    /// <item><description><see cref="UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
    /// &amp; <see cref="UnrenderActionError(IAction, IActionContext, Exception)"/> (zero or more
    /// times)</description>
    /// </item>
    /// <item><description><see cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/> (one time)
    /// </description></item>
    /// <item><description><see cref="RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
    /// &amp; <see cref="RenderActionError(IAction, IActionContext, Exception)"/> (zero or more
    /// times)</description>
    /// </item>
    /// <item><description><see cref="RenderBlockEnd(Block{T}, Block{T})"/> (one time)</description>
    /// </item>
    /// <item><description><see cref="IRenderer{T}.RenderReorgEnd(Block{T}, Block{T}, Block{T})"/>
    /// (one time)</description></item>
    /// </list>
    /// </summary>
    /// <remarks>Although <see cref="Transaction{T}"/>s affect the states in
    /// the <see cref="IStateStore"/> all or nothing at all (i.e., atomically),
    /// <see cref="IActionRenderer{T}"/> receives all action-related events
    /// (<see cref="RenderAction"/>/<see cref="RenderActionError"/>/<see cref="UnrenderAction"
    /// />/<see cref="UnrenderActionError"/>) <em>immediately</em> without buffering,
    /// which means actions are rendered <em>even before</em> whether there are any actions throwing
    /// an exception in the same transaction is determined.  In other words, for <see
    /// cref="IActionRenderer{T}"/>s, it is not guaranteed that actions in a transaction are atomic.
    /// <para>If your action renderer expects to receive only render events about actions belonging
    /// successful transactions, wrap your action renderer with
    /// <see cref="AtomicActionRenderer{T}"/>.</para>
    /// </remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public interface IActionRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Does things that should be done right after an <paramref name="action"/>
        /// is executed and applied to the blockchain.
        /// </summary>
        /// <param name="action">An executed action.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousStates"/> are the states right
        /// <em>before</em> this action executed.  For the states after this action executed,
        /// use the <paramref name="nextStates"/> argument instead.</param>
        /// <param name="nextStates">The states right <em>after</em> this action executed,
        /// which means it is equivalent to the states <paramref name="action"/>'s
        /// <see cref="IAction.Execute(IActionContext)"/> method returned.</param>
        /// <remarks>
        /// It is guaranteed to be called only once for an <paramref name="action"/>,
        /// and only after applied to the blockchain, unless an exception is thrown during executing
        /// the <paramref name="action"/> (in that case <see
        /// cref="RenderActionError(IAction, IActionContext, Exception)"/> is called instead) or
        /// once the <paramref name="action"/> has been unrendered.
        /// <para>Also note that this method is invoked after <see
        /// cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/> method is called
        /// (where its second parameter <c>newTip</c> contains a transaction the <paramref
        /// name="action"/> belongs to).</para>
        /// <para>The reason why the parameter <paramref name="action"/> takes
        /// <see cref="IAction"/> instead of <typeparamref name="T"/> is because it can take
        /// block actions (<see cref="Policies.IBlockPolicy{T}.BlockAction"/>) besides transaction
        /// actions (<see cref="Tx.Transaction{T}.Actions"/>).</para>
        /// </remarks>
        void RenderAction(IAction action, IActionContext context, IAccountStateDelta nextStates);

        /// <summary>
        /// Does things that should be undone right after the given <paramref name="action"/> is
        /// invalidated (mostly due to reorg, i.e., a block which the action has belonged to becomes
        /// considered stale).
        /// <para>This method takes the equivalent arguments to <see
        /// cref="RenderAction(IAction, IActionContext, IAccountStateDelta)"/> method.</para>
        /// </summary>
        /// <param name="action">A stale action.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousStates"/> are the states right
        /// <em>before</em> this action executed.  For the states after this action executed,
        /// use the <paramref name="nextStates"/> argument instead.</param>
        /// <param name="nextStates">The states right <em>after</em> this action executed,
        /// which means it is equivalent to the states <paramref name="action"/>'s
        /// <see cref="IAction.Execute(IActionContext)"/> method returned.</param>
        /// <remarks>As a rule of thumb, this should be the inverse of
        /// <see cref="RenderAction(IAction, IActionContext, IAccountStateDelta)"/> method
        /// with redrawing the graphics on the display at the finish.</remarks>
        /// <remarks>The reason why the parameter <paramref name="action"/> takes
        /// <see cref="IAction"/> instead of <typeparamref name="T"/> is because it can take
        /// block actions (<see cref="Policies.IBlockPolicy{T}.BlockAction"/>) besides transaction
        /// actions (<see cref="Tx.Transaction{T}.Actions"/>).</remarks>
        void UnrenderAction(IAction action, IActionContext context, IAccountStateDelta nextStates);

        /// <summary>
        /// Does the similar things to <see cref=
        /// "RenderAction(IAction, IActionContext, IAccountStateDelta)"/>, except that this method
        /// is invoked when <paramref name="action"/> has terminated with an exception.
        /// </summary>
        /// <param name="action">An action which threw an exception during execution.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousStates"/> are the states right
        /// <em>before</em> this action executed.</param>
        /// <param name="exception">The exception thrown during executing the <paramref
        /// name="action"/>.</param>
        /// <remarks>
        /// Also note that this method is invoked after <see
        /// cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/> method is called
        /// (where its second parameter <c>newTip</c> contains a transaction the <paramref
        /// name="action"/> belongs to).
        /// <para>The reason why the parameter <paramref name="action"/> takes
        /// <see cref="IAction"/> instead of <typeparamref name="T"/> is because it can take
        /// block actions (<see cref="Policies.IBlockPolicy{T}.BlockAction"/>) besides transaction
        /// actions (<see cref="Tx.Transaction{T}.Actions"/>).</para>
        /// </remarks>
        void RenderActionError(IAction action, IActionContext context, Exception exception);

        /// <summary>
        /// Does the similar things to <see
        /// cref="UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>, except that
        /// this method is invoked when <paramref name="action"/> has terminated with an exception.
        /// <para>This method takes the equivalent arguments to <see
        /// cref="RenderActionError(IAction, IActionContext, Exception)"/> method.</para>
        /// </summary>
        /// <param name="action">An action which threw an exception during execution.</param>
        /// <param name="context">The equivalent context object to an object passed to
        /// the <paramref name="action"/>'s <see cref="IAction.Execute(IActionContext)"/> method.
        /// That means <see cref="IActionContext.PreviousStates"/> are the states right
        /// <em>before</em> this action executed.</param>
        /// <param name="exception">The exception thrown during executing the <paramref
        /// name="action"/>.</param>
        /// <remarks>The reason why the parameter <paramref name="action"/> takes
        /// <see cref="IAction"/> instead of <typeparamref name="T"/> is because it can take
        /// block actions (<see cref="Policies.IBlockPolicy{T}.BlockAction"/>) besides transaction
        /// actions (<see cref="Tx.Transaction{T}.Actions"/>).</remarks>
        void UnrenderActionError(IAction action, IActionContext context, Exception exception);

        /// <summary>
        /// Does things that should be done right all actions in a new <see cref="Block{T}"/> are
        /// rendered.
        /// </summary>
        /// <remarks>It is guaranteed to be called only once for a block.</remarks>
        /// <param name="oldTip">The previous <see cref="BlockChain{T}.Tip"/>.</param>
        /// <param name="newTip">The current <see cref="BlockChain{T}.Tip"/>.</param>
        void RenderBlockEnd(Block<T> oldTip, Block<T> newTip);
    }
}
