using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Inventory : Message
    {
        public Inventory(
            IEnumerable<HashDigest<SHA256>> blockHashes)
        {
            BlockHashes = blockHashes;
        }

        // FIXME add discriminator to determine hash is tx or block.
        public IEnumerable<HashDigest<SHA256>> BlockHashes { get; }

        protected override MessageType Type => MessageType.Inventory;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(BlockHashes.Count()));

                foreach (var hash in BlockHashes)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }
            }
        }

        public static Message Parse(NetMQFrame[] frames)
        {
            int count = frames[0].ConvertToInt32();
            return new Inventory(
                frames.Skip(1).Take(count)
                .Select(f => f.ConvertToHashDigest<SHA256>())
                .ToList());
        }
    }
}
