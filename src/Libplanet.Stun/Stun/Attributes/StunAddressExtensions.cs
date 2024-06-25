#nullable disable
using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using Libplanet.Stun.Messages;

namespace Libplanet.Stun.Attributes
{
    internal static class StunAddressExtensions
    {
        private enum StunAf : byte
        {
            IpV4 = 0x01,
            IpV6 = 0x02,
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
            byte[] portBytes = port.ToBytes();

            byte[] addrBytes;
            switch (endpoint.AddressFamily)
            {
                case AddressFamily.InterNetwork:
                    addrBytes = inTransaction
                        ? (endpoint.Address.GetAddressBytes().ToUInt() ^ cookie)
                        .ToBytes()
                        : endpoint.Address.GetAddressBytes().ToUInt().ToBytes();
                    break;

                case AddressFamily.InterNetworkV6:
                    if (transactionId is null)
                    {
                        throw new ArgumentNullException(nameof(transactionId));
                    }

                    addrBytes = new byte[16];
                    Buffer.BlockCopy(
                        StunMessage.MagicCookie,
                        0,
                        addrBytes,
                        0,
                        4);
                    Buffer.BlockCopy(
                        transactionId,
                        0,
                        addrBytes,
                        4,
                        12);

                    foreach (var index in Enumerable.Range(0, 16))
                    {
                        addrBytes[index] ^=
                            endpoint.Address.GetAddressBytes()[index];
                    }

                    break;

                default:
                    throw new NotSupportedException();
            }

            using var ms = new MemoryStream();
            ms.WriteByte(0x00);
            if (endpoint.AddressFamily == AddressFamily.InterNetwork)
            {
                ms.WriteByte((byte)StunAf.IpV4);
                ms.Write(portBytes, 0, 2);
                ms.Write(addrBytes, 0, 4);
            }
            else if (endpoint.AddressFamily == AddressFamily.InterNetworkV6)
            {
                ms.WriteByte((byte)StunAf.IpV6);
                ms.Write(portBytes, 0, 2);
                ms.Write(addrBytes, 0, 16);
            }
            else
            {
                throw new NotSupportedException();
            }

            return ms.ToArray();
        }

        public static IPEndPoint DecodeStunAddress(
            this byte[] encoded, byte[] transactionId
        )
        {
            uint cookie = StunMessage.MagicCookie.ToUInt();
            bool inTransaction = transactionId != null;

            using var ms = new MemoryStream(encoded);
            ms.ReadByte();

            StunAf family = (StunAf)ms.ReadByte();
            var portBytes = new byte[2];
            ms.Read(portBytes, 0, 2);

            int port = inTransaction
                ? (int)(portBytes.ToUShort() ^ (cookie >> 16))
                : portBytes.ToUShort();

            byte[] addrBytes = null;
            switch (family)
            {
                case StunAf.IpV4:
                    addrBytes = new byte[4];
                    ms.Read(addrBytes, 0, 4);

                    uint addr = inTransaction
                        ? addrBytes.ToUInt() ^ cookie
                        : addrBytes.ToUInt();
                    addrBytes = addr.ToBytes();
                    break;

                case StunAf.IpV6:
                    addrBytes = new byte[16];
                    ms.Read(addrBytes, 0, 16);

                    foreach (var index in
                        Enumerable.Range(0, 16))
                    {
                        addrBytes[index] ^= index < 4
                            ? StunMessage.MagicCookie[index]
                            : transactionId[index - 4];
                    }

                    break;

                default:
                    throw new InvalidStunAddressException(
                        $"Unknown address family {family}.");
            }

            return new IPEndPoint(
                new IPAddress(addrBytes),
                port);
        }
    }
}
