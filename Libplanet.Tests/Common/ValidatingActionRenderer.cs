using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;

namespace Libplanet.Tests.Common
{
    /// <summary>
    /// Validates if rendering events are in the correct order according to the documented automata
    /// (see also the docs for <see cref="IRenderer{T}"/> and <see cref="IActionRenderer{T}"/>)
    /// using profiling-guided analysis.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="Libplanet.Blockchain.BlockChain{T}"/>'s type parameter.</typeparam>
    public class ValidatingActionRenderer<T> : RecordingRenderer<T>
        where T : IAction, new()
    {
        private enum RenderState
        {
            Ready,
            Reorg,
            Block,
            BlockEnd,
        }

        public override void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint)
        {
            base.RenderReorg(oldTip, newTip, branchpoint);
            Validate();
        }

        public override void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            base.UnrenderAction(action, context, nextStates);
            Validate();
        }

        public override void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
            base.UnrenderActionError(action, context, exception);
            Validate();
        }

        public override void RenderBlock(Block<T> oldTip, Block<T> newTip)
        {
            base.RenderBlock(oldTip, newTip);
            Validate();
        }

        public override void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            base.RenderAction(action, context, nextStates);
            Validate();
        }

        public override void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
            base.RenderActionError(action, context, exception);
            Validate();
        }

        public override void RenderBlockEnd(Block<T> oldTip, Block<T> newTip)
        {
            base.RenderBlockEnd(oldTip, newTip);
            Validate();
        }

        public override void RenderReorgEnd(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint
        )
        {
            base.RenderReorgEnd(oldTip, newTip, branchpoint);
            Validate();
        }

        private void Validate()
        {
            var state = RenderState.Ready;
            RenderRecord<T>.Reorg reorgState = null;
            RenderRecord<T>.Block blockState = null;
            long previousActionBlockIndex = -1L;
            var records = new List<RenderRecord<T>>(Records.Count);

            Exception BadRenderExc(string message) => new InvalidRenderException(records, message);

#pragma warning disable S2589
            foreach (RenderRecord<T> record in Records)
            {
                records.Add(record);
                switch (state)
                {
                    case RenderState.Ready:
                    {
                        if (!(reorgState is null && blockState is null))
                        {
                            throw BadRenderExc(
                                $"Unexpected reorg/block states: {reorgState}/{blockState}."
                            );
                        }
                        else if (record is RenderRecord<T>.BlockBase blockBase && blockBase.Begin)
                        {
                            if (blockBase is RenderRecord<T>.Reorg reorg)
                            {
                                reorgState = reorg;
                                state = RenderState.Reorg;
                                break;
                            }
                            else if (blockBase is RenderRecord<T>.Block block)
                            {
                                blockState = block;
                                state = RenderState.Block;
                                break;
                            }
                        }

                        throw BadRenderExc(
                            $"Expected {nameof(IRenderer<T>.RenderReorg)} or " +
                            $"{nameof(IRenderer<T>.RenderBlock)}."
                        );
                    }

                    case RenderState.Reorg:
                    {
                        if (reorgState is null || !(blockState is null))
                        {
                            throw BadRenderExc(
                                $"Unexpected reorg/block states: {reorgState}/{blockState}."
                            );
                        }
                        else if (record is RenderRecord<T>.Block block && block.Begin)
                        {
                            if (block.OldTip != reorgState.OldTip ||
                                block.NewTip != reorgState.NewTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(IRenderer<T>.RenderReorg)} and " +
                                    $"{nameof(IRenderer<T>.RenderBlock)} which follows it should " +
                                    "have the same oldTip and newTip."
                                );
                            }

                            blockState = block;
                            state = RenderState.Block;
                            break;
                        }
                        else if (record is RenderRecord<T>.ActionBase actionBase &&
                                 actionBase.Unrender)
                        {
                            long idx = actionBase.Context.BlockIndex;
                            long minIdx = reorgState.Branchpoint.Index + 1;
                            long maxIdx = previousActionBlockIndex < 0
                                ? reorgState.OldTip.Index
                                : previousActionBlockIndex;
                            if (idx < minIdx || idx > maxIdx)
                            {
                                throw BadRenderExc(
                                    "An action is from a block which has an unexpected index " +
                                    $"#{idx} (expected min: #{minIdx}; max: #{maxIdx})."
                                );
                            }

                            previousActionBlockIndex = idx;
                            break;
                        }

                        throw BadRenderExc(
                            $"Expected {nameof(IRenderer<T>.RenderBlock)} or " +
                            $"{nameof(IActionRenderer<T>.UnrenderAction)} or " +
                            $"{nameof(IActionRenderer<T>.UnrenderActionError)}."
                        );
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

                            state = reorgState is null ? RenderState.Ready : RenderState.BlockEnd;
                            blockState = null;
                            break;
                        }
                        else if (record is RenderRecord<T>.ActionBase actionBase &&
                                 actionBase.Render)
                        {
                            long idx = actionBase.Context.BlockIndex;
                            if (reorgState is RenderRecord<T>.Reorg reorg)
                            {
                                long minIdx = previousActionBlockIndex >= 0
                                    ? previousActionBlockIndex
                                    : reorg.Branchpoint.Index + 1;
                                long maxIdx = reorg.NewTip.Index;
                                if (idx < minIdx || idx > maxIdx)
                                {
                                    throw BadRenderExc(
                                        "An action is from a block which has an unexpected index " +
                                        $"#{idx} (expected min: #{minIdx}; max: #{maxIdx})."
                                    );
                                }
                            }
                            else if (idx != blockState.NewTip.Index)
                            {
                                throw BadRenderExc(
                                    "An action is from a block which has an unexpected index " +
                                    $"#{idx} (expected: #{blockState.NewTip.Index}."
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
                        if (reorgState is null || !(blockState is null))
                        {
                            throw BadRenderExc(
                                $"Unexpected reorg/block states: {reorgState}/{blockState}."
                            );
                        }
                        else if (record is RenderRecord<T>.Reorg reorg && reorg.End)
                        {
                            if (reorg.OldTip != reorgState.OldTip ||
                                reorg.NewTip != reorgState.NewTip ||
                                reorg.Branchpoint != reorgState.Branchpoint)
                            {
                                throw BadRenderExc(
                                    $"{nameof(IRenderer<T>.RenderReorgEnd)} should match to " +
                                    $"{nameof(IActionRenderer<T>.RenderReorg)}; they should have " +
                                    "the same oldTip, newTip, and branchpoint."
                                );
                            }

                            state = RenderState.Ready;
                            reorgState = null;
                            break;
                        }

                        throw BadRenderExc(
                            $"Expected {nameof(IActionRenderer<T>.RenderReorgEnd)}."
                        );
                    }
                }
            }
#pragma warning restore S2589
        }

        public class InvalidRenderException : Exception
        {
            public InvalidRenderException(
                IReadOnlyList<RenderRecord<T>> records,
                string message
            )
                : base(message)
            {
                Records = records;
            }

            public IReadOnlyList<RenderRecord<T>> Records { get; }

            public override string Message
            {
                get
                {
                    string MakeCompact(string stackTrace)
                    {
                        int pos = 0;
                        for (int i = 0; pos >= 0 && i < 10; i++)
                        {
                            pos = stackTrace.IndexOf('\n', pos + 1);
                        }

                        return pos < 0
                            ? stackTrace
                            : stackTrace.Substring(0, pos);
                    }

                    string pre = base.Message;
                    if (Records.Count < 1)
                    {
                        return pre + "\n(0 records.)";
                    }

                    RenderRecord<T> first = Records[Records.Count - 1];
                    var firstLine = $"{pre}\n{first}";
                    if (Records.Count < 2)
                    {
                        return $"{firstLine}\n{MakeCompact(first.StackTrace)}\n(1 record.)";
                    }

                    // Find common postfix
                    string firstTrace = first.StackTrace;
                    int commonPostfix = 0;
                    for (int i = 0, end = Records.Min(r => r.StackTrace.Length); i < end; i++)
                    {
                        char charInFirst = firstTrace[StackTrace.Length - (i + 1)];
                        bool allEqual = Records.Skip(1).All(r =>
                        {
                            string stackTrace = r.StackTrace;
                            char charFromEnd = stackTrace[stackTrace.Length - (i + 1)];
                            return charFromEnd.Equals(charInFirst);
                        });

                        if (!allEqual)
                        {
                            commonPostfix = i;
                            break;
                        }
                    }

                    firstTrace =
                        MakeCompact(firstTrace.Substring(0, firstTrace.Length - commonPostfix));
                    firstLine += $"\n{firstTrace}";
                    RenderRecord<T> second = Records[Records.Count - 2];
                    IEnumerable<RenderRecord<T>> rest = Records.Reverse().Skip(2);
                    string secondTrace = second.StackTrace;
                    string secondCompactTrace =
                        MakeCompact(secondTrace.Substring(0, secondTrace.Length - commonPostfix));
                    return $"{firstLine}\n{second}\n{secondCompactTrace}\n" +
                           string.Join("\n", rest) + $"\n({Records.Count} records.)";
                }
            }
        }
    }
}
