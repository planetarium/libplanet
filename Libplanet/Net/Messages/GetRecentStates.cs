using System.Collections.Generic;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetRecentStates : Message
    {
        public GetRecentStates(HashDigest<SHA256>? @base, HashDigest<SHA256> target)
        {
            BaseBlockHash = @base;
            TargetBlockHash = target;
        }

        public GetRecentStates(NetMQFrame[] frames)
            : this(
                frames.Length > 1
                    ? new HashDigest<SHA256>(frames[1].Buffer)
                    : (HashDigest<SHA256>?)null,
                new HashDigest<SHA256>(frames[0].Buffer)
            )
        {
        }

        public HashDigest<SHA256>? BaseBlockHash { get; }

        public HashDigest<SHA256> TargetBlockHash { get; }

        protected override MessageType Type => MessageType.GetRecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(TargetBlockHash.ToByteArray());
                if (BaseBlockHash is HashDigest<SHA256> @base)
                {
                    yield return new NetMQFrame(@base.ToByteArray());
                }
            }
        }
    }
}
