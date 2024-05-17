using System;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Types.Blocks
{
    [Serializable]
    public class InvalidBlockEvidenceHashException
        : InvalidBlockException, IEquatable<InvalidBlockEvidenceHashException>
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockEvidenceHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="blockEvidenceHash">The hash digest of <see cref="Block.EvidenceHash"/>.
        /// </param>
        /// <param name="calculatedEvidenceHash">The calculated hash digest from
        /// <see cref="Block.Evidence"/>.</param>
        public InvalidBlockEvidenceHashException(
            string message,
            HashDigest<SHA256>? blockEvidenceHash,
            HashDigest<SHA256>? calculatedEvidenceHash)
            : base(
                $"{message}\n" +
                $"In block header: {blockEvidenceHash}\n" +
                $"Calculated: {calculatedEvidenceHash}")
        {
            BlockEvidenceHash = blockEvidenceHash;
            CalculatedEvidenceHash = calculatedEvidenceHash;
        }

        protected InvalidBlockEvidenceHashException(
            SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            if ((byte[])info.GetValue(nameof(BlockEvidenceHash), typeof(byte[]))! is
                { } bEvidenceHashBytes)
            {
                BlockEvidenceHash = new HashDigest<SHA256>(bEvidenceHashBytes);
            }

            if ((byte[])info.GetValue(nameof(CalculatedEvidenceHash), typeof(byte[]))! is
                { } cEvidenceHashBytes)
            {
                CalculatedEvidenceHash = new HashDigest<SHA256>(cEvidenceHashBytes);
            }
        }

        /// <summary>
        /// The hash digest from actual block.
        /// </summary>
        public HashDigest<SHA256>? BlockEvidenceHash { get; }

        /// <summary>
        /// The calculated hash digest from evidence in the block.
        /// </summary>
        public HashDigest<SHA256>? CalculatedEvidenceHash { get; }

        public static bool operator ==(
            InvalidBlockEvidenceHashException left,
            InvalidBlockEvidenceHashException right
        ) => left.Equals(right);

        public static bool operator !=(
            InvalidBlockEvidenceHashException left,
            InvalidBlockEvidenceHashException right
        ) => !left.Equals(right);

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(BlockEvidenceHash), BlockEvidenceHash?.ToByteArray());
            info.AddValue(nameof(CalculatedEvidenceHash), CalculatedEvidenceHash?.ToByteArray());
        }

        public bool Equals(InvalidBlockEvidenceHashException? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Nullable.Equals(BlockEvidenceHash, other.BlockEvidenceHash) && Nullable.Equals(
                CalculatedEvidenceHash,
                other.CalculatedEvidenceHash);
        }

        public override bool Equals(object? obj) =>
            obj is InvalidBlockEvidenceHashException other && Equals(other);

        public override int GetHashCode() =>
            HashCode.Combine(BlockEvidenceHash, CalculatedEvidenceHash);
    }
}
