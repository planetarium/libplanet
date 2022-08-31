using System;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An <see cref="Exception"/> that is thrown when a provided credential is invalid
    /// when signing an encoded <see cref="Message"/>.
    /// </summary>
    [Serializable]
    public class InvalidCredentialException : Exception
    {
        internal InvalidCredentialException(
            string message,
            IPublicKey expected,
            IPublicKey actual)
            : base(message)
        {
            Expected = expected;
            Actual = actual;
        }

        protected InvalidCredentialException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
            Expected = new PublicKey(info.GetValue<byte[]>(nameof(Expected)));
            Actual = new PublicKey(info.GetValue<byte[]>(nameof(Actual)));
        }

        public IPublicKey Expected { get; private set; }

        public IPublicKey Actual { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Expected), Expected.KeyBytes.ToArray());
            info.AddValue(nameof(Actual), Actual.KeyBytes.ToArray());
        }
    }
}
