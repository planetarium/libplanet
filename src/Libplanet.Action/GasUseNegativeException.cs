using System;

namespace Libplanet.Action
{
    public class GasUseNegativeException : Exception
    {
        public GasUseNegativeException()
            : base($"Cannot use negative value gas. " +
                $"Please use gas with a non-negative value.")
        {
        }
    }
}
