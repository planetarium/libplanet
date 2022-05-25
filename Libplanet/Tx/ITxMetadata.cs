using System;
using System.Collections.Immutable;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// A common interface for transactions that do not have any proofs nor actions.
    /// </summary>
    public interface ITxMetadata
    {
        /// <summary>
        /// The number of previous <see cref="Transaction{T}"/>s committed by
        /// the <see cref="Signer"/> of this transaction.  This nonce is used for preventing
        /// replay attack.
        /// </summary>
        /// <remarks>Don't confuse this with <see cref="Block{T}.Nonce"/> for proof-of-work.
        /// </remarks>
        long Nonce { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
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
        public BlockHash? GenesisHash { get; }
    }
}
