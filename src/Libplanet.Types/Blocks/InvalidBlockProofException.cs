using System;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockProofException : InvalidBlockException
    {
        public InvalidBlockProofException(string message)
            : base(message)
        {
        }
    }
}
