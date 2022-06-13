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

namespace Libplanet.Net.Consensus
{
    public class Consensus<T> : IDisposable
        where T : IAction, new()
    {
        private long _id;
        private PrivateKey _privateKey;
        private long _height;
        private int _round;
        private Step _step;
        private Block<T>? _lockedValue;
        private int _lockedRound;
        private Block<T>? _validValue;
        private int _validRound;
        private Dictionary<int, List<ConsensusMessage>> _messagesInRound;
        private List<int> _preVoteFlags;
        private List<int> _hasTwoThirdsPreVoteFlags;
        private List<int> _preCommitFlags;
        private Dictionary<long, Block<T>> _decisions;

        private BlockChain<T> _blockChain;
        private Codec _codec;
        private List<PublicKey> _validators;

        private CancellationTokenSource _cancellationTokenSource;

        public Consensus(BlockChain<T> blockChain, long id, PrivateKey privateKey, List<PublicKey> validators)
        {
            _id = id;
            _privateKey = privateKey;
            _height = 0;
            _round = 0;
            _step = Step.Default;
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
        }

        private enum Step
        {
            Default,
            Propose,
            PreVote,
            PreCommit,
        }

        private int TotalValidators => _validators.Count;

        public void Start()
        {
            _ = StartRound(0);
        }

        public void Dispose()
        {
            _cancellationTokenSource.Cancel();
        }

        private async Task<Block<T>> GetValue()
        {
            Block<T> block = await _blockChain.MineBlock(
                _privateKey,
                append: false,
                cancellationToken: _cancellationTokenSource.Token);
            return block;
        }

        private PublicKey Proposer(long height, int round)
        {
            // return designated proposer for the height round pair.
            return _validators[(int)((height + round) % TotalValidators)];
        }

        private async Task StartRound(int round)
        {
            _round = round;
            _step = Step.Propose;
            if (Proposer(_height, _round) == _privateKey.PublicKey)
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

                _ = BroadcastMessage(
                    new ConsensusPropose(
                        _id,
                        _height,
                        _round,
                        proposal.Hash,
                        _codec.Encode(proposal.MarshalBlock()),
                        _validRound));
            }
            else
            {
                _ = OnTimeoutPropose(_height, _round);
            }
        }

