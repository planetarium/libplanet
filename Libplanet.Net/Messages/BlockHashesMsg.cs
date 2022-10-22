using System;
using System.Collections.Generic;
using System.Linq;
using Destructurama.Attributed;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class BlockHashesMsg : Message
    {
        public BlockHashesMsg(long? startIndex, IEnumerable<BlockHash> hashes)
        {
            StartIndex = startIndex;
            Hashes = hashes.ToList();

            if (StartIndex is null == Hashes.Any())
            {
                throw new ArgumentException(
                    "The startIndex can be null iff hashes are empty.",
                    nameof(startIndex)
                );
            }
        }

        public BlockHashesMsg(byte[][] dataFrames)
        {
            int hashCount = BitConverter.ToInt32(dataFrames[0], 0);
            var hashes = new List<BlockHash>(hashCount);
            if (hashCount > 0)
            {
                StartIndex = BitConverter.ToInt64(dataFrames[1], 0);
                for (int i = 2, end = hashCount + 2; i < end; i++)
                {
                    hashes.Add(new BlockHash(dataFrames[i]));
                }
            }

            Hashes = hashes;
        }

        /// <summary>
        /// The block index of the first hash in <see cref="Hashes"/>.
        /// It is <see langword="null"/> iff <see cref="Hashes"/> are empty.
        /// </summary>
        public long? StartIndex { get; }

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
                if (StartIndex is { } offset)
                {
                    frames.Add(BitConverter.GetBytes(offset));
                    frames.AddRange(Hashes.Select(hash => hash.ToByteArray()));
                }

                return frames;
            }
        }
    }
}
