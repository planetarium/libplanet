#nullable enable
using System;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;
using Serilog.Events;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates an <see cref="IRenderer{T}"/> so that all event messages are logged.
    /// <para>Every single event message causes two log messages: one is logged <em>before</em>
    /// rendering, and other one is logged <em>after</em> rendering.  If any exception is thrown
    /// it is also logged with the log level <see cref="LogEventLevel.Error"/> (regardless of
    /// <see cref="Level"/> configuration).</para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <example>
    /// <code>
    /// IRenderer&lt;ExampleAction&gt; renderer = new SomeRenderer();
    /// // Wraps the renderer with LoggedRenderer:
    /// renderer = new LoggedRenderer&lt;ExampleAction&gt;(
    ///     renderer,
    ///     Log.Logger,
    ///     LogEventLevel.Information,
    /// );
    /// </code>
    /// </example>
    public class LoggedRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
        private ILogger _logger;

        /// <summary>
        /// Creates a new <see cref="LoggedRenderer{T}"/> instance which decorates the given
        /// <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The actual renderer to forward all event messages to and actually
        /// render things.</param>
        /// <param name="logger">The logger to write log messages to.  Note that all log messages
        /// this decorator writes become in the context of the <paramref name="renderer"/>'s
        /// type (with the context property <c>SourceContext</c>).</param>
        /// <param name="level">The log event level.  All log messages become this level.</param>
        public LoggedRenderer(
            IRenderer<T> renderer,
            ILogger logger,
            LogEventLevel level = LogEventLevel.Debug
        )
        {
            Renderer = renderer;
            _logger = logger.ForContext(renderer.GetType());
            Level = level;
        }

        /// <summary>
        /// The inner renderer to forward all event messages to and actually render things.
        /// </summary>
        public IRenderer<T> Renderer { get; }

        /// <summary>
        /// The log event level.  All log messages become this level.
        /// </summary>
        public LogEventLevel Level { get; }

        /// <inheritdoc
        /// cref="IRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            LogActionRendering(
                nameof(RenderAction),
                action,
                context,
                () => Renderer.RenderAction(action, context, nextStates)
            );

        /// <inheritdoc
        /// cref="IRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            LogActionRendering(
                nameof(UnrenderAction),
                action,
                context,
                () => Renderer.UnrenderAction(action, context, nextStates)
            );

        /// <inheritdoc cref="IRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            LogActionRendering(
                nameof(RenderActionError),
                action,
                context,
                () => Renderer.RenderActionError(action, context, exception)
            );

        /// <inheritdoc
        /// cref="IRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception)"/>
        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            LogActionRendering(
                nameof(UnrenderActionError),
                action,
                context,
                () => Renderer.UnrenderActionError(action, context, exception)
            );

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public void RenderBlock(
            Block<T> oldTip,
            Block<T> newTip
        )
        {
            _logger.Write(
                Level,
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash})...",
                nameof(RenderBlock),
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash
            );

            try
            {
                Renderer.RenderBlock(oldTip, newTip);
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                    "(was #{OldIndex} {OldHash}): {Exception}";
                _logger.Error(
                    e,
                    errorMessage,
                    nameof(RenderBlock),
                    newTip.Index,
                    newTip.Hash,
                    oldTip.Index,
                    oldTip.Hash,
                    e
                );
                throw;
            }

            _logger.Write(
                Level,
                "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash}).",
                nameof(RenderBlock),
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash
            );
        }

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public void RenderReorg(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint
        )
        {
            const string startMessage =
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash} " +
                "through #{BranchpointIndex} {BranchpointHash})...";
            _logger.Write(
                Level,
                startMessage,
                nameof(RenderReorg),
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash,
                branchpoint.Index,
                branchpoint.Hash
            );

            try
            {
                Renderer.RenderReorg(oldTip, newTip, branchpoint);
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                    "(was #{OldIndex} {OldHash} through #{BranchpointIndex} {BranchpointHash}): " +
                    "{Exception}";
                _logger.Error(
                    e,
                    errorMessage,
                    nameof(RenderReorg),
                    newTip.Index,
                    newTip.Hash,
                    oldTip.Index,
                    oldTip.Hash,
                    branchpoint.Index,
                    branchpoint.Hash,
                    e
                );
                throw;
            }

            const string endMessage =
                "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash} " +
                "through #{BranchpointIndex} {BranchpointHash}).";
            _logger.Write(
                Level,
                endMessage,
                nameof(RenderReorg),
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash,
                branchpoint.Index,
                branchpoint.Hash
            );
        }

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
                _logger.Write(
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
                _logger.Write(
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
                    _logger.Error(
                        e,
                        errorMessage + " (rehearsal: {Rehearsal}): {Exception}",
                        methodName,
                        actionType,
                        context.BlockIndex,
                        context.Rehearsal,
                        e
                    );
                }
                else
                {
                    _logger.Error(
                        e,
                        errorMessage + ": {Exception}",
                        methodName,
                        actionType,
                        context.BlockIndex,
                        e
                    );
                }

                throw;
            }

            const string endMessage =
                "Invoked {MethodName}() for an action {ActionType} at block #{BlockIndex}";

            if (context.Rehearsal)
            {
                _logger.Write(
                    Level,
                    endMessage + " (rehearsal: {Rehearsal}).",
                    methodName,
                    actionType,
                    context.BlockIndex,
                    context.Rehearsal
                );
            }
            else
            {
                _logger.Write(
                    Level,
                    endMessage + ".",
                    methodName,
                    actionType,
                    context.BlockIndex
                );
            }
        }
    }
}
