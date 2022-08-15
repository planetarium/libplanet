using System;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Assets
{
    /// <summary>
    /// The exception that is thrown when a non-native asset is tried to be used for system actions.
    /// </summary>
    [Serializable]
    public sealed class NonNativeTokenException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="NonNativeTokenException"/> instance.
        /// </summary>
        /// <param name="nonNativeToken">The non-native token which caused this exception.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        public NonNativeTokenException(Currency nonNativeToken, string? message = null)
            : base(message)
        {
            NonNativeToken = nonNativeToken;
        }

        private NonNativeTokenException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            NonNativeToken = info.GetValue<Currency>(nameof(NonNativeToken));
        }

        /// <summary>
        /// The non-native token which caused this exception.
        /// </summary>
        public Currency NonNativeToken { get; }

        /// <inheritdoc cref="Exception.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(NonNativeToken), NonNativeToken);
        }
    }
}
