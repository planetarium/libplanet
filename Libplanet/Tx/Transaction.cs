using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// Consists of <see cref="IAction"/> and is signed to be included in
    /// a <see cref="Blocks.Block"/> and transmitted over the network.
    /// </summary>
    /// <seealso cref="ITransaction"/>
    /// <seealso cref="IAction"/>
    public sealed class Transaction : IEquatable<Transaction>, ITransaction
    {
        private static readonly Codec Codec = new Codec();

        private TxId? _id;
        private UnsignedTx _unsignedTx;
        private byte[] _signature;  // FIXME

        /// <summary>
        /// Creates a new <see cref="Transaction"/> instance by verifying a
        /// <paramref name="signature"/> of an <paramref name="unsignedTx"/>.
        /// </summary>
        /// <param name="unsignedTx">The <see cref="IUnsignedTx"/> instance to combine with
        /// <paramref name="signature"/>.</param>
        /// <param name="signature">The signature to combine with <paramref name="unsignedTx"/>.
        /// </param>
        /// <exception cref="InvalidTxSignatureException">Thrown when the given
        /// <paramref name="signature"/> is not valid for <paramref name="unsignedTx"/>.</exception>
        public Transaction(IUnsignedTx unsignedTx, ImmutableArray<byte> signature)
        {
            _unsignedTx = unsignedTx as UnsignedTx ?? new UnsignedTx(unsignedTx);
            _signature = signature.IsDefaultOrEmpty ? Array.Empty<byte>() : signature.ToArray();

            if (!_unsignedTx.VerifySignature(signature))
            {
                throw new InvalidTxSignatureException("The given signature is not valid.", Id);
            }
        }

        /// <summary>
        /// Creates a new <see cref="Transaction"/> instance by signing an
        /// <paramref name="unsignedTx"/> with a <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="unsignedTx">The <see cref="IUnsignedTx"/> instance to sign.</param>
        /// <param name="privateKey">The private key to sign <paramref name="unsignedTx"/> with.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match the public key of <paramref name="unsignedTx"/>.</exception>
        public Transaction(IUnsignedTx unsignedTx, PrivateKey privateKey)
        {
            _unsignedTx = unsignedTx as UnsignedTx ?? new UnsignedTx(unsignedTx);
            _signature = _unsignedTx.CreateSignature(privateKey).ToArray();
        }

        /// <summary>
        /// Creates a new <see cref="Transaction"/> instance by combining an
        /// <paramref name="unsignedTx"/> with a <paramref name="alreadyVerifiedSignature"/>.
        /// </summary>
        /// <remarks>As the parameter name suggests, this constructor assumes that the given
        /// <paramref name="alreadyVerifiedSignature"/> is valid for the given
        /// <paramref name="unsignedTx"/>, hence it does not verify the signature again.
        /// That's why this constructor is marked as internal.</remarks>
        /// <param name="unsignedTx">The <see cref="IUnsignedTx"/> instance to combine with
        /// <paramref name="alreadyVerifiedSignature"/>.</param>
        /// <param name="alreadyVerifiedSignature">The signature to combine with
        /// <paramref name="unsignedTx"/>.</param>
        private Transaction(UnsignedTx unsignedTx, ImmutableArray<byte> alreadyVerifiedSignature)
        {
            _unsignedTx = unsignedTx;
            _signature = alreadyVerifiedSignature.IsDefaultOrEmpty
                ? Array.Empty<byte>()
                : alreadyVerifiedSignature.ToArray();
        }

        /// <summary>
        /// A unique identifier derived from this <see cref="Transaction"/>'s
        /// content.
        /// <para>For more characteristics, see <see cref="TxId"/> type.</para>
        /// </summary>
        /// <seealso cref="TxId"/>
        public TxId Id
        {
            get
            {
                if (!(_id is { } nonNull))
                {
                    using var hasher = SHA256.Create();
                    byte[] payload = Serialize();
                    _id = nonNull = new TxId(hasher.ComputeHash(payload));
                }

                return nonNull;
            }
        }

        /// <inheritdoc cref="ITxSigningMetadata.Nonce"/>
        public long Nonce => _unsignedTx.Nonce;

        /// <inheritdoc cref="ITxSigningMetadata.Signer"/>
        public Address Signer => _unsignedTx.Signer;

        /// <inheritdoc cref="ITxInvoice.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses => _unsignedTx.UpdatedAddresses;

        /// <summary>
        /// A digital signature of the content of this
        /// <see cref="Transaction"/>.  This is signed by the account
        /// who corresponds to <see cref="PublicKey"/>.
        /// This cannot be <see langword="null"/>.
        /// </summary>
        /// <returns>A new <see cref="byte"/> array of this transaction's
        /// signature.  Changing a returned array does not affect the internal
        /// state of this <see cref="Transaction"/> object.</returns>
        /// <remarks>Although this cannot be <see langword="null"/>, it can be an empty
        /// array if the transaction is not signed yet.</remarks>
        public byte[] Signature
        {
            get
            {
                var sig = new byte[_signature.Length];
                Array.Copy(_signature, sig, _signature.Length);
                return sig;
            }

            private set
            {
                _signature = new byte[value.Length];
                Array.Copy(value, _signature, value.Length);
            }
        }

        /// <summary>
        /// A list of <see cref="IAction"/>s.  These are executed in the order.
        /// This can be empty, but cannot be <see langword="null"/>.
        /// </summary>
        [JsonConverter(typeof(TxActionListJsonConverter))]
        public TxActionList Actions => _unsignedTx.Actions;

        /// <inheritdoc cref="ITxInvoice.MaxGasPrice"/>
        public FungibleAssetValue? MaxGasPrice => _unsignedTx.MaxGasPrice;

        /// <inheritdoc cref="ITxInvoice.GasLimit"/>
        public long? GasLimit => _unsignedTx.GasLimit;

        /// <inheritdoc cref="ITxInvoice.Timestamp"/>
        public DateTimeOffset Timestamp => _unsignedTx.Timestamp;

        /// <inheritdoc cref="ITxSigningMetadata.PublicKey"/>
        public PublicKey PublicKey => _unsignedTx.PublicKey;

        /// <inheritdoc cref="ITxInvoice.GenesisHash"/>
        public BlockHash? GenesisHash => _unsignedTx.GenesisHash;

        /// <summary>
        /// Decodes a <see cref="Transaction"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="Transaction"/>.</param>
        /// <returns>A decoded <see cref="Transaction"/> object.</returns>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Signature"/> is invalid or not signed by
        /// the account who corresponds to <see cref="PublicKey"/>.
        /// </exception>
        /// <seealso cref="Serialize()"/>
        public static Transaction Deserialize(byte[] bytes)
        {
            // TODO: Move this method to TxMarshaler.
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return TxMarshaler.UnmarshalTransaction(dict);
        }

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction"/>.
        /// It automatically fills the following values from:
        /// <list type="table">
        /// <listheader>
        /// <term>Property</term>
        /// <description>Parameter the filled value derived from</description>
        /// </listheader>
        /// <item>
        /// <term><see cref="Signer"/></term>
        /// <description><paramref name="privateKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="PublicKey"/></term>
        /// <description><paramref name="privateKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="UpdatedAddresses"/></term>
        /// <description><paramref name="actions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
        /// <para>Note that the <paramref name="privateKey"/> in itself is not
        /// included in the created <see cref="Transaction"/>.</para>
        /// </summary>
        /// <param name="nonce">The number of previous
        /// <see cref="Transaction"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="Transaction.Nonce"/> property.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account
        /// who creates and signs a new transaction.  This key is used to fill
        /// the <see cref="Signer"/>, <see cref="PublicKey"/>, and
        /// <see cref="Signature"/> properties, but this in itself is not
        /// included in the transaction.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="Transaction"/> is made from.
        /// This can be <see langword="null"/> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="actions">A list of user-defined custom actions to include.  This can
        /// be empty, but cannot be <see langword="null"/>.  This goes to
        /// the <see cref="Actions"/> property.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.  If <see langword="null"/> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="Transaction"/> signed by
        /// the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/>
        /// is passed to <paramref name="privateKey"/> or <paramref name="actions"/>.
        /// </exception>
        public static Transaction Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            IEnumerable<IAction> actions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null) =>
            Create(
                nonce,
                privateKey,
                genesisHash,
                actions.Select(action => action.PlainValue),
                updatedAddresses,
                timestamp
            );

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction"/>.
        /// It automatically fills the following values from:
        /// <list type="table">
        /// <listheader>
        /// <term>Property</term>
        /// <description>Parameter the filled value derived from</description>
        /// </listheader>
        /// <item>
        /// <term><see cref="Signer"/></term>
        /// <description><paramref name="privateKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="PublicKey"/></term>
        /// <description><paramref name="privateKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="UpdatedAddresses"/></term>
        /// <description><paramref name="actions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
        /// <para>Note that the <paramref name="privateKey"/> in itself is not
        /// included in the created <see cref="Transaction"/>.</para>
        /// </summary>
        /// <param name="nonce">The number of previous
        /// <see cref="Transaction"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="Transaction.Nonce"/> property.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account
        /// who creates and signs a new transaction.  This key is used to fill
        /// the <see cref="Signer"/>, <see cref="PublicKey"/>, and
        /// <see cref="Signature"/> properties, but this in itself is not
        /// included in the transaction.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="Transaction"/> is made from.
        /// This can be <see langword="null"/> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="actions">A list of user-defined custom actions to include.  This can
        /// be empty, but cannot be <see langword="null"/>.  This goes to
        /// the <see cref="Actions"/> property.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.  If <see langword="null"/> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="Transaction"/> signed by
        /// the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/>
        /// is passed to <paramref name="privateKey"/> or <paramref name="actions"/>.
        /// </exception>
        public static Transaction Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            IEnumerable<IValue> actions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null) =>
            Create(
                nonce,
                privateKey,
                genesisHash,
                new TxActionList(new List(actions)),
                updatedAddresses,
                timestamp
            );

        /// <summary>
        /// Encodes this <see cref="Transaction"/> into a <see cref="byte"/> array.
        /// </summary>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="Transaction"/>.</returns>
        public byte[] Serialize() =>
            Codec.Encode(this.MarshalTransaction());

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxInvoice>.Equals(ITxInvoice? other) =>
            other is { } o && o.Equals(_unsignedTx);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxSigningMetadata>.Equals(ITxSigningMetadata? other) =>
            other is { } o && o.Equals(_unsignedTx);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<IUnsignedTx>.Equals(IUnsignedTx? other) =>
            other is { } o && o.Equals(_unsignedTx);

        /// <inheritdoc />
        public bool Equals(Transaction? other) => Id.Equals(other?.Id);

        /// <inheritdoc />
        public override bool Equals(object? obj) => obj is Transaction other && Equals(other);

        /// <inheritdoc />
        public override int GetHashCode() => Id.GetHashCode();

        /// <inheritdoc cref="Transaction(UnsignedTx, ImmutableArray{byte})"/>
        /// <returns>A <see cref="Transaction"/> instance.</returns>
        internal static Transaction CombineWithoutVerification(
            UnsignedTx unsignedTx,
            ImmutableArray<byte> alreadyVerifiedSignature
        ) =>
            new Transaction(unsignedTx, alreadyVerifiedSignature: alreadyVerifiedSignature);

        private static Transaction Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            TxActionList actions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null)
        {
            if (privateKey is null)
            {
                throw new ArgumentNullException(nameof(privateKey));
            }

            var draftInvoice = new TxInvoice(
                genesisHash,
                updatedAddresses ?? ImmutableHashSet<Address>.Empty,
                timestamp ?? DateTimeOffset.UtcNow,
                actions);
            var signMeta = new TxSigningMetadata(privateKey.PublicKey, nonce);
            var invoice = new TxInvoice(
                draftInvoice.GenesisHash,
                draftInvoice.UpdatedAddresses,
                draftInvoice.Timestamp,
                draftInvoice.Actions);
            var unsignedTx = new UnsignedTx(invoice, signMeta);
            return new Transaction(unsignedTx, privateKey);
        }
    }
}
