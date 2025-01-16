using System;
using Libplanet.Crypto;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An exception that is thrown when the signature of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    public class InvalidMessageSignatureException : Exception
    {
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

        public BoundPeer Peer { get; }

        public PublicKey PublicKey { get; }

        public byte[] MessageToVerify { get; }

        public byte[] Signature { get; }
    }
}
