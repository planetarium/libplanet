using System;

namespace Libplanet.PoS
{
    public class NullNativeTokensException : Exception
    {
        public NullNativeTokensException()
            : base($"At least one native token have to be set on block policy")
        {
        }
    }
}
