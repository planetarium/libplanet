using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHashes : Message
    {
        public BlockHashes(IEnumerable<(long, HashDigest<SHA256>)> hashes)
        {
            Hashes = hashes.ToList();
        }

        public BlockHashes(NetMQFrame[] frames)
        {
            int hashCount = frames[0].ConvertToInt32();
            var hashes = new List<(long, HashDigest<SHA256>)>(hashCount);
            for (int i = 1, end = i + hashCount * 2; i < end; i += 2)
            {
                long index = frames[i].ConvertToInt64();
                HashDigest<SHA256> hash = frames[i + 1].ConvertToHashDigest<SHA256>();
                hashes.Add((index, hash));
            }

            Hashes = hashes;
        }

        public IEnumerable<(long, HashDigest<SHA256>)> Hashes { get; }

        protected override MessageType Type => MessageType.BlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Hashes.Count()));

                foreach ((long index, HashDigest<SHA256> hash) in Hashes)
                {
                    yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(index));
                    yield return new NetMQFrame(hash.ToByteArray());
                }
            }
        }
    }
}
