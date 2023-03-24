using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// An abstract interface for a transaction.  Unlike <see cref="Transaction{T}"/>, it deals
    /// with custom actions in a non-generic way.  Instead, they are represented as
    /// <see cref="IAction"/>.
    /// </summary>
    public interface ITransaction
    {
        /// <summary>
        /// The unique identifier derived from this transaction's content including actions and
        /// signature.
        /// </summary>
        /// <seealso cref="TxId"/>
        TxId Id { get; }

        /// <summary>
        /// The number of previous <see cref="Transaction{T}"/>s committed by
        /// the <see cref="Signer"/> of this transaction.  This nonce is used for preventing
        /// replay attack.
        /// </summary>
        long Nonce { get; }

        /// <summary>
        /// A <see cref="Address"/> of the account who signs this transaction.
        /// This is derived from the <see cref="PublicKey"/>.
        /// </summary>
        Address Signer { get; }

        /// <summary>
        /// An approximated list of addresses whose states would be affected by actions in this
        /// transaction.  However, it could be wrong.
        /// </summary>
        // See also https://github.com/planetarium/libplanet/issues/368
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// The time this transaction is created and signed.
        /// </summary>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
        /// The <see cref="Signer"/> address is always corresponding to this
        /// for each transaction.  This cannot be <see langword="null"/>.
        /// </summary>
        PublicKey PublicKey { get; }

        /// <summary>
        /// A <see cref="HashDigest{SHA256}"/> value of the genesis which this transaction is made
        /// from.  This can be <see langword="null"/> iff the transaction is contained in
        /// the genesis block.
        /// </summary>
        BlockHash? GenesisHash { get; }

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
