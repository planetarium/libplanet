using System.Collections.Generic;
using System.Linq;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception free concurrent <see cref="Dictionary{TKey, TValue}"/> wrapper
    /// to be used for <see cref="Context{T}"/> with well-defined default behaviors.
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
        /// Gets the <see cref="ConsensusProposeMsg"/> for given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The <see cref="ConsensusProposeMsg"/> corresponding to <paramref name="round"/>
        /// if found, otherwise <c>null</c>.</returns>
        internal ConsensusProposeMsg? GetPropose(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusProposeMsg>().FirstOrDefault()
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
        /// Counts how many <see cref="ConsensusMsg"/>s are in a log for given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of <see cref="ConsensusMsg"/>s in <paramref name="round"/>.
        /// </returns>
        internal int GetCount(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].Count
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
