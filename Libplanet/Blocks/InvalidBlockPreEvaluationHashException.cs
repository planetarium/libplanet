using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when the a <see cref="Block{T}"/>'s
    /// <see cref="Block{T}.PreEvaluationHash"/> is invalid.
    /// </summary>
    [Serializable]
    public class InvalidBlockPreEvaluationHashException
        : InvalidBlockException, IEquatable<InvalidBlockPreEvaluationHashException>
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidBlockPreEvaluationHashException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="actualPreEvaluationHash">The hash recorded as
        /// <see cref="Block{T}.PreEvaluationHash"/>.</param>
        /// <param name="expectedPreEvaluationHash">The hash calculated from the block except
        /// <see cref="Block{T}.StateRootHash"/>.</param>
        public InvalidBlockPreEvaluationHashException(
            string message,
            ImmutableArray<byte> actualPreEvaluationHash,
            ImmutableArray<byte> expectedPreEvaluationHash)
            : base(message)
        {
            ActualPreEvaluationHash = actualPreEvaluationHash;
            ExpectedPreEvaluationHash = expectedPreEvaluationHash;
        }

        private InvalidBlockPreEvaluationHashException(
            SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ActualPreEvaluationHash =
                info.GetValue<byte[]>(nameof(ActualPreEvaluationHash)).ToImmutableArray();
            ExpectedPreEvaluationHash =
                info.GetValue<byte[]>(nameof(ExpectedPreEvaluationHash)).ToImmutableArray();
        }

        /// <summary>
        /// The hash calculated from the block except <see cref="Block{T}.StateRootHash"/>.
        /// </summary>
        [Pure]
        public ImmutableArray<byte> ActualPreEvaluationHash { get; }

        /// <summary>
        /// The hash recorded as <see cref="Block{T}.PreEvaluationHash"/>.
        /// </summary>
        [Pure]
        public ImmutableArray<byte> ExpectedPreEvaluationHash { get; }

        public static bool operator ==(
            InvalidBlockPreEvaluationHashException left,
            InvalidBlockPreEvaluationHashException right
        ) => left.Equals(right);

        public static bool operator !=(
            InvalidBlockPreEvaluationHashException left,
            InvalidBlockPreEvaluationHashException right
        ) => !left.Equals(right);

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ActualPreEvaluationHash), ActualPreEvaluationHash.ToArray());
            info.AddValue(nameof(ExpectedPreEvaluationHash), ExpectedPreEvaluationHash.ToArray());
        }

        public bool Equals(InvalidBlockPreEvaluationHashException? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return ActualPreEvaluationHash.SequenceEqual(other.ActualPreEvaluationHash) &&
                   ExpectedPreEvaluationHash.SequenceEqual(other.ExpectedPreEvaluationHash) &&
                   Message.Equals(other.Message);
        }

        public override bool Equals(object? obj) =>
            obj is InvalidBlockPreEvaluationHashException other && Equals(other);

        public override int GetHashCode() =>
            HashCode.Combine(ActualPreEvaluationHash, ExpectedPreEvaluationHash, Message);
    }
}
