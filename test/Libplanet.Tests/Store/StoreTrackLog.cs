using System;
using System.Linq;

namespace Libplanet.Tests.Store
{
    public sealed class StoreTrackLog : IEquatable<StoreTrackLog>
    {
        private StoreTrackLog(string method, object[] @params)
        {
            Method = method;
            Params = @params;
        }

        public string Method { get; }

        public object[] Params { get; }

        public static StoreTrackLog Create(string method, params object[] @params)
        {
            return new StoreTrackLog(method, @params);
        }

        public bool Equals(StoreTrackLog trackLog)
        {
            return !(trackLog is null) && trackLog.Method == Method &&
                   trackLog.Params.SequenceEqual(Params);
        }
    }
}
