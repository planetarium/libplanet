using System;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockTxHashException
        : InvalidBlockException, IEquatable<InvalidBlockTxHashException>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="blockTxHash">The hash digest of <see cref="Block.TxHash"/>.</param>
        /// <param name="calculatedTxHash">The calculated hash digest from
        /// <see cref="Block.Transactions"/>.</param>
        public InvalidBlockTxHashException(
            string message,
            HashDigest<SHA256>? blockTxHash,
            HashDigest<SHA256>? calculatedTxHash)
            : base(
                $"{message}\n" +
                $"In block header: {blockTxHash}\n" +
                $"Calculated: {calculatedTxHash}")
        {
            BlockTxHash = blockTxHash;
            CalculatedTxHash = calculatedTxHash;
        }

        /// <summary>
        /// The hash digest from actual block.
        /// </summary>
        public HashDigest<SHA256>? BlockTxHash { get; }

        /// <summary>
        /// The calculated hash digest from transactions in the block.
        /// </summary>
        public HashDigest<SHA256>? CalculatedTxHash { get; }

        public static bool operator ==(
            InvalidBlockTxHashException left,
            InvalidBlockTxHashException right
        ) => left.Equals(right);

        public static bool operator !=(
            InvalidBlockTxHashException left,
            InvalidBlockTxHashException right
        ) => !left.Equals(right);

        public bool Equals(InvalidBlockTxHashException? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Nullable.Equals(BlockTxHash, other.BlockTxHash) && Nullable.Equals(
                CalculatedTxHash,
                other.CalculatedTxHash);
        }

        public override bool Equals(object? obj) =>
            obj is InvalidBlockTxHashException other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(BlockTxHash, CalculatedTxHash);
    }
}
