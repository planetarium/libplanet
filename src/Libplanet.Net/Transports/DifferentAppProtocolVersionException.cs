using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// The exception that is thrown when the version of the
    /// <see cref="Message"/> that <see cref="Swarm"/> received
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
        /// <param name="expectedAppProtocolVersion">The protocol version of
        /// the local <see cref="Swarm"/>.</param>
        /// <param name="actualAppProtocolVersion">The protocol version of the
        /// <see cref="BoundPeer"/> that the local <see cref="Swarm"/> is trying to connect
        /// to.</param>
        /// <param name="trusted">Whether <paramref name="actualAppProtocolVersion"/>
        /// is signed by a trusted signer.</param>
        public DifferentAppProtocolVersionException(
            string message,
            AppProtocolVersion expectedAppProtocolVersion,
            AppProtocolVersion actualAppProtocolVersion,
            bool trusted)
            : base(message)
        {
            ExpectedApv = expectedAppProtocolVersion;
            ActualApv = actualAppProtocolVersion;
            Trusted = trusted;
        }

        /// <summary>
        /// The protocol version of the current <see cref="Swarm"/>.
        /// </summary>
        public AppProtocolVersion ExpectedApv { get; }

        /// <summary>
        /// The protocol version of the <see cref="BoundPeer"/> that the
        /// <see cref="Swarm" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion ActualApv { get; }

        /// <summary>
        /// Whether <see cref="ActualApv"/> is signed by a trusted signer.
        /// </summary>
        public bool Trusted { get; }
    }
}
