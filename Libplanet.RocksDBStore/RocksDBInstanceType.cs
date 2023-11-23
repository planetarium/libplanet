namespace Libplanet.RocksDBStore
{
    /// <summary>
    /// Represent <see cref="RocksDbSharp.RocksDb"/>'s instance type.
    /// <see cref="RocksDbSharp.RocksDb"/> can be instantiated as primary, read-only, or secondary.
    /// Please refer a <a
    /// href="https://github.com/facebook/rocksdb/wiki/Read-only-and-Secondary-instances">
    /// RocksDB's document</a> for more details.
    /// </summary>
    public enum RocksDBInstanceType
    {
        /// <summary>
        /// Primary instance.
        /// </summary>
        Primary,

        /// <summary>
        /// ReadOnly instance.
        /// </summary>
        ReadOnly,

        /// <summary>
        /// Secondary instance.
        /// </summary>
        Secondary,
    }
}
