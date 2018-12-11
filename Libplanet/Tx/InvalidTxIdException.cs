using System;

namespace Libplanet.Tx
{
    [Serializable]
    public class InvalidTxIdException : InvalidTxException
    {
        public InvalidTxIdException(string message)
            : base(message)
        {
        }
    }
}
