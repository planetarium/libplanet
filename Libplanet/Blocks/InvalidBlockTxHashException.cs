using System;
using System.Runtime.Serialization;
using System.Security.Cryptography;

namespace Libplanet.Blocks
{
    [Serializable]
    public class InvalidBlockTxHashException
        : InvalidBlockException, IEquatable<InvalidBlockTxHashException>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="blockTxHash">The hash digest of <see cref="Block{T}.TxHash"/>.</param>
        /// <param name="calculatedTxHash">The calculated hash digest from
        /// <see cref="Block{T}.Transactions"/>.</param>
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

        protected InvalidBlockTxHashException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            if ((byte[])info.GetValue(nameof(BlockTxHash), typeof(byte[]))! is { } bTxHashBytes)
            {
                BlockTxHash = new HashDigest<SHA256>(bTxHashBytes);
            }

            if ((byte[])info.GetValue(nameof(CalculatedTxHash), typeof(byte[]))! is
                { } cTxHashBytes)
            {
                CalculatedTxHash = new HashDigest<SHA256>(cTxHashBytes);
            }
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

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BlockTxHash), BlockTxHash?.ToByteArray());
            info.AddValue(nameof(CalculatedTxHash), CalculatedTxHash?.ToByteArray());
        }

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
