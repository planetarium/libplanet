using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain.Renderers.Debug
{
    /// <summary>
    /// Validates if rendering events are in the correct order according to the documented automata
    /// (see also the docs for <see cref="IRenderer{T}"/> and <see cref="IActionRenderer{T}"/>)
    /// using profiling-guided analysis.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="Libplanet.Blockchain.BlockChain{T}"/>'s type parameter.</typeparam>
    public class ValidatingActionRenderer<T> : RecordingActionRenderer<T>
        where T : IAction, new()
    {
        private readonly Action<InvalidRenderException<T>>? _onError;

        /// <summary>
        /// Creates a new <see cref="ValidatingActionRenderer{T}"/> instance.
        /// </summary>
        /// <param name="onError">An optional event handler which is triggered when invalid
        /// render events occur.</param>
        public ValidatingActionRenderer(Action<InvalidRenderException<T>>? onError = null)
        {
            _onError = onError;
        }

        private enum RenderState
        {
            Ready,
            Block,
            BlockEnd,
        }

        /// <summary>
        /// The chain that publishes the render events.  More stricter validations are conducted
        /// if it's configured.
        /// </summary>
        public BlockChain<T>? BlockChain { get; set; }

        /// <inheritdoc cref="IRenderer{T}.RenderBlock(Block{T}, Block{T})"/>
        public override void RenderBlock(Block<T> oldTip, Block<T> newTip)
        {
            base.RenderBlock(oldTip, newTip);
            Validate();
        }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderAction(IAction, IActionContext, IAccountStateDelta)"/>
        public override void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            base.RenderAction(action, context, nextStates);
            Validate();
        }

        /// <inheritdoc
        /// cref="IActionRenderer{T}.RenderActionError(IAction, IActionContext, Exception)"/>
        public override void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
            base.RenderActionError(action, context, exception);
            Validate();
        }

        /// <inheritdoc cref="IActionRenderer{T}.RenderBlockEnd(Block{T}, Block{T})"/>
        public override void RenderBlockEnd(Block<T> oldTip, Block<T> newTip)
        {
            base.RenderBlockEnd(oldTip, newTip);
            Validate();
        }

        private void Validate()
        {
            var state = RenderState.Ready;
            RenderRecord<T>.Block? blockState = null;
            long previousActionBlockIndex = -1L;
            var records = new List<RenderRecord<T>>(Records.Count);

            Exception BadRenderExc(string msg) => Error(records, msg);

            foreach (RenderRecord<T> record in Records)
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
                        else if (record is RenderRecord<T>.BlockBase blockBase && blockBase.Begin)
                        {
#pragma warning disable S1066
                            if (blockBase is RenderRecord<T>.Block block)
#pragma warning restore S1066
                            {
                                blockState = block;
                                state = RenderState.Block;
                                break;
                            }
                        }

                        throw BadRenderExc($"Expected {nameof(IRenderer<T>.RenderBlock)}.");
                    }

                    case RenderState.Block:
                    {
                        if (blockState is null)
                        {
                            throw BadRenderExc("Unexpected block state: null.");
                        }
                        else if (record is RenderRecord<T>.Block block && block.End)
                        {
                            if (block.OldTip != blockState.OldTip ||
                                block.NewTip != blockState.NewTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(IRenderer<T>.RenderBlock)} and " +
                                    $"{nameof(IActionRenderer<T>.RenderBlockEnd)} which matches " +
                                    "to it should have the same oldTip and newTip."
                                );
                            }

#pragma warning disable S2583
                            state = RenderState.Ready;
#pragma warning restore S2583
                            blockState = null;
                            break;
                        }
                        else if (record is RenderRecord<T>.ActionBase actionBase &&
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
                            $"Expected {nameof(IActionRenderer<T>.RenderBlockEnd)} or " +
                            $"{nameof(IActionRenderer<T>.RenderAction)} or " +
                            $"{nameof(IActionRenderer<T>.RenderActionError)}"
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

        private InvalidRenderException<T> Error(IReadOnlyList<RenderRecord<T>> records, string msg)
        {
            var exception = new InvalidRenderException<T>(msg, records);
            _onError?.Invoke(exception);
            return exception;
        }
    }
}
