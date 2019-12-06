using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetRecentStates : Message
    {
        public GetRecentStates(
            BlockLocator baseLocator,
            HashDigest<SHA256> target,
            long offset)
        {
            BaseLocator = baseLocator;
            TargetBlockHash = target;
            Offset = offset;
        }

        public GetRecentStates(NetMQFrame[] frames)
            : this(
                new BlockLocator(frames.Skip(2).Select(f => new HashDigest<SHA256>(f.Buffer))),
                new HashDigest<SHA256>(frames[1].Buffer),
                frames[0].ConvertToInt64()
            )
        {
        }

        public BlockLocator BaseLocator { get; }

        public HashDigest<SHA256> TargetBlockHash { get; }

        public long Offset { get; }

        protected override MessageType Type => MessageType.GetRecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(Offset));
                yield return new NetMQFrame(TargetBlockHash.ToByteArray());
                foreach (HashDigest<SHA256> hash in BaseLocator)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }
            }
        }
    }
}
