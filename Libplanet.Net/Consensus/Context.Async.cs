using System;
using System.Linq;
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
        public void StartAsync(BlockCommit? lastCommit = null)
        {
            _lastCommit = lastCommit;
            ProduceMutation(() => StartRound(0));

            // FIXME: Exceptions inside tasks should be handled properly.
            _ = MessageConsumerTask(_cancellationTokenSource.Token);
            _ = MutationConsumerTask(_cancellationTokenSource.Token);
        }

        /// <summary>
        /// Consumes every <see cref="ConsensusMessage"/> in the message queue.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="ConsensusMessage"/>s from the message queue.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task MessageConsumerTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    await ConsumeMessage(cancellationToken);
                }
                catch (TaskCanceledException tce)
                {
                    _logger.Debug("Cancellation was requested", tce);
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
                catch (TaskCanceledException tce)
                {
                    _logger.Debug("Cancellation was requested", tce);
                    throw;
                }
            }
        }

        private async Task ConsumeMessage(CancellationToken cancellationToken)
        {
            ConsensusMessage message = await _messageRequests.Reader.ReadAsync(cancellationToken);
            ProduceMutation(() =>
            {
                try
                {
                    AddMessage(message);
                    _logger.Debug(
                        "{FName}: Message: {Message} => " +
                        "Height: {Height}, Round: {Round}, Address: {Address}, " +
                        "Hash: {BlockHash}, MessageCount: {Count}. (context: {Context})",
                        nameof(AddMessage),
                        message,
                        message.Height,
                        message.Round,
                        message.Remote!.Address,
                        message.BlockHash,
                        _messagesInRound[message.Round].Count,
                        ToString());
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {FName}.",
                        nameof(AddMessage));
                }
            });
            ProduceMutation(() => ProcessHeightOrRoundUponRules(message));
            MessageConsumed?.Invoke(this, message);
        }

        private async Task ConsumeMutation(CancellationToken cancellationToken)
        {
            System.Action mutation = await _mutationRequests.Reader.ReadAsync(cancellationToken);
            (int MessageLogSize, int Round, Step Step) prevState =
                (_messagesInRound.Sum(x => x.Value.Count), Round, Step);
            mutation();
            (int MessageLogSize, int Round, Step Step) nextState =
                (_messagesInRound.Sum(x => x.Value.Count), Round, Step);
            if (prevState != nextState)
            {
                _logger.Debug(
                    "State (MessageLogSize, Round, Step) changed from " +
                    "({PrevMessageLogSize}, {PrevRound}, {PrevStep}) to " +
                    "({NextMessageLogSize}, {NextRound}, {NextStep})",
                    prevState.MessageLogSize,
                    prevState.Round,
                    prevState.Step.ToString(),
                    nextState.MessageLogSize,
                    nextState.Round,
                    nextState.Step.ToString());
                StateChanged?.Invoke(
                    this, (nextState.MessageLogSize, nextState.Round, nextState.Step));

                // FIXME: This is to avoid an exception.
                // Methods accessing message log should be changed instead.
                if (_messagesInRound.ContainsKey(Round))
                {
                    ProduceMutation(() => ProcessGenericUponRules());
                }
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
            _logger.Debug(
                "TimeoutPropose has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            TimeoutOccurred?.Invoke(this, (Step.Propose, timeout));
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
            _logger.Debug(
                "TimeoutPreVote has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            TimeoutOccurred?.Invoke(this, (Step.PreVote, timeout));
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
            _logger.Debug(
                "TimeoutPreCommit has occurred in {Timeout}. {Info}",
                timeout,
                ToString());
            TimeoutOccurred?.Invoke(this, (Step.PreCommit, timeout));
            ProduceMutation(() => ProcessTimeoutPreCommit(round));
        }
    }
}
