using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// Starts the round #0 of consensus for <see cref="Height"/>.
        /// </summary>
        /// <param name="lastCommit">A <see cref="Block{T}.LastCommit"/> from previous block.
        /// </param>
        /// <returns>An awaitable task without value. This task
        /// awaits <see cref="StartRound"/> and starts <see cref="MessageConsumerTask"/>.
        /// </returns>
        public async Task StartAsync(BlockCommit? lastCommit = null)
        {
            _lastCommit = lastCommit;
            await StartRound(0);
            if (Proposer(0) != _privateKey.PublicKey &&
                _messagesInRound.ContainsKey(0) &&
                _messagesInRound[0].FirstOrDefault(msg => msg is ConsensusPropose) is
                    ConsensusPropose propose)
            {
                ProcessMessage(propose);
            }

            _ = MessageConsumerTask(_cancellationTokenSource.Token);
        }

        /// <summary>
        /// Consumes the every <see cref="ConsensusMessage"/> in the message queue.
        /// </summary>
        /// <param name="ctx">A cancellation token for reading message from message queue.</param>
        private async Task MessageConsumerTask(CancellationToken ctx)
        {
#if NETCOREAPP3_0 || NETCOREAPP3_1 || NET
            await foreach (ConsensusMessage message in _messageRequests.Reader.ReadAllAsync(ctx))
            {
#else
            while (!ctx.IsCancellationRequested)
            {
                ConsensusMessage message = await _messageRequests.Reader.ReadAsync(ctx);
#endif
                try
                {
                    HandleMessage(message);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Unexpected exception occurred during {FName}. {E}",
                        nameof(HandleMessage),
                        e);
                }
            }
        }

        /// <summary>
        /// A timeout task for a round if no <see cref="ConsensusPropose"/> is received in
        /// <see cref="TimeoutPropose"/> and <see cref="Libplanet.Net.Consensus.Step.Propose"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPropose(long height, int round)
        {
            TimeSpan timeout = TimeoutPropose(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.Propose)
            {
                _logger.Debug(
                    "TimeoutPropose has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.Propose, TimeoutPropose(round)));
                BroadcastMessage(
                    new ConsensusVote(Voting(Round, null, VoteFlag.Absent)));
                SetStep(Step.PreVote);
            }
        }

        /// <summary>
        /// A timeout task for a round if <see cref="ConsensusVote"/> is received +2/3 any but has
        /// no majority neither Block nor NIL in
        /// <see cref="TimeoutPreVote"/> and <see cref="Libplanet.Net.Consensus.Step.PreVote"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPreVote(long height, int round)
        {
            TimeSpan timeout = TimeoutPreVote(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.PreVote)
            {
                _logger.Debug(
                    "TimeoutPreVote has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.PreVote, TimeoutPreVote(round)));
                BroadcastMessage(
                    new ConsensusCommit(Voting(Round, null, VoteFlag.Commit)));
                SetStep(Step.PreCommit);
            }
        }

        /// <summary>
        /// A timeout task for a round if <see cref="ConsensusCommit"/> is received +2/3 any but has
        /// no majority neither Block or NIL in
        /// <see cref="TimeoutPreCommit"/> and <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>
        /// step.
        /// </summary>
        /// <param name="height">A height that the timeout task is scheduled for.</param>
        /// <param name="round">A round that the timeout task is scheduled for.</param>
        private async Task OnTimeoutPreCommit(long height, int round)
        {
            TimeSpan timeout = TimeoutPreCommit(round);
            await Task.Delay(timeout, _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step < Step.EndCommit)
            {
                _logger.Debug(
                    "TimeoutPreCommit has occurred in {Timeout}. {Info}",
                    timeout,
                    ToString());
                TimeoutOccurred?.Invoke(this, (Step.PreCommit, TimeoutPreCommit(round)));
                _ = StartRound(Round + 1);
            }
        }
    }
}
