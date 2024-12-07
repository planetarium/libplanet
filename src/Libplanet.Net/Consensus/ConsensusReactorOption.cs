using System;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An option struct for initializing <see cref="ConsensusReactor"/>.
    /// </summary>
    public struct ConsensusReactorOption
    {
        /// <summary>
        /// A port number that is used for exchanging <see cref="ConsensusMsg"/>.
        /// </summary>
        public int ConsensusPort { get; set; }

        /// <summary>
        /// A number of <see cref="ITransport"/>'s worker.
        /// </summary>
        public int ConsensusWorkers { get; set; }

        /// <summary>
        /// A <see cref="PrivateKey"/> for signing block and message.
        /// </summary>
        public PrivateKey ConsensusPrivateKey { get; set; }

        /// <summary>
        /// A list of seeds.
        /// </summary>
        public ImmutableList<BoundPeer> SeedPeers { get; set; }

        /// <summary>
        /// A list of validators.
        /// </summary>
        public ImmutableList<BoundPeer> ConsensusPeers { get; set; }

        /// <summary>
        /// A time delay in starting the consensus for the next height block.
        /// </summary>
        public TimeSpan TargetBlockInterval { get; set; }

        /// <summary>
        /// A timeout and delay value for used in <see cref="Context"/> in milliseconds.
        /// </summary>
        public ContextOption ContextOption { get; set; }
    }
}
