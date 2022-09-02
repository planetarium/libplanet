using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Crypto
{
    /// <summary>
    /// The interface of a public key. It allows to align the essential methods and
    /// uses, mainly <see cref="Verify"/> and <see cref="KeyBytes"/>.
    /// </summary>
    public interface IPublicKey
    {
        /// <summary>
        /// The <see cref="byte"/> representation of public key.
        /// </summary>
        ImmutableArray<byte> KeyBytes { get; }

        /// <summary>
        /// Verifies message with base public key method. See base verify method for detailed
        /// description about signing and possibly thrown exceptions.
        /// </summary>
        /// <param name="message">A message to verify.</param>
        /// <param name="signature">A signature to verify.</param>
        /// <returns>Returns <see langword="true"/> if given <paramref name="message"/> and
        /// <paramref name="signature"/> is valid, otherwise returns <see langword="false"/>.
        /// </returns>
        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature);
    }
}
