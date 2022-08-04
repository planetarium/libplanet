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

        internal ConsensusPropose? GetPropose(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusPropose>().FirstOrDefault()
                    : null;
            }
        }

        internal List<ConsensusVote> GetVotes(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusVote>().ToList()
                    : new List<ConsensusVote>();
            }
        }

        internal List<ConsensusCommit> GetCommits(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].OfType<ConsensusCommit>().ToList()
                    : new List<ConsensusCommit>();
            }
        }

        internal int GetCount(int round)
        {
            lock (_lock)
            {
                return _log.ContainsKey(round)
                    ? _log[round].Count
                    : 0;
            }
        }

        internal int GetTotalCount()
        {
            lock (_lock)
            {
                return _log.Sum(x => x.Value.Count);
            }
        }
    }
}
