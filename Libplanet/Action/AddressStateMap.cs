using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Runtime.Serialization;

namespace Libplanet.Action
{
    [Serializable]
    public class AddressStateMap : IImmutableDictionary<Address, object>, ISerializable
    {
        private IImmutableDictionary<Address, object> _impl;

        public AddressStateMap()
            : this(new Dictionary<Address, object>().ToImmutableDictionary())
        {
        }

        public AddressStateMap(IImmutableDictionary<Address, object> impl)
        {
            _impl = impl;
        }

        protected AddressStateMap(SerializationInfo info, StreamingContext context)
        {
            var dict = new Dictionary<Address, object>();

            foreach (SerializationEntry entry in info)
            {
                dict[new Address(entry.Name)] = entry.Value;
            }

            _impl = dict.ToImmutableDictionary();
        }

        public IEnumerable<Address> Keys => _impl.Keys;

        public IEnumerable<object> Values => _impl.Values;

        public int Count => _impl.Count;

        public object this[Address key] => _impl[key];

        public IImmutableDictionary<Address, object> Add(Address key, object value)
        {
            return new AddressStateMap(_impl.Add(key, value));
        }

        public IImmutableDictionary<Address, object> AddRange(IEnumerable<KeyValuePair<Address, object>> pairs)
        {
            return new AddressStateMap(_impl.AddRange(pairs));
        }

        public IImmutableDictionary<Address, object> Clear()
        {
            return new AddressStateMap(_impl.Clear());
        }

        public bool Contains(KeyValuePair<Address, object> pair)
        {
            return _impl.Contains(pair);
        }

        public bool ContainsKey(Address key)
        {
            return _impl.ContainsKey(key);
        }

        public IEnumerator<KeyValuePair<Address, object>> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        public IImmutableDictionary<Address, object> Remove(Address key)
        {
            return new AddressStateMap(_impl.Remove(key));
        }

        public IImmutableDictionary<Address, object> RemoveRange(IEnumerable<Address> keys)
        {
            return new AddressStateMap(_impl.RemoveRange(keys));
        }

        public IImmutableDictionary<Address, object> SetItem(Address key, object value)
        {
            return new AddressStateMap(_impl.SetItem(key, value));
        }

        public IImmutableDictionary<Address, object> SetItems(IEnumerable<KeyValuePair<Address, object>> items)
        {
            return new AddressStateMap(_impl.SetItems(items));
        }

        public bool TryGetKey(Address equalKey, out Address actualKey)
        {
            return _impl.TryGetKey(equalKey, out actualKey);
        }

        public bool TryGetValue(Address key, out object value)
        {
            return _impl.TryGetValue(key, out value);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            foreach (var kv in this)
            {
                info.AddValue(kv.Key.ToHex(), kv.Value);
            }
        }
    }
}
