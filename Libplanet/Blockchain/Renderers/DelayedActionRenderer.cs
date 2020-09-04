#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;

namespace Libplanet.Blockchain.Renderers
{
    /// <summary>
    /// An <see cref="IActionRenderer{T}"/> version of <see cref="DelayedRenderer{T}"/>.
    /// <para>Decorates an <see cref="IActionRenderer{T}"/> instance and delays the events until
    /// blocks are <em>confirmed</em> the certain number of blocks.  When blocks are recognized
    /// the delayed events relevant to these blocks are relayed to the decorated
    /// <see cref="IActionRenderer{T}"/>.</para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <example>
    /// <code><![CDATA[
    /// IStore store = GetStore();
    /// IActionRenderer<ExampleAction> actionRenderer = new SomeActionRenderer();
    /// // Wraps the actionRenderer with DelayedActionRenderer; the SomeActionRenderer instance
    /// // becomes to receive event messages only after the relevent blocks are confirmed
    /// // by 3+ blocks.
    /// actionRenderer = new DelayedActionRenderer<ExampleAction>(
    ///    actionRenderer,
    ///    store,
    ///    confirmations: 3);
    /// // You must pass the same store to the BlockChain<T>() constructor:
    /// var chain = new BlockChain<ExampleAction>(
    ///    ...,
    ///    store: store,
    ///    renderers: new[] { actionRenderer });
    /// ]]></code>
    /// </example>
    public class DelayedActionRenderer<T> : DelayedRenderer<T>, IActionRenderer<T>
        where T : IAction, new()
    {
        private readonly Dictionary<HashDigest<SHA256>, List<ActionEvaluation>>
            _bufferedActionRenders;

        private readonly Dictionary<HashDigest<SHA256>, List<ActionEvaluation>>
            _bufferedActionUnrenders;

        private HashDigest<SHA256>? _eventReceivingBlock;
        private Reorg? _eventReceivingReorg;

        /// <summary>
        /// Creates a new <see cref="DelayedRenderer{T}"/> instance decorating the given
        /// <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives delayed events.</param>
        /// <param name="store">The same store to what <see cref="BlockChain{T}"/> uses.</param>
        /// <param name="confirmations">The required number of confirmations to recognize a block.
        /// See also the <see cref="DelayedRenderer{T}.Confirmations"/> property.</param>
        public DelayedActionRenderer(IActionRenderer<T> renderer, IStore store, int confirmations)
            : base(renderer, store, confirmations)
        {
            ActionRenderer = renderer;
            _bufferedActionRenders =
                new Dictionary<HashDigest<SHA256>, List<ActionEvaluation>>();
            _bufferedActionUnrenders =
                new Dictionary<HashDigest<SHA256>, List<ActionEvaluation>>();
        }

        /// <summary>
        /// The inner action renderer which has the <em>actual</em> implementations and receives
        /// delayed events.
        /// </summary>
        public IActionRenderer<T> ActionRenderer { get; }

        /// <inheritdoc cref="DelayedRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public override void RenderBlock(Block<T> oldTip, Block<T> newTip)
        {
            base.RenderBlock(oldTip, newTip);
            if (_eventReceivingReorg is Reorg reorg)
            {
                foreach (HashDigest<SHA256> block in reorg.Unrendered)
                {
                    if (_bufferedActionUnrenders.TryGetValue(block, out List<ActionEvaluation>? b))
                    {
                        b?.Clear();
                    }
                }

                foreach (HashDigest<SHA256> block in reorg.Rendered)
                {
                    if (_bufferedActionRenders.TryGetValue(block, out List<ActionEvaluation>? buf))
                    {
                        buf?.Clear();
                    }
                }

                if (!(reorg.OldTip.Equals(oldTip) && reorg.NewTip.Equals(newTip)))
                {
                    _eventReceivingReorg = null;
                }
            }

            _eventReceivingBlock = newTip.Hash;
            _bufferedActionRenders[newTip.Hash] = new List<ActionEvaluation>();
        }

        /// <inheritdoc cref="IRenderer{T}.RenderReorg(Block{T}, Block{T}, Block{T})"/>
        public override void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint)
        {
            base.RenderReorg(oldTip, newTip, branchpoint);
            _eventReceivingBlock = null;
            _eventReceivingReorg = new Reorg(
                LocateBlockPath(branchpoint, oldTip),
                LocateBlockPath(branchpoint, newTip),
                oldTip,
                newTip,
                branchpoint
            );
        }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            DelayRenderingAction(new ActionEvaluation(action, context, nextStates));

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public void RenderActionError(IAction action, IActionContext context, Exception exception)
        {
            var eval = new ActionEvaluation(action, context, context.PreviousStates, exception);
            DelayRenderingAction(eval);
        }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        ) =>
            DelayUnrenderingAction(new ActionEvaluation(action, context, nextStates));

        /// <inheritdoc
        /// cref="IActionRenderer{T}.UnrenderActionError(IAction, IActionContext, Exception)"/>
        public void UnrenderActionError(IAction action, IActionContext context, Exception exception)
        {
            var eval = new ActionEvaluation(action, context, context.PreviousStates, exception);
            DelayUnrenderingAction(eval);
        }

        /// <summary>
        /// Lists all descendants from <paramref name="lower"/> (exclusive) to
        /// <paramref name="upper"/> (inclusive).
        /// </summary>
        /// <param name="lower">The block to get its descendants (excluding it).</param>
        /// <param name="upper">The block to get its ancestors (including it).</param>
        /// <returns>Block hashes from <paramref name="lower"/> to <paramref name="upper"/>.
        /// Lower block hashes go first, and upper block hashes go last.
        /// Does not contain <paramref name="lower"/>'s hash but <paramref name="upper"/>'s one.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="upper"/> block's index
        /// is not greater than <paramref name="lower"/> block's index.</exception>
        internal ImmutableArray<HashDigest<SHA256>> LocateBlockPath(Block<T> lower, Block<T> upper)
        {
            if (lower.Index >= upper.Index)
            {
                throw new ArgumentException(
                    $"The {nameof(upper)} block must has the greater index than " +
                    $"the {nameof(lower)} block.",
                    nameof(upper)
                );
            }

            IEnumerable<HashDigest<SHA256>> Iterate()
            {
                for (
                    Block<T>? b = upper;
                    b is Block<T> && b.Index > lower.Index;
                    b = b.PreviousHash is HashDigest<SHA256> prev ? Store.GetBlock<T>(prev) : null
                )
                {
                    yield return b.Hash;
                }
            }

            return Iterate().Reverse().ToImmutableArray();
        }

        /// <inheritdoc cref="DelayedRenderer{T}.OnTipChanged(Block{T}?, Block{T})"/>
        protected override Block<T>? OnTipChanged(Block<T>? oldTip, Block<T> newTip)
        {
            if (oldTip is null)
            {
                return null;
            }

            Block<T>? branchpoint = base.OnTipChanged(oldTip, newTip);
            if (branchpoint is null)
            {
                RenderBufferedActionEvaluations(newTip.Hash, unrender: false);
            }
            else
            {
                var blocksToUnrender = LocateBlockPath(branchpoint, oldTip).Reverse();
                foreach (HashDigest<SHA256> hash in blocksToUnrender)
                {
                    RenderBufferedActionEvaluations(hash, unrender: true);
                }

                var blocksToRender = LocateBlockPath(branchpoint, newTip);
                foreach (HashDigest<SHA256> hash in blocksToRender)
                {
                    RenderBufferedActionEvaluations(hash, unrender: false);
                }
            }

            return branchpoint;
        }

        private void DelayRenderingAction(ActionEvaluation eval)
        {
            if (_eventReceivingReorg is Reorg reorg)
            {
                long blockIndex = eval.InputContext.BlockIndex;
                HashDigest<SHA256> blockHash = reorg.IndexHash(blockIndex, unrender: false);
                if (!_bufferedActionRenders.TryGetValue(blockHash, out List<ActionEvaluation>? buf))
                {
                    _bufferedActionRenders[blockHash] = buf = new List<ActionEvaluation>();
                }

                buf.Add(eval);
                Logger.Verbose(
                    "Delayed an action render from #{BlockIndex} {BlockHash} (buffer: {Buffer}).",
                    blockIndex,
                    blockHash,
                    buf.Count
                );
            }
            else if (_eventReceivingBlock is HashDigest<SHA256> h &&
                _bufferedActionRenders.TryGetValue(h, out List<ActionEvaluation>? b) &&
                b is List<ActionEvaluation> buffer)
            {
                buffer.Add(eval);
                Logger.Verbose(
                    "Delayed an action render from #{BlockIndex} {BlockHash} (buffer: {Buffer}).",
                    eval.InputContext.BlockIndex,
                    h,
                    buffer.Count
                );
            }
            else
            {
                const string msg =
                    "An action render {@Action} from the block #{BlockIndex} was ignored due " +
                    "unexpected internal state.";
                Logger.Warning(msg, eval.Action, eval.InputContext.BlockIndex);
            }
        }

        private void DelayUnrenderingAction(ActionEvaluation eval)
        {
            if (_eventReceivingReorg is Reorg reorg)
            {
                long blockIndex = eval.InputContext.BlockIndex;
                HashDigest<SHA256> blockHash = reorg.IndexHash(blockIndex, unrender: true);
                if (!_bufferedActionUnrenders.TryGetValue(blockHash, out List<ActionEvaluation>? b))
                {
                    _bufferedActionUnrenders[blockHash] = b = new List<ActionEvaluation>();
                }

                b.Add(eval);
                Logger.Verbose(
                    "Delayed an action unrender from #{BlockIndex} {BlockHash} (buffer: {Buffer}).",
                    blockIndex,
                    blockHash,
                    b.Count
                );
            }
            else
            {
                const string msg =
                    "An action unrender {@Action} from the block #{BlockIndex} was ignored due " +
                    "unexpected internal state.";
                Logger.Warning(msg, eval.Action, eval.InputContext.BlockIndex);
            }
        }

        private void RenderBufferedActionEvaluations(HashDigest<SHA256> blockHash, bool unrender)
        {
            Dictionary<HashDigest<SHA256>, List<ActionEvaluation>> bufferMap
                = unrender
                ? _bufferedActionUnrenders
                : _bufferedActionRenders;
            string verb = unrender ? "unrender" : "render";
            if (bufferMap.TryGetValue(blockHash, out List<ActionEvaluation>? b) &&
                b is List<ActionEvaluation> buffer)
            {
                Logger.Debug(
                    $"Starts to {verb} {{BufferCount}} buffered actions from the block " +
                    "{BlockHash}...",
                    buffer.Count,
                    blockHash
                );
                RenderActionEvaluations(buffer, unrender);
                bufferMap.Remove(blockHash);
            }
            else
            {
                Logger.Debug(
                    $"There are no buffered actions to {verb} for the block {{BlockHash}}.",
                    blockHash
                );
            }
        }

        private void RenderActionEvaluations(
            IEnumerable<ActionEvaluation> evaluations,
            bool unrender
        )
        {
            foreach (ActionEvaluation eval in evaluations)
            {
                if (eval.Exception is Exception e)
                {
                    if (unrender)
                    {
                        ActionRenderer.UnrenderActionError(eval.Action, eval.InputContext, e);
                    }
                    else
                    {
                        ActionRenderer.RenderActionError(eval.Action, eval.InputContext, e);
                    }
                }
                else
                {
                    if (unrender)
                    {
                        ActionRenderer.UnrenderAction(
                            eval.Action,
                            eval.InputContext,
                            eval.OutputStates
                        );
                    }
                    else
                    {
                        ActionRenderer.RenderAction(
                            eval.Action,
                            eval.InputContext,
                            eval.OutputStates
                        );
                    }
                }
            }
        }

        private readonly struct Reorg
        {
            public readonly ImmutableArray<HashDigest<SHA256>> Unrendered;
            public readonly ImmutableArray<HashDigest<SHA256>> Rendered;
            public readonly Block<T> OldTip;
            public readonly Block<T> NewTip;
            public readonly Block<T> Branchpoint;

            public Reorg(
                ImmutableArray<HashDigest<SHA256>> unrendered,
                ImmutableArray<HashDigest<SHA256>> rendered,
                Block<T> oldTip,
                Block<T> newTip,
                Block<T> branchpoint
            )
            {
                Unrendered = unrendered;
                Rendered = rendered;
                OldTip = oldTip;
                NewTip = newTip;
                Branchpoint = branchpoint;
            }

            public HashDigest<SHA256> IndexHash(long index, bool unrender)
            {
                int offset = (int)(index - Branchpoint.Index);
                return (unrender ? Unrendered : Rendered)[offset - 1];
            }
        }
    }
}
