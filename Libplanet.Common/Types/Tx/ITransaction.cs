namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// An abstract interface for a transaction.  Unlike <see cref="Transaction"/>, it deals
    /// with custom actions in a non-generic way.  Instead, they are represented as
    /// <see cref="IAction"/>.
    /// </summary>
    public interface ITransaction : IUnsignedTx
    {
        /// <summary>
        /// The unique identifier derived from this transaction's content including actions and
        /// signature.
        /// </summary>
        /// <seealso cref="TxId"/>
        TxId Id { get; }

        /// <summary>
        /// A digital signature of the content of this <see cref="ITransaction"/>.
        /// </summary>
        public byte[] Signature { get; }
    }
}
