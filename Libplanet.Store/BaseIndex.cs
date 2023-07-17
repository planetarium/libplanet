#nullable disable
using System;
using System.Collections;
using System.Collections.Generic;

namespace Libplanet.Store
{
    public abstract class BaseIndex<TKey, TVal> : IDictionary<TKey, TVal>
    {
        protected BaseIndex(IStore store)
        {
            Store = store;
        }

        public abstract ICollection<TKey> Keys { get; }

        public abstract ICollection<TVal> Values { get; }

        public abstract int Count { get; }

        public abstract bool IsReadOnly { get; }

        protected IStore Store { get; }

        public abstract TVal this[TKey key] { get; set; }

        public void Add(TKey key, TVal value)
        {
            this[key] = value;
        }

        public void Add(KeyValuePair<TKey, TVal> item)
        {
            Add(item.Key, item.Value);
        }

        public void Clear()
        {
            foreach (TKey key in Keys)
            {
                Remove(key);
            }
        }

        public abstract bool Contains(KeyValuePair<TKey, TVal> item);

        public abstract bool ContainsKey(TKey key);

        public void CopyTo(KeyValuePair<TKey, TVal>[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException(nameof(array));
            }

            if (arrayIndex < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(arrayIndex));
            }

            if (Count > array.Length + arrayIndex)
            {
                throw new ArgumentException();
            }

            foreach (KeyValuePair<TKey, TVal> kv in this)
            {
                array[arrayIndex++] = kv;
            }
        }

        public IEnumerator<KeyValuePair<TKey, TVal>> GetEnumerator()
        {
            foreach (var key in Keys)
            {
                yield return new KeyValuePair<TKey, TVal>(key, this[key]);
            }
        }

        public abstract bool Remove(TKey key);

        public bool Remove(KeyValuePair<TKey, TVal> item)
        {
            return Remove(item.Key);
        }

        public bool TryGetValue(TKey key, out TVal value)
        {
            try
            {
                value = this[key];
                return true;
            }
            catch (KeyNotFoundException)
            {
                value = default(TVal);
                return false;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
