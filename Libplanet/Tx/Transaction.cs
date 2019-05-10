using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Serialization;

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
    public class Transaction<T> : ISerializable, IEquatable<Transaction<T>>
        where T : IAction, new()
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private byte[] _signature;

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/>.
        /// <para>This constructor takes all required and only required values
        /// for a <see cref="Transaction{T}"/>, so gives you full control of
        /// creating a <see cref="Transaction{T}"/>, and in other words,
        /// this constructor is only useful when all details of
        /// a <see cref="Transaction{T}"/> need to be manually adjusted.
        /// For the most cases, the fa&#xe7;ade factory <see
        /// cref="Create(PrivateKey, IEnumerable{T}, IImmutableSet{Address},
        /// DateTimeOffset?)"/> is more useful.</para>
        /// </summary>
        /// <param name="signer">An <see cref="Address"/> of the account
        /// who signs this transaction.  If this is not derived from <paramref
        /// name="publicKey"/> <see cref="InvalidTxPublicKeyException"/> is
        /// thrown.  This goes to the <see cref="Signer"/> property.</param>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the account
        /// who signs this transaction.  If this does not match to <paramref
        /// name="signer"/> address <see cref="InvalidTxPublicKeyException"/>
        /// is thrown.  This cannot be <c>null</c>.  This goes to
        /// the <see cref="PublicKey"/> property.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.  This goes to
        /// the <see cref="UpdatedAddresses"/> property.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s.  This
        /// can be empty, but cannot be <c>null</c>.  This goes to
        /// the <see cref="Actions"/> property.</param>
        /// <param name="signature">A digital signature of the content of
        /// this <see cref="Transaction{T}"/>.  This has to be signed by
        /// the account who corresponds to <paramref name="publicKey"/>,
        /// or it will throw <see cref="InvalidTxSignatureException"/>.
        /// This is copied and then assigned to the <see cref="Signature"/>
        /// property.</param>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="signature"/>,
        /// <paramref name="actions"/>, or <paramref name="publicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <paramref name="signature"/> is invalid or not signed by
        /// the account who corresponds to <paramref name="publicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <paramref name="signer"/> is not derived from its
        /// <paramref name="publicKey"/>.</exception>
        public Transaction(
            Address signer,
            PublicKey publicKey,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            IEnumerable<T> actions,
            byte[] signature)
            : this(
                signer,
                publicKey,
                updatedAddresses,
                timestamp,
                actions,
                signature,
                true)
        {
        }

        internal Transaction(RawTransaction rawTx)
            : this(
                new Address(rawTx.Signer),
                new PublicKey(rawTx.PublicKey),
                rawTx.UpdatedAddresses.Select(
                    a => new Address(a)
                ).ToImmutableHashSet(),
                DateTimeOffset.ParseExact(
                    rawTx.Timestamp,
                    TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                rawTx.Actions.Select(ToAction).ToImmutableList(),
                rawTx.Signature,
                false)
        {
        }

        // ReSharper disable once UnusedMember.Local
        private Transaction(SerializationInfo info, StreamingContext context)
            : this(new RawTransaction(info, context))
        {
        }

        private Transaction(
            Address signer,
            PublicKey publicKey,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            IEnumerable<T> actions)
            : this(
                signer,
                publicKey,
                updatedAddresses,
                timestamp,
                actions.ToImmutableList(),
                new byte[0],
                false)
        {
        }

        private Transaction(
            Address signer,
            PublicKey publicKey,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            IEnumerable<T> actions,
            byte[] signature,
            bool validate)
        {
            Signer = signer;
            UpdatedAddresses = updatedAddresses ??
                    throw new ArgumentNullException(nameof(updatedAddresses));
            Signature = signature ??
                    throw new ArgumentNullException(nameof(signature));
            Timestamp = timestamp;
            Actions = actions?.ToImmutableList() ??
                      throw new ArgumentNullException(nameof(actions));
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));

            using (var hasher = SHA256.Create())
            {
                byte[] payload = ToBencodex(true);
                Id = new TxId(hasher.ComputeHash(payload));
            }

            if (validate)
            {
                Validate();
            }
        }

        /// <summary>
        /// A unique identifier derived from this <see cref="Transaction{T}"/>'s
        /// content.
        /// <para>For more characteristics, see <see cref="TxId"/> type.</para>
        /// </summary>
        /// <seealso cref="TxId"/>
        public TxId Id { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
        /// This is derived from the <see cref="PublicKey"/>.
        /// </summary>
        public Address Signer { get; }

        /// <summary>
        /// <see cref="Address"/>es whose states affected by
        /// <see cref="Actions"/>.
        /// </summary>
        public IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// A digital signature of the content of this
        /// <see cref="Transaction{T}"/>.  This is signed by the account
        /// who corresponds to <see cref="PublicKey"/>.
        /// This cannot be <c>null</c>.
        /// </summary>
        /// <returns>A new <see cref="byte"/> array of this transaction's
        /// signature.  Changing a returned array does not affect the internal
        /// state of this <see cref="Transaction{T}"/> object.</returns>
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
        /// This can be empty, but cannot be <c>null</c>.
        /// </summary>
        public IImmutableList<T> Actions { get; }

        /// <summary>
        /// The time this <see cref="Transaction{T}"/> is created and signed.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this
        /// <see cref="Transaction{T}"/>.
        /// The <see cref="Signer"/> address is always corresponding to this
        /// for each transaction.  This cannot be <c>null</c>.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// Decodes a transaction's
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a transaction.</param>
        /// <returns>A decoded <see cref="Transaction{T}"/> object.</returns>
        /// <seealso cref="ToBencodex(bool)"/>
        public static Transaction<T> FromBencodex(byte[] bytes)
        {
            var serializer = new BencodexFormatter<Transaction<T>>();
            using (var stream = new MemoryStream(bytes))
            {
                // FIXME: Shouldn't it call Validate() here?
                return (Transaction<T>)serializer.Deserialize(stream);
            }
        }

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="Transaction{T}"/>.
        /// Unlike the <see cref="Transaction(Address, PublicKey,
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
        /// <description><paramref name="actions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
        /// <para>Note that the <paramref name="privateKey"/> in itself is not
        /// included in the created <see cref="Transaction{T}"/>.</para>
        /// </summary>
        /// <remarks>
        /// This factory method tries its best to fill the <see
        /// cref="UpdatedAddresses"/> property by actually evaluating
        /// the given <paramref name="actions"/> (we call it &#x201c;rehearsal
        /// mode&#x201d;), but remember that its result
        /// is approximated in some degree, because the result of
        /// <paramref name="actions"/> are not deterministic until
        /// the <see cref="Transaction{T}"/> belongs to a <see
        /// cref="Libplanet.Blocks.Block{T}"/>.
        /// <para>If an <see cref="IAction"/> depends on previous states or
        /// some randomness to determine what <see cref="Address"/> to update,
        /// the automatically filled <see cref="UpdatedAddresses"/> became
        /// mismatched from the <see cref="Address"/>es
        /// <paramref name="actions"/> actually update after
        /// a <see cref="Libplanet.Blocks.Block{T}"/> is mined.
        /// Although such case would be rare, a programmer could manually give
        /// the <paramref name="updatedAddresses"/> parameter
        /// the <see cref="Address"/>es they predict to be updated.</para>
        /// <para>If an <see cref="IAction"/> oversimplifies the assumption
        /// about the <see cref="Libplanet.Blocks.Block{T}"/> it belongs to,
        /// runtime exceptions could be thrown from this factory method.
        /// The best solution to that is not to oversimplify things,
        /// there is an option to check <see cref="IActionContext"/>'s
        /// <see cref="IActionContext.Rehearsal"/> is <c>true</c> and
        /// a conditional logic for the case.</para>
        /// </remarks>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account
        /// who creates and signs a new transaction.  This key is used to fill
        /// the <see cref="Signer"/>, <see cref="PublicKey"/>, and
        /// <see cref="Signature"/> properties, but this in itself is not
        /// included in the transaction.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s.  This
        /// can be empty, but cannot be <c>null</c>.  This goes to
        /// the <see cref="Actions"/> property, and <see cref="IAction"/>s
        /// are evaluated before a <see cref="Transaction{T}"/> is created
        /// in order to fill the <see cref="UpdatedAddresses"/>.  See also
        /// <em>Remarks</em> section.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.
        /// These <see cref="Address"/>es are also included in
        /// the <see cref="UpdatedAddresses"/> property, besides
        /// <see cref="Address"/>es projected by evaluating
        /// <paramref name="actions"/>.  See also <em>Remarks</em> section.
        /// </param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.  If <c>null</c> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by
        /// the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="privateKey"/> or
        /// or <paramref name="actions"/>.
        /// </exception>
        /// <exception cref="UnexpectedlyTerminatedTxRehearsalException">
        /// Thrown when one of <paramref name="actions"/> throws some
        /// exception during their rehearsal.
        /// <para>This exception is thrown probably because the logic of some of
        /// the <paramref name="actions"/> is not enough generic so that
        /// it can cover every case including &#x201c;rehearsal mode.&#x201d;
        /// The <see cref="IActionContext.Rehearsal"/> property also might be
        /// useful to make the <see cref="IAction"/> can deal with the case of
        /// rehearsal mode.</para>
        /// <para>The actual exception that an <see cref="IAction"/> threw
        /// is stored in its <see cref="Exception.InnerException"/> property.
        /// </para>
        /// </exception>
        public static Transaction<T> Create(
            PrivateKey privateKey,
            IEnumerable<T> actions,
            IImmutableSet<Address> updatedAddresses = null,
            DateTimeOffset? timestamp = null
        )
        {
            if (ReferenceEquals(privateKey, null))
            {
                throw new ArgumentNullException(nameof(privateKey));
            }

            PublicKey publicKey = privateKey.PublicKey;
            var signer = new Address(publicKey);

            if (ReferenceEquals(updatedAddresses, null))
            {
                updatedAddresses = ImmutableHashSet<Address>.Empty;
            }

            DateTimeOffset ts = timestamp ?? DateTimeOffset.UtcNow;

            ImmutableArray<T> actionsArray = actions.ToImmutableArray();
            byte[] payload = new Transaction<T>(
                signer,
                publicKey,
                updatedAddresses,
                ts,
                actionsArray
            ).ToBencodex(false);

            if (!actionsArray.IsEmpty)
            {
                IAccountStateDelta delta = new Transaction<T>(
                    signer,
                    publicKey,
                    updatedAddresses,
                    ts,
                    actionsArray
                ).EvaluateActions(
                    default(HashDigest<SHA256>),
                    0,
                    new AccountStateDeltaImpl(_ => null),
                    signer,
                    rehearsal: true
                );
                if (!updatedAddresses.IsSupersetOf(delta.UpdatedAddresses))
                {
                    updatedAddresses =
                        updatedAddresses.Union(delta.UpdatedAddresses);
                    payload = new Transaction<T>(
                        signer,
                        publicKey,
                        updatedAddresses,
                        ts,
                        actionsArray
                    ).ToBencodex(false);
                }
            }

            byte[] sig = privateKey.Sign(payload);
            return new Transaction<T>(
                signer,
                publicKey,
                updatedAddresses,
                ts,
                actionsArray,
                sig
            );
        }

        /// <summary>
        /// Encodes this <see cref="Transaction{T}"/> into a <see cref="byte"/>
        /// array.
        /// <para>This is an inverse function of
        /// <see cref="FromBencodex(byte[])"/> method
        /// where <paramref name="sign"/> is <c>true</c>.</para>
        /// </summary>
        /// <param name="sign">Whether to include its <see cref="Signature"/>.
        /// Note that an encoding without signature cannot be decoded using
        /// <see cref="FromBencodex(byte[])"/> method.
        /// </param>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="Transaction{T}"/>.</returns>
        /// <seealso cref="FromBencodex(byte[])"/>
        public byte[] ToBencodex(bool sign)
        {
            var serializer = new BencodexFormatter<Transaction<T>>
            {
                Context = new StreamingContext(
                    StreamingContextStates.All,
                    new TransactionSerializationContext
                    {
                        IncludeSignature = sign,
                    }
                ),
            };
            using (var stream = new MemoryStream())
            {
                serializer.Serialize(stream, this);
                return stream.ToArray();
            }
        }

        /// <summary>
        /// Executes the <see cref="Actions"/> step by step, and emits
        /// an action, input context, and output states for each step.
        /// <para>If the needed value is only the final states,
        /// use <see cref="EvaluateActions"/> method instead.</para>
        /// </summary>
        /// <param name="blockHash">The <see
        /// cref="Libplanet.Blocks.Block{T}.Hash"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this
        /// <see cref="Transaction{T}"/> will belong to.</param>
        /// <param name="blockIndex">The <see
        /// cref="Libplanet.Blocks.Block{T}.Index"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this
        /// <see cref="Transaction{T}"/> will belong to.</param>
        /// <param name="previousStates">The states immediately before
        /// <see cref="Actions"/> being executed.  Note that its
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> are remained
        /// to the returned next states.</param>
        /// <param name="minerAddress">An address of block miner.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <returns>Enumerates an action, input context, and
        /// output states for each one in <see cref="Actions"/>.
        /// The order is the same to the <see cref="Actions"/>.
        /// Note that each <see cref="IActionContext.Random"/> object has
        /// a unconsumed state.
        /// </returns>
        /// <exception cref="UnexpectedlyTerminatedTxRehearsalException">
        /// Thrown when one of <see cref="Actions"/> throws some
        /// exception during <paramref name="rehearsal"/> mode.
        /// The actual exception that an <see cref="IAction"/> threw
        /// is stored in its <see cref="Exception.InnerException"/> property.
        /// It is never thrown if the <paramref name="rehearsal"/> option is
        /// <c>false</c>.
        /// </exception>
        [Pure]
        public IEnumerable<ActionEvaluation<T>>
        EvaluateActionsGradually(
            HashDigest<SHA256> blockHash,
            long blockIndex,
            IAccountStateDelta previousStates,
            Address minerAddress,
            bool rehearsal = false
        )
        {
            ActionContext CreateActionContext(
                IAccountStateDelta prevStates,
                int randomSeed
            ) =>
                new ActionContext(
                    signer: Signer,
                    miner: minerAddress,
                    blockIndex: blockIndex,
                    previousStates: prevStates,
                    randomSeed: randomSeed,
                    rehearsal: rehearsal
                );

            int seed =
                BitConverter.ToInt32(blockHash.ToByteArray(), 0) ^
                (Signature.Any() ? BitConverter.ToInt32(Signature, 0) : 0);
            IAccountStateDelta states = previousStates;
            foreach (T action in Actions)
            {
                ActionContext context =
                    CreateActionContext(states, seed);
                IAccountStateDelta nextStates;
                try
                {
                    nextStates = action.Execute(context);
                }
                catch (Exception e)
                {
                    if (!rehearsal)
                    {
                        throw;
                    }

                    var msg =
                        $"The action {action} threw an exception during its " +
                        "rehearsal.  It is probably because the logic of the " +
                        $"action {action} is not enough generic so that it " +
                        "can cover every case including rehearsal mode.\n" +
                        "The IActionContext.Rehearsal property also might be " +
                        "useful to make the action can deal with the case of " +
                        "rehearsal mode.\n" +
                        "See also this exception's InnerException property.";
                    throw new UnexpectedlyTerminatedTxRehearsalException(
                        action, msg, e
                    );
                }

                // As IActionContext.Random is stateful, we cannot reuse
                // the context which is once consumed by Execute().
                ActionContext equivalentContext =
                    CreateActionContext(states, seed);

                yield return new ActionEvaluation<T>(
                    action,
                    equivalentContext,
                    nextStates
                );
                states = nextStates;
                unchecked
                {
                    seed++;
                }
            }
        }

        /// <summary>
        /// Executes the <see cref="Actions"/> and gets the result states.
        /// </summary>
        /// <param name="blockHash">The <see
        /// cref="Libplanet.Blocks.Block{T}.Hash"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this
        /// <see cref="Transaction{T}"/> will belong to.</param>
        /// <param name="blockIndex">The <see
        /// cref="Libplanet.Blocks.Block{T}.Index"/> of
        /// <see cref="Libplanet.Blocks.Block{T}"/> that this
        /// <see cref="Transaction{T}"/> will belong to.</param>
        /// <param name="previousStates">The states immediately before
        /// <see cref="Actions"/> being executed.  Note that its
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> are remained
        /// to the returned next states.</param>
        /// <param name="minerAddress">An address of block miner.</param>
        /// <param name="rehearsal">Pass <c>true</c> if it is intended
        /// to be dry-run (i.e., the returned result will be never used).
        /// The default value is <c>false</c>.</param>
        /// <returns>The states immediately after <see cref="Actions"/>
        /// being executed.  Note that it maintains
        /// <see cref="IAccountStateDelta.UpdatedAddresses"/> of the given
        /// <paramref name="previousStates"/> as well.</returns>
        /// <exception cref="UnexpectedlyTerminatedTxRehearsalException">
        /// Thrown when one of <see cref="Actions"/> throws some
        /// exception during <paramref name="rehearsal"/> mode.
        /// The actual exception that an <see cref="IAction"/> threw
        /// is stored in its <see cref="Exception.InnerException"/> property.
        /// It is never thrown if the <paramref name="rehearsal"/> option is
        /// <c>false</c>.
        /// </exception>
        [Pure]
        public IAccountStateDelta EvaluateActions(
            HashDigest<SHA256> blockHash,
            long blockIndex,
            IAccountStateDelta previousStates,
            Address minerAddress,
            bool rehearsal = false
        )
        {
            var evaluations = EvaluateActionsGradually(
                blockHash,
                blockIndex,
                previousStates,
                minerAddress,
                rehearsal: rehearsal
            );

            ActionEvaluation<T> lastEvaluation;
            try
            {
                lastEvaluation = evaluations.Last();
            }
            catch (InvalidOperationException)
            {
                // If "evaluations" is empty:
                return previousStates;
            }

            return lastEvaluation.OutputStates;
        }

        /// <summary>
        /// Validates this <see cref="Transaction{T}"/>.  If there is something
        /// invalid it throws an exception.  If valid it does nothing.
        /// </summary>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its <see cref="PublicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Signer"/> is not derived from its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        public void Validate()
        {
            if (!PublicKey.Verify(ToBencodex(false), Signature))
            {
                string message =
                    $"The signature ({ByteUtil.Hex(Signature)}) is failed " +
                    "to verify.";
                throw new InvalidTxSignatureException(Id, message);
            }

            if (!new Address(PublicKey).Equals(Signer))
            {
                string message =
                    $"The public key ({ByteUtil.Hex(PublicKey.Format(true))} " +
                    $"is not matched to the address ({Signer}).";
                throw new InvalidTxPublicKeyException(Id, message);
            }
        }

        /// <inheritdoc />
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context)
        {
            bool includeSignature =
                context.Context is TransactionSerializationContext txContext &&
                txContext.IncludeSignature;
            RawTransaction rawTx = ToRawTransaction(includeSignature);
            rawTx.GetObjectData(info, context);
        }

        /// <inheritdoc />
        public bool Equals(Transaction<T> other)
        {
            return Id.Equals(other.Id);
        }

        /// <inheritdoc />
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }

            return obj is Transaction<T> other && Equals(other);
        }

        /// <inheritdoc />
        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        internal RawTransaction ToRawTransaction(bool includeSign)
        {
            var rawTx = new RawTransaction(
                signer: Signer.ToByteArray(),
                updatedAddresses: UpdatedAddresses.Select(a =>
                    a.ToByteArray()).ToArray(),
                publicKey: PublicKey.Format(false),
                timestamp: Timestamp.ToString(TimestampFormat),
                actions: Actions.Select(a =>
                    a.PlainValue.ToDictionary(
                        kv => kv.Key,
                        kv => kv.Value
                    )
                )
            );

            if (includeSign)
            {
                rawTx = rawTx.AddSignature(Signature);
            }

            return rawTx;
        }

        private static T ToAction(IDictionary<string, object> arg)
        {
            var action = new T();
            action.LoadPlainValue(arg.ToImmutableDictionary());
            return action;
        }

        private struct TransactionSerializationContext
        {
            internal bool IncludeSignature { get; set; }
        }
    }
}
