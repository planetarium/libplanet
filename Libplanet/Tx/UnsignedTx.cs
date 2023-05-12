using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;
using Bencodex;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// A concrete implementation of <see cref="IUnsignedTx"/>.
    /// </summary>
    /// <seealso cref="IUnsignedTx"/>
    /// <seealso cref="TxInvoice"/>
    /// <seealso cref="TxSigningMetadata"/>
    /// <seealso cref="Transaction"/>
    public sealed class UnsignedTx : IUnsignedTx, IEquatable<UnsignedTx>
    {
        private static readonly Codec _codec = new Codec();
        private readonly TxInvoice _invoice;
        private readonly TxSigningMetadata _signingMetadata;

        /// <summary>
        /// Creates a new <see cref="UnsignedTx"/> instance by combining an <see cref="TxInvoice"/>
        /// and an <see cref="TxSigningMetadata"/>.
        /// </summary>
        /// <param name="invoice">The invoice to combine with <paramref name="signingMetadata"/>.
        /// </param>
        /// <param name="signingMetadata">The signing metadata to combine with
        /// <paramref name="invoice"/>.</param>
        public UnsignedTx(TxInvoice invoice, TxSigningMetadata signingMetadata)
        {
            _invoice = invoice;
            _signingMetadata = signingMetadata;
        }

        /// <summary>
        /// Creates a new <see cref="UnsignedTx"/> instance by copying everything from another
        /// <paramref name="unsignedTx"/>.
        /// </summary>
        /// <param name="unsignedTx">The <see cref="IUnsignedTx"/> instance to copy.</param>
        public UnsignedTx(IUnsignedTx unsignedTx)
            : this(unsignedTx, unsignedTx)
        {
        }

        /// <summary>
        /// Creates a new <see cref="UnsignedTx"/> instance by combining an <see cref="ITxInvoice"/>
        /// and an <see cref="ITxSigningMetadata"/>.  Note that when the arguments are not instances
        /// of <see cref="TxInvoice"/> or <see cref="TxSigningMetadata"/>, this constructor creates
        /// new instances of <see cref="TxInvoice"/> and <see cref="TxSigningMetadata"/> by copying.
        /// </summary>
        /// <param name="invoice">The invoice to combine with <paramref name="signingMetadata"/>.
        /// </param>
        /// <param name="signingMetadata">The signing metadata to combine with
        /// <paramref name="invoice"/>.</param>
        public UnsignedTx(ITxInvoice invoice, ITxSigningMetadata signingMetadata)
            : this(
                invoice is TxInvoice i ? i : new TxInvoice(invoice),
                signingMetadata is TxSigningMetadata m ? m : new TxSigningMetadata(signingMetadata))
        {
        }

        /// <inheritdoc cref="ITxInvoice.UpdatedAddresses" />
        public IImmutableSet<Address> UpdatedAddresses => _invoice.UpdatedAddresses;

        /// <inheritdoc cref="ITxInvoice.Timestamp" />
        public DateTimeOffset Timestamp => _invoice.Timestamp;

        /// <inheritdoc cref="ITxInvoice.GenesisHash" />
        public BlockHash? GenesisHash => _invoice.GenesisHash;

        /// <inheritdoc cref="ITxInvoice.Actions" />
        [JsonConverter(typeof(TxActionListJsonConverter))]
        public TxActionList Actions => _invoice.Actions;

        /// <inheritdoc cref="ITxInvoice.MaxGasPrice" />
        public FungibleAssetValue? MaxGasPrice => _invoice.MaxGasPrice;

        /// <inheritdoc cref="ITxInvoice.GasLimit" />
        public long? GasLimit => _invoice.GasLimit;

        /// <inheritdoc cref="ITxSigningMetadata.Nonce" />
        public long Nonce => _signingMetadata.Nonce;

        /// <inheritdoc cref="ITxSigningMetadata.Signer" />
        public Address Signer => _signingMetadata.Signer;

        /// <inheritdoc cref="ITxSigningMetadata.PublicKey" />
        public PublicKey PublicKey => _signingMetadata.PublicKey;

        /// <summary>
        /// Creates a signature for this transaction with the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The private key to sign this transaction.</param>
        /// <returns>A signature for this transaction.</returns>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not correspond to the <see cref="PublicKey"/> of this transaction.</exception>
        [Pure]
        public ImmutableArray<byte> CreateSignature(PrivateKey privateKey)
        {
            if (!privateKey.PublicKey.Equals(PublicKey))
            {
                throw new ArgumentException(
                    "The given private key does not correspond to the public key.",
                    paramName: nameof(privateKey)
                );
            }

            byte[] sig = privateKey.Sign(CreateMessage());
            ImmutableArray<byte> movedImmutableArray =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref sig);
            return movedImmutableArray;
        }

        /// <summary>
        /// Verifies the given <paramref name="signature"/> for this transaction.
        /// </summary>
        /// <param name="signature">The signature to verify.</param>
        /// <returns><see langword="true"/> if the given <paramref name="signature"/> is valid for
        /// this transaction, otherwise <see langword="false"/>.</returns>
        [Pure]
        public bool VerifySignature(ImmutableArray<byte> signature) =>
            PublicKey.Verify(CreateMessage(), signature);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxInvoice>.Equals(ITxInvoice? other) =>
            other is { } o && _invoice.Equals(o);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata? other) =>
            other is { } o && _signingMetadata.Equals(o);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<IUnsignedTx>.Equals(IUnsignedTx? other) =>
            other is { } o &&
            ((IEquatable<ITxInvoice>)this).Equals(o) &&
            ((IEquatable<ITxSigningMetadata>)this).Equals(o);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(UnsignedTx? other) =>
            other is { } o && ((IEquatable<IUnsignedTx>)this).Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is IUnsignedTx other && ((IUnsignedTx)this).Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            HashCode.Combine(_invoice, _signingMetadata);

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString()
        {
            string actions = Actions.ToString() ?? string.Empty;
            string indentedActions = actions.Replace("\n", "\n  ");
            return nameof(TxInvoice) + " {\n" +
                $"  {nameof(UpdatedAddresses)} = ({UpdatedAddresses.Count})" +
                (UpdatedAddresses.Any()
                    ? $"\n    {string.Join("\n    ", UpdatedAddresses)};\n"
                    : ";\n") +
                $"  {nameof(Timestamp)} = {Timestamp},\n" +
                $"  {nameof(GenesisHash)} = {GenesisHash?.ToString() ?? "(null)"},\n" +
                $"  {nameof(Actions)} = {indentedActions},\n" +
                $"  {nameof(Nonce)} = {Nonce},\n" +
                $"  {nameof(Signer)} = {Signer},\n" +
                $"  {nameof(PublicKey)} = {PublicKey},\n" +
                "}";
        }

        [Pure]
        private byte[] CreateMessage() =>
            _codec.Encode(this.MarshalUnsignedTx());
    }
}
