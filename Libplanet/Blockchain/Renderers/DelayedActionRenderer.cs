using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
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
    /// IBlockPolicy<ExampleAction> policy = GetPolicy();
    /// IActionRenderer<ExampleAction> actionRenderer = new SomeActionRenderer();
    /// // Wraps the actionRenderer with DelayedActionRenderer; the SomeActionRenderer instance
    /// // becomes to receive event messages only after the relevent blocks are confirmed
    /// // by 3+ blocks.
    /// actionRenderer = new DelayedActionRenderer<ExampleAction>(
    ///    actionRenderer,
    ///    policy,
    ///    store,
    ///    confirmations: 3);
    /// // You must pass the same policy & store to the BlockChain<T>() constructor:
    /// var chain = new BlockChain<ExampleAction>(
    ///    ...,
    ///    policy: policy,
    ///    store: store,
    ///    renderers: new[] { actionRenderer });
    /// ]]></code>
    /// </example>
    public class DelayedActionRenderer<T> : DelayedRenderer<T>, IActionRenderer<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<BlockHash, List<ActionEvaluation>>
            _bufferedActionRenders;

        private readonly ConcurrentDictionary<BlockHash, List<ActionEvaluation>>
            _bufferedActionUnrenders;

        private readonly AsyncLocal<Dictionary<BlockHash, List<ActionEvaluation>>>
            _localRenderBuffer = new AsyncLocal<Dictionary<BlockHash, List<ActionEvaluation>>>();

        private readonly AsyncLocal<Dictionary<BlockHash, List<ActionEvaluation>>>
            _localUnrenderBuffer = new AsyncLocal<Dictionary<BlockHash, List<ActionEvaluation>>>();

        private BlockHash? _eventReceivingBlock;
        private Reorg? _eventReceivingReorg;
        private long _reorgResistantHeight;

        /// <summary>
        /// Creates a new <see cref="DelayedActionRenderer{T}"/> instance decorating the given
        /// <paramref name="renderer"/>.
        /// </summary>
        /// <param name="renderer">The renderer to decorate which has the <em>actual</em>
        /// implementations and receives delayed events.</param>
        /// <param name="canonicalChainComparer">The same canonical chain comparer to
        /// <see cref="BlockChain{T}.Policy"/>.</param>
        /// <param name="store">The same store to what <see cref="BlockChain{T}"/> uses.</param>
        /// <param name="confirmations">The required number of confirmations to recognize a block.
        /// See also the <see cref="DelayedRenderer{T}.Confirmations"/> property.</param>
        /// <param name="reorgResistantHeight">Configures the height of blocks to maintain the
        /// <see cref="ActionEvaluation"/> buffer. Buffered <see cref="ActionEvaluation"/>s
        /// that belong to blocks older than this height from the tip are gone.
        /// If zero, which is a default value, is passed the buffer is not cleared.</param>
        public DelayedActionRenderer(
            IActionRenderer<T> renderer,
            IComparer<IBlockExcerpt> canonicalChainComparer,
            IStore store,
            int confirmations,
            long reorgResistantHeight = 0)
            : base(renderer, canonicalChainComparer, store, confirmations)
        {
            ActionRenderer = renderer;
            _bufferedActionRenders = new ConcurrentDictionary<BlockHash, List<ActionEvaluation>>();
            _bufferedActionUnrenders =
                new ConcurrentDictionary<BlockHash, List<ActionEvaluation>>();
            _reorgResistantHeight = reorgResistantHeight;
        }

        /// <summary>
        /// The inner action renderer which has the <em>actual</em> implementations and receives
        /// delayed events.
        /// </summary>
        public IActionRenderer<T> ActionRenderer { get; }

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
            _localUnrenderBuffer.Value = new Dictionary<BlockHash, List<ActionEvaluation>>();
        }

        /// <inheritdoc cref="DelayedRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public override void RenderBlock(Block<T> oldTip, Block<T> newTip)
        {
            Confirmed.TryAdd(oldTip.Hash, 0);
            if (_eventReceivingReorg is Reorg reorg &&
                reorg.OldTip.Equals(oldTip) &&
                reorg.NewTip.Equals(newTip))
            {
                if (_localUnrenderBuffer.Value is { } buf)
                {
                    foreach (BlockHash block in reorg.Unrendered)
                    {
                        if (buf.TryGetValue(block, out List<ActionEvaluation>? b))
                        {
                            _bufferedActionUnrenders[block] = b;
                        }
                        else
                        {
                            _bufferedActionUnrenders.TryRemove(
                                block,
                                out List<ActionEvaluation>? removed
                            );
                            if (removed is List<ActionEvaluation> l)
                            {
                                Logger.Warning(
                                    "The existing {Count} buffered action unrenders for " +
                                    "the block {BlockHash} were overwritten",
                                    l.Count,
                                    block
                                );
                            }
                        }

                        Logger.Debug(
                            "Committed {Count} buffered action unrenders from " +
                            "the block {BlockHash}",
                            b?.Count ?? 0,
                            block
                        );
                    }

                    _localUnrenderBuffer.Value =
                        new Dictionary<BlockHash, List<ActionEvaluation>>();
                }
            }
            else
            {
                _eventReceivingReorg = null;
            }

            _eventReceivingBlock = newTip.Hash;
            _localRenderBuffer.Value = new Dictionary<BlockHash, List<ActionEvaluation>>();
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

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public void RenderBlockEnd(Block<T> oldTip, Block<T> newTip)
        {
            Dictionary<BlockHash, List<ActionEvaluation>>? buffer = _localRenderBuffer.Value;
            if (buffer is null)
            {
                return;
            }

            IEnumerable<BlockHash> rendered;
            if (_eventReceivingReorg is Reorg reorg)
            {
                rendered = reorg.Rendered;
            }
            else if (_eventReceivingBlock is { } h)
            {
                rendered = new[] { h };
            }
            else
            {
                _localRenderBuffer.Value = new Dictionary<BlockHash, List<ActionEvaluation>>();
                return;
            }

            foreach (BlockHash block in rendered)
            {
                if (buffer.TryGetValue(block, out List<ActionEvaluation>? b))
                {
                    _bufferedActionRenders[block] = b;
                }
                else
                {
                    _bufferedActionRenders.TryRemove(block, out List<ActionEvaluation>? removed);
                    if (removed is List<ActionEvaluation> l)
                    {
                        Logger.Warning(
                            "The existing {Count} buffered action renders for the block " +
                            "{BlockHash} were overwritten",
                            l.Count,
                            block
                        );
                    }
                }

                Logger.Debug(
                    "Committed {Count} buffered action renders from the block {BlockHash}",
                    b?.Count ?? 0,
                    block
                );
            }

            _localRenderBuffer.Value = new Dictionary<BlockHash, List<ActionEvaluation>>();
            DiscoverBlock(oldTip, newTip);

            if (_reorgResistantHeight == 0)
            {
                return;
            }

            if (newTip.Index < _reorgResistantHeight)
            {
                return;
            }

            Logger.Debug("ClearRenderBuffer - " +
                         $"newTipIndex: {newTip.Index} " +
                         $"TipIndex: {Tip?.Index}");
            ClearRenderBuffer(
                newTip.Index - _reorgResistantHeight,
                _bufferedActionRenders);
            ClearRenderBuffer(
                newTip.Index - _reorgResistantHeight,
                _bufferedActionUnrenders);
        }

        /// <inheritdoc cref="IRenderer{T}.RenderReorgEnd(Block{T}, Block{T}, Block{T})"/>
        public override void RenderReorgEnd(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint)
        {
            base.RenderReorgEnd(oldTip, newTip, branchpoint);
            _eventReceivingReorg = null;
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
        internal ImmutableArray<BlockHash> LocateBlockPath(Block<T> lower, Block<T> upper)
        {
            if (lower.Index >= upper.Index)
            {
                throw new ArgumentException(
                    $"The {nameof(upper)} block (#{upper.Index} {upper}) must has the greater " +
                    $"index than the {nameof(lower)} block (#{lower.Index} {lower}).",
                    nameof(upper)
                );
            }

            IEnumerable<BlockHash> Iterate()
            {
                for (
                    Block<T>? b = upper;
                    b is Block<T> && b.Index > lower.Index;
                    b = b.PreviousHash is { } pv ? Store.GetBlock<T>(pv) : null
                )
                {
                    yield return b.Hash;
                }
            }

            return Iterate().Reverse().ToImmutableArray();
        }

        internal int GetBufferedActionRendererCount()
        {
            return _bufferedActionRenders.Count;
        }

        internal int GetBufferedActionUnRendererCount()
        {
            return _bufferedActionUnrenders.Count;
        }

        /// <inheritdoc cref="DelayedRenderer{T}.OnTipChanged(Block{T}, Block{T}, Block{T}?)"/>
        protected override void OnTipChanged(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T>? branchpoint
        )
        {
            if (branchpoint is Block<T>)
            {
                Renderer.RenderReorg(oldTip, newTip, branchpoint);
            }

            if (branchpoint is null)
            {
                Renderer.RenderBlock(oldTip, newTip);
                RenderBufferedActionEvaluations(newTip.Hash, unrender: false);
            }
            else
            {
                var blocksToUnrender = LocateBlockPath(branchpoint, oldTip).Reverse();
                foreach (BlockHash hash in blocksToUnrender)
                {
                    RenderBufferedActionEvaluations(hash, unrender: true);
                }

                Renderer.RenderBlock(oldTip, newTip);

                var blocksToRender = LocateBlockPath(branchpoint, newTip);
                foreach (BlockHash hash in blocksToRender)
                {
                    RenderBufferedActionEvaluations(hash, unrender: false);
                }
            }

            ActionRenderer.RenderBlockEnd(oldTip, newTip);

            if (branchpoint is Block<T>)
            {
                Renderer.RenderReorgEnd(oldTip, newTip, branchpoint);
            }
        }

        private void DelayRenderingAction(ActionEvaluation eval)
        {
            long blockIndex = eval.InputContext.BlockIndex;
            BlockHash blockHash;
            if (_eventReceivingReorg is Reorg reorg)
            {
                blockHash = reorg.IndexHash(blockIndex, unrender: false);
            }
            else
            {
                if (_eventReceivingBlock is { } h)
                {
                    blockHash = h;
                }
                else
                {
                    return;
                }
            }

            Dictionary<BlockHash, List<ActionEvaluation>>? buffer = _localRenderBuffer.Value
                ?? (_localRenderBuffer.Value = new Dictionary<BlockHash, List<ActionEvaluation>>());
            if (!buffer.TryGetValue(blockHash, out List<ActionEvaluation>? list))
            {
                buffer[blockHash] = list = new List<ActionEvaluation>();
            }

            list.Add(eval);
            Logger.Verbose(
                "Delayed an action render from #{BlockIndex} {BlockHash} (buffer: {Buffer})",
                blockIndex,
                blockHash,
                list.Count
            );
        }

        private void DelayUnrenderingAction(ActionEvaluation eval)
        {
            if (_eventReceivingReorg is Reorg reorg)
            {
                var buffer = _localUnrenderBuffer.Value ?? (_localUnrenderBuffer.Value =
                    new Dictionary<BlockHash, List<ActionEvaluation>>());
                long blockIndex = eval.InputContext.BlockIndex;
                BlockHash blockHash = reorg.IndexHash(blockIndex, unrender: true);
                if (!buffer.TryGetValue(blockHash, out List<ActionEvaluation>? list))
                {
                    buffer[blockHash] = list = new List<ActionEvaluation>();
                }

                list.Add(eval);
                Logger.Verbose(
                    "Delayed an action unrender from #{BlockIndex} {BlockHash} (buffer: {Buffer})",
                    blockIndex,
                    blockHash,
                    list.Count
                );
            }
            else
            {
                const string msg =
                    "An action unrender {@Action} from the block #{BlockIndex} was ignored due " +
                    "unexpected internal state";
                Logger.Warning(msg, eval.Action, eval.InputContext.BlockIndex);
            }
        }

        private void RenderBufferedActionEvaluations(BlockHash blockHash, bool unrender)
        {
            ConcurrentDictionary<BlockHash, List<ActionEvaluation>> bufferMap
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
                bufferMap.TryRemove(blockHash, out _);
            }
            else
            {
                Logger.Debug(
                    $"There are no buffered actions to {verb} for the block {{BlockHash}}",
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

        private void ClearRenderBuffer(
            long targetBlockIndex,
            ConcurrentDictionary<BlockHash, List<ActionEvaluation>> buffer)
        {
            IEnumerable<BlockHash> invalidityBlockHashes = buffer
                .Where(x => x.Value.First().InputContext.BlockIndex < targetBlockIndex)
                .Select(t => t.Key);
            foreach (BlockHash invalidityBlockHash in invalidityBlockHashes)
            {
                buffer.TryRemove(invalidityBlockHash, out _);
            }
        }

        private readonly struct Reorg
        {
            public readonly ImmutableArray<BlockHash> Unrendered;
            public readonly ImmutableArray<BlockHash> Rendered;
            public readonly Block<T> OldTip;
            public readonly Block<T> NewTip;
            public readonly Block<T> Branchpoint;

            public Reorg(
                ImmutableArray<BlockHash> unrendered,
                ImmutableArray<BlockHash> rendered,
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

            public BlockHash IndexHash(long index, bool unrender)
            {
                int offset = (int)(index - Branchpoint.Index);
                return (unrender ? Unrendered : Rendered)[offset - 1];
            }
        }
    }
}
