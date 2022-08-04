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
        private Dictionary<int, HashSet<ConsensusMessage>> _log;
        private object _lock;

        internal MessageLog()
        {
            _log = new Dictionary<int, HashSet<ConsensusMessage>>();
            _lock = new object();
        }

        internal void Add(ConsensusMessage message)
        {
            lock (_lock)
            {
                int round = message.Round;
                if (!_log.ContainsKey(round))
                {
                    _log.Add(round, new HashSet<ConsensusMessage>());
                }

                _log[round].Add(message);
            }
        }

        /// <summary>
        /// Gets the <see cref="ConsensusPropose"/> for given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The <see cref="ConsensusPropose"/> corresponding to <paramref name="round"/>
        /// if found, otherwise <c>null</c>.</returns>
        internal ConsensusPropose? GetPropose(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusPropose>().FirstOrDefault()
                    : null;
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusVote"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusVote"/>s in <paramref name="round"/> given.</returns>
        internal List<ConsensusVote> GetVotes(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusVote>().ToList()
                    : new List<ConsensusVote>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusCommit"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusCommit"/>s in <paramref name="round"/> given.</returns>
        internal List<ConsensusCommit> GetCommits(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusCommit>().ToList()
                    : new List<ConsensusCommit>();
            }
        }

        /// <summary>
        /// Counts how many <see cref="ConsensusMessage"/>s are in a log for given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of <see cref="ConsensusMessage"/>s in <paramref name="round"/>.
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
        /// Counts the total number of <see cref="ConsensusMessage"/>s in a log.
        /// </summary>
        /// <returns>The number of all <see cref="ConsensusMessage"/>s.</returns>
        internal int GetTotalCount()
        {
            lock (_lock)
            {
                return _log.Sum(x => x.Value.Count);
            }
        }
    }
}
