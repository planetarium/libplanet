using System.Collections.Generic;
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class ChainStatus : Message, IBlockExcerpt
    {
        public ChainStatus(
            HashDigest<SHA256> genesisHash,
            long tipIndex,
            HashDigest<SHA256> tipHash,
            BigInteger totalDifficulty)
        {
            GenesisHash = genesisHash;
            TipIndex = tipIndex;
            TipHash = tipHash;
            TotalDifficulty = totalDifficulty;
        }

        public ChainStatus(NetMQFrame[] body)
        {
            GenesisHash = new HashDigest<SHA256>(body[0].Buffer);
            TipIndex = body[1].ConvertToInt64();
            TipHash = new HashDigest<SHA256>(body[2].Buffer);
            TotalDifficulty = new BigInteger(body[3].ToByteArray());
        }

        public HashDigest<SHA256> GenesisHash { get; }

        public long TipIndex { get; }

        public HashDigest<SHA256> TipHash { get; }

        public BigInteger TotalDifficulty { get; }

        long IBlockExcerpt.Index => TipIndex;

        HashDigest<SHA256> IBlockExcerpt.Hash => TipHash;

        protected override Message.MessageType Type => Message.MessageType.ChainStatus;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(GenesisHash.ToByteArray());
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex));
                yield return new NetMQFrame(TipHash.ToByteArray());
                yield return new NetMQFrame(TotalDifficulty.ToByteArray());
            }
        }
    }
}
