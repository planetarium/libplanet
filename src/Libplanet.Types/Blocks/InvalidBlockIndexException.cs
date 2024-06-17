using System;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockIndexException : InvalidBlockException
    {
        public InvalidBlockIndexException(string message)
            : base(message)
        {
        }
    }
}
