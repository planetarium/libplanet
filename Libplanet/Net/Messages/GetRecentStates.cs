using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blockchain;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetRecentStates : Message
    {
        public GetRecentStates(BlockLocator baseLocator, HashDigest<SHA256> target)
        {
            BaseLocator = baseLocator;
            TargetBlockHash = target;
        }

        public GetRecentStates(NetMQFrame[] frames)
            : this(
                new BlockLocator(frames.Skip(1).Select(f => new HashDigest<SHA256>(f.Buffer))),
                new HashDigest<SHA256>(frames[0].Buffer)
            )
        {
        }

        public BlockLocator BaseLocator { get; }

        public HashDigest<SHA256> TargetBlockHash { get; }

        protected override MessageType Type => MessageType.GetRecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(TargetBlockHash.ToByteArray());
                foreach (HashDigest<SHA256> hash in BaseLocator)
                {
                    yield return new NetMQFrame(hash.ToByteArray());
                }
            }
        }
    }
}
