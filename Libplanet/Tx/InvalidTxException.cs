using System;

namespace Libplanet.Tx
{
    /// <summary>
    /// Serves as the base class for exceptions relevent to
    /// <see cref="Transaction{T}"/>.
    /// </summary>
    public abstract class InvalidTxException : Exception
    {
        protected InvalidTxException(string message)
            : base(message)
        {
        }
    }
}
