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
            Sender = sender;
            Hashes = hashes.ToList();
        }

        public BlockHashes(NetMQFrame[] frames)
        {
            Sender = new Address(frames[0].Buffer);
            int hashCount = frames[1].ConvertToInt32();
            Hashes = frames.Skip(2).Take(hashCount)
                .Select(f => f.ConvertToHashDigest<SHA256>())
                .ToList();
        }

        public IEnumerable<HashDigest<SHA256>> Hashes { get; }

        public Address Sender { get; }

        protected override MessageType Type => MessageType.BlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Sender.ToByteArray());

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
