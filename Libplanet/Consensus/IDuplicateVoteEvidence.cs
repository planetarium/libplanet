using System;
using System.Numerics;

namespace Libplanet.Consensus
{
    public interface IDuplicateVoteEvidence
    {
        public long Height { get; }

        public Vote[] Votes { get; }

        public BigInteger ValidatorPower { get; }

        public BigInteger TotalPower { get; }

        public DateTimeOffset Timestamp { get; }
    }
}
