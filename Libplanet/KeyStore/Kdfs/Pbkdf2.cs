using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;

namespace Libplanet.KeyStore.Kdfs
{
    /// <summary>
    /// <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
    /// </summary>
    /// <typeparam name="T">PRF (pseudorandom function) to use, e.g.,
    /// <see cref="Sha256Digest"/>.</typeparam>
    public sealed class Pbkdf2<T> : IKdf
        where T : GeneralDigest, new()
    {
        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
        /// </summary>
        /// <param name="iterations">The number of iterations desired.
        /// Corresponds to <c>c</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        public Pbkdf2(int iterations, byte[] salt, int keyLength)
            : this(iterations, ImmutableArray.Create(salt, 0, salt.Length), keyLength)
        {
        }

        /// <summary>
        /// Configures parameters of <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a>.
        /// </summary>
        /// <param name="iterations">The number of iterations desired.
        /// Corresponds to <c>c</c>.</param>
        /// <param name="salt">A cryptographic salt.</param>
        /// <param name="keyLength">The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.</param>
        public Pbkdf2(int iterations, in ImmutableArray<byte> salt, int keyLength)
        {
            Iterations = iterations;
            Salt = salt;
            KeyLength = keyLength;
        }

        /// <summary>
        /// The number of iterations desired.  Corresponds to <c>c</c>.
        /// </summary>
        public int Iterations { get; }

        /// <summary>
        /// The desired byte-length of the derived key.
        /// Corresponds to <c>dkLen</c> except that it's not bit-wise but byte-wise.
        /// </summary>
        public int KeyLength { get; }

        /// <summary>
        /// A cryptographic salt.
        /// </summary>
        public ImmutableArray<byte> Salt { get; }

        /// <inheritdoc/>
        [Pure]
        public ImmutableArray<byte> Derive(string passphrase)
        {
            var pdb = new Pkcs5S2ParametersGenerator(new T());
            pdb.Init(
                PbeParametersGenerator.Pkcs5PasswordToBytes(passphrase.ToCharArray()),
                Salt.ToBuilder().ToArray(),
                Iterations
            );
            var key = (KeyParameter)pdb.GenerateDerivedMacParameters(KeyLength * 8);
            return ImmutableArray.Create(key.GetKey(), 0, KeyLength);
        }
    }
}
