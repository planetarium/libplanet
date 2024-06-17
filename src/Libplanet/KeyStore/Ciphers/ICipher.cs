#nullable disable
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Text.Json;

namespace Libplanet.KeyStore.Ciphers
{
    /// <summary>
    /// An interface to define symmetric cipher algorithm.
    /// </summary>
    public interface ICipher
    {
        /// <summary>
        /// Encrypts the given <paramref name="plaintext"/> using the given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">A symmetric key.</param>
        /// <param name="plaintext">An immutable <see cref="byte"/> array to encrypt.</param>
        /// <returns>The ciphertext made from the <paramref name="plaintext"/>
        /// using the <paramref name="key"/>.</returns>
        [Pure]
        ImmutableArray<byte> Encrypt(
            in ImmutableArray<byte> key,
            in ImmutableArray<byte> plaintext
        );

        /// <summary>
        /// Decrypts the given <paramref name="ciphertext"/> using the given <paramref name="key"/>.
        /// </summary>
        /// <param name="key">A symmetric key.</param>
        /// <param name="ciphertext">An immutable <see cref="byte"/> array to decrypt.</param>
        /// <returns>The plain text decrypted from the <paramref name="ciphertext"/>
        /// using the <paramref name="key"/>.</returns>
        [Pure]
        ImmutableArray<byte> Decrypt(
            in ImmutableArray<byte> key,
            in ImmutableArray<byte> ciphertext
        );

        /// <summary>
        /// Dumps the cipher parameters as a JSON representation according to Ethereum's
        /// <a href="https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition">Web3
        /// Secret Storage Definition</a>.
        /// </summary>
        /// <param name="writer">A JSON writer which has not begun object nor array.</param>
        /// <returns>A unique identifier of the cipher algorithm.  This is going to be the
        /// <c>crypto.cipher</c> field in the key JSON file.</returns>
        string WriteJson(Utf8JsonWriter writer);
    }
}
