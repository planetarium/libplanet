using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain.Renderers.Debug
{
    /// <summary>
    /// Validates if rendering events are in the correct order according to the documented automata
    /// (see also the docs for <see cref="IRenderer"/> and <see cref="IActionRenderer"/>)
    /// using profiling-guided analysis.
    /// </summary>
    public class ValidatingActionRenderer : RecordingActionRenderer
    {
        private readonly Action<InvalidRenderException>? _onError;

        /// <summary>
        /// Creates a new <see cref="ValidatingActionRenderer"/> instance.
        /// </summary>
        /// <param name="onError">An optional event handler which is triggered when invalid
        /// render events occur.</param>
        public ValidatingActionRenderer(Action<InvalidRenderException>? onError = null)
        {
            _onError = onError;
        }

        private enum RenderState
        {
            Ready,
            Block,
            BlockEnd,
        }

        /// <inheritdoc cref="IRenderer.RenderBlock(Block, Block)"/>
        public override void RenderBlock(Block oldTip, Block newTip)
        {
            base.RenderBlock(oldTip, newTip);
            Validate();
        }

        /// <inheritdoc
        /// cref="IActionRenderer.RenderAction(IValue, IActionContext, IAccount)"/>
        public override void RenderAction(
            IValue action,
            IActionContext context,
            IAccount nextStates
        )
        {
            base.RenderAction(action, context, nextStates);
            Validate();
        }

        /// <inheritdoc
        /// cref="IActionRenderer.RenderActionError(IValue, IActionContext, Exception)"/>
        public override void RenderActionError(
            IValue action,
            IActionContext context,
            Exception exception
        )
        {
            base.RenderActionError(action, context, exception);
            Validate();
        }

        /// <inheritdoc cref="IActionRenderer.RenderBlockEnd(Block, Block)"/>
        public override void RenderBlockEnd(Block oldTip, Block newTip)
        {
            base.RenderBlockEnd(oldTip, newTip);
            Validate();
        }

        private void Validate()
        {
            var state = RenderState.Ready;
            RenderRecord.BlockEvent? blockState = null;
            long previousActionBlockIndex = -1L;
            var records = new List<RenderRecord>(Records.Count);

            Exception BadRenderExc(string msg) => Error(records, msg);

            foreach (RenderRecord record in Records)
            {
                records.Add(record);
                switch (state)
                {
                    case RenderState.Ready:
                    {
#pragma warning disable S2589
                        if (!(blockState is null))
#pragma warning restore S2589
                        {
                            throw BadRenderExc($"Unexpected block state: {blockState}.");
                        }
                        else if (record is RenderRecord.BlockBase blockBase && blockBase.Begin)
                        {
#pragma warning disable S1066
                            if (blockBase is RenderRecord.BlockEvent block)
#pragma warning restore S1066
                            {
                                blockState = block;
                                state = RenderState.Block;
                                break;
                            }
                        }

                        throw BadRenderExc($"Expected {nameof(IRenderer.RenderBlock)}.");
                    }

                    case RenderState.Block:
                    {
                        if (blockState is null)
                        {
                            throw BadRenderExc("Unexpected block state: null.");
                        }
                        else if (record is RenderRecord.BlockEvent block && block.End)
                        {
                            if (block.OldTip != blockState.OldTip ||
                                block.NewTip != blockState.NewTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(IRenderer.RenderBlock)} and " +
                                    $"{nameof(IActionRenderer.RenderBlockEnd)} which matches " +
                                    "to it should have the same oldTip and newTip."
                                );
                            }

#pragma warning disable S2583
                            state = RenderState.Ready;
#pragma warning restore S2583
                            blockState = null;
                            break;
                        }
                        else if (record is RenderRecord.ActionBase actionBase &&
                                 actionBase.Render)
                        {
                            long idx = actionBase.Context.BlockIndex;
                            if (idx > blockState.NewTip.Index)
                            {
                                throw BadRenderExc(
                                    "An action is from a block which has an unexpected index " +
                                    $"#{idx} (expected max: #{blockState.NewTip.Index})."
                                );
                            }

                            previousActionBlockIndex = idx;
                            break;
                        }

                        throw BadRenderExc(
                            $"Expected {nameof(IActionRenderer.RenderBlockEnd)} or " +
                            $"{nameof(IActionRenderer.RenderAction)} or " +
                            $"{nameof(IActionRenderer.RenderActionError)}"
                        );
                    }

                    case RenderState.BlockEnd:
                    {
                        if (!(blockState is null))
                        {
                            throw BadRenderExc($"Unexpected block states: {blockState}");
                        }

                        throw BadRenderExc(
                            $"Unexpected block state/record encountered: " +
                            $"{blockState}/{record}");
                    }
                }
            }
        }

        private InvalidRenderException Error(IReadOnlyList<RenderRecord> records, string msg)
        {
            var exception = new InvalidRenderException(msg, records);
            _onError?.Invoke(exception);
            return exception;
        }
    }
}
