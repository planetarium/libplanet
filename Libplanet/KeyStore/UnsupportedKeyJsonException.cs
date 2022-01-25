namespace Libplanet.KeyStore
{
    /// <summary>
    /// The exception that is thrown when a key JSON is valid but uses an unsupported feature,
    /// e.g., unsupported cipher algorithm.
    /// </summary>
    public class UnsupportedKeyJsonException : KeyJsonException
    {
        /// <summary>
        /// Creates a new <see cref="UnsupportedKeyJsonException"/> instance with a message.
        /// </summary>
        /// <param name="message">A detailed exception message.</param>
        public UnsupportedKeyJsonException(string message)
            : base(message)
        {
        }
    }
}
