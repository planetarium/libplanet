using System.Diagnostics.Contracts;
using System.Security.Cryptography;
#pragma warning disable S1128 // Remove this unnecessary 'using'
using Libplanet.Blockchain;
using Libplanet.Store;
#pragma warning restore S1128 // Remove this unnecessary 'using'

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when the genesis block the <see cref="IStore"/> contains
    /// mismatches to the genesis block the <see cref="BlockChain{T}"/> constructor (i.e., network)
    /// expects.
    /// </summary>
    public class InvalidGenesisBlockException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidGenesisBlockException"/> class.
        /// </summary>
        /// <param name="networkExpected">The genesis block that the network expects.</param>
        /// <param name="stored">The genesis block that a local <see cref="IStore"/> contains.
        /// </param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidGenesisBlockException(
            HashDigest<SHA256> networkExpected,
            HashDigest<SHA256> stored,
            string message)
            : base(message)
        {
            NetworkExpected = networkExpected;
            Stored = stored;
        }

        /// <summary>
        /// The genesis block that the network expects.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> NetworkExpected { get; }

        /// <summary>
        /// The genesis block that a local <see cref="IStore"/> contains.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> Stored { get; }
    }
}
