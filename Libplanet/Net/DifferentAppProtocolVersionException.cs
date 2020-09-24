#nullable enable
#pragma warning disable S3871
using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// The exception that is thrown when the version of the
    /// <see cref="Message" /> that <see cref="Swarm{T}" /> received
    /// is different.
    /// </summary>
    [Serializable]
    internal sealed class DifferentAppProtocolVersionException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="DifferentAppProtocolVersionException"/> class.
        /// </summary>
        /// <param name="identity">The identity of the message received. Will have empty
        /// string if the message is a reply.</param>
        /// <param name="expectedVersion">The protocol version of the current
        /// <see cref="Swarm{T}"/>.</param>
        /// <param name="actualVersion">The protocol version of the
        /// <see cref="Peer"/> that <see cref="Swarm{T}" /> is trying to connect
        /// to.</param>
        /// <param name="message">Specifies an <see cref="Exception.Message"/>.
        /// </param>
        public DifferentAppProtocolVersionException(
            string message,
            byte[] identity,
            AppProtocolVersion expectedVersion,
            AppProtocolVersion actualVersion)
            : base($"{message}\n" +
                   $"Expected Version: {expectedVersion} " +
                   $"[{ByteUtil.Hex(expectedVersion.Signature)} by {expectedVersion.Signer}]\n" +
                   $"Actual Version: {actualVersion} " +
                   $"[{ByteUtil.Hex(actualVersion.Signature)} by {actualVersion.Signer}]")
        {
            Identity = identity;
            ExpectedVersion = expectedVersion;
            ActualVersion = actualVersion;
        }

        /// <summary>
        /// The identity of the message received.
        /// Will have <c>null</c> if the message is a reply.
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
    }
}
#pragma warning restore S3871
