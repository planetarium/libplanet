using System;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// An <see cref="IActionRenderer{T}"/> that invokes its callbacks.
    /// In other words, this is an <see cref="IActionRenderer{T}"/> version of
    /// <see cref="AnonymousRenderer{T}"/>.
    /// <para>This class is useful when you want an one-use ad-hoc implementation (i.e., Java-style
    /// anonymous class) of <see cref="IActionRenderer{T}"/> interface.</para>
    /// </summary>
    /// <example>
    /// With object initializers, you can easily make an one-use action renderer:
    /// <code><![CDATA[
    /// var actionRenderer = new AnonymousActionRenderer<ExampleAction>
    /// {
    ///     ActionRenderer = (action, context, nextStates) =>
    ///     {
    ///         // Implement RenderAction() here.
    ///     };
    /// };
    /// ]]></code>
    /// </example>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public sealed class AnonymousActionRenderer<T> : AnonymousRenderer<T>, IActionRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderAction(IAction, IActionContext, IAccountStateDelta)"/>.
        /// </summary>
        public Action<IAction, IActionContext, IAccountStateDelta>? ActionRenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>.
        /// </summary>
        public Action<IAction, IActionContext, IAccountStateDelta>? ActionUnrenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderActionError(IAction, IActionContext, Exception)"/>.
        /// </summary>
        public Action<IAction, IActionContext, Exception>? ActionErrorRenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="UnrenderActionError(IAction, IActionContext, Exception)"/>.
        /// </summary>
        public Action<IAction, IActionContext, Exception>? ActionErrorUnrenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlockEnd(Block{T}, Block{T})"/>.
        /// </summary>
        public Action<Block<T>, Block<T>>? BlockEndRenderer { get; set; }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            ActionRenderer?.Invoke(action, context, nextStates);

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            ActionUnrenderer?.Invoke(action, context, nextStates);

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public void RenderActionError(IAction action, IActionContext context, Exception exception)
            => ActionErrorRenderer?.Invoke(action, context, exception);

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception)"/>
        public void UnrenderActionError(IAction action, IActionContext context, Exception exception)
            => ActionErrorUnrenderer?.Invoke(action, context, exception);

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public void RenderBlockEnd(Block<T> oldTip, Block<T> newTip) =>
            BlockEndRenderer?.Invoke(oldTip, newTip);
    }
}
