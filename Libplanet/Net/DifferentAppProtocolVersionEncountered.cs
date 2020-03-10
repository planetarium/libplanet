namespace Libplanet.Net
{
    /// <summary>
    /// A delegate called back when a <see cref="Swarm{T}"/> encounters
    /// a peer with different <see cref="AppProtocolVersion"/> in the network.
    /// </summary>
    /// <param name="peer">An encountered peer with a different <see cref="AppProtocolVersion"/>.
    /// </param>
    /// <param name="peerVersion">An encountered different <see cref="AppProtocolVersion"/>.</param>
    /// <param name="localVersion">The currently running application's
    /// <see cref="AppProtocolVersion"/>.</param>
    /// <returns>Whether to recognize the encountered <paramref name="peer"/> as a valid
    /// participant of the network or not.  The <paramref name="peer"/> is ignored if
    /// it returns <c>false</c>.</returns>
    public delegate bool DifferentAppProtocolVersionEncountered(
        Peer peer,
        AppProtocolVersion peerVersion,
        AppProtocolVersion localVersion
    );
}
