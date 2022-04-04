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
        /// <param name="localVersion">The protocol version of the local <see cref="Swarm{T}"/>.
        /// </param>
        /// <param name="peerVersion">The protocol version of the <see cref="Peer"/> that
        /// the local <see cref="Swarm{T}"/> is trying to connect to.</param>
        /// <param name="fromTrustedSource">Whether <paramref name="peerVersion"/> is signed
        /// by a trusted signer.</param>
        public DifferentAppProtocolVersionException(
            string message,
            Peer peer,
            byte[] identity,
            AppProtocolVersion localVersion,
            AppProtocolVersion peerVersion,
            bool fromTrustedSource)
            : base(message)
        {
            Peer = peer;
            Identity = identity;
            LocalVersion = localVersion;
            PeerVersion = peerVersion;
            FromTrustedSource = fromTrustedSource;
        }

        protected DifferentAppProtocolVersionException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            Peer = info.GetValue<Peer>(nameof(Peer));
            Identity = info.GetValue<byte[]>(nameof(Identity));
            LocalVersion = AppProtocolVersion.FromToken(
                info.GetValue<string>(nameof(LocalVersion)));
            PeerVersion = AppProtocolVersion.FromToken(
                info.GetValue<string>(nameof(PeerVersion)));
            FromTrustedSource = info.GetValue<bool>(nameof(FromTrustedSource));
        }

        public Peer Peer { get; private set; }

        /// <summary>
        /// The identity of the message received.
        /// </summary>
        public byte[] Identity { get; }

        /// <summary>
        /// The protocol version of the current <see cref="Swarm{T}"/>.
        /// </summary>
        public AppProtocolVersion LocalVersion { get; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{T}" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion PeerVersion { get; }

        /// <summary>
        /// Whether <see cref="PeerVersion"/> is signed by a trusted signer.
        /// </summary>
        public bool FromTrustedSource { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Peer), Peer);
            info.AddValue(nameof(Identity), Identity);
            info.AddValue(nameof(LocalVersion), LocalVersion.Token);
            info.AddValue(nameof(PeerVersion), PeerVersion.Token);
            info.AddValue(nameof(FromTrustedSource), FromTrustedSource);
        }
    }
}
