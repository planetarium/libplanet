namespace Libplanet.Crypto
{
    /// <summary>
    /// Libplanet cryptography configuration information.
    /// </summary>
    public static class CryptoConfig
    {
        private static ICryptoBackend _cryptoBackend;

        /// <summary>
        /// Global cryptography backend to sign and verify messages.
        /// </summary>
        public static ICryptoBackend CryptoBackend
        {
            get => _cryptoBackend ?? (_cryptoBackend = new DefaultCryptoBackend());
            set => _cryptoBackend = value;
        }
    }
}
