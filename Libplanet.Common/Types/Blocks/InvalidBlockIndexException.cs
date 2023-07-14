using System;

namespace Libplanet.Common.Types.Blocks
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
