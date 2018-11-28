using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Tx
{
    public struct RawTransaction : ISerializable, IEquatable<RawTransaction>
    {
        public RawTransaction(SerializationInfo info, StreamingContext context)
            : this(
                  sender: info.GetValue<byte[]>("sender"),
                  publicKey: info.GetValue<byte[]>("public_key"),
                  recipient: info.GetValue<byte[]>("recipient"),
                  timestamp: info.GetString("timestamp"),
                  signature: info.GetValue<byte[]>("signature"),
                  actions: info.GetValue<IEnumerable>("actions").OfType<IDictionary<string, object>>()
              )
        {
        }

        public RawTransaction(byte[] sender, byte[] recipient, byte[] publicKey, string timestamp, IEnumerable<IDictionary<string, object>> actions)
            : this(sender, recipient, publicKey, timestamp, actions, null)
        {
        }

        public RawTransaction(byte[] sender, byte[] recipient, byte[] publicKey, string timestamp, IEnumerable<IDictionary<string, object>> actions, byte[] signature)
        {
            Sender = sender;
            Recipient = recipient;
            PublicKey = publicKey;
            Timestamp = timestamp;
            Actions = actions;
            Signature = signature;
        }

        public byte[] Sender { get; }

        public byte[] PublicKey { get; }

        public byte[] Recipient { get; }

        public string Timestamp { get; }

        public byte[] Signature { get; }

        public IEnumerable<IDictionary<string, object>> Actions { get; }

        public static bool operator ==(RawTransaction transaction1, RawTransaction transaction2)
        {
            return transaction1.Equals(transaction2);
        }

        public static bool operator !=(RawTransaction transaction1, RawTransaction transaction2)
        {
            return !(transaction1 == transaction2);
        }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
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
            unchecked
            {
                var hashCode = 1144691911;
                hashCode = hashCode * -1521134295 + ByteUtil.CalculateHashCode(Sender);
                hashCode = hashCode * -1521134295 + ByteUtil.CalculateHashCode(PublicKey);
                hashCode = hashCode * -1521134295 + ByteUtil.CalculateHashCode(Recipient);
                hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Timestamp);
                hashCode = hashCode * -1521134295 + ByteUtil.CalculateHashCode(Signature);
                hashCode = hashCode * -1521134295 + EqualityComparer<IEnumerable<IDictionary<string, object>>>.Default.GetHashCode(Actions);
                return hashCode;
            }
        }
    }
}
