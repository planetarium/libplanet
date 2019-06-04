using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetBlocks : Message
    {
        public GetBlocks(
            IEnumerable<HashDigest<SHA256>> hashes,
            int chunkSize = 500)
        {
            if (chunkSize <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(chunkSize),
                    "Chunk size must be greater than 0.");
            }

            BlockHashes = hashes;
            ChunkSize = chunkSize;
        }

        public GetBlocks(NetMQFrame[] frames)
        {
            int hashCount = frames[0].ConvertToInt32();
            BlockHashes = frames
                .Skip(1).Take(hashCount)
                .Select(f => f.ConvertToHashDigest<SHA256>())
                .ToList();
            ChunkSize = frames[1 + hashCount].ConvertToInt32();
        }

        public IEnumerable<HashDigest<SHA256>> BlockHashes { get; }

        public int ChunkSize { get; }

        protected override MessageType Type => MessageType.GetBlocks;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(BlockHashes.Count()));

                foreach (HashDigest<SHA256> hash in BlockHashes)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }

                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(ChunkSize));
            }
        }
    }
}
