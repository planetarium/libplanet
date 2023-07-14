using System;

namespace Libplanet.Common.Types.Blocks
{
    [Serializable]
    public class InvalidBlockHashException : InvalidBlockException
    {
        public InvalidBlockHashException(string message)
            : base(message)
        {
        }
    }
}
