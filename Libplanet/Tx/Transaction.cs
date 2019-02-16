using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using System.Text;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Tx
{
    /// <summary>
    /// Consists of <see cref="IAction"/> and is signed to be included in
    /// a <see cref="Blocks.Block{T}"/> and transmitted over the network.
    /// </summary>
    /// <typeparam name="T">A subtype of <see cref="IAction"/> to include.
    /// Each game usually defines its own abstact base class which implements
    /// <see cref="IAction"/>, and uses it for this type parameter.
    /// This type parameter is aligned with <see cref="Blocks.Block{T}"/>'s
    /// and <see cref="Blockchain.BlockChain{T}"/>'s type parameters.
    /// </typeparam>
    /// <seealso cref="IAction"/>
    public class Transaction<T> : ISerializable, IEquatable<Transaction<T>>
        where T : IAction
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly IDictionary<string, Type> Types = typeof(T)
            .Assembly
            .GetTypes()
            .Where(t => t.IsDefined(typeof(ActionTypeAttribute)))
            .ToDictionary(ActionTypeAttribute.ValueOf, t => t);

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/>.
        /// </summary>
        /// <param name="sender">An <see cref="Address"/> of the account
        /// who signs this transaction.  If this is not derived from <paramref
        /// name="publicKey"/> <see cref="InvalidTxPublicKeyException"/> is
        /// thrown.  This goes to the <see cref="Sender"/> property.</param>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the account
        /// who signs this transaction.  If this does not match to <paramref
        /// name="sender"/> address <see cref="InvalidTxPublicKeyException"/>
        /// is thrown.  This cannot be <c>null</c>.  This goes to
        /// the <see cref="PublicKey"/> property.</param>
        /// <param name="recipient">An <see cref="Address"/> of the account
        /// who receives this transaction.  This goes to
        /// the <see cref="Recipient"/> property.</param>
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
        /// This goes to the <see cref="Signature"/> property.</param>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="signature"/>,
        /// <paramref name="actions"/>, or <paramref name="publicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <paramref name="signature"/> is invalid or not signed by
        /// the account who corresponds to <paramref name="publicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <paramref name="sender"/> is not derived from its
        /// <paramref name="publicKey"/>.</exception>
        public Transaction(
            Address sender,
            PublicKey publicKey,
            Address recipient,
            DateTime timestamp,
            IList<T> actions,
            byte[] signature)
        {
            Sender = sender;
            Recipient = recipient;
            Signature = signature ??
                throw new ArgumentNullException(nameof(signature));
            Timestamp = timestamp;
            Actions = actions ??
                throw new ArgumentNullException(nameof(actions));
            PublicKey = publicKey ??
                throw new ArgumentNullException(nameof(publicKey));

            Validate();
        }

        internal Transaction(RawTransaction rawTx)
        {
            Sender = new Address(rawTx.Sender);
            PublicKey = new PublicKey(rawTx.PublicKey);
            Recipient = new Address(rawTx.Recipient);
            Timestamp = DateTime.ParseExact(
                rawTx.Timestamp,
                TimestampFormat,
                CultureInfo.InvariantCulture).ToUniversalTime();
            Actions = rawTx.Actions.Select(ToAction).ToList();
            Signature = rawTx.Signature;
        }

        // ReSharper disable once UnusedMember.Local
        private Transaction(SerializationInfo info, StreamingContext context)
            : this(new RawTransaction(info, context))
        {
        }

        private Transaction(
            Address sender,
            PublicKey publicKey,
            Address recipient,
            DateTime timestamp,
            IList<T> actions)
        {
            Sender = sender;
            PublicKey = publicKey;
            Recipient = recipient;
            Timestamp = timestamp;
            Actions = actions;
            Signature = new byte[0];
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
                using (var hasher = SHA256.Create())
                {
                    byte[] payload = ToBencodex(true);
                    return new TxId(hasher.ComputeHash(payload));
                }
            }
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
        /// This is derived from the <see cref="PublicKey"/>.
        /// </summary>
        public Address Sender { get; }

        /// <summary>
        /// An <see cref="Address"/> of the account who
        /// receives this transaction.
        /// </summary>
        public Address Recipient { get; }

        /// <summary>
        /// A digital signature of the content of this
        /// <see cref="Transaction{T}"/>.  This is signed by the account
        /// who corresponds to <see cref="PublicKey"/>.
        /// This cannot be <c>null</c>.
        /// </summary>
        public byte[] Signature { get; }
        /*
        FIXME: This should be an ImmutableArray<byte>.
        Currently as this is mutable the whole transaction is also mutable.
        */

        /// <summary>
        /// A list of <see cref="IAction"/>s.  These are executed in the order.
        /// This can be empty, but cannot be <c>null</c>.
        /// </summary>
        public IList<T> Actions { get; }

        /// <summary>
        /// The time this <see cref="Transaction{T}"/> is created and signed.
        /// </summary>
        public DateTime Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this
        /// <see cref="Transaction{T}"/>.
        /// The <see cref="Sender"/> address is always corresponding to this
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
        /// Unlike the <see cref="Transaction(Address, PublicKey, Address,
        /// DateTime, IList{T}, byte[])"/> constructor, it automatically signs,
        /// and fills the appropriate <see cref="Sender"/> and
        /// <see cref="PublicKey"/> properties using the given
        /// <paramref name="privateKey"/>.  However, the <paramref
        /// name="privateKey"/> in itself is not included in the created
        /// <see cref="Transaction{T}"/>.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account
        /// who creates and signs a new transaction.  This key is used to fill
        /// the <see cref="Sender"/>, <see cref="PublicKey"/>, and
        /// <see cref="Signature"/> properties, but this in itself is not
        /// included in the transaction.</param>
        /// <param name="recipient">An <see cref="Address"/> of the account
        /// who receives this transaction.  This goes to
        /// the <see cref="Recipient"/> property.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s.  This
        /// can be empty, but cannot be <c>null</c>.  This goes to
        /// the <see cref="Actions"/> property.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by
        /// the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="privateKey"/> or
        /// or <paramref name="actions"/>.
        /// </exception>
        public static Transaction<T> Make(
            PrivateKey privateKey,
            Address recipient,
            IList<T> actions,
            DateTime timestamp)
        {
            if (privateKey == null)
            {
                throw new ArgumentNullException(nameof(privateKey));
            }

            PublicKey publicKey = privateKey.PublicKey;
            var sender = new Address(publicKey);

            var tx = new Transaction<T>(
                sender,
                publicKey,
                recipient,
                timestamp,
                actions
            );
            return new Transaction<T>(
                sender,
                publicKey,
                recipient,
                timestamp,
                actions,
                privateKey.Sign(tx.ToBencodex(false))
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
        /// Validates this <see cref="Transaction{T}"/>.  If there is something
        /// invalid it throws an exception.  If valid it does nothing.
        /// </summary>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its <see cref="PublicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Transaction{T}.Sender"/> is not derived from its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        public void Validate()
        {
            if (!PublicKey.Verify(ToBencodex(false), Signature))
            {
                throw new InvalidTxSignatureException(
                    $"The signature ({ByteUtil.Hex(Signature)}) is failed " +
                    "to verify."
                );
            }

            if (!new Address(PublicKey).Equals(Sender))
            {
                throw new InvalidTxPublicKeyException(
                    $"The public key ({ByteUtil.Hex(PublicKey.Format(true))} " +
                    $"is not matched to the address ({Sender})."
                );
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
                sender: Sender.ToByteArray(),
                recipient: Recipient.ToByteArray(),
                publicKey: PublicKey.Format(false),
                timestamp: Timestamp.ToString(TimestampFormat),
                actions: Actions.Select(a => new Dictionary<string, object>
                {
                    { "type_id", ActionTypeAttribute.ValueOf(a.GetType()) },
                    { "values", a.PlainValue },
                })
            );

            if (includeSign)
            {
                rawTx = rawTx.AddSignature(Signature);
            }

            return rawTx;
        }

        private static T ToAction(IDictionary<string, object> arg)
        {
            var typeStr = (string)arg["type_id"];
            var action = (T)Activator.CreateInstance(Types[typeStr]);
            var values = (IDictionary<string, object>)arg["values"];
            action.LoadPlainValue(values.ToImmutableDictionary());
            return action;
        }

        private struct TransactionSerializationContext
        {
            internal bool IncludeSignature { get; set; }
        }
    }
}
