using System;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// Starts round #0 of consensus for <see cref="Height"/>.
        /// </summary>
        /// <param name="lastCommit">A <see cref="Block{T}.LastCommit"/> from previous block.
        /// </param>
        /// <param name="bootstrapping">A <see langword="bool"/> flag indicating whether
        /// this <see cref="Context{T}"/> should run as a bootstrapping <see cref="Context{T}"/>
        /// or not.</param>
        public void Start(BlockCommit? lastCommit = null, bool bootstrapping = false)
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

            if (bootstrapping)
            {
                _ = BootstrappingTask(_cancellationTokenSource.Token);
            }
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

        internal async Task BootstrappingTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    await Task.Delay(TimeSpan.FromSeconds(1));
                }
                catch (OperationCanceledException oce)
                {
                    _logger.Debug(oce, "Cancellation was requested");
                    ExceptionOccurred?.Invoke(this, oce);
                    throw;
                }

                if (_messageLog.GetRandomMessage() is { } message)
                {
                    BroadcastMessage(message);
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
                int prevMessageLogSize = _messageLog.GetTotalCount();
                AddMessage(message);
                int nextMessageLogSize = _messageLog.GetTotalCount();
                if (prevMessageLogSize < nextMessageLogSize)
                {
                    ProcessHeightOrRoundUponRules(message);
                }
            });
            MessageConsumed?.Invoke(this, message);
        }

        private async Task ConsumeMutation(CancellationToken cancellationToken)
        {
            System.Action mutation = await _mutationRequests.Reader.ReadAsync(cancellationToken);
            (int MessageLogSize, int Round, Step Step) prevState =
                (_messageLog.GetTotalCount(), Round, Step);
            mutation();
            (int MessageLogSize, int Round, Step Step) nextState =
                (_messageLog.GetTotalCount(), Round, Step);
            if (prevState != nextState)
            {
                _logger.Information(
                    "State (MessageLogSize, Round, Step) changed from " +
                    "({PrevMessageLogSize}, {PrevRound}, {PrevStep}) to " +
                    "({NextMessageLogSize}, {NextRound}, {NextStep})",
                    prevState.MessageLogSize,
                    prevState.Round,
                    prevState.Step,
                    nextState.MessageLogSize,
                    nextState.Round,
                    nextState.Step);
                StateChanged?.Invoke(
                    this, (nextState.MessageLogSize, nextState.Round, nextState.Step));

                ProduceMutation(() => ProcessGenericUponRules());
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
    }
}
