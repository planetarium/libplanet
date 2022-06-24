using System;
using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    public struct ConsensusReactorOption
    {
        public int ConsensusPort { get; set; }

        public int ConsensusWorkers { get; set; }

        public PrivateKey ConsensusPrivateKey { get; set; }

        public ImmutableList<BoundPeer> ConsensusPeers { get; set; }

        public TimeSpan TargetBlockInterval { get; set; }
    }
}
