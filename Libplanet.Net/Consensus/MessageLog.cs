using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// <para>
    /// A concurrent <see cref="Dictionary{TKey, TValue}"/> wrapper to be used
    /// for <see cref="Context{T}"/> with well-defined default behaviors.
    /// </para>
    /// <para>
    /// Note that <see cref="MessageLog"/> prevents adding multiple
    /// <see cref="ConsensusMsg"/>s for the same <see cref="Context{T}.Round"/> and
    /// the same validator.  See <see cref="MessageLog.Add"/> for more detail.
    /// </para>
    /// </summary>
    /// <seealso cref="MessageLog.Add"/>
    internal class MessageLog
    {
        private object _lock;

        private long _height;
        private List<PublicKey> _validators;
        private Dictionary<int, ConsensusProposalMsg> _proposes;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>> _preVotes;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>> _preCommits;

        internal MessageLog(long height, List<PublicKey> validators)
        {
            _height = height;
            _validators = validators;
            _proposes = new Dictionary<int, ConsensusProposalMsg>();
            _preVotes = new Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>>();
            _preCommits = new Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>>();
            _lock = new object();
        }

        /// <summary>
        /// Adds given <paramref name="message"/> to the collection.
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMsg"/> to add.</param>
        /// <exception cref="ArgumentException">Throw for any of the following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusProposalMsg"/> and
        ///     there is already a <see cref="ConsensusProposalMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreVoteMsg"/> and
        ///     there is already a <see cref="ConsensusPreVoteMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.Validator"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreCommitMsg"/> and
        ///     there is already a <see cref="ConsensusPreCommitMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.Validator"/>.
        /// </description></item>
        /// </list>
        /// </exception>
        internal void Add(ConsensusMsg message)
        {
            lock (_lock)
            {
                if (message.Height != _height)
                {
                    throw new ArgumentException(
                        $"Given {nameof(message)}'s height {message.Height} must be the same " +
                        $"as {nameof(MessageLog)}'s height {_height}.",
                        nameof(message));
                }
                else if (!_validators.Contains(message.Validator))
                {
                    throw new ArgumentException(
                        $"Given {nameof(message)}'s validator is not one of the validators for " +
                        $"height {_height}.",
                        nameof(message));
                }
                else if (message is ConsensusProposalMsg propose)
                {
                    if (_proposes.ContainsKey(propose.Round))
                    {
                        throw new ArgumentException(
                            $"Given {nameof(message)}'s round {propose.Round} already has " +
                            $"a proposal message.", nameof(message));
                    }
                    else
                    {
                        _proposes[propose.Round] = propose;
                    }
                }
                else if (message is ConsensusPreVoteMsg preVote)
                {
                    if (!_preVotes.ContainsKey(preVote.Round))
                    {
                        _preVotes[preVote.Round] =
                            new Dictionary<PublicKey, ConsensusPreVoteMsg>();
                    }

                    if (_preVotes[preVote.Round].ContainsKey(preVote.Validator))
                    {
                        throw new ArgumentException(
                            $"Given {nameof(message)}'s round {preVote.Round} already has " +
                            $"a prevote message from the validator {preVote.Validator}.",
                            nameof(message));
                    }
                    else
                    {
                        _preVotes[preVote.Round][preVote.Validator] = preVote;
                    }
                }
                else if (message is ConsensusPreCommitMsg preCommit)
                {
                    if (!_preCommits.ContainsKey(preCommit.Round))
                    {
                        _preCommits[preCommit.Round] =
                            new Dictionary<PublicKey, ConsensusPreCommitMsg>();
                    }

                    if (_preCommits[preCommit.Round].ContainsKey(preCommit.Validator))
                    {
                        throw new ArgumentException(
                            $"Given {nameof(message)}'s round {preCommit.Round} already has " +
                            $"a precommit message from the validator {preCommit.Validator}.",
                            nameof(message));
                    }
                    else
                    {
                        _preCommits[preCommit.Round][preCommit.Validator] = preCommit;
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Given {nameof(message)} is of unsupported type: {message.GetType()}",
                        nameof(message));
                }
            }
        }

        /// <summary>
        /// Gets the <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>
        /// if found, otherwise <see langword="null"/>.
        /// </returns>
        internal ConsensusProposalMsg? GetProposal(int round)
        {
            lock (_lock)
            {
                return _proposes.ContainsKey(round)
                    ? _proposes[round]
                    : null;
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreVoteMsg> GetPreVotes(int round)
        {
            lock (_lock)
            {
                return _preVotes.ContainsKey(round)
                    ? _preVotes[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreVoteMsg>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreCommitMsg> GetPreCommits(int round)
        {
            lock (_lock)
            {
                return _preCommits.ContainsKey(round)
                    ? _preCommits[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreCommitMsg>();
            }
        }

        /// <summary>
        /// Counts distinct validators for <see cref="ConsensusMsg"/>s in given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of distinct validators for <see cref="ConsensusMsg"/>s
        /// in given <paramref name="round"/>.
        /// </returns>
        internal int GetValidatorsCount(int round)
        {
            lock (_lock)
            {
                HashSet<PublicKey> validators = new HashSet<PublicKey>();

                if (_proposes.ContainsKey(round))
                {
                    validators.Add(_proposes[round].Validator);
                }

                return validators
                    .Union(_preVotes.ContainsKey(round)
                        ? _preVotes[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreVoteMsg>().Keys)
                    .Union(_preCommits.ContainsKey(round)
                        ? _preCommits[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreCommitMsg>().Keys)
                    .Count();
            }
        }

        /// <summary>
        /// Counts the total number of <see cref="ConsensusMsg"/>s in a log.
        /// </summary>
        /// <returns>The number of all <see cref="ConsensusMsg"/>s.</returns>
        internal int GetTotalCount()
        {
            lock (_lock)
            {
                return _proposes.Count +
                    _preVotes.Sum(pair => pair.Value.Count) +
                    _preCommits.Sum(pair => pair.Value.Count);
            }
        }
    }
}
