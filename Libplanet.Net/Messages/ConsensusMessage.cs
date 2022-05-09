using System;
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    public abstract class ConsensusMessage : Message
    {
        protected ConsensusMessage(long nodeId, long height, long round, byte[] data)
        {
            Round = round;
            Height = height;
            Data = data;
            NodeId = nodeId;
        }

        protected ConsensusMessage(byte[][] dataframes)
        {
            NodeId = BitConverter.ToInt64(dataframes[0], 0);
            Height = BitConverter.ToInt64(dataframes[1], 0);
            Round = BitConverter.ToInt64(dataframes[2], 0);
            Data = dataframes[2];
        }

        public long Height { get; }

        public long Round { get; }

        public long NodeId { get; }

        public byte[] Data { get; }

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(NodeId),
            BitConverter.GetBytes(Height),
            BitConverter.GetBytes(Round),
            Data,
        };
    }
}
