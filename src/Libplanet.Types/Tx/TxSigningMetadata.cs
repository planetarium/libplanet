using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// A concrete implementation of <see cref="ITxSigningMetadata"/>.
    /// </summary>
    /// <seealso cref="ITxSigningMetadata" />
    /// <seealso cref="TxInvoice"/>
    /// <seealso cref="UnsignedTx"/>
    /// <seealso cref="Transaction"/>
    public sealed class TxSigningMetadata : ITxSigningMetadata, IEquatable<TxSigningMetadata>
    {
        /// <summary>
        /// Creates a new <see cref="TxSigningMetadata"/> instance by filling data for its fields.
        /// </summary>
        /// <param name="signer">The value for <see cref="Address"/>.</param>
        /// <param name="nonce">The value for <see cref="Nonce"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="nonce"/> is less than 0.</exception>
        public TxSigningMetadata(Address signer, long nonce)
        {
            if (nonce < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(nonce),
                    $"The nonce must be greater than or equal to 0, but {nonce} was given.");
            }

            Signer = signer;
            Nonce = nonce;
        }

        public TxSigningMetadata(PublicKey publicKey, long nonce)
            : this(publicKey.Address, nonce)
        {
        }

        /// <summary>
        /// Creates a new <see cref="TxSigningMetadata"/> instance by copying the fields from
        /// the given <paramref name="signingMetadata"/>.
        /// </summary>
        /// <param name="signingMetadata">The <see cref="ITxSigningMetadata"/> instance to copy
        /// fields from.</param>
        public TxSigningMetadata(ITxSigningMetadata signingMetadata)
            : this(signingMetadata.Signer, signingMetadata.Nonce)
        {
        }

        /// <inheritdoc cref="ITxSigningMetadata.Signer" />
        /// <remarks>This is automatically derived from <see cref="PublicKey"/>.</remarks>
        public Address Signer { get; }

        /// <inheritdoc cref="ITxSigningMetadata.Nonce" />
        public long Nonce { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata? other) =>
            other is { } o && o.Signer.Equals(Signer) && o.Nonce == Nonce;

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(TxSigningMetadata? other) =>
            other is ITxSigningMetadata otherMetadata && otherMetadata.Equals(this);

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is ITxSigningMetadata other && ((IEquatable<ITxSigningMetadata>)this).Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() => HashCode.Combine(Signer, Nonce);

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString()
        {
            return nameof(TxMetadata) + " {\n" +
                $"  {nameof(Nonce)} = {Nonce},\n" +
                $"  {nameof(Signer)} = {Signer},\n" +
                "}";
        }
    }
}
