using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Types.Blocks;
using Serilog;
using Serilog.Events;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates an <see cref="IActionRenderer"/> so that all event messages are logged.
    /// In other words, this is an <see cref="IActionRenderer"/> version of
    /// <see cref="LoggedRenderer"/>.
    /// <para>Every single event message causes two log messages: one is logged <em>before</em>
    /// rendering, and other one is logged <em>after</em> rendering.  If any exception is thrown
    /// it is also logged with the log level <see cref="LogEventLevel.Error"/> (regardless of
    /// <see cref="LoggedRenderer.Level"/> configuration).</para>
    /// </summary>
    /// <example>
    /// <code><![CDATA[
    /// IActionRenderer actionRenderer = new SomeActionRenderer();
    /// // Wraps the action renderer with LoggedActionRenderer:
    /// actionRenderer = new LoggedActionRenderer(
    ///     actionRenderer,
    ///     Log.Logger,
    ///     LogEventLevel.Information,
    /// );
    /// ]]></code>
    /// </example>
    public class LoggedActionRenderer : LoggedRenderer, IActionRenderer
    {
        /// <summary>
        /// Creates a new <see cref="LoggedActionRenderer"/> instance which decorates the given
        /// action <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The actual action renderer to forward all event messages to and
        /// actually render things.</param>
        /// <param name="logger">The logger to write log messages to.  Note that all log messages
        /// this decorator writes become in the context of the <paramref name="renderer"/>'s
        /// type (with the context property <c>SourceContext</c>).</param>
        /// <param name="level">The log event level.  All log messages become this level.</param>
        public LoggedActionRenderer(
            IActionRenderer renderer,
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
        public IActionRenderer ActionRenderer { get; }

        /// <inheritdoc cref="IActionRenderer.RenderBlockEnd(Block, Block)"/>
        public void RenderBlockEnd(
            Block oldTip,
            Block newTip
        ) =>
            LogBlockRendering(
                nameof(RenderBlockEnd),
                oldTip,
                newTip,
                ActionRenderer.RenderBlockEnd
            );

        /// <inheritdoc
        /// cref="IActionRenderer.RenderAction(IValue, IActionContext, IWorld)"/>
        public void RenderAction(
            IValue action,
            IActionContext context,
            IWorld nextStates
        ) =>
            LogActionRendering(
                nameof(RenderAction),
                action,
                context,
                () => ActionRenderer.RenderAction(action, context, nextStates)
            );

        /// <inheritdoc
        /// cref="IActionRenderer.RenderActionError(IValue, IActionContext, Exception)"/>
        public void RenderActionError(
            IValue action,
            IActionContext context,
            Exception exception
        ) =>
            LogActionRendering(
                nameof(RenderActionError),
                action,
                context,
                () => ActionRenderer.RenderActionError(action, context, exception)
            );

        private void LogActionRendering(
            string methodName,
            IValue action,
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
