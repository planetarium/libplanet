using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// A volitile read-only <see cref="IKeyValueStore"/>.  This is mainly a thinly wrapped
    /// <see cref="IKeyValueStore"/> and it is read-only in the sense that it does not make
    /// any changes to the underlying internal <see cref="IKeyValueStore"/> that it is given.
    /// </summary>
    /// <remarks>
    /// Deletion of keys is not supported.
    /// </remarks>
    public class VolatileKeyValueStore : IKeyValueStore, IDisposable
    {
        private IKeyValueStore _base;
        private ConcurrentDictionary<KeyBytes, byte[]> _delta;
        private bool _disposed;

        internal VolatileKeyValueStore(IKeyValueStore baseKeyValueStore)
        {
            _base = baseKeyValueStore;
            _delta = new ConcurrentDictionary<KeyBytes, byte[]>();
            _disposed = false;
        }

        /// <inheritdoc cref="IKeyValueStore.Get"/>
        public byte[] Get(in KeyBytes key)
        {
            return _delta.TryGetValue(key, out var value)
                ? value
                : _base.Get(key);
        }

        /// <inheritdoc cref="IKeyValueStore.Get"/>
        public IReadOnlyDictionary<KeyBytes, byte[]> Get(IEnumerable<KeyBytes> keys)
        {
            IEnumerable<KeyBytes> distinct = keys.Distinct();
            IEnumerable<KeyValuePair<KeyBytes, byte[]>> fromDelta = distinct
                .Where(key => _delta.ContainsKey(key))
                .Select(key => new KeyValuePair<KeyBytes, byte[]>(key, _delta[key]));
            IEnumerable<KeyValuePair<KeyBytes, byte[]>> fromBase = _base.Get(
                distinct.Where(key => !_delta.ContainsKey(key)));

            return fromDelta.Concat(fromBase).ToImmutableDictionary();
        }

        /// <inheritdoc cref="IKeyValueStore.Set"/>
        public void Set(in KeyBytes key, byte[] value)
        {
            _delta[key] = value;
        }

        /// <inheritdoc cref="IKeyValueStore.Set"/>
        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            foreach (var kv in values)
            {
                _delta[kv.Key] = kv.Value;
            }
        }

        /// <inheritdoc cref="IKeyValueStore.Delete"/>
        public void Delete(in KeyBytes key)
        {
            throw new NotSupportedException();
        }

        /// <inheritdoc cref="IKeyValueStore.Delete"/>
        public void Delete(IEnumerable<KeyBytes> keys)
        {
            throw new NotSupportedException();
        }

        /// <inheritdoc cref="IKeyValueStore.Exists"/>
        public bool Exists(in KeyBytes key)
        {
            return _delta.ContainsKey(key) || _base.Exists(key);
        }

        /// <inheritdoc cref="IKeyValueStore.ListKeys"/>
        public IEnumerable<KeyBytes> ListKeys()
        {
            return _delta.Keys.Concat(_base.ListKeys()).Distinct();
        }

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            if (!_disposed)
            {
                _base.Dispose();
                _disposed = true;
            }
        }
    }
}
