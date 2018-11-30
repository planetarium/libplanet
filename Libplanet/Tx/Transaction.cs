using System;
using System.Collections;
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
    public struct Transaction<T> : ISerializable, IEquatable<Transaction<T>>
        where T : IAction
    {
        public readonly Address Sender;
        public readonly Address Recipient;
        public readonly byte[] Signature;
        public readonly IList<T> Actions;
        public readonly DateTime Timestamp;
        public readonly PublicKey PublicKey;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly IDictionary<string, Type> Types = typeof(T)
            .Assembly
            .GetTypes()
            .Where(t => t.IsDefined(typeof(ActionTypeAttribute)))
            .ToDictionary(ActionTypeAttribute.ValueOf, t => t);

        public Transaction(RawTransaction rawTx)
        {
            Sender = new Address(rawTx.Sender);
            PublicKey = PublicKey.FromBytes(rawTx.PublicKey);
            Recipient = new Address(rawTx.Recipient);
            Timestamp = DateTime.ParseExact(
                rawTx.Timestamp,
                TimestampFormat,
                CultureInfo.InvariantCulture
            ).ToUniversalTime();
            Signature = rawTx.Signature;
            Actions = rawTx.Actions
                .Select(ToAction)
                .ToList();
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
            IList<T> actions,
            byte[] signature)
        {
            Sender = sender;
            Recipient = recipient;
            Signature = signature;
            Timestamp = timestamp;
            Actions = actions;
            PublicKey = publicKey;
        }

        public TxId Id
        {
            get
            {
                using (var hasher = SHA256.Create())
                {
                    byte[] payload = Bencoded(true);
                    return new TxId(hasher.ComputeHash(payload));
                }
            }
        }

        public static Transaction<T> FromBencoded(byte[] bytes)
        {
            var serializer = new BencodeFormatter<Transaction<T>>();
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
            Address sender = Address.FromPublicKey(publicKey);

            var tx = new Transaction<T>(
                sender,
                publicKey,
                recipient,
                timestamp,
                actions,
                null
            );
            return new Transaction<T>(
                sender,
                publicKey,
                recipient,
                timestamp,
                actions,
                privateKey.Sign(tx.Bencoded(false))
            );
        }

        public byte[] Bencoded(bool sign)
        {
            var serializer = new BencodeFormatter<Transaction<T>>
            {
                Context = new StreamingContext(
                    StreamingContextStates.All,
                    new TransactionSerializationContext { IncludeSignature = sign }
                )
            };
            using (var stream = new MemoryStream())
            {
                serializer.Serialize(stream, this);
                return stream.ToArray();
            }
        }

        public void Validate()
        {
            if (!PublicKey.Verify(Bencoded(false), Signature))
            {
                throw new InvalidTxSignatureException(
                    $"the signature ({ByteUtil.Hex(Signature)}) is failed to verify."
                );
            }

            if (!Address.FromPublicKey(PublicKey).Equals(Sender))
            {
                throw new InvalidTxPublicKeyException(
                    $"the public key ({ByteUtil.Hex(PublicKey.Format(true))} is not matched to the address ({Sender})."
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

        public RawTransaction ToRawTransaction(bool includeSign)
        {
            var rawTx = new RawTransaction(
                sender: Sender.ToByteArray(),
                recipient: Recipient.ToByteArray(),
                publicKey: PublicKey.Format(false),
                timestamp: Timestamp.ToString(TimestampFormat),
                actions: Actions.Select(a => new Dictionary<string, object>
                {
                    { "type_id", ActionTypeAttribute.ValueOf(a.GetType()) },
                    { "values", a.PlainValue }
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
            var typeStr = Encoding.UTF8.GetString((byte[])arg["type_id"]);
            var action = (T)Activator.CreateInstance(Types[typeStr]);
            action.LoadPlainValue(
                ((IDictionary<string, object>)arg["values"]).ToImmutableDictionary()
            );
            return action;
        }
    }

    internal struct TransactionSerializationContext
    {
        internal bool IncludeSignature { get; set; }
    }
}
