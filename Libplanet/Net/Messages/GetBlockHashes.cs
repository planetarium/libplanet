using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetBlockHashes : Message
    {
        public GetBlockHashes(
            BlockLocator locator, HashDigest<SHA256>? stop)
        {
            Locator = locator;
            Stop = stop;
        }

        public GetBlockHashes(NetMQFrame[] frames)
        {
            int requestedHashCount = frames[0].ConvertToInt32();
            Locator = new BlockLocator(
                frames.Skip(1).Take(requestedHashCount)
                .Select(f => f.ConvertToHashDigest<SHA256>()));
            Stop = frames[1 + requestedHashCount].IsEmpty
                ? default(HashDigest<SHA256>?)
                : frames[1 + requestedHashCount].ConvertToHashDigest<SHA256>();
        }

        public BlockLocator Locator { get; }

        public HashDigest<SHA256>? Stop { get; }

        protected override MessageType Type => MessageType.GetBlockHashes;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Locator.Count()));

                foreach (HashDigest<SHA256> hash in Locator)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }

                if (Stop is HashDigest<SHA256> stop)
                {
                    yield return new NetMQFrame(stop.ToByteArray());
                }
                else
                {
                    yield return NetMQFrame.Empty;
                }
            }
        }
    }
}
