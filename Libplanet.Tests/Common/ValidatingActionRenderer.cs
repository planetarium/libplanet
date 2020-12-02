using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Store;

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

        /// <summary>
        /// The chain that publishes the render events.  More stricter validations are conducted
        /// if it's configured.
        /// </summary>
        public BlockChain<T> BlockChain { get; set; }

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

            ValidateReorgEnd(oldTip, newTip, branchpoint);
        }

        private void ValidateReorgEnd(
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint)
        {
            if (!(BlockChain is BlockChain<T> chain))
            {
                return;
            }

            IBlockPolicy<T> policy = chain.Policy;
            IStore store = chain.Store;

            List<IAction> expectedUnrenderedActions = new List<IAction>();
            Block<T> block = oldTip;
            while (!block.Equals(branchpoint))
            {
                if (policy.BlockAction is IAction blockAction)
                {
                    expectedUnrenderedActions.Add(blockAction);
                }

                expectedUnrenderedActions.AddRange(
                    block.Transactions.SelectMany(t => t.Actions).Cast<IAction>().Reverse());
                block = block.PreviousHash is HashDigest<SHA256> prevHash
                    ? store.GetBlock<T>(prevHash)
                    : throw new InvalidRenderException(
                        Records,
                        "Reorg occurred from the chain with different genesis.");
            }

            IEnumerable<IAction> expectedRenderedActionsBuffer = new List<IAction>();
            block = newTip;
            while (!block.Equals(branchpoint))
            {
                IEnumerable<IAction> actions =
                    block.Transactions.SelectMany(t => t.Actions).Cast<IAction>();
                if (policy.BlockAction is IAction blockAction)
                {
#if NET472 || NET471 || NET47 || NET462 || NET461
                    // Even though .NET Framework 4.6.1 or higher supports .NET Standard 2.0,
                    // versions lower than 4.8 lacks Enumerable.Append(IEnumerable<T>, T) method.
                    actions = actions.Concat(new IAction[] { blockAction });
#else
#pragma warning disable PC002
                    actions = actions.Append(blockAction);
#pragma warning restore PC002
#endif
                }

                expectedRenderedActionsBuffer = actions.Concat(expectedRenderedActionsBuffer);
                block = block.PreviousHash is HashDigest<SHA256> prevHash
                    ? store.GetBlock<T>(prevHash)
                    : throw new InvalidRenderException(
                        Records,
                        "Reorg occurred from the chain with different genesis.");
            }

            IAction[] expectedRenderedActions = expectedRenderedActionsBuffer.ToArray();
            List<IAction> actualRenderedActions = new List<IAction>();
            List<IAction> actualUnrenderedActions = new List<IAction>();
            foreach (var record in Records.Reverse())
            {
                if (record is RenderRecord<T>.Reorg b && b.Begin)
                {
                    break;
                }

                if (record is RenderRecord<T>.ActionBase a)
                {
                    if (a.Render)
                    {
                        actualRenderedActions.Add(a.Action);
                    }
                    else
                    {
                        actualUnrenderedActions.Add(a.Action);
                    }
                }
            }

            actualRenderedActions.Reverse();
            actualUnrenderedActions.Reverse();

            string ReprAction(IAction action)
            {
                if (action is null)
                {
                    return "[N/A]";
                }

                return action.PlainValue.Inspection
                    .Replace(" \n ", " ")
                    .Replace(" \n", " ")
                    .Replace("\n ", " ")
                    .Replace("\n", " ");
            }

            string MakeErrorMessage(string prefix, IList<IAction> expected, IList<IAction> actual)
            {
                int expectN = expected.Count;
                int actualN = actual.Count;
                if (expectN != actualN)
                {
                    prefix += $" (expected: {expectN} actions, actual: {actualN} actions):";
                }

                var buffer = new StringBuilder();
                for (int i = 0, count = Math.Max(expectN, actualN); i < count; i++)
                {
                    IAction e = i < expectN ? expected[i] : null;
                    IAction a = i < actualN ? actual[i] : null;
                    if (!(e is null || a is null) && e.PlainValue.Equals(a.PlainValue))
                    {
                        buffer.Append($"\n\t  {ReprAction(e)}");
                    }
                    else
                    {
                        buffer.Append($"\n\tE {ReprAction(e)}");
                        buffer.Append($"\n\tA {ReprAction(a)}");
                    }
                }

                return $"{prefix}:{buffer}";
            }

            if (!actualUnrenderedActions.Select(a => a.PlainValue)
                    .SequenceEqual(expectedUnrenderedActions.Select(a => a.PlainValue)))
            {
                const string message =
                    "The unrender action records do not match with actions in the block when " +
                    "reorg occurred";
                throw new InvalidRenderException(
                    Records,
                    MakeErrorMessage(message, expectedUnrenderedActions, actualUnrenderedActions)
                );
            }

            if (!actualRenderedActions.Select(a => a.PlainValue)
                    .SequenceEqual(expectedRenderedActions.Select(a => a.PlainValue)))
            {
                const string message =
                    "The render action record does not match with actions in the block when " +
                    "reorg occurred";
                throw new InvalidRenderException(
                    Records,
                    MakeErrorMessage(message, expectedRenderedActions, actualRenderedActions)
                );
            }
        }

        private void Validate()
        {
            var state = RenderState.Ready;
            RenderRecord<T>.Reorg reorgState = null;
            RenderRecord<T>.Block blockState = null;
            long previousActionBlockIndex = -1L;
            var records = new List<RenderRecord<T>>(Records.Count);

            Exception BadRenderExc(string message) => new InvalidRenderException(records, message);

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
#pragma warning disable S2589
                        if (reorgState is null || !(blockState is null))
#pragma warning restore S2589
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
#pragma warning disable S2589
                        if (reorgState is null || !(blockState is null))
#pragma warning restore S2589
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
                        char charInFirst = firstTrace[firstTrace.Length - (i + 1)];
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
