using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public abstract class ConsensusMessage : Message
    {
        protected ConsensusMessage(long nodeId, long height, long round, BlockHash blockHash)
        {
            Round = round;
            Height = height;
            BlockHash = blockHash;
            NodeId = nodeId;
        }

        protected ConsensusMessage(byte[][] dataframes)
        {
            NodeId = BitConverter.ToInt64(dataframes[0], 0);
            Height = BitConverter.ToInt64(dataframes[1], 0);
            Round = BitConverter.ToInt64(dataframes[2], 0);
            BlockHash = new BlockHash(dataframes[3]);
        }

        public long Height { get; }

        public long Round { get; }

        public long NodeId { get; }

        public BlockHash BlockHash { get; }

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(NodeId),
            BitConverter.GetBytes(Height),
            BitConverter.GetBytes(Round),
            BlockHash.ToByteArray(),
        };
    }
}
