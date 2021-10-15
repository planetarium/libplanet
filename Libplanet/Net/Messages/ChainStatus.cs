#nullable enable
using System;
using System.Collections.Generic;
using System.Numerics;
using Destructurama.Attributed;
using Libplanet.Blocks;

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

        public ChainStatus(byte[][] dataFrames)
        {
            ProtocolVersion = BitConverter.ToInt32(dataFrames[0], 0);
            GenesisHash = new BlockHash(dataFrames[1]);
            TipIndex = BitConverter.ToInt64(dataFrames[2], 0);
            TipHash = new BlockHash(dataFrames[3]);
            TotalDifficulty = new BigInteger(dataFrames[4]);
        }

        public int ProtocolVersion { get; }

        [LogAsScalar]
        public BlockHash GenesisHash { get; }

        public long TipIndex { get; }

        [LogAsScalar]
        public BlockHash TipHash { get; }

        public BigInteger TotalDifficulty { get; }

        long IBlockExcerpt.Index => TipIndex;

        [LogAsScalar]
        BlockHash IBlockExcerpt.Hash => TipHash;

        public override MessageType Type => MessageType.ChainStatus;

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(ProtocolVersion),
            GenesisHash.ToByteArray(),
            BitConverter.GetBytes(TipIndex),
            TipHash.ToByteArray(),
            TotalDifficulty.ToByteArray(),
        };
    }
}
