using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// A middleware to make action render events to satisfy transactions' atomicity.
    /// <para>Decorates an <see cref="IActionRenderer"/> instance and filters out render events
    /// made by unsuccessful transactions (i.e., transactions with one or more exception-throwing
    /// actions).</para>
    /// </summary>
    /// <remarks>The wrapped <see cref="ActionRenderer"/> will not receive any
    /// <see cref="IActionRenderer.RenderActionError"/> events except for block actions,
    /// which do not belong to any transactions.
    /// </remarks>
    public sealed class AtomicActionRenderer : IActionRenderer
    {
        private readonly List<(IValue, ICommittedActionContext, HashDigest<SHA256>)> _eventBuffer;
        private TxId? _lastTxId;
        private bool _errored;

        /// <summary>
        /// Creates a new <see cref="AtomicActionRenderer"/> instance decorating the given
        /// <paramref name="actionRenderer"/>.
        /// </summary>
        /// <param name="actionRenderer">The inner action renderer which has the <em>actual</em>
        /// implementations and expects to receive no <see cref="RenderActionError"/> events.
        /// </param>
        public AtomicActionRenderer(IActionRenderer actionRenderer)
        {
            ActionRenderer = actionRenderer;
            _lastTxId = null;
            _eventBuffer = new List<(IValue, ICommittedActionContext, HashDigest<SHA256>)>();
            _errored = false;
        }

        /// <summary>
        /// The inner action renderer which has the <em>actual</em> implementations and expects to
        /// receive no <see cref="RenderActionError"/> events.
        /// </summary>
        public IActionRenderer ActionRenderer { get; }

        /// <inheritdoc cref="IRenderer.RenderBlock(Block, Block)"/>
        public void RenderBlock(Block oldTip, Block newTip)
        {
            ActionRenderer.RenderBlock(oldTip, newTip);
        }

        /// <inheritdoc cref="IActionRenderer.RenderBlockEnd(Block, Block)"/>
        public void RenderBlockEnd(Block oldTip, Block newTip)
        {
            FlushBuffer(null, ActionRenderer.RenderAction);
            ActionRenderer.RenderBlockEnd(oldTip, newTip);
        }

        /// <inheritdoc cref="IActionRenderer.RenderAction"/>
        public void RenderAction(
            IValue action,
            ICommittedActionContext context,
            HashDigest<SHA256> nextState
        )
        {
            if (!context.TxId.Equals(_lastTxId))
            {
                FlushBuffer(context.TxId, ActionRenderer.RenderAction);
            }

            if (context.TxId is null)
            {
                ActionRenderer.RenderAction(action, context, nextState);
            }
            else if (!_errored)
            {
                _eventBuffer.Add((action, context, nextState));
            }
        }

        /// <inheritdoc cref="IActionRenderer.RenderActionError"/>
        public void RenderActionError(
            IValue action,
            ICommittedActionContext context,
            Exception exception)
        {
            if (!context.TxId.Equals(_lastTxId))
            {
                FlushBuffer(context.TxId, ActionRenderer.RenderAction);
            }

            if (context.TxId is null)
            {
                ActionRenderer.RenderActionError(action, context, exception);
            }
            else
            {
                _errored = true;
            }
        }

        private void FlushBuffer(
            TxId? newTxId,
            Action<IValue, ICommittedActionContext, HashDigest<SHA256>> render
        )
        {
            if (!_errored)
            {
                foreach (var (act, ctx, delta) in _eventBuffer)
                {
                    render(act, ctx, delta);
                }
            }

            _lastTxId = newTxId;
            _errored = false;
            _eventBuffer.Clear();
        }
    }
}
