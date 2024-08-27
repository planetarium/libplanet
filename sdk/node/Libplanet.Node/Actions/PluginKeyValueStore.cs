using System.Collections.Immutable;
using Lib9c.Plugin.Shared;
using Libplanet.Store.Trie;

namespace Libplanet.Node.Actions;

public class PluginKeyValueStore(IKeyValueStore keyValueStore) : IPluginKeyValueStore
{
    private readonly IKeyValueStore _keyValueStore = keyValueStore;

    public byte[] Get(in ImmutableArray<byte> key) =>
        _keyValueStore.Get(new KeyBytes(key));

    public void Set(in ImmutableArray<byte> key, byte[] value) =>
        _keyValueStore.Set(new KeyBytes(key), value);

    public void Set(IDictionary<ImmutableArray<byte>, byte[]> values) =>
        _keyValueStore.Set(
            values.ToDictionary(kv => new KeyBytes(kv.Key), kv => kv.Value));

    public void Delete(in ImmutableArray<byte> key) =>
        _keyValueStore.Delete(new KeyBytes(key));

    public void Delete(IEnumerable<ImmutableArray<byte>> keys) =>
        _keyValueStore.Delete(
            keys.Select(key => new KeyBytes(key)));

    public bool Exists(in ImmutableArray<byte> key) =>
        _keyValueStore.Exists(new KeyBytes(key));

    public IEnumerable<ImmutableArray<byte>> ListKeys() =>
        _keyValueStore.ListKeys().Select(key => key.ByteArray);

    public void Dispose() =>
        _keyValueStore.Dispose();
}
