using System;

namespace Libplanet.Blocks
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
