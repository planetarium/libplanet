#nullable disable
using System.Security.Cryptography;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Libplanet cryptography configuration information.
    /// </summary>
    public static class CryptoConfig
    {
        private static ICryptoBackend<SHA256> _cryptoBackend;
        private static BlsCryptoBackend<SHA256> _consensusCryptoBackend;

        /// <summary>
        /// Global cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend<SHA256> CryptoBackend
        {
            get => _cryptoBackend ??= new DefaultCryptoBackend<SHA256>();
            set => _cryptoBackend = value;
        }

        /// <summary>
        /// Consensus cryptography backend to sign and verify messages.
        /// </summary>
        /// <remarks>Due to the usage of
        /// <see cref="BlsCryptoBackend{T}.AggregateVerify"/>,
        /// <see cref="BlsCryptoBackend{T}.FastAggregateVerify"/> and multiple native calls, it is
        /// defined as its type.
        /// <para>Use <see cref="BlsPublicKey"/>, <see cref="BlsPrivateKey"/> and
        /// <see cref="BlsSignature"/> if any other than <see cref="ICryptoBackend{T}.Verify"/> or
        /// <see cref="ICryptoBackend{T}.Sign"/> methods are required to use.
        /// </para>
        /// </remarks>
        public static BlsCryptoBackend<SHA256> ConsensusCryptoBackend
        {
            get => _consensusCryptoBackend ??= new BlsCryptoBackend<SHA256>();
            set => _consensusCryptoBackend = value;
        }
    }
}
