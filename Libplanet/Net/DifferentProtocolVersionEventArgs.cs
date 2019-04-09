namespace Libplanet.Net
{
    /// <summary>
    /// The event data that provides a value when
    /// <see cref="Swarm.DifferentVersionPeerEncountered" /> is occured.
    /// </summary>
    public class DifferentProtocolVersionEventArgs
    {
        /// <summary>
        /// The protocol version of the current <see cref="Swarm"/>.
        /// </summary>
        public int ExpectedVersion { get; set; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm" /> is trying to connect to.
        /// </summary>
        public int ActualVersion { get; set; }
    }
}
