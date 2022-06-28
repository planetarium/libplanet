using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockLastCommitException : InvalidBlockException
    {
        public InvalidBlockLastCommitException(string message)
            : base(message)
        {
        }
    }
}
