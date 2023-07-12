using System.Security.Cryptography;

namespace Libplanet.Common.Crypto
{
    /// <summary>
    /// Libplanet cryptography configuration information.
    /// </summary>
    public static class CryptoConfig
    {
        private static ICryptoBackend<SHA256>? _cryptoBackend;

        /// <summary>
        /// Global cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend<SHA256> CryptoBackend
        {
            get => _cryptoBackend ??= new DefaultCryptoBackend<SHA256>();
            set => _cryptoBackend = value;
        }
    }
}
