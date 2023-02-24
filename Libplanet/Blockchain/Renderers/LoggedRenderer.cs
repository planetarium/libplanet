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
    /// <remarks>Since <see cref="IActionRenderer{T}"/> is a subtype of <see cref="IRenderer{T}"/>,
    /// <see cref="LoggedRenderer{T}(IRenderer{T}, ILogger, LogEventLevel)"/> constructor can take
    /// an <see cref="IActionRenderer{T}"/> instance as well.  However, even it takes an action
    /// renderer, action-level fine-grained events will not be logged.  For action renderers,
    /// please use <see cref="LoggedActionRenderer{T}"/> instead.</remarks>
    public class LoggedRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
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
            Logger = logger
                .ForContext<LoggedRenderer<T>>()
                .ForContext("Source", nameof(LoggedRenderer<T>))
                .ForContext(renderer.GetType());
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

        /// <summary>
        /// The logger to write log messages to.  Note that all log messages this decorator writes
        /// become in the context of the <see cref="Renderer"/>'s type (with the context
        /// property <c>SourceContext</c>).
        /// </summary>
        protected ILogger Logger { get; }

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public void RenderBlock(
            Block<T> oldTip,
            Block<T> newTip
        ) =>
            LogBlockRendering(
                nameof(RenderBlock),
                oldTip,
                newTip,
                Renderer.RenderBlock
            );

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public void RenderReorg(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint
        ) =>
            LogReorgRendering(
                nameof(RenderReorg),
                oldTip,
                newTip,
                branchpoint,
                Renderer.RenderReorg
            );

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public void RenderReorgEnd(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint
        ) =>
            LogReorgRendering(
                nameof(RenderReorgEnd),
                oldTip,
                newTip,
                branchpoint,
                Renderer.RenderReorgEnd
            );

        protected void LogBlockRendering(
            string methodName,
            Block<T> oldTip,
            Block<T> newTip,
            System.Action<Block<T>, Block<T>> callback
        )
        {
            Logger.Write(
                Level,
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash})...",
                methodName,
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash
            );

            try
            {
                callback(oldTip, newTip);
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                    "(was #{OldIndex} {OldHash})";
                Logger.Error(
                    e,
                    errorMessage,
                    methodName,
                    newTip.Index,
                    newTip.Hash,
                    oldTip.Index,
                    oldTip.Hash);
                throw;
            }

            Logger.Write(
                Level,
                "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash})",
                methodName,
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash
            );
        }

        private void LogReorgRendering(
            string methodName,
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint,
            System.Action<Block<T>, Block<T>, Block<T>> callback
        )
        {
            const string startMessage =
                "Invoking {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash} " +
                "through #{BranchpointIndex} {BranchpointHash})...";
            Logger.Write(
                Level,
                startMessage,
                methodName,
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash,
                branchpoint.Index,
                branchpoint.Hash
            );

            try
            {
                callback(oldTip, newTip, branchpoint);
            }
            catch (Exception e)
            {
                const string errorMessage =
                    "An exception was thrown during {MethodName}() for #{NewIndex} {NewHash} " +
                    "(was #{OldIndex} {OldHash} through #{BranchpointIndex} {BranchpointHash})";
                Logger.Error(
                    e,
                    errorMessage,
                    methodName,
                    newTip.Index,
                    newTip.Hash,
                    oldTip.Index,
                    oldTip.Hash,
                    branchpoint.Index,
                    branchpoint.Hash);
                throw;
            }

            const string endMessage =
                "Invoked {MethodName}() for #{NewIndex} {NewHash} (was #{OldIndex} {OldHash} " +
                "through #{BranchpointIndex} {BranchpointHash})";
            Logger.Write(
                Level,
                endMessage,
                methodName,
                newTip.Index,
                newTip.Hash,
                oldTip.Index,
                oldTip.Hash,
                branchpoint.Index,
                branchpoint.Hash
            );
        }
    }
}
