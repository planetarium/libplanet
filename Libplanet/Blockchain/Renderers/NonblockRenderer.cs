using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using System.Threading.Channels;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// Decorates a <see cref="IRenderer{T}"/> instance and lets all rendering events be
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
    /// IRenderer<ExampleAction> renderer = new SomeRenderer();
    /// // Wraps the renderer with NonblockRenderer; the SomeRenderer instance becomes to receive
    /// // event messages in NonblockRenderer's backround thread:
    /// renderer = new NonblockRenderer<ExampleAction>(
    ///    renderer,
    ///    queue: 1024,
    ///    fullFallback: droppedEvent => ShowError("Too many rendering events in a short time."));
    /// /// ...
    /// // Should be disposed when no longer needed:
    /// renderer.Dispose();
    /// ]]></code>
    /// </example>
    /// <remarks>As rendering events become performed in a background thread instead of the main
    /// thread, some graphics/UI drawings might be disallowed.  In such case, communicate with the
    /// main thread through <a
    /// href="https://devblogs.microsoft.com/dotnet/an-introduction-to-system-threading-channels/"
    /// >producer/consumer channels</a>.</remarks>
    public class NonblockRenderer<T> : IRenderer<T>, IDisposable
        where T : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly Channel<System.Action> _channel;
        private readonly ChannelWriter<System.Action> _writer;
        private readonly ChannelReader<System.Action> _reader;
        private readonly FullFallback? _fullFallback;
        private readonly Thread _worker;
        private int _workerStarted = 0;
        private (string StackTrace, DateTimeOffset Time)? _disposedContext;

        /// <summary>
        /// Creates a new instance of <see cref="NonblockRenderer{T}"/> decorating the given
        /// <paramref name="renderer"/> instance.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives events in a background thread.</param>
        /// <param name="queueSize">The size of the internal event queue.</param>
        /// <param name="fullMode">Specifies the behavior when the internal event queue is full so
        /// that no more event can be added.</param>
        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "A switch expression should be multiline.")]
        public NonblockRenderer(IRenderer<T> renderer, int queueSize, FullMode fullMode)
            : this(
                renderer,
                queueSize,
                fullMode switch
                {
                    FullMode.DropOldest => BoundedChannelFullMode.DropOldest,
                    _ => BoundedChannelFullMode.DropNewest,
                }
            )
        {
        }

        /// <summary>
        /// Creates a new instance of <see cref="NonblockRenderer{T}"/> decorating the given
        /// <paramref name="renderer"/> instance.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives events in a background thread.</param>
        /// <param name="queueSize">The size of the internal event queue.</param>
        /// <param name="fullFallback">Specifies the custom behavior when the internal event
        /// queue is full so that no more event can be added.</param>
        public NonblockRenderer(IRenderer<T> renderer, int queueSize, FullFallback fullFallback)
            : this(
                renderer,
                queueSize,
                BoundedChannelFullMode.DropWrite,
                fullFallback
            )
        {
        }

        private NonblockRenderer(
            IRenderer<T> renderer,
            int queue,
            BoundedChannelFullMode boundedChannelFullMode,
            FullFallback? fullFallback = null
        )
        {
            _logger = Log.ForContext(GetType());
            Renderer = renderer;
            _channel = Channel.CreateBounded<System.Action>(new BoundedChannelOptions(queue)
            {
                AllowSynchronousContinuations = true,
                FullMode = boundedChannelFullMode,
                SingleReader = true,
                SingleWriter = true,
            });
            _writer = _channel.Writer;
            _reader = _channel.Reader;
            _fullFallback = fullFallback;
            _worker = new Thread(async () =>
            {
                ulong events = 0UL;
                while (await _reader.WaitToReadAsync())
                {
                    while (_reader.TryRead(out System.Action? action))
                    {
                        action?.Invoke();
                        events++;
                    }
                }

                const string log =
                    "Terminating the rendering thread #{WorkerThreadId} after processed " +
                    "{RenderEvents} events...";
                Log.ForContext(GetType()).Debug(log, Thread.CurrentThread.ManagedThreadId, events);
            })
            {
                IsBackground = true,
            };
            _disposedContext = null;
        }

        /// <summary>
        /// Customizes behavior when the internal event queue is full so that no more event
        /// can be added.
        /// </summary>
        /// <param name="droppedEvent">The render event failed to be queued.</param>
        public delegate void FullFallback(System.Action droppedEvent);

        /// <summary>
        /// Specifies the behavior when the internal event queue is full so that no more event
        /// can be added.
        /// </summary>
        public enum FullMode
        {
            /// <summary>
            /// Drops the oldest event when the queue is full.
            /// </summary>
            DropOldest,

            /// <summary>
            /// Drops the newest event when the queue is full.
            /// </summary>
            DropNewest,
        }

        /// <summary>
        /// The inner renderer which has the <em>actual</em> implementations and receives events.
        /// </summary>
        public IRenderer<T> Renderer { get; }

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            if (_disposedContext is { } ctx)
            {
                _logger.Error(
                    "Disposing more than once is disallowed.  It was already disposed at " +
                    "{DisposedTime}.  See also the previously disposed stack trace:\n\n" +
                    "{DisposedStackTrace}",
                    ctx.Time,
                    ctx.StackTrace
                );
                return;
            }

            _disposedContext = (Environment.StackTrace, DateTimeOffset.Now);

            _channel.Writer.Complete();
            if (_worker.IsAlive)
            {
                _worker.Join();
            }
        }

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public void RenderBlock(Block<T> oldTip, Block<T> newTip) =>
            Queue(() => Renderer.RenderBlock(oldTip, newTip));

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint) =>
            Queue(() => Renderer.RenderReorg(oldTip, newTip, branchpoint));

        /// <inheritdoc cref="IRenderer{T}.RenderReorgEnd(Block{T}, Block{T}, Block{T})"/>
        public void RenderReorgEnd(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint) =>
            Queue(() => Renderer.RenderReorgEnd(oldTip, newTip, branchpoint));

        /// <summary>
        /// Queues the callback to be executed in the worker thread.
        /// </summary>
        /// <param name="action">The callback to be executed in the worker thread.</param>
        protected void Queue(System.Action action)
        {
            if (!_writer.TryWrite(action))
            {
                _fullFallback?.Invoke(action);
            }

            if (_disposedContext is { } ctx)
            {
                _logger.Error(
                    "Render events are dropped as this renderer is already disposed at " +
                    "{DisposedTime}.  See also the previously disposed stack trace:\n\n" +
                    "{DisposedStackTrace}",
                    ctx.Time,
                    ctx.StackTrace
                );
                return;
            }

            if (!_worker.IsAlive && Interlocked.Increment(ref _workerStarted) == 1)
            {
                const string logMsg =
                    "Starting the rendering thread #{WorkerThreadId} (spawned from thread " +
                    "#{CurrentThreadId})\n{StackTrace}";
                _logger.Debug(
                    logMsg,
                    _worker.ManagedThreadId,
                    Thread.CurrentThread.ManagedThreadId,
                    Environment.StackTrace
                );
                try
                {
                    _worker.Start();
                }
                catch (ThreadStateException e)
                {
                    _logger.Error(
                        e,
                        "The rendering thread #{WorkerThreadId} failed to start",
                        _worker.ManagedThreadId
                    );
                }
            }
        }
    }
}
