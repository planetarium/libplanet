using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Stun.Attributes;

namespace Libplanet.Stun.Messages
{
    public abstract class StunMessage
    {
        private const int HeaderBytes = 20;
        private const int MessageIntegrityBytes = 24;
        private const int FingerprintBytes = 8;

        protected StunMessage()
        {
            var transactionId = new byte[12];
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(transactionId);
            }

            TransactionId = transactionId;
        }

        // TODO Should document following STUN / TURN RFC
        // https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml
        #pragma warning disable SA1602
        public enum MessageClass : byte
        {
            Request = 0x0,
            Indication = 0x1,
            SuccessResponse = 0x2,
            ErrorResponse = 0x3,
        }

        public enum MessageMethod : ushort
        {
            Binding = 0x001,
            Allocate = 0x003,
            Refresh = 0x004,
            Send = 0x006,
            Data = 0x007,
            CreatePermission = 0x008,
            ChannelBind = 0x009,
            Connect = 0x00a,
            ConnectionBind = 0x00b,
            ConnectionAttempt = 0x00c,
        }
        #pragma warning restore SA1602

        /// <summary>
        /// A <see cref="MessageClass"/> of STUN packet.
        /// </summary>
        public abstract MessageClass Class { get; }

        /// <summary>
        /// A <see cref="MessageMethod"/> of STUN packet.
        /// </summary>
        public abstract MessageMethod Method { get; }

        /// <summary>
        /// A 96-bit length identifier, used to uniquely identify STUN transactions.
        /// </summary>
        public byte[] TransactionId { get; internal set; }

        /// <summary>
        /// A fixed value to distinguish STUN packets from packets of another protocol.
        /// </summary>
        /// <remarks>It should be always 0x2112A442 in network byte order.</remarks>
        internal static byte[] MagicCookie => new byte[]
        {
            0x21, 0x12, 0xa4, 0x42,
        };

        /// <summary>
        /// A list of <see cref="Attribute"/> of STUN packet.
        /// </summary>
        protected IEnumerable<Attribute> Attributes { get; set; }

        /// <summary>
        /// Parse <see cref="StunMessage"/> from <paramref name="stream"/>.
        /// </summary>
        /// <param name="stream">A view of a sequence of STUN packet's bytes.</param>
        /// <returns>A <see cref="StunMessage"/> derived on
        /// bytes read from <paramref name="stream"/>.
        /// </returns>
        public static async Task<StunMessage> Parse(Stream stream)
        {
            var header = new byte[20];
            await stream.ReadAsync(header, 0, 20);

            MessageMethod method = ParseMethod(header[0], header[1]);
            MessageClass @class = ParseClass(header[0], header[1]);

            var length = new byte[2];
            System.Array.Copy(header, 2, length, 0, 2);

            var transactionId = new byte[12];
            System.Array.Copy(header, 8, transactionId, 0, 12);

            var body = new byte[length.ToUShort()];
            await stream.ReadAsync(body, 0, body.Length);
            IEnumerable<Attribute> attributes = ParseAttributes(
                body,
                transactionId
            );

            StunMessage rv = null;
            switch (@class)
            {
                case MessageClass.SuccessResponse:
                    switch (method)
                    {
                        case MessageMethod.Allocate:
                            rv = new AllocateSuccessResponse();
                            break;
                        case MessageMethod.Connect:
                            rv = new ConnectSuccessResponse();
                            break;
                        case MessageMethod.ConnectionBind:
                            rv = new ConnectionBindSuccessResponse();
                            break;
                        case MessageMethod.Binding:
                            rv = new BindingSuccessResponse();
                            break;
                        case MessageMethod.CreatePermission:
                            rv = new CreatePermissionSuccessResponse();
                            break;
                        case MessageMethod.Refresh:
                            rv = new RefreshSuccessResponse();
                            break;
                    }

                    break;

                case MessageClass.ErrorResponse:
                    switch (method)
                    {
                        case MessageMethod.Allocate:
                            rv = new AllocateErrorResponse();
                            break;
                        case MessageMethod.CreatePermission:
                            rv = new CreatePermissionErrorResponse();
                            break;
                        case MessageMethod.Refresh:
                            rv = new RefreshErrorResponse();
                            break;
                    }

                    break;

                case MessageClass.Indication:
                    switch (method)
                    {
                        case MessageMethod.ConnectionAttempt:
                            rv = new ConnectionAttempt();
                            break;
                    }

                    break;
            }

            if (rv != null)
            {
                rv.TransactionId = transactionId;
                rv.Attributes = attributes;
            }

            return rv;
        }

