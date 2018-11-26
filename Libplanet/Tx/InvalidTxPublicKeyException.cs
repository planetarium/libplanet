using System;

namespace Libplanet.Tx
{
    [Serializable]
    public class InvalidTxPublicKeyException : InvalidTxException
    {
        public InvalidTxPublicKeyException(string message)
            : base(message)
        {
        }
    }
}
