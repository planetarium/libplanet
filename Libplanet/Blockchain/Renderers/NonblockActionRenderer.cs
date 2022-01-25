using System;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates a <see cref="IActionRenderer{T}"/> instance and lets all rendering events be
    /// non-blocking.
    /// <para>Every method call on the renderer will immediately return and the rendering
    /// will be performed in a background thread.  Note that the order of render events is
    /// still guaranteed.  In other words, a later event never arrives before events earlier
    /// than it.</para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="Libplanet.Blockchain.BlockChain{T}"/>'s type parameter.</typeparam>
    /// <example>
    /// <code><![CDATA[
    /// IActionRenderer<ExampleAction> actionRenderer = new SomeActionRenderer();
    /// // Wraps the actionRenderer with NonblockActionRenderer; the SomeActionRenderer instance
    /// // becomes to receive event messages in NonblockActionRenderer's backround thread:
    /// actionRenderer = new NonblockActionRenderer<ExampleAction>(
    ///    actionRenderer,
    ///    queue: 1024,
    ///    fullFallback: droppedEvent => ShowError("Too many rendering events in a short time."));
    /// /// ...
    /// // Should be disposed when no longer needed:
    /// actionRenderer.Dispose();
    /// ]]></code>
    /// </example>
    /// <remarks>As rendering events become performed in a background thread instead of the main
    /// thread, some graphics/UI drawings might be disallowed.  In such case, communicate with the
    /// main thread through <a
    /// href="https://devblogs.microsoft.com/dotnet/an-introduction-to-system-threading-channels/"
    /// >producer/consumer channels</a>.</remarks>
    public class NonblockActionRenderer<T> : NonblockRenderer<T>, IActionRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a new instance of <see cref="NonblockActionRenderer{T}"/> decorating the given
        /// <paramref name="renderer"/> instance.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives events in a background thread.</param>
        /// <param name="queueSize">The size of the internal event queue.</param>
        /// <param name="fullMode">Specifies the behavior when the internal event queue is full so
        /// that no more event can be added.</param>
        public NonblockActionRenderer(IActionRenderer<T> renderer, int queueSize, FullMode fullMode)
            : base(renderer, queueSize, fullMode)
        {
            ActionRenderer = renderer;
        }

        /// <summary>
        /// Creates a new instance of <see cref="NonblockActionRenderer{T}"/> decorating the given
        /// <paramref name="renderer"/> instance.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives events in a background thread.</param>
        /// <param name="queueSize">The size of the internal event queue.</param>
        /// <param name="fullFallback">Specifies the custom behavior when the internal event
        /// queue is full so that no more event can be added.</param>
        public NonblockActionRenderer(
            IActionRenderer<T> renderer,
            int queueSize,
            FullFallback fullFallback
        )
            : base(renderer, queueSize, fullFallback)
        {
            ActionRenderer = renderer;
        }

        /// <summary>
        /// The inner action renderer which has the <em>actual</em> implementations and receives
        /// events.
        /// </summary>
        public IActionRenderer<T> ActionRenderer { get; }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            Queue(() => ActionRenderer.RenderAction(action, context, nextStates));

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            Queue(() => ActionRenderer.UnrenderAction(action, context, nextStates));

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            Queue(() => ActionRenderer.RenderActionError(action, context, exception));

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception)"/>
        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            Queue(() => ActionRenderer.UnrenderActionError(action, context, exception));

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public void RenderBlockEnd(Block<T> oldTip, Block<T> newTip) =>
            Queue(() => ActionRenderer.RenderBlockEnd(oldTip, newTip));
    }
}
