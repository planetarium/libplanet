using System;
using System.Runtime.Serialization;
using Bencodex;
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
        private static Codec _codec = new Codec();

        internal InvalidMessageSignatureException(
            string message,
            BoundPeer peer,
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
            Peer = new BoundPeer(_codec.Decode(info.GetValue<byte[]>(nameof(Peer))));
            PublicKey = new PublicKey(info.GetValue<byte[]>(nameof(PublicKey)));
            MessageToVerify = info.GetValue<byte[]>(nameof(MessageToVerify));
            Signature = info.GetValue<byte[]>(nameof(Signature));
        }

        public BoundPeer Peer { get; }

        public PublicKey PublicKey { get; }

        public byte[] MessageToVerify { get; }

        public byte[] Signature { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), _codec.Encode(Peer.Bencoded));
            info.AddValue(nameof(PublicKey), PublicKey.Format(true));
            info.AddValue(nameof(MessageToVerify), MessageToVerify);
            info.AddValue(nameof(Signature), Signature);
        }
    }
}
