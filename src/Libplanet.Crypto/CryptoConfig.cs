using System.Security.Cryptography;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Libplanet cryptography configuration information.
    /// </summary>
    public static class CryptoConfig
    {
        private static ICryptoBackend<SHA256>? _cryptoBackend;
        private static IConsensusCryptoBackend? _consensusCryptoBackend;

        /// <summary>
        /// Global cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend<SHA256> CryptoBackend
        {
            get => _cryptoBackend ??= new DefaultCryptoBackend<SHA256>();
            set => _cryptoBackend = value;
        }

        /// <summary>
        /// Global consensus cryptography backend to prove and verify messages.
        /// </summary>
        public static IConsensusCryptoBackend ConsensusCryptoBackend
        {
            get => _consensusCryptoBackend ??= new DefaultConsensusCryptoBackend();
            set => _consensusCryptoBackend = value;
        }
    }
}
