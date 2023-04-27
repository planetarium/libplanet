using System;
using Bencodex.Types;
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
        /// <see cref="RenderAction(IValue, IActionContext, IAccountStateDelta)"/>.
        /// </summary>
        public Action<IValue, IActionContext, IAccountStateDelta>? ActionRenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderActionError(IValue, IActionContext, Exception)"/>.
        /// </summary>
        public Action<IValue, IActionContext, Exception>? ActionErrorRenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlockEnd(Block, Block)"/>.
        /// </summary>
        public Action<Block, Block>? BlockEndRenderer { get; set; }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IValue, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IValue action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            ActionRenderer?.Invoke(action, context, nextStates);

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IValue, IActionContext, Exception)"/>
        public void RenderActionError(IValue action, IActionContext context, Exception exception)
            => ActionErrorRenderer?.Invoke(action, context, exception);

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block, Block)"/>
        public void RenderBlockEnd(Block oldTip, Block newTip) =>
            BlockEndRenderer?.Invoke(oldTip, newTip);
    }
}
