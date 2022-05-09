using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Net.Consensus
{
    public class BaseStore<T>
    {
        private List<T> _store;

        public BaseStore()
        {
            _store = new List<T>();
        }

        public void Add(T data)
        {
            _store.Add(data);
        }

        public string Seek()
        {
            return string.Join(", ", _store.Select(x => x?.ToString()));
        }

        public ImmutableArray<T> ToImmutableArray() => _store.ToImmutableArray();
    }
}
