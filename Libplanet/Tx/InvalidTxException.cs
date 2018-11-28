using System;

namespace Libplanet.Tx
{
    public abstract class InvalidTxException : Exception
    {
        protected InvalidTxException(string message)
        {
        }
    }
}
