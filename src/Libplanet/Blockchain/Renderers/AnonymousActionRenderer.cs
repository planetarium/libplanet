using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Common;
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
    ///     ActionRenderer = (action, context, nextState) =>
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
        /// <see cref="RenderAction(IValue, ICommittedActionContext, HashDigest{SHA256})"/>.
        /// </summary>
        public Action<IValue, ICommittedActionContext, HashDigest<SHA256>>? ActionRenderer
            { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderActionError(IValue, ICommittedActionContext, Exception)"/>.
        /// </summary>
        public Action<IValue, ICommittedActionContext, Exception>? ActionErrorRenderer { get; set; }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlockEnd(Block, Block)"/>.
        /// </summary>
        public Action<Block, Block>? BlockEndRenderer { get; set; }

        /// <inheritdoc cref="IActionRenderer.RenderAction"/>
        public void RenderAction(
            IValue action,
            ICommittedActionContext context,
            HashDigest<SHA256> nextState
        ) =>
            ActionRenderer?.Invoke(action, context, nextState);

        /// <inheritdoc
        /// cref="IActionRenderer.RenderActionError(IValue, ICommittedActionContext, Exception)"/>
        public void RenderActionError(
            IValue action,
            ICommittedActionContext context,
            Exception exception) =>
                ActionErrorRenderer?.Invoke(action, context, exception);

        /// <inheritdoc cref="IActionRenderer.RenderBlockEnd(Block, Block)"/>
        public void RenderBlockEnd(Block oldTip, Block newTip) =>
            BlockEndRenderer?.Invoke(oldTip, newTip);
    }
}
