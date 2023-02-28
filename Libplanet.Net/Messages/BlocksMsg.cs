using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

namespace Libplanet.Net.Messages
{
    internal class BlocksMsg : MessageContent
    {
        /// <summary>
        /// Creates an instance of <see cref="BlocksMsg"/> with given <paramref name="payloads"/>.
        /// </summary>
        /// <param name="payloads">The payload for this <see cref="Message"/>.  The length
        /// should be twice the length of <see cref="Block{T}"/>s to send where even indices are
        /// encoded <see cref="Block{T}"/>s and odd indices are encoded <see cref="BlockCommit"/>s.
        /// </param>
        /// <exception cref="ArgumentException">Thrown when the length of
        /// <paramref name="payloads"/> is not even.</exception>
        public BlocksMsg(IEnumerable<byte[]> payloads)
        {
            var count = payloads.Count();
            if (count % 2 != 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(payloads)} must be of even length: {count}");
            }

            Payloads = payloads.ToList();
        }

        public BlocksMsg(byte[][] dataFrames)
        {
            var count = BitConverter.ToInt32(dataFrames.First(), 0);
            if (count % 2 != 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(dataFrames)} must be of even length: {count}");
            }

            Payloads = dataFrames.Skip(1).Take(count).ToList();
        }

        /// <summary>
        /// A <see cref="List{T}"/> of <see langword="byte"/> arrays representing the payload
        /// of this <see cref="Message"/>.  Even indices are encoded <see cref="Block{T}"/>s
        /// and odd indices are encoded <see cref="BlockCommit"/>s.
        /// </summary>
        /// <remarks>
        /// This is guaranteed to be of even length.
        /// </remarks>
        public List<byte[]> Payloads { get; }

        public override MessageType Type => MessageType.Blocks;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Payloads.Count));
                frames.AddRange(Payloads);
                return frames;
            }
        }
    }
}
