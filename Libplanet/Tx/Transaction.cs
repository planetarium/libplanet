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
using Libplanet.Action.Sys;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// Consists of <see cref="IAction"/> and is signed to be included in
    /// a <see cref="Blocks.Block{T}"/> and transmitted over the network.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to
    /// include.
    /// Each game usually defines its own concrete class which implements
    /// <see cref="IAction"/>, and uses it for this type parameter.
    /// This type parameter is aligned with <see cref="Blocks.Block{T}"/>'s
    /// and <see cref="Blockchain.BlockChain{T}"/>'s type parameters.
    /// </typeparam>
    /// <seealso cref="ITransaction"/>
    /// <seealso cref="IAction"/>
    /// <seealso cref="PolymorphicAction{T}"/>
    public sealed class Transaction<T> : IEquatable<Transaction<T>>, ITransaction
        where T : IAction, new()
    {
        private static readonly Codec Codec = new Codec();

        private TxId? _id;
        private UnsignedTx _unsignedTx;
        private byte[] _signature;  // FIXME

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by verifying a
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
            _unsignedTx = unsignedTx is UnsignedTx u ? u : new UnsignedTx(unsignedTx);
            _signature = signature.IsDefaultOrEmpty ? Array.Empty<byte>() : signature.ToArray();

            if (!_unsignedTx.VerifySignature(signature))
            {
                throw new InvalidTxSignatureException("The given signature is not valid.", Id);
            }
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by signing an
        /// <paramref name="unsignedTx"/> with a <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="unsignedTx">The <see cref="IUnsignedTx"/> instance to sign.</param>
        /// <param name="privateKey">The private key to sign <paramref name="unsignedTx"/> with.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match the public key of <paramref name="unsignedTx"/>.</exception>
        public Transaction(IUnsignedTx unsignedTx, PrivateKey privateKey)
        {
            _unsignedTx = unsignedTx is UnsignedTx u ? u : new UnsignedTx(unsignedTx);
            _signature = _unsignedTx.CreateSignature(privateKey).ToArray();
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by combining an
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
        internal Transaction(UnsignedTx unsignedTx, ImmutableArray<byte> alreadyVerifiedSignature)
        {
            _unsignedTx = unsignedTx;
            _signature = alreadyVerifiedSignature.IsDefaultOrEmpty
                ? Array.Empty<byte>()
                : alreadyVerifiedSignature.ToArray();
        }

        /// <summary>
        /// A unique identifier derived from this <see cref="Transaction{T}"/>'s
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
        /// <see cref="Transaction{T}"/>.  This is signed by the account
        /// who corresponds to <see cref="PublicKey"/>.
        /// This cannot be <see langword="null"/>.
        /// </summary>
        /// <returns>A new <see cref="byte"/> array of this transaction's
        /// signature.  Changing a returned array does not affect the internal
        /// state of this <see cref="Transaction{T}"/> object.</returns>
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

        /// <summary>
        /// A system action (if any) that this <see cref="Transaction{T}"/> contains.
        /// </summary>
        /// <remarks>This property is mutually exclusive with <see cref="CustomActions"/>;
        /// either one of them must be <see langword="null"/> and the other must not be
        /// <see langword="null"/>.</remarks>
        [JsonIgnore]
        public IAction? SystemAction => Actions is TxSystemActionList sysActions
            ? sysActions.SystemAction
            : null;  // TODO: Remove this property.

        /// <summary>
        /// Zero or more user-defined custom actions that this <see cref="Transaction{T}"/>
        /// contains.  These are executed in the order.
        /// </summary>
        /// <remarks>This property is mutually exclusive with <see cref="SystemAction"/>;
        /// either one of them must be <see langword="null"/> and the other must not be
        /// <see langword="null"/>.</remarks>
        [JsonIgnore]
        public IImmutableList<T>? CustomActions => Actions is TxCustomActionList actions
            ? actions.CustomActions.OfType<T>().ToImmutableList()
            : null;  // TODO: Remove this property.

        Dictionary? ITransaction.SystemAction => SystemAction is { } sysAction
            ? Registry.Serialize(sysAction)
            : null;

        IImmutableList<IValue>? ITransaction.CustomActions => CustomActions is { } actions
            ? actions.Select(a => a.PlainValue).ToImmutableList()
            : null;

        /// <inheritdoc cref="ITxInvoice.Timestamp"/>
        public DateTimeOffset Timestamp => _unsignedTx.Timestamp;

        /// <inheritdoc cref="ITxSigningMetadata.PublicKey"/>
        public PublicKey PublicKey => _unsignedTx.PublicKey;

        /// <inheritdoc cref="ITxInvoice.GenesisHash"/>
        public BlockHash? GenesisHash => _unsignedTx.GenesisHash;

        /// <summary>
        /// Decodes a <see cref="Transaction{T}"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="Transaction{T}"/>.</param>
        /// <returns>A decoded <see cref="Transaction{T}"/> object.</returns>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Signature"/> is invalid or not signed by
        /// the account who corresponds to <see cref="PublicKey"/>.
        /// </exception>
        /// <seealso cref="Serialize()"/>
        public static Transaction<T> Deserialize(byte[] bytes)
        {
            // TODO: Move this method to TxMarshaler.
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return TxMarshaler.UnmarshalTransaction<T>(dict);
        }

        /// <summary>
        /// Almost same as <see cref="Create(long, PrivateKey, BlockHash?, IEnumerable{T},
        /// IImmutableSet{Address}?, DateTimeOffset?)"/> except that this factory method takes
        /// a <paramref name="systemAction"/> instead of user-defined custom actions.
        /// </summary>
        /// <param name="nonce">Specifies <see cref="Transaction{T}.Nonce"/>.</param>
        /// <param name="privateKey">Derives <see cref="Transaction{T}.PublicKey"/>,
        /// <see cref="Transaction{T}.Signer"/>, and <see cref="Transaction{T}.Signature"/>
        /// from this.</param>
        /// <param name="genesisHash">Specifies <see cref="Transaction{T}.GenesisHash"/>.</param>
        /// <param name="systemAction">Specifies <see cref="Transaction{T}.SystemAction"/>.</param>
        /// <param name="updatedAddresses">Specifies <see cref="Transaction{T}.UpdatedAddresses"/>.
        /// The resulting <see cref="Transaction{T}"/> may contain more
        /// <see cref="Transaction{T}.UpdatedAddresses"/> than this argument.</param>
        /// <param name="timestamp">Specifies <see cref="Transaction{T}.Timestamp"/>.</param>
        /// <returns>A created signed <see cref="Transaction{T}"/>.</returns>
        public static Transaction<T> Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            IAction systemAction,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null
        ) =>
            Create(
                nonce,
                privateKey,
                genesisHash,
                new TxSystemActionList(systemAction),
                updatedAddresses,
                timestamp
            );

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction{T}"/>.
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
        /// <description><paramref name="customActions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
        /// <para>Note that the <paramref name="privateKey"/> in itself is not
        /// included in the created <see cref="Transaction{T}"/>.</para>
        /// </summary>
        /// <remarks>
        /// This factory method tries its best to fill the <see
        /// cref="UpdatedAddresses"/> property by actually evaluating
        /// the given <paramref name="customActions"/> (we call it &#x201c;rehearsal
        /// mode&#x201d;), but remember that its result
        /// is approximated in some degree, because the result of
        /// <paramref name="customActions"/> are not deterministic until
        /// the <see cref="Transaction{T}"/> belongs to a <see
        /// cref="Libplanet.Blocks.Block{T}"/>.
        /// <para>If an <see cref="IAction"/> depends on previous states or
        /// some randomness to determine what <see cref="Address"/> to update,
        /// the automatically filled <see cref="UpdatedAddresses"/> became
        /// mismatched from the <see cref="Address"/>es
        /// <paramref name="customActions"/> actually update after
        /// a <see cref="Libplanet.Blocks.Block{T}"/> is mined.
        /// Although such case would be rare, a programmer could manually give
        /// the <paramref name="updatedAddresses"/> parameter
        /// the <see cref="Address"/>es they predict to be updated.</para>
        /// <para>If an <see cref="IAction"/> oversimplifies the assumption
        /// about the <see cref="Libplanet.Blocks.Block{T}"/> it belongs to,
        /// runtime exceptions could be thrown from this factory method.
        /// The best solution to that is not to oversimplify things,
        /// there is an option to check <see cref="IActionContext"/>'s
        /// <see cref="IActionContext.Rehearsal"/> is <see langword="true"/> and
        /// a conditional logic for the case.</para>
        /// </remarks>
        /// <param name="nonce">The number of previous
        /// <see cref="Transaction{T}"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="Transaction{T}.Nonce"/> property.</param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account
        /// who creates and signs a new transaction.  This key is used to fill
        /// the <see cref="Signer"/>, <see cref="PublicKey"/>, and
        /// <see cref="Signature"/> properties, but this in itself is not
        /// included in the transaction.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="Transaction{T}"/> is made from.
        /// This can be <see langword="null"/> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="customActions">A list of user-defined custom actions to include.  This can
        /// be empty, but cannot be <see langword="null"/>.  This goes to
        /// the <see cref="CustomActions"/> property, and these actionss are evaluated before
        /// a <see cref="Transaction{T}"/> is created in order to fill
        /// the <see cref="UpdatedAddresses"/>.  See also <em>Remarks</em> section.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="customActions"/>.
        /// These <see cref="Address"/>es are also included in
        /// the <see cref="UpdatedAddresses"/> property, besides
        /// <see cref="Address"/>es projected by evaluating
        /// <paramref name="customActions"/>.  See also <em>Remarks</em> section.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.  If <see langword="null"/> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by
        /// the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/>
        /// is passed to <paramref name="privateKey"/> or <paramref name="customActions"/>.
        /// </exception>
        public static Transaction<T> Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            IEnumerable<T> customActions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null
        ) =>
            Create(
                nonce,
                privateKey,
                genesisHash,
                new TxCustomActionList(customActions.OfType<IAction>().ToImmutableList()),
                updatedAddresses,
                timestamp
            );

        /// <summary>
        /// Encodes this <see cref="Transaction{T}"/> into a <see cref="byte"/> array.
        /// </summary>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="Transaction{T}"/>.</returns>
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
        public bool Equals(Transaction<T>? other) => Id.Equals(other?.Id);

        /// <inheritdoc />
        public override bool Equals(object? obj) => obj is Transaction<T> other && Equals(other);

        /// <inheritdoc />
        public override int GetHashCode() => Id.GetHashCode();

        private static T ToAction(IValue value)
        {
            var action = new T();
            action.LoadPlainValue(value);
            return action;
        }

        private static Transaction<T> Create(
            long nonce,
            PrivateKey privateKey,
            BlockHash? genesisHash,
            TxActionList actions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null
        )
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
            var unsignedDraftTx = new UnsignedTx(draftInvoice, signMeta);

            var draftTx = new Transaction<T>(unsignedDraftTx, privateKey);
            IImmutableSet<Address> evaluatedUpdatedAddresses =
                ActionEvaluator.GetUpdatedAddresses(draftTx);
            var invoice = new TxInvoice(
                draftInvoice.GenesisHash,
                draftInvoice.UpdatedAddresses.Union(evaluatedUpdatedAddresses),
                draftInvoice.Timestamp,
                draftInvoice.Actions);
            var unsignedTx = new UnsignedTx(invoice, signMeta);
            return new Transaction<T>(unsignedTx, privateKey);
        }
    }
}
