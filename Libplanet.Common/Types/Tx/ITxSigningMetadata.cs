using System;
using Libplanet.Common.Crypto;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// Metadata for signing a transaction, except for the actual signature.
    /// </summary>
    /// <seealso cref="TxSigningMetadata" />
    /// <seealso cref="ITxInvoice"/>
    /// <seealso cref="IUnsignedTx"/>
    /// <seealso cref="ITransaction"/>
    public interface ITxSigningMetadata : IEquatable<ITxSigningMetadata>
    {
        /// <summary>
        /// The number of previous <see cref="Transaction"/>s committed by
        /// the <see cref="Signer"/> of this transaction.  This nonce is used for preventing replay
        /// attack.
        /// </summary>
        long Nonce { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.  This is derived
        /// from the <see cref="PublicKey"/>.
        /// </summary>
        Address Signer { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
        /// The <see cref="Signer"/> address is always corresponding to this for each transaction.
        /// This cannot be <see langword="null"/>.
        /// </summary>
        PublicKey PublicKey { get; }
    }
}
