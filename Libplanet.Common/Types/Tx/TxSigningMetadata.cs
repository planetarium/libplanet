using System;
using System.Diagnostics.Contracts;
using Libplanet.Common.Crypto;

namespace Libplanet.Common.Types.Tx
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
        /// <param name="publicKey">The value for <see cref="PublicKey"/>.</param>
        /// <param name="nonce">The value for <see cref="Nonce"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="nonce"/> is less than 0.</exception>
        public TxSigningMetadata(PublicKey publicKey, long nonce)
        {
            if (nonce < 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"The nonce must be greater than or equal to 0, but {nonce} was given.",
                    nameof(nonce)
                );
            }

            PublicKey = publicKey;
            Nonce = nonce;
        }

        /// <summary>
        /// Creates a new <see cref="TxSigningMetadata"/> instance by copying the fields from
        /// the given <paramref name="signingMetadata"/>.
        /// </summary>
        /// <param name="signingMetadata">The <see cref="ITxSigningMetadata"/> instance to copy
        /// fields from.</param>
        public TxSigningMetadata(ITxSigningMetadata signingMetadata)
            : this(signingMetadata.PublicKey, signingMetadata.Nonce)
        {
        }

        /// <inheritdoc cref="ITxSigningMetadata.Signer" />
        /// <remarks>This is automatically derived from <see cref="PublicKey"/>.</remarks>
        public Address Signer => new Address(PublicKey);

        /// <inheritdoc cref="ITxSigningMetadata.PublicKey" />
        public PublicKey PublicKey { get; }

        /// <inheritdoc cref="ITxSigningMetadata.Nonce" />
        public long Nonce { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata? other) =>
            other is { } o && o.PublicKey.Equals(PublicKey) && o.Nonce == Nonce;

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
        public override int GetHashCode() => HashCode.Combine(PublicKey, Nonce);

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString()
        {
            return nameof(TxMetadata) + " {\n" +
                $"  {nameof(Nonce)} = {Nonce},\n" +
                $"  {nameof(Signer)} = {Signer},\n" +
                $"  {nameof(PublicKey)} = {PublicKey},\n" +
                "}";
        }
    }
}
