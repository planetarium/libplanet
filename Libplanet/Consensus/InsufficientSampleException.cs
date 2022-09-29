using System;

namespace Libplanet.Consensus
{
    public class InsufficientSampleException : Exception
    {
        public InsufficientSampleException(int required, int sampled)
            : base($"Failed to sample sufficient number, " +
                  $"required : {required} > sampled : {sampled}")
        {
        }
    }
}
