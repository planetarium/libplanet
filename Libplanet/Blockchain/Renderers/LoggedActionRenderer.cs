using System;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;
using Serilog.Events;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates an <see cref="IActionRenderer{T}"/> so that all event messages are logged.
    /// In other words, this is an <see cref="IActionRenderer{T}"/> version of
    /// <see cref="LoggedRenderer{T}"/>.
    /// <para>Every single event message causes two log messages: one is logged <em>before</em>
    /// rendering, and other one is logged <em>after</em> rendering.  If any exception is thrown
    /// it is also logged with the log level <see cref="LogEventLevel.Error"/> (regardless of
    /// <see cref="LoggedRenderer{T}.Level"/> configuration).</para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <example>
    /// <code><![CDATA[
    /// IActionRenderer<ExampleAction> actionRenderer = new SomeActionRenderer();
    /// // Wraps the action renderer with LoggedActionRenderer:
    /// actionRenderer = new LoggedActionRenderer<ExampleAction>(
    ///     actionRenderer,
    ///     Log.Logger,
    ///     LogEventLevel.Information,
    /// );
    /// ]]></code>
    /// </example>
    public class LoggedActionRenderer<T> : LoggedRenderer<T>, IActionRenderer<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a new <see cref="LoggedActionRenderer{T}"/> instance which decorates the given
        /// action <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The actual action renderer to forward all event messages to and
        /// actually render things.</param>
        /// <param name="logger">The logger to write log messages to.  Note that all log messages
        /// this decorator writes become in the context of the <paramref name="renderer"/>'s
        /// type (with the context property <c>SourceContext</c>).</param>
        /// <param name="level">The log event level.  All log messages become this level.</param>
        public LoggedActionRenderer(
            IActionRenderer<T> renderer,
            ILogger logger,
            LogEventLevel level = LogEventLevel.Debug
        )
            : base(renderer, logger, level)
        {
            ActionRenderer = renderer;
        }

        /// <summary>
        /// The inner action renderer to forward all event messages to and actually render things.
        /// </summary>
        public IActionRenderer<T> ActionRenderer { get; }

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public void RenderBlockEnd(
            Block<T> oldTip,
            Block<T> newTip
        ) =>
            LogBlockRendering(
                nameof(RenderBlockEnd),
                oldTip,
                newTip,
                ActionRenderer.RenderBlockEnd
            );

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            LogActionRendering(
                nameof(RenderAction),
                action,
                context,
                () => ActionRenderer.RenderAction(action, context, nextStates)
            );

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            LogActionRendering(
                nameof(UnrenderAction),
                action,
                context,
                () => ActionRenderer.UnrenderAction(action, context, nextStates)
            );

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            LogActionRendering(
                nameof(RenderActionError),
                action,
                context,
                () => ActionRenderer.RenderActionError(action, context, exception)
            );

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception)"/>
        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            LogActionRendering(
                nameof(UnrenderActionError),
                action,
                context,
                () => ActionRenderer.UnrenderActionError(action, context, exception)
            );

        private void LogActionRendering(
            string methodName,
            IAction action,
            IActionContext context,
            System.Action callback
        )
        {
            Type actionType = action.GetType();
            const string startMessage =
                "Invoking {MethodName}() for an action {ActionType} at block #{BlockIndex}...";
            if (context.Rehearsal)
            {
                Logger.Write(
                    Level,
                    startMessage + " (rehearsal: {Rehearsal})",
                    methodName,
                    actionType,
                    context.BlockIndex,
                    context.Rehearsal
                );
            }
            else
            {
                Logger.Write(
                    Level,
                    startMessage,
                    methodName,
                    actionType,
                    context.BlockIndex
                );
            }

            try
            {
                callback();
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "An exception was thrown during {MethodName}() for an action {ActionType} at " +
                    "block #{BlockIndex}";
                if (context.Rehearsal)
                {
                    Logger.Error(
                        e,
                        errorMessage + " (rehearsal: {Rehearsal})",
                        methodName,
                        actionType,
                        context.BlockIndex,
                        context.Rehearsal);
                }
                else
                {
                    Logger.Error(
                        e,
                        errorMessage,
                        methodName,
                        actionType,
                        context.BlockIndex);
                }

                throw;
            }

            const string endMessage =
                "Invoked {MethodName}() for an action {ActionType} at block #{BlockIndex}";

            if (context.Rehearsal)
            {
                Logger.Write(
                    Level,
                    endMessage + " (rehearsal: {Rehearsal})",
                    methodName,
                    actionType,
                    context.BlockIndex,
                    context.Rehearsal
                );
            }
            else
            {
                Logger.Write(
                    Level,
                    endMessage,
                    methodName,
                    actionType,
                    context.BlockIndex
                );
            }
        }
    }
}
