using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when the <see cref="ValidatorSet"/> already contains
    /// target <see cref="PublicKey"/> to promote.
    /// </summary>
    /// <seealso cref="IAccountStateDelta.PromoteValidator"/>
    [Serializable]
    public sealed class ValidatorAlreadyExistException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="ValidatorAlreadyExistException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="validatorKey">The <see cref="PublicKey"/> of the target validator
        /// to promote.</param>
        public ValidatorAlreadyExistException(
            string? message,
            PublicKey validatorKey
        )
            : base(message)
        {
            ValidatorKey = validatorKey;
        }

        private ValidatorAlreadyExistException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ValidatorKey = info.GetValue<PublicKey>(nameof(ValidatorKey));
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the target validator to promote.
        /// </summary>
        public PublicKey ValidatorKey { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ValidatorKey), ValidatorKey);
        }
    }
}
