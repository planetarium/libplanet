using System;
using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusMessage : Message
    {
        protected const byte Nil = 0x00;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMessage"/> class.
        /// </summary>
        /// <param name="height">A <see cref="Context{T}.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context{T}.Round"/> the message is written for.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> the message is written for.</param>
        protected ConsensusMessage(long height, int round, BlockHash? blockHash)
        {
            Round = round;
            Height = height;
            BlockHash = blockHash;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMessage"/> class with marshalled
        /// message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
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

        /// <summary>
        /// A <see cref="Context{T}.Height"/> the message is written for.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A <see cref="Context{T}.Round"/> the message is written for.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// A <see cref="BlockHash"/> the message is written for.
        /// </summary>
        public BlockHash? BlockHash { get; }

        /// <summary>
        /// Gets the marshalled message in <see cref="byte"/> array.
        /// </summary>
        public override IEnumerable<byte[]> DataFrames => new[]
        {
            BitConverter.GetBytes(Height),
            BitConverter.GetBytes(Round),
            BlockHash is { } blockHash ? blockHash.ToByteArray() : new[] { Nil },
        };
    }
}
