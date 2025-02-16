namespace Libplanet.Store;

public sealed record class DefaultStoreOptions
{
    /// <summary>
    /// Gets or sets the path to the store.
    /// </summary>
    public string Path { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets a value indicating whether to use a journal.
    /// </summary>
    public bool Journal { get; set; } = true;

    /// <summary>
    /// Gets or sets the size of the index cache.
    /// </summary>
    public int IndexCacheSize { get; set; } = 50000;

    /// <summary>
    /// Gets or sets the size of the block cache.
    /// </summary>
    public int BlockCacheSize { get; set; } = 512;

    /// <summary>
    /// Gets or sets the size of the transaction cache.
    /// </summary>
    public int TxCacheSize { get; set; } = 1024;

    /// <summary>
    /// Gets or sets the size of the evidence cache.
    /// </summary>
    public int EvidenceCacheSize { get; set; } = 1024;

    /// <summary>
    /// Gets or sets a value indicating whether to flush the store.
    /// </summary>
    public bool Flush { get; set; } = true;

    /// <summary>
    /// Gets or sets a value indicating whether the store is read-only.
    /// </summary>
    public bool ReadOnly { get; set; }
}
