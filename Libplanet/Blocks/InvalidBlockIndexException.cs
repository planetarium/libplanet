using System;

namespace Libplanet.Blocks
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
