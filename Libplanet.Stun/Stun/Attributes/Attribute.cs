using System.IO;

namespace Libplanet.Stun.Attributes
{
    public abstract class Attribute
    {
        /// <summary>
        /// A enum type of classes inherited <see cref="Attribute"/>.
        /// </summary>
        /// <remarks>
        /// https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml.
        /// </remarks>
        public enum AttributeType : ushort
        {
            /// <summary>
            /// <see cref="Attribute"/> used for message integrity. It identifies the username and
            /// password combination.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.3
            /// </remarks>
            Username = 0x0006,

            /// <summary>
            /// <see cref="Attribute"/> contains an HMAC-SHA1 of the STUN message.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.4.
            /// </remarks>
            MessageIntegrity = 0x0008,

            /// <summary>
            /// <see cref="Attribute"/> contains a numeric error code value in range of 300 to 699
            /// and a textual reason phrase encoded in UTF-8.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.6
            /// </remarks>
            ErrorCode = 0x0009,

            /// <summary>
            /// <see cref="Attribute"/> specifies the address and port of the peer as seen from the
            /// TURN server, obfuscated through the XOR function.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5766#section-14.3
            /// </remarks>
            XorPeerAddress = 0x0012,

            /// <summary>
            /// <see cref="Attribute"/> contains an unquoted realm-value, UTF-8 encoded sequence of
            /// less than 128 characters. If this attribute presences in a request, there was used
            /// long-term credentials for authentication. And it is to wish the clien to use
            /// long-term credentials for authentication if there is this attribute
            /// in certain error-response.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.7
            /// </remarks>
            Realm = 0x0014,

            /// <summary>
            /// <see cref="Attribute"/> contains a sequence of qdtext of quoted-pair and
            /// protects replay attacks.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.8
            /// </remarks>
            Nonce = 0x0015,

            /// <summary>
            /// <see cref="Attribute"/> in allocate-responses, specifies the address and port than
            /// the server allocated to the client, obfuscated through the XOR function.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5766#section-14.5
            /// </remarks>
            XorRelayedAddress = 0x0016,

            /// <summary>
            /// <see cref="Attribute"/> used by the client to request a specific transport protocol
            /// for the allocated transport address.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5766#section-14.7
            /// </remarks>
            RequestedTransport = 0x0019,

            /// <summary>
            /// <see cref="Attribute"/> indicates a reflexive transport address obfuscated through
            /// the XOR function.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.2
            /// </remarks>
            XorMappedAddress = 0x0020,

            /// <summary>
            /// <see cref="Attribute"/> uniquely indentifies a peer data connection.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc6062#section-6.2.1
            /// </remarks>
            ConnectionId = 0x002a,

            /// <summary>
            /// <see cref="Attribute"/> represents the duration for which the server will maintain
            /// an allocation in the absence of a refresh.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5766#section-14.2
            /// </remarks>
            Lifetime = 0x000d,

            /// <summary>
            /// <see cref="Attribute"/> contains a textual description of the software being used by
            /// the agent sending the message. It should include manufacturer and version number.
            /// Also it has no impact on operation of the protocol, and serves only as a tool for
            /// diagnostic and debugging purposes.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.10
            /// </remarks>
            Software = 0x8022,

            /// <summary>
            /// <see cref="Attribute"/> may be present in all STUN messages.
            /// It has the value computed as the CRC-32 of the STUN message.
            /// Also it aids in distinguishing STUN packets from packets of other protocols.
            /// </summary>
            /// <remarks>
            /// https://tools.ietf.org/html/rfc5389#section-15.5
            /// </remarks>
            Fingerprint = 0x8028,
        }

        public abstract AttributeType Type { get; }

        public byte[] ToByteArray(byte[] transactionId = null)
        {
            var payload = EncodePayload(transactionId);
            using (var ms = new MemoryStream())
            {
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
        }

        protected abstract byte[] EncodePayload(byte[] transactionId);
    }
}
