using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// An abstract interface for a transaction.  Unlike <see cref="Transaction{T}"/>, it deals
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

        /// <summary>
        /// A system action (if any) that this <see cref="ITransaction"/> contains.
        /// </summary>
        /// <remarks>It is similar with <see cref="Transaction{T}.SystemAction"/> but
        /// it is non-generic.  (i.e., it doesn't require to deserialize the system action to
        /// <see cref="IAction"/> while serialization.</remarks>
        public Dictionary? SystemAction { get; }

        /// <summary>
        /// Zero or more user-defined custom actions that this <see cref="ITransaction"/>
        /// contains.
        /// </summary>
        /// <remarks>It is similar with <see cref="Transaction{T}.CustomActions"/> but
        /// it is non-generic.  (i.e., it doesn't require to deserialize the custom actions to
        /// <see cref="IAction"/> while serialization.</remarks>
        public IImmutableList<IValue>? CustomActions { get; }
    }
}
