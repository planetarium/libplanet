#nullable disable
using System.Numerics;

namespace Libplanet.Net
{
    /// <summary>
    /// The blockchain state of <see cref="BoundPeer"/>.
    /// </summary>
    public readonly struct PeerChainState
    {
        public PeerChainState(BoundPeer peer, long tipIndex, BigInteger totalDifficulty)
        {
            Peer = peer;
            TipIndex = tipIndex;
            TotalDifficulty = totalDifficulty;
        }

        /// <summary>
        /// The peer with chain.
        /// </summary>
        public BoundPeer Peer { get; }

        /// <summary>
        /// The blockchain tip of the <see cref="BoundPeer"/>.
        /// </summary>
        public long TipIndex { get; }

        /// <summary>
        /// The total difficulty of the blockchain of the <see cref="BoundPeer"/>.
        /// </summary>
        public BigInteger TotalDifficulty { get; }

        /// <inheritdoc />
        public override string ToString()
        {
            return $"{Peer}, {TipIndex}, {TotalDifficulty}";
        }
    }
}
