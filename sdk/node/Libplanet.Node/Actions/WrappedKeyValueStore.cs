using Libplanet.Store.Trie;

namespace Libplanet.Node.Actions;

public class WrappedKeyValueStore : IKeyValueStore
{
    private readonly IPluginKeyValueStore _pluginKeyValueStore;

    public WrappedKeyValueStore(IPluginKeyValueStore pluginKeyValueStore)
    {
        _pluginKeyValueStore = pluginKeyValueStore;
    }

    public void Dispose()
    {
        _pluginKeyValueStore.Dispose();
    }

    public byte[] Get(in KeyBytes key) =>
        _pluginKeyValueStore.Get(key.ByteArray);

    public void Set(in KeyBytes key, byte[] value) =>
        _pluginKeyValueStore.Set(key.ByteArray, value);

    public void Set(IDictionary<KeyBytes, byte[]> values) =>
        _pluginKeyValueStore.Set(
            values.ToDictionary(kv =>
                kv.Key.ByteArray, kv => kv.Value));

    public void Delete(in KeyBytes key) =>
        _pluginKeyValueStore.Delete(key.ByteArray);

    public void Delete(IEnumerable<KeyBytes> keys) =>
        _pluginKeyValueStore.Delete(
            keys.Select(key => key.ByteArray));

    public bool Exists(in KeyBytes key) =>
        _pluginKeyValueStore.Exists(key.ByteArray);

    public IEnumerable<KeyBytes> ListKeys() =>
        _pluginKeyValueStore.ListKeys().Select(key => new KeyBytes(key));
}
