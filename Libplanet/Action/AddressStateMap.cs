using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Runtime.Serialization;

namespace Libplanet.Action
{
    /// <summary>
    /// An immutable key&#x2013;value data structure to represent states of
    /// multiple accounts.  Keys are an account <see cref="Address"/>,
    /// and values are their state.
    /// <para>Since this implements <see
    /// cref="System.Collections.Immutable.IImmutableDictionary{TKey,TValue}"/>
    /// interface, the usage is same.</para>
    /// </summary>
    [Serializable]
    public class AddressStateMap
        : IImmutableDictionary<Address, object>, ISerializable
    {
        private IImmutableDictionary<Address, object> _impl;

        /// <summary>
        /// Creates an empty map.
        /// </summary>
        public AddressStateMap()
            : this(new Dictionary<Address, object>().ToImmutableDictionary())
        {
        }

        /// <summary>
        /// Creates a new map from the items of the
        /// <paramref name="dictionary"/>.
        /// </summary>
        /// <param name="dictionary">A dictionary of items to
        /// fill the new map with.</param>
        public AddressStateMap(IImmutableDictionary<Address, object> dictionary)
        {
            _impl = dictionary;
        }

        protected AddressStateMap(
            SerializationInfo info,
            StreamingContext context
        )
        {
            var dict = new Dictionary<Address, object>();

            foreach (SerializationEntry entry in info)
            {
                dict[new Address(entry.Name)] = entry.Value;
            }

            _impl = dict.ToImmutableDictionary();
        }

        /// <inheritdoc />
        public IEnumerable<Address> Keys => _impl.Keys;

        /// <inheritdoc />
        public IEnumerable<object> Values => _impl.Values;

        /// <inheritdoc />
        public int Count => _impl.Count;

        /// <inheritdoc />
        public object this[Address key] => _impl[key];

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> Add(
            Address key,
            object value
        )
        {
            return new AddressStateMap(_impl.Add(key, value));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> AddRange(
            IEnumerable<KeyValuePair<Address, object>> pairs
        )
        {
            return new AddressStateMap(_impl.AddRange(pairs));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> Clear()
        {
            return new AddressStateMap(_impl.Clear());
        }

        /// <inheritdoc />
        public bool Contains(KeyValuePair<Address, object> pair)
        {
            return _impl.Contains(pair);
        }

        /// <inheritdoc />
        public bool ContainsKey(Address key)
        {
            return _impl.ContainsKey(key);
        }

        /// <inheritdoc />
        public IEnumerator<KeyValuePair<Address, object>> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> Remove(Address key)
        {
            return new AddressStateMap(_impl.Remove(key));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> RemoveRange(
            IEnumerable<Address> keys
        )
        {
            return new AddressStateMap(_impl.RemoveRange(keys));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> SetItem(
            Address key,
            object value
        )
        {
            return new AddressStateMap(_impl.SetItem(key, value));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, object> SetItems(
            IEnumerable<KeyValuePair<Address, object>> items
        )
        {
            return new AddressStateMap(_impl.SetItems(items));
        }

        /// <inheritdoc />
        public bool TryGetKey(Address equalKey, out Address actualKey)
        {
            return _impl.TryGetKey(equalKey, out actualKey);
        }

        /// <inheritdoc />
        public bool TryGetValue(Address key, out object value)
        {
            return _impl.TryGetValue(key, out value);
        }

        /// <inheritdoc />
        IEnumerator IEnumerable.GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        /// <inheritdoc />
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            foreach (var kv in this)
            {
                info.AddValue(kv.Key.ToHex(), kv.Value);
            }
        }
    }
}
