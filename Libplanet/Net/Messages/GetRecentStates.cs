using System.Collections.Generic;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetRecentStates : Message
    {
        public GetRecentStates(HashDigest<SHA256> blockHash)
        {
            BlockHash = blockHash;
        }

        public GetRecentStates(NetMQFrame[] frames)
            : this(new HashDigest<SHA256>(frames[0].Buffer))
        {
        }

        public HashDigest<SHA256> BlockHash { get; }

        protected override MessageType Type => MessageType.GetRecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(BlockHash.ToByteArray());
            }
        }
    }
}