        public void HandleMessage(ConsensusMessage message)
        {
            AddMessage(message);
            if (HasProposeFromProposer(Proposer(_height, _round)) is
                    (Block<T> block1, int validRound1) &&
                validRound1 == -1 &&
                _step == Step.Propose)
            {
                if (IsValid(block1) && (_lockedRound == -1 || _lockedValue == block1))
                {
                    _ = BroadcastMessage(
                        new ConsensusVote(Voting(_height, _round, block1.Hash, VoteFlag.Absent)));
                }
                else
                {
                    _ = BroadcastMessage(
                        new ConsensusVote(Voting(_height, _round, null, VoteFlag.Absent)));
                }

                _step = Step.PreVote;
            }

            if (HasProposeFromProposer(Proposer(_height, _round)) is
                    (Block<T> block2, int validRound2) &&
                HasTwoThirdsPreVote(validRound2, block2.Hash) &&
                _step == Step.Propose &&
                validRound2 >= 0 &&
                validRound2 < _round)
            {
                if (IsValid(block2) && (_lockedRound <= validRound2 || _lockedValue == block2))
                {
                    _ = BroadcastMessage(
                        new ConsensusVote(Voting(_height, _round, block2.Hash, VoteFlag.Absent)));
                }
                else
                {
                    _ = BroadcastMessage(
                        new ConsensusVote(Voting(_height, _round, null, VoteFlag.Absent)));
                }

                _step = Step.PreVote;
            }

            if (HasTwoThirdsPreVote(_round, null, true) &&
                _step == Step.PreVote &&
                !_preVoteFlags.Contains(_round))
            {
                _preVoteFlags.Add(_round);
                _ = OnTimeoutPreVote(_height, _round);
            }

            if (HasProposeFromProposer(Proposer(_height, _round)) is (Block<T> block3, _) &&
                HasTwoThirdsPreVote(_round, block3.Hash) &&
                IsValid(block3) &&
                _step >= Step.PreVote &&
                _hasTwoThirdsPreVoteFlags.Contains(_round))
            {
                _hasTwoThirdsPreVoteFlags.Add(_round);
                if (_step == Step.PreVote)
                {
                    _lockedValue = block3;
                    _lockedRound = _round;
                    _ = BroadcastMessage(
                        new ConsensusCommit(Voting(_height, _round, block3.Hash, VoteFlag.Commit)));
                    _step = Step.PreCommit;
                }

                _validValue = block3;
                _validRound = _round;
            }

            if (HasTwoThirdsPreVote(_round, null) && _step == Step.PreVote)
            {
                _ = BroadcastMessage(
                    new ConsensusCommit(Voting(_height, _round, null, VoteFlag.Commit)));
                _step = Step.PreCommit;
            }

            if (HasTwoThirdsPreCommit(_round, null, true) && !_preCommitFlags.Contains(_round))
            {
                _preCommitFlags.Add(_round);
                _ = OnTimeoutPreCommit(_height, _round);
            }

            if (message is ConsensusPropose || message is ConsensusCommit)
            {
                int round = message.Round;
                if (HasProposeFromProposer(Proposer(_height, round)) is (Block<T> block4, _) &&
                    HasTwoThirdsPreCommit(round, block4.Hash) &&
                    !_decisions.ContainsKey(_height))
                {
                    if (IsValid(block4)){
                        _decisions[_height] = block4;
                        _height += 1;
                        _lockedRound = -1;
                        _lockedValue = null;
                        _validRound = -1;
                        _validValue = null;
                        _ = StartRound(0);
                    }
                }
            }

            // FIXME: _messagesInRound should not contain any duplicated messages for this.
            if (message.Round > _round &&
                _messagesInRound[message.Round].Count > TotalValidators / 3)
            {
                _ = StartRound(message.Round);
            }
        }

        private void AddMessage(ConsensusMessage message)
        {
            if (!_messagesInRound.ContainsKey(message.Round))
            {
                _messagesInRound.Add(message.Round, new List<ConsensusMessage>());
            }

            // TODO: Prevent duplicated messages adding.
            _messagesInRound[message.Round].Add(message);
        }

        private async Task BroadcastMessage(ConsensusMessage message)
        {
            // broadcast message
            await Task.Yield();
        }

        private bool IsValid(Block<T> block)
        {
            var exception = _blockChain.ValidateNextBlock(block);
            return exception is null;
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
            ConsensusMessage? msg = _messagesInRound[_round].Find(
                msg =>
                    msg is ConsensusPropose propose &&
                    (bool)propose.Remote?.PublicKey.Equals(proposer));
            if (msg is ConsensusPropose consensusPropose)
            {
                var block = BlockMarshaler.UnmarshalBlock<T>(
                    _blockChain.Policy.GetHashAlgorithm,
                    (Dictionary)_codec.Decode(consensusPropose.Payload));
                return (block, consensusPropose.ValidRound);
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
            if (height == _height && round == _round && _step == Step.Propose)
            {
                await BroadcastMessage(
                    new ConsensusVote(Voting(_height, _round, null, VoteFlag.Absent)));
                _step = Step.PreVote;
            }
        }

        private async Task OnTimeoutPreVote(long height, int round)
        {
            await Task.Delay(TimeoutPreVote(round), _cancellationTokenSource.Token);
            if (height == _height && round == _round && _step == Step.PreVote)
            {
                await BroadcastMessage(
                    new ConsensusCommit(Voting(_height, _round, null, VoteFlag.Commit)));
                _step = Step.PreCommit;
            }
        }

        private async Task OnTimeoutPreCommit(long height, int round)
        {
            await Task.Delay(TimeoutPreCommit(round), _cancellationTokenSource.Token);
            if (height == _height && round == _round)
            {
                await StartRound(_round + 1);
            }
        }

        private TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(3 + round);
        }

        private TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(3 + round);
        }

        private TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(3 + round);
        }
    }
}
