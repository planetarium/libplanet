using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    public abstract class ConsensusMessage : Message
    {
        protected const byte Nil = 0x00;

        protected ConsensusMessage(long height, int round, BlockHash? blockHash)
        {
            Round = round;
            Height = height;
            BlockHash = blockHash;
        }

        protected ConsensusMessage(byte[][] dataframes)
        {
            Height = BitConverter.ToInt64(dataframes[0], 0);
            Round = BitConverter.ToInt32(dataframes[1], 0);
            if (dataframes[2].Length == 1 && dataframes[2][0] == Nil)
            {
                BlockHash = null;
            }
            else
            {
                BlockHash = new BlockHash(dataframes[2]);
            }
        }

        public long Height { get; }

        public int Round { get; }

        public BlockHash? BlockHash { get; }

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(Height),
            BitConverter.GetBytes(Round),
            BlockHash is { } blockHash ? blockHash.ToByteArray() : new[] { Nil },
        };
    }
}
