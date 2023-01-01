using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// Various options for a <see cref="Swarm{T}"/>'s
    /// <see cref="Libplanet.Net.AppProtocolVersion"/>.
    /// </summary>
    public class AppProtocolVersionOptions
    {
        /// <summary>
        /// The application protocol version to comply.
        /// </summary>
        public AppProtocolVersion AppProtocolVersion { get; set; } = default;

        /// <summary>
        /// The set of <see cref="PublicKey"/>s to trust when a node encounters
        /// a <see cref="Message"/> with an <see cref="Net.AppProtocolVersion"/> that is different
        /// from <see cref="AppProtocolVersion"/>.  Any <see cref="Message"/> with an untrusted
        /// <see cref="Net.AppProtocolVersion"/> is ignored by the node.  To trust any party,
        /// set this to <see langword="null"/>.  Set to <see langword="null"/> by default.
        /// </summary>
        public ImmutableHashSet<PublicKey>? TrustedAppProtocolVersionSigners { get; set; } = null;

        /// <summary>
        /// The callback triggered when a node encounters
        /// an <see cref="Net.AppProtocolVersion"/> that is different from
        /// <see cref="AppProtocolVersion"/> that is signed by
        /// a <em>trusted party</em>, that is, one of
        /// <see cref="TrustedAppProtocolVersionSigners"/>.  Does nothing by default.
        /// </summary>
        public DifferentAppProtocolVersionEncountered
            DifferentAppProtocolVersionEncountered { get; set; } =
                (peer, peerVersion, localVersion) => { };
    }
}
