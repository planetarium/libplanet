using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Tests.Store
{
    public abstract class BaseTracker
    {
        private readonly List<StoreTrackLog> _logs;

        protected BaseTracker()
        {
            _logs = new List<StoreTrackLog>();
        }

        public IImmutableList<StoreTrackLog> Logs =>
            _logs.ToImmutableList();

        public void ClearLogs() => _logs.Clear();

        protected void Log(string method, params object[] @params)
        {
            _logs.Add(StoreTrackLog.Create(method, @params));
        }
    }
}
