using System;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// Serves as the base class for exceptions related <see cref="Block"/>s' integrity and
    /// validity.
    /// </summary>
    public abstract class InvalidBlockException : Exception
    {
        /// <inheritdoc cref="Exception(string)"/>
        protected InvalidBlockException(string message)
            : base(message)
        {
        }
    }
}
