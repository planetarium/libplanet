using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockHashes : Message
    {
        public BlockHashes(
            Address sender, IEnumerable<HashDigest<SHA256>> hashes)
        {
            Hashes = hashes.ToList();
        }

        public BlockHashes(NetMQFrame[] frames)
        {
            int hashCount = frames[0].ConvertToInt32();
            Hashes = frames.Skip(1).Take(hashCount)
                .Select(f => f.ConvertToHashDigest<SHA256>())
                .ToList();
        }

        public IEnumerable<HashDigest<SHA256>> Hashes { get; }

        protected override MessageType Type => MessageType.BlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Hashes.Count()));

                foreach (var hash in Hashes)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }
            }
        }
    }
}
