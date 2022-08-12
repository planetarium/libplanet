namespace Libplanet.Net
{
    /// <summary>
    /// The blockchain state of <see cref="BoundPeer"/>.
    /// </summary>
    public readonly struct PeerChainState
    {
        public PeerChainState(BoundPeer peer, long tipIndex)
        {
            Peer = peer;
            TipIndex = tipIndex;
        }

        /// <summary>
        /// The peer with chain.
        /// </summary>
        public BoundPeer Peer { get; }

        /// <summary>
        /// The blockchain tip of the <see cref="Peer"/>.
        /// </summary>
        public long TipIndex { get; }

        /// <inheritdoc />
        public override string ToString()
        {
            return $"{Peer}, {TipIndex}";
        }
    }
}
