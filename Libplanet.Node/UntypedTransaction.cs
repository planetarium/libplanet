using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Node
{
    /// <summary>
    /// Untyped equivalent of <see cref="Transaction{T}"/>.  It's guaranteed that the transaction
    /// is properly signed.
    /// </summary>
    public sealed class UntypedTransaction : ITxExcerpt
    {
        private static readonly Codec Codec = new Codec();
        private readonly TxMetadata _metadata;
        private TxId? _id;

        /// <summary>
        /// Creates an <see cref="UntypedTransaction"/> instance.
        /// </summary>
        /// <param name="metadata">A transaction metadata without actions and signature.</param>
        /// <param name="actionValues">A list of <see cref="IAction.PlainValue"/>s.</param>
        /// <param name="signature">A signature made by transaction's signer.</param>
        /// <exception cref="InvalidTxSignatureException">Thrown when
        /// the <paramref name="signature"/> is invalid.</exception>
        public UntypedTransaction(
            ITxMetadata metadata,
            IEnumerable<IValue> actionValues,
            ImmutableArray<byte> signature
        )
        {
            _metadata = new TxMetadata(metadata);
            ActionValues = actionValues is IImmutableList<IValue> im
                ? im
                : actionValues.ToImmutableList();
            Signature = signature;

            byte[] encoded = Codec.Encode(_metadata.ToBencodex(ActionValues));
            if (!_metadata.PublicKey.Verify(encoded, Signature))
            {
                throw new InvalidTxSignatureException(
                    Id,
                    $"Failed to verify the signature: {ByteUtil.Hex(Signature)}."
                );
            }
        }

        /// <summary>
        /// Creates an <see cref="UntypedTransaction"/> instance from a Bencodex
        /// <paramref name="dictionary"/>.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary made using <see cref="ToBencodex()"/>
        /// method.</param>
        /// <exception cref="KeyNotFoundException">Thrown when the given
        /// <paramref name="dictionary"/> lacks some fields.</exception>
        /// <exception cref="InvalidCastException">Thrown when the given
        /// <paramref name="dictionary"/> has some invalid values.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when the signature is invalid.
        /// </exception>
        /// <seealso cref="ToBencodex()"/>
        /// <seealso cref="Transaction{T}.ToBencodex(bool)"/>
        public UntypedTransaction(Bencodex.Types.Dictionary dictionary)
            : this(
                new TxMetadata(dictionary),
                dictionary.GetValue<List>(TxMetadata.CustomActionsKey),
                dictionary.GetValue<Binary>(TxMetadata.SignatureKey).ByteArray)
        {
        }

        /// <inheritdoc cref="ITxExcerpt.Id"/>
        /// <seealso cref="Transaction{T}.Id"/>
        public TxId Id
        {
            get
            {
                if (_id is { } id)
                {
                    return id;
                }

                using var hasher = SHA256.Create();
                byte[] payload = Codec.Encode(ToBencodex());
                id = new TxId(hasher.ComputeHash(payload));
                _id = id;
                return id;
            }
        }

        /// <inheritdoc cref="ITxMetadata.Nonce"/>
        public long Nonce => _metadata.Nonce;

        /// <inheritdoc cref="ITxMetadata.Signer"/>
        public Address Signer => _metadata.Signer;

        /// <inheritdoc cref="ITxMetadata.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses => _metadata.UpdatedAddresses;

        /// <inheritdoc cref="ITxMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _metadata.Timestamp;

        /// <inheritdoc cref="ITxMetadata.PublicKey"/>
        public PublicKey PublicKey => _metadata.PublicKey;

        /// <inheritdoc cref="ITxMetadata.GenesisHash"/>
        public BlockHash? GenesisHash => _metadata.GenesisHash;

        /// <summary>
        /// A list of <see cref="IAction.PlainValue"/>s.
        /// </summary>
        public IReadOnlyList<IValue> ActionValues { get; }

        /// <summary>
        /// A <see cref="Signer"/>'s signature on this transaction.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// Builds a Bencodex dictionary used for calculating <see cref="TxId"/>.
        /// </summary>
        /// <returns>A Bencodex dictionary that this transaction turns into.
        /// This can be deserialized using
        /// <see cref="UntypedTransaction(Bencodex.Types.Dictionary)"/> method or
        /// <see cref="Transaction{T}(Bencodex.Types.Dictionary)"/> method.
        /// </returns>
        /// <seealso cref="UntypedTransaction(Bencodex.Types.Dictionary)"/>
        /// <seealso cref="Transaction{T}(Bencodex.Types.Dictionary)"/>
        [Pure]
        public Bencodex.Types.Dictionary ToBencodex() =>
            _metadata.ToBencodex(ActionValues, Signature);
    }
}
