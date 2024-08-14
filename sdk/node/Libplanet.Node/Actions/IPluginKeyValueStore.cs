using System.Collections.Immutable;

namespace Libplanet.Node.Actions;

public interface IPluginKeyValueStore
{
    public byte[] Get(in ImmutableArray<byte> key);

    public void Set(in ImmutableArray<byte> key, byte[] value);

    public void Set(IDictionary<ImmutableArray<byte>, byte[]> values);

    public void Delete(in ImmutableArray<byte> key);

    public void Delete(IEnumerable<ImmutableArray<byte>> keys);

    public bool Exists(in ImmutableArray<byte> key);

    public IEnumerable<ImmutableArray<byte>> ListKeys();

    public void Dispose();
}
