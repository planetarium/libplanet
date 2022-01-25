using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    public class Ping : Message
    {
        public override MessageType Type => MessageType.Ping;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
