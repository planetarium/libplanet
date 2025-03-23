using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Libplanet.Store.Trie;

/// <summary>
/// Volatile in-memory key-value store.
/// <para>It is useful for storing temporal small chains, e.g., fixtures for unit tests of
/// game logic.</para>
/// <para><see cref="MemoryStore"/> and <see cref="MemoryKeyValueStore"/>-backed
/// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>memory:</c> scheme
/// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
/// <list type="bullet">
/// <item><description><c>memory:</c></description></item>
/// </list>
/// </summary>
public sealed class MemoryKeyValueStore : IKeyValueStore
{
    private readonly ConcurrentDictionary<KeyBytes, byte[]> _dictionary = new();

    /// <inheritdoc/>
    public byte[] this[in KeyBytes keyBytes]
    {
        get => _dictionary[keyBytes];
        set => _dictionary[keyBytes] = value;
    }

    /// <inheritdoc/>
    bool IKeyValueStore.Remove(in KeyBytes keyBytes) => _dictionary.TryRemove(keyBytes, out _);

    /// <inheritdoc/>
    bool IKeyValueStore.ContainsKey(in KeyBytes keyBytes) => _dictionary.ContainsKey(keyBytes);

    /// <inheritdoc cref="IDisposable.Dispose()"/>
    void IDisposable.Dispose()
    {
        // Do nothing.
    }

    IEnumerable<KeyBytes> IKeyValueStore.ListKeys() => _dictionary.Keys;
}
