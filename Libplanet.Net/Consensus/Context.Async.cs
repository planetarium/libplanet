using System;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context
    {
        /// <summary>
        /// Starts round #0 of consensus for <see cref="Height"/>.
        /// </summary>
        /// <param name="lastCommit">A <see cref="Block.LastCommit"/> from previous block.
        /// </param>
        public void Start(BlockCommit? lastCommit = null)
        {
            _logger.Information(
                "Starting context for height #{Height}, LastCommit: {LastCommit}",
                Height,
                lastCommit);
            _lastCommit = lastCommit;
            ProduceMutation(() => StartRound(0));

            // FIXME: Exceptions inside tasks should be handled properly.
            _ = MessageConsumerTask(_cancellationTokenSource.Token);
            _ = MutationConsumerTask(_cancellationTokenSource.Token);
        }

        /// <summary>
        /// Consumes every <see cref="ConsensusMsg"/> in the message queue.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="ConsensusMsg"/>s from the message queue.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task MessageConsumerTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    await ConsumeMessage(cancellationToken);
                }
                catch (OperationCanceledException oce)
                {
                    _logger.Debug(oce, "Cancellation was requested");
                    ExceptionOccurred?.Invoke(this, oce);
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {FName}",
                        nameof(ConsumeMessage));
                    ExceptionOccurred?.Invoke(this, e);
                    throw;
                }
            }
        }

        /// <summary>
        /// Consumes every <see cref="System.Action"/> in the mutation queue.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="System.Action"/>s from the mutation queue.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task MutationConsumerTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    await ConsumeMutation(cancellationToken);
                }
                catch (OperationCanceledException oce)
                {
                    _logger.Debug(oce, "Cancellation was requested");
                    ExceptionOccurred?.Invoke(this, oce);
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {FName}",
                        nameof(ConsumeMutation));
                    ExceptionOccurred?.Invoke(this, e);
                    throw;
                }
            }
        }

        /// <summary>
        /// Adds <paramref name="message"/> to the message queue.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMsg"/> to be processed.</param>
        internal void ProduceMessage(ConsensusMsg message)
        {
            _messageRequests.Writer.WriteAsync(message);
        }

        /// <summary>
        /// Adds a mutating <see cref="System.Action"/> to the mutation queue.
        /// </summary>
        /// <param name="mutation">A <see cref="System.Action"/> to be processed.</param>
        private void ProduceMutation(System.Action mutation)
        {
            _mutationRequests.Writer.WriteAsync(mutation);
        }

        private async Task ConsumeMessage(CancellationToken cancellationToken)
        {
            ConsensusMsg message = await _messageRequests.Reader.ReadAsync(cancellationToken);
            ProduceMutation(() =>
            {
                if (AddMessage(message))
                {
                    ProcessHeightOrRoundUponRules(message);
                }
            });

            MessageConsumed?.Invoke(this, message);
        }

        private async Task ConsumeMutation(CancellationToken cancellationToken)
        {
            System.Action mutation = await _mutationRequests.Reader.ReadAsync(cancellationToken);
            var prevState = new ContextState(
                _heightVoteSet.Count,
                Height,
                Round,
                Step,
                Proposal?.BlockHash);
            mutation();
            var nextState = new ContextState(
                _heightVoteSet.Count,
                Height,
                Round,
                Step,
                Proposal?.BlockHash);
            while (!prevState.Equals(nextState))
            {
                _logger.Information(
                    "State (Proposal, VoteCount, Round, Step) " +
                    "changed from " +
                    "({PrevProposal}, {PrevVoteCount}, {PrevRound}, {PrevStep}) to " +
                    "({NextProposal}, {NextVoteCount}, {NextRound}, {NextStep})",
                    prevState.Proposal?.ToString() ?? "Null",
                    prevState.VoteCount,
                    prevState.Round,
                    prevState.Step,
                    nextState.Proposal?.ToString() ?? "Null",
                    nextState.VoteCount,
                    nextState.Round,
                    nextState.Step);
                StateChanged?.Invoke(this, nextState);
                prevState = new ContextState(
                    _heightVoteSet.Count,
                    Height,
                    Round,
                    Step,
                    Proposal?.BlockHash);
                ProcessGenericUponRules();
                nextState = new ContextState(
                    _heightVoteSet.Count,
                    Height,
                    Round,
                    Step,
                    Proposal?.BlockHash);
            }

            MutationConsumed?.Invoke(this, mutation);
        }

        /// <summary>
        /// Schedules <see cref="ProcessTimeoutPropose"/> to be queued after
        /// <see cref="TimeoutPropose"/> amount of time.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPropose(int round)
        {
            TimeSpan timeout = TimeoutPropose(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            _logger.Information(
                "TimeoutPropose has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            ProduceMutation(() => ProcessTimeoutPropose(round));
        }

        /// <summary>
        /// Schedules <see cref="ProcessTimeoutPreVote"/> to be queued after
        /// <see cref="TimeoutPreVote"/> amount of time.
        /// </summary>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPreVote(int round)
        {
            TimeSpan timeout = TimeoutPreVote(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            _logger.Information(
                "TimeoutPreVote has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            ProduceMutation(() => ProcessTimeoutPreVote(round));
        }

        /// <summary>
        /// Schedules <see cref="ProcessTimeoutPreCommit"/> to be queued after
        /// <see cref="TimeoutPreCommit"/> amount of time.
        /// </summary>
        /// <param name="round">The round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPreCommit(int round)
        {
            TimeSpan timeout = TimeoutPreCommit(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            _logger.Information(
                "TimeoutPreCommit has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            ProduceMutation(() => ProcessTimeoutPreCommit(round));
        }

        internal struct ContextState : IEquatable<ContextState>
        {
            public ContextState(
                int voteCount,
                long height,
                int round,
                ConsensusStep step,
                BlockHash? proposal)
            {
                VoteCount = voteCount;
                Height = height;
                Round = round;
                Step = step;
                Proposal = proposal;
            }

            public int VoteCount { get; }

            public long Height { get; }

            public int Round { get; }

            public ConsensusStep Step { get; }

            public BlockHash? Proposal { get; }

            public bool Equals(ContextState other)
            {
                return VoteCount == other.VoteCount &&
                       Round == other.Round &&
                       Step == other.Step &&
                       Proposal.Equals(other.Proposal);
            }

            public override bool Equals(object? obj)
            {
                return obj is ContextState other && Equals(other);
            }

            public override int GetHashCode()
            {
                return HashCode.Combine(VoteCount, Round, (int)Step, Proposal.GetHashCode());
            }
        }
    }
}
