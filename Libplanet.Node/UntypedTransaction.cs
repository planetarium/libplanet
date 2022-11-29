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
        /// <param name="systemActionValue">The <see cref="IAction.PlainValue"/> representing
        /// a <see cref="Transaction{T}.SystemAction"/>.</param>
        /// <param name="customActionsValue">The <see cref="Bencodex.Types.List"/> representation
        /// of a <see cref="Transaction{T}.CustomActions"/>.</param>
        /// <param name="signature">A signature made by transaction's signer.</param>
        /// <exception cref="InvalidTxSignatureException">Thrown when
        /// the <paramref name="signature"/> is invalid.</exception>
        /// <exception cref="ArgumentException">Thrown when
        /// <paramref name="systemActionValue"/> and <paramref name="customActionsValue"/> are
        /// both <see langword="null"/> or are both not <see langword="null"/>.</exception>
        public UntypedTransaction(
            ITxMetadata metadata,
            IValue? systemActionValue,
            IValue? customActionsValue,
            ImmutableArray<byte> signature
        )
        {
            if (!(systemActionValue is null ^ customActionsValue is null))
            {
                throw new ArgumentException(
                    $"Exactly one of {nameof(systemActionValue)} and " +
                    $"{nameof(customActionsValue)} must be null.");
            }

            _metadata = new TxMetadata(metadata);
            SystemActionValue = systemActionValue;
            CustomActionsValue = customActionsValue;
            Signature = signature;

            Dictionary dict = _metadata.ToBencodex();
            dict = SystemActionValue is { } sav
                ? dict.Add(TxMetadata.SystemActionKey, sav)
                : dict.Add(TxMetadata.CustomActionsKey, CustomActionsValue!);

            byte[] encoded = Codec.Encode(dict);

            if (!_metadata.PublicKey.Verify(encoded, Signature))
            {
                throw new InvalidTxSignatureException(
                    $"Failed to verify the signature: {ByteUtil.Hex(Signature)}.", Id);
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
#pragma warning disable SA1118 // The parameter spans multiple lines
            : this(
                new TxMetadata(dictionary),
                dictionary.TryGetValue(new Binary(TxMetadata.SystemActionKey), out IValue? sav)
                    ? sav
                    : null,
                dictionary.TryGetValue(new Binary(TxMetadata.CustomActionsKey), out IValue? cav)
                    ? cav
                    : null,
                dictionary.GetValue<Binary>(TxMetadata.SignatureKey).ByteArray)
#pragma warning restore SA1118
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
        /// The <see cref="IAction.PlainValue"/> of <see cref="Transaction{T}.SystemAction"/>.
        /// </summary>
        /// <seealso cref="Transaction{T}.SystemAction"/>.
        public IValue? SystemActionValue { get; }

        /// <summary>
        /// The <see cref="Bencodex.Types.List"/> representation of
        /// <see cref="Transaction{T}.CustomActions"/>.
        /// </summary>
        public IValue? CustomActionsValue { get; }

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
            SystemActionValue is { } sav
                ? _metadata.ToBencodex()
                    .Add(TxMetadata.SystemActionKey, sav)
                    .Add(TxMetadata.SignatureKey, Signature)
                : _metadata.ToBencodex()
                    .Add(TxMetadata.CustomActionsKey, CustomActionsValue!)
                    .Add(TxMetadata.SignatureKey, Signature);
    }
}
