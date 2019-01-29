using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetBlocks : Message
    {
        public GetBlocks(IEnumerable<HashDigest<SHA256>> hashes)
        {
            BlockHashes = hashes;
        }

        public IEnumerable<HashDigest<SHA256>> BlockHashes { get; }

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
            }
        }

        internal static Message Parse(NetMQFrame[] frames)
        {
            int hashCount = frames[0].ConvertToInt32();
            IEnumerable<HashDigest<SHA256>> hashes = frames
                .Skip(1).Take(hashCount)
                .Select(f => f.ConvertToHashDigest<SHA256>())
                .ToList();

            return new GetBlocks(hashes);
        }
    }
}
