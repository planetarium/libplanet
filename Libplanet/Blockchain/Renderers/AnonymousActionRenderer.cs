using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// An <see cref="IActionRenderer"/> that invokes its callbacks.
    /// In other words, this is an <see cref="IActionRenderer"/> version of
    /// <see cref="AnonymousRenderer"/>.
    /// <para>This class is useful when you want an one-use ad-hoc implementation (i.e., Java-style
    /// anonymous class) of <see cref="IActionRenderer"/> interface.</para>
    /// </summary>
    /// <example>
    /// With object initializers, you can easily make an one-use action renderer:
    /// <code><![CDATA[
    /// var actionRenderer = new AnonymousActionRenderer
    /// {
    ///     ActionRenderer = (action, context, nextStates) =>
    ///     {
    ///         // Implement RenderAction() here.
    ///     };
    /// };
    /// ]]></code>
    /// </example>
    public sealed class AnonymousActionRenderer : AnonymousRenderer, IActionRenderer
    {
        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderAction(IValue, IActionContext, IAccount)"/>.
        /// </summary>
        public Action<IValue, IActionContext, IAccount>? ActionRenderer { get; set; }

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
        /// cref="IActionRenderer.RenderAction(IValue, IActionContext, IAccount)"/>
        public void RenderAction(
            IValue action,
            IActionContext context,
            IAccount nextStates
        ) =>
            ActionRenderer?.Invoke(action, context, nextStates);

        /// <inheritdoc
        /// cref="IActionRenderer.RenderActionError(IValue, IActionContext, Exception)"/>
        public void RenderActionError(IValue action, IActionContext context, Exception exception)
            => ActionErrorRenderer?.Invoke(action, context, exception);

        /// <inheritdoc cref="IActionRenderer.RenderBlockEnd(Block, Block)"/>
        public void RenderBlockEnd(Block oldTip, Block newTip) =>
            BlockEndRenderer?.Invoke(oldTip, newTip);
    }
}
