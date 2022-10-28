using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// <para>
    /// An exception free concurrent <see cref="Dictionary{TKey, TValue}"/> wrapper
    /// to be used for <see cref="Context{T}"/> with well-defined default behaviors.
    /// </para>
    /// <para>
    /// This presumably only contains <see cref="ConsensusMsg"/>s from valid validators for
    /// a certain <see cref="BlockCommit.Height"/>.  It is the responsibility of the
    /// <see cref="Context{T}"/> that owns the instance of <see cref="MessageLog"/> to
    /// conform to these requirements, i.e. <see cref="MessageLog"/> class is not responsible
    /// for checking validators nor <see cref="ConsensusMsg.Height"/>.
    /// </para>
    /// <para>
    /// Note that it is possible for <see cref="MessageLog"/> to contain multiple
    /// <see cref="ConsensusMsg"/>s for the same <see cref="Context{T}.Round"/> and
    /// the same validator.
    /// </para>
    /// </summary>
    internal class MessageLog
    {
        private Dictionary<int, HashSet<ConsensusMsg>> _log;
        private object _lock;

        internal MessageLog()
        {
            _log = new Dictionary<int, HashSet<ConsensusMsg>>();
            _lock = new object();
        }

        internal void Add(ConsensusMsg message)
        {
            lock (_lock)
            {
                int round = message.Round;
                if (!_log.ContainsKey(round))
                {
                    _log.Add(round, new HashSet<ConsensusMsg>());
                }

                _log[round].Add(message);
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusProposalMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusProposalMsg"/>'s in given <paramref name="round"/>.
        /// </returns>
        /// <remarks>
        /// There can be multiple <see cref="ConsensusProposalMsg"/>s in given
        /// <paramref name="round"/>.
        /// </remarks>
        internal List<ConsensusProposalMsg> GetProposes(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusProposalMsg>().ToList()
                    : new List<ConsensusProposalMsg>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        /// <remarks>
        /// There can be multiple <see cref="ConsensusPreVoteMsg"/>s from the same validator.
        /// </remarks>
        internal List<ConsensusPreVoteMsg> GetPreVotes(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusPreVoteMsg>().ToList()
                    : new List<ConsensusPreVoteMsg>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        /// <remarks>
        /// There can be multiple <see cref="ConsensusPreCommitMsg"/>s from the same validator.
        /// </remarks>
        internal List<ConsensusPreCommitMsg> GetPreCommits(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusPreCommitMsg>().ToList()
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
                return _log.ContainsKey(round)
                    ? _log[round]
                        .Select(message => message.Validator)
                        .Distinct()
                        .Count()
                    : 0;
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
                return _log.Sum(x => x.Value.Count);
            }
        }
    }
}
