using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Tests;

public static class RandomExtensions
{
    public static byte[] NextBytes(this Random @this, int size)
    {
        var buffer = new byte[size];
        @this.NextBytes(buffer);
        return buffer;
    }

    public static TxId NextTxId(this Random @this) => new(@this.NextBytes(TxId.Size));

    public static Address NextAddress(this Random @this) => new(@this.NextBytes(Address.Size));

    public static HashDigest<T> NextHashDigest<T>(this Random @this)
        where T : HashAlgorithm
        => new(@this.NextBytes(HashDigest<T>.Size));

    public static BlockHash NextBlockHash(this Random @this)
        => new(@this.NextBytes(BlockHash.Size));

    public static IOrderedEnumerable<T> Shuffle<T>(this Random @this, IEnumerable<T> source)
        => source.OrderBy(_ => @this.Next());

    public static IOrderedEnumerable<T> Shuffle<T>(this IEnumerable<T> source, Random @this)
        => @this.Shuffle(source);
}
