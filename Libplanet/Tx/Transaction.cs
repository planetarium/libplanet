using System;
using System.Collections;
using System.Collections.Generic;
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

        // ReSharper disable once UnusedMember.Local
        private Transaction(SerializationInfo info, StreamingContext context)
        {
            Sender =
                new Address((byte[])info.GetValue("sender", typeof(byte[])));
            PublicKey =
                PublicKey.FromBytes(
                    (byte[])info.GetValue("public_key", typeof(byte[])));
            Recipient =
                new Address(
                    (byte[])info.GetValue("recipient", typeof(byte[])));
            Timestamp = DateTime.ParseExact(
                info.GetString("timestamp"),
                TimestampFormat,
                CultureInfo.InvariantCulture
            ).ToUniversalTime();
            Signature = (byte[])info.GetValue("signature", typeof(byte[]));

            Actions =
                ((IEnumerable)info.GetValue(
                    "actions",
                    typeof(IEnumerable)))
                .OfType<IDictionary<string, object>>()
                .Select(ToAction)
                .ToList();
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
            info.AddValue("sender", Sender.ToByteArray());
            info.AddValue("public_key", PublicKey.Format(false));
            info.AddValue("recipient", Recipient.ToByteArray());
            info.AddValue("actions", Actions.Select(
                a => new Dictionary<string, object>
                {
                    { "type_id", ActionTypeAttribute.ValueOf(a.GetType()) },
                    { "values", a.PlainValue }
                })
            );

            info.AddValue("timestamp", Timestamp.ToString(TimestampFormat));
            if (context.Context is TransactionSerializationContext txContext &&
                txContext.IncludeSignature)
            {
                info.AddValue("signature", Signature);
            }
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

        private static T ToAction(IDictionary<string, object> arg)
        {
            var typeStr = Encoding.UTF8.GetString((byte[])arg["type_id"]);
            var action = (T)Activator.CreateInstance(Types[typeStr]);
            action.LoadPlainValue((IDictionary<string, object>)arg["values"]);
            return action;
        }
    }

    internal struct TransactionSerializationContext
    {
        internal bool IncludeSignature { get; set; }
    }
}
