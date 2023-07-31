using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain.Renderers.Debug
{
    /// <summary>
    /// A render event represented by <see cref="RecordingActionRenderer"/>.
    /// </summary>
    public abstract class RenderRecord
    {
        protected RenderRecord(long index, string stackTrace)
        {
            Index = index;
            StackTrace = stackTrace;
        }

        /// <summary>
        /// The ordinal number of the render event.
        /// </summary>
        public long Index { get; }

        /// <summary>
        /// The stack trace of the render event.
        /// </summary>
        public string StackTrace { get; }

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString() => $"{Index}.";

        /// <summary>
        /// Represents an action render/unrender event.
        /// </summary>
        public abstract class ActionBase : RenderRecord
        {
            protected ActionBase(
                long index,
                string stackTrace,
                IValue action,
                IActionContext context,
                bool unrender = false
            )
                : base(index, stackTrace)
            {
                Action = action;
                Context = context;
                Render = !unrender;
            }

            /// <summary>
            /// The rendered action.
            /// </summary>
            public IValue Action { get; }

            /// <summary>
            /// The action evaluation context.
            /// </summary>
            public IActionContext Context { get; }

            /// <summary>
            /// Whether it is not an unrender event, but a render event.
            /// </summary>
            public bool Render { get; }

            /// <summary>
            /// Whether it is a render event, but an unrender event.
            /// </summary>
            public bool Unrender => !Render;

            /// <inheritdoc cref="RenderRecord.ToString()"/>
            public override string ToString() =>
                $"{base.ToString()} #{Context.BlockIndex} " +
                (Render ? "Render" : "Unrender") + "Action";
        }

        /// <summary>
        /// Represents a succeeded action render/unrender event.
        /// </summary>
        public class ActionSuccess : ActionBase
        {
            /// <summary>
            /// Creates a succeeded action render/unrender event record.
            /// </summary>
            /// <param name="index">The ordinal number of the render event.</param>
            /// <param name="stackTrace">The stack trace of the render event.</param>
            /// <param name="action">The rendered action.</param>
            /// <param name="context">The action evaluation context.</param>
            /// <param name="nextStates">The resulting states after the action is evaluated.</param>
            /// <param name="unrender">Whether it is an unrender event.</param>
            public ActionSuccess(
                long index,
                string stackTrace,
                IValue action,
                IActionContext context,
                IAccount nextStates,
                bool unrender = false
            )
                : base(index, stackTrace, action, context, unrender: unrender)
            {
                NextStates = nextStates;
            }

            /// <summary>
            /// The resulting states after the action is evaluated.
            /// </summary>
            public IAccount NextStates { get; }

            /// <inheritdoc cref="RenderRecord.ToString()"/>
            public override string ToString() => $"{base.ToString()} [success]";
        }

        /// <summary>
        /// Represents a failed action render/unrender event.
        /// </summary>
        public class ActionError : ActionBase
        {
            /// <summary>
            /// Creates a failed action render/unrender event record.
            /// </summary>
            /// <param name="index">The ordinal number of the render event.</param>
            /// <param name="stackTrace">The stack trace of the render event.</param>
            /// <param name="action">The rendered action.</param>
            /// <param name="context">The action evaluation context.</param>
            /// <param name="exception">The exception thrown by the action.</param>
            /// <param name="unrender">Whether it is an unrender event.</param>
            public ActionError(
                long index,
                string stackTrace,
                IValue action,
                IActionContext context,
                Exception exception,
                bool unrender = false
            )
                : base(index, stackTrace, action, context, unrender: unrender)
            {
                Exception = exception;
            }

            /// <summary>
            /// The exception thrown by the action.
            /// </summary>
            public Exception Exception { get; }

            /// <inheritdoc cref="RenderRecord.ToString()"/>
            public override string ToString() => $"{base.ToString()} [error]";
        }

        /// <summary>
        /// Represents a block event.
        /// </summary>
        public abstract class BlockBase : RenderRecord
        {
            protected BlockBase(
                long index,
                string stackTrace,
                Block oldTip,
                Block newTip,
                bool end = false
            )
                : base(index, stackTrace)
            {
                OldTip = oldTip;
                NewTip = newTip;
                Begin = !end;
            }

            /// <summary>
            /// The tip before update.
            /// </summary>
            public Block OldTip { get; }

            /// <summary>
            /// The tip after update.
            /// </summary>
            public Block NewTip { get; }

            /// <summary>
            /// Whether it is not an <c>End</c> event.
            /// </summary>
            public bool Begin { get; }

            /// <summary>
            /// Whether it is an <c>End</c> event.
            /// </summary>
            public bool End => !Begin;

            /// <inheritdoc cref="RenderRecord.ToString()"/>
            public override string ToString() =>
                $"{base.ToString()} " +
                $"#{OldTip.Index} {OldTip.Hash} -> #{NewTip.Index} {NewTip.Hash} Render..." +
                (End ? "End" : string.Empty);
        }

        /// <summary>
        /// Represents a block event.
        /// </summary>
        public class BlockEvent : BlockBase
        {
            /// <summary>
            /// Creates a block event record.
            /// </summary>
            /// <param name="index">The ordinal number of the render event.</param>
            /// <param name="stackTrace">The stack trace of the render event.</param>
            /// <param name="oldTip">The tip before update.</param>
            /// <param name="newTip">The tip after update.</param>
            /// <param name="end">Whether it is an <c>End</c> event.</param>
            public BlockEvent(
                long index,
                string stackTrace,
                Block oldTip,
                Block newTip,
                bool end = false
            )
                : base(index, stackTrace, oldTip, newTip, end)
            {
            }

            /// <inheritdoc cref="RenderRecord.ToString()"/>
            public override string ToString() =>
                base.ToString().Replace("Render...", "RenderBlock");
        }
    }
}
