namespace Libplanet.Tx
{
    /// <summary>
    /// Similar to <see cref="ITxMetadata"/> except that it has <see cref="TxId"/> as well.
    /// Note that this does not contain actions or signature.
    /// </summary>
    public interface ITxExcerpt : ITxMetadata
    {
        /// <summary>
        /// The unique identifier derived from this transaction's content including actions and
        /// signature.
        /// </summary>
        /// <seealso cref="TxId"/>
        TxId Id { get; }
    }
}
