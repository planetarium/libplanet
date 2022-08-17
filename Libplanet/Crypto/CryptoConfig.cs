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

        public static BlsCryptoBackend<SHA256> ConsensusCryptoBackend
        {
            get => _consensusCryptoBackend ??= new BlsCryptoBackend<SHA256>();
            set => _consensusCryptoBackend = value;
        }
    }
}
