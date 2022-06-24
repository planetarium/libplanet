using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public class ConsensusPropose : ConsensusMessage
    {
        public ConsensusPropose(
            long height,
            int round,
            BlockHash blockHash,
            byte[] payload,
            int validRound)
        : base(height, round, blockHash)
        {
            Payload = payload;
            ValidRound = validRound;
        }

        public ConsensusPropose(byte[][] dataframes)
        : base(dataframes)
        {
            Payload = dataframes[3];
            ValidRound = BitConverter.ToInt32(dataframes[4], 0);
        }

        public byte[] Payload { get; }

        public int ValidRound { get; }

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>
                {
                    BitConverter.GetBytes(Height),
                    BitConverter.GetBytes(Round),
                    BlockHash is { } blockHash ? blockHash.ToByteArray() : new[] { Nil },
                    Payload,
                    BitConverter.GetBytes(ValidRound),
                };
                return frames;
            }
        }

        public override MessageType Type => MessageType.ConsensusPropose;
    }
}
