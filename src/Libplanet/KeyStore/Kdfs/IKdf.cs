#nullable disable
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Text.Json;

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

        /// <summary>
        /// Dumps the KDF parameters as a JSON representation.
        /// </summary>
        /// <param name="writer">A JSON writer which has not begun object nor array.</param>
        /// <returns>A unique identifier of the KDF.  This is going to be the
        /// <c>crypto.kdf</c> field in the key JSON file.</returns>
        string WriteJson(Utf8JsonWriter writer);
    }
}
