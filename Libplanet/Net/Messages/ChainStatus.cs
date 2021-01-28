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
            int protocolVersion,
            HashDigest<SHA256> genesisHash,
            long tipIndex,
            HashDigest<SHA256> tipHash,
            BigInteger totalDifficulty)
        {
            ProtocolVersion = protocolVersion;
            GenesisHash = genesisHash;
            TipIndex = tipIndex;
            TipHash = tipHash;
            TotalDifficulty = totalDifficulty;
        }

        public ChainStatus(NetMQFrame[] body)
        {
            ProtocolVersion = body[0].ConvertToInt32();
            GenesisHash = new HashDigest<SHA256>(body[1].Buffer);
            TipIndex = body[2].ConvertToInt64();
            TipHash = new HashDigest<SHA256>(body[3].Buffer);
            TotalDifficulty = new BigInteger(body[4].ToByteArray());
        }

        public int ProtocolVersion { get; }

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
                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(ProtocolVersion));
                yield return new NetMQFrame(GenesisHash.ToByteArray());
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex));
                yield return new NetMQFrame(TipHash.ToByteArray());
                yield return new NetMQFrame(TotalDifficulty.ToByteArray());
            }
        }
    }
}
