namespace Libplanet.Net
{
    /// <summary>
    /// The event data that provides a value when
    /// <see cref="NetMQTransport.DifferentVersionPeerEncountered" /> is occurred.
    /// </summary>
    public class DifferentProtocolVersionEventArgs
    {
        /// <summary>
        /// The protocol version of the current <see cref="Swarm{T}"/>.
        /// </summary>
        public AppProtocolVersion ExpectedVersion { get; set; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{T}" /> is trying to connect to.
        /// </summary>
        public AppProtocolVersion ActualVersion { get; set; }
    }
}
