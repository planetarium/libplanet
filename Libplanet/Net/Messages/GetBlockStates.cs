using System.Collections.Generic;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class GetBlockStates : Message
    {
        public GetBlockStates(HashDigest<SHA256> blockHash)
        {
            BlockHash = blockHash;
        }

        public GetBlockStates(NetMQFrame[] frames)
            : this(new HashDigest<SHA256>(frames[0].Buffer))
        {
        }

        public HashDigest<SHA256> BlockHash { get; }

        protected override MessageType Type => MessageType.GetBlockStates;

        protected override IEnumerable<NetMQFrame> DataFrames =>
            new[] { new NetMQFrame(BlockHash.ToByteArray()) };
    }
}
