using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Runtime.Serialization;
using Bencodex.Types;

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
        : IImmutableDictionary<Address, IValue>, ISerializable
    {
        private IImmutableDictionary<Address, IValue> _impl;

        /// <summary>
        /// Creates an empty map.
        /// </summary>
        public AddressStateMap()
            : this(new Dictionary<Address, IValue>().ToImmutableDictionary())
        {
        }

        /// <summary>
        /// Creates a new map from the items of the
        /// <paramref name="dictionary"/>.
        /// </summary>
        /// <param name="dictionary">A dictionary of items to
        /// fill the new map with.</param>
        public AddressStateMap(IImmutableDictionary<Address, IValue> dictionary)
        {
            _impl = dictionary;
        }

        protected AddressStateMap(
            SerializationInfo info,
            StreamingContext context
        )
        {
            var dict = new Dictionary<Address, IValue>();

            foreach (SerializationEntry entry in info)
            {
                dict[new Address(entry.Name)] = (IValue)entry.Value;
            }

            _impl = dict.ToImmutableDictionary();
        }

        /// <inheritdoc />
        public IEnumerable<Address> Keys => _impl.Keys;

        /// <inheritdoc />
        public IEnumerable<IValue> Values => _impl.Values;

        /// <inheritdoc />
        public int Count => _impl.Count;

        /// <inheritdoc />
        public IValue this[Address key] => _impl[key];

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> Add(
            Address key,
            IValue value
        )
        {
            return new AddressStateMap(_impl.Add(key, value));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> AddRange(
            IEnumerable<KeyValuePair<Address, IValue>> pairs
        )
        {
            return new AddressStateMap(_impl.AddRange(pairs));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> Clear()
        {
            return new AddressStateMap(_impl.Clear());
        }

        /// <inheritdoc />
        public bool Contains(KeyValuePair<Address, IValue> pair)
        {
            return _impl.Contains(pair);
        }

        /// <inheritdoc />
        public bool ContainsKey(Address key)
        {
            return _impl.ContainsKey(key);
        }

        /// <inheritdoc />
        public IEnumerator<KeyValuePair<Address, IValue>> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> Remove(Address key)
        {
            return new AddressStateMap(_impl.Remove(key));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> RemoveRange(
            IEnumerable<Address> keys
        )
        {
            return new AddressStateMap(_impl.RemoveRange(keys));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> SetItem(
            Address key,
            IValue value
        )
        {
            return new AddressStateMap(_impl.SetItem(key, value));
        }

        /// <inheritdoc />
        public IImmutableDictionary<Address, IValue> SetItems(
            IEnumerable<KeyValuePair<Address, IValue>> items
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
        public bool TryGetValue(Address key, out IValue value)
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
