using System.Collections.Immutable;
using System.Diagnostics.Contracts;

namespace Libplanet.KeyStore.Kdfs
{
    /// <summary>
    /// An interface to form key derivation functions (KDF) that are used to derive a valid
    /// cryptographic key from a user input passphrase (i.e., password).
    /// </summary>
    public interface IKdf
    {
        /// <summary>
        /// Derives a cryptographic key in <see cref="byte"/>s from a user input
        /// <paramref name="passphrase"/>.
        /// </summary>
        /// <param name="passphrase">A user input passphrase.</param>
        /// <returns>A derived cryptographic key.</returns>
        [Pure]
        ImmutableArray<byte> Derive(string passphrase);
    }
}
