namespace Libplanet.Net
{
    /// <summary>
    /// The event data that provides a value when
    /// <see cref="Swarm{TTxAction, TBlockAction}.DifferentVersionPeerEncountered" /> is occured.
    /// </summary>
    public class DifferentProtocolVersionEventArgs
    {
        /// <summary>
        /// The protocol version of the current <see cref="Swarm{TTxAction, TBlockAction}"/>.
        /// </summary>
        public int ExpectedVersion { get; set; }

        /// <summary>
        /// The protocol version of the <see cref="Peer"/> that the
        /// <see cref="Swarm{TTxAction, TBlockAction}" /> is trying to connect to.
        /// </summary>
        public int ActualVersion { get; set; }
    }
}
