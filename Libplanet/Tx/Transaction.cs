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
    public class Transaction<T> : ISerializable, IEquatable<Transaction<T>>
        where T : IAction
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly IDictionary<string, Type> Types = typeof(T)
            .Assembly
            .GetTypes()
            .Where(t => t.IsDefined(typeof(ActionTypeAttribute)))
            .ToDictionary(ActionTypeAttribute.ValueOf, t => t);

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

        public Address Sender { get; }

        public Address Recipient { get; }

        public byte[] Signature { get; }

        public IList<T> Actions { get; }

        public DateTime Timestamp { get; }

        public PublicKey PublicKey { get; }

        public static Transaction<T> FromBencodex(byte[] bytes)
        {
            var serializer = new BencodexFormatter<Transaction<T>>();
            using (var stream = new MemoryStream(bytes))
            {
                return (Transaction<T>)serializer.Deserialize(stream);
            }
        }

        public static Transaction<T> Make(
            PrivateKey privateKey,
            Address recipient,
            IList<T> actions,
            DateTime timestamp)
        {
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

        public bool Equals(Transaction<T> other)
        {
            return Id.Equals(other.Id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }

            return obj is Transaction<T> other && Equals(other);
        }

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
