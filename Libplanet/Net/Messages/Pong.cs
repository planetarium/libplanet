using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    public class Pong : Message
    {
        public override MessageType Type => MessageType.Pong;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
