using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using Libplanet.Net.Stun.Messages;

namespace Libplanet.Net.Stun.Attributes
{
    internal static class StunAddressExtension
    {
        private enum StunAf : byte
        {
            IpV4 = 0x01,
        }

        public static byte[] EncodeStunAddress(
            this IPEndPoint endpoint, byte[] transactionId
        )
        {
            uint cookie = StunMessage.MagicCookie.ToUInt();
            bool inTransaction = transactionId != null;

            ushort port = inTransaction
                ? (ushort)(endpoint.Port ^ (cookie >> 16))
                : (ushort)endpoint.Port;
            uint addr = inTransaction
                ? endpoint.Address.GetAddressBytes().ToUInt() ^ cookie
                : endpoint.Address.GetAddressBytes().ToUInt();

            using (var ms = new MemoryStream())
            {
                ms.WriteByte(0x00);
                if (endpoint.AddressFamily == AddressFamily.InterNetwork)
                {
                    ms.WriteByte((byte)StunAf.IpV4);
                    ms.Write(port.ToBytes(), 0, 2);
                    ms.Write(addr.ToBytes(), 0, 4);
                }

                // TODO support ipv6
                else
                {
                    throw new NotSupportedException();
                }

                return ms.ToArray();
            }
        }

        public static IPEndPoint DecodeStunAddress(
            this byte[] encoded, byte[] transactionId
        )
        {
            uint cookie = StunMessage.MagicCookie.ToUInt();
            bool inTransaction = transactionId != null;

            using (var ms = new MemoryStream(encoded))
            {
                ms.ReadByte();

                StunAf family = (StunAf)ms.ReadByte();
                var portBytes = new byte[2];
                ms.Read(portBytes, 0, 2);

                int port = inTransaction
                    ? (int)(portBytes.ToUShort() ^ (cookie >> 16))
                    : portBytes.ToUShort();

                switch (family)
                {
                    case StunAf.IpV4:
                        var addrBytes = new byte[4];
                        ms.Read(addrBytes, 0, 4);

                        uint addr = inTransaction
                            ? addrBytes.ToUInt() ^ cookie
                            : addrBytes.ToUInt();
                        return new IPEndPoint(
                            new IPAddress(addr.ToBytes()),
                            port);

                    default:
                        throw new InvalidStunAddressException(
                            $"Unknown address familiy {family}.");
                }
            }
        }
    }
}
