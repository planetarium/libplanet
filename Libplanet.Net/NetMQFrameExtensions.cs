using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Tx;
using NetMQ;

namespace Libplanet.Net
{
    internal static class NetMQFrameExtensions
    {
        public static HashDigest<T> ConvertToHashDigest<T>(
            this NetMQFrame frame)
            where T : HashAlgorithm
        {
            return new HashDigest<T>(frame.ToByteArray());
        }

        public static BlockHash ConvertToBlockHash(this NetMQFrame frame) =>
            new BlockHash(frame.ToByteArray());

        public static TxId ConvertToTxId(this NetMQFrame frame)
        {
            return new TxId(frame.ToByteArray());
        }

        public static byte[] ToByteArray(this IEnumerable<NetMQFrame> frames)
        {
            using var stream = new MemoryStream();
            foreach (NetMQFrame frame in frames)
            {
                byte[] bytes = frame.ToByteArray();
                stream.Write(bytes, 0, bytes.Length);
            }

            return stream.ToArray();
        }
    }
}