        public byte[] Encode(IStunContext ctx)
        {
            bool useMessageIntegrity =
                !string.IsNullOrEmpty(ctx?.Username) &&
                !string.IsNullOrEmpty(ctx?.Password) &&
                !string.IsNullOrEmpty(ctx?.Realm);

            var c = (ushort)Class;
            var m = (ushort)Method;
            int type =
                (m & 0x0f80) << 2 |
                (m & 0x0070) << 1 |
                (m & 0x000f) << 0 |
                (c & 0x2) << 7 |
                (c & 0x1) << 4;

            using (var ms = new MemoryStream())
            {
                List<Attribute> attrs = Attributes.ToList();

                if (!string.IsNullOrEmpty(ctx?.Username))
                {
                    attrs.Add(new Username(ctx.Username));
                }

                if (ctx?.Nonce != null)
                {
                    attrs.Add(new Attributes.Nonce(ctx.Nonce));
                }

                if (!string.IsNullOrEmpty(ctx?.Realm))
                {
                    attrs.Add(new Realm(ctx.Realm));
                }

                byte[] encodedAttrs;
                using (var ams = new MemoryStream())
                {
                    foreach (Attribute attr in attrs)
                    {
                        byte[] asBytes = attr.ToByteArray(TransactionId);
                        ams.Write(asBytes, 0, asBytes.Length);
                    }

                    encodedAttrs = ams.ToArray();
                }

                // 8 bytes for Fingerprint
                var messageLength =
                    (ushort)(encodedAttrs.Length + FingerprintBytes);

                if (useMessageIntegrity)
                {
                    messageLength += MessageIntegrityBytes;
                }

                ms.Write(((ushort)type).ToBytes(), 0, 2);
                ms.Write(messageLength.ToBytes(), 0, 2);
                ms.Write(MagicCookie, 0, MagicCookie.Length);
                ms.Write(TransactionId, 0, TransactionId.Length);
                ms.Write(encodedAttrs, 0, encodedAttrs.Length);

                if (useMessageIntegrity)
                {
                    var lengthWithoutFingerprint =
                        (ushort)(messageLength - FingerprintBytes);
                    byte[] toCalc = ms.ToArray();
                    lengthWithoutFingerprint.ToBytes().CopyTo(toCalc, 2);

                    MessageIntegrity mi =
                        MessageIntegrity.Calculate(
                            ctx?.Username,
                            ctx?.Password,
                            ctx?.Realm,
                            toCalc);
                    ms.Write(mi.ToByteArray(), 0, MessageIntegrityBytes);
                }

                Fingerprint fingerprint = Fingerprint.FromMessage(
                    ms.ToArray()
                );
                ms.Write(fingerprint.ToByteArray(), 0, FingerprintBytes);

                return ms.ToArray();
            }
        }

        internal static IEnumerable<Attribute> ParseAttributes(
            IEnumerable<byte> bytes,
            byte[] transactionId = null
        )
        {
            while (bytes.Any())
            {
                var type = (Attribute.AttributeType)bytes.Take(2).ToUShort();
                ushort length = bytes.Skip(2).Take(2).ToUShort();
                byte[] payload = bytes.Skip(4).Take(length).ToArray();

                switch (type)
                {
                    case Attribute.AttributeType.ErrorCode:
                        yield return ErrorCode.Parse(payload);
                        break;
                    case Attribute.AttributeType.Realm:
                        yield return Realm.Parse(payload);
                        break;
                    case Attribute.AttributeType.Nonce:
                        yield return Stun.Attributes.Nonce.Parse(payload);
                        break;
                    case Attribute.AttributeType.Software:
                        yield return Software.Parse(payload);
                        break;
                    case Attribute.AttributeType.Fingerprint:
                        yield return Fingerprint.Parse(payload);
                        break;
                    case Attribute.AttributeType.XorMappedAddress:
                        yield return XorMappedAddress.Parse(
                            payload, transactionId);
                        break;
                    case Attribute.AttributeType.XorRelayedAddress:
                        yield return XorRelayedAddress.Parse(
                            payload, transactionId);
                        break;
                    case Attribute.AttributeType.ConnectionId:
                        yield return new ConnectionId(payload);
                        break;
                    case Attribute.AttributeType.Lifetime:
                        yield return new Lifetime((int)payload.ToUInt());
                        break;
                }

                // Detect padding
                var padBytes = (ushort)((4 + length) % 4);
                if (padBytes > 0)
                {
                    length += padBytes;
                }

                bytes = bytes.Skip(4 + length);
            }
        }

        internal static MessageClass ParseClass(byte high, byte low)
        {
            ushort type = high;
            type = (ushort)(type << 8);
            type |= low;

            return (MessageClass)((type >> 7 | type >> 4) & 0x3);
        }

        internal static MessageMethod ParseMethod(byte high, byte low)
        {
            ushort type = high;
            type = (ushort)(type << 8);
            type |= low;

            return (MessageMethod)(
                (type & 0x3e00) >> 2 | (type & 0x00e0) >> 1 | (type & 0x000f));
        }

        protected T GetAttribute<T>()
            where T : Attribute
        {
            foreach (Attribute attr in Attributes)
            {
                if (attr is T asT)
                {
                    return asT;
                }
            }

            return null;
        }
    }
}
