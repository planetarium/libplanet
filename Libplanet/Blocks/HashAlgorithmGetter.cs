namespace Libplanet.Blocks
{
    /// <summary>
    /// The delegate to determine a hash algorithm to use for a <paramref name="blockIndex"/>.
    /// </summary>
    /// <param name="blockIndex">The <see cref="Block{T}.Index"/> of a block to determine its
    /// hash algorithm.</param>
    /// <returns>The hash algorithm to be used for proof-of-work on the block.</returns>
    public delegate HashAlgorithmType HashAlgorithmGetter(long blockIndex);
}
