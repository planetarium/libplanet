using System;

namespace Libplanet.Store
{
    /// <summary>
    /// The exception that is thrown when a chain ID does not exist in
    /// an <see cref="Libplanet.Store.IStore"/> object.
    /// </summary>
    [Serializable]
    public sealed class ChainIdNotFoundException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ChainIdNotFoundException"/> class.
        /// </summary>
        /// <param name="chainId">The ID of the chain not found.</param>
        /// <param name="message">The message that describes the error.</param>
        public ChainIdNotFoundException(Guid chainId, string message)
            : base($"{chainId}: {message}")
        {
            ChainId = chainId;
        }

        /// <summary>
        /// Gets the ID of the chain not found.
        /// </summary>
        public Guid ChainId { get; }
    }
}
