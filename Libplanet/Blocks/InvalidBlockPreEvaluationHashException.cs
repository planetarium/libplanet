#nullable enable
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
    [Equals]
    public class InvalidBlockPreEvaluationHashException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidBlockPreEvaluationHashException"/> class.
        /// </summary>
        /// <param name="actualPreEvaluationHash">The hash recorded as
        /// <see cref="Block{T}.PreEvaluationHash"/>.</param>
        /// <param name="expectedPreEvaluationHash">The hash calculated from the block except
        /// <see cref="Block{T}.StateRootHash"/>.</param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockPreEvaluationHashException(
            ImmutableArray<byte> actualPreEvaluationHash,
            ImmutableArray<byte> expectedPreEvaluationHash,
            string message)
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
        ) => Operator.Weave(left, right);

        public static bool operator !=(
            InvalidBlockPreEvaluationHashException left,
            InvalidBlockPreEvaluationHashException right
        ) => Operator.Weave(left, right);

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ActualPreEvaluationHash), ActualPreEvaluationHash.ToArray());
            info.AddValue(nameof(ExpectedPreEvaluationHash), ExpectedPreEvaluationHash.ToArray());
        }
    }
}
