using System.Collections.Generic;
using System.Numerics;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong()
        {
        }

        public Pong(long tipIndex, BigInteger totalDifficulty)
        {
            TipIndex = tipIndex;
            TotalDifficulty = totalDifficulty;
        }

        public Pong(NetMQFrame[] body)
        {
            TipIndex = body[0].ConvertToInt64();

            if (TipIndex < 0)
            {
                TipIndex = null;
            }

            TotalDifficulty = new BigInteger(body[1].ToByteArray());
        }

        public long? TipIndex { get; set; }

        public BigInteger? TotalDifficulty { get; set; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex ?? -1));
                yield return new NetMQFrame((TotalDifficulty ?? 0).ToByteArray());
            }
        }
    }
}
