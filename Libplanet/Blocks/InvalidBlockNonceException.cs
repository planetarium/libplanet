#nullable disable
using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockNonceException : InvalidBlockException
    {
        public InvalidBlockNonceException(string message)
            : base(message)
        {
        }
    }
}
