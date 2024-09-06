using System;
using System.Collections.Generic;
using System.Linq;
using Destructurama.Attributed;
using Libplanet.Types.Blocks;

namespace Libplanet.Net.Messages
{
    internal class BlockHashesMsg : MessageContent
    {
        public BlockHashesMsg(IEnumerable<BlockHash> hashes)
        {
            Hashes = hashes.ToList();
        }

        public BlockHashesMsg(byte[][] dataFrames)
        {
            int hashCount = BitConverter.ToInt32(dataFrames[0], 0);
            var hashes = new List<BlockHash>(hashCount);
            if (hashCount > 0)
            {
                for (int i = 1, end = hashCount + 1; i < end; i++)
                {
                    hashes.Add(new BlockHash(dataFrames[i]));
                }
            }

            Hashes = hashes;
        }

        /// <summary>
        /// The continuous block hashes, from the lowest index to the highest index.
        /// </summary>
        [LogAsScalar]
        public IEnumerable<BlockHash> Hashes { get; }

        public override MessageType Type => MessageType.BlockHashes;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Hashes.Count()));
                frames.AddRange(Hashes.Select(hash => hash.ToByteArray()));
                return frames;
            }
        }
    }
}
