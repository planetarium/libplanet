using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Blockchain.Renderers.Debug
{
    /// <summary>
    /// Records every render events.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="Libplanet.Blockchain.BlockChain{T}"/>'s type parameter.</typeparam>
    public class RecordingActionRenderer<T> : IActionRenderer<T>
        where T : IAction, new()
    {
        private readonly List<RenderRecord<T>> _records;
        private long _nextIndex;

        /// <summary>
        /// Creates a new <see cref="RecordingActionRenderer{T}"/> instance.
        /// </summary>
        public RecordingActionRenderer()
        {
            _nextIndex = 0;
            _records = new List<RenderRecord<T>>();
        }

        /// <summary>
        /// The list of recorded render events.
        /// </summary>
        public IReadOnlyList<RenderRecord<T>> Records => _records;

        internal IReadOnlyList<RenderRecord<T>.ActionBase> ActionRecords =>
            Records.OfType<RenderRecord<T>.ActionBase>().ToImmutableArray();

        internal IReadOnlyList<RenderRecord<T>.ActionSuccess> ActionSuccessRecords =>
            Records.OfType<RenderRecord<T>.ActionSuccess>().ToImmutableArray();

        internal IReadOnlyList<RenderRecord<T>.ActionError> ActionErrorRecords =>
            Records.OfType<RenderRecord<T>.ActionError>().ToImmutableArray();

        internal IReadOnlyList<RenderRecord<T>.BlockEvent> BlockRecords =>
            Records.OfType<RenderRecord<T>.BlockEvent>().ToImmutableArray();

        internal EventHandler<IAction>? RenderEventHandler { get; set; }

        /// <summary>
        /// Empties the render event <see cref="Records"/>.
        /// </summary>
        public void ResetRecords()
        {
            _nextIndex = 0;
            _records.Clear();
            Log.Logger.ForContext<RecordingActionRenderer<T>>().Debug("Reset records");
        }

        /// <inheritdoc cref="IActionRenderer{T}.RenderAction"/>
        public virtual void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            _records.Add(
                new RenderRecord<T>.ActionSuccess(
                    index: _nextIndex++,
                    stackTrace: RemoveFirstLine(Environment.StackTrace).TrimEnd(),
                    action: action,
                    context: context,
                    nextStates: nextStates
                )
            );

            RenderEventHandler?.Invoke(action, action);
        }

        /// <inheritdoc cref="IActionRenderer{T}.RenderActionError"/>
        public virtual void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        ) =>
            _records.Add(
                new RenderRecord<T>.ActionError(
                    index: _nextIndex++,
                    stackTrace: RemoveFirstLine(Environment.StackTrace).TrimEnd(),
                    action: action,
                    context: context,
                    exception: exception
                )
            );

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block, Block)"/>
        public virtual void RenderBlock(Block oldTip, Block newTip) =>
            _records.Add(
                new RenderRecord<T>.BlockEvent(
                    index: _nextIndex++,
                    stackTrace: RemoveFirstLine(Environment.StackTrace).TrimEnd(),
                    oldTip: oldTip,
                    newTip: newTip
                )
            );

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block, Block)"/>
        public virtual void RenderBlockEnd(Block oldTip, Block newTip) =>
            _records.Add(
                new RenderRecord<T>.BlockEvent(
                    index: _nextIndex++,
                    stackTrace: RemoveFirstLine(Environment.StackTrace).TrimEnd(),
                    end: true,
                    oldTip: oldTip,
                    newTip: newTip
                )
            );

        private static string RemoveFirstLine(string stackTrace)
        {
            int pos = stackTrace.IndexOf('\n');
            return pos < 0 ? stackTrace : stackTrace.Substring(pos + 1);
        }
    }
}
