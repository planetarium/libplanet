using System;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockCommitException : InvalidBlockException
    {
        public InvalidBlockCommitException(string message)
            : base(message)
        {
        }
    }
}
