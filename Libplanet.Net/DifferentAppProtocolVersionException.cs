using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    /// <summary>
    /// The exception that is thrown when the version of the
    /// <see cref="Message"/> that <see cref="Swarm{T}"/> received
    /// is different.
    /// </summary>
    [Serializable]
    public class DifferentAppProtocolVersionException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="DifferentAppProtocolVersionException"/> class.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.</param>
        /// <param name="peer">The <see cref="Message.Remote"/> of the <see cref="Message"/>
        /// received.</param>
        /// <param name="identity">The <see cref="Message.Identity"/> of the <see cref="Message"/>
        /// received.</param>
        /// <param name="appProtocolVersion">The protocol version of
        /// the local <see cref="Swarm{T}"/>.</param>
        /// <param name="peerAppProtocolVersion">The protocol version of the <see cref="Peer"/> that
        /// the local <see cref="Swarm{T}"/> is trying to connect to.</param>
        /// <param name="trusted">Whether <paramref name="peerAppProtocolVersion"/>
        /// is signed by a trusted signer.</param>
        public DifferentAppProtocolVersionException(
            string message,
            Peer peer,
            byte[] identity,
            AppProtocolVersion appProtocolVersion,
            AppProtocolVersion peerAppProtocolVersion,
            bool trusted)
            : base(message)
        {
            Peer = peer;
            Identity = identity;
            Apv = appProtocolVersion;
            PeerApv = peerAppProtocolVersion;
            Trusted = trusted;
        }

        protected DifferentAppProtocolVersionException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue<Peer>(nameof(Peer));
            Identity = info.GetValue<byte[]>(nameof(Identity));
            Apv = AppProtocolVersion.FromToken(
                info.GetValue<string>(nameof(Apv)));
            PeerApv = AppProtocolVersion.FromToken(
                info.GetValue<string>(nameof(PeerApv)));
            Trusted = info.GetValue<bool>(nameof(Trusted));
        }

        public Peer Peer { get; private set; }

        /// <summary>
        /// The identity of the message received.
        /// </summary>
        public byte[] Identity { get; }

        /// <summary>
        /// The protocol version of the current <see cref="Swarm{T}"/>.
        /// </summary>
        public AppProtocolVersion Apv { get; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{T}" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion PeerApv { get; }

        /// <summary>
        /// Whether <see cref="PeerApv"/> is signed by a trusted signer.
        /// </summary>
        public bool Trusted { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
            info.AddValue(nameof(Identity), Identity);
            info.AddValue(nameof(Apv), Apv.Token);
            info.AddValue(nameof(PeerApv), PeerApv.Token);
            info.AddValue(nameof(Trusted), Trusted);
        }
    }
}
