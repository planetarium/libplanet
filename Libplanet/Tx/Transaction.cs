using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
    /// <seealso cref="IAction"/>
    /// <seealso cref="PolymorphicAction{T}"/>
    public sealed class Transaction<T> : IEquatable<Transaction<T>>, ITransaction
        where T : IAction, new()
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // If a tx is longer than 50 KiB don't cache its bytes representation to _bytes.
        private const int BytesCacheThreshold = 50 * 1024;

        private static readonly Codec Codec = new Codec();

        private readonly IImmutableList<IValue>? _customActions;

        private readonly Dictionary? _systemAction;

        private TxId? _id;
        private TxMetadata _metadata;
        private byte[] _signature;
        private byte[]? _bytes;

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by copying data from a specified
        /// transaction <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">The transaction metadata that contains data to copy.</param>
        /// <param name="systemAction">A system built-in action to include.  This cannot be
        /// <see langword="null"/>, and goes to the <see cref="SystemAction"/> property.</param>
        /// <param name="signature">A digital signature of the content of this
        /// <see cref="Transaction{T}"/>.  This has to be signed by <paramref name="metadata"/>'s
        /// <see cref="ITxMetadata.PublicKey"/>. This is copied and then assigned to
        /// the <see cref="Signature"/> property.</param>
        public Transaction(ITxMetadata metadata, IAction systemAction, byte[] signature)
        {
            _metadata = new TxMetadata(metadata);
            _systemAction = Registry.Serialize(systemAction);
            _signature = new byte[signature.Length];
            signature.CopyTo(_signature, 0);
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by copying data from a specified
        /// transaction <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">The transaction metadata that contains data to copy.</param>
        /// <param name="customActions">A list of user-defined custom actions to include.  This can
        /// be empty, but cannot be <see langword="null"/>.  This goes to
        /// the <see cref="CustomActions"/> property.</param>
        /// <param name="signature">A digital signature of the content of this
        /// <see cref="Transaction{T}"/>.  This has to be signed by <paramref name="metadata"/>'s
        /// <see cref="ITxMetadata.PublicKey"/>. This is copied and then assigned to
        /// the <see cref="Signature"/> property.</param>
        public Transaction(ITxMetadata metadata, IEnumerable<T> customActions, byte[] signature)
        {
            _metadata = new TxMetadata(metadata);
            _customActions = customActions.Select(ca => ca.PlainValue).ToImmutableList();
            _signature = new byte[signature.Length];
            signature.CopyTo(_signature, 0);
        }

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/>.
        /// <para>This constructor takes all required and only required values
        /// for a <see cref="Transaction{T}"/>, so gives you full control of
        /// creating a <see cref="Transaction{T}"/>, and in other words,
        /// this constructor is only useful when all details of
        /// a <see cref="Transaction{T}"/> need to be manually adjusted.
        /// For the most cases, the fa&#xe7;ade factory <see
        /// cref="Create(long, PrivateKey, BlockHash?, IEnumerable{T},
        /// IImmutableSet{Address}, DateTimeOffset?)"/> is more useful.</para>
        /// </summary>
        /// <param name="nonce">The number of previous
        /// <see cref="Transaction{T}"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="Transaction{T}.Nonce"/> property.</param>
        /// <param name="signer">Ignored.  Left only for backward compatibility.  It will be
        /// completely gone in the future.  See also <paramref name="publicKey"/> parameter's
        /// description.</param>
        /// <param name="publicKey">A <see cref="PublicKey"/> used for signing this transaction.
        /// This cannot be <see langword="null"/>.  This goes to the <see cref="PublicKey"/>
        /// property, and <see cref="Signer"/> property is also derived from this value.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="Transaction{T}"/> is made from.
        /// This can be <see langword="null"/> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="customActions"/>.  This goes to
        /// the <see cref="UpdatedAddresses"/> property.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.</param>
        /// <param name="customActions">A list of user-defined custom actions to include.  This can
        /// be empty, but cannot be <see langword="null"/>.  This goes to
        /// the <see cref="CustomActions"/> property.</param>
        /// <param name="signature">A digital signature of the content of
        /// this <see cref="Transaction{T}"/>.  This has to be signed by
        /// the account who corresponds to <paramref name="publicKey"/>,
        /// or it will throw <see cref="InvalidTxSignatureException"/>.
        /// This is copied and then assigned to the <see cref="Signature"/>
        /// property.</param>
        [Obsolete("Use constructors taking ITxMetadata or static factory methods instead.")]
        public Transaction(
            long nonce,
            Address signer,
            PublicKey publicKey,
            BlockHash? genesisHash,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            IEnumerable<T> customActions,
            byte[] signature)
        {
            // TODO: Remove parameter signer in the future.  Apparently no more used.
            // FIXME: This constructor should be removed.
            _metadata = new TxMetadata(publicKey)
            {
                Nonce = nonce,
                GenesisHash = genesisHash,
                UpdatedAddresses = updatedAddresses,
                Timestamp = timestamp,
            };

            _signature = new byte[signature.Length];
            signature.CopyTo(_signature, 0);
            _customActions = customActions.Select(ca => ca.PlainValue)
                .ToImmutableList();
        }

        /// <summary>
        /// Creates a <see cref="Transaction{T}"/> instance from its serialization.
        /// </summary>
        /// <param name="dict">The <see cref="Bencodex.Types.Dictionary"/>
        /// representation of <see cref="Transaction{T}"/> instance.
        /// </param>
        public Transaction(Bencodex.Types.Dictionary dict)
        {
            _metadata = new TxMetadata(dict);
            if (dict.TryGetValue(new Binary(TxMetadata.SystemActionKey), out IValue sa))
            {
                _systemAction = (Dictionary)sa;
            }
            else
            {
                _customActions = dict.GetValue<List>(TxMetadata.CustomActionsKey)
                    .ToImmutableList();
            }

            _signature
                = dict.TryGetValue((Binary)TxMetadata.SignatureKey, out IValue s) && s is Binary sig
                ? sig.ToByteArray()
                : Array.Empty<byte>();
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
                    byte[] payload = Serialize(true);
                    _id = nonNull = new TxId(hasher.ComputeHash(payload));
                }

                return nonNull;
            }
        }

        /// <inheritdoc cref="ITxMetadata.Nonce"/>
        public long Nonce => _metadata.Nonce;

        /// <inheritdoc cref="ITxMetadata.Signer"/>
        public Address Signer => _metadata.Signer;

        /// <inheritdoc cref="ITxMetadata.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses => _metadata.UpdatedAddresses;

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
        /// <remarks>This property is deprecated.  Use <see cref="CustomActions"/> or
        /// <see cref="SystemAction"/> instead.</remarks>
        [JsonIgnore]
        [Obsolete("Use " + nameof(CustomActions) + " or " + nameof(SystemAction) + " instead.")]
        public IImmutableList<IAction> Actions =>
            SystemAction is { } sysAction
                ? ImmutableList.Create(sysAction)
                : ImmutableList.CreateRange(CustomActions!.Cast<IAction>());

        /// <summary>
        /// A system action (if any) that this <see cref="Transaction{T}"/> contains.
        /// </summary>
        /// <remarks>This property is mutually exclusive with <see cref="CustomActions"/>;
        /// either one of them must be <see langword="null"/> and the other must not be
        /// <see langword="null"/>.</remarks>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonConverter(typeof(SysActionJsonConverter))]
        public IAction? SystemAction => (_systemAction is { } sa)
            ? Registry.Deserialize(sa)
            : null;

        /// <summary>
        /// Zero or more user-defined custom actions that this <see cref="Transaction{T}"/>
        /// contains.  These are executed in the order.
        /// </summary>
        /// <remarks>This property is mutually exclusive with <see cref="SystemAction"/>;
        /// either one of them must be <see langword="null"/> and the other must not be
        /// <see langword="null"/>.</remarks>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonConverter(typeof(ActionListJsonConverter))]
        public IImmutableList<T>? CustomActions => _customActions?
            .Select(ToAction)
            .ToImmutableList();

        Dictionary? ITransaction.SystemAction => _systemAction is Dictionary dictionary
            ? dictionary
            : null;

        IImmutableList<IValue>? ITransaction.CustomActions => _customActions;

        /// <inheritdoc cref="ITxMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _metadata.Timestamp;

        /// <inheritdoc cref="ITxMetadata.PublicKey"/>
        public PublicKey PublicKey => _metadata.PublicKey;

        /// <inheritdoc cref="ITxMetadata.GenesisHash"/>
        public BlockHash? GenesisHash => _metadata.GenesisHash;

        /// <summary>
        /// Decodes a <see cref="Transaction{T}"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="Transaction{T}"/>.</param>
        /// <param name="validate">Whether to validate the transaction.</param>
        /// <returns>A decoded <see cref="Transaction{T}"/> object.</returns>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Signature"/> is invalid or not signed by
        /// the account who corresponds to <see cref="PublicKey"/>.
        /// </exception>
        /// <seealso cref="Serialize(bool)"/>
        public static Transaction<T> Deserialize(byte[] bytes, bool validate = true)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            var tx = new Transaction<T>(dict);
            if (validate)
            {
                tx.Validate();
            }

            if (bytes.Length < BytesCacheThreshold)
            {
                tx._bytes = bytes;
            }

            return tx;
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
        )
        {
            Transaction<T> unsignedTransaction = CreateUnsigned(
                nonce,
                privateKey.PublicKey,
                genesisHash,
                systemAction,
                updatedAddresses,
                timestamp);
            byte[] payload = unsignedTransaction.Serialize(false);
            byte[] sig = privateKey.Sign(payload);
            return new Transaction<T>(
                unsignedTransaction._metadata,
                unsignedTransaction.SystemAction!,
                sig
            );
        }

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction{T}"/>.
        /// Unlike the <see cref="Transaction(long, Address, PublicKey, BlockHash?,
        /// IImmutableSet{Address}, DateTimeOffset, IEnumerable{T}, byte[])"/>
        /// constructor, it automatically fills the following values from:
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
        )
        {
            if (privateKey is null)
            {
                throw new ArgumentNullException(nameof(privateKey));
            }

            Transaction<T> unsignedTransaction = CreateUnsigned(
                nonce,
                privateKey.PublicKey,
                genesisHash,
                customActions,
                updatedAddresses,
                timestamp);
            byte[] payload = unsignedTransaction.Serialize(false);
            byte[] sig = privateKey.Sign(payload);
            return new Transaction<T>(
                unsignedTransaction._metadata,
                unsignedTransaction.CustomActions!,
                sig
            );
        }

        /// <summary>
        /// Almost same as <see cref="CreateUnsigned(long, PublicKey, BlockHash?, IEnumerable{T},
        /// IImmutableSet{Address}?, DateTimeOffset?)"/> except that this factory method takes
        /// a <paramref name="systemAction"/> instead of user-defined custom actions.
        /// </summary>
        /// <param name="nonce">Specifies <see cref="Transaction{T}.Nonce"/>.</param>
        /// <param name="publicKey">Specifies <see cref="Transaction{T}.PublicKey"/>.</param>
        /// <param name="genesisHash">Specifies <see cref="Transaction{T}.GenesisHash"/>.</param>
        /// <param name="systemAction">Specifies <see cref="Transaction{T}.SystemAction"/>.</param>
        /// <param name="updatedAddresses">Specifies <see cref="Transaction{T}.UpdatedAddresses"/>.
        /// The resulting <see cref="Transaction{T}"/> may contain more
        /// <see cref="Transaction{T}.UpdatedAddresses"/> than this argument.</param>
        /// <param name="timestamp">Specifies <see cref="Transaction{T}.Timestamp"/>.</param>
        /// <returns>A created unsigned <see cref="Transaction{T}"/>.</returns>
        public static Transaction<T> CreateUnsigned(
            long nonce,
            PublicKey publicKey,
            BlockHash? genesisHash,
            IAction systemAction,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null
        )
        {
            var metadata = new TxMetadata(publicKey)
            {
                Nonce = nonce,
                GenesisHash = genesisHash,
                UpdatedAddresses = updatedAddresses ?? ImmutableHashSet<Address>.Empty,
                Timestamp = timestamp ?? DateTimeOffset.UtcNow,
            };
            var evalUpdatedAddresses = ActionEvaluator<T>.GetUpdatedAddresses(
                new Transaction<T>(metadata, systemAction, Array.Empty<byte>()));
            metadata.UpdatedAddresses = metadata.UpdatedAddresses.Union(evalUpdatedAddresses);

            return new Transaction<T>(metadata, systemAction, Array.Empty<byte>());
        }

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction{T}"/>.
        /// Unlike the <see cref="Transaction(long, Address, PublicKey, BlockHash?,
        /// IImmutableSet{Address}, DateTimeOffset, IEnumerable{T}, byte[])"/>
        /// constructor, it automatically fills the following values from:
        /// <list type="table">
        /// <listheader>
        /// <term>Property</term>
        /// <description>Parameter the filled value derived from</description>
        /// </listheader>
        /// <item>
        /// <term><see cref="Signer"/></term>
        /// <description><paramref name="publicKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="PublicKey"/></term>
        /// <description><paramref name="publicKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="UpdatedAddresses"/></term>
        /// <description><paramref name="customActions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
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
        /// <param name="publicKey">A <see cref="PublicKey"/> of the account
        /// who creates a new transaction.  This key is used to fill
        /// the <see cref="Signer"/> and <see cref="PublicKey"/> properties,
        /// but this in itself is not included in the transaction.</param>
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
        /// <paramref name="customActions"/>.  See also <em>Remarks</em> section.
        /// </param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created.  This goes to the <see cref="Timestamp"/>
        /// property.  If <see langword="null"/> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> unsigned.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/>
        /// is passed to <paramref name="customActions"/>.</exception>
        public static Transaction<T> CreateUnsigned(
            long nonce,
            PublicKey publicKey,
            BlockHash? genesisHash,
            IEnumerable<T> customActions,
            IImmutableSet<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null
        )
        {
            ImmutableArray<T> actionsArray = customActions.ToImmutableArray();
            var metadata = new TxMetadata(publicKey)
            {
                Nonce = nonce,
                GenesisHash = genesisHash,
                UpdatedAddresses = updatedAddresses ?? ImmutableHashSet<Address>.Empty,
                Timestamp = timestamp ?? DateTimeOffset.UtcNow,
            };
            if (!actionsArray.IsEmpty)
            {
                var evalUpdatedAddresses = ActionEvaluator<T>.GetUpdatedAddresses(
                    new Transaction<T>(metadata, actionsArray, Array.Empty<byte>()));
                metadata.UpdatedAddresses = metadata.UpdatedAddresses.Union(evalUpdatedAddresses);
            }

            return new Transaction<T>(metadata, actionsArray, Array.Empty<byte>());
        }

        /// <summary>
        /// Encodes this <see cref="Transaction{T}"/> into a <see cref="byte"/> array.
        /// </summary>
        /// <param name="sign">Whether to include its <see cref="Signature"/>.
        /// </param>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="Transaction{T}"/>.</returns>
        public byte[] Serialize(bool sign)
        {
            if (_bytes is { })
            {
                if (sign)
                {
                    return _bytes;
                }

                // Poor man's way to optimize serialization without signature...
                // FIXME: We need to rather reorganize the serialization layout
                //        & optimize Bencodex.Codec in general.
                if (_signature.Length > 0)
                {
                    byte[] sigDict =
                        Codec.Encode(Dictionary.Empty.Add(TxMetadata.SignatureKey, _signature));
                    var sigField = new byte[sigDict.Length - 1];
                    Array.Copy(sigDict, 1, sigField, 0, sigField.Length);
                    int sigOffset = _bytes.IndexOf(sigField);
                    if (sigOffset > 0)
                    {
                        int sigEnd = sigOffset + _signature.Length;
                        var buffer = new byte[_bytes.Length - sigField.Length];
                        Array.Copy(_bytes, buffer, sigOffset);
                        Array.Copy(_bytes, sigEnd, buffer, sigOffset, _bytes.Length - sigEnd);
                        return buffer;
                    }
                }
            }

            byte[] serialized = Codec.Encode(ToBencodex(sign));
            if (sign && serialized.Length < BytesCacheThreshold)
            {
                _bytes = serialized;
            }

            return serialized;
        }

        /// <summary>
        /// Encodes this <see cref="Transaction{T}"/> into a <see cref="IValue"/>.
        /// </summary>
        /// <param name="sign">Whether to include its <see cref="Signature"/>.
        /// Note that an encoding without signature cannot be decoded.
        /// </param>
        /// <returns>A <see cref="Bencodex.Types.Dictionary"/> typed
        /// <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="Transaction{T}"/>.</returns>
        public Bencodex.Types.Dictionary ToBencodex(bool sign)
        {
            Dictionary metadataDict = _systemAction is { } sa
                ? _metadata.ToBencodex().Add(
                    TxMetadata.SystemActionKey,
                    sa)
                : _metadata.ToBencodex().Add(
                    TxMetadata.CustomActionsKey,
                    new List(
                        _customActions
                        ?? throw new InvalidOperationException(
                            $"Unexpected Transaction<T> state. " +
                            $"{nameof(_systemAction)} or {nameof(_customActions)} should exist.")));
            return sign
                ? metadataDict.Add(TxMetadata.SignatureKey, ImmutableArray.Create(_signature))
                : metadataDict;
        }

        /// <summary>
        /// Validates this <see cref="Transaction{T}"/> and throws an appropriate exception
        /// if not valid.
        /// </summary>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its <see cref="PublicKey"/>.
        /// </exception>
        public void Validate()
        {
            if (Signature.Length == 0 || !PublicKey.Verify(Serialize(false), Signature))
            {
                string message =
                    $"The signature ({ByteUtil.Hex(Signature)}) is failed " +
                    "to verify.";
                throw new InvalidTxSignatureException(message, Id);
            }
        }

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
    }
}
