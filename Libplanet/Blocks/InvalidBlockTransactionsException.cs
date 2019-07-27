using System;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTransactionsException : InvalidBlockException
    {
        public InvalidBlockTransactionsException(string message)
            : base(message)
        {
        }
    }
}
