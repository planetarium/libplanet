using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockIndexException : InvalidBlockException
    {
        public InvalidBlockIndexException(string message)
            : base(message)
        {
        }
    }
}
