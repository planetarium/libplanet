#nullable disable
using System.IO;

namespace Libplanet.Stun.Attributes
{
    public abstract class Attribute
    {
        /// <summary>
        /// Enum values that correspond to <see cref="Attribute"/> subclasses.
        /// </summary>
        /// <remarks>
        /// See also
        /// <a href="https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml">
        /// IANA STUN Attributes</a>.
        /// </remarks>
        public enum AttributeType : ushort
        {
            /// <summary>
            /// An <see cref="Attribute"/> used for message integrity, identifies a combination
            /// of username and password.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.3">RFC 5389</a>.
            /// </remarks>
            Username = 0x0006,

            /// <summary>
            /// An <see cref="Attribute"/> which contains an HMAC-SHA1 of the STUN message.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.4">RFC 5389</a>.
            /// </remarks>
            MessageIntegrity = 0x0008,

            /// <summary>
            /// An <see cref="Attribute"/> which contains a numeric error code value in range of
            /// 300 to 699 and a textual reason phrase encoded in UTF-8.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.6">RFC 5389</a>.
            /// </remarks>
            ErrorCode = 0x0009,

            /// <summary>
            /// An <see cref="Attribute"/> which specifies the address and port of the peer as seen
            /// from the TURN server, obfuscated through the XOR function.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5766#section-14.3">RFC 5766</a>.
            /// </remarks>
            XorPeerAddress = 0x0012,

            /// <summary>
            /// An <see cref="Attribute"/> which contains an unquoted realm-value, UTF-8 encoded
            /// sequence of less than 128 characters. If this attribute presences in a request,
            /// there was used long-term credentials for authentication. And it is to wish the
            /// client to use long-term credentials for authentication if there is this attribute
            /// in certain error-response.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.7">RFC 5389</a>.
            /// </remarks>
            Realm = 0x0014,

            /// <summary>
            /// An <see cref="Attribute"/> which contains a sequence of qdtext of quoted-pair and
            /// protects replay attacks.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.8">RFC 5389</a>.
            /// </remarks>
            Nonce = 0x0015,

            /// <summary>
            /// An <see cref="Attribute"/> in allocate-responses, which specifies the address and
            /// port than the server allocated to the client, obfuscated through the XOR function.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5766#section-14.5">RFC 5766</a>.
            /// </remarks>
            XorRelayedAddress = 0x0016,

            /// <summary>
            /// An <see cref="Attribute"/> used by the client to request a specific transport
            /// protocol for the allocated transport address.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5766#section-14.7">RFC 5766</a>.
            /// </remarks>
            RequestedTransport = 0x0019,

            /// <summary>
            /// An <see cref="Attribute"/> which indicates a reflexive transport address obfuscated
            /// through the XOR function.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.2">RFC 5389</a>.
            /// </remarks>
            XorMappedAddress = 0x0020,

            /// <summary>
            /// An <see cref="Attribute"/> which uniquely identifies a peer data connection.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc6062#section-6.2.1">RFC 6062</a>.
            /// </remarks>
            ConnectionId = 0x002a,

            /// <summary>
            /// An <see cref="Attribute"/> which represents the duration for which the server will
            /// maintain an allocation in the absence of a refresh.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5766#section-14.2">RFC 5766</a>.
            /// </remarks>
            Lifetime = 0x000d,

            /// <summary>
            /// An <see cref="Attribute"/> which contains a textual description of the software
            /// being used by the agent sending the message. It should include manufacturer and
            /// version number. Also it has no impact on operation of the protocol, and serves only
            /// as a tool for diagnostic and debugging purposes.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.10">RFC 5389</a>.
            /// </remarks>
            Software = 0x8022,

            /// <summary>
            /// An <see cref="Attribute"/> may be present in all STUN messages.
            /// It has the value computed as the CRC-32 of the STUN message.
            /// Also it aids in distinguishing STUN packets from packets of other protocols.
            /// </summary>
            /// <remarks>
            /// See also <a href="https://tools.ietf.org/html/rfc5389#section-15.5">RFC 5389</a>.
            /// </remarks>
            Fingerprint = 0x8028,
        }

        public abstract AttributeType Type { get; }

        public byte[] ToByteArray(byte[] transactionId = null)
        {
            var payload = EncodePayload(transactionId);
            using var ms = new MemoryStream();
            ms.Write(((ushort)Type).ToBytes(), 0, 2);
            ms.Write(((ushort)payload.Length).ToBytes(), 0, 2);
            ms.Write(payload, 0, payload.Length);

            // Fill padding
            while (ms.Position % 4 != 0)
            {
                ms.WriteByte(0x00);
            }

            return ms.ToArray();
        }

        protected abstract byte[] EncodePayload(byte[] transactionId);
    }
}
