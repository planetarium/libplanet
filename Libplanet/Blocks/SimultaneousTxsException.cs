using System;
using System.Collections.Generic;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when a signer has more than one
    /// transactions in <see cref="Block{T}.Transactions"/>.
    /// </summary>
    [Serializable]
    public sealed class SimultaneousTxsException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="SimultaneousTxsException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="signers">Addresses of signers who have more than one
        /// transactions in <see cref="Block{T}.Transactions"/>.</param>
        public SimultaneousTxsException(
            string message,
            IEnumerable<Address> signers)
            : base($"{message}: Signers: {string.Join(", ", signers)}")
        {
            Signers = signers;
        }

        /// <summary>
        /// Gets the addresses of signers who have more than one transactions
        /// in <see cref="Block{T}.Transactions"/>.
        /// </summary>
        public IEnumerable<Address> Signers { get; }
    }
}
