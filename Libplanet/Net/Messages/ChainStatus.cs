using System.Collections.Generic;
using System.Numerics;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class ChainStatus : Message
    {
        public ChainStatus(long tipIndex, BigInteger totalDifficulty)
        {
            TipIndex = tipIndex;
            TotalDifficulty = totalDifficulty;
        }

        public ChainStatus(NetMQFrame[] body)
        {
            TipIndex = body[0].ConvertToInt64();
            TotalDifficulty = new BigInteger(body[1].ToByteArray());
        }

        public long TipIndex { get; }

        public BigInteger TotalDifficulty { get; }

        protected override MessageType Type => MessageType.ChainStatus;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex));
                yield return new NetMQFrame(TotalDifficulty.ToByteArray());
            }
        }
    }
}
