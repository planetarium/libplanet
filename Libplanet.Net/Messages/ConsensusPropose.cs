using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(
            long nodeId,
            long height,
            long round,
            BlockHash blockHash,
            byte[] payload)
        : base(nodeId, height, round, blockHash)
        {
            Payload = payload;
        }

        public ConsensusPropose(byte[][] dataframes)
        : base(dataframes)
        {
            Payload = dataframes[4];
        }

        public byte[] Payload { get; }

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>
                {
                    BitConverter.GetBytes(NodeId),
                    BitConverter.GetBytes(Height),
                    BitConverter.GetBytes(Round),
                    BlockHash.ToByteArray(),
                    Payload,
                };
                return frames;
            }
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
