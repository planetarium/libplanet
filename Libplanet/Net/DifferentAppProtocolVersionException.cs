#pragma warning disable S3871
using System;

namespace Libplanet.Net
{
    /// <summary>
    /// The exception that is thrown when the version of the
    /// <see cref="Peer" /> that <see cref="Swarm{T}" /> is trying to connect
    /// to is different.
    /// </summary>
    [Serializable]
    internal sealed class DifferentAppProtocolVersionException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="DifferentAppProtocolVersionException"/> class.
        /// </summary>
        /// <param name="expectedVersion">The protocol version of the current
        /// <see cref="Swarm{T}"/>.</param>
        /// <param name="actualVersion">The protocol version of the
        /// <see cref="Peer"/> that <see cref="Swarm{T}" /> is trying to connect
        /// to.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public DifferentAppProtocolVersionException(
            string message,
            AppProtocolVersion expectedVersion,
            AppProtocolVersion actualVersion)
            : base($"{message}\n" +
                   $"Expected Version: {expectedVersion} " +
                   $"[{ByteUtil.Hex(expectedVersion.Signature)} by {expectedVersion.Signer}]\n" +
                   $"Actual Version: {actualVersion} " +
                   $"[{ByteUtil.Hex(actualVersion.Signature)} by {actualVersion.Signer}]")
        {
            ExpectedVersion = expectedVersion;
            ActualVersion = actualVersion;
        }

        /// <summary>
        /// The protocol version of the current <see cref="Swarm{T}"/>.
        /// </summary>
        public AppProtocolVersion ExpectedVersion { get; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{T}" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion ActualVersion { get; }
    }
}
#pragma warning restore S3871
