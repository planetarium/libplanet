using System;
using System.Collections.Generic;
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
    ///     ActionRenderer = (action, context, nextStates, logs) =>
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
        /// <see cref="RenderAction(IAction, IActionContext, IAccountStateDelta, List{string})"/>.
        /// </summary>
        public Action<IAction, IActionContext, IAccountStateDelta, List<string>>? ActionRenderer
        {
            get;
            set;
        }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="UnrenderAction(IAction, IActionContext, IAccountStateDelta, List{string})"/>.
        /// </summary>
        public Action<IAction, IActionContext, IAccountStateDelta, List<string>>? ActionUnrenderer
        {
            get;
            set;
        }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderActionError(IAction, IActionContext, Exception, List{string})"/>.
        /// </summary>
        public Action<IAction, IActionContext, Exception, List<string>>? ActionErrorRenderer
        {
            get;
            set;
        }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="UnrenderActionError(IAction, IActionContext, Exception, List{string})"/>.
        /// </summary>
        public Action<IAction, IActionContext, Exception, List<string>>? ActionErrorUnrenderer
        {
            get;
            set;
        }

        /// <summary>
        /// A callback function to be invoked together with
        /// <see cref="RenderBlockEnd(Block{T}, Block{T})"/>.
        /// </summary>
        public Action<Block<T>, Block<T>>? BlockEndRenderer { get; set; }

#pragma warning disable MEN002
        /// <inheritdoc cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta, List{string})"/>
#pragma warning restore MEN002
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates,
            List<string> logs
        ) =>
            ActionRenderer?.Invoke(action, context, nextStates, logs);

#pragma warning disable MEN002
        /// <inheritdoc cref="IActionRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta, List{string})"/>
#pragma warning restore MEN002
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates,
            List<string> logs
        ) =>
            ActionUnrenderer?.Invoke(action, context, nextStates, logs);

#pragma warning disable MEN002
        /// <inheritdoc cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception, List{string})"/>
#pragma warning restore MEN002
        public void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception,
            List<string> logs
        ) => ActionErrorRenderer?.Invoke(action, context, exception, logs);

#pragma warning disable MEN002
        /// <inheritdoc cref="IActionRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception, List{string})"/>
#pragma warning restore MEN002
        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception,
            List<string> logs
        ) => ActionErrorUnrenderer?.Invoke(action, context, exception, logs);

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public void RenderBlockEnd(Block<T> oldTip, Block<T> newTip) =>
            BlockEndRenderer?.Invoke(oldTip, newTip);
    }
}
