using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockLastCommitException : InvalidBlockException
    {
        public InvalidBlockLastCommitException(string message)
            : base(message)
        {
        }
    }
}
