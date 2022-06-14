using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class Context<T> : IDisposable
        where T : IAction, new()
    {
        private long _id;
        private PrivateKey _privateKey;
        private Block<T>? _lockedValue;
        private int _lockedRound;
        private Block<T>? _validValue;
        private int _validRound;
        private Dictionary<int, List<ConsensusMessage>> _messagesInRound;
        private List<int> _preVoteFlags;
        private List<int> _hasTwoThirdsPreVoteFlags;
        private List<int> _preCommitFlags;
        private Dictionary<long, Block<T>> _decisions;
        private Dictionary<long, VoteSet> _voteSets;

        private BlockChain<T> _blockChain;
        private Codec _codec;
        private List<PublicKey> _validators;

        private CancellationTokenSource _cancellationTokenSource;

        public Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long id,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators)
        {
            _id = id;
            _privateKey = privateKey;
            Height = height;
            Round = 0;
            Step = Step.Default;
            _lockedValue = null;
            _lockedRound = -1;
            _validValue = null;
            _validRound = -1;
            _blockChain = blockChain;
            _codec = new Codec();
            _messagesInRound = new Dictionary<int, List<ConsensusMessage>>();
            _preVoteFlags = new List<int>();
            _hasTwoThirdsPreVoteFlags = new List<int>();
            _preCommitFlags = new List<int>();
            _validators = validators;
            _decisions = new Dictionary<long, Block<T>>();
            _cancellationTokenSource = new CancellationTokenSource();
            ConsensusContext = consensusContext;
            _voteSets = new Dictionary<long, VoteSet>();
        }

        public long Height { get; }

        public int Round { get; private set; }

        public Step Step { get; private set; }

        private ConsensusContext<T> ConsensusContext { get; }

        private int TotalValidators => _validators.Count;

        public void Start()
        {
            _ = StartRound(0);
        }

        public void Dispose()
        {
            _cancellationTokenSource.Cancel();
        }

        public VoteSet? VoteSet(long round) =>
            _voteSets.ContainsKey(round) ? _voteSets[round] : null;

        public void HandleMessage(ConsensusMessage message)
        {
            AddMessage(message);
            Log.Debug(
                "Height: {Height}, Round: {Round}, NodeId: {NodeId}, Step: {Step}, " +
                "MessageCount: {Count}, {Message}",
                Height,
                Round,
                _id,
                Step,
                _messagesInRound[Round].Count,
                message);

            if (HasProposeFromProposer(Proposer(Height, Round)) is
                    (Block<T> block1, int validRound1) &&
                validRound1 == -1 &&
                Step == Step.Propose)
            {
                Step = Step.PreVote;

                if (IsValid(block1) && (_lockedRound == -1 || _lockedValue == block1))
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Height, Round, block1.Hash, VoteFlag.Absent)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Height, Round, null, VoteFlag.Absent)));
                }
            }

            if (HasProposeFromProposer(Proposer(Height, Round)) is
                    (Block<T> block2, int validRound2) &&
                validRound2 >= 0 &&
                validRound2 < Round &&
                HasTwoThirdsPreVote(validRound2, block2.Hash) &&
                Step == Step.Propose)
            {
                Step = Step.PreVote;

                if (IsValid(block2) && (_lockedRound <= validRound2 || _lockedValue == block2))
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Height, Round, block2.Hash, VoteFlag.Absent)));
                }
                else
                {
                    BroadcastMessage(
                        new ConsensusVote(Voting(Height, Round, null, VoteFlag.Absent)));
                }
            }

            if (HasTwoThirdsPreVote(Round, null, true) &&
                Step == Step.PreVote &&
                !_preVoteFlags.Contains(Round))
            {
                _preVoteFlags.Add(Round);
                _ = OnTimeoutPreVote(Height, Round);
            }

            if (HasProposeFromProposer(Proposer(Height, Round)) is (Block<T> block3, _) &&
                HasTwoThirdsPreVote(Round, block3.Hash) &&
                IsValid(block3) &&
                Step >= Step.PreVote &&
                !_hasTwoThirdsPreVoteFlags.Contains(Round))
            {
                _hasTwoThirdsPreVoteFlags.Add(Round);
                if (Step == Step.PreVote)
                {
                    Step = Step.PreCommit;
                    _lockedValue = block3;
                    _lockedRound = Round;
                    BroadcastMessage(
                        new ConsensusCommit(Voting(Height, Round, block3.Hash, VoteFlag.Commit)));
                }

                _validValue = block3;
                _validRound = Round;
            }

            if (HasTwoThirdsPreVote(Round, null) && Step == Step.PreVote)
            {
                Step = Step.PreCommit;
                BroadcastMessage(
                    new ConsensusCommit(Voting(Height, Round, null, VoteFlag.Commit)));
            }

            if (HasTwoThirdsPreCommit(Round, null, true) && !_preCommitFlags.Contains(Round))
            {
                _preCommitFlags.Add(Round);
                _ = OnTimeoutPreCommit(Height, Round);
            }

            if (message is ConsensusPropose || message is ConsensusCommit)
            {
                int round = message.Round;
                if (HasProposeFromProposer(Proposer(Height, round)) is (Block<T> block4, _) &&
                    HasTwoThirdsPreCommit(round, block4.Hash) &&
                    !_decisions.ContainsKey(Height) && IsValid(block4))
                {
                    _decisions[Height] = block4;
                    _lockedRound = -1;
                    _lockedValue = null;
                    _validRound = -1;
                    _validValue = null;

                    ConsensusContext.Commit(block4);
                }
            }

            // FIXME: _messagesInRound should not contain any duplicated messages for this.
            if (message.Round > Round &&
                _messagesInRound[message.Round].Count > TotalValidators / 3)
            {
                _ = StartRound(message.Round);
            }
        }

        private async Task<Block<T>> GetValue()
        {
            Block<T> block = await _blockChain.MineBlock(
                _privateKey,
                append: false,
                cancellationToken: _cancellationTokenSource.Token);
            _blockChain.Store.PutBlock(block);
            return block;
        }

        private PublicKey Proposer(long height, int round)
        {
            // return designated proposer for the height round pair.
            // returne _validators[(int)((height + round) % TotalValidators)]
            return _privateKey.PublicKey;
        }

        private async Task StartRound(int round)
        {
            Round = round;
            Step = Step.Propose;
            if (Proposer(Height, Round) == _privateKey.PublicKey)
            {
                Block<T> proposal;
                if (_validValue is null)
                {
                    proposal = await GetValue();
                }
                else
                {
                    proposal = _validValue;
                }

                BroadcastMessage(
                    new ConsensusPropose(
                        _id,
                        Height,
                        Round,
                        proposal.Hash,
                        _codec.Encode(proposal.MarshalBlock()),
                        _validRound));
            }
            else
            {
                _ = OnTimeoutPropose(Height, Round);
            }
        }

        private void AddMessage(ConsensusMessage message)
        {
            if (!_messagesInRound.ContainsKey(message.Round))
            {
                _messagesInRound.Add(message.Round, new List<ConsensusMessage>());
            }

            if (!(message is ConsensusPropose) && !_voteSets.ContainsKey(message.Round))
            {
                var (block, _) = HasProposeFromProposer(Proposer(message.Height, message.Round));

                if (block is null)
                {
                    throw new InvalidMessageException(
                        $"{nameof(AddMessage)}: Received vote for round that not exists.",
                        message);
                }

                _voteSets.Add(
                    message.Round,
                    new VoteSet(message.Height, message.Round, block.Hash, _validators));
            }

            // TODO: Prevent duplicated messages adding.
            var ret = message switch
            {
                ConsensusVote vote => _voteSets[vote.Round].Add(vote.ProposeVote),
                ConsensusCommit commit => _voteSets[commit.Round].Add(commit.CommitVote),
                _ => true,
            };

            if (!ret)
            {
                throw new InvalidMessageException(
                    $"{nameof(AddMessage)}: Vote is invalid.",
                    message);
            }

            _messagesInRound[message.Round].Add(message);
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            ConsensusContext.BroadcastMessage(message);
        }

        private bool IsValid(Block<T> block)
        {
            /*
            var exception = _blockChain.ValidateNextBlock(block)
            return exception is null
            */
            return true;
        }

        private Vote Voting(long height, int round, BlockHash? hash, VoteFlag flag)
        {
            return new Vote(
                height,
                round,
                hash,
                DateTimeOffset.Now,
                _privateKey.PublicKey,
                flag,
                _id,
                null).Sign(_privateKey);
        }

        // Predicates
        private (Block<T>?, int?) HasProposeFromProposer(PublicKey proposer)
        {
            ConsensusMessage? msg = _messagesInRound[Round].Find(
                msg =>
                    msg is ConsensusPropose &&
                    proposer.Equals(msg.Remote!.PublicKey));

            if (msg is ConsensusPropose propose)
            {
                var block = BlockMarshaler.UnmarshalBlock<T>(
                    _blockChain.Policy.GetHashAlgorithm,
                    (Dictionary)_codec.Decode(propose.Payload));
                return (block, propose.ValidRound);
            }

            return (null, null);
        }

        private bool HasTwoThirdsPreVote(int round, BlockHash? hash, bool any = false)
        {
            int count = _messagesInRound[round].Count(
                msg => msg is ConsensusVote preVote &&
                       (any || preVote.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }

        private bool HasTwoThirdsPreCommit(int round, BlockHash? hash, bool any = false)
        {
            int count = _messagesInRound[round].Count(
                msg => msg is ConsensusCommit preCommit &&
                       (any || preCommit.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }

        // Timeouts
        private async Task OnTimeoutPropose(long height, int round)
        {
            await Task.Delay(TimeoutPropose(round), _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.Propose)
            {
                BroadcastMessage(
                    new ConsensusVote(Voting(Height, Round, null, VoteFlag.Absent)));
                Step = Step.PreVote;
            }
        }

        private async Task OnTimeoutPreVote(long height, int round)
        {
            await Task.Delay(TimeoutPreVote(round), _cancellationTokenSource.Token);
            if (height == Height && round == Round && Step == Step.PreVote)
            {
                BroadcastMessage(
                    new ConsensusCommit(Voting(Height, Round, null, VoteFlag.Commit)));
                Step = Step.PreCommit;
            }
        }

        private async Task OnTimeoutPreCommit(long height, int round)
        {
            await Task.Delay(TimeoutPreCommit(round), _cancellationTokenSource.Token);
            if (height == Height && round == Round)
            {
                await StartRound(Round + 1);
            }
        }

        private TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(3999 + round);
        }

        private TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(3999 + round);
        }

        private TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(3999 + round);
        }
    }
}
