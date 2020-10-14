using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
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

#pragma warning disable S2589
        private void Validate()
        {
            RenderState state = RenderState.Ready;
            RenderRecord<T>.Block blockState = null;
            RenderRecord<T>.Block prevBlockState = null;
            RenderRecord<T>.Reorg reorgState = null;

            Exception BadRenderExc(string message) => new InvalidRenderException(Records, message);

            foreach (RenderRecord<T> record in Records)
            {
                switch (record)
                {
                    case RenderRecord<T>.Block block:
                    {
                        if (block.Begin)
                        {
                            if (state == RenderState.Block)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlock)}: Should not have " +
                                    $"{nameof(RenderState.Block)} state.  {state}"
                                );
                            }

                            if (!(blockState is null))
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlock)}: Should not have " +
                                    $"{nameof(blockState)}."
                                );
                            }

                            if (!(prevBlockState is null) &&
                                prevBlockState.NewTip != block.OldTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlock)}: Should have same oldTip with " +
                                    $"{nameof(prevBlockState)}'s newTip."
                                );
                            }

                            blockState = block;
                            state = RenderState.Block;
                        }
                        else
                        {
                            if (state == RenderState.Ready ||
                                state == RenderState.Reorg ||
                                state == RenderState.BlockEnd)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlockEnd)}: Should not have " +
                                    $"{nameof(RenderState.Ready)} or " +
                                    $"{nameof(RenderState.Reorg)} or " +
                                    $"{nameof(RenderState.BlockEnd)} state.  {state}"
                                );
                            }

                            if (blockState is null)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlockEnd)}: Should have {nameof(blockState)}."
                                );
                            }

                            if (blockState.OldTip != block.OldTip ||
                                blockState.NewTip != block.NewTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderBlockEnd)}: Should match with previous " +
                                    $"{nameof(RenderBlock)}."
                                );
                            }

                            prevBlockState = blockState;
                            blockState = null;
                            state = RenderState.BlockEnd;
                        }

                        break;
                    }

                    case RenderRecord<T>.Reorg reorg:
                    {
                        if (reorg.Begin)
                        {
                            if (state == RenderState.Reorg ||
                                state == RenderState.Block)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderReorg)}: Should not have " +
                                    $"{nameof(RenderState.Reorg)} or " +
                                    $"{nameof(RenderState.Block)} state.  {state}"
                                );
                            }

                            if (!(blockState is null))
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderReorg)}: Should not have " +
                                    $"{nameof(blockState)}."
                                );
                            }

                            if (!(prevBlockState is null) &&
                                prevBlockState.NewTip != reorg.OldTip)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderReorg)}: Should have same oldTip with " +
                                    $"{nameof(prevBlockState)}'s newTip."
                                );
                            }

                            prevBlockState = null;
                            reorgState = reorg;
                            state = RenderState.Reorg;
                        }
                        else
                        {
                            // FIXME: Should include RenderState.Reorg in this statement
                            // because reorg cannot happened to shorter (easier) chain.
                            if (state == RenderState.Ready ||
                                state == RenderState.Block)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderReorgEnd)}: Should not have " +
                                    $"{nameof(RenderState.Ready)} or " +
                                    $"{nameof(RenderState.Block)} state.  {state}"
                                );
                            }

                            reorgState = null;
                            state = RenderState.Ready;
                        }

                        break;
                    }

                    case RenderRecord<T>.ActionBase action:
                    {
                        if (action.Render)
                        {
                            if (state == RenderState.Ready ||
                                state == RenderState.Reorg ||
                                state == RenderState.BlockEnd)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderAction)}: Should not have " +
                                    $"{RenderState.Ready} or " +
                                    $"{RenderState.Reorg} or " +
                                    $"{RenderState.BlockEnd} state.  {state}"
                                );
                            }

                            if (blockState is null)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderAction)}: Should have {nameof(blockState)}."
                                );
                            }

                            if (blockState.NewTip.Index != action.Context.BlockIndex)
                            {
                                throw BadRenderExc(
                                    $"{nameof(RenderAction)}: Index of action context does not " +
                                    $"match with {nameof(RenderBlock)}."
                                );
                            }
                        }
                        else
                        {
                            if (state == RenderState.Ready ||
                                state == RenderState.Block ||
                                state == RenderState.BlockEnd)
                            {
                                throw BadRenderExc(
                                    $"{nameof(UnrenderAction)}: Should not have " +
                                    $"{nameof(RenderState.Ready)} or " +
                                    $"{nameof(RenderState.Block)} or " +
                                    $"{nameof(RenderState.BlockEnd)} state.  {state}"
                                );
                            }

                            if (reorgState is null)
                            {
                                throw BadRenderExc(
                                    $"{nameof(UnrenderAction)}: Should have {nameof(blockState)}."
                                );
                            }

                            var minIdx = reorgState.Branchpoint.Index + 1;
                            var maxIdx = reorgState.OldTip.Index;
                            var idx = action.Context.BlockIndex;
                            if (idx > maxIdx || idx < minIdx)
                            {
                                throw BadRenderExc(
                                    $"{nameof(UnrenderAction)}: Index of action context does not " +
                                    $"match with {nameof(reorgState)}."
                                );
                            }
                        }

                        break;
                    }

                    default:
                        throw BadRenderExc($"Unexpected record {record}");
                }
            }
        }
#pragma warning restore S2589

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
