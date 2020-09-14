using System.Collections.Generic;
using System.Numerics;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class ChainStatus : Message
    {
        public ChainStatus(
            HashDigest<SHA256> genesisHash,
            long tipIndex,
            BigInteger totalDifficulty)
        {
            GenesisHash = genesisHash;
            TipIndex = tipIndex;
            TotalDifficulty = totalDifficulty;
        }

        public ChainStatus(NetMQFrame[] body)
        {
            GenesisHash = new HashDigest<SHA256>(body[0].Buffer);
            TipIndex = body[1].ConvertToInt64();
            TotalDifficulty = new BigInteger(body[2].ToByteArray());
        }

        public HashDigest<SHA256> GenesisHash { get; }

        public long TipIndex { get; }

        public BigInteger TotalDifficulty { get; }

        protected override MessageType Type => MessageType.ChainStatus;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(GenesisHash.ToByteArray());
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex));
                yield return new NetMQFrame(TotalDifficulty.ToByteArray());
            }
        }
    }
}
