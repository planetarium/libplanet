using System;
using Libplanet.Crypto;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> that is thrown when a provided credential is invalid
    /// when signing an encoded <see cref="Message"/>.
    /// </summary>
    public class InvalidCredentialException : Exception
    {
        internal InvalidCredentialException(
            string message,
            PublicKey expected,
            PublicKey actual)
            : base(message)
        {
            Expected = expected;
            Actual = actual;
        }

        public PublicKey Expected { get; private set; }

        public PublicKey Actual { get; private set; }
    }
}
