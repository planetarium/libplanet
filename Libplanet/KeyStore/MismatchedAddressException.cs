using System;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// The exception that is thrown when an unprotected private key's actual address does
    /// not match to the expected address.
    /// </summary>
    public class MismatchedAddressException : InvalidOperationException
    {
        /// <summary>
        /// Creates a new <see cref="MismatchedAddressException"/> object.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="expectedAddress">The expected address of a protected private key.
        /// It is automatically included to the <paramref name="message"/> string.</param>
        /// <param name="actualAddress">The actual address of an unprotected private key.
        /// It is automatically included to the <paramref name="message"/> string.</param>
        public MismatchedAddressException(
            string message,
            in Address expectedAddress,
            in Address actualAddress
        )
            : base(
                $"{message}\nExpected address: {expectedAddress}\n" +
                $"Actual address: {actualAddress}"
            )
        {
            ExpectedAddress = expectedAddress;
            ActualAddress = actualAddress;
        }

        /// <summary>
        /// The expected address of the protected private key.
        /// </summary>
        public Address ExpectedAddress { get; }

        /// <summary>
        /// The actual address of the unprotected private key.
        /// </summary>
        public Address ActualAddress { get; }
    }
}
