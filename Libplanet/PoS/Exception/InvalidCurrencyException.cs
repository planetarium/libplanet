using System;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class InvalidCurrencyException : Exception
    {
        public InvalidCurrencyException(Currency expected, Currency actual)
            : base($"Expected {expected}, found {actual}")
        {
        }
    }
}
