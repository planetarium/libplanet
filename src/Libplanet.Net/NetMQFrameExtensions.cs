using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using NetMQ;

namespace Libplanet.Net;

internal static class NetMQFrameExtensions
{
    public static HashDigest<T> ConvertToHashDigest<T>(this NetMQFrame @this)
        where T : HashAlgorithm
        => new(@this.ToByteArray());

    public static BlockHash ConvertToBlockHash(this NetMQFrame @this) => new(@this.ToByteArray());

    public static TxId ConvertToTxId(this NetMQFrame @this) => new(@this.ToByteArray());

    public static byte[] ToByteArray(this IEnumerable<NetMQFrame> @this)
    {
        using var stream = new MemoryStream();
        foreach (var frame in @this)
        {
            var bytes = frame.ToByteArray();
            stream.Write(bytes, 0, bytes.Length);
        }

        return stream.ToArray();
    }
}
