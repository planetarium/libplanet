using System;

namespace Libplanet.Common.Types.Blocks
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
