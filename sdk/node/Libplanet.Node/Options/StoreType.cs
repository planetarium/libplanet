namespace Libplanet.Node.Options;

public enum StoreType
{
    /// <summary>
    /// Store data in disk.
    /// </summary>
    RocksDB,

    /// <summary>
    /// Store data in memory.
    /// </summary>
    InMemory,
}
