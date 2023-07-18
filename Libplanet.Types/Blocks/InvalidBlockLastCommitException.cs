using System;

namespace Libplanet.Types.Blocks
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
