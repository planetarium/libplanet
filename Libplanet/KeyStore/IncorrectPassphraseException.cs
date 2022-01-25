using System;
using System.Collections.Immutable;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// The exception that is thrown when a user input passphrase (i.e., password) is incorrect.
    /// </summary>
    public class IncorrectPassphraseException : ArgumentException
    {
        /// <summary>
        /// Creates a new <see cref="IncorrectPassphraseException"/> object.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="paramName">The name of the parameter that caused the current exception.
        /// </param>
        /// <param name="expectedMac">The expected MAC of the correct passphrase.
        /// It is automatically included to the <paramref name="message"/> string.</param>
        /// <param name="inputMac">The actual MAC of the user input passphrase.
        /// It is automatically included to the <paramref name="message"/> string.</param>
        public IncorrectPassphraseException(
            string message,
            string paramName,
            in ImmutableArray<byte> expectedMac,
            in ImmutableArray<byte> inputMac
        )
            : base(
                $"{message}\nExpected MAC: {ByteUtil.Hex(expectedMac)}\n" +
                $"Input MAC: {ByteUtil.Hex(inputMac)}",
                paramName
            )
        {
            ExpectedMac = expectedMac;
            InputMac = inputMac;
        }

        /// <summary>
        /// The expected MAC of the correct passphrase.
        /// </summary>
        public ImmutableArray<byte> ExpectedMac { get; }

        /// <summary>
        /// The actual MAC of the user input passphrase.
        /// </summary>
        public ImmutableArray<byte> InputMac { get; }
    }
}
