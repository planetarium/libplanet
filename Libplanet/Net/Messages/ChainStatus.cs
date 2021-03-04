using System.Collections.Generic;
using System.Numerics;
using Libplanet.Blocks;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class ChainStatus : Message, IBlockExcerpt
    {
        public ChainStatus(
            int protocolVersion,
            BlockHash genesisHash,
            long tipIndex,
            BlockHash tipHash,
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
            GenesisHash = new BlockHash(body[1].Buffer);
            TipIndex = body[2].ConvertToInt64();
            TipHash = new BlockHash(body[3].Buffer);
            TotalDifficulty = new BigInteger(body[4].ToByteArray());
        }

        public int ProtocolVersion { get; }

        public BlockHash GenesisHash { get; }

        public long TipIndex { get; }

        public BlockHash TipHash { get; }

        public BigInteger TotalDifficulty { get; }

        long IBlockExcerpt.Index => TipIndex;

        BlockHash IBlockExcerpt.Hash => TipHash;

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
