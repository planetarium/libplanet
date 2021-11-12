#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain.Policies;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// An exception thrown when <see cref="Block{T}.HashAlgorithm"/>
    /// does not match the one provided by <see cref="IBlockPolicy{T}"/>.
    /// </summary>
    [Serializable]
    public sealed class InvalidBlockHashAlgorithmTypeException : BlockPolicyViolationException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockTxCountException"/> class.
        /// </summary>
        /// <param name="message">The message that describes the error.</param>
        /// <param name="hashAlgorithm">The invalid <see cref="Block{T}.HashAlgorithm"/>
        /// according to <see cref="IBlockPolicy{T}"/>.</param>
        public InvalidBlockHashAlgorithmTypeException(
            string message,
            HashAlgorithmType hashAlgorithm
        )
            : base(message)
        {
            HashAlgorithmName = hashAlgorithm.ToString();
        }

        private InvalidBlockHashAlgorithmTypeException(
            SerializationInfo info, StreamingContext context)
            : base(info.GetString(nameof(Message)) ?? string.Empty)
        {
            HashAlgorithmName = info.GetValue<string>(nameof(HashAlgorithmName));
        }

        public string HashAlgorithmName { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(HashAlgorithmName), HashAlgorithmName);
        }
    }
}
