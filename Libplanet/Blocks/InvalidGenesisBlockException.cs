using System.Diagnostics.Contracts;
using Libplanet.Blockchain;
using Libplanet.Store;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when the genesis block the <see cref="IStore"/> contains
    /// mismatches to the genesis block the <see cref="BlockChain{T}"/> constructor (i.e., network)
    /// expects or the first block of <see cref="BlockLocator"/> which the <see cref="IStore"/>
    /// doesn't contain, because the block which <see cref="IStore"/> doesn't means
    /// the genesis block in other network.
    /// </summary>
    public class InvalidGenesisBlockException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidGenesisBlockException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="networkExpected">The genesis block that the network expects.</param>
        /// <param name="stored">The genesis block that a local <see cref="IStore"/> contains.
        /// </param>
        public InvalidGenesisBlockException(
            string message,
            BlockHash networkExpected,
            BlockHash stored
        )
            : base(message)
        {
            NetworkExpected = networkExpected;
            Stored = stored;
        }

        /// <summary>
        /// The genesis block that the network expects.
        /// </summary>
        [Pure]
        public BlockHash NetworkExpected { get; }

        /// <summary>
        /// The genesis block that a local <see cref="IStore"/> contains.
        /// </summary>
        [Pure]
        public BlockHash Stored { get; }
    }
}
