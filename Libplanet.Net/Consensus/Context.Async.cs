using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

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
            _consensusMessageCommunicator.OnStartHeight(Height);
            ProduceMutation(() => StartRound(0));

            // FIXME: Exceptions inside tasks should be handled properly.
            _ = MessageConsumerTask(_cancellationTokenSource.Token);
            _ = MutationConsumerTask(_cancellationTokenSource.Token);
            _ = ProposalConsumerTask(_cancellationTokenSource.Token);
            _ = ProposalValidationConsumerTask(_cancellationTokenSource.Token);
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
        /// Consumes every <see cref="Libplanet.Consensus.Proposal"/> in proposal queue.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="Libplanet.Consensus.Proposal"/>s from the proposal queue.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task ProposalConsumerTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    await ConsumeProposal(cancellationToken);
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
                        nameof(ConsumeProposal));
                    ExceptionOccurred?.Invoke(this, e);
                    throw;
                }
            }
        }

        /// <summary>
        /// Consumes every <see cref="ProposalValidation"/> in proposal validation queue.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="ProposalValidation"/>s from the proposal validation queue.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task ProposalValidationConsumerTask(CancellationToken cancellationToken)
        {
            while (true)
            {
                try
                {
                    await ConsumeProposalValidation(cancellationToken);
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
                        nameof(ConsumeProposalValidation));
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
                    ProcessHeightOrRoundUponRules(message: message);
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
                Proposal?.BlockHash,
                GetProposalValidation() is ProposalValidation);
            mutation();
            var nextState = new ContextState(
                _heightVoteSet.Count,
                Height,
                Round,
                Step,
                Proposal?.BlockHash,
                GetProposalValidation() is ProposalValidation);
            while (!prevState.Equals(nextState))
            {
                _logger.Information(
                    "State (Proposal, VoteCount, Round, Step, ValidationExists) " +
                    "changed from " +
                    "({PrevProposal}, {PrevVoteCount}, {PrevRound}, {PrevStep}, " +
                    "{PrevValidationExists}) " +
                    "to " +
                    "({NextProposal}, {NextVoteCount}, {NextRound}, {NextStep}, " +
                    "{NextValidationExists})",
                    prevState.Proposal?.ToString() ?? "Null",
                    prevState.VoteCount,
                    prevState.Round,
                    prevState.Step,
                    prevState.ProposalValidationExists,
                    nextState.Proposal?.ToString() ?? "Null",
                    nextState.VoteCount,
                    nextState.Round,
                    nextState.Step,
                    nextState.ProposalValidationExists);
                StateChanged?.Invoke(this, nextState);
                prevState = new ContextState(
                    _heightVoteSet.Count,
                    Height,
                    Round,
                    Step,
                    Proposal?.BlockHash,
                    GetProposalValidation() is ProposalValidation);
                ProcessGenericUponRules();
                nextState = new ContextState(
                    _heightVoteSet.Count,
                    Height,
                    Round,
                    Step,
                    Proposal?.BlockHash,
                    GetProposalValidation() is ProposalValidation);
            }

            MutationConsumed?.Invoke(this, mutation);
        }

        /// <summary>
        /// Creates a new <see cref="Libplanet.Consensus.Proposal"/> to propose,
        /// and enqueue to proposal queue.
        /// This can be interrupted by <see cref="ProcessTimeoutPropose"/>.
        /// </summary>
        /// <param name="block"><see cref="Block"/> to propose.
        /// if <see langword="null"/>, creates new <see cref="Block"/>.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task Propose(Block? block = null)
        {
            CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
            TimeoutCancellationRegister(cancellationTokenSource, ConsensusStep.Propose);
            try
            {
                block ??= await Task.Run(() => _blockChain.ProposeBlock(_privateKey, _lastCommit));
                Proposal proposal = new ProposalMetadata(
                    Height,
                    Round,
                    DateTimeOffset.UtcNow,
                    _privateKey.PublicKey,
                    _codec.Encode(block.MarshalBlock()),
                    _validRound).Sign(_privateKey);

                await _proposalRequests.Writer.WriteAsync(proposal, cancellationTokenSource.Token);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Could not propose a block for height {Height} and round {Round}",
                    Height,
                    Round);
                ExceptionOccurred?.Invoke(this, e);
            }
        }

        /// <summary>
        /// Validates the given <paramref name="proposal"/>, and enque
        /// generated <see cref="ProposalValidation"/> to proposal validation queue.
        /// This can be interrupted by <see cref="ProcessTimeoutPropose"/>.
        /// </summary>
        /// <param name="proposal">A <see cref="Libplanet.Consensus.Proposal"/> to validate.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task ValidateProposal(Proposal proposal)
        {
            CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
            TimeoutCancellationRegister(cancellationTokenSource, ConsensusStep.Propose);

            (Block block, _) = UnmarshalProposal(proposal);

            (bool isValid, ImmutableArray<ICommittedActionEvaluation> evals) = await Task.Run(() =>
            {
                if (_proposalValidations.TryGet(block.Hash, out var cached))
                {
                    return (cached.IsValid, cached.Evaluations);
                }

                _blockChain._rwlock.EnterUpgradeableReadLock();

                if (block.Index != Height)
                {
                    return (false, ImmutableArray<ICommittedActionEvaluation>.Empty);
                }

                try
                {
                    _blockChain.ValidateBlock(block);
                    _blockChain.ValidateBlockNonces(
                        block.Transactions
                            .Select(tx => tx.Signer)
                            .Distinct()
                            .ToDictionary(
                                signer => signer,
                                signer => _blockChain.Store.GetTxNonce(
                                    _blockChain.Id, signer)),
                        block);

                    if (_blockChain.Policy.ValidateNextBlock(
                        _blockChain, block) is { } bpve)
                    {
                        throw bpve;
                    }

                    foreach (var tx in block.Transactions)
                    {
                        if (_blockChain.Policy.ValidateNextBlockTx(
                            _blockChain, tx) is { } txve)
                        {
                            throw txve;
                        }
                    }

                    _blockChain.ValidateBlockStateRootHash(
                        block,
                        out IReadOnlyList<ICommittedActionEvaluation> evaluations);
                    _logger.Information(
                        "Block #{Index} {Hash} is valid.",
                        block.Index,
                        block.Hash);
                    return (true, evaluations.ToImmutableArray());
                }
                catch (Exception e) when (
                    e is InvalidBlockException ||
                    e is InvalidTxException ||
                    e is InvalidActionException)
                {
                    _logger.Information(
                        e,
                        "Block #{Index} {Hash} is invalid",
                        block.Index,
                        block.Hash);
                    return (false, ImmutableArray<ICommittedActionEvaluation>.Empty);
                }
                finally
                {
                    _blockChain._rwlock.ExitUpgradeableReadLock();
                }
            });

            await _proposalValidationRequests.Writer.WriteAsync(
                new ProposalValidation(
                    proposal,
                    isValid,
                    evals),
                cancellationTokenSource.Token);
        }

        /// <summary>
        /// Consumes generated <see cref="Libplanet.Consensus.Proposal"/>, and
        /// publish <see cref="ConsensusProposalMsg"/>.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="Libplanet.Consensus.Proposal"/>s from the proposal queue.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task ConsumeProposal(CancellationToken cancellationToken)
        {
            Proposal proposal = await _proposalRequests.Reader.ReadAsync(cancellationToken);
            _blockChain.Store.PutBlock(UnmarshalProposal(proposal).Item1);
            PublishMessage(new ConsensusProposalMsg(proposal));
        }

        /// <summary>
        /// Consumes generated <see cref="ProposalValidation"/>, and cache it.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token for reading
        /// <see cref="ProposalValidation"/>s from the proposal validation queue.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task ConsumeProposalValidation(CancellationToken cancellationToken)
        {
            ProposalValidation validation
                = await _proposalValidationRequests.Reader.ReadAsync(cancellationToken);
            ProduceMutation(() => CacheProposalValidation(validation));
            ProduceMutation(() => ProcessHeightOrRoundUponRules(proposalValidation: validation));
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
                BlockHash? proposal,
                bool proposalValidationExists)
            {
                VoteCount = voteCount;
                Height = height;
                Round = round;
                Step = step;
                Proposal = proposal;
                ProposalValidationExists = proposalValidationExists;
            }

            public int VoteCount { get; }

            public long Height { get; }

            public int Round { get; }

            public ConsensusStep Step { get; }

            public BlockHash? Proposal { get; }

            public bool ProposalValidationExists { get; }

            public bool Equals(ContextState other)
            {
                return VoteCount == other.VoteCount &&
                       Round == other.Round &&
                       Step == other.Step &&
                       Proposal.Equals(other.Proposal) &&
                       ProposalValidationExists == other.ProposalValidationExists;
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
