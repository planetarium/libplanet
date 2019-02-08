using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Libplanet.Serialization;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    internal struct RawTransaction : ISerializable, IEquatable<RawTransaction>
    {
        public RawTransaction(SerializationInfo info, StreamingContext context)
            : this(
                sender: info.GetValue<byte[]>("sender"),
                publicKey: info.GetValue<byte[]>("public_key"),
                recipient: info.GetValue<byte[]>("recipient"),
                timestamp: info.GetString("timestamp"),
                signature: info.GetValue<byte[]>("signature"),
                actions: info.GetValue<IEnumerable>(
                    "actions").OfType<IDictionary<string, object>>()
              )
        {
        }

        public RawTransaction(
            byte[] sender,
            byte[] recipient,
            byte[] publicKey,
            string timestamp,
            IEnumerable<IDictionary<string, object>> actions
        )
            : this(sender, recipient, publicKey, timestamp, actions, null)
        {
        }

        public RawTransaction(
            byte[] sender,
            byte[] recipient,
            byte[] publicKey,
            string timestamp,
            IEnumerable<IDictionary<string, object>> actions,
            byte[] signature
        )
        {
            Sender = sender;
            Recipient = recipient;
            PublicKey = publicKey;
            Timestamp = timestamp;
            Actions = actions;
            Signature = signature;
        }

        public RawTransaction(Dictionary<string, object> dict)
        {
            Sender = (byte[])dict["sender"];
            Recipient = (byte[])dict["recipient"];
            PublicKey = (byte[])dict["public_key"];
            Timestamp = (string)dict["timestamp"];
            Actions = ((IEnumerable)dict["actions"])
                .Cast<Dictionary<string, object>>()
                .ToList();
            if (dict.TryGetValue("signature", out object signature))
            {
                Signature = (byte[])signature;
            }
            else
            {
                Signature = null;
            }
        }

        public byte[] Sender { get; }

        public byte[] PublicKey { get; }

        public byte[] Recipient { get; }

        public string Timestamp { get; }

        public byte[] Signature { get; }

        public IEnumerable<IDictionary<string, object>> Actions { get; }

        public static bool operator ==(RawTransaction tx1, RawTransaction tx2)
        {
            return tx1.Equals(tx2);
        }

        public static bool operator !=(RawTransaction tx1, RawTransaction tx2)
        {
            return !(tx1 == tx2);
        }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("sender", Sender);
            info.AddValue("recipient", Recipient);
            info.AddValue("public_key", PublicKey);
            info.AddValue("timestamp", Timestamp);
            info.AddValue("actions", Actions);

            if (Signature != null)
            {
                info.AddValue("signature", Signature);
            }
        }

        public RawTransaction AddSignature(byte[] signature)
        {
            return new RawTransaction(
                Sender,
                Recipient,
                PublicKey,
                Timestamp,
                Actions,
                signature
            );
        }

        public override bool Equals(object obj)
        {
            return obj is RawTransaction && Equals((RawTransaction)obj);
        }

        public bool Equals(RawTransaction other)
        {
            bool eq = Sender.SequenceEqual(other.Sender) &&
                PublicKey.SequenceEqual(other.PublicKey) &&
                Recipient.SequenceEqual(other.Recipient) &&
                Timestamp == other.Timestamp &&
                Actions.SequenceEqual(other.Actions);
            if (Signature == null)
            {
                return eq && other.Signature == null;
            }
            else
            {
                return eq && Signature.SequenceEqual(other.Signature);
            }
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Signature);
        }
    }
}
