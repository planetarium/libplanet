namespace Libplanet.KeyStore
{
    /// <summary>
    /// The exception that is thrown when a key JSON is invalid, e.g., missing field.
    /// </summary>
    public class InvalidKeyJsonException : KeyJsonException
    {
        /// <summary>
        /// Creates a new <see cref="InvalidKeyJsonException"/> instance.
        /// </summary>
        /// <param name="message">A detailed exception message.</param>
        public InvalidKeyJsonException(string message)
            : base(message)
        {
        }
    }
}
