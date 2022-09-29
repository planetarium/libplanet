using System;

namespace Libplanet.Consensus
{
    public class EmptyPopulationException : Exception
    {
        public EmptyPopulationException()
            : base($"Failed to sample from empty population")
        {
        }
    }
}
