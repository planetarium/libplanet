using System;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    public interface IMessageCodec<T>
    {
        /// <summary>
        /// Encodes the message to <see typeref="T"/>-typed instance with given
        /// <paramref name="privateKey"/> for signing.
        /// </summary>
        /// <param name="message">The message to encode.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign the encoded message.
        /// </param>
        /// <returns>A <see typeref="T"/> containing the signed <see cref="MessageContent"/>.
        /// </returns>
        /// <exception cref="InvalidCredentialException">Thrown when <paramref name="privateKey"/>'s
        /// <see cref="PublicKey"/> does not match that of <paramref name="message.Remote"/>.
        /// </exception>
        T Encode(Message message, PrivateKey privateKey);

        /// <summary>
        /// Decodes given <see typeref="T"/>-typed <paramref name="encoded"/> into
        /// <see cref="Message"/> and checks its validity.
        /// <seealso cref="Encode"/>
        /// </summary>
        /// <param name="encoded">A <see typeref="T"/>-typed instance to parse.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <returns>A <see cref="Message"/> parsed from <paramref name="encoded"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when empty <paramref name="encoded"/>
        /// is given.</exception>
        /// <exception cref="InvalidMessageSignatureException">Thrown when the signer of
        /// <paramref name="encoded"/> is invalid.</exception>
        Message Decode(
            T encoded,
            bool reply);
    }
}
