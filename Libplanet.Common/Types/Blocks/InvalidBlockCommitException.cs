using System;

namespace Libplanet.Common.Types.Blocks
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
