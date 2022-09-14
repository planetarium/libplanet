using System;
using System.Linq;
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
            BoundPeer peer,
            IPublicKey publicKey,
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
            Peer = info.GetValue<BoundPeer>(nameof(Peer));
            PublicKey = new PublicKey(info.GetValue<byte[]>(nameof(PublicKey)));
            MessageToVerify = info.GetValue<byte[]>(nameof(MessageToVerify));
            Signature = info.GetValue<byte[]>(nameof(Signature));
        }

        public BoundPeer Peer { get; private set; }

        public IPublicKey PublicKey { get; private set; }

        public byte[] MessageToVerify { get; private set; }

        public byte[] Signature { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
            info.AddValue(nameof(PublicKey), PublicKey.KeyBytes.ToArray());
            info.AddValue(nameof(MessageToVerify), MessageToVerify);
            info.AddValue(nameof(Signature), Signature);
        }
    }
}
