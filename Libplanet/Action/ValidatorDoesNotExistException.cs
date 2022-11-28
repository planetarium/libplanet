using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when the <see cref="ValidatorSet"/> does not contains
    /// target <see cref="PublicKey"/> to demote.
    /// </summary>
    /// <seealso cref="IAccountStateDelta.DemoteValidator"/>
    [Serializable]
    public sealed class ValidatorDoesNotExistException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="ValidatorDoesNotExistException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="validatorKey">The <see cref="PublicKey"/> of the target validator
        /// to demote.</param>
        public ValidatorDoesNotExistException(
            string? message,
            PublicKey validatorKey
        )
            : base(message)
        {
            ValidatorKey = validatorKey;
        }

        private ValidatorDoesNotExistException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ValidatorKey = info.GetValue<PublicKey>(nameof(ValidatorKey));
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the target validator to demote.
        /// </summary>
        public PublicKey ValidatorKey { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ValidatorKey), ValidatorKey);
        }
    }
}
