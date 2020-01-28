using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHashes : Message
    {
        public BlockHashes(long? startIndex, IEnumerable<HashDigest<SHA256>> hashes)
            : base(LeaveTrail)
        {
            StartIndex = startIndex;
            Hashes = hashes.ToList();

            if (StartIndex is null && Hashes.Any())
            {
                throw new ArgumentNullException(
                    nameof(startIndex),
                    "The startIndex can be null iff hashes are empty."
                );
            }
            else if (!Hashes.Any() && !(StartIndex is null))
            {
                throw new ArgumentException(
                    "The startIndex has to be null if hashes are empty.",
                    nameof(startIndex)
                );
            }
        }

        public BlockHashes(NetMQFrame[] frames)
        {
            int hashCount = frames[0].ConvertToInt32();
            var hashes = new List<HashDigest<SHA256>>(hashCount);
            if (hashCount > 0)
            {
                StartIndex = frames[1].ConvertToInt64();
                for (int i = 2, end = hashCount + 2; i < end; i++)
                {
                    hashes.Add(frames[i].ConvertToHashDigest<SHA256>());
                }
            }

            Hashes = hashes;
        }

        /// <summary>
        /// The block index of the first hash in <see cref="Hashes"/>.
        /// It is <c>null</c> iff <see cref="Hashes"/> are empty.
        /// </summary>
        public long? StartIndex { get; }

        /// <summary>
        /// The continuous block hashes, from the lowest index to the highest index.
        /// </summary>
        public IEnumerable<HashDigest<SHA256>> Hashes { get; }

        protected override MessageType Type => MessageType.BlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Hashes.Count()));
                if (StartIndex is long offset)
                {
                    yield return new NetMQFrame(
                        NetworkOrderBitsConverter.GetBytes(offset));

                    foreach (HashDigest<SHA256> hash in Hashes)
                    {
                        yield return new NetMQFrame(hash.ToByteArray());
                    }
                }
            }
        }
    }
}
