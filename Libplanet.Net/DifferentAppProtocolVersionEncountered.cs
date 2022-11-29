namespace Libplanet.Net
{
    /// <summary>
    /// A delegate to call back when a <see cref="Swarm{T}"/> encounters
    /// a peer with a different <see cref="AppProtocolVersion"/> signed by
    /// a trusted signer in the network.
    /// </summary>
    /// <param name="peer">The encountered <see cref="BoundPeer"/> with
    /// a different <see cref="AppProtocolVersion"/>.
    /// </param>
    /// <param name="peerVersion">The encountered different <see cref="AppProtocolVersion"/>.
    /// </param>
    /// <param name="localVersion">The currently running application's
    /// <see cref="AppProtocolVersion"/>.</param>
    public delegate void DifferentAppProtocolVersionEncountered(
        BoundPeer peer,
        AppProtocolVersion peerVersion,
        AppProtocolVersion localVersion
    );
}
