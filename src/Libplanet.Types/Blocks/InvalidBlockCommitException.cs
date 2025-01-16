using System;

namespace Libplanet.Types.Blocks
{
    public class InvalidBlockCommitException : InvalidBlockException
    {
        public InvalidBlockCommitException(string message)
            : base(message)
        {
        }
    }
}
