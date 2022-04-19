using System;
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    public abstract class ConsensusMessage : Message
    {
        protected ConsensusMessage(long nodeId, long round, byte[] data)
        {
            Round = round;
            Data = data;
            NodeId = nodeId;
        }

        protected ConsensusMessage(byte[][] dataframes)
        {
            NodeId = BitConverter.ToInt64(dataframes[0], 0);
            Round = BitConverter.ToInt64(dataframes[1], 0);
            Data = dataframes[2];
        }

        public long Round { get; }

        public long NodeId { get; }

        public byte[] Data { get; }

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(NodeId),
            BitConverter.GetBytes(Round),
            Data,
        };
    }
}
