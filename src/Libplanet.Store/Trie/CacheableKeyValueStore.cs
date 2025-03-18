using System;
using System.Collections.Generic;
using LruCacheNet;

namespace Libplanet.Store.Trie;

/// <summary>
/// The proxy class to cache <see cref="IKeyValueStore"/> operations.
/// </summary>
/// <remarks>
/// Creates a new <see cref="CacheableKeyValueStore"/>.
/// </remarks>
/// <param name="keyValueStore">An <see cref="IKeyValueStore"/> implementation to do real
/// operations via <see cref="CacheableKeyValueStore"/>.</param>
/// <param name="cacheSize">The capacity of the values cache.</param>
public sealed class CacheableKeyValueStore(IKeyValueStore keyValueStore, int cacheSize = 100)
    : IKeyValueStore, IDisposable
{
    private readonly LruCache<KeyBytes, byte[]> _cache = new(cacheSize);
    private bool _disposed;

    /// <inheritdoc/>
    public byte[] this[in KeyBytes key]
    {
        get
        {
            if (_cache.TryGetValue(key, out byte[]? value) && value is { } v)
            {
                return v;
            }

            if (keyValueStore[key] is { } bytes)
            {
                _cache[key] = bytes;
                return bytes;
            }

            throw new KeyNotFoundException($"No such key: ${key}.");
        }

        set
        {
            keyValueStore[key] = value;
            _cache[key] = value;
        }
    }

    public void Set(IDictionary<KeyBytes, byte[]> values)
    {
        keyValueStore.Set(values);
    }

    /// <inheritdoc/>
    public bool Remove(in KeyBytes key)
    {
        if (keyValueStore.Remove(key))
        {
            _cache.Remove(key);
            return true;
        }

        return false;
    }

    /// <inheritdoc/>
    public bool ContainsKey(in KeyBytes key)
    {
        return _cache.ContainsKey(key) || keyValueStore.ContainsKey(key);
    }

    /// <inheritdoc/>
    public IEnumerable<KeyBytes> ListKeys() => keyValueStore.ListKeys();

    /// <inheritdoc cref="IDisposable.Dispose()"/>
    public void Dispose()
    {
        if (!_disposed)
        {
            _disposed = true;
            GC.SuppressFinalize(this);
        }
    }
}
