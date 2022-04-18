using System;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An exception that is thrown when the signature of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    [Serializable]
    public class InvalidMessageSignatureException : Exception
    {
        internal InvalidMessageSignatureException(
            string message,
            Peer peer,
            PublicKey publicKey,
            byte[] messageToVerify,
            byte[] signature)
            : base(message)
        {
            Peer = peer;
            PublicKey = publicKey;
            MessageToVerify = messageToVerify;
            Signature = signature;
        }

        protected InvalidMessageSignatureException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue<Peer>(nameof(Peer));
            PublicKey = new PublicKey(info.GetValue<byte[]>(nameof(PublicKey)));
            MessageToVerify = info.GetValue<byte[]>(nameof(MessageToVerify));
            Signature = info.GetValue<byte[]>(nameof(Signature));
        }

        public Peer Peer { get; private set; }

        public PublicKey PublicKey { get; private set; }

        public byte[] MessageToVerify { get; private set; }

        public byte[] Signature { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
            info.AddValue(nameof(PublicKey), PublicKey.Format(true));
            info.AddValue(nameof(MessageToVerify), MessageToVerify);
            info.AddValue(nameof(Signature), Signature);
        }
    }
}
