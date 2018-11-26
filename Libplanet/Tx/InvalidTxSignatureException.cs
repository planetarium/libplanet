using System;

namespace Libplanet.Tx
{
    [Serializable]
    public class InvalidTxSignatureException : InvalidTxException
    {
        public InvalidTxSignatureException(string message)
            : base(message)
        {
        }
    }
}
