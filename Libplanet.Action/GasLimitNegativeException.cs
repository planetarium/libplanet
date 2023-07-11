using System;

namespace Libplanet.Action
{
    [Serializable]
    public class GasLimitNegativeException : Exception
    {
        public GasLimitNegativeException()
            : base($"Gas Limit cannot be negative. " +
                $"Please set the Gas Limit to a non-negative value.")
        {
        }
    }
}
