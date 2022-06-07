using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text.Json;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Store;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusContext<T>
        where T : IAction, new()
    {
        public const long TimeoutMillisecond = 10 * 1000;

        private readonly BlockChain<T> _blockChain;
        private readonly ILogger _logger;
        private readonly List<PublicKey> _validators;
        private readonly object _commitLock;
        private readonly PrivateKey _privateKey;

        private ConcurrentDictionary<(long, long), RoundContext<T>> _roundContexts;
        private ConcurrentDictionary<long, long> _commitedRound;

        public ConsensusContext(
            long nodeId,
            PrivateKey privateKey,
            List<PublicKey> validators,
            BlockChain<T> blockChain)
        {
            if (validators.Count <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validators),
                    $"Number of validator should be greater than 0. ({validators.Count} is given)");
            }

            NodeId = nodeId;
            Height = blockChain.Tip.Index + 1;
            Round = 0;
            _blockChain = blockChain;
            _validators = validators;
            _privateKey = privateKey;
            _commitLock = new object();
            _roundContexts = new ConcurrentDictionary<(long, long), RoundContext<T>>
            {
                [(Height, Round)] = new RoundContext<T>(NodeId, validators, Height, Round),
            };
            _commitedRound = new ConcurrentDictionary<long, long>();

            VoteSets = new Dictionary<long, VoteSet?>();
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<ConsensusContext<T>>()
                .ForContext("Source", nameof(ConsensusContext<T>));
        }

        /// <summary>
        /// Indicates current height of block.
        /// </summary>
        public long Height { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long Round { get; internal set; }

        /// <summary>
        /// Indicates current round.
        /// </summary>
        public long NodeId { get; internal set; }

        /// <summary>
        /// The HashAlgorithm used in <see cref="BlockChain{T}"/>.
        /// </summary>
        public HashAlgorithmGetter HashAlgorithm => _blockChain.Policy.GetHashAlgorithm;

        public RoundContext<T> CurrentRoundContext => RoundContextOf(Height, Round);

        // FIXME: Storing all voteset on memory is not required. Leave only 1~2 votesets.
        public Dictionary<long, VoteSet?> VoteSets { get; }

        public void CommitBlock(long height, long round, BlockHash hash)
        {
            // Unlike round, lock is required because block append may take time.
            lock (_commitLock)
            {
                if (height != Height)
                {
                    // Duplicated or invalid commit attempt, do nothing.
                    return;
                }

                _logger.Debug(
                    "Commit block {Hash} from #{Before} to #{After} in node id {Id}.",
                    Height,
                    Height + 1,
                    hash,
                    NodeId);

                Block<T> block = _blockChain.Store.GetBlock<T>(
                    _blockChain.Policy.GetHashAlgorithm,
                    hash);

                try
                {
                    _blockChain.Append(block);
                }
                catch (NullReferenceException)
                {
                    throw new CommitBlockNotExistsException(CurrentRoundContext.VoteSet);
                }
                catch (Exception e) when (e is BlockPolicyViolationException ||
                                          e is InvalidBlockException ||
                                          e is InvalidTxNonceException)
                {
                    _logger.Error(
                        "{MethodName}: Invalid block {BlockHash} is locked for current " +
                        "Round {Round} and Height {Height} passed into the commit stage",
                        nameof(CommitBlock),
                        CurrentRoundContext.BlockHash,
                        Round,
                        Height);

                    throw new ArgumentException(
                        "Invalid block is locked for current round and passed into the " +
                        "commit stage.");
                }

                _logger.Debug(
                    "Commited block {Hash} from #{Before} to #{After} in node id {Id}.",
                    Height,
                    Height + 1,
                    hash,
                    NodeId);
                _commitedRound[height] = round;
                Height++;
                Round = 0;
            }
        }

        /// <inheritdoc cref="IStore.ContainsBlock"/>
        public bool ContainsBlock(BlockHash blockHash) =>
            _blockChain.Store.ContainsBlock(blockHash);

        /// <inheritdoc cref="IStore.GetBlock{T}"/>
        public Block<T>? GetBlockFromStore(BlockHash blockHash) =>
            _blockChain.Store.GetBlock<T>(HashAlgorithm, blockHash);

        /// <inheritdoc cref="IStore.PutBlock{T}"/>
        public void PutBlockToStore(Block<T> block) =>
            _blockChain.Store.PutBlock(block);

        public long CommitedRound(long height) =>
            _commitedRound.ContainsKey(height) ? _commitedRound[height] : -1;

        public long NextRound(long round)
        {
            if (round != Round)
            {
                // Duplicated or invalid attempt, do nothing.
                return Round;
            }

            _logger.Debug(
                "Increase round from {Before} to {After} in node id {Id}",
                Round,
                Round + 1,
                NodeId);
            Round += 1;

            // NOTE: Reusing existing round context is valid?
            // FIXME: Should not re-create RoundContext. Instead, use new vote set.
            if (!_roundContexts.ContainsKey((Height, Round)))
            {
                _roundContexts[(Height, Round)] = new RoundContext<T>(
                    NodeId,
                    _validators,
                    Height,
                    Round);
            }

            return Round;
        }

        public RoundContext<T> RoundContextOf(long height, long round)
        {
            if (!_roundContexts.ContainsKey((height, round)))
            {
                _roundContexts[(height, round)] = new RoundContext<T>(
                    NodeId,
                    _validators,
                    Height,
                    round);
            }

            return _roundContexts[(height, round)];
        }

        public Vote SignVote(Vote vote)
        {
            return vote.Sign(_privateKey);
        }

        public ConsensusMessage? HandleMessage(ConsensusMessage message)
        {
            var roundContext = RoundContextOf(message.Height, message.Round).State;
            _logger.Debug($"{nameof(HandleMessage)} -> " +
                          $"{ToString()}");

            ConsensusMessage? res = null;
            try
            {
                res = roundContext.Handle(this, message);
            }
            catch (Exception e)
            {
                _logger.Error(e, "Handle throws exception: {E}", e);
            }

            return res;
        }

        public override string ToString()
        {
            var message = new Dictionary<string, object>
            {
                { "node_id", NodeId },
                { "number_of_validator", _validators.Count },
                { "height", Height },
                { "round", Round },
                { "step", CurrentRoundContext.State.Name },
            };
            return JsonSerializer.Serialize(message);
        }
    }
}
