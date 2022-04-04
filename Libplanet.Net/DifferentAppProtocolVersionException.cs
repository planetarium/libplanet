using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// The exception that is thrown when the version of the
    /// <see cref="Message"/> that <see cref="Swarm{T}"/> received
    /// is different.
    /// </summary>
    [Serializable]
    internal sealed class DifferentAppProtocolVersionException : ArgumentException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="DifferentAppProtocolVersionException"/> class.
        /// </summary>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.</param>
        /// <param name="identity">The <see cref="Message.Identity"/> of the <see cref="Message"/>
        /// received.</param>
        /// <param name="expectedVersion">The protocol version of the current
        /// <see cref="Swarm{T}"/>.</param>
        /// <param name="actualVersion">The protocol version of the <see cref="Peer"/> that
        /// <see cref="Swarm{T}"/> is trying to connect to.</param>
        /// <param name="fromTrustedSource">Whether <paramref name="actualVersion"/> is signed
        /// by a trusted signer.</param>
        public DifferentAppProtocolVersionException(
            string message,
            byte[] identity,
            AppProtocolVersion expectedVersion,
            AppProtocolVersion actualVersion,
            bool fromTrustedSource)
            : base($"{message}\n" +
                   $"Expected Version: {expectedVersion} " +
                   $"[{ByteUtil.Hex(expectedVersion.Signature)} by {expectedVersion.Signer}]\n" +
                   $"Actual Version: {actualVersion} " +
                   $"[{ByteUtil.Hex(actualVersion.Signature)} by {actualVersion.Signer}]\n" +
                   $"Signed by a trusted signer: {fromTrustedSource}")
        {
            Identity = identity;
            ExpectedVersion = expectedVersion;
            ActualVersion = actualVersion;
            FromTrustedSource = fromTrustedSource;
        }

        /// <summary>
        /// The identity of the message received.
        /// </summary>
        public byte[] Identity { get; }

        /// <summary>
        /// The protocol version of the current <see cref="Swarm{T}"/>.
        /// </summary>
        public AppProtocolVersion ExpectedVersion { get; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{T}" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion ActualVersion { get; }

        /// <summary>
        /// Whether <see cref="ActualVersion"/> is signed by a trusted signer.
        /// </summary>
        public bool FromTrustedSource { get; }
    }
}
